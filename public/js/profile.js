var userData = firebase.database();

$("#band-submit").on("click", function () {

    var bandName = $("#band-name").val();
    var bandLocation = $("#band-location").val();
    var bandGenre = $("#band-genre").val();
    var bandRates = $("#band-rates").val();
    var bandMembers = $("#band-members").val();
    var photoUrl = $("#photo-url").val();

    var newBand = {
        bandName: bandName,
        bandLocation: bandLocation,
        bandGenre: bandGenre,
        bandRates: bandRates,
        bandMembers: bandMembers,
        photoUrl: photoUrl
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

    $("#user-table").append("<tr> <td>" + tBandName + "</td><td>" + tBandLocation + "</td><td>" + tBandGenre + "</td><td>" + tBandRates + "</td> <td>" + tBandMembers + "</td><td>" + tPhotoUrl + "</td> </tr>")
})