import React from 'react';
import PropTypes from 'prop-types';
import './styles/index.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {
      options.map((option) => (<button key={option} type="button" name={option} value={option} onClick={onLeaveFeedback}>{option}</button>))
    }
  </>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};
