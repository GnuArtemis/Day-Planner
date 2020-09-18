//Show the time on top of the calender, using moment.js grab the time 
$("#currentDay").text(moment().format("dddd MMMM Do"));

//An array to hold the hours in proper formating
var workingHours = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];

//Loop over my array of hours and create a div for row, create div for hours, textarea, and a button. Added styling and text context as appropriate, including previously saved text
for (var i = 0; i < workingHours.length; i++){
    //Displays hour label to the left
    var currentHour = $("<div>");
    currentHour.addClass("col-md-2 hour");
    currentHour.text(`\n${workingHours[i]}`);

    //Displays text box, adds text if previously saved, adds id reference
    var currentText = $("<textarea>");
    currentText.addClass("col-md-8 past");
    if(localStorage.getItem(`savedNote${i}`)){
        currentText.text(localStorage.getItem(`savedNote${i}`));
    }
    currentText.attr('id',`hour${i}`);
    currentText.data("time",moment().hours(i+9).minutes(0).seconds(0));

    //Displays save box, with id reference. Commented lines represent bootstrap historic functionality that is no longer supported
    var currentBtn = $("<button>");
    currentBtn.addClass("col-md-2 saveBtn");
    currentBtn.text("Save");
    currentBtn.attr('id',`${i}`);
    // currentBtn.append($("<span>"));
    // currentBtn.children().addClass("glyphicon glyphicon-floppy-disk")

    //Combines the above displays into one row and adds it to the page
    var allHours = $("<div>");
    allHours.addClass("row time-block");
    allHours.append(currentHour,currentText,currentBtn);
    $(".container").append(allHours);
}


// Use moment.js get the current time and compare to the time that is being assigned to the row. Adds classes as appropriate to style the designated hours
var now = moment().minutes(0);
for(i = 0; i < 9; i++) {
    var checkWhen = $(`#hour${i}`);
    if(checkWhen.data("time").diff(now, 'minutes')>0){
        checkWhen.addClass("future");
    } else if (checkWhen.data("time").diff(now, 'minutes')==0){
        checkWhen.addClass("present");
    } else {
        checkWhen.addClass("past");
    }
}



//Create click event listener for my save buttons, that captures saved text for future use.
$(".saveBtn").on("click", function(event) {
    var whichRow = event.target.id;
    var currentTextBox = $(`#hour${whichRow}`)
    localStorage.setItem(`savedNote${whichRow}`,currentTextBox.val())
})