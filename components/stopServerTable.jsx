/**
 * Created by lidong on 2016/11/28.
 */
import React,{Component} from 'react';
import TableStore from '../stores/tableStore'
import TableStyle from './Table.css'
import StopServer from './stopServer/stopServer.jsx'
export default class StopServerTable extends Component {
    constructor(props){
        super(props);
        this.state={
            addUserTableData: TableStore.getStopServerTableData()
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
            addUserTableData: TableStore.getStopServerTableData()
        });
    }
    setComment(e){
        TableStore.setComment(e.target.value)
    }
    setDisable(e){
        TableStore.setDisable(e.target.value)
    }
    render()
    {
        let info=this.state.addUserTableData;
        return (
            info?
                <div className={TableStyle.col}>
                    <StopServer/>
                    <textarea
                        cols="30" rows="4"
                        placeholder="请输入停止服务原因(必填)"
                        onChange={this.setComment.bind(this)}
                    />
                    <table className={TableStyle.table}>
                        <thead>
                        <tr>
                            <th>用户ID</th>
                            <th>用户名称</th>
                            <th>用户性质</th>
                            <th>用户类型</th>
                            <th>起始日期</th>
                            <th>截止日期</th>
                            <th>产品名称</th>
                            <th>联系人</th>
                            <th>联系地址</th>
                            <th>联系电话</th>
                            <th>电子邮箱</th>
                            <th>用户来源</th>
                            <th>服务状态</th>
                            <th>更改状态</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            info.map((val,i)=>
                                <tr key={i}>
                                    <td>{val.id}</td>
                                    <td>{val.userName}</td>
                                    <td>{val.userNature}</td>
                                    <td>{val.userType}</td>
                                    <td>{val.startDate}</td>
                                    <td>{val.endDate}</td>
                                    <td>{val.productName}</td>
                                    <td>{val.contacts}</td>
                                    <td>{val.contactAddress}</td>
                                    <td>{val.mobile}</td>
                                    <td>{val.email}</td>
                                    <td>{val.infoUseType}</td>
                                    <td>{val.serviceStatus}</td>
                                    <td>
                                        <select name="serverStatus" id="serverStatus" onChange={this.setDisable.bind(this)}>
                                            <option value="">选择状态</option>
                                            <option value="DISABLED">服务终止</option>
                                        </select>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>

                </div>
                :<div className={TableStyle.fl}>暂无数据</div>
        );
    }

}
