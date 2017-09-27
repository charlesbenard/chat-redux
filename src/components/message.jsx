import React from 'react';

const Message = (props) => {
  return (
    <div>
      <h3>{props.message.author} - {props.message.created_at}</h3>
      <p>{props.message.content}</p>
    </div>
    );
};

export default Message;
