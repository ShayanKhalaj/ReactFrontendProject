import React from 'react';
import { Table } from 'react-bootstrap';
import DeleteComment from './DeleteComment';
import AnswerComment from './AnswerComment';
import AcceptComment from './AcceptComment';

function CommentGrid() {
    return (
        <Table
            bordered
            hover
            striped
            className="text-center justify-content-center align-items-center mt-5"
        >
            <thead>
                <tr>
                    <th>متن</th>
                    <th>پاسخ</th>
                    <th>تایید شده</th>
                    <th>تعداد لایک</th>
                    <th>ویرایش</th>
                    <th>تایید</th>
                    <th>حذف</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>این فیلم بسیار جذاب بود!</td>
                    <td>بله، واقعاً فیلم فوق‌العاده‌ای بود.</td>
                    <td>بله</td>
                    <td>20</td>
                    <td>
                        <AnswerComment />
                    </td>
                    <td>
                        <AcceptComment />
                    </td>
                    <td>
                        <DeleteComment />
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}

export default CommentGrid;
