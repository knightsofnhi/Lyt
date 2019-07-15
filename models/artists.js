$("#band-submit").on("click", function (event) {
    event.preventDefault();

    // Make a newChirp object
    var newBand = {
        artistName: $("#band-name").val().trim(),
        artistLocation: $("#band-location").val().trim(),
        artistDescription: $("#band-description").val().trim(),
        artistGenre: $("#band-genre").val().trim(),
        artistRates: $("#band-rates").val().trim(),
        artistMembers: $("#band-members").val().trim(),
        photoUrl: $("#photo-url").val().trim(),
        artistContactName: $("#band-contact-name").val().trim(),
        artistContactPhone: $("band-contact-number").val().trim(),
        artistContactEmail: $("band-email").val().trim(),
    };

    console.log(newBand);

    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newBand)
        // On success, run the following code
        .then(function () {

            var row = $("<div>");
            row.addClass("artist");

            row.append("<p>" + newChirp.author + " chirped: </p>");
            row.append("<p>" + newChirp.body + "</p>");

            $("#chirp-area").prepend(row);

        });

    // Empty each input box by replacing the value with an empty string
    $("#author").val("");
    $("#chirp-box").val("");
});
