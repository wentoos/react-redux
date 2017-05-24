import React from 'react'
import store from './redux/store'
import { connect } from 'react-redux'

class PostBody extends React.Component {
    constructor(){
        super()
        this.handleNum = this.handleNum.bind(this)
    }
    handleNum(){
        let num=this.props.likes
        num++
        store.dispatch({type:'ADD_NUM',num:num})
    }
    render(){
        return(
                <div className='post-body'>
                    <div className='title'>love nineteen</div>
                    <div>
                        <div className='num likes-num' onClick={this.handleNum}>喜欢 {this.props.likes}</div>
                        <div className='num comment-num'>评论 {this.props.comments.length}</div>
                    </div>
                </div>

        )
    }
}
const mapStateToprops = state =>({
    comments:state.comments,
    likes:state.like
})
export default connect(mapStateToprops)(PostBody)
