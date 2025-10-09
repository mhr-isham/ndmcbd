import { Typography } from "@mui/material";
import {
  Description,
  SectorSection,
  StyledGrid,
  Text,
} from "../../components/styles/Elements.style";
import StyledCard from "../../components/ui/Card";
import styled from "@emotion/styled";

const ListItem = styled(Typography)`
  display: flex;
  span {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: 500;
    margin-right: 10px;
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

const StyledListItem = ({ children }) => {
  return (
    <ListItem>
      <span>&#x25cf;</span>
      <p>{children}</p>
    </ListItem>
  );
};

const SectorsSection = () => {
  return (
    <SectorSection
      center={"true"}
      container
      layout={{ default: "column", sm: "row" }}
      columns={{ lg: 12, xs: 12, md: 12, sm: 12 }}
    >
      {/* Administration */}
      <StyledGrid item xs={12} sm={4.5} md={3.5} lg={2.5} data-aos="zoom-out">
        <StyledCard
          icon={"user-settings"}
          icontype={"line"}
          title={"Administration"}
          shortDesc={
            "The Department of Administration is 'the brain' of NDMC. It handles the overall club operations and leads all club activity"
          }
        >
          <div style={{ padding: "15px 10px" }}>
            <Typography sx={{ mb: 3 }}>
              The Department of Administration is 'the brain' of NDMC. It
              handles the overall club operations and leads all club activity.
            </Typography>

            <div style={{ margin: "10px 0px" }}>
              <StyledListItem>
              The Department of Administration is exclusively operated by the batch in the current executive committee.
              </StyledListItem>
              <StyledListItem>
                The Department is assigned to plan the
                structure of every activity of the club and make the ultimate
                decisions.
              </StyledListItem>

              <StyledListItem>
                The Department monitors and indirectly controls all
                the activities of the club.
              </StyledListItem>

              <StyledListItem>
                This Department of Administration works as a bridge to establish
                connections among the other departments of NDMC and distribute
                tasks among all the other departments.
              </StyledListItem>
            </div>

            <Typography sx={{ mt: 3 }}>
              This Department assists and co-operates with the smooth
              functioning of the whole club. The members of this department bear
              the most responsibilities. It is the true architect of the
              framework that powers the club’s triumph.
            </Typography>

            {/* <div style={{ margin: "10px 0px" }}>
              <StyledListItem>
                The Department of Administration is assigned to plan the
                structure of every activity of the club and make the ultimate
                decisions
              </StyledListItem>

              <StyledListItem>
                The Dept. of Administration monitors and indirectly controls all
                the activities of the club
              </StyledListItem>

              <StyledListItem>
                The Dept. of Administration works as a bridge to establish
                connections among the other departments of NDMC and distribute
                tasks among all the other departments
              </StyledListItem>
            </div> */}

          </div>
        </StyledCard>
      </StyledGrid>
      {/* Academics */}
      <StyledGrid item xs={12} sm={4.5} md={3.5} lg={2.5} data-aos="zoom-out">
        <StyledCard
          icon={"hourglass"}
          icontype={"line"}
          title={"Academics"}
          shortDesc={
            "The Academics Department of the Notre Dame College Math Club is a vibrant core where mathematical talent is nurtured into competitive brilliance. This is where the thrill of competition meets the joy of discovery."
          }
        >
          <div style={{ padding: "15px 10px" }}>
            <Typography sx={{ mb: 2 }}>
              The Academics Department of the Notre Dame College Math Club is a
              vibrant core where mathematical talent is nurtured into
              competitive brilliance. This is where the thrill of competition
              meets the joy of discovery.
            </Typography>

            <div style={{ margin: "10px 0px" }}>
              <StyledListItem>
                They organize challenging questions for the Intra-Math
                Olympiad and Math Fest, testing not just knowledge, but critical
                thinking and problem-solving skills.
              </StyledListItem>
              <StyledListItem>
              Their sessions are
                explorations into the depths of mathematics beyond the regular
                curriculum.
              </StyledListItem>
              <StyledListItem>
              They brainstorm unique segment ideas, ensuring diversity in club
              activities. They also ensure fairness in competitions by
              meticulously checking answer scripts.
              </StyledListItem>
            </div>
            <Typography sx={{ mt: 2, mb: 1 }}>
              Assembling Academic Teams: Recognizing potential in each member,
              they assemble elite Olympiad teams - ‘Team π’, ‘Team e’, ‘Team φ’, and ‘Team Ω’
              - that represent the club at various national and international competitions including IMO, IPhO, APMO, APhO, IChO, ICO, IAIO, IOI, IRO etc.
            </Typography>

            <Typography sx={{ mt: 2, mb: 1 }}>
              The department is a testament to the club’s commitment to
              excellence in mathematics, adding to its glorious narrative with
              each victory.
            </Typography>
          </div>
        </StyledCard>
      </StyledGrid>

      {/* Publication */}

      <StyledGrid item xs={12} sm={4.5} md={3.5} lg={2.5} data-aos="zoom-out">
        <StyledCard
          icon={"book-open"}
          icontype={"line"}
          title={"Publication"}
          shortDesc={
            "NDMC is formed with different departments and the Publication Department is one of them.The works of the Publication Department are mainly separated into online and offline sectors"
          }
        >
          <div style={{ padding: "15px 10px" }}>
            <Typography sx={{ mb: 3 }}>
              NDMC is formed with different departments and the Publication
              Department is one of them. The works of the Publication Department
              are mainly separated into online and offline sectors.
            </Typography>

            <Typography variant="h6">Publications:</Typography>
            <div style={{ margin: "10px 0px" }}>
              <StyledListItem>
                <b>The Plane: </b>'The Plane' is the wall magazine of NDMC. It
                displays theoretical explanations, shows biographies of
                remarkable mathematicians and presents exceptional mathematical
                content.
              </StyledListItem>

              <StyledListItem>
                <b>The Function: </b>'The Function' is an annually published
                magazine. It contains mathematical writings from students,
                teachers, and honorable personalities.
              </StyledListItem>
              <StyledListItem>
                <b>The Number: </b>'The Number' is a annual magazine fully
                written in hand. It illustrates the articles of the students
                where they share their mathematical knowledge. It helps bring
                out their latent talent by portraying their creativity.
              </StyledListItem>
            </div>

            <Typography variant="h6">Online Sectors:</Typography>
            <div style={{ margin: "10px 0px" }}>
              <StyledListItem>
                <b>Facebook Page: </b>NDMC posts numerous mathematical writings
                on its official Facebook page called 'Notre Dame Math Club'. The
                posts mainly include articles written on amazing mathematical
                concepts and creative writings on various significant days.
                Moreover, the page provides updates about all types of club
                activities.
              </StyledListItem>
            </div>
          </div>
        </StyledCard>
      </StyledGrid>

      {/* Public Relation */}
      <StyledGrid item xs={12} sm={4.5} md={3.5} lg={2.5} data-aos="zoom-out">
        <StyledCard
          icon={"links"}
          icontype={"line"}
          title={"Public Relation"}
          shortDesc={
            "The Public Relations Department of the NDMC is a dynamic and dedicated team of negotiators. They work tirelessly to foster collaborations, secure sponsorships, and enhance our presence in the mathematical arena."
          }
        >
          <div style={{ padding: "15px 10px" }}>
            <Typography sx={{ mb: 3 }}>
              The Public Relations Department of the NDMC is a dynamic and dedicated
              team of negotiators. They work tirelessly to foster
              collaborations, secure sponsorships, and enhance our presence in
              the mathematical arena.
            </Typography>

            <div style={{ margin: "10px 0px" }}>
              <StyledListItem>
                The Department of Public Relations is commited to procure funds for
                our events and festivals through sponsorships.
              </StyledListItem>

              <StyledListItem>
                The Department dictates partnership goals and
                requirements for our festivals.
              </StyledListItem>
            </div>

            <Typography sx={{ mt: 3 }}>
              Their efforts not only contribute to the club’s financial
              sustainability but also provide a platform for personal and
              professional growth for its members.
            </Typography>
          </div>
        </StyledCard>
      </StyledGrid>

      {/* Outreach */}
      <StyledGrid item xs={12} sm={4.5} md={3.5} lg={2.5} data-aos="zoom-out">
        <StyledCard
          icon={"tent"}
          icontype={"line"}
          title={"Outreach"}
          shortDesc={
            "The Department of Outreach hosts some of the most hardworking members of NDMC. The carry the club on their shoulders"
          }
        >
          <div style={{ padding: "15px 10px" }}>
            <Typography sx={{ mb: 3 }}>
              The Department of Outreach hosts some of the most hardworking members
              of NDMC. The carry the club on their shoulders.
            </Typography>

            <div style={{ margin: "10px 0px" }}>
              <StyledListItem>
                The Outreach Department maintains connection with its sponsors, and
                different educational institutions.
              </StyledListItem>

              <StyledListItem>
                The Outreach Department commutes and brings all the publication and
                promotional materials.
              </StyledListItem>

              <StyledListItem>
                The Outreach Department volunteers in all our events and festivals,
                sets registration booths across nationwide institutions.
              </StyledListItem>
            </div>

            <Typography sx={{ mt: 3 }}>
              Of all the Department of NDMC this Department requires the least amount
              of experience. Most of the executives usually begin their journey
              from this Department
            </Typography>
          </div>
        </StyledCard>
      </StyledGrid>

             

       {/* Graphics and IT */}

       <StyledGrid item xs={12} sm={4.5} md={3.5} lg={2.5} data-aos="zoom-out">
        <StyledCard
          icon={"pencil-ruler-2"}
          icontype={"line"}
          title={"Graphics and IT"} 
          shortDesc={
            "The Department of Graphics and IT is a core part of NDMC. It processes all digital information of the club and brings our ideas, activities, and brand to life"
          }
        >
          <div style={{ padding: "15px 10px" }}>
            <Typography sx={{ mb: 3 }}>
            The Department of Graphics and IT is a core part of NDMC. It processes all digital information of the club and brings our ideas, activities, and brand to life. The departments consists of two teams:
            </Typography>

            <Typography variant="h6">IT Team:</Typography>
            <div style={{ margin: "10px 0px" }}>
              <StyledListItem>
              The IT team is in charge of crafting and maintaining a dynamic website that is easy to navigate and engaging for the users. During various online contests, it manages the contest portals to ensure a smooth and unquestioned contest experience.
              </StyledListItem>
              <StyledListItem>
              The team is responsible for entry, security, accessibility, and efficiency of its members and event participants' data.
              </StyledListItem>
              <StyledListItem>
              The IT team automates, sorts, and stores all type of files and application regarding NDMC.
              </StyledListItem>
            </div>

            <Typography variant="h6">Graphics Team:</Typography>
            <div style={{ margin: "10px 0px" }}>
              <StyledListItem>
              The Graphics team collaborates to transform ideas into visually appealing
              stories for our weekly articles posted on NDMC’s official Facebook
              page. This
              team of talented designers, illustrators, and visual storytellers
              works together to create captivating content.
              </StyledListItem>
              <StyledListItem>
              The team takes the lead in brainstorming, editing, and
              designing the two editorials of NDMC, 'The Function' and 'The
              Plane'. Their creativity drives the ideas for our annual wall
              magazine and annual magazine.
              </StyledListItem>
              <StyledListItem>
              Every poster, banner, crest, and certificate for our workshops,
              sessions, and events is a work of craft by the graphics
              team. They play a crucial role in promoting events and
              making them visually appealing.
              </StyledListItem>
              <StyledListItem>
              The Graphics Department is more than just a department; it’s a
              vibrant hub where creativity meets innovation, producing impactful
              visuals that help our club run smoothly.
              </StyledListItem>
            </div>
            
          </div>
        </StyledCard>
      </StyledGrid>

      {/* Photography */}

      <StyledGrid item xs={12} sm={4.5} md={3.5} lg={2.5} data-aos="zoom-out">
        <StyledCard
          icon={"landscape"}
          icontype={"fill"}
          title={"Photography"}
          shortDesc={
            "NDMC organizes various mathematical arrangements throughout the year. The Photography team ensures that every thrilling moment of the events is immortalized in pixels and frames, creating a visual narrative that reflects the energy and excitement of the occasion. They capture the focus and determination that define these functions"
          }
        >
          <div style={{ padding: "15px 10px" }}>
            <Typography variant="body1">
              NDMC organizes various mathematical arrangements throughout the
              year. The Photography team ensures that every thrilling moment of
              the events is immortalized in pixels and frames, creating a visual
              narrative that reflects the energy and excitement of the occasion.
              They capture the focus and determination that define these
              functions.
            </Typography>

            <Typography sx={{ mt: 2, mb: 1 }}>
              NDMC arranges weekly sessions on different topics in mathematics.
              During these sessions, our photographers treasure the fervour of
              the students about mathematics by capturing exquisite moments. 
            </Typography>

            <Typography sx={{ mt: 2, mb: 1 }}>
              Many things in Mathematics are really beautiful if we can observe
              them in real life. We become more ardent about mathematics because
              of these visual representations. Our videography team works on
              various mathematical topics to make them more interesting. They
              try to explain a difficult topic in a very short amount of time by
              making a fascinating video of that topic by showing things
              practically. The department's members also assist by capturing aerial photographs and videos using drones.
            </Typography>
          </div>
        </StyledCard>
      </StyledGrid>

    </SectorSection>
  );
};

export default SectorsSection;
