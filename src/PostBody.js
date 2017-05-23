import React from 'react'
import store from './redux/store'
import { connect } from 'react-redux'
class PostBody extends React.Component {
    render(){
        
        return(

                <div className='post-body'>
                    <div className='title'>love nineteen</div>
                    <div>
                        <button className='num likes-num'>喜欢</button>
                        <button className='num comment-num'>评论 {this.props.comment.length}</button>
                    </div>
                </div>

        )
    }
}
const mapStateToprops = state =>({comment:state})
export default connect(mapStateToprops)(PostBody)
