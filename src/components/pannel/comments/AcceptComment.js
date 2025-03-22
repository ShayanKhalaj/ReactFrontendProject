import React from 'react';
import { Form } from 'react-bootstrap';
import { Formik, Field } from 'formik';

function AcceptComment() {
    return (
        <form>
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                />
            </div>
        </form>
    );
}

export default AcceptComment;
