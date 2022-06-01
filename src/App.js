import React from 'react';
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

import AddWord from './AddWord';
import WordList from './WordsList';

function App() {
  const history = useHistory()

  return (
    <Wrap className="App">
      <AppTitle> 나 만의 단어 사전</AppTitle>
      <hr/>
      <Route path='/' exact>
        <Buttons>
          <button onClick={ () => { window.scrollTo({top:0,left:0,behavior:'smooth'}) } }> UP </button>
          <button id='addbtn' onClick={()=>{history.push('/add_word')}}> NEW </button>
        </Buttons>
        <WordList/>
      </Route>
        <Route path='/add_word' exact component={AddWord}/>
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

const Buttons = styled.div `
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
    color: #e2ebff;
    background-color:#5096f3;    
    box-shadow: 3px 3px 4px #0000003b;

  }
  }
  #addbtn {
    background-color:#5096f3;
  }

`


export default App;
