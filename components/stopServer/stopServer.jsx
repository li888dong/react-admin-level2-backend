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
            orderId:""
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
        if (this.state.tel==""){
            alert('请输入号码');
            return
        }
        $.ajax({
            url: "./tsconfig.json",
            dataType: 'json',
            type: 'get',
            data: {
                mobile:this.state.tel
            },
            success: function(result) {
                if (result.code==200){
                    this.setState({
                        orderId:result.addUserTableData.orderId
                    });
                    this.handleData(result.addUserTableData)
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
        $.ajax({
            url: "./tsconfig.json",
            dataType: 'json',
            type: 'geT',
            data: {
                orderId:this.state.orderId,
                comment:comment
            },
            success: function(result) {
                if (result.code==200){
                    this.handleData(result.addUserTableData);
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
            <input type="tel" onChange={this.changeInput.bind(this)}  className={style.input}/>
            <span className={style.mt_5}>客户号：</span>
            <input type="tel" onChange={this.changeInput.bind(this)}  className={style.input}/>
            <button onClick={this.search.bind(this)} className={style.searchBtn}>点击查询</button>
            <button onClick={this.submit.bind(this)} className={style.confirmBtn}>确认终止</button>
        </div>
    }
}


