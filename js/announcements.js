// This content appears on the top of the main page. Text between double quotes can be edited.
// Don't remove quotes ("), backticks(`), <p> or <br>, unless you know what you're doing.
// Whatever is INSIDE the quotes, and not one of the things above, will appear on top of the main page as plain text.

var announcementItems = 
{ 
    item0 : {
        name : "In remembrance of Paul Mondozzi.",
        description : 
        `        
        Our condonlences go out to family and friends of Paul Mondozzi (Tall Pual), long-time supporter of The pARIDise Club.
        Memorial visitation will be held 5-7pm Thursday February 29th, 2024 at The Clifford Shoemaker Funeral Home, 1930 Front Street, Cuyahoga Falls, OH 44221, followed immediately after by memorial service.
        For more info:
        <a href='https://www.beaconjournal.com/obituaries/pwoo0731518'>Paul Mondozzi Obituary - Akron Beacon Journal</a>
        `
    },   
    item1 : {
        name : "Welcome!",
        description : 
        `        
        The pARIDise Club is open for coffee, snacks, and fellowship.
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
