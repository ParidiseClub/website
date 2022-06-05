// The content here appears on the menu page. Text between double quotes can be edited.
// Whatever is INSIDE the quotes will appear on the menu page as plain text.

var menuItems = 
{
    item1 : {
        name : "pARIDise Burger",
        price : "$6.00",
        description : "Cheese, Grilled Onions, Bacon + BBQ Sauce"
    },
    item2 : {
        name : "1/4 lb Cheesebuger",
        price : "$5.00",
        description : "All Beef Patty, Lettuce, Tomato, Onion"
    },
    item3 : {
        name : "1/4 lb Hamburger",
        price : "$4.50",
        description : "All Beef Patty, Lettuce, Tomato, Onion"
    },
    item4 : {
        name : "All Beef Hotdog",
        price : "$2.25",
        description : "All Beef!"
    },
    item5 : {
        name : "French Fries",
        price : "$2.25",
        description : "MmmmHmmmm!"
    },
    item6 : {
        name : "2 Eggs, Bacon + Toast",
        price : "$5.00",
        description : "Breakfast!"
    },
    item7 : {
        name : "2 Eggs, Sausage + Toast",
        price : "$4.50",
        description : "Breakfast!"
    },
    item8 : {
        name : "Bacon, Egg + Cheese Melt",
        price : "$4.50",
        description : "Breakfast Sandwich!"
    },
    item9 : {
        name : "Coffee",
        price : "$1.25 / 1.50",
        description : "Small / Large"
    },
    item10 : {
        name : "Water",
        price : "$1.25",
        description : "In a bottle"
    },
    item11 : {
        name : "Soda",
        price : "$1.50",
        description : "Coke Products"
    },
    item12 : {
        name : "Tea",
        price : "$1.50",
        description : "Sweet or Unsweet"
    },
    item13 : {
        name : "Powerade",
        price : "$1.50",
        description : "Red, Orange, Blue"
    },
    item14 : {
        name : "Minute Maid",
        price : "$1.50",
        description : "Pink Lemonade, Fruit Punch"
    },
    item15 : {
        name : "Monster Drinks",
        price : "$2.50",
        description : "Zoom"
    },
    item16 : {
        name : "Starbucks Coffees",
        price : "$3.00",
        description : "Cold Coffee"
    },
    item17 : {
        name : "Pastry",
        price : "$1.00",
        description : "Muffins, Cookies"
    },
    item18 : {
        name : "Chips",
        price : "$1.00",
        description : "Lay's, Doritos, Cheetos, Funyuns"
    },
    item19 : {
        name : "Candy Bars",
        price : "$1.00",
        description : "Hershey, Reese's, Kit-Kat, Milky Way, Snickers, Twix"
    }
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