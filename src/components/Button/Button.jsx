import { LoadMoreBtn } from './Button.styled';

export const Button = ({ handleClick }) => (
  <LoadMoreBtn type="button" onClick={handleClick}>
    Load more
  </LoadMoreBtn>
);
