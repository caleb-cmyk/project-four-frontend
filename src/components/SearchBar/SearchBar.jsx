import { TextField, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const SearchBar = () => {
  const handleSearch = () => {
    console.log("search");
  };

  const handleChange = () => {};

  return (
    <>
      <form autoComplete="off" onSubmit={handleSearch}>
        <Box
          sx={{ padding: "20px 0px 20px 0px" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            label="Where to next?"
            variant="outlined"
            type="text"
            autoComplete="off"
            id="location"
            // value={formData.location}
            name="location"
            onChange={handleChange}
          />
          <IconButton
            type="submit"
            sx={{ cursor: "pointer", padding: "0px 0px 0px 10px" }}
          >
            <SearchIcon
              fontSize="large"
              sx={{ cursor: "pointer", padding: "0px 0px 0px 10px" }}
            />
          </IconButton>
        </Box>
      </form>
    </>
  );
};

export default SearchBar;
