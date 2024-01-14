// The content here appears on the menu page. Text between double quotes can be edited.
// Whatever is INSIDE the quotes will appear on the menu page as plain text.

var menuItems = 
{
    item37 : {
        name : "Beverages",
        price : "= - = - = - = - = - = - = - = - = - = - = - = - = - = - =",
        description : "Pricing and availability could change."
    },
    item38 : {
        name : "Coffee",
        price : "$1.50 / 1.75",
        description : "Small / Large"
    },
    item39 : {
        name : "Water",
        price : "$1.50",
        description : "In a bottle"
    },
    item40 : {
        name : "Pop",
        price : "$1.75",
        description : "Coke Products"
    },
    item41 : {
        name : "Tea",
        price : "$1.75",
        description : "Sweet or Unsweet"
    },
    item42 : {
        name : "Powerade",
        price : "$1.75",
        description : ""
    },
    item43 : {
        name : "Energy Drinks",
        price : "$3.50",
        description : "Zoom"
    },
    item44 : {
        name : "Orange Juice",
        price : "$1.75",
        description : ""
    },
    item45 : {
        name : "Snacks",
        price : "= - = - = - = - = - = - = - = - = - = - = - = - = - = - =",
        description : "Pricing and availability could change."
    },
    item46 : {
        name : "Coney Dog",
        price : "$3.00 or 2 for $5.00",
        description : ""
    },
    item462 : {
        name : "1/4LB Beef Hot Dog",
        price : "$4.25",
        description : ""
    },
    item463 : {
        name : "All Beef Regular Hot Dog",
        price : "$2.50 or 2 for $4.00",
        description : "Hot Dog Toppings: Ketchup, Mustard, Relish, Onion, Coney Sauce - $0.50"
    },
    item47 : {
        name : "Chips",
        price : "$1.00",
        description : ""
    },
    item48 : {
        name : "Candy Bars",
        price : "$1.50",
        description : ""
    },
    item49 : {
        name : "Misc. Products",
        price : "= - = - = - = - = - = - = - = - = - = - = - = - = - = - =",
        description : "Pricing and availability could change."
    },
    item500 : {
        name : "Membership Dues",
        price : "$5.00 / $50.00",
        description : "Month / Year"
    },
    item50 : {
        name : "Coins",
        price : "$1.00, $3.00, $5.00, $15.00",
        description : "Basic, Bronze, Veteran, Decorative"
    },
    item51 : {
        name : "T-Shirts",
        price : "$15.00",
        description : "M/L/XL"
    },
    item52 : {
        name : "Jewelry",
        price : "$2.00, $10.00",
        description : "Lapel Pins, Pendants"
    },
    item53 : {
        name : "Accessories",
        price : "= - = - = - = - = - = - = - = - = - = - = - = - = - = - =",
        description : ""
    },
    item54 : {
        name : "Velour Coin Pouch",
        price : "$2.00",
        description : ""
    },
    item55 : {
        name : "Infinity Coins",
        price : "$3.00",
        description : ""
    },
    item56 : {
        name : "Decorative Stones",
        price : "$3.00",
        description : ""
    },
    item57 : {
        name : "Keychains",
        price : "$5.00",
        description : ""
    },
    item58 : {
        name : "License Plate Frames",
        price : "$5.00",
        description : ""
    },
    item59 : {
        name : "Big Book Covers",
        price : "$12.00",
        description : ""
    },
    item60 : {
        name : "Books",
        price : "= - = - = - = - = - = - = - = - = - = - = - = - = - = - =",
        description : ""
    },
    item61 : {
        name : "Living Sober",
        price : "$3.75",
        description : ""
    },
    item62 : {
        name : "Came to Believe",
        price : "$4.25",
        description : ""
    },
    item63 : {
        name : "Pocket Big Book",
        price : "$6.00",
        description : ""
    },
    item64 : {
        name : "Twelve & Twelve",
        price : "$9.25",
        description : ""
    },
    item65 : {
        name : "Big Book",
        price : "$20.00",
        description : ""
    },
};

function displayItems(menuItems) {    
    for(x in menuItems) {
        var mainDiv = document.getElementById('mainDiv');
        var div = document.createElement("div");
        var divColumn =document.createElement("div");
        var name = document.createElement("p");
        var price = document.createElement("p");
        var description = document.createElement("p");
        
        name.className = "fw-bold";
        description.className = "fst-italic";

        name.innerHTML = menuItems[x].name;
        price.innerHTML = menuItems[x].price;
        description.innerHTML =  menuItems[x].description;                
        
        divColumn.appendChild(name);
        divColumn.appendChild(price);
        divColumn.appendChild(description);
        divColumn.className = "card";        

        div.appendChild(divColumn);

        mainDiv.appendChild(div);
    };
}

displayItems(menuItems);
