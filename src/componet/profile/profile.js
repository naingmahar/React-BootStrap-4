import React from 'react';


export default class Profile extends React.Component {
 
  state ={ 
    history : []
  }

  UNSAFE_componentWillMount (){
    
    let formattor = []
    let localData = localStorage.getItem("@localdata") 
    if(localData) formattor = JSON.parse(localData)
    formattor.push(this.props.history.location.state)
    localStorage.setItem("@localdata",JSON.stringify(formattor))
  
  }

  componentDidMount(){
    let localData = localStorage.getItem("@localdata") 
    if(localData) this.setState({history:JSON.parse(localData)}) 
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
          <td>{index}</td>
          <td>{row.username}</td>
          <td>{row.password}</td>
        </tr>
      )
    })
    return ui
  }

  render() {
    const {username,password} = this.props.history.location.state
    return (<div>
      <div className="container">
      <div className="row">
        <div className="col-xl-6"> <h4>Current User Name: {username}</h4> </div>
        <div className=" offset-xl-4 col-xl-2">  <button type="button" className="btn btn-danger" onClick={this._onClear}>Clear log</button> </div>
      </div>           
        <table className="table table-hover">
          <thead>
            <tr>
              <th>No</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>  
    </div>)
  }
}