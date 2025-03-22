import React from 'react';
import { BsTrash } from 'react-icons/bs';

function DeleteComment() {
    return (
        <button type="button" className="btn btn-danger">
            حذف <BsTrash />
        </button>
    );
}

export default DeleteComment;
