import React, { useState } from 'react';
import Modal from 'react-modal';

//import close from '../assets/Vector.svg';
//import send from '../assets/Send.svg';

const customStyles = {
  content: {
    width: '50%',
    height: '95%',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '5%',
  },
};

Modal.setAppElement('#root');

function ContactModal() {
  let subtitle: { style: { color: string; }; };
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
    window.history.back()
  }

  const onSubmit = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsOpen(false);
    window.history.back()
  }

  return (
    <div>
      <button onClick={openModal}></button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Contact Modal"
      >
        <button onClick={closeModal} />
      </Modal>
    </div>
  );
}

export default ContactModal