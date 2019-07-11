firebase.auth().signInWithEmailAndPassword("jamiealyssasumner@gmail.com", "password").catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
});

// var user = firebase.auth().currentUser;

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log(user);
    } else {
        console.log("Login failed");
    }
})
