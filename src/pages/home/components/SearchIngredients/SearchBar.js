import { SearchRounded } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";

const SearchBar = ({ handleChange }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <TextField
        onChange={handleChange}
        id="ingredient-search"
        placeholder="e.g. tomato"
        autoFocus
        InputProps={{ startAdornment: <InputAdornment position="start"><SearchRounded color="primary" sx={{ fontSize: 40 }} /></InputAdornment>}}
        sx={{
          minWidth: "80%",
          borderRadius: '30px',
          backgroundColor: "secondary.main",
          '& .MuiOutlinedInput-root': { borderRadius: '30px', '& fieldset': { borderColor: 'primary.main', borderWidth: '2px'}, '& input:focus + fieldset': { borderWidth: '3px' }}
        }}
      ></TextField>
    </Box>
  );
};

export default SearchBar;
