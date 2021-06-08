
let persons=new Array();


persons.push({
    name:"md Sohrab Hossian Sohel",
    roll:902833
})
persons.push({
    name:"md Doyal Babu",
    roll:902802
})

persons[0].data={ 
    name:"md Doyal Babu",
    roll:902802
}
persons[0].data.player={ 
    name:"md Doyal Babu",
    roll:902802
}
persons[0].data.player.room={ 
    name:"md Doyal Babu",
    roll:902802
}
persons[0].data.player.room.bedroom={ 
    name:"md Doyal Babu",
    roll:902802
}
persons[0].data.player.room.bedroom.food={ 
    name:"md Doyal Babu",
    roll:902802
}
persons[0].data.player.room.bedroom.food.breakfast={ 
    name:"md Doyal Babu",
    roll:902802
}

console.log(persons[0].data.player.room.bedroom.food.breakfast)
