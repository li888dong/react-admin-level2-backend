/**
 * Created by lidong on 2016/11/28.
 */
import React,{Component} from 'react';
import TableStore from '../stores/tableStore'
import TableStyle from './Table.css'
import ChangeStatus from './changeStatus/changeStatus.jsx'
export default class ChangeStatusTable extends Component {
    constructor(props){
        super(props);
        this.state={
            addUserTableData: TableStore.getChangeStatusTableData()
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
            addUserTableData: TableStore.getChangeStatusTableData()
        });
    }
    setNature(e){
        TableStore.setNature(e.target.value)
    }
    render()
    {
        let info=this.state.addUserTableData;
        return (
            info?
                <div className={TableStyle.col}>
                    <ChangeStatus/>
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
                            <th>选择用户性质</th>
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
                                        <select name="serverStatus" id="serverStatus" onChange={this.setNature.bind(this)}>
                                            <option value="">请选择用户性质</option>
                                            <option value="3">监管</option>
                                            <option value="1">全价</option>
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
