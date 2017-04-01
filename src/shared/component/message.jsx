
import React from 'react'

const Message = ({ message }) =>
  <p>{message}</p>

Message.defaultProps = {
  message: '',
}

Message.propTypes = {
  message: React.PropTypes.string,
}

export default Message
