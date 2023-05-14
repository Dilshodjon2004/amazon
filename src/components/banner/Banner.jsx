import { useEffect, useRef, useState } from "react";
import "./Banner.css";
import { Container } from "../../utils";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
const Banner = () => {
  const [imageCount, setImageCount] = useState(0);
  const imageCon = useRef();
  const images = [
    "https://m.media-amazon.com/images/I/81d5OrWJAkL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
  ];

  const prevImage = () => {
    if (imageCount === 0) {
      setImageCount(images.length - 1);
    } else {
      setImageCount(imageCount - 1);
    }
  };

  const nextImage = () => {
    if (imageCount < images.length - 1) {
      setImageCount(imageCount + 1);
    } else {
      setImageCount(0);
    }
  };

  useEffect(() => {
    imageCon.current.scrollLeft = imageCount * imageCon.current.offsetWidth;
  }, [imageCount]);

  return (
    <Container>
      <div className="banner">
        <button className="left-btn" onClick={prevImage}>
          <SlArrowLeft />
        </button>
        <div className="image_container" ref={imageCon}>
          {images.map((image, index) => (
            <img
              src={image}
              className="banner_image"
              key={index}
              alt="bannerImage"
            />
          ))}
        </div>
        <div className="dots">
          {images.map((dot, index) => (
            <div
              style={imageCount === index ? { background: "dodgerblue" } : null}
              key={index}
              className="point"
              onClick={() => {
                setImageCount(index);
              }}
            ></div>
          ))}
        </div>
        <button className="right-btn" onClick={nextImage}>
          <SlArrowRight />
        </button>
      </div>
    </Container>
  );
};

export default Banner;
