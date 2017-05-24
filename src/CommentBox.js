import React from 'react'
import store from './redux/store'
import { connect } from 'react-redux'
class CommentBox extends React.Component {
    constructor(){
        super()
        this.handleSubmit=this.handleSubmit.bind(this)
        // this.state={
        //     comments:[]
        // }
    }
    handleSubmit(e){
        e.preventDefault();
        let content = this.input.value;
        store.dispatch({type:'ADD_COMMENT',comment:content})
        // this.setState({
        // comments : store.getState()
        // })
    }

    handleTtext(){
        this.refs.commentFrom.reset()
    }
    // componentWillMount(){
    //     this.setState({
    //     comments : store.getState()
    //     })
    // }
    render(){
            return(
                <div>
                    <div className='comment-box'>
                        <div>
                            {
                                this.props.comment.comments.map(
                                    item=> <div key={Math.random()} className='comment'>{item}</div>
                                )
                            }
                        </div>
                        <form className='comment-form' onSubmit={this.handleSubmit} ref="commentFrom">
                            <input className='input' ref={input=> this.input = input} />
                            <button type="submit" className="submit-btn">提交</button>
                        </form>
                        <div className="underline"></div>
                    </div>
                </div>

        )
    }
}
const mapStateToprops = state =>({comment:state})
export default connect(mapStateToprops)(CommentBox)
