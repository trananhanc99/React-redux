import React from 'react'
import { useSelector } from 'react-redux'
import Slider from "react-slick";
import { Row, Col } from 'reactstrap';
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
  // const products = useSelector(state => state.Product);
  const Data = [];
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
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
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
        <Row>
          {Data.map((item, key) => {
            return (
              <Col sm='6' md='3'>
                <Product
                  id={item._id}
                  img={Imgproduct1}
                  name={item.nameProduct}
                  alt="Imgproduct1"
                  price={item.princeProduct}
                  key={key}
                />
              </Col>
              
            );
          })}
        </Row>
      </div>
    </div>
  )
}
export default CounterComponent;