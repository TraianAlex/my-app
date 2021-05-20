import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BackButton, Dropdown } from '../ui';

const unitOptions = ['pounds', 'cups', 'tablespoons', 'teaspoons', 'count'];

export const AddIngredientPage = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(null);
  const [units, setUnits] = useState(unitOptions[0]);
  const history = useHistory();

  const addToIngredients = async () => {
    const newIngredient = { name: name.toLowerCase(), amount, units };
    await fetch('http://127.0.0.1:8080/ingredients', {
      method: 'post',
      body: JSON.stringify(newIngredient),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    alert('Successfully added ingredient!');
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
