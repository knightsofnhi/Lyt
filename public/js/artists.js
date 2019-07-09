$(document).ready(function() {
  // Getting references to the name input and Artists container, as well as the table body
  var nameInput = $("#Artists-name");
  var ArtistsList = $("tbody");
  var ArtistsContainer = $(".Artists-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Artists
  $(document).on("submit", "#Artists-form", handleArtistsFormSubmit);
  $(document).on("click", ".delete-Artists", handleDeleteButtonPress);

  // Getting the initial list of Artists
  getArtists();

  // A function to handle what happens when the form is submitted to create a new Artists
  function handleArtistsFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim()) {
      return;
    }
    // Calling the upsertArtists function and passing in the value of the name input
    upsertArtists({
      name: nameInput
        .val()
        .trim()
    });
  }

  // A function for creating an Artists. Calls getArtists upon completion
  function upsertArtists(ArtistsData) {
    $.post("/api/Artists", ArtistsData)
      .then(getArtists);
  }

  // Function for creating a new list row for Artists
  function createArtistsRow(ArtistsData) {
    var newTr = $("<tr>");
    newTr.data("Artists", ArtistsData);
    newTr.append("<td>" + ArtistsData.name + "</td>");
    if (ArtistsData.Posts) {
      newTr.append("<td> " + ArtistsData.Posts.length + "</td>");
    } else {
      newTr.append("<td>0</td>");
    }
    newTr.append("<td><a href='/venues?Artists_id=" + ArtistsData.id + "'>Go to Posts</a></td>");
    newTr.append("<td><a href='/lyt?Artists_id=" + ArtistsData.id + "'>Create a Post</a></td>");
    newTr.append("<td><a style='cursor:pointer;color:red' class='delete-Artists'>Delete Artists</a></td>");
    return newTr;
  }

  // Function for retrieving Artists and getting them ready to be rendered to the page
  function getArtists() {
    $.get("/api/Artists", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createArtistsRow(data[i]));
      }
      renderArtistsList(rowsToAdd);
      nameInput.val("");
    });
  }

  // A function for rendering the list of Artists to the page
  function renderArtistsList(rows) {
    ArtistsList.children().not(":last").remove();
    ArtistsContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      ArtistsList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no Artists
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an Artists before you can create a Post.");
    ArtistsContainer.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    var listItemData = $(this).parent("td").parent("tr").data("Artists");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/Artists/" + id
    })
      .then(getArtists);
  }
});
