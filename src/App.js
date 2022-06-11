import React, {useState} from 'react'

import ItemList from './components/Items/ItemList'
import InputItems from './components/Items/InputItems';

import './App.css';

function App() {

  const [currentItems, setItmes] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ])

  const addItemHandler = enteredText => {
    setItmes(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedItems;
    });
  };


  const deleteItemHandler = itemId => {
    setItmes(prevItems => {
      const updatedItems = prevItems.filter(item => item.id !== itemId)
      return updatedItems;
    })
  }

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (currentItems.length > 0) {
    content = (
      <ItemList items={currentItems} onDeleteItem={deleteItemHandler} />
    );
  }
  
  return (
    <div>
      <section id="goal-form">
        <InputItems onAddItem={addItemHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
}

export default App;
