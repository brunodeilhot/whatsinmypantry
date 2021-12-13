import { AddRounded, RemoveRounded } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { styled } from "@mui/system";

const Servings = ({ serving, handleServing, addServing, removeServing }) => {
  const ServingsInput = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      width: "100px",
      "& input": {
        padding: "5px 0",
        textAlign: "center"
      },
      "& fieldset": {
        borderWidth: "2px",
        borderRadius: "30px",
        borderColor: "#7FD7C3",
      },
      "&:hover fieldset": {
        borderColor: "#7FD7C3",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#7FD7C3"
    }
  });

  const addBt = (
    <InputAdornment position="end">
      <IconButton id="add" aria-label="add serving" edge="end" sx={{ p: 0 }} onClick={addServing}>
        <AddRounded color="primary" />
      </IconButton>
    </InputAdornment>
  );

  const removeBt = (
    <InputAdornment position="start">
      <IconButton id="remove" aria-label="remove serving" edge="start"  sx={{ p: 0 }} onClick={removeServing}>
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
