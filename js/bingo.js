// This content appears on the Bingo page. Text between double quotes can be edited.
// Don't remove quotes ("), backticks(`), <p> or <br>, unless you know what you're doing.
// Whatever is INSIDE the quotes, and not one of the things above, will appear on the Bingo page as plain text.

var bingoItems = 
{
    item1 : {
        name : "",
        description :
         
        `
        <p>
        Monday, Friday - Doors: 4:30, Bingo: 6:30 - 8:30
        </p>

        <p>
        Saturday - Doors: 11:45, Bingo: 1:30 - 3:30
        </p>

        <br>
        <p>
        Mondays and Fridays doors open at 4:30pm, Mini's start at 6:05pm, and bingo starts at 6:30pm. Saturdays doors 
        open at 11:45am, Mini's start at 1:15pm, and bingo starts at 1:30pm.
        Payouts are $135, $175 for the snowflake, $1,500 for the intermission progressive fullcard, and $1,000 
        for the end of night fullcard.
        Admission prices are: $27 for a computer with 90 faces and one 9-on-paper to dab. Extra 9-on papers are $3. Paper 
        only players-first pack $15, additional packs $5. Intermission coveralls are $5 each. Early bird double 
        dab progressive coverall are 2 cards for $5.
        </p>
        <br>

        <p>
        Text "paridise": 
        <br>
        (844)-588-8285
        <br>
        to sign up for alerts
        </p>
        `

    }
};

// Edit the portion below if you're comfortable with JavaScript

function displayBingo(bingoItems) {    
    for(x in bingoItems) {
        var mainDiv = document.getElementById('mainDiv');
        var div = document.createElement("div");
        var divColumn =document.createElement("div");
        var name = document.createElement("p");
        var description = document.createElement("p");
        
        name.className = "fw-bold";
        description.className = "lead";

        name.innerHTML = bingoItems[x].name;
        description.innerHTML =  bingoItems[x].description;                
        
        divColumn.appendChild(name);
        divColumn.appendChild(description);
        divColumn.className = "card";        

        div.appendChild(divColumn);

        mainDiv.appendChild(div);
    };
}

displayBingo(bingoItems);