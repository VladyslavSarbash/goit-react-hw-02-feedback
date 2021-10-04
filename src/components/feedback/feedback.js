import s from './feedback.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Statistics from './statistics/statistics';
import FeedbackOption from './feedbackOptions/feedbackOptions';
import Notification from './notification/notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodFeedback = () => {
    this.setState(state => ({
      good: state.good + 1,
    }));
  };

  neutralFeedback = () => {
    this.setState(state => ({
      neutral: state.neutral + 1,
    }));
  };

  badFeedback = () => {
    this.setState(state => ({
      bad: state.bad + 1,
    }));
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeedback = () => {
    const { good, neutral, bad } = this.state;
    if (good === 0) return 0;
    return Math.floor((good / (good + neutral + bad)) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <section className={s.section}>
        <h1>Please leave feedback</h1>
        <FeedbackOption
          option={this.state}
          onLeaveFeedback={{
            good: this.goodFeedback,
            neutral: this.neutralFeedback,
            bad: this.badFeedback,
          }}
        />
        {this.totalFeedback() === 0 ? (
          <Notification message="No feedback given"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.totalFeedback()}
            positivePercentage={this.positiveFeedback()}
          />
        )}
      </section>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

Notification.propTypes = {
  message: PropTypes.string,
};

FeedbackOption.propTypes = {
  option: PropTypes.object,
  onLeaveFeedback: PropTypes.objectOf(PropTypes.func),
};

export default Feedback;
