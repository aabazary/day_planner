//setting variables
var time = moment().format('dddd[,] MMMM Do[,] YYYY');
var saveBtn = $(".saveBtn");

// setting up current date(preformated)
$('#currentDay').text(time);

//function to save the time and content in local storage
saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var content = $(this).siblings(".content").val();

    localStorage.setItem(time, content);
});

// function to set content, based on the id, from local storage. 
function setContent() {
    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var content = localStorage.getItem(id);

        if (content !== null) {
            $(this).children(".content").val(content);
        }
    });
}


setContent();
