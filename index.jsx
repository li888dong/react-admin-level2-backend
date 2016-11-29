import React from 'react'
import ReactDOM from 'react-dom'
import SearchBarController from './components/SearchBarController'
import MyTable from './components/TableController'
class Main extends React.Component{
    render(){
        return(
            <div>
                <SearchBarController/>
                <MyTable/>
            </div>)
    }
}
ReactDOM.render(
  <Main/>,
  document.querySelector('#example')
);
