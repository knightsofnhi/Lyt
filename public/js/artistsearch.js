$("select").change(() => {
    let str = "";
    $("select option:selected").each(() => {
        str += $(this).text() + " ";
    });
    $("div").text(str);
})
    .change();


// grab the values for the current form inputs and select dropdown
    // then make the ajax call
    // $.get('/bands', function(data) {
    // console.log(data);   
    //})