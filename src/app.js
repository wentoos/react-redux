import React from 'react'
import PostBody from './PostBody'
import CommentBox from './CommentBox'
import { Provider } from 'react-redux'
import store from './redux/store'
class App extends React.Component {
    constructor(){
        super()
        this.state={
            num:''
        }
    }
    handleNum(e){
        this.setState({
            num:e
        })
    }
    render(){
        return(
            <Provider store={store}>
                <div>
                    <div className="top  clearfix">
                        <PostBody num={this.state.num}/>
                    </div>
                    <div className="bottom clearfix">
                        <CommentBox handleNum={this.handleNum.bind(this)}/>
                    </div>
                </div>
            </Provider>
        )
    }
}
export default App;
