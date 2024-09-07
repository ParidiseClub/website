// The content here appears on the home page. Text between double quotes can be edited.
// Whatever is INSIDE the quotes will appear on the landing page as plain text.

var hourItems = 
{
    hours : {
        heading : "Club Hours",
        item1 : {
            name : "7 days/week :",
            time : "Noon - 9:00 PM"
        },
        item2 : {
            name : "*Subject to change",
            time : ""
        }
    },
    sunday : {
        heading : "Sunday",
        item4 : {
            name : "Available for New Meeting :",
            time : "12:00 PM - 1:00 PM"
        },
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
        item2 : {
            name : "Available for New Meeting(s) :",
            time : "2:00 PM thru 8:00 PM"
        },
    },
    tuesday : {
        heading : "Tuesday",
        item4 : {
            name : "Available for New Meeting(s) :",
            time : "12:00 PM thru 4:00 PM"
        },
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
        item3 : {
            name : "Available for New Meeting :",
            time : "12:00 - 1:00 PM OR 12:30 - 1:30 PM"
        },
        item4 : {
            name : "Available for New Meeting :",
            time : "5:00 - 6:00 PM OR 5:30 - 6:30 PM"
        },
        item2 : {
            name : "Keep it Simple Big Book :",
            time : "8:00 PM"
        },
    },
    friday : {
        heading : "Friday",
        item2 : {
            name : "Available for New Meeting(s) :",
            time : "12:00 PM thru 6:00 PM"
        },
        item1 : {
            name : "Drug Addicts Anonymous :",
            time : "7:00 PM"
        },
    },
    saturday : {
        heading : "Saturday",
        item1 : {
            name : "Available for New Meeting(s) :",
            time : "10:00 AM thru 5:00 PM"
        },
        item2 : {
            name : "Stay While You're Here :",
            time : "7:00 PM"
        },
        item3 : {
            name : "Campfire Meeting :",
            time : "9:00 PM"
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

