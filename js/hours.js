// The content here appears on the home page. Text between double quotes can be edited.
// Whatever is INSIDE the quotes will appear on the landing page as plain text.

var hourItems = 
{
    hours : {
        heading : "Club Hours",
        item1 : {
            name : "Sunday - Friday :",
            time : "Noon - 9:00 PM"
        },
        item2 : {
            name : "Saturday :",
            time : "8:30 AM - 8:30 PM"
        }
    },
    sunday : {
        heading : "Sunday",
        item1 : {
            name : "Sunday Serenity Discussion :",
            time : "2:30 PM"
        },
        item2 : {
            name : "Welcome Home (CA) :",
            time : "5:00 PM"
        },
        item3 : {
            name : "Sunday Night in Paridise :",
            time : "8:00 PM"
        },
    },
    monday : {
        heading : "Monday",
        item1 : {
            name : "The Lunch Bunch (CA) :",
            time : "12:00 PM"
        },     
    },
    tuesday : {
        heading : "Tuesday",
        item1 : {
            name : "Men's Toolbox Beginners (Men) :",
            time : "5:45 PM"
        },
        item2 : {
            name : "Men's Toolbox (Men) :",
            time : "6:30 PM"
        },
        item3 : {
            name : "Stairway to Serenty Big Book (CA) :",
            time : "6:30 PM (Upstairs)"
        },     
    },
    wednesday : {
        heading : "Wednesday",
        item1 : {
            name : "AA By The Book :",
            time : "8:30 AM"
        },
        item2 : {
            name : "Road of Destiny :",
            time : "1:00 PM"
        },
        item3 : {
            name : "Don't Be Discouraged :",
            time : "5:30 PM"
        },
        item4 : {
            name : "Say Yes To Life (CA) :",
            time : "7:00 PM (Upstairs)"
        },
        item5 : {
            name : "North of Akron :",
            time : "8:00 PM"
        },
    },
    thursday : {
        heading : "Thursday",
        item1 : {
            name : "Mid Day Serenity :",
            time : "2:30 PM"
        },
        item2 : {
            name : "Keep it Simple Big Book :",
            time : "8:00 PM"
        },
    },
    friday : {
        heading : "Friday",
        item1 : {
            name : "Open",
            time : ""
        },
    },
    saturday : {
        heading : "Saturday",
        item1 : {
            name : "Saturday Morning Sunrise :",
            time : "10:00 AM"
        },
        item2 : {
            name : "Stay While You're Here :",
            time : "7:00 PM"
        },
    }
};

// Edit the portion below if you're comfortable with JavaScript

function displayHours(hourItems) {    
    for(x in hourItems) {
        var mainDiv = document.getElementById('mainDiv');
        var div = document.createElement("div");
        var divColumn = document.createElement("div");   
    
        for(y in hourItems[x]) {
            if(y == 'heading') {
                var heading = document.createElement("p");
                heading.className = "fw-bold";
                heading.innerHTML = hourItems[x].heading;
                divColumn.appendChild(heading);
                continue;
            }
    
            var nameTime = document.createElement("p");
            var name = document.createElement("p");
            var time = document.createElement("p");
            nameTime.className = "fst-italic";
            name.className = "fst-italic"; 
            name.innerHTML = hourItems[x][y].name;
            time.innerHTML = hourItems[x][y].time;  
            nameTime.innerHTML = hourItems[x][y].name + '  ' + hourItems[x][y].time;
            divColumn.appendChild(nameTime);
        };
        
        divColumn.className = "card";        

        div.appendChild(divColumn);

        mainDiv.appendChild(div);

    };
}

displayHours(hourItems);

