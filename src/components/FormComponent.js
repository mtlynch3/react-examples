import { Component } from 'react'
class FormComponent extends Component {
    state = {
      showform: false,
      firstname: '',
      lastname: '',
      fnameValue: '',
      lnameValue: ''
    }
  
    save = () => {
      //wrong: passing in object to setState when accessing current state
      /*
      this.setState(
        { showform: false, 
          firstname: this.state.fnameValue, 
          lastname: this.state.lnameValue
        }
      );
      
      */
      //right: passing function into setState()
      this.setState(state => {
        return {firstname: state.fnameValue, lastname: state.lnameValue}
      });

      //passing object to setState() as the value does not rely on previous state
      this.setState({showform: false});
    }
  
    edit = () => {
      this.setState({showform: true});
    }
  
    cancel = () => {
      this.setState({showform: false});
    }
  
    updateFirstName = (event) => {
      this.setState({fnameValue: event.target.value})
    }
  
    updateLastName = (event) => {
      this.setState({lnameValue: event.target.value})
    }
  
    render(){
      if(this.state.showform) {
        return (
  
          <div className="edit-form-container">
            <input className="edit-firstname" onChange={this.updateFirstName} placeholder={this.state.firstname}/>
            <input className="edit-lastname" onChange={this.updateLastName} placeholder={this.state.lastname}/>
            <button className="save-button" onClick={this.save}>Save</button>
            <button className="cancel-button" onClick={this.cancel}>Cancel</button>
          </div>
  
        );
      } else {
        return (
  
          <div className="form-container">
            <div className="firstname">First Name: {this.state.firstname}</div>
            <div className="lastname">Last Name: {this.state.lastname}</div>
            <button id="edit-button" onClick={this.edit}>Edit</button>
          </div>
  
        );
      }
    }
  }

  export default FormComponent;