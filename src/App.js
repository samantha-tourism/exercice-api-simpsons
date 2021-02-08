import './App.css';
import React from 'react';
import QuoteCard from './components/QuoteCard'
import axios from 'axios';

const sampleSimpson = {
    quote: "By chilling my loins I increase the chances of impregnating my wife.",
    character: "Apu Nahasapeemapetilon",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    characterDirection: "Left"
};


class App extends React.Component{
  constructor (props){
    super(props);
      this.state = {
        simpson:sampleSimpson,
      }
  }

  getSimpson = () => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          simpson: data[0],
        });
    });
  }

render(){
  return (
    <div className="App">
      <button type="button" onClick={this.getSimpson}>Get simpson</button>
      <QuoteCard simpson={this.state.simpson}/>
    </div>
  );
}
}
export default App;
