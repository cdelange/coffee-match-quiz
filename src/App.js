import React from 'react';
import Questions from './components/Questions';
import Result from './components/Result';
import Loader from './components/Loader';
import * as myConstants from './constants.js';
import './App.css';

const questions = myConstants.QUESTIONS;

class App extends React.Component {
  state = {
    count: 0,
    customerAnswers: [],
    currentAnswers: [],
    quizCompleted: false,
    multiCompleted: false,
    loadingResult: true,
    winner: ""
  };


// calls getResults if last question, increments counter to change to next question and calles resetForNextQuestion if not
  nextQuestion = () => {
    if (this.state.count === questions.length - 1){
      this.getResults();
    } else{
        this.setState({count: this.state.count + 1
  });
        this.resetForNextQuestion();
  }};



// when question moves to next one resets and disables submit button
  resetForNextQuestion = () => {
    this.setState({ multiCompleted: false, currentAnswers: [] });
  }


// toggles the state of multiCompleted, which controls whether the continue button on a question is enabled/disabled
  setMultiple = () => {
    if (this.state.currentAnswers.length > 0) {
      this.setState({multiCompleted: true})
    } else {
      this.setState({multiCompleted: false})
    }
  };


// adds or removes answer in 'customerAnswers' in app state array
  submitAnswer = (e) => {  //e is the event object
    let customerAnswers = [...this.state.customerAnswers]; //create a new array that is based on the current state of customerAnswers
    let currentAnswers = [...this.state.currentAnswers];

    if(customerAnswers.includes(e)) {
      for (let i = 0; i < customerAnswers.length; i++) {
        if (customerAnswers[i] === e) {
          customerAnswers.splice(i, 1);
        }
      }
      for (let i = 0; i < currentAnswers.length; i++) {
        if (currentAnswers[i] === e) {
          currentAnswers.splice(i, 1);
        }
      }
    } else {
      customerAnswers.push(e);          //adds item to it
      currentAnswers.push(e);
    }

    //at this point, customer answers is the updated array
    if (questions[this.state.count].isMulti) {
      this.setState({ customerAnswers });
      this.setState({ currentAnswers }, this.setMultiple);
    } else {
        this.setState({customerAnswers}, this.nextQuestion);    //sets state and uses callback to run nextQuestion after update is confirm
         //https://stackoverflow.com/questions/41324554/how-to-call-another-function-within-the-same-object
    }
  }


// creates an array by looking at coffeeDict and returning an array of the coffees with the highest points
  getMaxArray = (dict) => {
      return Object.keys(dict).filter(a => {
        return dict[a] === Math.max.apply(null, Object.values(dict));
      });
    }


// returns a random choice from the array of highest scoring coffees
  pickCoffee = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };


// either sends array to an API for processing, or processes the array itself.
  getResults = () => {
    const customerAnswers = [...this.state.customerAnswers];

    let coffeeDict = {
      'Suke Quto': 0,
      'Santa Gema': 0,
      'Regalo': 0,
      'Agua Colorada': 0,
      'Take Me Home': 0,
      'A.M. Rescue': 0,
      'Pick-Me-Up': 0,
      'Life Saver': 0,
      'Fresh Perspective': 0,
      'Spark': 0,
      'Connection': 0,
      'Kickstart': 0,
      'Stimulate': 0,
      'Rise and Shine': 0,
      'Good Vibes': 0
    };

    for (let i = 0; i < customerAnswers.length; i++) {
      let coffees;
      for (let j = 0; j < questions.length; j++) {
        if ((Object.keys(questions[j].answers).includes(customerAnswers[i]))) {
          coffees = questions[j].answers[customerAnswers[i]];
         }
      }
      for (let k = 0; k < coffees.length; k++) {
        coffeeDict[coffees[k]]++;
    }
  };
    this.setState({winner: this.pickCoffee(this.getMaxArray(coffeeDict))});
    this.showResults();
  };


// sets state of quizCompleted after last question is submitted
  showResults = () => {
    let quizCompleted = !this.state.quizCompleted;
    this.setState({quizCompleted})
  };


// loader animations functions
  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({loadingResult: false});
  };


  render() {
    let page;

    if (this.state.loadingResult && this.state.quizCompleted) {
      page = <Loader />;
      this.wait(2500);
    } else if (this.state.quizCompleted) {
      page = <Result winner={this.state.winner}  />;
    } else {
      page = <Questions questions={questions} count={this.state.count} submitAnswer={this.submitAnswer} nextQuestion={this.nextQuestion} multiCompleted={this.state.multiCompleted} />;
    }

    return (
      <div className="App container">
        {page}
      </div>
    )
  };
}


export default App;
