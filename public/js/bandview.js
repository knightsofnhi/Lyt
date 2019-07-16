// Code here handles queries for specific characters in the database
// In this case, the user submits a character's name... we then pass that character's name as a
// URL parameter. Our server then performs the search to grab that character from the Database.

// when user hits the search-btn
$("#searchbtn").on("click", function (e) {
    e.preventDefault();

    // save the character they typed into the #bandsearch input
    var searchedBand = $("#bandsearch")
        .val()
        .trim();
    // Using a RegEx Pattern to remove spaces from searchedBand
    debugger;
    searchedBand = searchedBand.replace(/\s+/g, "").toLowerCase();

    // run an AJAX GET-request for our servers api,
    // including the user's character in the url
    $.get("localhost:3000/api" + searchedBand, function (data) {
        // log the data to our console
        console.log(data);
        // empty to well-section before adding new content
        $("#well-section").empty();
        // if the data is not there, then return an error message
        if (!data) {
            $("#well-section").append("<h2> We couldn't find the band your looking. </h2>");
        }
        else {


            $("#well-section").append(`<h2>${data.artistName}</h2>`);

            $("#well-section").append(`<h3>Members:${data.artistMembers}</h3>`);

            $("#well-section").append(`<h3>Location:${data.artistLocation}</h3>`);

            $("#well-section").append(`<h3>Contact Name:${data.artistContactName}</h3>`);

            $("well-section").append(`<h3>Phone:${data.artistContactPhone}`);
        }
    });
});
