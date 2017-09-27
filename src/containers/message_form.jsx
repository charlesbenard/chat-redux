import React, { Component } from 'react';
import { createMessage } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MessageForm extends Component {

  constructor(props) {
    super(props)
    this.state = { term: '' };
  }

  handleChange = (event) => {
  this.setState({
    term: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.term)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.term} onChange={this.handleChange} />
          <button type="submit" >Send</button>
        </form>
      </div>
      )
    }
  }

  function mapStateToProps(state) {
    return {
      currentUser: state.currentUser,
      selectedChannel: state.selectedChannel
    };
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      { createMessage },
      dispatch
    );
  }

// export default messageForm;
export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
