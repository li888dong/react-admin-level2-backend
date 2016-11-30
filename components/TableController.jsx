/**
 * Created by lidong on 2016/11/28.
 */
import React,{Component} from 'react';
import TableStore from '../stores/tableStore'
import TableStyle from './Table.css'
export default class MyTable extends Component {
    constructor(props){
        super(props);
        this.state={
            tableData: TableStore.getTableData()
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
            tableData: TableStore.getTableData()
        });
    }
    render()
    {
        let info=this.state.tableData;
        return (
            info?
            <div className={TableStyle.col}>
                <h2 className={TableStyle.fl}>
                    管理表格
                    <small>点击上方确认按钮更改用户状态</small>
                </h2>
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
                                <td>{val.infoUserType}</td>
                                <td>
                                    <select name="serverStatus" id="serverStatus">
                                        <option value="disable">失效</option>
                                        <option value="">{val.serverStatus}</option>
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
