// import React from 'react';
// // import './Devlist.css';
// // import './DeviceAdd.css';
// // import CustomizedForm from './search';
// import { Table, Form, Row, Col, Input, Button, Icon, message, DatePicker, Select } from 'antd';
// // import TimeDataPicker from './TimeDataPicker'
// import CryptoJS from 'crypto-js';
// import axios from 'axios';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
// moment.locale('zh-cn');
// const FormItem = Form.Item;
// const InputGroup = Input.Group;
// const { MonthPicker, RangePicker } = DatePicker;


// var encrypt = function (key, iv, data) {
//   var initKey = CryptoJS.enc.Utf8.parse(key);
//   var cipher = CryptoJS.AES.encrypt(data, initKey, {
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7,
//     iv: CryptoJS.enc.Utf8.parse(iv),
//   });

//   const base64Cipher = cipher.ciphertext.toString(CryptoJS.enc.Base64);
//   return base64Cipher;
// }

// const columns = [{
//   title: '编号',
//   dataIndex: 'dev_id',
// }, {
//   title: '创建时间',
//   dataIndex: 'createdAt',
// }, {
//   title: '校验码',
//   dataIndex: 'auth_num',
// }, {
//   title: 'mac地址',
//   dataIndex: 'mac_addr',
// }, {
//   title: '订单号',
//   dataIndex: 'order_num',
// }, {
//   title: '平台类型',
//   dataIndex: 'paas_id',
// }, {
//   title: '产品ID',
//   dataIndex: 'product_id',
// }, {
//   title: '修改时间',
//   dataIndex: 'updatedAt',
// }];

// var timeArr = [{ time: "今天", len: 0 }, { time: "昨天", len: 1 }, { time: "最近7天", len: 7 }, { time: "最近30天", len: 30 }];

// let col1 = [
//   {
//     type: 'input',
//     field: 'dev_id',
//     placeholder: '请输入设备编号',
//     desc: '设备编号'
//   },
//   {
//     type: 'timeDataPicker',
//     field: 'createAt',
//     timeArr: timeArr,
//     desc: '起止时间'
//   }
// ];

// let col2 = [
//   {
//     type: 'input',
//     field: 'auth_num',
//     placeholder: '请输入校验码',
//     desc: '设备校验码'
//   },
//   {
//     type: 'input',
//     field: 'mac_addr',
//     placeholder: '请输入mac地址',
//     desc: 'mac地址'
//   },
//   {
//     type: 'input',
//     field: 'order_num',
//     placeholder: '请输入订单号',
//     desc: '设备订单号'
//   },
//   {
//     type: 'input',
//     field: 'product_id',
//     placeholder: '请输入产品ID',
//     desc: '产品ID'
//   },
// ];


// const searchForm = [col1, col2];

// class Devlist extends React.Component {
//   state = {
//     data: [],
//     pagination: {},
//     loading: false,
//     expand: false,
//     fields: {
//       dev_id: {
//         value: '',
//       },
//       createAt: {
//         value: '',
//       },
//       auth_num: {
//         value: '',
//       },
//       mac_addr: {
//         value: '',
//       },
//       order_num: {
//         value: '',
//       },
//       product_id: {
//         value: '',
//       }
//     }
//   };

//   handleFormChange = (changedFields) => {
//     this.setState({
//       fields: { ...this.state.fields, ...changedFields },
//     });
//   }

//   handleTableChange = (pagination, filters, sorter) => {
//     const pager = { ...this.state.pagination };

//     pager.current = pagination.current;
//     this.setState({
//       pagination: pager,
//     });

//     var obj = {};
//     for (let key in this.state.fields) {
//       if(this.state.fields[key]['value'] == null || this.state.fields[key]['value'] == ''){
//         continue;
//       }else{
//         obj[key] = this.state.fields[key]['value'];
//       }
//     }

//     this.fetch({
//       results: pagination.pageSize,
//       page: pagination.current,
//       sortField: sorter.field,
//       sortOrder: sorter.order,
//       fields: obj,
//       ...filters,
//     });
//   }

//   fetch = (params = {}) => {
//     this.setState({ loading: true });

//     var enc_msg = encrypt('751f621ea5c8f930', '2624750004598718', JSON.stringify({
//       pagesize: params.results,
//       pagestart: params.page,
//       fields: params.fields
//     }));

//     axios.post('/device/findlist', {
//       enc_msg: enc_msg,
//     }).then((response) => {
//       console.log(response);
//       const pagination = { ...this.state.pagination };
//       pagination.total = response.data.total_count;
//       message.success(`为你搜索到${response.data.total_count}台设备`);
//       this.setState({
//         loading: false,
//         data: response.data.docs,
//         pagination,
//       });
//     }).catch(function (error) {
//       console.log(error);
//     });
//   }

//   componentDidMount() {
//     this.fetch();
//   }

//   submit = () => {
//     var obj = {};
//     for (let key in this.state.fields) {
//       if(this.state.fields[key]['value'] == null || this.state.fields[key]['value'] == ''){
//         continue;
//       }else{
//         obj[key] = this.state.fields[key]['value'];
//       }
//     }

//     this.fetch({ results: 10, page: 1, fields: obj });
//   }

//   render() {
//     const fields = this.state.fields;
//     return (
//       <div>
//         <CustomizedForm {...fields} onChange={this.handleFormChange} searchForm={searchForm} submit={this.submit} />
//         <div style={{ marginTop: 20 }}>
//           <Table columns={columns}
//             rowKey={record => record.registered}
//             dataSource={this.state.data}
//             pagination={this.state.pagination}
//             loading={this.state.loading}
//             onChange={this.handleTableChange}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default Devlist;


// // WEBPACK FOOTER //
// // src/Devlist.js


import React, { Component } from 'react'

export default class Devlist extends Component {
  render() {
    return (
      <div>
        <p>sdasdasd</p>
      </div>
    )
  }
}
