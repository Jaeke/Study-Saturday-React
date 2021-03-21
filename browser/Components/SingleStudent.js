import React, { Fragment } from 'react'

const SingleStudent = props => {
  const { fullName, tests } = props.currentStudent;
  const averageScore = Math.round(
    tests.reduce((a, b) => b.grade + a, 0)/ tests.length
  )

  return (
    <div>
      <h1>{fullName}</h1>
      <h1>Average Grade: {averageScore}%</h1>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
         </tr>
        </thead>
        <tbody>
          {tests.map(test => {
            return (
              <tr key={test.id}>
                <td>{test.subject}</td>
                <td>{test.grade}%</td>
              </tr>
            );
          })}

        </tbody>
      </table>
    </div>
  )
}


export default SingleStudent;

//>>>   we are going to pass down props, we are going to pass down the data from one single student, and we're going to pass that our new "SingleStudent" component
//>>>   in React, we want to pass in "props" as an argument so we can always receive it.
//>>>   after passing the "props" down to SingleStudent in "main.js" file. We can now access any students' database and withdraw any data from it, and inject the data we want into SingleStudent function with JSX expression.
//>>>   de-structure the variable and assigned to the "props.currentStudent".
//>>>>>>    we are using "props.currentStudent", because we passed our props in "main.js" down as currentStudent
