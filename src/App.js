import React from 'react';
import Entry from './Components/Entry';
import Table from './Components/Table';


const App = () => {
  return (
    <div className="container">
        <h1>Welcome to your store!</h1>
      
      <div className="flex-row">
        <div className="flex-large">
          
            Enter your items here
            
        </div>
        <div className="flex-large">
          <h2>Your basket</h2>
          <Table />
      <Entry />
        </div>
      </div>
    </div>
  )
}

export default App;
