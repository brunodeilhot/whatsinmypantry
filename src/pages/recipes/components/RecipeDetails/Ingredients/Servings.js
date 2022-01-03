import { AddRounded, RemoveRounded } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { styled } from "@mui/system";

const Servings = ({ serving, handleServing, addServing, removeServing }) => {
  // Customized input field
  const ServingsInput = styled(TextField)(({ theme }) => {
    const themeColor = theme.palette.primary.main;
    return {
      "& .MuiOutlinedInput-root": {
        width: "100px",
        "& input": {
          padding: "5px 0",
          textAlign: "center",
        },
        "& fieldset": {
          borderWidth: "2px",
          borderRadius: "30px",
          borderColor: themeColor,
        },
        "&:hover fieldset": {
          borderColor: themeColor,
        },
      },
      "& .MuiInputLabel-root": {
        color: themeColor,
      },
    };
  });

  const addBt = (
    <InputAdornment position="end">
      <IconButton
        id="add"
        aria-label="add serving"
        edge="end"
        sx={{ p: 0 }}
        onClick={addServing}
      >
        <AddRounded color="primary" />
      </IconButton>
    </InputAdornment>
  );

  const removeBt = (
    <InputAdornment position="start">
      <IconButton
        id="remove"
        aria-label="remove serving"
        edge="start"
        sx={{ p: 0 }}
        onClick={removeServing}
      >
        <RemoveRounded color="primary" />
      </IconButton>
    </InputAdornment>
  );

  return (
    <ServingsInput
      id="servings-input"
      label="Servings"
      color="primary"
      value={serving}
      onChange={handleServing}
      autoFocus
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{ startAdornment: removeBt, endAdornment: addBt }}
      inputProps={{ inputMode: "numeric" }}
    />
  );
};

export default Servings;
