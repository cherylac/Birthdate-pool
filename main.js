
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.username = email.split('@')[0];
    }
}

class Contestant extends Person {
    constructor(name, email, birthdate, babyname){
    super(name, email);
    this.birthdate = birthdate;
    this.babyname = babyname;
    console.log(this);
  }

}

// TODO: Create another method on the `Contestant` class called `check birthdate`. Extra note.
// This method should calculate the amount of time between birthdate and actual date.

class Contest {
    constructor(){
        this.contestants = [];
        
    }

    updateRoster(contest){
        let rosterTbody = document.querySelector('#roster tbody');
        rosterTbody.innerHTML = '';
       
        // Populate Roster Content
        for ( let contestant of this.contestants){
            // Create a new row for the table.
            let newTR = document.createElement('tr');
    
            // Create table cells for each data point and append them to the new row.
            let nameTD = document.createElement('td');
            nameTD.innerHTML = contestant.name;
            newTR.appendChild(nameTD);
    
            let emailTD = document.createElement('td');
            emailTD.innerHTML = contestant.email;
            newTR.appendChild(emailTD);
            
            let birthdateTD = document.createElement('td');
            birthdateTD.innerHTML = contestant.birthdate;
            newTR.appendChild(birthdateTD);
            
            let babynameTD = document.createElement('td');
            babynameTD.innerHTML = contestant.babyname;
            newTR.appendChild(babynameTD);
    
            rosterTbody.appendChild(newTR);
        }
       
    }

    addContestant(){
              let name = prompt('Please enter your name', 'John Doe');
              let email = prompt('and your email', 'me@email.com');
              let birthdate = prompt('What day will the baby be born? Please enter as MM/DD/YYYY','08/31/2018');
              let babyname = prompt('What will thet baby\'\s name be?', 'Maria');
              let newContestant = new Contestant(name, email, birthdate, babyname);
              this.contestants.push(newContestant);
              this.updateRoster();
          }
}


//    findContestant(username){
//        
//        let foundContestant = this.contestants.find(function(contestants, index){
//            return contestant.username == username;
//        });
//        return foundContestant;
//    }

let rosterTbody = document.querySelector('#roster tbody');
// Clear Roster Content
rosterTbody.innerHTML = '';

let myContest;
// Create event listener for adding a contestant.
let addContestantButton = document.querySelector('#add-contestant');
addContestantButton.addEventListener('click', function(e){
    console.log('Calling addContestant() method.');
    let myContest = new Contest();
    myContest.addContestant();
})


