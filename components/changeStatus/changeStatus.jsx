import React from 'react';
import TableStore from '../../stores/tableStore';
import SearchActions from '../../actions/SearchActions';
import $ from 'jquery'
import style from './changeStatus.css'
export default class ChangeStatus extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tel:"",
            orderId:""
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
            data: {
                mobile:this.state.tel
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
    submit(){
        this.emptyTable();
        $.ajax({
            url: "/user/changeStatus",
            dataType: 'json',
            type: 'POST',
            data: {
                orderId:this.state.orderId,
                nature:TableStore.getNature()
            },
            success: function(result) {
                if (result.code==200){
                    this.handleData(result.info);
                }else {
                    alert('加载失败')
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
            <input type="tel" onChange={this.changeInput.bind(this)} value={this.state.tel} className={style.input}/>
            <span className={style.mt_5}>客户号：</span>
            <input type="tel" onChange={this.changeInput.bind(this)} value={this.state.tel} className={style.input} disabled/>
            <button onClick={this.search.bind(this)} className={style.searchBtn}>点击查询</button>
            <button onClick={this.submit.bind(this)} className={style.confirmBtn}>确认更改</button>

        </div>
    }
}


