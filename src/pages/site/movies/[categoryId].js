import SiteBox from "@/components/site/elements/SiteBox";
import SiteSlider from "@/components/site/elements/SiteCarousel";
import SiteNavbar from "@/components/site/menu/SiteNavbar";
import SiteWrapper from "@/components/ui/theme/SiteWrapper";
import axios from "axios";
import React from "react";

function Movies({slider, boxes}) {

  return (
    <>
      <SiteWrapper>
        <SiteNavbar />
        <SiteSlider slider={slider} />
        {boxes.map((item, index) => {
          return <SiteBox box={item} key={index} />;
        })}
      </SiteWrapper>
    </>
  );
}

export async function getServerSideProps(context) {
  // بررسی پارامترهای URL
  const { categoryId } = context.params;

  // درخواست به API برای دریافت داده‌ها بر اساس categoryId
  const sliders = await axios.get(`http://localhost:5090/site/slider/get/${categoryId}`);
  const boxes = await axios.get(`http://localhost:5090/site/boxes/get/${categoryId}`);


  return {
    props: {
      slider: sliders.data,
      boxes: boxes.data
    }
  };
}

export default Movies;
