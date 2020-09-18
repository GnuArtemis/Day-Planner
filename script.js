

//TODO: Create one row with time, text area, and button using JQ
//Here's a layout of what we need to make using JQ
//<div class = "col-md-2 hour">
//9 AM
//</div>
//<textarea class ="col-md-8 past" 
//</textarea>
//<button class="col-md-2 saveBtn"
//Save
//</button>
//</div>




//Show the time on top of the calender, using moment.js grab the time 
$("#currentDay").text(moment().format("dddd MMMM Do"));

//An array to hold the hours
var workingHours = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];

//Loop over my array of hours and create a div for row, create div for hours, textarea, and a button. Added styling and text context as appropriate
for (var i = 0; i < workingHours.length; i++){
    var allHours = $("<div>");
    allHours.addClass("row time-block");
    var currentHour = $("<div>");
    currentHour.addClass("col-md-2 hour");
    currentHour.text(`\n${workingHours[i]}`);
    var currentText = $("<textarea>");
    currentText.addClass("col-md-8 past");
    currentText.attr('id',`hour${i}`);
    currentText.data("time",moment().hours(i+9).minutes(0).seconds(0));
    var currentBtn = $("<button>");
    currentBtn.addClass("col-md-2 saveBtn");
    currentBtn.text("Save");
    // currentBtn.append($("<span>"));
    // currentBtn.children().addClass("glyphicon glyphicon-floppy-disk")
    allHours.append(currentHour,currentText,currentBtn);
    $(".container").append(allHours);
}


// Use moment.js get the current time and compare to the time that is being assigned to the row. Gives the current hour
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


//TODO:give the elements the classes that they need eg using an if statement we can check using monet.js to see if the hour that we're looping over is past the current hour if so give the text are the class of past

//TODO: Create click event listener for my buttons

//TODO: Grab the value of the text are and save it to a var (I need to be able to save the text from the text area that is in the same row as my button)

//TODO: using localStorage.setItem save the text to local storage

//TODO:retrieve the data from local storage using localStorage.getItem and show them back on the text area that they belong  to (How can I know what text from local storage goes to what text are?)

//localStorage.setItem("test","My first note")
//localStorage.setItem("test1", "My second note")
//var text1FromLocalStorage = localStorage.getItem("test")
//$(".first").text(text1FromLocalStorage)
//var text2FromLocalStorage = localStorage.getItem(test1)
//$(".second").text(text2FromLocalStorage)