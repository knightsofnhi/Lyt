var database = firebase.database();

var ref = firebase.database().ref("users");

ref.orderByChild("bandLocation").equalTo("Boston").on("child_added", function (snapshot) {
    console.log(snapshot.key);
});

// $("#search-submit").on("click", function () {
// });