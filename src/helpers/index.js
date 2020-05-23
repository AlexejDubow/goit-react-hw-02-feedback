const countTotal = (good, neutral, bad) => good + neutral + bad;

const countPositivePercentage = (good, total) => ((good * 100) / total).toFixed(2);

export { countTotal, countPositivePercentage };
