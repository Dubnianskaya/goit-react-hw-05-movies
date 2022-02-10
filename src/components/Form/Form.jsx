import {Form, SearchFormButton, SearchFormInput} from './Form.styled'

const SearchForm = ({handleSubmit}) => {
    return (
        <Form onSubmit={handleSubmit} autoComplete="off">
        <SearchFormInput type="text" name="query" />
        <SearchFormButton type="submit">Search</SearchFormButton>
      </Form>
    );
  };

export default SearchForm;