import React from 'react';
import { Spinner, Table } from 'react-bootstrap';
import UpdateSlider from './UpdateSlider';
import DeleteSlider from './DeleteSlider';
import AddSliderMovie from './AddSliderMovie';
import { useSelector } from 'react-redux';

function SliderGrid() {

    const { SliderListItems, isLoading } = useSelector(
        (state) => state.sliders
      );
    
      if (isLoading === true)
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner variant="info" size="large" />
          </div>
        );

    return (
        <Table
            bordered
            hover
            striped
            className="text-center justify-content-center align-items-center mt-5"
        >
            <thead>
                <tr>
                    <th>عنوان فارسی</th>
                    <th>عنوان لاتین</th>
                    <th>توضیحات</th>
                    <th>صفحه URL</th>
                    <th>ویرایش</th>
                    <th>حذف</th>
                    <th>ثبت فیلم</th>
                </tr>
            </thead>
            <tbody>
                {SliderListItems.map((item)=>{
                    return <tr key={item.sliderId}>
                    <td>{item.sliderPersianTitle}</td>
                    <td>{item.sliderLatinTitle}</td>
                    <td>{item.summary}</td>
                    <td>{item.description}</td>
                    <td>
                        <UpdateSlider />
                    </td>
                    <td>
                        <AddSliderMovie />
                    </td>
                    <td>
                        <DeleteSlider />
                    </td>
                </tr>
                })}

            </tbody>
        </Table>
    );
}

export default SliderGrid;
