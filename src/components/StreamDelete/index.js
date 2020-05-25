import React, { Component } from "react";
import Modal from "../../modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  actions = () => (
    <>
      <button
        onClick={() => this.props.deleteStream(this.props.match.params.id)}
        className="ui button negative"
      >
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </>
  );

  render() {
    return (
      <div>
        <Modal
          header="Delete stream"
          content={
            this.props.stream
              ? `Are you sure you want to delete the stream with title - ${this.props.stream.title}?`
              : "Are you sure you want to delete this stream"
          }
          actions={this.actions()}
          onDismiss={() => history.push("/")}
        ></Modal>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
