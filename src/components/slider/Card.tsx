import React from "react";

interface ImageCardProps {
  image: string;
  className?: string;
  alt?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  image,
  className = "",
  alt = "card-image",
}) => {
  return (
    <div className={`w-full  h-full ${className}`}>
      <div className="relative w-full md:h-[528px] overflow-hidden sm:aspect-video">
        <img src={image} alt={alt} className="w-full h-full  object-cover" />
      </div>
    </div>
  );
};

export default ImageCard;
