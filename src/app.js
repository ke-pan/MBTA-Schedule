import React from 'react';
import '../node_modules/antd/lib/index.css';
import RailwayForm from './components/RailwayForm';
import List from './components/list';

const App = () => {
  return (
    <div>
      <RailwayForm />
      <List />
    </div>
    
  );
};

export default App;