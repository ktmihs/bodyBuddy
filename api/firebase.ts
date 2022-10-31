import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  doc,
  getFirestore,
  collection,
  getDocs,
  where,
  query,
  addDoc,
  documentId,
  orderBy,
  getDoc,
  deleteDoc,
  updateDoc,
  limit,
  startAfter,
} from 'firebase/firestore/lite';
import { postingType, usertype, MakeQueryParam, commentType, reviewsType } from './firebase.type';
import { getStorage, getDownloadURL, ref, uploadString } from 'firebase/storage';
import firebaseConfig from '../firebase.setting';

let app: any;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();

const userCollection = collection(db, 'user');
const reviewsCollection = collection(db, 'reviews');
const trainerCollection = collection(db, 'trainer');
const communityCollection = collection(db, 'community');
const commentsCollection = collection(db, 'comments');
export const chatCollection = collection(db, 'chat');

export const makeQuery = ({ id, option, outerCollection, innerCollection }: MakeQueryParam) =>
  query(collection(db, `${outerCollection}/${id}/${innerCollection}`), orderBy(option));

// 공통 - 이메일로 유저 정보가져오기
export const getUserInfoByEmail = async (email: string) => {
  try {
    let userCollectionId = null;
    let userInfo = null;

    const q = query(userCollection, where('email', '==', email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      userCollectionId = doc.id;
      userInfo = doc.data();
    });

    return { id: userCollectionId, data: userInfo };
  } catch (e) {
    console.log(e);
  }
};

const getTrainerInfoByEmail = async (email: string) => {
  try {
    let trainerCollectionId = null;
    let trainerInfo = null;

    const q = query(trainerCollection, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      trainerCollectionId = doc.id;
      trainerInfo = doc.data();
    });

    return { id: trainerCollectionId, data: trainerInfo };
  } catch (e) {
    console.log(e);
  }
};

// 공통 - Collection ID로 회원 정보 가져오기
export const getUserInfoById = async (id: string) => {
  try {
    const docRef = doc(db, 'user', id);
    const docSnap = await getDoc(docRef);

    return docSnap.data();
  } catch (e) {
    console.log(e);
  }
};

// 공통 - Collection ID로 트레이너 정보 가져오기
export const getTrainerInfoById = async (id: string) => {
  try {
    const docRef = doc(db, 'trainer', id);
    const docSnap = await getDoc(docRef);

    return docSnap.data();
  } catch (e) {
    console.log(e);
  }
};

// 공통 - email로 유저와 트레이너 검색 (리턴 : Collection ID)
export const isExistUserOrTrainer = async (email: string) => {
  try {
    const userInfo = await getUserInfoByEmail(email);
    if (!userInfo?.id) {
      const trainerInfo = await getTrainerInfoByEmail(email);
      if (!trainerInfo?.id) return null;
      return { ...trainerInfo, type: 'trainer' };
    }
    return { ...userInfo, type: 'user' };
  } catch (e) {
    console.log(e);
  }
};

// 회원가입 - 닉네임 검사
export const checkIsNicknameDuplicated = async (nickname: string) => {
  try {
    let user = '';

    const q = query(userCollection, where('nickname', '==', nickname));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      user = doc.id;
    });

    if (user.length) {
      return true;
    }

    return false;
  } catch (e) {
    console.log(e);
  }
};

// 회원가입 - 일반 회원가입
export const signUpMember = async ({
  nickname,
  email,
  gender,
  city,
  district,
  signUpway,
}: usertype) => {
  try {
    await addDoc(collection(db, 'user'), {
      nickname,
      email,
      gender,
      city,
      district,
      signUpway,
      isWithdrawal: false,
      thumbnail: '',
    });
  } catch (e) {
    console.log(e);
  }
};

export const fetchUserNickname = async (id: string) => {
  try {
    const docRef = doc(db, 'user', id);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    return data ? data.nickname : '알 수 없음';
  } catch (e) {
    console.log(e);
  }
};

export const fetchPostingMetaInfo = async (postId: string) => {
  try {
    const q = query(commentsCollection, where('communityId', '==', postId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.length;
  } catch (e) {
    console.log(e);
  }
};

export const fetchPostingsByField = async (field: string, key: unknown) => {
  try {
    const q = key
      ? query(
          communityCollection,
          where('field', '==', field),
          orderBy('creationDate', 'desc'),
          startAfter(key),
          limit(5)
        )
      : query(
          communityCollection,
          where('field', '==', field),
          orderBy('creationDate', 'desc'),
          limit(10)
        );

    const querySnapshot = await getDocs(q);

    const promises = querySnapshot.docs.map((doc) => {
      let data = doc.data();
      return fetchUserNickname(data.userId)
        .then((result) => {
          data = {
            ...data,
            nickname: result,
          };
        })
        .then(() => fetchPostingMetaInfo(doc.id))
        .then((result) => {
          data = {
            ...data,
            id: doc.id,
            totalComments: result,
            creationDate: data.creationDate.toDate(),
          };
          return data;
        });
    });

    return Promise.all(promises).then((result) => ({
      result,
      key: querySnapshot.empty ? null : querySnapshot.docs[querySnapshot.docs.length - 1],
    }));
  } catch (e) {
    console.log(e);
  }
};

export const fetchPostingDetailById = async (postId: string) => {
  try {
    const docRef = doc(db, 'community', postId);
    const docSnap = await getDoc(docRef);
    let data = docSnap.data();
    data = {
      ...data,
      nickname: await fetchUserNickname(data?.userId),
      creationDate: data?.creationDate.toDate() + '',
    };
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchCommentsById = async (postId: string) => {
  try {
    const q = query(
      commentsCollection,
      where('communityId', '==', postId),
      orderBy('creationDate')
    );
    const querySnapshot = await getDocs(q);

    const promises = querySnapshot.docs.map((doc) => {
      let data = doc.data();
      return fetchUserNickname(data.userId).then((result) => {
        data = {
          id: doc.id,
          nickname: result,
          ...data,
          creationDate: data.creationDate.toDate(),
        };
        return data;
      });
    });
    return Promise.all(promises).then((result) => {
      return result;
    });
  } catch (e) {
    console.log(e);
  }
};

export const addCommunityPosting = async (posting: postingType) => {
  try {
    const promises = posting.images
      .filter((image) => image)
      .map((image) => {
        const name = `image${Date.now()}.jpg`;
        return uploadString(ref(storage, name), image.split(',')[1], 'base64').then(() => {
          return getDownloadURL(ref(storage, name));
        });
      });
    Promise.all(promises).then((result) => {
      addDoc(collection(db, 'community'), { ...posting, images: result });
    });
  } catch (e) {
    console.log(e);
  }
};

export const addReview = async (review: reviewsType) => {
  try {
    addDoc(collection(db, 'reviews'), review);
  } catch (e) {
    console.log(e);
  }
};

export const deleteReview = async (reviewId: string) => {
  try {
    await deleteDoc(doc(db, 'reviews', reviewId));
  } catch (e) {
    console.log(e);
  }
};

export const updateReview = async (reviewId: string, review: reviewsType) => {
  try {
    const docRef = doc(db, 'reviews', reviewId);
    updateDoc(docRef, {
      content: review.content,
      isActivation: review.isActivation,
      category: review.category,
      rating: review.rating,
    });
  } catch (e) {
    console.log(e);
  }
};

// 리뷰 가져오기 (일반 회원 프로필 페이지)
export const getMemberReviewsByEmail = async () => {
  try {
    const reviewList: any[] = [];

    const { id }: any = await getUserInfoByEmail('alswlkku@gmail.com');
    const q = query(reviewsCollection, where('userId', '==', id));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const data = { id: doc.id, ...doc.data() };
      reviewList.push(data);
    });

    return await Promise.all(
      reviewList?.map(async (reviewInfo) => {
        try {
          const { trainerId, creationDate } = reviewInfo;
          const trainerInfo = await getTrainerInfoById(trainerId);
          return {
            ...reviewInfo,
            creationDate: creationDate.toDate(),
            trainer: { ...trainerInfo },
          };
        } catch (e) {
          console.log(e);
        }
      })
    );
  } catch (e) {
    console.log(e);
  }
};

export const updateCommunityPosting = async (postId: string, posting: postingType) => {
  try {
    const promises = posting.images
      .filter((image) => image)
      .map((image) => {
        if (image.includes('firebasestorage')) return image;
        const name = `image${Date.now()}.jpg`;
        return uploadString(ref(storage, name), image.split(',')[1], 'base64').then(() => {
          return getDownloadURL(ref(storage, name));
        });
      });
    Promise.all(promises).then((result) => {
      const docRef = doc(db, 'community', postId);
      updateDoc(docRef, { title: posting.title, content: posting.content, images: result });
    });
  } catch (e) {
    console.log(e);
  }
};

export const deleteCommunityPosting = async (postId: string) => {
  try {
    await deleteDoc(doc(db, 'community', postId));
  } catch (e) {
    console.log(e);
  }
};

export const addCommunityComment = async (comment: commentType) => {
  try {
    addDoc(collection(db, 'comments'), comment);
    return fetchUserNickname(comment.userId);
  } catch (e) {
    console.log(e);
  }
};

export const updateCommunityComment = async (commentId: string, content: string) => {
  try {
    const docRef = doc(db, 'comments', commentId);
    updateDoc(docRef, { content });
  } catch (e) {
    console.log(e);
  }
};

export const deleteCommunityComment = async (commentId: string) => {
  try {
    await deleteDoc(doc(db, 'comments', commentId));
  } catch (e) {
    console.log(e);
  }
};

export const getAllTrainerData = async () => {
  try {
    const querySnapshot = await getDocs(trainerCollection);
    return querySnapshot.docs.map((x) => [x.data(), x.id]);
  } catch (e) {
    console.log(e);
  }
};

export const getTrainerData = async (id: string) => {
  try {
    const q = query(trainerCollection, where(documentId(), '==', id));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((x) => x.data());
  } catch (e) {
    console.log(e);
  }
};

// id로 트레이너 정보 업데이트
export const updateTrainerData = async (id: string, data: any) => {
  try {
    Promise.all(
      data.images
        .filter((image: string) => image)
        .map((image: string) => {
          if (image.includes('firebasestorage')) return image;
          const name = `image${Date.now()}.jpg`;
          return uploadString(ref(storage, name), image.split(',')[1], 'base64').then(() => {
            return getDownloadURL(ref(storage, name));
          });
        })
    ).then((images) => {
      const docRef = doc(db, 'trainer', id);
      updateDoc(docRef, {
        field: data.field,
        purpose: data.purpose,
        address: data.address,
        introduction: data.introduction,
        isOnline: data.isOnline,
        images: images,
        gymImage: data.gymImage,
        careers: data.careers,
        price: +data.price,
      });
    });
  } catch (e) {
    console.log(e);
  }
};
