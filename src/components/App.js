import React, { Component } from 'react'
import '../styles/screen.sass'
import Part2 from './Part2'

class App extends Component {
  constructor (props){
    super (props)
    this.state = {
      name: 'World',
      choices: ''
    }
  }

// buttons that add text and remove circles
  buttonClicked = () => {
    this.setState ({
      name: 'Tameka'
    })
  }

  secondClick = () => {
    this.setState ({
      text:'Welcome to my page!'
    })
  }

  thirdClick = () => {
    this.setState ({
      text: <ul>
        <li>TJETTA</li>
        <li>BLU ENCHANTMENT</li>
      </ul>
    })
  }

//Disappering circle
  lastClick = () => {
    const circle = document.getElementById('circle').remove()
  }

//change text by user input
inputText = () => {
  const newText = document.getElementById('myInput').value
  const newChange = document.getElementById('firstDiv').innerHTML=newText
}

//Arrays
//includes array.methods samples
fourthClick = () => {
  const myArray= [
  'lobster',
  'chocolate',
  'shrimp',
  'coffee'
]
//push ('new items')
  myArray.push('tea')

  //splicing (what/new position, how many, add something else)
  myArray.splice(2, 1, 'crawfish')

  document.getElementById('arrayDiv').innerHTML=myArray[3]
  // .length will give you the numerical number back of whats in the array
  console.log(myArray)
}

  render () {
    return <div id='area'>
        <h1> Hello {this.state.name} <br />{this.state.text}</h1>

        <button onClick={this.buttonClicked}>NAME SWITCH</button>

        <button id='textAppender' onClick={this.secondClick}>APPENDER</button>

        <button id='textCreator' onClick={this.thirdClick}>TEXT CREATOR
        </button>
<hr />
        <div className='circles'>
        <div id='circle' />
        <button className='noCircle' onClick={this.lastClick}>CIRCLE BE GONE</button>
        </div>
<hr />
{/* input change */}
        <input id='myInput' type='text' value={this.props.inputText} />

        <button id='textChanger' onClick={this.inputText}>Change INPUT text!</button>

        <div id='firstDiv'>Random Text</div>

<hr />
{/* Arrays    */}
      <button id='textArray' onClick={this.fourthClick}>ADDING ARRAY
      </button>
      <div id='arrayDiv'>ARRAY HERE</div>
      <p>make sure to read console.log for array method samples</p>
      <br />
      <hr />
      <Part2 />
      </div>
  }
}
export default App
