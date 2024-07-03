import { SearchRounded } from "@mui/icons-material";
import { Grid, InputAdornment, TextField } from "@mui/material";
import { styled } from "@mui/system";

const SearchBar = ({ handleChange, value, searchBarRef }) => {
  // Customized input field
  const SearchIgredientsInput = styled(TextField)(({ theme }) => {
    const themeColor = theme.palette.primary.main;
    return {
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: themeColor,
          borderWidth: "2px",
          borderRadius: "30px",
        },
        "&:hover fieldset": {
          borderColor: themeColor,
        },
        "&.Mui-focused fieldset": {
          borderWidth: "3px",
        },
      },
    };
  });

  return (
    <Grid container justifyContent="center">
      <SearchIgredientsInput
        ref={searchBarRef}
        autoFocus
        value={value}
        onChange={handleChange}
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
    </Grid>
  );
};

export default SearchBar;
