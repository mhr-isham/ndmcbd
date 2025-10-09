import {
    Description,
    ResponsiveText,
    Subtitle,
    Text,
  } from "../../components/styles/Elements.style";
  import {
    MembershipBanner,
    TitleWrapper,
    MembershipSection,
    SectionTitle,
    MembershipTitle,
  } from "./index.styles";
  import usePageTitle from "../../hooks/usePageTitle";
  
  const Membership = () => {
    usePageTitle("Membership");
    return (
      <div>
        <MembershipBanner>
          <TitleWrapper>
            <Subtitle> </Subtitle>
            <ResponsiveText
              design={{ size: "xxl", weight: "xBold" }}
              id="title"
              style={{ textTransform: "uppercase", lineHeight: "4.5rem" }}
            >
              
            </ResponsiveText>
          </TitleWrapper>
        </MembershipBanner>
  
        <div style={{ paddingTop: "50px" }}>
          <MembershipTitle>Membership</MembershipTitle>
  
          <Description align="left">
            Welcome all math maniacs, to the world of numbers, logic and limitless curiosity! 
            If you're a student at Notre Dame College who loves to explore patterns, solving problems 
            and finds beauty in mathematics, this is your page.
          </Description>
  
          <MembershipSection>
            <SectionTitle>Who Can Join?</SectionTitle>
            <Description align="left">
              All the students of Notre Dame College (NDC) are welcomed to be a part of Notre Dame Math Club. 
              Whether you are a math prodigy or just a curious learner, your mind of interest is what matters the most!
            </Description>
          </MembershipSection>
  
          <MembershipSection>
            <SectionTitle>How to Join?</SectionTitle>
            <Description align="left">
              Membership opens during your college 1st year. Simply fill out the Club Entrance Form when 
              registration begins. Don't worry if you missed that opportunity, still you can be a part of 
              this club by following the process.
            </Description>
          </MembershipSection>
  
          <MembershipSection>
            <SectionTitle>Membership Process</SectionTitle>
            <Description align="left">
              1. Collect the Membership Form from the Interfaith Library for Tk. 20
            </Description>
            <Description align="left">
              2. Submit the completed form within the announced deadline along with the Tk. 200 membership fee.
            </Description>
            <Description align="left">
              That's it, no additional fees for the rest of your college life! Within about three months, 
              you will receive your official Notre Dame Math Club ID Card.
            </Description>
          </MembershipSection>
  
          <MembershipSection>
            <SectionTitle>Communication & Community</SectionTitle>
            <Description align="left">
              After registration, all general members will be added to an official Messenger Group, where 
              you will receive updates, event notices, and mathy inspiration throughout the year.
            </Description>
          </MembershipSection>
  
          <MembershipSection>
            <SectionTitle>Group Representative (GR)</SectionTitle>
            <Description align="left">
              From your respective groups there will be one or two group representatives, selected by the 
              Executive Members of NDMC, who will lead their group as a representative of NDMC. They will 
              give announcements and notify all the general members about the updates of NDMC.
            </Description>
          </MembershipSection>
  
          <MembershipSection>
            <SectionTitle>Explore & Engage</SectionTitle>
            <Description align="left">
              Once you're a member, you can choose to join different departments of the club - whether it's 
              event organizing, research, publications or outreach. Each department offers a chance to develop 
              new skills and contribute to the club's legacy.
            </Description>
          </MembershipSection>
        </div>
      </div>
    );
  };
  
  export default Membership;
  