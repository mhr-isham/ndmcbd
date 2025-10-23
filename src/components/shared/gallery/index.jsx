import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import StyledDialog from "../../ui/dialog";
import getGallery from "../../../api/getGallery";
import { useEffect, useState } from "react";
import galleryImages from "../../../static-data/gallery-images.json";

export const MasonryGallery = () => {
  const [open, setOpen] = useState(false);
  const [itemData] = useState(galleryImages);
  const [currImgIdx, setCurrImgIdx] = useState("");
  const [count, setCount] = useState(10);

  // Handle image click
  const handleImgOpen = (idx) => {
    setCurrImgIdx(idx);
    setOpen(true);
  };

  // Infinite scroll logic
  useEffect(() => {
    const onScroll = () => {
      if (
        Math.round(window.scrollY + window.innerHeight) >=
        document.body.scrollHeight - 600
      ) {
        setCount((prev) => prev + 10);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Optional API fetch fallback
  const getImages = async () => {
    try {
      const images = await getGallery();
      // setImage(images.data.data); // Uncomment if needed
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  // Flatten all sections for dialog view
  const flattenedImages = Object.values(itemData).flat();

  // Keep track of global index
  let globalIndex = 0;

  return (
    <div style={{ paddingBottom: "40px" }}>
      {Object.entries(itemData || {}).map(([section, images]) => {
        const sectionStart = globalIndex;
        globalIndex += images.length;

        return (
          <div key={section} style={{ marginBottom: "40px" }}>
            <h2
              style={{
                margin: "20px 0",
                fontSize: "1.5rem",
                textAlign: "center",
              }}
            >
              {section}
            </h2>

            <ImageList variant="masonry" cols={3} gap={8}>
              {images.slice(0, count).map((item, index) => (
                <ImageListItem key={index}>
                  <img
                    srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item}?w=248&fit=crop&auto=format`}
                    alt={`${section}_image`}
                    style={{ cursor: "pointer" }}
                    loading="lazy"
                    onClick={() => handleImgOpen(sectionStart + index)}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        );
      })}

      {open && (
        <StyledDialog
          handleClose={() => setOpen(false)}
          currImgIdx={currImgIdx}
          open={open}
          itemData={flattenedImages}
        />
      )}
    </div>
  );
};
