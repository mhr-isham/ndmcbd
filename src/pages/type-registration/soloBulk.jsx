import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import NdmcModal from "../../components/ui/ndmc-modal";
import papa from "papaparse";
import NdmcTable from "../../components/ui/ndmc-table";
import { CardBox } from "../fest-registration/index.styles";
import { SoloUploadBox } from "./index.styles";
import { MagicButton, Text } from "../../components/styles/Elements.style";
import { SoloBulkRegister } from "../../api/festRegistration";
import { enqueueSnackbar } from "notistack";
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import Loader from "../../components/loader/Loader";

const validate = (values) => {
  const errors = {};
  if (!values.ca) {
    errors.ca = "CA reference is required";
  }
  return errors;
};
const SoloBulk = ({ caReference }) => {
  const theme = useTheme();
  const [showModal, setModal] = useState(false);
  const [responseModal, setResponseModal] = useState(false);
  const [responses, setResponses] = useState("");
  const [userData, setUserData] = useState([]);
  const [data, setData] = useState({ bulk: true });
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((acceptedFile) => {
        if (acceptedFile.type === "text/csv") {
          setLoading(true);
          papa.parse(acceptedFile, {
            header: true,
            skipEmptyLines: true,
            complete: (result) => {
              const filteredData = result.data.filter(
                (row) => row.name.trim() !== ""
              );

              // Check if the "segments" field exists in the data
              const hasSegments = filteredData[0]?.segments !== undefined;

              // Add segments based on conditions
              const segmentValues = [
                "Math Olympiad (Find)",
                "Math Olympiad (Proof)",
                "Speed Math and Math Counts",
                "Human Calculator",
                "Crack the code",
                "Geometric Construction",
                "Function Graphing",
                "Numeralgia",
                "CombiConundrum",
                "Calculus Mania",
                "Speed Cubing",
                "Crossword Puzzle",
                "Sudoku",
                "Math History Quiz",
                "IQ Olympiad",
                "Math Project",
                "Mechanical Project",
                "IT & Statistical Project",
                "Wall Magazine",
                "Scrapbook",
                "Multimedia Presentation",
                "Math Relay",
              ];

              const updatedData = filteredData.map((row) => {
                if (!hasSegments) {
                  // Add the "segments" field to each row
                  row.segments = "";
                }

                // Populate the "segments" field based on conditions
                const selectedSegments = segmentValues.filter(
                  (segment) => row[segment.trim()] === "TRUE"
                );
                row.segments = selectedSegments.join(", ");

                return row;
              });

              setModal(true);
              setData({
                data: updatedData.map((row) => ({
                  name: row.name || "",
                  email: row.email || "",
                  institution: row.institution || "",
                  class: row.class || "",
                  phone: row.phone || "",
                  gender: row.gender || "",
                  segments: row.segments || "",
                })),
              });

              setLoading(false);
            },
          });
        } else {
          enqueueSnackbar("You must upload a CSV file", { variant: "error" });
        }
      });
    },
    [enqueueSnackbar, setLoading, setModal, setData]
  );

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const submitForm = async () => {
    try {
      setLoading(true);
      const { data: responseData } = await SoloBulkRegister({
        bulk: true,
        ca: caReference,
        ...data,
      });
      if (responseData.status === 1) {
        setModal(false);
        setResponseModal(true);
        setResponses(responseData.responses);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setResponseModal(false);
  };

  return (
    <div>
      <CardBox>
        <div style={{ padding: "10px 10px 50px 10px" }}>
          <Text design={{ size: "lsm", weight: "bold" }} sx={{ mb: 2 }}>
            Instructions
          </Text>

          <ul style={{ listStyle: "none" }}>
            <li>
              <Text design={{ size: "xs", weight: "bold" }} sx={{ mb: 2 }}>
                1. Click on "Preview Demo File" and make a copy in Google
                Sheets.
              </Text>
            </li>
            <li>
              <Text design={{ size: "xs", weight: "bold" }} sx={{ mb: 2 }}>
                2. Edit the spreadsheet with relevant data and mark the segments
                based on categories.
              </Text>
            </li>
            <li>
              <Text design={{ size: "xs", weight: "bold" }} sx={{ mb: 2 }}>
                3. Download you edited CSV file by navigating to File {">"}{" "}
                Download {">"} CSV.
              </Text>
            </li>
            <li>
              <Text design={{ size: "xs", weight: "bold" }} sx={{ mb: 2 }}>
                4. Upload the file and review its contents before final
                submission.
              </Text>
            </li>
            <Text design={{ size: "xs" }} sx={{ mb: 2 }}>
              <strong>Important:</strong> Be mindful when selecting segments.
              Choosing incorrect segments for specific categories could lead to
              a deduction of points on your leaderboard.
            </Text>
          </ul>

          <MagicButton
            style={{ padding: "10px 15px" }}
            type="submit"
            variant={"contained"}
            onClick={() =>
              window.open(
                "https://docs.google.com/spreadsheets/d/1gt81-KQGguZNOx-sIO7i8aK17H641B_M4vTtJWd1X9o/edit?usp=sharing",
                "_blank"
              )
            }
          >
            Preview Demo File
          </MagicButton>
        </div>
        <div
          {...getRootProps({ className: "dropzone disabled" })}
          style={{ width: "100%" }}
        >
          <input {...getInputProps()} />
          <SoloUploadBox>
            <Text
              design={{ size: "sm", weight: "bold" }}
              style={{ textAlign: "center" }}
            >
              Drop your file here, or browse
            </Text>
          </SoloUploadBox>
        </div>
      </CardBox>
      {showModal && (
        <NdmcModal
          open={showModal}
          handleSubmit={submitForm}
          handleClose={() => setModal(false)}
          actionTitle="Submit"
          modalTitle="Uploaded Data"
          submit={true}
          maxWidth={"lg"}
        >
          <NdmcTable
            rows={data.data}
            columns={[
              "Name",
              "Email",
              "Class",
              "Institution",
              "Phone",
              "Gender",
              "Segments",
            ]}
          />
        </NdmcModal>
      )}
      {responseModal && (
        <NdmcModal
          open={responseModal}
          handleClose={handleClose}
          maxWidth={"lg"}
        >
          <List dense={true}>
            {responses.map((response, index) => {
              return (
                <ListItem key={index}>
                  <ListItemAvatar>
                    {response.status === 1 ? (
                      <Avatar
                        sx={{
                          height: "25px",
                          width: "25px",
                          background:
                            theme.palette.mode === "dark"
                              ? "#008000"
                              : "#008000",
                        }}
                      >
                        <i
                          className="ri-check-line"
                          style={{ fontSize: "15px", color: "#ffffff" }}
                        ></i>
                      </Avatar>
                    ) : (
                      <Avatar
                        sx={{
                          height: "25px",
                          width: "25px",
                          background:
                            theme.palette.mode === "dark" ? "red" : "red",
                        }}
                      >
                        <i
                          className="ri-close-line"
                          style={{ fontSize: "15px", color: "#ffffff" }}
                        ></i>
                      </Avatar>
                    )}
                  </ListItemAvatar>
                  <ListItemText primary={response.message} />
                </ListItem>
              );
            })}
          </List>
        </NdmcModal>
      )}
      {loading && <Loader />}
    </div>
  );
};

export default SoloBulk;
