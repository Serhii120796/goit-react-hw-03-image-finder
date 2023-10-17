import { Image } from './Modal.styled';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1200,
  },
  content: {
    border: 'none',
    padding: '0',
    width: 'max-content',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'transparent',
  },
};

Modal.setAppElement('#root');

export const ModalWindow = ({ largeImage, showModal, closeModal }) => {
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <Image src={largeImage} alt="" />
    </Modal>
  );
};
