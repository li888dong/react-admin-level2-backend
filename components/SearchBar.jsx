import React from 'react'
import $ from 'jquery'
import SearchStyle from './SearchBar.css'
import TableStore from '../stores/tableStore';

export default class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tel:"",
      orderId:""
    };
  }
  changeInput(e){
    this.setState({
      tel: e.target.value
    })
  }
  search(){
    if (this.state.tel==""){
      alert('请输入号码');
      return
    }
    $.ajax({
      url: "/user/list",
      dataType: 'json',
      type: 'POST',
      data: {_mobile:this.state.tel},
      success: function(result) {
        if (result.code==200){
          this.setState({
            orderId:result.info[0].orderId
          });
          this.props.handleData(result.info)
        }else {
          alert(result.message)
        }
      }.bind(this),
      error: function() {
        alert('加载失败')
      }.bind(this)
    });
  }
  empty(){
    this.setState({
      tel:"",
      orderId:""
    });
    this.props.emptyAll();
  }
  submit(){
    this.props.emptyTable();
    $.ajax({
      url: "/user/changeStatus",
      dataType: 'json',
      type: 'POST',
      data: {orderId:this.state.orderId},
      success: function(result) {
        if (result.code==200){
          this.props.handleData(result.info);
        }else {
          alert('加载失败')
        }
      }.bind(this),
      error: function() {
        alert('加载失败')
      }.bind(this)
    });
  }
  render(){
    return<div className={SearchStyle.row}>
      <span className={SearchStyle.mt_5}>输入手机号添加要修改的用户：</span>
      <input type="tel" onChange={this.changeInput.bind(this)} value={this.state.tel} className={SearchStyle.input}/>
      <button onClick={this.search.bind(this)} className={SearchStyle.searchBtn}>点击查询</button>
      <button onClick={this.empty.bind(this)} className={SearchStyle.searchBtn}>清空</button>
      <button onClick={this.submit.bind(this)} className={SearchStyle.confirmBtn}>确认更改</button>
    </div>
  }
}

