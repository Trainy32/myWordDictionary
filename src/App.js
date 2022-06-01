import React from 'react';
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

import EditWord from './EditWord';
import WordList from './WordsList';

function App() {
  const history = useHistory()
  // let observer = new IntersectionObserver(callback, options);

  return (
    <Wrap className="App">
      <AppTitle onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}> 나 만의 단어 사전</AppTitle>
      <hr />
        <Route path='/' exact>
          <Buttons>
            <button onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}> UP </button>
            <button id='addbtn' onClick={() => { history.push('/edit_word/add_new') }}> NEW </button>
          </Buttons>
          <WordList />
        </Route>
        <Route path='/edit_word/:word_id' exact component={EditWord} />
    </Wrap>
  );
}

const Wrap = styled.div`
display:flex;
flex-direction:column;
`

const AppTitle = styled.div`
  background-color: #fff;
  position: fixed;
  width: 100%;
  height: 100px;

  border-bottom: 1px solid #aaa;
  box-shadow: 0px 3px 6px #0000002e;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 900;
  color:#5096f3;
`

const Buttons = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: flex-end;
  position:fixed;
  right: 5vw;
  bottom: 7vh;

  button {
    padding: 32px 20px;
    font-size: 20px;
    font-weight:600;
    margin: 20px 2px 2px 2px;
    border: none;
    border-radius: 300px;
    background-color:#ddd;
    box-shadow: 2px 2px 3px #0000002e;

    color:#133275;

    &:hover {
    color: #eee;
    background-color:#aaa;    
    box-shadow: 3px 3px 4px #0000003b;
    }
  }

  #addbtn {
    background-color:#5096f3;
    
    &:hover {
      color: #e2ebff;
      background-color:#133275;    
      box-shadow: 3px 3px 4px #0000003b;
    }

  }

`


export default App;
