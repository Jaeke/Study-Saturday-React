import React, { Component } from 'react';
import axios from 'axios'
import StudentList from './StudentList'
import SingleStudent from './SingleStudent'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      currentStudent: {},
    }

    this.displayStudent = this.displayStudent.bind(this)
  }

  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    try {
      const { data } = await axios.get('/student');
      this.setState({ students: data })
    } catch (error) {
      console.error(error)
    }
  }

  displayStudent(student) {
    this.setState({ currentStudent: student });
  }

  render() {
    // const { students } = this.state;
    return (
      <div>
        <h1>Student</h1>
        <table>
          <StudentList
            students={this.state.students}
            displayStudent={this.displayStudent}
          />
        </table>
        {this.state.currentStudent.id ? <SingleStudent currentStudent={this.state.currentStudent}/> : ('')
        }
      </div>
    );
  }
}

//>>>   "this" referense to the current function we are in.

//>>>   students={this.state.students}, since we deconstruct "this.state", we can just props equal to current state {students}
//>>>>>   "students" is our props since we set it in our "constructor". This name has to match our "props.<name>.map", the props that we passed to our StudentList.js file
//>>>>>   {this.state.students}, or {students}, this is the current state that is passed in.

//>>>   "displayStudent" is our function that will be charge of displaying the students details when "Details" get click.
//>>>>>     the function takes "student" object from from the console.log.
//>>>>>>     and that "student" object will then be set on "state" in the "currentStudent: {}" through "this.setState"
//>>>>>>      what "displayStudent" is doing, is just waiting for us to click the "Details" and then its going to set that student's object to the "currentStudent" on state

//>>>   we can take "displayStudent" function and we can pass is down to our "<StudentList />" component. To make it happen, we can placed "display"
//>>>>>>     we are using "this" so that we can do "this.displacyStudent", and through passing it down to "StudentList" we have attached the function onto props.

//>>>   when we pass down the "displayStudent", we will lost the "this" context from the constructor, becuase the "this" context that we want is defined in constructor, and the "this" context in displayStudent is now different
//>>>>>>      to keep the "this" context in constructor and have other functions use it, we need to bind it.

//>>>   since we want the student details table to be hidden when user comes into the website, we can wait to map over a student because we don't have a "current student" yet when we load our page so we want to wait until we actually want to see someone's details.
//>>>>>>    we can use "Ternary Operator" to create logic, to only display this when we have a current student, so if there's no current student, then we'll basically return nothing. If we do have a current student we want to show the single student component.
//>>>>>>    if it's true that there are current student on the page, then we want the student details to show, if theres no current student detail then we want the details to be hidden by rendering a empty string ''.
