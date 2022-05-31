import React from 'react';
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

import AddWord from './AddWord';
import WordList from './WordsList';

function App() {
  const history = useHistory()

  return (
    <div className="App">
      <h1> 나만의 단어 사전</h1>
      <Route path='/' exact>
        <button onClick={()=>{history.push('/add_word')}}> 추가하기 </button>
        <WordList/>
      </Route>
        <Route path='/add_word' exact component={AddWord}/>
    </div>
  );
}

export default App;
