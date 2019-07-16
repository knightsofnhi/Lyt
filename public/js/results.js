var database = firebase.database();

database.ref().orderByChild("bandLocation").equalTo("Boston").on("child_added", function (snapshot, prevChildKey) {
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

    $("#results-table").append(`
    <tr>
    <td><img src="${tPhotoUrl}" height="100"></td>
    <td>${tBandName}</td>
    <td>${tBandLocation}</td>
    <td>${tBandGenre}</td>
    <td><a href="${tMusicLink}">${tMusicLink}</a></td>
    <td>${tBandMembers}</td>
    <td>${tContactName}<br>
    ${tContactNumber}<br>
    <a href="mailto:${tEmail}" target="_top">${tEmail}</a>
    </td>
    `)
})