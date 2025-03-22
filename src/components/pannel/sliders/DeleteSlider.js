import React from 'react';
import { BsTrash } from 'react-icons/bs';

function DeleteSlider() {
    return (
        <button type="button" className="btn btn-danger">
            حذف <BsTrash />
        </button>
    );
}

export default DeleteSlider;
