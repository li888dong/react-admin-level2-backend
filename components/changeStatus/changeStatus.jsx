import React from 'react';
import TableStore from '../../stores/tableStore';
import SearchActions from '../../actions/SearchActions';
import $ from 'jquery'
import style from './changeStatus.css'
export default class ChangeStatus extends React.Component{
    constructor(props){
        super(props);
        this.state={
            serviceStatus:""
        }
    }
    handleData(result){
        SearchActions.setChangeStatusTableData(result);
    }
    emptyTable(){
        SearchActions.emptyTable()
    }
    emptyAll(){
        SearchActions.emptyAll()
    }
    search(){
        if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.refs.tel.value))){
            alert("手机号码有误，请重填");
            return false;
        }
        $.ajax({
            url: "/user/find",
            dataType: 'json',
            type: 'post',
            data: {
                mobile:this.refs.tel.value
            },
            success: function(result) {
                if (result.code==200){
                    this.setState({
                        serviceStatus:result.info[0].serviceStatus
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
    submit(){
        if (!confirm("请确认更改手机号："+this.refs.tel.value+"的用户性质为："+TableStore.getNature())){
            return false;
        }
        $.ajax({
            url: "/user/updateNature",
            dataType: 'json',
            type: 'post',
            data: {
                mobile:this.refs.tel.value,
                _userProperty:TableStore.getNature(),
                serviceStatus:this.state.serviceStatus
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
            <label className={style.mt_5}>手机号码：
            <input type="tel"
                   className={style.input}
                   ref="tel"
            />
            </label>
            <label className={style.mt_5}>客户号：
            <input type="tel" disabled/></label>
            <button onClick={this.search.bind(this)} className={style.searchBtn}>点击查询</button>
            <button onClick={this.submit.bind(this)} className={style.confirmBtn}>确认更改</button>

        </div>
    }
}


