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
//   dataIndex: 'good_id',
// }, {
//   title: '商品名称',
//   dataIndex: 'good_name',
// }, {
//   title: '缩略图',
//   dataIndex: 'good_pic',
//   render: text => <img src={text} style={{width:"50px", height:"50px"}}/>,
// }, {
//   title: '商品价格',
//   dataIndex: 'good_price',
//   render: text => <span>￥{text}</span>,
// }, {
//   title: '商品规格',
//   dataIndex: 'good_size',
// }, {
//   title: '品牌',
//   dataIndex: 'good_brand',
// }, {
//   title: '状态',
//   dataIndex: 'good_status',
// }, {
//   title: '描述',
//   dataIndex: 'good_desc',
// },{
//   title: '创建时间',
//   dataIndex: 'createdAt',
// }];

// var timeArr = [{ time: "今天", len: 0 }, { time: "昨天", len: 1 }, { time: "最近7天", len: 7 }, { time: "最近30天", len: 30 }];

// let col1 = [
//   {
//     type: 'input',
//     field: 'good_id',
//     placeholder: '请输入商品编号',
//     desc: '商品编号'
//   },
//   {
//     type: 'input',
//     field: 'good_name',
//     placeholder: '请输入商品名称',
//     desc: '商品名称'
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
//     field: 'good_status',
//     placeholder: '请输入商品状态',
//     desc: '设备品状态'
//   },
// ];


// const searchForm = [col1, col2];

// class Prolist extends React.Component {
//   state = {
//     data: [],
//     pagination: {},
//     loading: false,
//     expand: false,
//     fields: {
//       good_id: {
//         value: '',
//       },
//       good_name: {
//         value: '',
//       },
//       createAt: {
//         value: '',
//       },
//       good_status: {
//         value: '',
//       },
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

//     axios.post('/good/findlist', {
//       enc_msg: enc_msg,
//     }).then((response) => {
//       console.log(response);
//       const pagination = { ...this.state.pagination };
//       pagination.total = response.data.total_count;
//       message.success(`为你搜索到${response.data.total_count}件商品`);
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

// export default Prolist;


// // WEBPACK FOOTER //
// // src/Prolist.js





import React, { Component } from 'react'

export default class Prolist extends Component {
  render() {
    return (
      <div>
        <p>prolist</p>
      </div>
    )
  }
}
