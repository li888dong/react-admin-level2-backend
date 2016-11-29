import React from 'react'
import $ from 'jquery'
import SearchStyle from './SearchBar.css'
import ListStore from '../stores/tableStore';

export default class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tel:""
    };
  }
  changeInput(e){
    this.setState({
      tel: e.target.value
    })
  }
  addUser(){
    if (this.state.tel==""){
      alert('请输入号码');
      return
    }
    $.get(
      "./tsconfig.json",
      {
        tel:ListStore.setMobile(this.state.tel)
      },
      function(result) {
        if (result.code==200){
          this.props.handleData(result.tableData)
        }else {
          alert('加载失败')
        }
      }.bind(this));
  }
  empty(){
    this.props.emptyAll();
  }
  submit(){
    this.props.emptyTable();
    $.get(
        "./tsconfig.json",
        {
          tel:ListStore.getMobile()
        },
        function(result) {
          if (result.code==200){
            this.props.emptyMobile();
            this.props.handleData(result.tableData);
          }else {
            alert('加载失败')
          }
        }.bind(this)
    );
  }
  render(){
    return<div className={SearchStyle.row}>
      <span className={SearchStyle.mt_5}>输入手机号添加要修改的用户：</span>
      <input type="tel" onChange={this.changeInput.bind(this)} value={this.state.tel} className={SearchStyle.input}/>
      <button onClick={this.addUser.bind(this)} className={SearchStyle.searchBtn}>点击添加</button>
      <button onClick={this.empty.bind(this)} className={SearchStyle.searchBtn}>清空</button>
      <button onClick={this.submit.bind(this)} className={SearchStyle.confirmBtn}>确认更改</button>
    </div>
  }
}

