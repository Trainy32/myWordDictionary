
const LOAD = 'words/LOAD'
const CREATE = 'words/CREATE'
const DELETE = 'words/DELETE'
const UPDATE = 'words/UPDATE'
const HIGHLIGHT = 'words/HIGHLIGHT'

export function loadWord (word_list) {
  return { type: LOAD, word_list }
}

export function createWord(word_data) {
  // console.log(word_data)
  return { type: CREATE, word_data }
}

export function deleteWord(word_idx) {
  return { type: DELETE, word_idx }
}

export function updateWord(word_data) {
  return { type: UPDATE, word_data }
}

export function highlightWord(word_idx) {
  return { type: HIGHLIGHT, word_idx }
}

const initialState = { 
  list: [
    { word_name: '단어명',
      word_type:'형용사', 
      description: '이런 단어야', 
      examples: '예문을써볼까', 
      highlight: false, },
  ]
}

export default function reducer (state = initialState, action = {})  {
  switch (action.type) {
    case 'words/LOAD': {
      return { list: action.word_list }
    }

    case 'words/CREATE': {
      const new_word_list = [...state.list, action.word_data]
      return { list: new_word_list }
    }
    
    case 'words/DELETE': {
      const new_word_list = state.list.filter( (e, i) => parseInt(action.word_idx) !== i );
      return { list: new_word_list }
    }

    case 'words/HIGHLIGHT': {
      const new_word_list = state.list.map( (e, i) => 
        parseInt(action.word_idx) === i ? {...e, highlight:!e.highlight} : e);
      return { list: new_word_list }
    }

    default:
      return state;

  }
}