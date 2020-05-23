import React from 'react';
import PropTypes from 'prop-types';
import './styles/index.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <>
    <button name="good" type="button" onClick={onLeaveFeedback}>
      Good
    </button>
    <button name="neutral" type="button" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button name="bad" type="button" onClick={onLeaveFeedback}>
      Bad
    </button>
  </>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
