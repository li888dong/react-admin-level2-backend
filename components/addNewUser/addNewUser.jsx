import React from 'react';
import TableStore from '../../stores/tableStore';
import SearchActions from '../../actions/SearchActions';
import $ from 'jquery'
import style from './AddNewUser.css'
export default class AddNewUser extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tel:"",
            orderId:"",
            userNature:"",
            productTimeLimit:""
        }
    }
    handleData(result){
        SearchActions.setAddUserTableData(result);
    }
    inputMobile(e){
        this.setState({
            tel: e.target.value
        })
    }
    inputClient(e){
        this.setState({
            orderId: e.target.value
        })
    }
    selectUserNature(e){
        this.setState({
            userNature: e.target.value
        })
    }
    inputLimit(e){
        this.setState({
            productTimeLimit: e.target.value
        })
    }
    addUser(){
        if (this.state.tel==""){
            alert('请输入号码');
            return
        }

        $.ajax({
            url: "/user/add",
            dataType: 'json',
            type: 'post',
            data: {
                mobile:this.state.tel,
                client:this.state.orderId,
                _userProperty:this.state.userNature,
                duration:this.state.productTimeLimit
            },
            success: function(result) {
                if (result.code==200){
                    this.handleData(result.info);
                    alert(result.message)
                }else {
                    alert(result.message)
                }
            }.bind(this),
            error: function() {
                alert('加载失败')
            }.bind(this)
        });
    }
    render() {
        return <div className={style.row}>
            <label className={style.mt_5} htmlFor="mobile">手机号码：
            <input type="tel" id="mobile" onChange={this.inputMobile.bind(this)} className={style.mr_10}/></label>
            <label className={style.mt_5}>客户号：
            <input type="number" className={style.mr_10} onChange={this.inputClient.bind(this)}/>
            </label>
            <label className={style.mt_5}>用户类型：
            <select name="" id="" className={style.mr_10} onChange={this.selectUserNature.bind(this)}>
                <option value="">选择用户类型</option>
                <option value="3">监管</option>
                <option value="5">内部免费</option>
            </select>
            </label>
            <label className={style.mt_5}>产品期限：
            <input type="text" list="date" className={style.mr_10} onChange={this.inputLimit.bind(this)}/>
            <datalist id="date">
                <option value="1">1月</option>
                <option value="6">6月</option>
                <option value="12">12月</option>
                <option value="0">永久</option>
            </datalist>
            </label>
            <button onClick={this.addUser.bind(this)} className={style.searchBtn}>点击添加</button>
        </div>
    }
}


