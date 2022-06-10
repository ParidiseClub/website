// This content appears on the top of the main page. Text between double quotes can be edited.
// Don't remove quotes ("), backticks(`), <p> or <br>, unless you know what you're doing.
// Whatever is INSIDE the quotes, and not one of the things above, will appear on top of the main page as plain text.

var announcementItems = 
{
    item1 : {
        name : "Founders' Day Weekend Extended Hours!",
        description : 
        `
        Friday 6/10 - 11AM - 10PM
        <br>
        Saturday 6/11 - 8:30AM - 8:30PM
        <br>
        Sunday 6/12 - 11AM - 9PM
        `
    },
    item2 : {
        name : "12 Songs of Recovery",
        description : 
        `
        Live Band
        <br>
        Friday June 10th, 6:00PM
        <br>
        www.12-step-songs.com
        `
    },
    item3 : {
        name : "Kitchen is Open!!",
        description : 
        `
        Kitchen normally closed Sundays and Tuesdays.
        Upstairs remains open for food, coffee, snacks, fellowship.
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
