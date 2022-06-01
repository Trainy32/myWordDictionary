import React, { useRef } from "react";

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { createWordFB } from './redux/modules/words'


const AddWord = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  // const current_word = useSelector((state) => state.words.list)

  const new_word_name = useRef('')
  const new_word_type = useRef('')
  const new_description = useRef('-')
  const new_examples = useRef('-')

  const addBtn = () => {
    if (new_word_name.current.value === '') {
      window.alert('단어명은 필수로 입력해주세요!')
    } else if (new_description.current.value === '') {
      window.alert('단어 설명은 필수로 입력해주세요!')
    }
    else {
      dispatch(createWordFB({
        word_name: new_word_name.current.value,
        word_type: new_word_type.current.value,
        description: new_description.current.value,
        examples: new_examples.current.value,
        highlight: false,
      } ))
      history.push('/')
    }
  }

  const addTest = () => {
    for (let i = 0; i < 10; i++) {
      dispatch(createWordFB(
        { word_name: new_word_name.current.value +'테스트 '+(i+1)+'번',
          word_type: new_word_type.current.value +'명사',
          description: new_description.current.value +'단어를 설명해요',
          examples: new_examples.current.value+'이런 예시는 어떨까',
          highlight: false 
        } ))
    }
  }


  return (
    <Wrap>
      <h3>새로운 단어 추가하기</h3>

      <WordInputs>
        <label htmlFor="myWord">*단어 :</label>
        <input type={'text'} id={'myWord'} ref={new_word_name} placeholder="나만의 단어를 적어주세요" />
      </WordInputs>
      <WordInputs>
        <label htmlFor="description"> 유형 : </label>
        <input type={'text'} id={'description'} ref={new_word_type} placeholder="타입이 뭔가요?  (ex.형용사)" />
      </WordInputs>
      <WordInputs>
        <label htmlFor="description">*설명 :</label>
        <input type={'text'} id={'description'} ref={new_description} placeholder="단어에 대해 설명해주세요" />
      </WordInputs>
      <WordInputs>
        <label htmlFor="examples"> 예시 : </label>
        <input type={'text'} id={'examples'} ref={new_examples} placeholder="어떻게 쓰는 단어인가요?" />
      </WordInputs>

      <button id="addbtn" onClick={() => { addBtn() }}>추가하기</button>
      <button onClick={() => { history.push('/') }}> 리스트로 </button>
      <button id="testing" onClick={() => { addTest() }}>테스트케이스 추가 *누르지 마세요</button>
    </Wrap>
  )

}

const Wrap = styled.div `
  margin: 120px auto;
  width: 50%;
  min-width: 350px;

  display: flex;
  flex-direction : column;
  align-items: center;

  h3 {
    margin: 0px 0px 40px 0px;
    text-align: center;
    color: #133275;
    font-size: 1.4em;
    font-weight: 900;
  }

  button {
    width: 75%;
    max-width: 400px;
    height: 50px;
    margin-top: 20px;  
    border: 1px solid #ddd;
    border-radius:50px;
    box-shadow: 1px 1px 3px #0000002e;
    color: #777; 
    font-size: 16px;
    font-weight:800;
  
    transition: all 0.2s ease-in;

    &:hover {
      background-color: #5096f3;
      color: #133275;
    }
  }

  #addbtn {
    background-color: #133275 ;
    color: #e2ebff;

    &:hover {
      background-color: #5096f3;
      color: #133275;
    }
  }

  #testing {
    background:#fff;
    border:none;
    margin-top: 50px;  
    height: 20px;
    box-shadow: none;
    color: #ccc;
    width: auto;
    font-size: 14px;
    font-weight:500;
    
    &:hover {
      color: #999;
    }
  }

`

const WordInputs = styled.div `
margin : 0px auto 20px auto;
width: 100%;
display:flex;
justify-content: center;

label {
  color: #133275;

}

input {
  width: 50%;
  max-width: 300px;
  height: 30px;
  margin-left: 20px;
  border: 1px solid #ddd;
  border-radius:50px;
  padding: 10px 20px;
  box-shadow: 1px 1px 3px #0000002e;
}

`


export default AddWord