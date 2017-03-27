import React,{ Component , PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      modeLogin:true,
    }
  }
  handleSubmit(event){
    event.preventDefault();
    const user={
      username:ReactDOM.findDOMNode(this.refs.username).value.trim(),
      password:ReactDOM.findDOMNode(this.refs.password).value.trim(),
      email:ReactDOM.findDOMNode(this.refs.email).value.trim(),
    }
    Accounts.createUser(user);
    FlowRouter.go(('/'+user.username),username);
  }
  render(){
    return(
      <div className="login">
        <div className="row">

          <form className="col s12" onSubmit={this.handleSubmit.bind(this)}>

            <div className="row">

              <div className="input-field col s12">
                <input placeholder="Username" ref="username" id="username" type="text" className="validate"/>
                <label htmlFor="username">Username</label>
              </div>

            </div>

            <div className="row">

              <div className="input-field col s12">
                <input id="password" ref="password" type="password" className="validate"/>
                <label htmlFor="password">Password</label>
              </div>

            </div>

            <div className="row">

              <div className="input-field col s12">
                <input id="email" ref="email" type="email" className="validate"/>
                <label htmlFor="email">Email</label>
              </div>

            </div>

            <div className="row">

              <button className="btn waves-effect waves-light" type="submit">Submit
                <i className="material-icons right">send</i>
              </button>

            </div>
          </form>
        </div>

      </div>
    );
  }
}
