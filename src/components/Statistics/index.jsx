import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification';

import './styles/index.module.css';

const Statistics = ({
  good, neutral, bad, total, positivePercentage,
}) => (
  <>
    <h2>Statistics</h2>
    {!total && <Notification message="No feedback given" />}
    {!!total && (
    <>
      <ul>
        <li>Good: { good }</li>
        <li>Neutral: { neutral }</li>
        <li>Bad: { bad }</li>
        <li>Total: { total }</li>
        <li>Positive feedback: { positivePercentage } %</li>
      </ul>
    </>
    )}
  </>
);


export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
