import {
  Header,
  SearchForm,
  SearchButton,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

export const Searchbar = ({onSubmit }) => {

  return (
    <Header>
      <SearchForm onSubmit={(evt => {
        evt.preventDefault();
        const searchValue = evt.target.elements.input.value;
        onSubmit (searchValue);
      })}>
        <SearchButton type="submit">
          <ButtonLabel>Search</ButtonLabel>
        </SearchButton>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="input"
        />
      </SearchForm>
    </Header>
  );
};

