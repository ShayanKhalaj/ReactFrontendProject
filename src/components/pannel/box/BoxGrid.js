import Image from 'next/image';
import React from 'react';
import { Spinner, Table } from 'react-bootstrap';
import UpdateBox from './UpdateBox';
import DeleteBox from './DeleteBox';
import { useSelector } from 'react-redux';

function BoxGrid() {

    const { BoxListItems, isLoading } = useSelector(
        (state) => state.boxes
      );
    
    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Spinner variant="info" size="large" />
            </div>
        );
    }

    return (
        <Table bordered hover striped className="text-center justify-content-center align-items-center mt-5">
            <thead>
                <tr>
                    <th>نام فارسی</th>
                    <th>نام لاتین</th>
                    <th>توضیحات</th>
                    <th></th>
                    <th></th>

                </tr>
            </thead>
            <tbody>
                {BoxListItems.map((item) => (
                    <tr key={item.boxId}>
                        <td>{item.boxPersianTitle}</td>
                        <td>{item.boxLatinTitle}</td>
                        <td>{item.description}</td>
                        <td>
                            <UpdateBox box={item} />
                        </td>
                        <td>
                            <DeleteBox boxId={item.boxId} />
                        </td>
                     
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default BoxGrid;
