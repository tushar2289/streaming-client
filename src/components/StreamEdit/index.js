import { pick } from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "../StreamForm";

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    console.log(this.props);
    const titleDescription = pick(this.props.stream, "title", "description");
    console.log(titleDescription);
    return (
      <>
        <h3>Edit stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={titleDescription}
        ></StreamForm>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});

const mapDispatchToProps = {
  fetchStream,
  editStream,
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);
