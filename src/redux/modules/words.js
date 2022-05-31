import { db } from '../../firebase'
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';


// 액션
const LOAD = 'words/LOAD'
const CREATE = 'words/CREATE'
const DELETE = 'words/DELETE'
const UPDATE = 'words/UPDATE'
const HIGHLIGHT = 'words/HIGHLIGHT'


// 액션생성함수
export function loadWord(word_list) {
  return { type: LOAD, word_list }
}

export function createWord(word_data) {
  return { type: CREATE, word_data }
}

export function deleteWord(word_idx) {
  return { type: DELETE, word_idx }
}

export function highlightWord(word_idx) {
  return { type: HIGHLIGHT, word_idx }
}

export function updateWord(word_data) {
  return { type: UPDATE, word_data }
}

// 미들웨어 : 파이어스토어 연동

export const loadWordFB = () => {
  return async function (dispatch) {
    const myword_list = await getDocs(collection(db, 'myWordDict'))

    let word_list = []

    myword_list.forEach((doc) => {
      word_list.push({ id: doc.id, ...doc.data() })
    })

    dispatch(loadWord(word_list))
  }
}

export const createWordFB = (word) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, 'myWordDict'), word);
    const word_data = { id: docRef.id, ...word }

    dispatch(createWord(word_data))
  }
}


export const deleteWordFB = (word_id) => {
  return async function (dispatch, getState) {
    if (!word_id) {
      window.alert('단어를 찾을 수 없어요!')
      return;
    }
    const docRef = doc(db, 'myWordDict', word_id)
    await deleteDoc(docRef);

    const _word_list = getState().words.list
    const word_idx = _word_list.findIndex((doc) => {
      return doc.id === word_id
    })

    dispatch(deleteWord(word_idx))
  }
}

export const highlightWordFB = (word_id) => {
  return async function (dispatch, getState) {
      const docRef = doc(db, 'myWordDict', word_id)
      const checker = (await getDoc(docRef)).data()
      await updateDoc(docRef, {highlight: !checker.highlight});

      const _word_list = getState().words.list
      const word_idx = _word_list.findIndex((doc) => {
      return doc.id === word_id })

      dispatch(highlightWord(word_idx))
  }
}



// 초기값
const initialState = {
  list: [
    {
      word_name: '단어명',
      word_type: '형용사',
      description: '이런 단어야',
      examples: '예문을써볼까',
      highlight: false,
    },
  ]
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'words/LOAD': {
      return { list: action.word_list }
    }

    case 'words/CREATE': {
      const new_word_list = [...state.list, action.word_data]
      return { list: new_word_list }
    }

    case 'words/DELETE': {
      const new_word_list = state.list.filter((e, i) => parseInt(action.word_idx) !== i);
      return { list: new_word_list }
    }

    case 'words/HIGHLIGHT': {
      const new_word_list = state.list.map((e, i) =>
        parseInt(action.word_idx) === i ? { ...e, highlight: !e.highlight } : e);
      return { list: new_word_list }
    }

    default:
      return state;

  }
}