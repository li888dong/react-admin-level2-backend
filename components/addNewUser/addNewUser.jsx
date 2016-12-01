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
            url: "/user/list",
            dataType: 'json',
            type: 'POST',
            data: {
                mobile:this.state.tel,
                userNature:this.state.userNature,
                productTimeLimit:this.state.productTimeLimit
            },
            success: function(result) {
                if (result.code==200){
                    this.setState({
                        orderId:result.info[0].orderId
                    });
                    this.handleData(result.info)
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
            <span className={style.mt_5}>手机号码：</span>
            <input type="tel" onChange={this.inputMobile.bind(this)} className={style.input}/>
            <span className={style.mt_5}>客户号：</span>
            <input type="tel" className={style.input} disabled/>
            <span className={style.mt_5}>用户类型：</span>
            <select name="" id="" className={style.input} onChange={this.selectUserNature.bind(this)}>
                <option value="">选择产品期限</option>
                <option value="3">监管</option>
                <option value="4">内部免费</option>
            </select>
            <span className={style.mt_5}>产品期限：</span>
            <input type="text" list="date" className={style.input} onChange={this.inputLimit.bind(this)}/>
            <datalist id="date">
                <option value="1">1月</option>
                <option value="6">6月</option>
                <option value="12">12月</option>
                <option value="max">永久</option>
            </datalist>
            <button onClick={this.addUser.bind(this)} className={style.searchBtn}>点击添加</button>
        </div>
    }
}


