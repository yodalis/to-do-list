import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import './form.css';

export default function Form({ handleSubmit, handleInputChange, newTask }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      {/* Convenção de nomenclatura de eventos onclick, onchange, etc */}
      <input
        onChange={handleInputChange}
        type="text"
        value={newTask}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};
