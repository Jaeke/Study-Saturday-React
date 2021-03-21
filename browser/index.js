import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Components/main'



ReactDOM.render(<Main />, document.getElementById('app'));
//>>> we are using ReactDOM to send a fixed html text into the <div> with the ID "app".
//>>> the index is our "table of content" that will connect our JSX from our components in other files through the use of "ReactDOM.render()"
