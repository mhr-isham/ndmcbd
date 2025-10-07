import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

import usePageTitle from "../../hooks/usePageTitle";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { caProfile } from "../../store/atoms/caProfile";
import {
  DashBoardUserImage,
  DashBoardUserInfoPanel,
  DashboardUserPanel,
  StyledAccordion,
} from "./index.styles";
import { Section } from "../../components/styles/Page.style";
import Icon from "../../components/ui/Icon";
import { MagicButtonWhite, Text } from "../../components/styles/Elements.style";
import NdmcTable from "../../components/ui/ndmc-table";
import getLeaderboard from "../../api/leaderboard";
import { enqueueSnackbar } from "notistack";
import leaderboard from "../../store/atoms/leaderboard";
import { useNavigate } from "react-router-dom";
import LeaderBoardTable from "./leaderboardTable";
import SoloBulk from "../type-registration/soloBulk";

const Dashboard = () => {
  usePageTitle("CA Dashboard");
  const navigate = useNavigate();
  const [caProfileInfo, setCaProfileInfo] = useRecoilState(caProfile);
  const [leaderBoard, setLeaderboard] = useRecoilState(leaderboard);
  const [leaderBoardLoading, setLeaderBoardLoading] = useState(false);
  useEffect(() => {
    if (!caProfileInfo.isCa) {
      navigate("/nmf");
    }
    const leaderboard = () => {
      setTimeout(async () => {
        setLeaderBoardLoading(true);
        const response = await getLeaderboard();
        if (response.data.status === 1) {
          setLeaderboard(response.data.data);
        } else {
          enqueueSnackbar("Leader board not found", { variant: "error" });
        }
        setLeaderBoardLoading(false);
      }, 2000);
    };

    leaderboard();
  }, []);
  const handleLogout = () => {
    setCaProfileInfo({});
    sessionStorage.removeItem("caUser");
    navigate("/nmf");
  };
  const [accordionExpanded, setExpanded] = useState(true);
  return (
    <Section style={{ display: "block", margin: "auto" }}>
      {caProfileInfo?.isCa && (
        <Grid
          container
          columns={{ lg: 12, md: 12, xs: 12 }}
          gap=".5rem"
          justifyContent={"space-between"}
        >
          <Grid item lg={3} md={4} xs={12}>
            <DashBoardUserInfoPanel>
              <DashBoardUserImage src={caProfileInfo.image} />
              <Text design={{ size: "sm", weight: "bold" }} sx={{ mt: 3 }}>
                {caProfileInfo.name}
              </Text>
              <Text design={{ size: "xs", weight: "light" }} sx={{ mt: 1 }}>
                {caProfileInfo.email}
              </Text>
              <div style={{ width: "100%" }}>
                <Divider sx={{ marginTop: "40px" }}>Information</Divider>
              </div>
              <Table style={{ border: "none", marginTop: "20px" }}>
                <TableBody>
                  {/* Row 1: ID */}
                  <TableRow>
                    <TableCell style={{ border: "none" }}>CA ID</TableCell>
                    <TableCell style={{ border: "none", fontWeight: "540" }}>
                      {caProfileInfo.uid}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ border: "none" }}>
                      Institution
                    </TableCell>
                    <TableCell style={{ border: "none" }}>
                      {caProfileInfo.institution}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ border: "none" }}>Phone</TableCell>
                    <TableCell style={{ border: "none" }}>
                      {caProfileInfo.phone}
                    </TableCell>
                  </TableRow>

                  {/* Row 2: Total Registration */}
                  <TableRow>
                    <TableCell style={{ border: "none" }}>
                      Total Registration
                    </TableCell>
                    <TableCell style={{ border: "none" }}>
                      {caProfileInfo.total_solo}
                    </TableCell>
                  </TableRow>

                  {/* Row 3: Points */}
                  <TableRow>
                    <TableCell style={{ border: "none" }}>Points</TableCell>
                    <TableCell style={{ border: "none" }}>
                      {caProfileInfo.points}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              {/* <MagicButtonWhite
                variant={"contained"}
                style={{ fontSize: "1rem", marginTop: "20px" }}
                onClick={handleLogout}
              >
                <i
                  className="ri-logout-circle-r-line"
                  style={{ fontSize: "1.2rem" }}
                />
                Logout
              </MagicButtonWhite> */}
            </DashBoardUserInfoPanel>
          </Grid>
          <DashboardUserPanel item lg={8.5} md={7.5} xs={12}>
            <StyledAccordion expanded={accordionExpanded}>
              <AccordionSummary
                expandIcon={<Icon icon="arrow-down-s" icontype="line" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={() => setExpanded(!accordionExpanded)}
              >
                <Typography>Solo Bulk Upload</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <SoloBulk caReference={caProfileInfo.uid} />
              </AccordionDetails>
            </StyledAccordion>
            <StyledAccordion expanded={!accordionExpanded}>
              <AccordionSummary
                expandIcon={<Icon icon="arrow-down-s" icontype="line" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={() => setExpanded(!accordionExpanded)}
              >
                <Typography>Leaderboard</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography variant="body2" color={"grey"} mb={1.6}>
                  Please Note, This ranking is not final yet; it's only based on
                  the total number of participants registered. In cases where
                  CAs have the same number of points, the leaderboard
                  prioritizes those who applied first. .
                </Typography>

                {/* {leaderBoardLoading === 0 && <CircularProgress />} */}
                {/* <CardBox> */}
                {leaderboard.length !== 0 && (
                  <LeaderBoardTable
                    rows={leaderBoard}
                    columns={[
                      "Rank",
                      "Reg no",
                      "Name and Institution",
                      "Total Points",
                      "Total Registered",
                    ]}
                  />
                )}
                {/* </CardBox> */}
              </AccordionDetails>
            </StyledAccordion>
          </DashboardUserPanel>
        </Grid>
      )}
    </Section>
  );
};

export default Dashboard;
