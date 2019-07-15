var userData = firebase.database();

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

    userData.ref().push(newBand);

    console.log("new artist added");

});

userData.ref().on("child_added", function (childSnapshot, prevChildKey) {
    console.log(childSnapshot.val())

    var tBandName = childSnapshot.val().bandName;
    var tBandLocation = childSnapshot.val().bandLocation;
    var tBandGenre = childSnapshot.val().bandGenre;
    var tBandRates = childSnapshot.val().bandRates;
    var tBandMembers = childSnapshot.val().bandMembers;
    var tPhotoUrl = childSnapshot.val().photoUrl;
    var tContactName = childSnapshot.val().contactName;
    var tContactNumber = childSnapshot.val().contactNumber;
    var tEmail = childSnapshot.val().email;

    $("#user-area").append(`<br><h2>Welcome to Lyt, ${tBandName}!</h2><br>
    <img src="${tPhotoUrl}"><br><br>
    Location: ${tBandLocation}<br>
    Genre: ${tBandGenre}<br>
    Rates per hour: ${tBandRates}<br>
    Number of members: ${tBandMembers}<br><br>
    Contact name: ${tContactName}<br>
    Contact number: ${tContactNumber}<br>
    Contact email: ${tEmail}<br><br>`)
})