import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import Icon from "./Icon";
import { Image, StyledSwiper } from "../styles/Elements.style";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledDialog = ({ open, handleClose, currImgIdx, itemData }) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <Box sx={{ position: "relative" }}>
        <Toolbar>
          <div style={{ textAlign: "end", width: "100%" }}>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <Icon icon={"close"} icontype={"line"} />
            </IconButton>
          </div>
        </Toolbar>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "85%",
        }}
      >
        <div
          style={{
            width: "80vw",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <StyledSwiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            initialSlide={currImgIdx}
          >
            {itemData.map((item, index) => (
              <SwiperSlide key={index}>
                <div style={{ textAlign: "center" }}>
                  <Image
                    src={item}
                    loading="lazy"
                    style={{
                      maxHeight: "80vh",
                      width: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
            {/* <Image
                            src={currImg}
                            style={{ width: "100%", objectFit: "cover" }}
                        /> */}
          </StyledSwiper>
        </div>
      </div>
    </Dialog>
  );
};

export default StyledDialog;
