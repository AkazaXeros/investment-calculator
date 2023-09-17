import classes from './UserInput.module.css';
import { useState } from 'react';

const UserInput = ({ onSubmit }) => {
  const [currentSavings, setCurrentSavings] = useState('');
  const [yearlyContribution, setYearlyContribution] = useState('');
  const [expectedReturn, setExpectedReturn] = useState('');
  const [duration, setDuration] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const providedData = {
      'current-savings': +currentSavings,
      'yearly-contribution': +yearlyContribution,
      'expected-return': +expectedReturn,
      duration: +duration,
    };

    onSubmit(providedData);
    resetHandler();
  };

  const resetHandler = () => {
    setCurrentSavings('');
    setYearlyContribution('');
    setExpectedReturn('');
    setDuration('');
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.inputGroup}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlyContribution}
            onChange={(e) => setYearlyContribution(e.target.value)}
          />
        </p>
      </div>
      <div className={classes.inputGroup}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type="button"
          className={classes.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};
export default UserInput;
