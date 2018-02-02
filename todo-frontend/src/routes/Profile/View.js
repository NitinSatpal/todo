import React, { Component } from 'react';
import { Form, Message, Button, Header} from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.state = { updatedName : '', updatedEmail : '', nameError: false, emailError: false, error: false, editClicked: false };
    console.log(this.props.user);
  }
  
  componentWillMount() {
    
  }

  openEditBox = (e) => {
    const user = this.props.user;
    this.setState({editClicked: true, updatedName : user.name, updatedEmail : user.email});
  }

  updateMyProfile = (e) => {
    if (this.state.updatedName === '') {
      this.setState({ nameError: true, error: true });
      e.preventDefault();
    } else if (this.state.updatedEmail === '') {
      this.setState({ emailError: true, error: true });
      e.preventDefault();
    } else {
      e.preventDefault();
      console.log(JSON.stringify(this.props.user._id));
      console.log(JSON.stringify(this.state.updatedName));
      console.log(JSON.stringify(this.state.updatedEmail));
      this.props.editProfile({
        redirect: () => this.props.history.push(`/profile/me`),
        id: this.props.user._id,
        data: {
          name: this.state.updatedName,
          email: this.state.updatedEmail,
        }
      });
    }
  }

  deleteMyProfile = (e) => {
    this.props.deleteProfile({
      redirect: () => this.props.history.push(`/`),
      data: this.props.user._id
    });
  }

  render() {
    const user = this.props.user;
    /*if (!Object.prototype.hasOwnProperty.call(user, 'email')) {
      return (<p>Loading...</p>);
    } */

    const editBoxForm = (
     <Form onSubmit={this.updateMyProfile} error={this.state.error}>
        <Form.Field error={this.state.nameError} >
          <label>Name</label>
          <input defaultValue={user.name} name="name" onChange={e => this.setState({ updatedName: e.target.value })} />
        </Form.Field>
        <Form.Field error={this.state.emailError} >
          <label>Email</label>
          <input defaultValue={user.email} name="email" onChange={e => this.setState({ updatedEmail: e.target.value })} />
        </Form.Field>        
        <Message
          error
          header="Error"
          content="All fields are compulsory !"
        />
        <Button type="submit">Submit</Button>
      </Form>
      )

    const showText = (
      <div>
        <Header as="h3" >Name : <p >{user.name}</p></Header>
        <Header as="h3" >Email : <p >{user.name}</p></Header>
        <Button basic color="green" onClick={this.openEditBox}>Edit</Button>
        <Button basic color="red" onClick={this.deleteMyProfile}>Delete</Button>
      </div>
    )
    
    return ( this.state.editClicked ? editBoxForm : showText );
  }
}


UserProfile.defaultProps = {
  editProfile: () => ({}),
  deleteProfile: () => ({}),
};

UserProfile.propTypes = {
  editProfile: PropTypes.func,
  deleteProfile: () => ({}),
  user: PropTypes.shape({
    _id: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
  }),
   history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

