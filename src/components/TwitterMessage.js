import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      remainingChars: props.maxChars,
      content: ""
    };
  }

  handleInputChange = (e) => {
    const content = e.target.value
    this.setState({
      remainingChars: this.props.maxChars - content.length,
      content: content
    })
  }
  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleInputChange} value={this.state.content} type="text" name="message" id="message" />
        <p>{this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
