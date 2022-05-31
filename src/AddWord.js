import React from "react";
import { useHistory } from 'react-router-dom';

const AddWord = (props) => {
  const history = useHistory()

  return (
    <div>
      단어 추가하기
      <p></p>
      <button onClick={() => { history.push('/') }}> 임시버튼 : 돌아가기 </button>
      <div>
        <label htmlFor="myWord">단어</label>
        <input type={'text'} id={'myWord'} placeholder="나만의 단어를 적어주세요" />
      </div>
      <div>
        <label htmlFor="description">설명</label>
        <input type={'text'} id={'description'} placeholder="단어에 대해 설명해주세요" />
      </div>
      <div>
        <label htmlFor="examples">예시</label>
        <input type={'text'} id={'examples'} placeholder="어떻게 쓰는 단어인가요?" />
      </div>

      <button>추가하기</button>
    </div>
  )

}



export default AddWord