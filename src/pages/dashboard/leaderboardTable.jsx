import * as React from "react";
import { styled } from "@mui/system";
import {
  TablePagination,
  tablePaginationClasses as classes,
} from "@mui/base/TablePagination";
import {
  Avatar,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Label from "../../components/ui/Label";

export default function TableCustomized({ rows, columns }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index} align="left">
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.rank === 1 && (
                  <Label text={`${row.rank}st`} variant={"primary"} filled />
                )}
                {row.rank === 2 && (
                  <Label text={`${row.rank}nd`} variant={"primary"} filled />
                )}
                {row.rank === 3 && (
                  <Label text={`${row.rank}rd`} variant={"primary"} filled />
                )}
                {row.rank == 1 || row.rank == 2 || row.rank == 3 ? (
                  ""
                ) : (
                  <Label text={`${row.rank}th`} variant={"primary"} filled />
                )}
              </TableCell>
              <TableCell align="left">
                <Label text={row.uid} variant={"aesthetic"} filled={true} />
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  textTransform: "capitalize",
                }}
              >
                <Stack direction="row" alignItems="center" gap={0.1}>
                  <Avatar
                    alt={row.name}
                    src={row.image}
                    sx={{ marginRight: 2 }}
                  />
                  <Stack gap={0.1} sx={{ justifyContent: "center" }}>
                    <Typography variant="subtitle2" noWrap>
                      {row.name}
                    </Typography>
                    <Typography
                      noWrap
                      variant="body2"
                      sx={{ color: "text.disabled", cursor: "pointer" }}
                    >
                      {row.institution.length > 30
                        ? `${row.institution.slice(0, 30)}...`
                        : row.institution}
                    </Typography>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell align="center">
                <Label text={row.points} variant={"success"} filled={true} />
              </TableCell>
              <TableCell align="center">
                <Label
                  text={row.total_solo ? row.total_solo : 0}
                  variant={"secondary"}
                  filled={true}
                />
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 34 * emptyRows }}>
              <TableCell colSpan={3} aria-hidden />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <StyledTablePagination
              // Pagination Props
              rowsPerPageOptions={[5, 10, 20]}
              colSpan={5}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              // Slot Props
              slotProps={{
                select: {
                  "aria-label": "rows per page",
                },
                actions: {
                  showFirstButton: true,
                  showLastButton: true,
                },
              }}
              // Event Handlers
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

const blue = {
  50: "#F0F7FF",
  200: "#A5D8FF",
  400: "#3399FF",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Root = styled("div")(
  ({ theme }) => `
  table {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    text-align: left;
    padding: 6px;
  }

  th {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[50]};
  }
  `
);

const CustomTablePagination = styled(TablePagination)(
  ({ theme }) => `
 

  & .${classes.spacer} {
    display: none;
  }

  & .${classes.toolbar}  {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.select}{
    padding: 2px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    border-radius: 50px;
    background-color: ${theme.palette.mode === "dark" ? "#000" : "#fff"};
    color:${theme.palette.text.main}

    &:hover {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    }

    
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.actions} {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    border-radius: 50px;
    text-align: center;
  }

  & .${classes.actions} > button {
    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;

    &:hover {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    }

   
  }
  `
);

const StyledTablePagination = styled(CustomTablePagination)`
  .MuiTablePagination-actions span {
    color: ${(props) => props.theme.palette.text.main} !important;
  }

  .MuiTablePagination-select {
    color: ${(props) => props.theme.palette.text.main} !important;
  }

  .MuiTablePagination-toolbar {
    /* flex-direction: row; */
    ${(props) => props.theme.breakpoints.down("sm")} {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  padding: 5px 10px;
`;
