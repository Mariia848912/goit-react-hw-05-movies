import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { NOTIFICATION } from '../../constants/notification';
import PropTypes from 'prop-types';
import { Button, Input, SearchForm } from './SearchBox.styled';

const initialValues = {
  query: '',
};

export const SearchBox = ({ onSubmit }) => {
  const handleSumbit = (value, actions) => {
    if (value.query.trim() === '') {
      toast.error(NOTIFICATION.noInfoToSearch);
      return;
    }
    onSubmit(value.query);
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSumbit}>
      <SearchForm>
        <Input type="text" name="query" />
        <Button type="submit">Search</Button>
      </SearchForm>
    </Formik>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
