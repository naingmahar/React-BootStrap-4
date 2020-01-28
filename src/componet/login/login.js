import React,{Component} from 'react';
import { User, Register } from '../../lib/api/axios';

class Login extends Component {
 
  state ={
      username:" ",
      password:"",
      usernameErrorMessage:"",
      passwordErrorMessage:""
  }

  _onChageEmail= (e) =>{
      this.setState({username:String(e.target.value).trim()})
  }

  _onChagePasword= (e) =>{
    this.setState({password:e.target.value})
}

  _onClickRegister = () =>{
    if(!this.state.username) this.setState({usernameErrorMessage:"Username is empty"})
    if(!this.state.password) this.setState({passwordErrorMessage:"password is empty"})
    if(this.state.username && this.state.password) {
        Register(this.state.username,this.state.password)
            .then(apiResponse =>{
                if(apiResponse.id)  this.props.history.push("profile",this.state)
                if(!apiResponse.id) alert("Registration Fail")
            })
            .catch(error => alert(error.mesage))
       
    }
  }


  render() {

    return (
        <div className="container">
            <h2>2FA Registration</h2>
            <div>
                <div className="form-group">
                    <label>Name:</label>
                    <input 
                        autocomplete="off" 
                        type="text" 
                        className="form-control"
                        value={this.state.username}
                        onChange={this._onChageEmail}
                    />
                    <div className="col-sm-3">
                        <small id="usernameHelp" className="text-danger">
                           {this.state.usernameErrorMessage}
                        </small>      
                    </div>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input 
                        value={this.state.password}
                        autocomplete="off"
                        type="password" 
                        className="form-control"
                        onChange={this._onChagePasword}
                    />
                    <div className="col-sm-3">
                        <small id="passwordHelp" className="text-danger">
                           {this.state.passwordErrorMessage}
                        </small>      
                    </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={this._onClickRegister}>Register</button>
            </div>
        </div>
    )
  }
}

export default Login