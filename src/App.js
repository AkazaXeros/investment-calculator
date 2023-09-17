import { useState } from 'react';
import Header from './components/Header/Header';
import ResultsTable from './components/ResultsTable/ResultsTable';
import UserInput from './components/UserInput/UserInput';

function App() {
  const [data, setData] = useState([]);

  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput['current-savings'];
    let initialInvestment = +currentSavings;
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution,
        initialInvestment,
      });
    }
    setData([...yearlyData]);
  };

  return (
    <div>
      <Header />

      <UserInput onSubmit={calculateHandler} />

      {data.length === 0 && (
        <p style={{ textAlign: 'center' }}>No calculated investment yet...</p>
      )}
      {data.length > 0 && <ResultsTable yearlyData={data} />}
    </div>
  );
}

export default App;
