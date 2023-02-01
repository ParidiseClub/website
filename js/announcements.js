// This content appears on the top of the main page. Text between double quotes can be edited.
// Don't remove quotes ("), backticks(`), <p> or <br>, unless you know what you're doing.
// Whatever is INSIDE the quotes, and not one of the things above, will appear on top of the main page as plain text.

var announcementItems = 
{    
    item1 : {
        name : "Kitchen is Open!!",
        description : 
        `
        Kitchen Hours:<br>
        Sunday - 12:00-8:00<br>
        Monday - 12:00-8:00<br>
        Tuesday - 12:00-8:00<br>
        Wednesday - 12:00-8:00<br>
        Thursday - 12:00-8:00<br>
        Friday - 12:00-8:00<br>
        Saturday - 8:30-8:30<br>
        Hours subject to change.
        Upstairs remains open for coffee, snacks, fellowship.
        `
    },
};

// Edit the portion below if you're comfortable with JavaScript

function displayAnnouncements(announcementItems) {    
    for(x in announcementItems) {
        var mainDiv = document.getElementById('announcementDiv');
        var div = document.createElement("div");
        var divColumn =document.createElement("div");
        var name = document.createElement("p");
        var description = document.createElement("p");
        
        name.className = "fw-bold";
        description.className = "lead";

        name.innerHTML = announcementItems[x].name;
        description.innerHTML =  announcementItems[x].description;                
        
        divColumn.appendChild(name);
        divColumn.appendChild(description);
        divColumn.className = "card";        

        div.appendChild(divColumn);

        mainDiv.appendChild(div);
    };
}

displayAnnouncements(announcementItems);
