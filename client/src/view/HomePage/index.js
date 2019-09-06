import React from 'react'
import { useSelector } from 'react-redux'
import Slider from "react-slick";

// Components core
import Banner from "components/Banner";
import FeaturedCategory from "components/Featured_Category";
import Product from "components/Product";
//Import css
import "./index.css";
// Import Img
import ImgBanner from "assets/img/banner_img.png"
import ImgFeature1 from "assets/img/feature/feature_1.png"
import ImgFeature2 from "assets/img/feature/feature_2.png"
import Imgproduct1 from "assets/img/product/product_1.png"
const CounterComponent = () => {
  const products = useSelector(state => state);
  console.log(products);
  const settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const settingSlideProduct = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div>
      <div className="slideBar">
        <Slider {...settings}>
          <Banner 
          textBanner="Wood & Cloth Sofa"
          description="Tran Anh Anc"
          btn="Xem thêm"
          img={ImgBanner} alt="Banner"
          />
          <Banner 
          textBanner="Wood & Cloth Sofa"
          description="Tran Anh Anc"
          btn="Xem thêm"
          img={ImgBanner} alt="Banner"
          />
        </Slider>
      </div>
      <div>
        <h2 className="featured">Featured Category</h2>
        <FeaturedCategory className="m-t"
          lcol="7"
          lquality="Premium Quality"
          lnamefeature="Latest foam Sofa"
          limg={ImgFeature1}
          lalt="ImgFeature1"
          rcol="5"
          rquality="Premium Quality"
          rnamefeature="Latest foam Sofa"
          rimg={ImgFeature2}
          ralt="ImgFeature2"
        />
      </div>
      <div className="awesome">
        <h2>Awesome</h2>
        <Slider {...settingSlideProduct}>
          {products.map((item, key) => {
            return (
              <Product
                id={item.id}
                img={Imgproduct1}
                name={item.name}
                alt="Imgproduct1"
                price={item.price}
                key={key}
              />
            );
          })}
          
        </Slider>
      </div>
    </div>
    
  )
}

export default CounterComponent;