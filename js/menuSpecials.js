// This content appears on the top of the menu page. Text between double quotes can be edited.
// Don't remove quotes ("), backticks(`), <p> or <br>, unless you know what you're doing.
// Whatever is INSIDE the quotes, and not one of the things above, will appear on top of the menu page as plain text.

var menuSpecialItems = 
{    
    item0 : {
        name : "Kitchen Specials",
        description : "Come up or call in and ask!"
    },
};

// Edit the portion below if you're comfortable with JavaScript

function displayMenuSpecials(menuSpecialItems) {    
    for(x in menuSpecialItems) {
        var mainDiv = document.getElementById('menuSpecialDiv');
        var div = document.createElement("div");
        var divColumn =document.createElement("div");
        var name = document.createElement("p");
        var description = document.createElement("p");
        
        name.className = "fw-bold";
        description.className = "lead";

        name.innerHTML = menuSpecialItems[x].name;
        description.innerHTML =  menuSpecialItems[x].description;                
        
        divColumn.appendChild(name);
        divColumn.appendChild(description);
        divColumn.className = "card";        

        div.appendChild(divColumn);

        mainDiv.appendChild(div);
    };
}

//displayMenuSpecials(menuSpecialItems);
