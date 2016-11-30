import React from 'react';
import TableStore from '../stores/tableStore';
import SearchActions from '../actions/SearchActions';
import SearchBar from './SearchBar.jsx'
export default class MyButtonController extends React.Component{
  constructor(props){
    super(props);
    this.state={
      tableData: TableStore.getTableData()
    }
  }
  componentDidMount() {
    TableStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    TableStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    this.setState({
      tableData: TableStore.getTableData()
    });
  }

  handleData(result){
    SearchActions.setTableData(result);
  }
  emptyTable(){
    SearchActions.emptyTable()
  }
  emptyAll(){
    SearchActions.emptyAll()
  }
  render() {
    return <SearchBar
        handleData={this.handleData.bind(this)}
        emptyTable={this.emptyTable.bind(this)}
        emptyAll={this.emptyAll.bind(this)}
    />
  }
}


