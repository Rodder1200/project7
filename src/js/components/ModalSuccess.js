import React, { Component } from "react";
import { connect } from "react-redux";

import { showModal } from "../actions/formActions";

class ModalSuccess extends Component {
  render() {
    const { modal, showModal } = this.props;
    return (
      <div className={modal ? "modal-success show" : "modal-success hide"}>
        <div className="modal-success__aside" />
        <div className="modal-success__main">
          <h4 className="heading-4">Congratulations</h4>
          <p className="par-2">You have successfully passed the registration</p>
          <button
            className="btn btn__text"
            href="#"
            aria-label="OK"
            onClick={() => showModal(modal)}
          >
            OK
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.formData.modal
});

export default connect(
  mapStateToProps,
  { showModal }
)(ModalSuccess);
