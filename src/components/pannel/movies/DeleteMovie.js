import React from 'react';
import { BsTrash } from 'react-icons/bs';

function DeleteMovie() {
    return (
        <button type="button" className="btn btn-danger">
            حذف <BsTrash />
        </button>
    );
}

export default DeleteMovie;
