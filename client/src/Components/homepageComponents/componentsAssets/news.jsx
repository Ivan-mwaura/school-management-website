import React, { useEffect, useState } from "react";
import data from "./data";
import NewsPlaceholder from "../../../placeholders/newsPlaceholder";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

const News = () => {
  const [datas, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
        // reject(new Error('Error while fetching data'));
      }, 5000);
    });
  };

  const responsive = {
    0: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 }
  };

  const renderCarouselItems = () => {
    if (isLoading) {
      return Array.from({ length: 4 }).map((_, index) => (
        <div key={index}>
          <NewsPlaceholder />
        </div>
      ));
    }

    return datas.map((dt) => (
      <div key={dt.id} className="news-component">
        <img src={dt.imageUrl} alt="" className="news-image" />
        <p className="heading">{dt.heading}</p>
        <div className="label-date">
          <div className="label">
            <p>{dt.label}</p>
            <p>{dt.date}</p>
          </div>
          <p className="title">{dt.title}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="news-container">
      <AliceCarousel
         autoPlay={true}
         autoPlayInterval={3000}
         responsive={responsive}
         slidesToShow={5}
         slidesToScroll={1}
         animationDuration={1500}
         keyboardNavigation={true}
         items={renderCarouselItems()}
      />
    </div>
  );
};

export default News;