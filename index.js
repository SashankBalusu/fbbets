import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa3MELEmVzRcCJnO5VzdDiVoftYqOD1sw",
  authDomain: "fbbets-19d60.firebaseapp.com",
  databaseURL: "https://fbbets-19d60-default-rtdb.firebaseio.com",
  projectId: "fbbets-19d60",
  storageBucket: "fbbets-19d60.appspot.com",
  messagingSenderId: "218823784817",
  appId: "1:218823784817:web:d1966a926eed358c255ed0",
  measurementId: "G-VZJS1CD1VX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


const gen = document.getElementById("gen")
gen.addEventListener("click", function(){
    const name = document.getElementById("name").value
    const person1 = document.getElementById("person1").value
    const person2 = document.getElementById("person2").value
    set(ref(database, "groups/" + name), {
        groupName: name,
        name1: person1,
        name2: person2
        
        
    }).then((value) => {
       window.location.href = `group.html?group=${name}`
    });
      
      
})