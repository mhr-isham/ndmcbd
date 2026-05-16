import { Text } from "../styles/Elements.style";
import {
  CardContainer,
  CardFront,
  CardImage,
  CardInner,
  CardLink,
  CardSkeleton,
  ContentBox,
} from "../styles/ProfileCard.styles";
import defaultImg from "../../assets/def.jpg";
import { CircularProgress, Skeleton } from "@mui/material";
import { Suspense, useEffect, useState } from "react";
import Loader from "../loader/Loader";

const ProfileCard = ({ img: imgUrl, name, post, fb, height, roll = "" }) => {
  const profileImg = imgUrl !== undefined ? imgUrl : defaultImg;

  return (
    <CardContainer data-aos="zoom-in">
      <CardLink href={fb} target="_blank">
        <CardInner>
          <CardFront>
            <CardFront>
              <CardImage src={profileImg} loading="lazy" />
              <CircularProgress
                sx={{
                  position: "absolute",
                  left: "40%",
                  top: "40%",
                  zIndex: "-10",
                }}
              />

              <ContentBox height={height}>
                <Text design={{ size: "xxs", weight: "xBold" }} style={{ fontSize: '0.9rem' }}>
                  {name}
                </Text>
                {post && (
                  <Text design={{ size: "xxs", weight: "light" }} style={{ fontSize: '0.8rem' }}>
                    {post}
                  </Text>
                )}
                {roll && (
                  <Text design={{ size: "xxs", weight: "light" }} style={{ fontSize: '0.8rem' }}>
                    #{roll}
                  </Text>
                )}
              </ContentBox>
            </CardFront>
          </CardFront>
        </CardInner>
      </CardLink>
    </CardContainer>
  );
};

export default ProfileCard;
