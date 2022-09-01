import React from "react";
import Pagination from "@mui/material/Pagination";
import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
      fontSize: "2rem",
      fontWeight: "600",
    },
    "& .MuiPaginationItem-root.Mui-selected": {
      backgroundColor: "#586070",
    },
  },
}));

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
  typography: {
    fontSize: "12rem",
  },
});

export default function CustomPagination({ setPage, numOfPages = 10 }) {
  const classes = useStyles();
  // Scroll to top when page changes
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          className={classes.ul}
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
}
