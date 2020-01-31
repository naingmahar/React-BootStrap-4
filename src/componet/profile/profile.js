import React from 'react';
import { User } from '../../lib/api/axios';


export default class Profile extends React.Component {
 
  state ={ 
    history : [],
    image:"" // new state 
  }

  UNSAFE_componentWillMount (){
    
    let formattor = []
    let localData = localStorage.getItem("@localdata") 
    if(localData) formattor = JSON.parse(localData)
    formattor.push(this.props.history.location.state)
    localStorage.setItem("@localdata",JSON.stringify(formattor))
  
  }

  componentDidMount(){
    // let localData = localStorage.getItem("@localdata") 
    // if(localData) this.setState({history:JSON.parse(localData)}) 

    User()
    .then(apiResponse =>{
      this.setState({
        history:apiResponse.data
      })
    })
    .catch(error =>{
      alert(error.message)
    })
  }

  _onClear = () =>{
    localStorage.removeItem("@localdata")
    this.setState({history:[]})
  }

  renderTable = () =>{
    let { history } = this.state
    let ui= []
    history.forEach((row,index) =>{
      console.log(row)
      ui.push(
        <tr key={index}>
          <td>{row.id}</td>
          <td>{row.email}</td>
          <td>{row.first_name}</td>
          <td>{row.last_name}</td>
          <td><img src={row.avatar} alt={row.first_name+row.last_name}/></td>
        </tr>
      )
    })
    return ui
  }

  render() {
    console.log(this.props.history.location.state.apiResponse)
    const {username,password} = this.props.history.location.state
    return (<div>
      <div className="container">
      
      <img src={`${this.props.history.location.state.apiResponse}`} alt="test"/> 
      {/* new componet */}

      <div className="row">
        <div className="col-xl-6"> <h4>Current User Name: {username}</h4> </div>
        <div className=" offset-xl-4 col-xl-2">  <button type="button" className="btn btn-danger" onClick={this._onClear}>Clear log</button> </div>
      </div>           
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>  
    </div>)
  }
}