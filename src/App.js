import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Searchbar from './components/Searchbar';
import React from 'react';

function App() {
  

  return (
    <div className="App">
      <Header />
      <Searchbar />
      <ItemList />
    </div>
  );
}

export default App;
