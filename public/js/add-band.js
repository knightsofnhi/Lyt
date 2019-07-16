var userData = firebase.database();

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

    userData.ref().push(newBand);

    // console.log("new artist added");

});

userData.ref().on("child_added", function (childSnapshot, prevChildKey) {
    //console.log(childSnapshot.val())

    var tBandName = childSnapshot.val().bandName;
    var tBandLocation = childSnapshot.val().bandLocation;
    var tBandGenre = childSnapshot.val().bandGenre;
    var tBandMembers = childSnapshot.val().bandMembers;
    var tPhotoUrl = childSnapshot.val().photoUrl;
    var tMusiclink = childSnapshot.val().musicLink;
    var tContactName = childSnapshot.val().contactName;
    var tContactNumber = childSnapshot.val().contactNumber;
    var tEmail = childSnapshot.val().email;
})