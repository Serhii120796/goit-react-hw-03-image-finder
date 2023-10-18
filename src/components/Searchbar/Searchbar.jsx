import { Header, SearchForm, SearchButton, Input } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from 'react-icons';

export const Searchbar = ({ onSubmit }) => (
  <Header>
    <SearchForm
      onSubmit={evt => {
        evt.preventDefault();
        const searchValue = evt.target.elements.input.value;
        onSubmit(searchValue);
      }}
    >
      <SearchButton type="submit">
        <IconContext.Provider
          value={{ size: '1.8em' }}
        >
          <AiOutlineSearch />
        </IconContext.Provider>
      </SearchButton>

      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        name="input"
        required
      />
    </SearchForm>
  </Header>
);
