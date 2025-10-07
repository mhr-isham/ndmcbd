import NdmcBreadcrumbs from "../../components/breadcrumbs";
import {
  CenterGrid,
  PageTitleContainer,
  SectionSubtitle,
  SectionTitle,
} from "../../components/styles/Elements.style";
import { Section } from "../../components/styles/Page.style";
import ProfileCard from "../../components/ui/ProfileCard";
import usePageTitle from "../../hooks/usePageTitle";
import { useEffect, useMemo, useState } from "react";

const DevelopersPage = () => {
  usePageTitle("Developers");
  const initialCards = [
    {
      name: "Soumya Mahbub",
      roll: "12304123",
      img: "https://res.cloudinary.com/ndmc/image/upload/v1698047015/Final_for_ndmc_-_Soumya_M_1_h1tfj9.jpg",
      fb: "https://www.facebook.com/soumyamahbub",
    },
    {
      name: "Md. Arafat Hossain",
      roll: "12411063",
      img: "https://res.cloudinary.com/ndmc/image/upload/v1708936114/97128824e61a177c6c6704723adc5c3c.jpg",
      fb: "https://www.facebook.com/mdarafat159/",
    },
    {
      name: "Md. Hasib Khan",
      roll: "12401091",
      img: "https://res.cloudinary.com/ndmc/image/upload/v1707391361/hasib_1_agsfaw.jpg",
      fb: "https://www.facebook.com/hasib.unique",
    },
  ];

  // State to hold the shuffled cards
  const [shuffledCards, setShuffledCards] = useState(initialCards);

  // Function to shuffle the cards
  const shuffleCards = () => {
    const shuffled = [...initialCards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledCards(shuffled);
  };

  useMemo(() => {
    shuffleCards();
  }, []);

  return (
    <Section style={{ display: "block" }}>
      <PageTitleContainer>
        <SectionSubtitle>Developers</SectionSubtitle>
        <SectionTitle>Our Developers</SectionTitle>
        <NdmcBreadcrumbs
          pagePath={[
            {
              name: "Developers",
              active: true,
            },
          ]}
        />
      </PageTitleContainer>

      <CenterGrid container columns={{ xs: 12, md: 12 }} gap={"1rem"}>
        {shuffledCards.map((card, index) => (
          <ProfileCard
            key={index}
            img={card.img}
            name={card.name}
            roll={card.roll}
            height={"80px"}
            fb={card.fb}
          />
        ))}
      </CenterGrid>
    </Section>
  );
};

export default DevelopersPage;
