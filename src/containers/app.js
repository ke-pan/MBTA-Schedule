import React from 'react';
import '../../node_modules/antd/lib/index.css';
import SearchForm from './SearchForm';
import List from './list';
import Header from '../components/header';

const style = {
  width: '90%',
  margin: '0 auto',
}

const App = () => {
  return (
    <div>
      <Header />
      <div style={style}>
        <SearchForm />
        <List />
      </div>

    </div>
    
  );
};

export default App;