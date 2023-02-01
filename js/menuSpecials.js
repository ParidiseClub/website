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
        name : "Po Boy",
        description : "$4.25"
    },
    item2 : {
        name : "BLT",
        description : "$5.50"
    },
    item3 : {
        name : "Egg or Egg/Tuna Salad Sandwich",
        description : "$3.75"
    },
    item4 : {
        name : "Chicken Tenders and Fries",
        description : "$6.50"
    },
    item5 : {
        name : "Chicken Tender Sandwich",
        description : "$5.00"
    },
    item6 : {
        name : "Onion Rings",
        description : "$2.75"
    },
    item7 : {
        name : "Mozzarella Stix (4)",
        description : "$5.50"
    },
    item8 : {
        name : "Cup of Coleslaw",
        description : "$1.50"
    },
    item9 : {
        name : "Nachos",
        description : "$6.50"
    },
    item10 : {
        name : "Grilled Cheese",
        description : "$3.75"
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
