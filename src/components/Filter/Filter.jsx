import React from 'react';
import { connect } from 'react-redux';
import phonebookActions from '../redux/actions';
import styles from './Filter.module.css';

const Filter = ({ onChange, value }) => {
  return (
    <div className={styles.section}>
      <label>
        <h2 className={styles.title}>Find contact by name</h2>
        <input
          type="text"
          name="name"
          value={value}
          onChange={onChange}
          className={styles.input}
          placeholder="find name..."
        />
      </label>
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.phonebook.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(phonebookActions.filterContacts(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
