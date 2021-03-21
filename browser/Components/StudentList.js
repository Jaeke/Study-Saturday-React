import React from 'react'

const StudentList = props => {
  // console.log('StudentList Props >>>', props);
  return (
    <tbody>
      <tr>
        <th>Name</th>
        <th>Test</th>
      </tr>
      {props.students.map((student) => {
        return (
          <tr key={student.id}>
            <td>{student.fullName}</td>
            <td onClick={() => props.displayStudent(student)}>Details</td>
          </tr>
        );
      })}
  </tbody>
  )
}

export default StudentList;

//>>> we can make details clickable with a "onClick" handler to our "Details" table data. With this, we don't have to use "addEventListener" and we can "map" through this and give the functionality to each piece of data without explicitly adding a different function to it.
//>>> if we want to make have the "onClick" render out the student details, we need to make a new component first to attach it to onClick and then map through each of the detail data of each student to give corresponding details
//>>> to make the rendering possible, we can leverage our "state" up in our main component, to store that student's state when its clicked. And so, once we have that "currentStudent" state in "Main" class component we can then pass it down to our "<SingleStudent />" component in "Main". That's why we need to maintain the hierchy of "state" being at the top and then pass it down to where it needs to go.
//>>> in the "StudentList" everytime as we are mapping through each student, we are also getting their name, so we can just pass the currentStudent object to the function that lives in our "Main" componenet.

//>>>   after passing down the displayStudent function to StudentList, we allowed "SingleStudent" to get the student detail data that was passed into 'curentStudent', now when we click, we are allowed to take any data we want from "Details" info and allows us to inject the data with JSX in

//>>>   if we want the "Details" button to change its text after being click, we can make it into a ternary function by replacing Details and place the function inside the "{ }".
//>>>>>>    the ternary can be, e.g. if the program has started running, the button will then say stop and it would turn red and otherwise it would be green and it would say start.
