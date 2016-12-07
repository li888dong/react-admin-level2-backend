import React from 'react'
import ReactDOM from 'react-dom'
import AddNewUserTable from './components/addNewUserTable.jsx'
import ChangeStatusTable from './components/changeStatusTable.jsx'
import StopServerTable from './components/stopServerTable.jsx'
import style from './components/Table.css'
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            addNewUserDisplay:true,
            changeStatusDisplay:false,
            stopServerDisplay:false
        }
    }
    addNewUserDisplay(e){
        this.setState({
            addNewUserDisplay:!this.state.addNewUserDisplay
        });
    }
    changeStatusDisplay(e){
        this.setState({
            changeStatusDisplay:!this.state.changeStatusDisplay
        })
    }
    stopServerDisplay(e){
        this.setState({
            stopServerDisplay:!this.state.stopServerDisplay
        })
    }
    render(){
        return(
            <div>
                <h3 onClick={this.addNewUserDisplay.bind(this)}>添加新用户 <small>点击显示隐藏</small></h3>
                {this.state.addNewUserDisplay?<AddNewUserTable/>:null}
                <hr/>
                <h3 onClick={this.changeStatusDisplay.bind(this)}>更改用户性质 <small>点击显示隐藏</small></h3>
                {this.state.changeStatusDisplay?<ChangeStatusTable/>:null}
                <hr/>
                <h3 onClick={this.stopServerDisplay.bind(this)}>终止服务 <small>点击显示隐藏</small></h3>
                <hr/>
                {this.state.stopServerDisplay?<StopServerTable/>:null}
            </div>
        )
    }
}
ReactDOM.render(
  <Main/>,
  document.querySelector('#example')
);
