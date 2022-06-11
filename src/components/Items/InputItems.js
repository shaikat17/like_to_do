import React, {useState} from 'react'

import './InputItems.css';

const InputItems = (props) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [isInputValid, setInputValid] = useState(true)

    const goalInputChangeHandler = event => {
        if (event.target.value.trim().length > 0) {
            setInputValid(true)
        }
        setEnteredValue(event.target.value);
    };
    
    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setInputValid(false)
            return;
        }
        props.onAddItem(enteredValue);
        setEnteredValue('')
    };

  return (
    <form onSubmit={formSubmitHandler}>

        {/* Dynamic Css */}
      <div className={`form-control ${isInputValid ? '' : 'invalid'}`}>

        {/* Inline css Style */}
        {/* <label style={{ color: isInputValid ? 'black' : 'red' }}>Add Items</label>
        <input type="text" style={{ borderColor: isInputValid ? 'black' : 'red',
                                    background: isInputValid ? 'transparent' : 'salmon' }} value={enteredValue} onChange={goalInputChangeHandler} /> */}
      
      <label>Add Items</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </div>
      <button className='btn' type="submit">Add Goal</button>
    </form>
  )
}

export default InputItems