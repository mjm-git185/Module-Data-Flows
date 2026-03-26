let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

function nameAndHoues(arr){
  let namesOfGryffindor =""
for ( let i =0; i<arr.length; i++){
  const { firstName, house,lastName} = arr[i]
  if (house === "Gryffindor"){
    namesOfGryffindor += `${firstName} ${lastName}\n`

  }
}
return namesOfGryffindor
}

function staffPets(arr) {
  let namesOfTeachersPets =""
  for (let i = 0; i < arr.length; i++) {
    const { firstName, pet, occupation, lastName } = arr[i];
    if (occupation == "Teacher" && pet !== null)
      namesOfTeachersPets += `${firstName} ${lastName}`
  }
  return namesOfTeachersPets
}
 

console.log(nameAndHoues(hogwarts))
console.log(staffPets(hogwarts))
