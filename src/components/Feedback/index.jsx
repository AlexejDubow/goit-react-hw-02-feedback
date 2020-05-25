import React, { Component } from "react";
import Statistics from "../Statistics";
import Feedbackoptions from "../FeedbackOptions";
import Section from "../Section";
import { countTotal, countPositivePercentage } from '../../helpers/index';
import Options from '../../utils/FeedbackButton'

class Feedback extends Component {
  state = {
    good: 0,
    bad: 0,
    neutral: 0,
  };
  handleClick = (e) => {
    const targetName = e.target.name;
    this.setState((prevState) => ({
      [targetName]: prevState[targetName] + 1,
    }));
  };
  
  render() {
    const { good, neutral, bad } = this.state;
    const total = countTotal(good, neutral, bad);
    const positivePercentage = countPositivePercentage(good, total);
    return (
        <Section title={"Please leave feedback"}>
          <Feedbackoptions
            options={Object.values(Options)}
            onLeaveFeedback={this.handleClick}
          />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
    );
  }
}
export default Feedback;
