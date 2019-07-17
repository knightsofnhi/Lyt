app.get("/", function(req, res) {
  res.json(path.join(__dirname, "./public/artist-signup.html"));
});

$(document).ready(function() {
  // Getting a reference to the input field where user adds a new todo
  debugger;
  var newItemInput = $("input.new-item");
  var newMembersInput = $("input#new-member");
  var passwordInput = $("input#password-input");
  // Our new todos will go inside the todoContainer
  var $artistContainer = $(".artist-container");
  // Adding event listeners for deleting, editing, and adding todos
  $(document).on("click", "button.delete", deleteArtist);
  $(document).on("click", "button.complete", toggleComplete);
  $(document).on("click", ".artist-item", editArtist);
  $(document).on("keyup", ".artist-item", finishEdit);
  $(document).on("blur", ".artist-item", cancelEdit);
  $(document).on("submit", "#artist-form", insertArtist);

  // Our initial todos array
  var artists = [
    {
    "artistName": artistName,
    },
    {
    "artistMembers": artistMembers
    }
  ];
  
  // Getting todos from database when page loads
  getArtists();

  // This function resets the todos displayed with new todos from the database
  function initializeRows() {
    $artistContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < artists.length; i++) {
      rowsToAdd.push(createNewRow(artists[i]));
    }
    $artistContainer.prepend(rowsToAdd);
  }

  // This function grabs todos from the database and updates the view
  function getArtists() {
    $.get("/api/artists", function(data) {
      artists = data;
      initializeRows();
    });
  }

  // This function deletes a todo when the user clicks the delete button
  function deleteArtist(event) {
    event.stopPropagation();
    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/artists/" + id
    }).then(getArtists);
  }

  // This function handles showing the input box for a user to edit a todo
  function editArtist() {
    var currentArtist = $(this).data("artist");
    $(this).children().hide();
    $(this).children("input.edit").val(currentArtist.text);
    $(this).children("input.edit").show();
    $(this).children("input.edit").focus();
  }

  // Toggles complete status
  function toggleComplete(event) {
    event.stopPropagation();
    var artist = $(this).parent().data("artist");
    artist.complete = !artist.complete;
    updateArtist(artist);
  }

  // This function starts updating a todo in the database if a user hits the "Enter Key"
  // While in edit mode
  function finishEdit(event) {
    var updatedArtist = $(this).data("artist");
    if (event.which === 13) {
      updatedArtist.text = $(this).children("input").val().trim();
      $(this).blur();
      updateArtist(updatedArtist);
    }
  }

  // This function updates a todo in our database
  function updateArtist(artist) {
    $.ajax({
      method: "PUT",
      url: "/api/artists",
      data: artist
    }).then(getArtists);
  }

  // This function is called whenever a todo item is in edit mode and loses focus
  // This cancels any edits being made
  function cancelEdit() {
    var currentArtist = $(this).data("artist");
    if (currentArtist) {
      $(this).children().hide();
      $(this).children("input.edit").val(currentArtist.text);
      $(this).children("span").show();
      $(this).children("button").show();
    }
  }

  // This function constructs a todo-item row
  function createNewRow(artist) {
    var $newInputRow = $(
      [
        "<li class='list-group-item artist-item'>",
        "<span>",
        artist.text,
        "</span>",
        "<input type='text' class='edit' style='display: none;'>",
        "<button class='delete btn btn-danger'>x</button>",
        "<button class='complete btn btn-primary'>✓</button>",
        "</li>"
      ].join("")
    );

    $newInputRow.find("button.delete").data("id", artist.id);
    $newInputRow.find("input.edit").css("display", "none");
    $newInputRow.data("artist", artist);
    if (artist.complete) {
      $newInputRow.find("span").css("text-decoration", "line-through");
    }
    return $newInputRow;
  }

  // This function inserts a new todo into our database and then updates the view
  function insertArtist(event) {
    event.preventDefault();
    var artist = {
      artistName: $newItemInput.val().trim(),
      artistMembers: $newMembersInput.val().trim(),
      complete: false
    };

    $.post("/api/artists", artist, getArtists);
    $newItemInput.val("");
    $newMembersInput.val("");
  }
});
