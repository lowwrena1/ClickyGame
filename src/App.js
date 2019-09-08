import React, {Component} from 'react';
import Cards from "./components/cards/cards";
import Wrapper from "./components/wrapper/wrapper"; 
import Header from "./components/header/header";
import './App.css';

class App extends Component {
  state ={
    Cards,
    score: 0,
    highscore:0
  };
  //update score
  
  //alert that the game is over with score 
  gameOver= () => {
    if(this.state.score >this.state.highscore){
      this.setState({highscore: this.state.score}, function(){
        console.log(this.state.highscore)
      });
    }
    this.state.cards.forEach( card=> {
      card.count = 0;
      
    });
    alert(`Game Over :(\nscore: ${this.state.score}`); 
    this.setState({score:0});
    return true;
  }

        
    
//function to handle the click counts
// if card clickcount is 0 add 1 and then shuffle 
  //if clicked is true (not zero) run game over
  handleClick = id => {
    
    this.state.Cards.find((clicked, i) => {
      if (clicked.id === id){
        if(Cards[i].count === 0){
          Cards[i].count = Cards[i].count + 1; 
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score); 

          }); 

          this.state.cards.sort(() => Math.random() - 0.5)
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
        {this.state.cards.map(cards => (
          <Cards
          handleClick={this.handleClick}
          id={cards.id}
          key={cards.id}
          image={cards.image}
          />
        ))}
     
      </Wrapper>
    );
  }
}

export default App;
