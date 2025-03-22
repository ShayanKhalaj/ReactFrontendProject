import Image from "next/image";
import React from "react";
import styles from "./Category.module.scss";
import Link from "next/link";

function Category({ category }) {
  return (
    <Link href={`/site/movies/${category.categoryId}`}>
      <div className={styles.categoryContainer}>
        <h2>{category.categoryPersianName}</h2>
        <Image
          src={category.categoryImageUrl}
          alt={category.categoryLatinName}
          width={500} // عرض تصویر (شما باید آن را طبق نیاز خود تنظیم کنید)
          height={300} // ارتفاع تصویر (شما باید آن را طبق نیاز خود تنظیم کنید)
          layout="intrinsic" // حالت اندازه‌گیری خودکار تصویر
        />
      </div>
    </Link>
  );
}

export default Category;
