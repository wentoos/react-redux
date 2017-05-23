import { createStore } from 'redux'

    let comments = [
        '这是第一条评论',
        '这是第二条评论',
        '这是第三条评论'
    ]
    function commentReducer(state = comments,action){

        switch (action.type) {
            case 'ADD_COMMENT':
                return [...state,action.comment]

            default:
                return state
        }
        
    }
let store = createStore(commentReducer)
export default store
