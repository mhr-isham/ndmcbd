import styled from "@emotion/styled";
import { ButtonContainer } from "../../components/styles/Elements.style";

export const AboutImageBox = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background: url(${(props) => props.bgsrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${(props) => props.theme.breakpoints.up("sm")} {
    height: 300px;
  }
  ${(props) => props.theme.breakpoints.up("md")} {
    height: 350px;
  }
  ${(props) => props.theme.breakpoints.up("lg")} {
    height: 400px;
  }
  ${(props) => props.theme.breakpoints.up("xl")} {
    height: 450px;
  }
`;

export const SectionInfoContainer = styled.div`
  ${(props) => props.theme.breakpoints.down("sm")} {
    text-align: center;
  }
`;

export const HomeBtnContainer = styled(ButtonContainer)`
  text-align: center !important;
  ${(props) => props.theme.breakpoints.up("lg")} {
    text-align: left !important;
  }
`;


export const FloatingScrollLink = styled.a`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1200;
  display: block;
  width: 240px;
  height: 220px;
  cursor: pointer;
  
  /* Scroll rod top cap */
  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #8B4513 100%);
    border-radius: 50% 50% 0 0 / 20px 20px 0 0;
    box-shadow: 
      inset 0 2px 4px rgba(255,255,255,0.3),
      inset 0 -2px 4px rgba(0,0,0,0.3),
      0 4px 8px rgba(0,0,0,0.3);
    z-index: 3;
    animation: scrollRodAppear 0.6s ease-out both;
  }

  /* Scroll rod body */
  &::after {
    content: '';
    position: absolute;
    right: 7px;
    top: 30px;
    width: 26px;
    height: 190px;
    background: linear-gradient(90deg, #654321 0%, #8B6914 50%, #654321 100%);
    border-radius: 13px;
    box-shadow: 
      inset 2px 0 3px rgba(0,0,0,0.4),
      inset -2px 0 3px rgba(255,255,255,0.2),
      0 4px 8px rgba(0,0,0,0.3);
    z-index: 3;
    animation: scrollRodAppear 0.6s ease-out 0.1s both;
  }

  img {
    position: absolute;
    right: 40px;
    top: 20px;
    width: 310px;
    height: 190px;
    object-fit: cover;
    display: block;
    border-radius: 10px 0 0 10px;
    box-shadow: 
      -10px 10px 30px rgba(0,0,0,0.3),
      0 0 0 4px #8B4513,
      0 0 0 6px #D2691E;
    transform-origin: right center;
    animation: scrollUnfurlLeft 1.2s ease-out 0.7s both;
  }

    /* Learn More Button */
  span {
    position: absolute;
    right: 30px;
    bottom: 5px;
    padding: 10px 20px;
    background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
    color: white;
    font-weight: 600;
    font-size: 14px;
    border-radius: 25px;
    box-shadow: 
      0 4px 15px rgba(255, 107, 53, 0.4),
      inset 0 1px 2px rgba(255,255,255,0.3);
    z-index: 4;
    opacity: 0;
    transform: translateY(10px);
    animation: buttonSlideIn 0.5s ease-out 1.9s both;
    pointer-events: none;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  &:hover span {
    background: linear-gradient(135deg, #FF7B45 0%, #F8A32E 100%);
    box-shadow: 
      0 6px 20px rgba(255, 107, 53, 0.6),
      inset 0 1px 2px rgba(255,255,255,0.3);
    transform: translateY(0) scale(1.05);
    transition: all 0.3s ease;
  }

  /* Close Button Container */
  .close-button {
    position: absolute;
    right: 20px;
    top: -5px;
    width: 30px;
    height: 30px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 5;
    opacity: 0;
    animation: buttonSlideIn 0.5s ease-out 1.9s both;
    pointer-events: auto;
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);
  }

  .close-button:hover {
    background: rgba(255, 0, 0, 0.7);
    transform: scale(1.1) rotate(90deg);
  }

  .close-button::before,
  .close-button::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 2px;
    background: white;
    border-radius: 1px;
  }

  .close-button::before {
    transform: rotate(45deg);
  }

  .close-button::after {
    transform: rotate(-45deg);
  }

  @keyframes buttonSlideIn {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scrollRodAppear {
    0% { 
      transform: translateY(-50px);
      opacity: 0;
    }
    60% {
      transform: translateY(5px);
    }
    100% { 
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes scrollUnfurlLeft {
    0% { 
      transform: scaleX(0) rotateY(-90deg);
      opacity: 0;
    }
    50% {
      transform: scaleX(0.6) rotateY(-30deg);
      opacity: 0.8;
    }
    70% {
      transform: scaleX(1.05) rotateY(5deg);
      opacity: 1;
    }
    85% {
      transform: scaleX(0.98) rotateY(-2deg);
    }
    100% { 
      transform: scaleX(1) rotateY(0deg);
      opacity: 1;
    }
  }

  &:hover img {
    transform: scaleX(1.03);
    box-shadow: 
      -15px 15px 40px rgba(0,0,0,0.4),
      0 0 0 3px #8B4513,
      0 0 0 5px #D2691E,
      0 0 20px rgba(210,105,30,0.5);
    transition: all 0.3s ease;
  }

  @media (max-width: 600px) {
    width: 125px;
    height: 125px;
    right: 12px;
    bottom: 12px;
    
    &::before {
      width: 25px;
      height: 25px;
    }
    
    &::after {
      right: 4px;
      top: 18px;
      width: 17px;
      height: 107px;
    }
    
    img {
      width: 100px;
      height: 100px;
      right: 25px;
      top: 12px;
    }
  }
`;