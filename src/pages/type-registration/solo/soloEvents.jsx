import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { Text } from "../../../components/styles/Elements.style";
import { SEGMENT_DATA } from "./soloEventsData";
import CheckBoxElement from "../../../components/shared/checkbox-element";
import { useTheme } from "@emotion/react";

const SoloEvents = ({
  studentCategory,
  selectedSegments,
  setSegments,
  projectDisplayOptions,
  setProjectDisplayOptions,
}) => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up("md"));
  const handleSegmentSelect = (e, id) => {
    if (e.target.checked) {
      if (id === "ts1" || id === "ts2" || id === "ts3" || id === "ts4") {
        setProjectDisplayOptions(id);
      }
      setSegments((prev) => [...prev, id]);
    } else {
      if (id === "ts1" || id === "ts2" || id === "ts3" || id === "ts4") {
        setProjectDisplayOptions("");
      }
      setSegments((prev) => prev.filter((eventId) => eventId !== id));
    }
  };

  return (
    <Box sx={{ width: "100%", marginTop: "100px" }}>
      <Typography
        sx={{
          mb: 7,
          textAlign: "center",
          fontSize: `${match ? "1.5rem" : "1.1rem"}`,
          color: `${theme.palette.primary.main}`,
        }}
      >
        Feel free to choose any events from the provided page.{" "}
      </Typography>
      <div>
        <Grid container sx={{ justifyContent: "space-between" }}>
          <Grid item lg={5} xs={12}>
            <Text
              design={{ size: "sm", weight: "xBold" }}
              sx={{ textAlign: "center" }}
            >
              Solo Segment
            </Text>
            <div
              style={{
                margin: "20px auto",
                // width: "fit-content",
                padding: "0px 20px",
              }}
            >
              {SEGMENT_DATA.soloEvents.map((event, index) => {
                if (event.allowedCategories.indexOf(studentCategory) > -1) {
                  return (
                    <CheckBoxElement
                      id={event.id}
                      key={index}
                      checked={selectedSegments.indexOf(event.id) > -1}
                      handleChecked={handleSegmentSelect}
                    >
                      {event.name}
                    </CheckBoxElement>
                  );
                }
              })}
            </div>
          </Grid>

          <Grid item lg={6} xs={12}>
            <Text
              design={{ size: "sm", weight: "xBold" }}
              style={{ textAlign: "center" }}
            >
              Team Events
            </Text>
            <Text design={{ size: "xs" }} sx={{ mb: 1, mt: 2 }}>
              <span style={{ fontWeight: "bold" }}>N.B: </span>
              Other members of your team must also register independently to
              participate in the team segments.
            </Text>
            <div
              style={{
                margin: "20px auto",
                padding: "0px 20px",
              }}
            >
              <div
                style={{
                  height: "auto",
                  margin: "10px 0px",
                  border: ".5px dashed #786fef",
                  padding: "15px",
                  borderRadius: "10px",
                }}
              >
                <Text design={{ size: "xs", weight: "xBold" }}>
                  Project Display
                </Text>

                {SEGMENT_DATA.teamEvents.projectDisplay.map((event, index) => {
                  if (event.allowedCategories.indexOf(studentCategory) > -1) {
                    return (
                      <CheckBoxElement
                        id={event.id}
                        key={index}
                        handleChecked={handleSegmentSelect}
                        checked={selectedSegments.indexOf(event.id) > -1}
                        disabled={
                          projectDisplayOptions
                            ? projectDisplayOptions === event.id
                              ? false
                              : true
                            : false
                        }
                      >
                        {event.name}
                      </CheckBoxElement>
                    );
                  }
                  {
                  }
                })}
              </div>
              {SEGMENT_DATA.teamEvents.others.map((event, index) => {
                if (event.allowedCategories.indexOf(studentCategory) > -1) {
                  return (
                    <CheckBoxElement
                      id={event.id}
                      checked={selectedSegments.indexOf(event.id) > -1}
                      key={index}
                      handleChecked={handleSegmentSelect}
                    >
                      {event.name}
                    </CheckBoxElement>
                  );
                }
                {
                }
              })}
            </div>
          </Grid>
        </Grid>
        {/* <Grid container justifyContent={"center"}>
          <Grid item lg={8} xs={12} sx={{ mt: 4 }}>
            <Text
              design={{ size: "sm", weight: "xBold" }}
              style={{ textAlign: "center" }}
            >
              Submission based Events
            </Text>
            <div
              style={{
                margin: "20px auto",
                // width: "fit-content",
                padding: "0px 20px",
              }}
            >
              {SEGMENT_DATA.submissionEvents.map((event, index) => {
                if (event.allowedCategories.indexOf(studentCategory) > -1) {
                  return (
                    <CheckBoxElement
                      id={event.id}
                      checked={selectedSegments.indexOf(event.id) > -1}
                      key={index}
                      handleChecked={handleSegmentSelect}
                    >
                      {event.name}
                    </CheckBoxElement>
                  );
                }
                {
                }
              })}
            </div>
          </Grid>
        </Grid> */}
      </div>
    </Box>
  );
};

export default SoloEvents;
