import React from 'react';
import ListStore from '../stores/tableStore';
import SearchActions from '../actions/SearchActions';
import SearchBar from './SearchBar.jsx'
export default class MyButtonController extends React.Component{
  constructor(props){
    super(props);
    this.state={
      tableData: ListStore.getTableData()
    }
  }
  componentDidMount() {
    ListStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    ListStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    this.setState({
      tableData: ListStore.getTableData()
    });
  }

  handleData(result){
    SearchActions.setTableData(result);
  }
  emptyTable(){
    SearchActions.emptyTable()
  }
  emptyMobile(){
    SearchActions.emptyMobile()
  }
  emptyAll(){
    SearchActions.emptyAll()
  }
  render() {
    return <SearchBar
        handleData={this.handleData.bind(this)}
        emptyMobile={this.emptyMobile.bind(this)}
        emptyTable={this.emptyTable.bind(this)}
        emptyAll={this.emptyAll.bind(this)}
    />
  }
}


