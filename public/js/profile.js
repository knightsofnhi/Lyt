var userData = firebase.database();

// inital value
var currentBand = "";

// on click when user signs up
$("#band-submit").on("click", function () {

    var bandName = $("#band-name").val();
    var bandLocation = $("#band-location").val();
    var bandGenre = $("#band-genre").val();
    var bandMembers = $("#band-members").val();
    var photoUrl = $("#photo-url").val().trim();
    var musicLink = $("#music-link").val().trim();
    var contactName = $("#band-contact-name").val().trim();
    var contactNumber = $("#band-contact-number").val().trim();
    var email = $("#band-email").val().trim();

    var newBand = {
        bandName: bandName,
        bandLocation: bandLocation,
        bandGenre: bandGenre,
        bandMembers: bandMembers,
        photoUrl: photoUrl,
        musicLink: musicLink,
        contactName: contactName,
        contactNumber: contactNumber,
        email: email
    }

    // pushes user input data
    userData.ref().update(newBand);

});

// get snapshot of stored data
userData.ref().on("value", function (snapshot) {

    console.log(snapshot.val());

    var tBandName = snapshot.val().bandName;
    var tBandLocation = snapshot.val().bandLocation;
    var tBandGenre = snapshot.val().bandGenre;
    var tBandMembers = snapshot.val().bandMembers;
    var tPhotoUrl = snapshot.val().photoUrl;
    var tMusicLink = snapshot.val().musicLink;
    var tContactName = snapshot.val().contactName;
    var tContactNumber = snapshot.val().contactNumber;
    var tEmail = snapshot.val().email;

    // render html to page
    $("#user-area").append(`<br><h2>Welcome to Lyt, ${tBandName}!</h2><br>
    <img src="${tPhotoUrl}" height="200"><br><br>
    Location: ${tBandLocation}<br>
    Genre: ${tBandGenre}<br>
    Link to music: <a href="${tMusicLink}">${tMusicLink}</a><br>
    Number of members: ${tBandMembers}<br><br>
    Contact name: ${tContactName}<br>
    Contact number: ${tContactNumber}<br>
    Contact email: <a href="mailto:${tEmail}" target="_top">${tEmail}</a><br><br>`)

    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});