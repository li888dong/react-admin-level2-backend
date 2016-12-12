import React from 'react';
import TableStore from '../../stores/tableStore';
import SearchActions from '../../actions/SearchActions';
import $ from 'jquery'
import style from './stopServer.css'
export default class StopServer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            stopServerTableData: TableStore.getStopServerTableData(),
            tel:"",
            orderId:"",
            disable:""
        }
    }

    handleData(result){
        SearchActions.setStopServerTableData(result);
    }
    changeInput(e){
        this.setState({
            tel: e.target.value
        })
    }
    search(){
        if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.state.tel))){
            alert("手机号码有误，请重填");
            return false;
        }
        $.ajax({
            url: "/user/find",
            dataType: 'json',
            type: 'post',
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
        let comment=TableStore.getComment();
        if (!comment){
            alert("请输入备注信息");
            return
        }
        if (!confirm("确认停止手机号："+this.state.tel+"的用户服务？")){
            return false;
        }
        $.ajax({
            url: "/order/updateStatus",
            dataType: 'json',
            type: 'post',
            data: {
                orderId:this.state.orderId,
                context:comment,
                disabled:TableStore.getDisable()
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
            <input type="tel" onChange={this.changeInput.bind(this)}  className={style.input}/></label>
            <label className={style.mt_5}>客户号：
            <input type="tel" className={style.input} disabled/></label>
            <button onClick={this.search.bind(this)} className={style.searchBtn}>点击查询</button>
            <button onClick={this.submit.bind(this)} className={style.confirmBtn}>确认终止</button>
        </div>
    }
}


