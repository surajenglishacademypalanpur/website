// Firebase configuration values for Suraj AI Grammar Bot
const firebaseConfig = {
  apiKey: "AIzaSyD9B3GSTICk-cA79X3kg2UkG-GQ_rEi-kU",
  authDomain: "grammar-bot-sea.firebaseapp.com",
  projectId: "grammar-bot-sea",
  storageBucket: "grammar-bot-sea.firebasestorage.app",
  messagingSenderId: "790058333796",
  appId: "1:790058333796:web:7d43eed26e5307bcc21171",
  measurementId: "G-ZETG9WWXS8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Expose services globally
const auth = firebase.auth();
const functions = firebase.app().functions("asia-south1");
