// This content appears on the top of the menu page. Text between double quotes can be edited.
// Don't remove quotes ("), backticks(`), <p> or <br>, unless you know what you're doing.
// Whatever is INSIDE the quotes, and not one of the things above, will appear on top of the menu page as plain text.

var menuSpecialItems = 
{
    item1 : {
        name : "Founders' Day Weekend Menu Specials!",
        description : 
        `
        pARIDise Burger $6.00
        <br>
        All Beef Hot Dog $2.25
        <br>
        Hamburger $4.50
        <br>
        Cheeseburger $5.00
        <br>
        Sausage, Pepper + Onion Sub $6.00
        <br>
        Add Fries To Any Sandwich $1.25
        <br>
        `
    },
    item2 : {
        name : "BREAKFAST WILL BE SERVED UNTIL 10:30AM SATURDAY 6/11",
        description : 
        `
        We will not be serving breakfast Friday 6/10 or Sunday 6/12.
        `
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