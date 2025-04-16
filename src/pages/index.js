import SiteBox from "@/components/site/elements/SiteBox";
import SiteSlider from "@/components/site/elements/SiteCarousel";
import SiteNavbar from "@/components/site/menu/SiteNavbar";
import SiteWrapper from "@/components/ui/theme/SiteWrapper";
import axios from "axios";
import React from "react";

function Home({slider,boxes}) {
  return (
    <>
      <SiteWrapper>
    <SiteNavbar/>
        <SiteSlider slider={slider} />
        {boxes?boxes.map((item,index)=>{
          return <SiteBox box={item} key={index}/>
        }):<></>}
      </SiteWrapper>
    </>
  );
}

export async function getStaticProps(context) {
  try {
      const sliders = await axios.get('http://localhost:5090/site/slider/get');
      const boxes = await axios.get('http://localhost:5090/site/boxes/get');
      return {
          props: {
              slider: sliders?.data || [],
              boxes: boxes?.data || [],
              revalidate: 1,
          },
      };
  } catch (error) {
      console.error("Error fetching data:", error);
      return {
          props: {
              slider: [],
              boxes: [],
              revalidate: 1,
          },
      };
  }
}


export default Home;
