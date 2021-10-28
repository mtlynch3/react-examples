import { Component } from 'react';
import { connect } from 'react-redux'
import { getUsersThunk } from '../store/getUsers'

class ReduxComponent extends Component {
  componentDidMount() {
    //get thunk from props
    this.props.getUsersThunk();
  }  

  render() {
    //get redux state from props
    let users = this.props.users;
    return (
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
    );
  }
};

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

export default connect(mapState, mapDispatch)(ReduxComponent)




