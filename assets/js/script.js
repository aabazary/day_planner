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
//takes the current hour and compares to the time-block id, if it is the same, changes colors depending on its comparison to the hourEl
function colorSelector() {
    hour = moment().hours();
    $(".time-block").each(function () {
        var hourEl = parseInt($(this).attr("id"));
        

        if (hourEl > hour) {
            $(this).addClass("future")
        }
        else if (hourEl === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}

colorSelector();