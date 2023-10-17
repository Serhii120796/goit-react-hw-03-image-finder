import { GalleryItem, Image } from './ImageGalleryItem.styled';
import { ModalWindow } from '../Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
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
      <GalleryItem onClick={this.openModal}>
        <Image src={webformatURL} alt="" />
        <ModalWindow largeImage={largeImageURL} showModal={showModal} closeModal={ this.closeModal} />
      </GalleryItem>
    );
  }
}
