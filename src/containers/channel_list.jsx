import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectChannel } from '../actions/index';
import { bindActionCreators } from 'redux';


class ChannelList extends Component {

  handleClick (channel){
    console.log(channel)
    this.props.selectChannel(channel)
  }

  render(){
    return (
      <ul>
        {this.props.channels.map((channel) => {
            return <li key={channel} className={channel === this.props.selectedChannel ? "active" : "lol"} onClick={ () => {this.handleClick(channel)}}>{channel}</li>;
          })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
    return {
      channels: state.channels,
      selectedChannel: state.selectedChannel
    };
  }

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      { selectChannel },
      dispatch
    );
  }

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);

