import React, { useRef } from "react";

import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { loadWordFB, deleteWordFB, highlightWordFB } from './redux/modules/words'
import { useHistory } from 'react-router-dom';

const WordList = (props) => {
  const myWords = useSelector((state)=>state.words.list)
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect( () => {
    dispatch (loadWordFB());
      }, []); 

  return (
    <WordWrap>
      {myWords.map((word, i) => 
      <Wordcard key={i} checked={word.highlight}>

        <CardTitle>
          <h2> {word.word_name} </h2>
            <CardBtn>
              <Correction onClick={()=>{history.push('/edit_word/'+word.id)}}>수정</Correction>
            <button onClick={()=>{ dispatch(highlightWordFB(word.id))}} style={{margin:'0px 0px 10px 0px'}}>
              {myWords[i].highlight ? '★' : '☆'}</button>
            <button onClick={()=>{ dispatch(deleteWordFB(word.id))}}>X</button>
            </CardBtn>
        </CardTitle>

        <WordType> {'[ '+ word.word_type +' ]'} </WordType>

        <span> <sup> 설명 </sup> {word.description} </span>
        <WordExample> <sup> 예문 </sup> {word.examples} </WordExample>

      </Wordcard>
      )}
    </WordWrap>
  )
}

const WordWrap = styled.div`
  display:flex;
  width: 85%;
  margin: 120px auto 0px auto;
  flex-wrap: wrap;
  justify-content: center;
`
const Wordcard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.checked ? '#133275' : '#fff'};
  color: ${(props) => props.checked ? '#e2ebff' : '#000'};
  padding: 10px 20px 20px 20px;
  margin: 10px;
  min-width: 300px;

  border: 1px solid #d0d0d0;
  border-radius: 10px;
  box-shadow: 2px 2px 3px #0000002e;

  line-height:150%;

  &:hover {
    margin: 9px 11px 11px 9px;
    box-shadow: 3px 3px 4px #0000003b;
  }

  button{
    color: ${(props) => props.checked ? '#5271b3' : '#000'};
    &:hover {
      color:${(props) => props.checked ? '#e2ebff' : '#004df4'};
    }
  }

  sup {
    color: #99aacd;
    font-weight: 500;
    font-size: 10px;
    margin-right: 3px;
  }
`
const CardTitle = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h2 {
    margin:10px 0px 5px 0px;
  }
`

const CardBtn = styled.div `
  display:flex;
  align-items:center;
  margin:0px;
  
  button {
    background-color: transparent;
    border: none;
    text-align: center;
    font-size: 28px;
    font-weight : 600; 
    margin-left: 7px;
    padding: 0px 3px;
  }
  `
const Correction= styled.span `
  color: #99aacd;
  margin-bottom: 3px;
  margin-right: 10px;
  font-weight: 300;
  font-size: 14px;
  &:hover {
    font-weight: 900;
  }
`


const WordType = styled.span`
    color: #99aacd;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 5px;
`

const WordExample = styled.span `
color:#5096f3;
`

export default WordList