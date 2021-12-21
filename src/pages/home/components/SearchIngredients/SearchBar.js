import { SearchRounded } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { Box, styled } from "@mui/system";

const SearchBar = ({ handleChange, value, searchBarRef }) => {
  const SearchIgredientsInput = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#7FD7C3",
        borderWidth: "2px",
        borderRadius: "30px",
      },
      "&:hover fieldset": {
        borderColor: "#7FD7C3",
      },
      "&.Mui-focused fieldset": {
        borderWidth: "3px",
      },
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <SearchIgredientsInput
        ref={searchBarRef}
        autoFocus
        value={value}
        onChange={handleChange}
        id="ingredient-search"
        placeholder="e.g. tomato"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchRounded color="primary" sx={{ fontSize: 40 }} />
            </InputAdornment>
          ),
        }}
        sx={{
          minWidth: "80%",
          borderRadius: "30px",
          backgroundColor: "secondary.main",
        }}
      />
    </Box>
  );
};

export default SearchBar;
