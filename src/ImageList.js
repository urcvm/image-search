import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <ImageCard
        key={image.id}
        src={image.urls.regular}
        alt={image.description}
      />
    );
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
