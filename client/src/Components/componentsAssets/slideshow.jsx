import React, { useEffect, useMemo, useState } from "react";
import '../../style.scss'

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItem, setVisibleItems] = useState([]);

  const imageFolder = '/slideshow/'
  const totalImages = 20;

  const ImageArray = useMemo(() => {
    const array = [];

    for (let i = 1 ; i <= totalImages; i++) {
      const imageName = `anestar${i}.jpg`;
      const imagePath = process.env.PUBLIC_URL + `${imageFolder}${imageName}`;

      array.push(imagePath);  
      
    }
    

    return array;
  }, [imageFolder, totalImages]);

 

  const totalItems = ImageArray.length;
  const itemsPerPage = 5;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const autoSlideInterval = 3000;

  useEffect(() => {
    const updateVisibleItems = () => {
      const startIndex = currentIndex * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const newVisibleItems = ImageArray.slice(startIndex, endIndex);

      setVisibleItems(newVisibleItems);
    };

    updateVisibleItems();
  }, [currentIndex, ImageArray, itemsPerPage]);

  useEffect(() => {
    let timerId;

    const autoSlide = () => {
      timerId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex < totalPages - 1 ? prevIndex + 1 : 0
        );
      }, autoSlideInterval);
    };

    autoSlide();

    return () => {
      clearInterval(timerId);
    };
  }, [totalPages, autoSlideInterval]);

  function handlePrev() {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalPages - 1
    );
  }

  function handleNext() {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalPages - 1 ? prevIndex + 1 : 0
    );
  }

  return (
    <div className="slideshow">
      {visibleItem.map((item, index) => (
        <div key={index} className="slideshow-images">
          <img src={item} alt="missing" />      
        </div>
      ))}
      <button onClick={handlePrev} className="prev">&lt;</button>
      <button onClick={handleNext} className="next">&gt;</button>
    </div>
  );
};

export default SlideShow;
