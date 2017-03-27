import React,{ Component , PropTypes } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'react-meteor-data';


class RegisterComplete extends Component{
  render(){
    return(
      <div className="registroComplete">
        <h1>Bienvenido {this.props.currentUser}</h1>
      </div>

    );
  }
}
RegisterComplete.propTypes={
  currentUser:PropTypes.object.isRequired,
}

export default createContainer(()=>{
  return{
    currentUser:Meteor.user(),
  }
},RegisterComplete);
