// import React from 'react';
// import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
// // import "./DeviceAdd.css"
// import CryptoJS from 'crypto-js';
// import axios from 'axios';


// const FormItem = Form.Item;

// const value = "必填"

// var encrypt = function (key, iv, data) {
//     var initKey = CryptoJS.enc.Utf8.parse(key);
//     var cipher = CryptoJS.AES.encrypt(data, initKey, {
//         mode: CryptoJS.mode.CBC,
//         padding: CryptoJS.pad.Pkcs7,
//         iv: CryptoJS.enc.Utf8.parse(iv),
//     });

//     const base64Cipher = cipher.ciphertext.toString(CryptoJS.enc.Base64);
//     return base64Cipher;
// }


// class NormalLoginForm extends React.Component {
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log('Received values of form: ', values);
//         var enc_msg = encrypt('751f621ea5c8f930', '2624750004598718', JSON.stringify(values));

//         axios.post('/device/auth', {
//             enc_msg: enc_msg,
//         }).then((response) => {
//             if(response.data.err_code == 200){
//                 message.success('恭喜你，设备添加成功');
//             }else{
//                 message.error('设备添加失败，' + response.data.err_msg);
//             }
//             console.log(response);
//         }).catch(function (error) {
//             message.error('服务器错误，请联系网员工');
//         });
//       }
//     });
//   }
//   handleReset = () => {
//     this.props.form.resetFields();
//   }
//   render() {
//     const { getFieldDecorator } = this.props.form;
//     return (
//       <Form onSubmit={this.handleSubmit} className="login-form" style={{ width : 600 }}>
//         <FormItem>
//           {getFieldDecorator('mac_addr', {
//             rules: [{ required: true, message: '请输入mac地址!' }],
//           })(
//             <Input prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="mac地址（必填）" />
//           )}
//         </FormItem>
//         <FormItem>
//           {getFieldDecorator('order_num', {
//             rules: [{ required: true, message: '请输入订单号!' }],
//           })(
//             <Input prefix={<Icon type="pay-circle" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="订单号（必填）" />
//           )}
//         </FormItem>
//         <FormItem>
//           {getFieldDecorator('paas_id', {
//             rules: [{ required: true, message: '请输入平台类型!' }],
//           })(
//             <Input value={value} prefix={<Icon type="cloud" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="平台类型（必填）" />
//           )}
//         </FormItem>
//         <FormItem>
//           {getFieldDecorator('product_id', {
//             rules: [{ required: true, message: '请输入产品ID!' }],
//           })(
//             <Input prefix={<Icon type="tool" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="产品ID（必填）" />
//           )}
//         </FormItem>
//         <FormItem>
//           <Button type="primary" htmlType="submit" className="login-form-button">
//             提交
//           </Button>
//           <Button type="default" className="login-form-button"  onClick={this.handleReset} style={{ marginLeft : 20 }} >
//             重置
//           </Button>
//         </FormItem>
//       </Form>
//     );
//   }
// }

// export default NormalLoginForm;


// // WEBPACK FOOTER //
// // src/DeviceAdd.js







import React, { Component } from 'react'

export default class Devadd extends Component {
  render() {
    return (
      <div>
        <p>devadd</p>
      </div>
    )
  }
}
