// This content appears on the top of the menu page. Text between double quotes can be edited.
// Don't remove quotes ("), backticks(`), <p> or <br>, unless you know what you're doing.
// Whatever is INSIDE the quotes, and not one of the things above, will appear on top of the menu page as plain text.

var menuSpecialItems = 
{    
    item0 : {
        name : "Kitchen Specials",
        description : "Ask if we have extras not listed."
    },
    item1 : {
        name : "1/2lb Burger",
        description : "$6.00"
    },
    item2 : {
        name : "Buffalo Chicken Wrap",
        description : "$6.25"
    },
    item3 : {
        name : "Steak Wrap",
        description : "$6.25"
    },
    item4 : {
        name : "Chicken Tenders and Fries",
        description : "$7.50"
    },
    item5 : {
        name : "Chicken Tender Sandwich",
        description : "$6.00"
    },
    item6 : {
        name : "Onion Rings",
        description : "$2.75"
    },
    item7 : {
        name : "Mozzarella Stix (4)",
        description : "$6.00"
    },
    item8 : {
        name : "BLT",
        description : "$6.50"
    },
    item9 : {
        name : "Grilled Cheese",
        description : "$4.75"
    }
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
