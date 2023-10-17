import { Component } from 'react';
import { Layout } from './Layout';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from './pixabay-api';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    loading: false,
    error: false,
    query: '',
    page: 1,
    loadMore: false,
  };

  handleSubmit = value => {
    this.setState(prevState => {
      if (prevState.query !== value) {
        return {
          query: value,
          page: 1,
          images: [],
        }
      }
        return {
          query: value,
        }
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidUpdate(_, prevState) {
    const { page, query } = this.state;
    if (page !== prevState.page || query !== prevState.query) {
      try {
        this.setState({ loading: true, error: false });
        const { hits } = await fetchImages(query, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
        }));
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { images, loading } = this.state;

    return (
      <Layout>
        <Searchbar onSubmit ={this.handleSubmit} />
        {loading && <Loader />}
        {images.length !== 0 && <ImageGallery images={images} />}
        {images.length !== 0 && <Button handleClick={this.handleLoadMore} />}
      </Layout>
    );
  }
}
