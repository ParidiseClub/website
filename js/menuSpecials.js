// This content appears on the top of the menu page. Text between double quotes can be edited.
// Don't remove quotes ("), backticks(`), <p> or <br>, unless you know what you're doing.
// Whatever is INSIDE the quotes, and not one of the things above, will appear on top of the menu page as plain text.

var menuSpecialItems = 
{   
    item0 : {
        name : "Daily Specials",
        description : "= - = - = - = - = - = - = - = - = - = - = - = - = - = - ="
    }, 
    item1 : {
        name : "Mama's Homemade Coney Sauce",
        description : "8oz Jar $5.00"
    },
    item2 : {
        name : "All Beef Hotdog",
        description : "$2.50 or 2/$4.00"
    },
    item3 : {
        name : "All Beef Coney Dog",
        description : "$3.00 or 2/$5.00"
    },
    item4 : {
        name : "Grilled Chicken Sandwich",
        description : "$5.00"
    },
    item5 : {
        name : "Grilled Ham and Cheese",
        description : "$5.00"
    },
    item6 : {
        name : "Grilled Cheese",
        description : "$3.00"
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

displayMenuSpecials(menuSpecialItems);
