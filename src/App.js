import React, {Component} from 'react';

import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }
  
  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});

  }
  
deleteCharhandler = (index ) => {
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userInput:updatedText});


}

  render () {
    const charList = this.state.userInput.split('').map((ch,index) => {
      return <Char 
      character={ch} 
      key={index} 
      clicked={() => this.deleteCharhandler(index)}/>
    });



    return (
      <div className="App">
       <input 
       type="text" //two way binding
       onChange={this.inputChangedHandler} 
       value ={this.state.userInput} />
       <p>{this.state.userInput}</p>
       <Validation inputLength={this.state.userInput.length}/>
       {charList}
      </div>
    )
  }
}

export default App;


// 1.create an input field (in app component) with a change listener which outputs the lenght of the entered text below instanceof. (in a paragraph)
// 2. crreate a new component (=> ValidationComponent) which receives the text length as a prompt
// 3. Inside the validationComponent, either output "text too short" or "text long enough" depdengin on the text length 
// 4.create another component (=> charcomponet) and style it as an inline box (=> display: inline-block,padding:16px, text-align:ClientRect, margin: 16px, border: 1px solid
// 5.Render a list of charcomponents where each charcompnent receives a diffrrent letter of the entered text ( in the initial input field) as a prompt
// 6. When you click a charcomponent, it should be removed from the enteredt text