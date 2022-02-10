import {Form, SearchFormButton, SearchFormInput} from './Form.styled'
import PropTypes from "prop-types";

const SearchForm = ({handleSubmit}) => {
    return (
        <Form onSubmit={handleSubmit} autoComplete="off">
        <SearchFormInput type="text" name="query" />
        <SearchFormButton type="submit">Search</SearchFormButton>
      </Form>
    );
  };

  SearchForm.propTypes = {
   handleSubmit: PropTypes.func.isRequired,
  };

export default SearchForm;