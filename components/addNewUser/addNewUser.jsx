import React from 'react';
import TableStore from '../../stores/tableStore';
import SearchActions from '../../actions/SearchActions';
import $ from 'jquery'
import style from './AddNewUser.css'
export default class AddNewUser extends React.Component{
    constructor(props){
        super(props);
        this.state={
            orderId:""
        }
    }
    handleData(result){
        SearchActions.setAddUserTableData(result);
    }

    addUser(){
        if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.refs.tel.value))){
            alert("手机号码有误，请重填");
            return false;
        }
        if (this.refs.tel.value==""||this.refs.nature.value==""||this.refs.limit.value==""){
            alert("请填写完整信息");
            return false
        }
        if (!confirm("确认添加手机号码："+this.refs.tel.value+"用户类型："+this.refs.nature.value+"产品期限："+this.refs.limit.value+"月")){
            return false
        }

        $.ajax({
            url: "/user/add",
            dataType: 'json',
            type: 'post',
            data: {
                mobile:this.refs.tel.value,
                client:'',
                _userProperty:this.refs.nature.value,
                duration:this.refs.limit.value
            },
            success: function(result) {
                if (result.code==200){
                    this.handleData(result.info);
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
            <input type="tel" id="mobile" ref="tel" className={style.mr_10}/></label>
            <label className={style.mt_5}>客户号：
            <input type="number" className={style.mr_10} disabled/>
            </label>
            <label className={style.mt_5}>用户类型：
            <select name="" id="" className={style.mr_10} ref="nature">
                <option value="">选择用户类型</option>
                <option value="3">监管</option>
                <option value="5">内部免费</option>
            </select>
            </label>
            <label className={style.mt_5}>产品期限：
            <input type="text" list="date" className={style.mr_10} ref="limit"/>
            <datalist id="date">
                <option value="1">1月</option>
                <option value="6">6月</option>
                <option value="12">12月</option>
                <option value="永久">永久</option>
            </datalist>
            </label>
            <button onClick={this.addUser.bind(this)} className={style.searchBtn}>点击添加</button>
        </div>
    }
}


