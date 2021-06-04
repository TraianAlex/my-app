import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BackButton, Dropdown } from '../ui';

const unitOptions = ['pounds', 'cups', 'tablespoons', 'teaspoons', 'count'];

export const AddIngredientPage = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(null);
  const [units, setUnits] = useState(unitOptions[0]);
  const history = useHistory();

  const addToIngredients = async () => {
    if (!name || !amount || !units) {
      toast('Please complete all fields!');
      return;
    }
    const newIngredient = { name, amount, units };
    await fetch(`${process.env.REACT_APP_API_MEAL_TRACKER}/ingredients`, {
      method: 'post',
      body: JSON.stringify(newIngredient),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Successfully added ingredient!');
    history.push('/meal-tracker');
  };

  return (
    <div className="meal-tracker">
      <BackButton />
      <div className="centered-container">
        <h1>Add Ingredient</h1>
        <input
          type="text"
          placeholder="Enter ingredient name here"
          className="d-block w-100 mt-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          className="d-block w-100 mt-3"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <Dropdown
          className="d-block w-100 mt-3"
          onChange={(e) => setUnits(e.target.value)}
          options={unitOptions}
        />
        <button className="d-block w-100 mt-3" onClick={addToIngredients}>
          Add
        </button>
      </div>
    </div>
  );
};
