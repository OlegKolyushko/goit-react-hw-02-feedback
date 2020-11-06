import React, { Component } from "react";
import Statistics from '../components/Statistics/Statistics';
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions';
import Section from '../components/Section/Section';
import Notification from '../components/Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = (e) => {
    const { good, neutral, bad } = this.state;
   return good + neutral + bad; 
// console.log(`${good} + ${neutral} + ${bad}`);
// const total = good + neutral + bad;
// const total = Object.values(this.state).reduce((sum,b)=> sum + b , 0) ;
// console.log(`${total}`);
// return total;
   
  };
  countPositiveFeedbackPercentage = (e) => {
    const { good } = this.state;

    if (this.countTotalFeedback() === 0) {
      return 0;
    }

    return Math.round((good / this.countTotalFeedback()) * 100);
  };
  // handlerGood = (e) => {
  //   this.setState( prevState => {
  //     return {
  //       good: prevState.good + 1,
  //     };
  //   });
  // };
  // handlerNeutral = (e) => {
  //   this.setState( prevState => {
  //     return {
  //       neutral: prevState.neutral + 1,
  //     };
  //   });
  // };
  // handlerBad = (e) => {
  //   this.setState( prevState => {
  //     return {
  //       bad: prevState.bad + 1,
  //     };
  //   });
  // };
  handlerButton = (event) => {
    const name = event.target.name;
    this.setState((prevState)=>{
      return {
        [name]: prevState[name] +1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    // const { total } = this.countTotalFeedback();
    // const { positive } = this.countPositiveFeedbackPercentage();
    return (
      <>
      <Section title="Please leave feedback">
      <FeedbackOptions
      options={Object.keys(this.state)}
      onLeaveFeedback={this.handlerButton}
      ></FeedbackOptions>
        {/* <h2>Please leave feedback</h2>
        <button type="button" onClick={this.handlerGood}>
          Good
        </button>
        <button type="button" onClick={this.handlerNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handlerBad}>
          Bad
        </button> */}

        {this.countTotalFeedback() <= 0 ? (<Notification message="No feedback given"></Notification>) : (

        <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>)
        }

        
        </Section>
        {/* <h2>Statistic</h2>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>Total:{this.countTotalFeedback()}</p>
        <p>Positive Feedback:{this.countPositiveFeedbackPercentage()} %</p> */}
      </>
    );
  }
}
