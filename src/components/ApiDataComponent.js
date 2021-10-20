import { Component } from 'react';
import axios from 'axios';

class ApiData extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        let linkToAPI = 'https://jsonplaceholder.typicode.com/users';

        try {
            let response = await axios.get(linkToAPI);
            this.setState({users: response.data});
        } catch (error) {
            if (error.response) {
                /*
                    * The request was made and the server responded with a
                    * status code that falls out of the range of 2xx
                    */
                console.log(error.response.data); 
                console.log(error.response.status); 
            }
        
        }
    }  

    render() {
        return (
            <div className="container">
            {
                this.state.users.map( (user) => {
                    return (
                        <div key={user.id}>
                            <h3>Name: {user.name}</h3>
                            <h4>Email: {user.email}</h4> 
                        </div>
                    )
                }

                )
            }
            </div>
        )
    }
}

export default ApiData;



