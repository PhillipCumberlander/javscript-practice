
let firstPlayer = {
    first: 'Kobe',
    last: 'Bryant',
    team: 'Lakers',
    rings: 5
}

let secondPlayer = {
    first: 'Michael',
    last: 'Jordan',
    team: 'Bulls',
    rings: 6
}

///random number generator from 1 to 100
let randomNumber = Math.random() * 101

///practice with functions using global object literals
function random (num){

    if (num > 50) {
        console.log(firstPlayer.first + " won the game.")
        return firstPlayer.first + " won the game."
    }
    else if (num <= 50){
        console.log(secondPlayer.first + " won the game.")
        return secondPlayer.first + " won the game"

    }
}
// random(randomNumber)
///playing with objects to determine which matchup is the output
function basketballGame (){
    let teamList = {
        team1: 'Atlanta Hawks',
        team2: 'LA Lakers',
        team3: 'NY Knicks',
        team4: 'GS Warriors',
        team5: 'Charlotte Hornets',
        team6: 'Miami Heat'
    }

    let blockOne = ''
    let blockTwo = ''
    let randomNumber = Math.random() * 31

    if (randomNumber <= 10){
        blockOne = teamList.team1
        blockTwo = teamList.team6
        console.log(blockOne + " vs " + blockTwo)
    }
    else if (randomNumber <= 20) {
        blockOne = teamList.team2
        blockTwo = teamList.team5
        console.log(blockOne + " vs " + blockTwo)
    }
    else if (randomNumber > 20) {
        blockOne = teamList.team3
        blockTwo = teamList.team4
        console.log(blockOne + " vs " + blockTwo)
    }

}
// basketballGame()

let newArr = ['Phillip', 'Lamont', 'Kobe', 'Lebron']

///looping or iterating through array to determine if statements are true or false
function trueOrFalse () {

    newArr.forEach((name => {
        
        if (name == 'Phillip'){
            console.log( 'true')
        }
        else {
            console.log('false')
        }
        // console.log(name)
    })
    )
}

///unshift() adds to the front of array
newArr.unshift("Lisa")
console.log(newArr)

///pop() removes from end of array
newArr.pop()
console.log(newArr)

///splice() edit, delete or add to array
newArr.splice(0, 2, "yurrp", "turrd")
console.log(newArr)

///concat() merges two or more arrays together....can also take strings as argument
let secondArr = ["hawks", "braves", "thrashers", "dream", "falcons"]

let combinedArr = newArr.concat(secondArr)
console.log(combinedArr)

///slice() removes peice of an array and creates new array
let thirdArr = secondArr.slice(3)
console.log(thirdArr)

///sort() puts arrays in aplhapbetical order
console.log(secondArr.sort())

class newTeam {
    constructor(jersey, city, mascot) {
        this.jersey = jersey
        this.city = city
        this.mascot = mascot
    }
}

let newTeam1 = new newTeam("black", "ellenwood", "wolfpack")
console.log(newTeam1)