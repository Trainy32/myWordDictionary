import React, { useRef } from "react";

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'

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
    <div>
      단어 추가하기
      <p></p>
      <button onClick={() => { history.push('/') }}> 임시버튼 : 돌아가기 </button>
      <div>
        <label htmlFor="myWord">*단어</label>
        <input type={'text'} id={'myWord'} ref={new_word_name} placeholder="나만의 단어를 적어주세요" />
      </div>
      <div>
        <label htmlFor="description">유형</label>
        <input type={'text'} id={'description'} ref={new_word_type} placeholder="타입이 뭔가요? ex.형용사" />
      </div>
      <div>
        <label htmlFor="description">*설명</label>
        <input type={'text'} id={'description'} ref={new_description} placeholder="단어에 대해 설명해주세요" />
      </div>
      <div>
        <label htmlFor="examples">예시</label>
        <input type={'text'} id={'examples'} ref={new_examples} placeholder="어떻게 쓰는 단어인가요?" />
      </div>

      <button onClick={() => { addBtn() }}>추가하기</button>
      <button onClick={() => { addTest() }}>테스트케이스 추가 *누르지 마세요</button>
    </div>
  )

}



export default AddWord