import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Tarefas.css';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit className="edit" onClick={(e) => handleEdit(e, index)} />
            <FaWindowClose className="delete" onClick={(e) => handleDelete(e, index)} />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tarefas: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired
};
