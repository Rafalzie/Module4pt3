import  'react';
import './components/Card.module.css';
import Card from './components/Card';
import './App.css'

function App() {
  return (
    <div className="App">
      <Card 
        title="Interactive Card" 
        description=" click" 
        moreDetails="Press K on your keyboard to play Sound."
      />
    </div>
  );
}

export default App;
