import React from 'react'
import './CostForm.css';
import {useState} from 'react';

const CostForm = (props) => {

  const [inputName, setInputName] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   name: '',
  //   amount: '',
  //   date: ''
  // });
  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  //   setUserInput({
  //     ...userInput,
  //     name: event.target.value
  //   })
  }
  const amountChangeHandler = (event) =>{
    setInputAmount(event.target.value);
  //   setUserInput({
  //     ...userInput,
  //     amount: event.target.value
  //   })
  }
  const dateChangeHandler = (event) =>{
    setInputDate(event.target.value);
  //   setUserInput({
  //     ...userInput,
  //     date: event.target.value
  //   })
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate)
    }
    props.onSaveCostData(costData);
    setInputName('');
    setInputAmount('');
    setInputDate('');
    
  }


  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input value={inputName} type="text" onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Amount</label>
          <input value={inputAmount} type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input value={inputDate} type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />
        </div>
        <div className='new-cost__actions'>
            <button type='submit'>Add cost</button>
            <button type='button' onClick={props.onCancel}>Cancel</button>
        </div>
      </div>
    </form>
  );
}

export default CostForm