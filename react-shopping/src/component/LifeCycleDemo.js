import React from 'react'

class SuccessComponent extends React.Component{

  componentDidMount(){
    alert('Success Component will render - didmount')
  }

  componentWillUnmount(){
    alert('Success component will unmount')
  }

  render(){
    return(
      <div>
        <h2>Login Success...</h2>
      </div>
    )
  }
}

class ErrorComponent extends React.Component{

  componentDidMount(){
    alert('Error Component will render - didmount')
  }

  componentWillUnmount(){
    alert('Error component will unmount')
  }

  render(){
    return(
      <div>
        <h2>Invalid Login...</h2>
      </div>
    )
  }
}

export default class LifeCycleDemo extends React.Component {

  constructor(props){
    super(props);
    this.state={
      userDetails:{
        UserName:'himanshu',
        Password:'1234'
      },
      formDetails:{
        UserName:'',
        Password:''
      },
      result:''
    }
    this.handleUserName=this.handleUserName.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handleLoginClick=this.handleLoginClick.bind(this);
  }

  handleUserName(e){
    this.setState({
      formDetails:{
        UserName:e.target.value,
        Password:this.state.formDetails.Password
      }
    })
  }

  handlePassword(e){
    this.setState({
      formDetails:{
        UserName:this.state.formDetails.UserName,
        Password:e.target.value
      }
    })
  }

  handleLoginClick(){

    if(this.state.formDetails.UserName==this.state.userDetails.UserName && this.state.formDetails.Password==this.state.userDetails.Password){

      this.setState({
        result:<SuccessComponent/>
      })

    }else{
      this.setState({
        result:<ErrorComponent/>
      })
    }  
  }

  render() {
    return (
      <div className='container-fluid'>
        <dl>
          <dt>User Name</dt>
          <dd><input type='text' onChange={this.handleUserName} /></dd>
          <dt>Password</dt>
          <dd><input type='password' onChange={this.handlePassword} /></dd>
        </dl>
        <button onClick={this.handleLoginClick}>Login</button>
        <div>
          {this.state.result}
        </div>
      </div>
    )
  }
}
