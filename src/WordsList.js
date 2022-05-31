import React from "react";

import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { loadWordFB, deleteWordFB, highlightWordFB } from './redux/modules/words'

const WordList = (props) => {
  const myWords = useSelector((state)=>state.words.list)
  const dispatch = useDispatch()

  React.useEffect( () => {
    dispatch (loadWordFB());
      }, []); 

  return (
    <WordWrap>
      {myWords.map((word, i) => 
      <Wordcard key={i}>
        <button onClick={()=>{ dispatch(deleteWordFB(word.id)); }} >X</button>
        <button onClick={()=>{ dispatch(highlightWordFB(word.id))}}>
          {myWords[i].highlight ? '★' : '☆'}</button>

        <h2> {word.word_name} </h2>
        <label> 설명 </label> <p> {word.description} </p>
        <label> 예문 </label> <p> {word.examples} </p>
      </Wordcard>
      )}
    </WordWrap>
  )

}

const WordWrap = styled.div`
display:flex;
`
const Wordcard = styled.div`
background-color: #eee;
padding: 20px;
margin: 10px;
 h2 {text-align:center;}
`

export default WordList