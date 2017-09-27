import React, { Component } from 'react';
import Message from '../components/message';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions/index';

class MessageList extends Component {

    componentWillMount() {
      this.props.fetchMessages(this.props.selectedChannel);
    }

    componentDidMount() {
      setInterval(() => {
        this.props.fetchMessages(this.props.selectedChannel);
      }, 5000);
      // this.message.scrollToBottom();
    }

    componentUnMount() {
      clearInterval(() => {
        this.props.fetchMessages(this.props.selectedChannel);
      },);
    }

    render() {
      return (
        <div ref={(div) => this.message = div }>
          {this.props.messages.map((message) => {
            return <Message key={message.created_at} message={message} />;
          })}
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      messages: state.messages,
      selectedChannel: state.selectedChannel
    };
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      { fetchMessages },
      dispatch
    );
  }

// export default messageList;
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

// connecte MessageList à React redux en utilisant la recette mapStateToProps qui récupère le state dans le store redux et le donne aux props
