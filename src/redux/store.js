import { createStore } from 'redux'

    let data = {
        comments:['这是第一条评论','这是第二条评论', '这是第三条评论'],
        like:0,
    }

    function rootReducer(state = data,action){
        //let newState = Object.assign({},state)数组拷贝也可以
        console.log(state);
        switch (action.type) {
            case 'ADD_COMMENT':
                return {...state,comments:[...state.comments,action.comment]}
            case 'ADD_NUM':
                return  {...state,like:action.num}
            default:
                return state
        }
    }


let store = createStore(rootReducer)
export default store
