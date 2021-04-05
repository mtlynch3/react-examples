import { Component } from 'react'

class FolderComponent extends Component {
  //setting initial state using constructor
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     showlist: true 
    //   }
    // }

    //setting initial state with class fields
    state = {
      showlist: true 
    }
  
    handleToggleClick = () => {
      this.setState(state => {
        return {showlist: !state.showlist}
      });
    }
  
    render() {
      if(this.state.showlist) {
        return (
  
          <div className="folder-container">
            <h1>Home</h1>
            <button id="toggle-button" onClick={this.handleToggleClick}>Toggle</button>
            <ul>
             <li>File 1</li>
             <li>File 2</li>
             <li>File 3</li>
             <li>Hello from props: {this.props.data}</li>
            </ul>
          </div>
  
        );
      } else {
          return (
  
            <div className="folder-container">
              <h1>Home</h1>
              <button id="toggle-button" onClick={this.handleToggleClick}>Toggle</button>
            </div>
  
          );
      }
    }
  }


export default FolderComponent; 