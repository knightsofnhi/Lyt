var userData = firebase.database();

// inital value
var currentBand = "";

// on click when user signs up
$("#band-submit").on("click", function () {

    var bandName = $("#band-name").val();
    var bandLocation = $("#band-location").val();
    var bandGenre = $("#band-genre").val();
    var bandRates = $("#band-rates").val();
    var bandMembers = $("#band-members").val();
    var photoUrl = $("#photo-url").val().trim();
    var contactName = $("#band-contact-name").val().trim();
    var contactNumber = $("#band-contact-number").val().trim();
    var email = $("#band-email").val().trim();

    var newBand = {
        bandName: bandName,
        bandLocation: bandLocation,
        bandGenre: bandGenre,
        bandRates: bandRates,
        bandMembers: bandMembers,
        photoUrl: photoUrl,
        contactName: contactName,
        contactNumber: contactNumber,
        email: email
    }

    // pushes user input data
    userData.ref().set(newBand);
    // console.log(newBand);

});

// get snapshot of stored data
userData.ref().on("value", function (snapshot) {

    console.log(snapshot.val());

    var tBandName = snapshot.val().bandName;
    var tBandLocation = snapshot.val().bandLocation;
    var tBandGenre = snapshot.val().bandGenre;
    var tBandRates = snapshot.val().bandRates;
    var tBandMembers = snapshot.val().bandMembers;
    var tPhotoUrl = snapshot.val().photoUrl;
    var tContactName = snapshot.val().contactName;
    var tContactNumber = snapshot.val().contactNumber;
    var tEmail = snapshot.val().email;

    // render html to page
    $("#user-area").append(`<br><h2>Welcome to Lyt, ${tBandName}!</h2><br>
    <img src="${tPhotoUrl}" height="200"><br><br>
    Location: ${tBandLocation}<br>
    Genre: ${tBandGenre}<br>
    Rates per hour: ${tBandRates}<br>
    Number of members: ${tBandMembers}<br><br>
    Contact name: ${tContactName}<br>
    Contact number: ${tContactNumber}<br>
    Contact email: ${tEmail}<br><br>`)

    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});