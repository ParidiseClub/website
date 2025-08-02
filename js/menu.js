// The content here appears on the menu page. Text between double quotes can be edited.
// Whatever is INSIDE the quotes will appear on the menu page as plain text.

var menuItems = 
{
    item37 : {
        name : "Beverages",
        price : "- - -",
        description : "Pricing and availability could change."
    },
    item38 : {
        name : "Coffee",
        price : "$1.50",
        description : "One size"
    },
    item39 : {
        name : "Bottled Water",
        price : "$1.50",
        description : ""
    },
    item40 : {
        name : "Soda Pop",
        price : "$1.75",
        description : ""
    },
    item41 : {
        name : "Lemonade",
        price : "$2.00",
        description : ""
    },
    item42 : {
        name : "Propel/Bai Flavored Water",
        price : "$3.50",
        description : ""
    },
    item43 : {
        name : "Celsius/Red Bull Energy",
        price : "$3.50",
        description : ""
    },
    item44 : {
        name : "Unsweet/Sweet Tea",
        price : "$3.50",
        description : ""
    },
    item45 : {
        name : "Gatorade/Gatorade Zero",
        price : "$3.50",
        description : ""
    },
    item46 : {
        name : "Snacks",
        price : "- - -",
        description : "Pricing and availability could change."
    },
    item461 : {
        name : "Chips",
        price : "$1.50",
        description : ""
    },
    item462 : {
        name : "Candy bar",
        price : "$2.00",
        description : ""
    },
    item463 : {
        name : "Slim Jim",
        price : "$2.00",
        description : ""
    },
    item464 : {
        name : "Nutty Buddy",
        price : "$1.50",
        description : ""
    },
    item465 : {
        name : "Rice Krispie Treat",
        price : "$1.50",
        description : ""
    },
    item49 : {
        name : "Misc. Products",
        price : "- - -",
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
        price : "- - -",
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
        price : "- - -",
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
