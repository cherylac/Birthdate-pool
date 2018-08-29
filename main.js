// TODO: Create a base class called `Person` that takes the parameters `name`
// and `email` and makes those available as attributes. The `constructor()`
// method should also break the username from before the `@` symbol in the
// `email` value and use that to store on a `this.username` property.

// TODO: Create another class that extends the `Person` class called `Contestant`.
// (NOTE: You will need to
// use the `super()` command so you don't lose the functionality of the
// `constructor()` method from the `Person` class.)
//


// TODO: Create another method on the `Contestant` class called `check birthdate`.
// This method should calculate the amount of time between birthdate and actual date.




// TODO: Set up Contest class so we can run the whole roster from it.
class Contest
    constructor(contestants, dateguess){
        this.contestants = [];
    }

    /////////////////////////////////////////
    // TODO: ADD the `addContestant` method /////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    //
    // Create a method called `addContestant()` that prompts the user for
    // information required to create a new `Contestant` object (`name`, `email`, `dateguess` `babyname`)
    // and does so, then adds the student to the `this.contestants` Array. Be sure
    // to update the roster display by calling `updateRoster()`. You will need
    // to reference the Class instance using `this` as a parameter for
    // `updateRoster()`, so it might look like this: `updateRoster(this)`.


    
    // TODO: Now that we have retrieved the specific `Contestant` object we want
    // to work with, we can use the appropriate method on the `Contestant` object
    // to determine winner.



    //////////////////////////////////////////////
    // Methods provided for you -- DO NOT EDIT /////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////

    findContestant(username){
        // This method takes in a username and looks
        // for that username on contestant objects contained in the `this.contestants`
        // Array.
        let foundContestant = this.contestants.find(function(contesants, index){
            return constestant.username == username;
        });
        return foundContestant;
    }
}




///////////////////////////////////////////////////
//////// Main Script /////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// This script runs the page. You should only edit it if you are attempting a //
// stretch goal. Otherwise, this script calls the functions that you have     //
// created above.                                                             //
////////////////////////////////////////////////////////////////////////////////


let rosterTbody = document.querySelector('#roster tbody');
// Clear Roster Content
rosterTbody.innerHTML = '';

// Create event listener for adding a contestant.
let addContestantButton = document.querySelector('#add-contestant');
addContestantButton.addEventListener('click', function(e){
    console.log('Calling addContestant() method.');
    myContest.addStudent();
})



// Call Update Roster to initialize the content of the page.
updateRoster(myContest);

function updateRoster(contest){
    let rosterTbody = document.querySelector('#roster tbody');
    // Clear Roster Content
    rosterTbody.innerHTML = '';
   
    // Populate Roster Content
    for (contestant of contest.contestants){
        // Create a new row for the table.
        let newTR = document.createElement('tr');

        // Create table cells for each data point and append them to the new row.
        let nameTD = document.createElement('td');
        nameTD.innerHTML = contestant.name;
        newTR.appendChild(nameTD);

        let emailTD = document.createElement('td');
        emailTD.innerHTML = contestant.email;
        newTR.appendChild(emailTD);

        

        

        

        // Append the new row to the roster table.
        rosterTbody.appendChild(newTR);
    }
   


    
    }
}
