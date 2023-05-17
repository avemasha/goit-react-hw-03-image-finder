import React from "react";
// import PropTypes from 'prop-types';
import { Formik, Field, Form } from "formik";

const initialValues = {
      query: '',
      page: 1,
    };

 export const Searchbar = ({updateQuery}) => {
      const handleSubmit = (values, { resetForm }) => {
            updateQuery(values);
           
            resetForm();
          };

  return (
      <header className="searchbar">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="form searchForm"  autoComplete="off" >
      <Field
            className='searchForm-input'
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />

          <button type="submit" className="searchForm-button">
            <span className="searchForm-button-label">Search</span>
          </button>
      </Form>
      </Formik>
    </header>
  )
}

// Searchbar.propTypes = {
// onSubmit: PropTypes.func.isRequired,
// }