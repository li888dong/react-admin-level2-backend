import React from 'react'
import ReactDOM from 'react-dom'
import AddNewUserTable from './components/addNewUserTable.jsx'
import ChangeStatusTable from './components/changeStatusTable.jsx'
import StopServerTable from './components/stopServerTable.jsx'
class Main extends React.Component{
    render(){
        return(
            <div>
                <h3>添加新用户</h3>
                <AddNewUserTable/>
                <h3>更改用户性质</h3>
                <ChangeStatusTable/>
                <h3>终止服务</h3>
                <StopServerTable/>
            </div>
        )
    }
}
ReactDOM.render(
  <Main/>,
  document.querySelector('#example')
);
