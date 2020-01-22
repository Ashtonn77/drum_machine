import React from 'react';
import './App.css';
import data from './samples'

class DrumPad extends React.Component{

 componentDidMount(){
   document.addEventListener('keydown', this.handleKeyDown)
   window.focus();
 } 

componentWillUnmount(){
  document.removeEventListener('keydown', this.handleKeyDown)
}

handleKeyDown = e => {
  if(e.keyCode === this.props.letter.charCodeAt())
  this.audio.play();
  this.audio.currentTime = 0;
  this.props.handleDisplay(this.props.id);
}

handleClick = () => {
  this.audio.play();
  this.audio.currentTime = 0;
  this.props.handleDisplay(this.props.id);
}

render(){
return(
<div className="drum-pad"
id={this.props.id}
onClick={this.handleClick}
>
<h3>{this.props.letter}</h3>
<audio 
ref = { ref => this.audio = ref }
className='clip'
id={this.props.letter}
src={this.props.src}>
</audio>
</div>
)
}
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display: 'Let\'s make some music, shall we?' 
    }
  }

  handleDisplay = display => this.setState({display})

  render(){
    return(
      <div className="container">

      <div className="drum-machine">
    <div className="display">{this.state.display}</div>

     {data.map( (drum, index) => (
        <DrumPad
        key={index}
        id={drum.id}
        letter={drum.letter}
        src={drum.src}
        handleDisplay={this.handleDisplay}
        onClick={this.handleClick}
        />
      ))}

      </div>

      </div>
    )
  }
}

export default App;
