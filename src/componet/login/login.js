import React,{Component} from 'react';


class Login extends Component {
 
  state ={
      username:"",
      password:""
  }

  _onChageEmail= (e) =>{
      this.setState({email:e.target.value})
  }

  _onChagePasword= (e) =>{
    this.setState({password:e.target.value})
}


  render() {

    return (
        <div className="container">
            <h2>2FA Registration</h2>
            <div>
                <div className="form-group">
                    <label>Name:</label>
                    <input 
                        autoComplete="false" 
                        type="text" 
                        className="form-control"
                        onChange={this._onChageEmail}
                    />
                    <div class="col-sm-3">
                        <small id="passwordHelp" class="text-danger">
                            Must be email format.
                        </small>      
                    </div>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" id="pwd" name="password" />
                    <div class="col-sm-3">
                        <small id="passwordHelp" class="text-danger">
                            Must be 8-20 characters long.
                        </small>      
                    </div>
                </div>
                <button type="button" className="btn btn-primary">Register</button>
            </div>
        </div>
    )
  }
}

export default Login