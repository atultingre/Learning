import React from "react";
import Person from "./Person";

const NameList = () => {
  const persons = [
    { id: 1, name: "Atul", age: 25, skill: "React" },
    { id: 2, name: "Avinash", age: 27, skill: "Java" },
    { id: 3, name: "Gani", age: 23, skill: "JavaScript" },
    { id: 4, name: "Rahul", age: 25, skill: "Gym Trainer" },
    { id: 5, name: "Mayuri", age: 23, skill: "Human Resource Manager" },
    { id: 6, name: "Satish", age: 25, skill: "Management" }
  ];

  const personList = persons.map(person => (
    <div key={person.id}>
      <Person person={person} />
    </div>
  ));

  return <div>{personList}</div>;
};

export default NameList;
