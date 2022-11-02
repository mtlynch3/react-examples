import { Component } from 'react'
import { connect } from 'react-redux'
import { getUsersThunk } from '../store/getUsers'


class FolderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showlist: false 
    }
  }

  componentDidMount() {
    //get thunk from props
    this.props.getUsersThunk();
  } 
  
  handleToggleClick = () => {
    this.setState(state => {
      return {showlist: !state.showlist}
    });
  }
  
  render() {
    if(this.state.showlist) {
      let users = this.props.users;
      return (
        <>
          <button id="toggle-button" onClick={this.handleToggleClick}>
            Toggle
          </button>   
          <div style={{margin: '10px'}}>
            { users.map( (user) => {
                return (
                  <div key={user.id}>
                    <h3>Name: {user.name}</h3>
                    <h4>Email: {user.email}</h4> 
                  </div>
                )
              })
            }
          </div>
        </>
        
      );
    } else {
        return (
          <button id="toggle-button" onClick={this.handleToggleClick}>
            Toggle
          </button>
        );
    }
  }
};
//REDUX SETUP
//add thunks to props
function mapDispatch(dispatch) {
  return { 
    getUsersThunk: () => dispatch(getUsersThunk()) 
  }
}
//add redux state to props
function mapState(state) {
  return {
    users: state.users
  }
}

export default connect(mapState, mapDispatch)(FolderComponent);