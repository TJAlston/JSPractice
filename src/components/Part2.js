import React, { Component } from 'react'
import '../styles/screen.sass'

class Part2 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'Angela' ,
      fact: 'is the Ace',
      truth: 'is not the Ace'
    }
  }

  inputText = () => {
    const newText = document.getElementById('sorors').value
    const newChange = document.getElementById('answer').innerHTML=newText
  }

  render () {
    let Tameka = 1
    let Leigh = 2
    let Nina = 3
    let Kijafa = 4
    let Angela = 5
    if (Tameka === 1) {
      // alert('Tameka is #1!')
      document.getElementById('answer')
    } else {
      document.getElementById('answer').this.state.truth
      // alert('Angela is #5')
    }
    return <div>
    <input id='sorors' type='text' value={this.props.inputText} />

    <button id='sororSubmit' onClick={this.inputText}>SUBMIT</button>

    <div>Who is the Ace from Deja Blu?</div>

    <div className='answer'>{this.inputText}</div>

    </div>
  }
}
export default Part2
