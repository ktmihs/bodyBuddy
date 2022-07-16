import { initializeApp } from 'firebase/app';
import {
  doc,
  getFirestore,
  collection,
  getDocs,
  where,
  query,
  addDoc,
  orderBy,
  getDoc,
} from 'firebase/firestore/lite';
import { postingType, usertype, MakeQueryParam, reviewsType } from './firebase.type';
import { getStorage, getDownloadURL, ref, uploadString } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MSG_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();

const userCollection = collection(db, 'user');
const reviewsCollection = collection(db, 'reviews');
const trainerCollection = collection(db, 'trainer');
const communityCollection = collection(db, 'community');
export const chatCollection = collection(db, 'chat');

export const makeQuery = ({ id, option, outerCollection, innerCollection }: MakeQueryParam) =>
  query(collection(db, `${outerCollection}/${id}/${innerCollection}`), orderBy(option));

// 공통 - 이메일로 유저 정보가져오기
export const getUserInfoByEmail = async (email: string) => {
  try {
    let userCollectionId;
    let userInfo;

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

// 공통 - 트레이너 정보 가져오기
export const getTrainerInfoById = async (id: string) => {
  try {
    const docRef = doc(db, 'trainer', id);
    const docSnap = await getDoc(docRef);

    return docSnap.data();
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

export const getComuunityPosting = async (field: string) => {
  try {
    const q = query(communityCollection, where('fieldId', '==', field));
    const querySnapshot = await getDocs(q);
    const res = [];
    querySnapshot.forEach(async (doc) => {
      let data = doc.data();
      data = {
        id: doc.id,
        ...data,
        creationDate: data.creationDate.toDate(),
      };
      res.push(data);
    });
    return res.sort((a, b) => b.creationDate - a.creationDate);
  } catch (e) {
    console.log(e);
  }
};

export const addComuunityPosting = async (posting: postingType) => {
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

// 리뷰 가져오기 (일반 회원 프로필 페이지)
export const getMemberReviewsByEmail = async () => {
  try {
    const reviewList: any[] = [];

    const { id } = await getUserInfoByEmail('alswlkku@gmail.com');
    const q = query(reviewsCollection, where('userId', '==', id));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      reviewList.push(doc.data());
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
