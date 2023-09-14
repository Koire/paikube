import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: import.meta.env.PUBLIC_apiKey,
    authDomain: import.meta.env.PUBLIC_authDomain,
    projectId: import.meta.env.PUBLIC_projectId,
    storageBucket: import.meta.env.PUBLIC_storageBucket,
    messagingSenderId: import.meta.env.PUBLIC_messagingSenderId,
    appId: import.meta.env.PUBLIC_appId,
    measurementId: import.meta.env.PUBLIC_measurementId
};

export const app = initializeApp(firebaseConfig);
