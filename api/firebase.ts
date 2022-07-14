import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
  addDoc,
  documentId,
  orderBy,
} from 'firebase/firestore/lite';
import { postingType, usertype, MakeQueryParam } from './firebase.type';
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
const communityCollection = collection(db, 'community');
const trainerCollection = collection(db, 'trainer');
export const chatCollection = collection(db, 'chat');

export const makeQuery = ({ id, option, outerCollection, innerCollection }: MakeQueryParam) =>
  query(collection(db, `${outerCollection}/${id}/${innerCollection}`), orderBy(option));

// 회원가입
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

export const getTrainerData = async (id: string) => {
  try {
    const q = query(trainerCollection, where(documentId(), '==', id));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((x) => ({ ...x.data(), id: id }));
  } catch (e) {
    console.log(e);
  }
};
