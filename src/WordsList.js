import React from "react";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

const WordList = (props) => {
  const history = useHistory()

  return (
    <div>
      <h2> 단어이름 </h2>
      <p> <label>설명</label> 단어 설명</p>
      <p> <label>예문</label> 예문</p>
    </div>
  )

}


export default WordList