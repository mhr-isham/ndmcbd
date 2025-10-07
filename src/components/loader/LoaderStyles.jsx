import styled from "@emotion/styled";
import { BluredBackground } from "../styles/StylePresets";

export const LoaderWrapper = styled.div`
  width: 100%;
  /* ${BluredBackground} */
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  z-index: 1000000000000000;
`;

export const StyledContainer = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  z-index: 100;
`;

export const StyledBox = styled.div`
  @keyframes slide {
    0% {
      background-color: #6950cb;
      transform: translatex(0vw);
    }
    100% {
      background-color: #674cb2af;
      transform: translatex(calc(250px - (33px * 1.25)));
    }
  }

  @keyframes color-change {
    0% {
      background-color: #5a48abba;
    }
    100% {
      background-color: #403e80;
    }
  }

  /* @for $i from 1 to 5 */
  // {
  //     @keyframes flip-#{$i} {
  //       0%, #{$i * 15}% { transform: rotate(0); }
  //       #{$i * 15 + 20}%, 100% { transform: rotate(-180deg); }
  //     }

  // 	@keyframes squidge-#{$i}
  // 	{
  // 		#{$i * 15 - 10}% { transform-origin: center bottom; transform: scalex(1) scaley(1);}
  // 		#{$i * 15}% { transform-origin: center bottom; transform: scalex(1.3) scaley(0.7);}
  // 		#{$i * 15 + 10}%, #{$i * 15 + 5}% { transform-origin: center bottom; transform: scalex(0.8) scaley(1.4);}
  // 		#{$i * 15 + 40}%, 100% { transform-origin: center top; transform: scalex(1) scaley(1);}
  // 		#{$i * 15 + 25}% { transform-origin: center top; transform: scalex(1.3) scaley(0.7);}
  // 	}
  // }

  ${Array.from({ length: 5 }).map(
    (_, i) => `
@keyframes flip-${i + 1} {
       0%, ${(i + 1) * 15}% { transform: rotate(0); }
       ${(i + 1) * 15 + 20}%, 100% { transform: rotate(-180deg); }
     }

     @keyframes squidge-#{$i}
	{
		${
      (i + 1) * 15 - 10
    }% { transform-origin: center bottom; transform: scalex(1) scaley(1);}
		${
      (i + 1) * 15
    }% { transform-origin: center bottom; transform: scalex(1.3) scaley(0.7);}
		${(i + 1) * 15 + 10}%, ${
      (i + 1) * 15 + 5
    }% { transform-origin: center bottom; transform: scalex(0.8) scaley(1.4);}
		${
      (i + 1) * 15 + 40
    }%, 100% { transform-origin: center top; transform: scalex(1) scaley(1);}
		${
      (i + 1) * 15 + 25
    }% { transform-origin: center top; transform: scalex(1.3) scaley(0.7);}
	}




`
  )}

  width: 33px;
  height: 33px;
  position: relative;
  display: block;
  transform-origin: -50% center;
  border-radius: 15%;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: lightblue;
    border-radius: 15%;
    box-shadow: 0px 0px 10px 0px rgba(#604cbbbb, 0.4);
  }

  &:nth-child(1) {
    animation: slide 1.5s ease-in-out infinite alternate;
    &:after {
      animation: color-change 1.5s ease-in-out infinite alternate;
    }
  }

  ${Array.from({ length: 5 }).map(
    (_, i) => `
    &:nth-child(${i + 2}) {
      animation: flip-${i + 1} 1.5s ease-in-out infinite alternate;
      &:after {
        animation:squidge-${i + 1} 1.5s ease-in-out infinite alternate;
      }
    }
  `
  )}

  &:nth-child(2):after {
    background-color: #7652d9af;
  }
  &:nth-child(3):after {
    background-color: #735bdbba;
  }
  &:nth-child(4):after {
    background-color: #6a53d0ba;
  }
  &:nth-child(5):after {
    background-color: #604cbbbb;
  }
`;
