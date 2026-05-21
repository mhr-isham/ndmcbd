import ProfileCard from "../../components/ui/ProfileCard";
import executives from "../../static-data/formerExecutives.json";
import { Grid, Box, alpha, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CenterGrid } from "../../components/styles/Elements.style";
import usePageTitle from "../../hooks/usePageTitle";
import { useState } from "react";

const TimelineContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  justifyContent: 'center',
  padding: '20px',
  borderRadius: '24px',
  background: theme.palette.mode === "dark"
    ? alpha(theme.palette.background.paper, 0.05)
    : alpha(theme.palette.background.paper, 0.5),
  backdropFilter: 'blur(20px)',
  border: `1px solid ${theme.palette.mode === "dark" ? alpha('#fff', 0.1) : alpha('#000', 0.05)}`,
  boxShadow: theme.palette.mode === "dark"
    ? '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
    : '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
  marginBottom: '40px',
  [theme.breakpoints.down('sm')]: {
    padding: '12px',
    gap: '8px',
    borderRadius: '16px',
    marginBottom: '24px',
  }
}));

const YearButton = styled('button')(({ theme, selected }) => ({
  display: 'block',
  position: 'relative',
  background: selected 
    ? theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)'
    : theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.0257)' : 'rgba(255, 255, 255, 0.3)',
  borderRadius: '10px',
  boxShadow: selected ? `0 0 15px ${alpha(theme.palette.primary.main, 0.5)}` : '0 4px 30px rgba(0, 0, 0, 0.1)',
  border: selected ? `1px solid ${theme.palette.primary.main}` : `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
  textAlign: 'center',
  width: '180px',
  padding: '15px 20px',
  fontWeight: 900,
  fontSize: '1.3rem',
  color: theme.palette.text.primary,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  fontFamily: "'Outfit', system-ui, sans-serif",
  '&:hover': {
    background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.5)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '130px',
    padding: '10px 15px',
    fontSize: '1rem',
  }
}));

const FormerExecutives = () => {
  usePageTitle("Former Executives");
  const [selectedSessionIndex, setSelectedSessionIndex] = useState(0);
  const currentExecutiveObject = executives[selectedSessionIndex];

  return (
    <Box sx={{ width: '100%', mt: 4, px: { xs: 1, sm: 2 } }}>
      <TimelineContainer>
        {executives.map((executiveObject, index) => {
          const yearStr = `${parseInt(executiveObject.session)+1}-${parseInt(executiveObject.session)}`;
          return (
            <YearButton
              key={index}
              selected={selectedSessionIndex === index}
              onClick={() => setSelectedSessionIndex(index)}
            >
              {yearStr}
            </YearButton>
          );
        })}
      </TimelineContainer>

      {currentExecutiveObject && (
        <CenterGrid container gap={"1.5rem"}>
          {currentExecutiveObject.executives.map((data, ind) => (
            <Grid item key={ind}>
              <ProfileCard
                img={data.imgUrl}
                name={data.name}
                post={
                  data.department
                    ? `${data.post}, Dept. of ${data.department}`
                    : `${data.post}`
                }
                fb={data.facebook}
              />
            </Grid>
          ))}
        </CenterGrid>
      )}
    </Box>
  );
};

export default FormerExecutives;
