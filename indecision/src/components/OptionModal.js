import React from 'react';
import Modal from 'react-modal';

const OptionalModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
  >
    <h3>selected option</h3>
    {props.selectedOption &&<p>{props.selectedOption}</p>}
  </Modal>
);

export default OptionalModal;