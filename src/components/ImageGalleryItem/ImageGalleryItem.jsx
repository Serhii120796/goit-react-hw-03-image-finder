import { GalleryItem, SmallImage, Image } from './ImageGalleryItem.styled';
import { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1000,
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

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModal = target => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;

    const {
      image: { webformatURL, largeImageURL },
    } = this.props;

    return (
      <>
        <GalleryItem onClick={this.openModal}>
          <SmallImage src={webformatURL} alt="" />
        </GalleryItem>
        <Modal
          isOpen={showModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <Image src={largeImageURL} alt="" />
        </Modal>
      </>
    );
  }
}
