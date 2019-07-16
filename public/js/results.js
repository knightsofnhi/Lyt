var database = firebase.database();

var ref = firebase.database().ref("uid");

ref.orderByChild("bandLocation").equalTo("Boston").on("child_added", function (snapshot) {
    console.log(snapshot);
});

// $("#search-submit").on("click", function () {
// });