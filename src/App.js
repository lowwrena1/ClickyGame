import React, {Component} from 'react';
import Cards from "./components/cards/cards";
import Wrapper from "./components/wrapper/wrapper"; //why don't these frunction thru?
import Header from "./components/header/header";
import './App.css';

class App extends Component {
  state ={
    Cards,
    score: 0,
    highscore:0
  };
// Game over function tells the score info that if the score is higher than past score than update that to the new high score!
  gameOver= () => {
    if(this.state.score >this.state.highscore){
      this.setState({highscore: this.state.score}, function(){
        console.log(this.state.highscore)
      });
    } //start game at zero
    this.state.Cards.forEach( Card=> {
      Card.count = 0;
      
    });
    alert(`Game Over :(\nscore: ${this.state.score}`); 
    this.setState({score:0});
    return true;
  }

        
    
//function for click counts
// if card is hasn't been clicked and the count is 0 than add 1 point and shuffle  the cards
  handleClick = id => {
    this.state.Cards.find((clicked, i) => {
      if (clicked.id === id){
        if(Cards[i].count === 0){
          Cards[i].count = Cards[i].count + 1; 
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score); 

          }); 

          this.state.Cards.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
      
    });
  }
  
  render(){
    return (
      <Wrapper>
        
        <Header score={this.state.score} highscore={this.state.highscore}> Clicky Game </Header>
        {this.state.Cards.map(Cards => (
          <Cards
          handleClick={this.handleClick}
          id={Cards.id}
          key={Cards.id}
          image={Cards.image}
          />
        ))}
     
      </Wrapper>
    );
  }
}

export default App;
