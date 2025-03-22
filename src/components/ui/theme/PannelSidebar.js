import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PannelSidebar.css';
import { Dropdown } from 'react-bootstrap';
import Link from 'next/link';
import { BsStack } from 'react-icons/bs';

const PannelSidebar = () => {

  return (
    <div>
      <div className={`sidebar open`}>
        <ul>
          <li>
            <Link href="/">خانه</Link>
          </li>
          <li>
            <Link href="/pannel/categories">مدیریت دسته بندی ها</Link>
          </li>
          <li>
            <Link href="/pannel/genres">مدیریت ژانر ها</Link>
          </li>
          <li>
            <Link href="/pannel/movies">مدیریت فیلم ها</Link>
          </li>
          <li>
            <Link href="/pannel/directors">مدیریت کارگردانان</Link>
          </li>
          <li>
            <Link href="/pannel/actors">مدیریت بازیگران</Link>
          </li>
          <li>
            <Link href="/pannel/sliders">مدیریت اسلایدر ها</Link>
          </li>
          <li>
            <Link href="/pannel/boxes">مدیریت جعبه های نمایش</Link>
          </li>
          <li>
            <Link href="/pannel/comments">مدیریت نظرات</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PannelSidebar;
