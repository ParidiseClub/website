// This content appears on the top of the main page. Text between double quotes can be edited.
// Don't remove quotes ("), backticks(`), <p> or <br>, unless you know what you're doing.
// Whatever is INSIDE the quotes, and not one of the things above, will appear on top of the main page as plain text.

var announcementItems = 
{   
    item0 : {
        name : "Children's Christmas Party - Dec 21, 2024 - 2:00PM",
        description : 
        `        
        Call club or sign up at counter child name, age, boy or girl, and appropriate gifts.
        `
    },
    item00 : {
        name : "Christmas Dinner - Dec 25, 2024",
        description : 
        `        
        Christmas Day The pARIDise Club will have a Christmas Dinner. Join us all day, 12pm-9pm, for fellowship. Call in for details.
        `
    }, 
    item1 : {
        name : "Welcome!",
        description : 
        `        
        The pARIDise Club is open for coffee, snacks, and fellowship.
        `
    },
    item2 : {
        name : "Update",
        description : 
        `        
        We have a pending offer for sale of the building which will allow us to remain in the building unchanged for up to 3 years. We will be looking for suitable locations to move to in the future. This ensures The pARIDise Club remains an ongoing presence in our community.
        `
    }
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
