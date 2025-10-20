import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import StyledDialog from "../../ui/dialog";
import getGallery from "../../../api/getGallery";
import { useEffect, useState } from "react";
import galleryImages from "../../../static-data/gallery-images.json";

export const MasonryGallery = () => {
  const [open, setOpen] = React.useState(false);
  // const [itemData, setImage] = useState([]);
  const [itemData] = useState(galleryImages);
  const [currImg, setCurrImg] = React.useState("");
  const [currImgIdx, setCurrImgIdx] = React.useState("");
  const [count, setCount] = React.useState(10);
  const handleImgOpen = (idx) => {
    setOpen(true);
    setCurrImgIdx(idx);
  };
  React.useEffect(() => {
    const onScroll = () => {
      if (
        Math.round(window.scrollY + window.innerHeight) >=
        document.body.scrollHeight - 600
      ) {
        setCount(count + 10);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [count]);
  
  const getImages = async () => {
    try {
      const images = await getGallery();
      setImage(images.data.data);
    } catch (error) {
      setImage(galleryImages); 
    }
  };  
  
  useEffect(() => {
    getImages();
  }, []);
  
  return (
    <div style={{ paddingBottom: "40px" }}>
      {Object.entries(itemData || {}).map(([section, images]) => (
        <div key={section} style={{ marginBottom: "40px" }}>
          <h2 style={{ margin: "20px 0", fontSize: "1.5rem", textAlign: "center" }}>
            {section}
          </h2>
          <ImageList variant="masonry" cols={3} gap={8}>
            {images.slice(0, count).map((item, index) => (
              <ImageListItem key={index}>
                <img
                  srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item}?w=248&fit=crop&auto=format`}
                  alt={section + "_image"}
                  style={{ cursor: "pointer" }}
                  loading="lazy"
                  onClick={() => handleImgOpen(index)}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      ))}
  
      {open && (
        <StyledDialog
          handleClose={() => setOpen(false)}
          currImgIdx={currImgIdx}
          open={open}
          itemData={Object.values(itemData).flat()}
        />
      )}
    </div>
  );  
};

// const itemData = [
//   {
//     img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
//     title: "Bed",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
//     title: "Books",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
//     title: "Sink",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
//     title: "Kitchen",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
//     title: "Blinds",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
//     title: "Chairs",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
//     title: "Laptop",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
//     title: "Doors",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
//     title: "Coffee",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
//     title: "Storage",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
//     title: "Candle",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
//     title: "Coffee table",
//   },
// ];
