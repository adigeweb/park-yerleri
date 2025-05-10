// script.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDfWobULsIOpyDL_w6zjhl78jXuCNkNAbQ",
    authDomain: "alisverislistesi-271a2.firebaseapp.com",
    databaseURL: "https://alisverislistesi-271a2-default-rtdb.firebaseio.com",
    projectId: "alisverislistesi-271a2",
    storageBucket: "alisverislistesi-271a2.appspot.com", // dikkat: firebasestorage.app değil
    messagingSenderId: "1004190822371",
    appId: "1:1004190822371:web:44b8471a152ce38f82bad6",
    measurementId: "G-2G2Z7W3DLK"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

onValue(ref(db, "/states"), (snapshot) => {
    if (snapshot.exists()) {
        const states = snapshot.val().split("").map(n => n === "1");
        console.log(states);
        states.forEach((item, index) => {
            if (item) document.querySelectorAll(".slot")[index].setAttribute("data-available", "true");
            else document.querySelectorAll(".slot")[index].removeAttribute("data-available");
        });
        document.querySelectorAll(".slot[data-loading]").forEach(item => {
            item.removeAttribute("data-loading");
        });
    }
});
