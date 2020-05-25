import React, { Component } from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "../StreamForm";

export class StreamCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <>
        <h3>Create a stream</h3>
        <StreamForm onSubmit={this.onSubmit}></StreamForm>
      </>
    );
  }
}

const mapDispatchToProps = {
  createStream,
};

export default connect(null, mapDispatchToProps)(StreamCreate);
