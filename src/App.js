import React from 'react';
import Questions from './components/Questions';
import Result from './components/Result';
import Loader from './components/Loader';


import './App.css';


class App extends React.Component {
  state = {
    count: 0,
    questions: [
      {
        id: 1,
        title: 'What roast level do you like?',
        answers: [
          "Light roast",
          "Medium roast",
          "Dark roast",
          "I don't know"
        ],
        isMulti: false,
        url: "https://cdn.shopify.com/s/files/1/0939/8326/products/learning_roaster_4f168e5c-3734-40ab-9824-1c5356becb18_600x.jpg?v=1557608537"
      },
      {
        id: 2,
        title: 'What flavors are you looking for in a coffee?',
        answers: [
          "Dark Chocolate",
          "Bright and Fruity",
          "Bold",
          "Peanut Butter"
        ],
        isMulti: false,
        url: "https://cdn.shopify.com/s/files/1/0939/8326/products/learning_roaster_4f168e5c-3734-40ab-9824-1c5356becb18_600x.jpg?v=1557608537"
      },
      {
        id: 3,
        title: 'Do you add anything to your coffee?',
        answers:[
          "No, I drink it black",
          "Milk or Cream",
          "Flavored Creamer or Syrups",
          "Iced"
        ],
        isMulti: false,
        url: "https://cdn.shopify.com/s/files/1/0939/8326/products/learning_roaster_4f168e5c-3734-40ab-9824-1c5356becb18_600x.jpg?v=1557608537"
      },
      {
        id: 4,
        title: 'How do you usually make coffee at home?',
        answers: [
          "Espresso",
          "French Press",
          "Pour Over",
          "Cold Brew"
        ],
        isMulti: false,
        url: "https://cdn.shopify.com/s/files/1/0939/8326/products/learning_roaster_4f168e5c-3734-40ab-9824-1c5356becb18_600x.jpg?v=1557608537"
      },
    ],
    customerAnswers: [],
    currentAnswers: [],
    quizCompleted: false,
    multiCompleted: false,
    loadingResult: true,
    winner: ""
  };

  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({loadingResult: false});
  };

  //increments counter to change to next question
  nextQuestion = () => {
    if (this.state.count === this.state.questions.length - 1){
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

  setMultiple = () => {
    if (this.state.currentAnswers.length > 0) {
      this.setState({multiCompleted: true})
    } else {
      this.setState({multiCompleted: false})
    }
  };


  // stores answer in 'customerAnswers' in app state array
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
    if (this.state.questions[this.state.count].isMulti) {
      this.setState({ customerAnswers });
      this.setState({ currentAnswers }, this.setMultiple);
    } else {
        this.setState({customerAnswers}, this.nextQuestion);    //sets state and uses callback to run nextQuestion after update is confirm
         //https://stackoverflow.com/questions/41324554/how-to-call-another-function-within-the-same-object
    }
  }


  getMaxArray = (dict) => {
      return Object.keys(dict).filter(a => {
        return dict[a] === Math.max.apply(null, Object.values(dict));
      });
    }

  pickCoffee = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };


  // either sends array to an API for processing, or processes the array itself.
  getResults = () => {
    const answers = [...this.state.customerAnswers];
    // console.log(answers);

    const answerDict = {
      'Light roast': ['Suke Quto', 'Santa Gema', 'Regalo', 'Agua Colorada', 'Take Me Home'],
      'Medium roast': ['A.M. Rescue', 'Pick-Me-Up', 'Life Saver', 'Fresh Perspective', 'Spark', 'Connection'],
      'Dark roast': ['Kickstart', 'Stimulate', 'Rise and Shine', 'Good Vibes'],
      "I don't know": ['Kickstart'],
      "Dark Chocolate": ['A.M. Rescue', 'Pick-Me-Up', 'Good Vibes', 'Connection'],
      "Bright and Fruity": ['Suke Quto', 'Regalo', 'Agua Colorada', 'Pick-Me-Up'],
      "Bold": ['Kickstart', 'Stimulate', 'Rise and Shine'],
      "Peanut Butter": ['Santa Gema', 'Regalo', 'Life Saver', 'Spark'],
      "No, I drink it black": ['Suke Quto', 'Regalo', 'Agua Colorada', 'Pick-Me-Up'],
      "Milk or Cream": ['Santa Gema', 'A.M. Rescue', 'Pick-Me-Up', 'Good Vibes'],
      "Flavored Creamer or Syrups": ['A.M. Rescue'],
      "Iced": ['Connection', 'Fresh Perspective'],
      "Espresso": ['Regalo', 'Kickstart', 'Stimulate'],
      "French Press": ['A.M. Rescue', 'Stimulate', 'Rise and Shine', 'Good Vibes'],
      "Pour Over": ['Suke Quto', 'Santa Gema', 'Agua Colorada', 'Pick-Me-Up', 'Spark', 'Fresh Perspective'],
      "Cold Brew": ['Connection', 'Good Vibes']
    };

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
      'Good Vibes': 0,
      'Low Strung': 0
    };

    for (let i = 0; i < answers.length; i++) {
      let coffees = answerDict[answers[i]]
      for (let j = 0; j < coffees.length; j++) {
        coffeeDict[coffees[j]]++;
    }};

    this.setState({winner: this.pickCoffee(this.getMaxArray(coffeeDict))});
    this.showResults();
  };

  showResults = () => {
    let quizCompleted = !this.state.quizCompleted;
    this.setState({quizCompleted})
  };

  render() {
    let page;
    if (this.state.loadingResult && this.state.quizCompleted) {
      page = <Loader />;
      this.wait(2500);

    } else if (this.state.quizCompleted) {
      page = <Result winner={this.state.winner}  />;
    } else {
      page = <Questions questions={this.state.questions} count={this.state.count} submitAnswer={this.submitAnswer} nextQuestion={this.nextQuestion} multiCompleted={this.state.multiCompleted} />;
    }

    return (
      <div className="App container">
        {page}
      </div>
    )
  };
}


export default App;
