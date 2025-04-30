import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
import '@react-native-firebase/storage';

const firebaseConfig = {
    // Replace with your Firebase config
    // apiKey: "your-api-key",
    // authDomain: "your-auth-domain",
    // projectId: "your-project-id",
    // storageBucket: "your-storage-bucket",
    // messagingSenderId: "your-sender-id",
    // appId: "your-app-id"
    apiKey: "AIzaSyCEaylFdChEU-idKJjo5hF1L027hFIsdXk",
    authDomain: "internetshop-8bc07.firebaseapp.com",
    databaseURL: "https://internetshop-8bc07.firebaseio.com",
    projectId: "internetshop-8bc07",
    storageBucket: "internetshop-8bc07.firebasestorage.app",
    messagingSenderId: "39838192060",
    appId: "1:39838192060:web:63fe6d61fa881474625bb9",
    measurementId: "G-PVRM21E6EV"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export const uploadProductImage = async (productId, imageUri) => {
    const ref = storage().ref(`product_images/${productId}/main.jpg`);
    await ref.putFile(imageUri);
    return await ref.getDownloadURL();
};

export const addProduct = async (productData, imageUri) => {
    const docRef = await db.collection('products').add(productData);
    if (imageUri) {
        const imageUrl = await uploadProductImage(docRef.id, imageUri);
        await docRef.update({ imageUrl });
    }
    return docRef.id;
};