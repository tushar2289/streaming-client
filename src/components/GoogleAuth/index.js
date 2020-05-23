import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";

export class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", async () => {
      await window.gapi.client.init({
        clientId:
          "561820913282-gp81356e1chle20b4sanmfjikjaod2kt.apps.googleusercontent.com",
        scope: "email",
      });
      this.auth = window.gapi.auth2.getAuthInstance();
      this.onAuthChange(this.auth.isSignedIn.get());
      this.auth.isSignedIn.listen(this.onAuthChange);
    });
  }

  onAuthChange = (signInStatus) => {
    if (signInStatus) this.props.signIn(this.auth.currentUser.get().getId());
    else this.props.signOut();
  };

  renderButton() {
    const { isSignedIn } = this.props;
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <div onClick={() => this.auth.signOut()} className="ui button">
          <i className="google icon"></i> Sign out
        </div>
      );
    } else {
      return (
        <div onClick={() => this.auth.signIn()} className="ui button">
          <i className="google icon"></i> Sign in
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

const mapDispatchToProps = {
  signIn,
  signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
