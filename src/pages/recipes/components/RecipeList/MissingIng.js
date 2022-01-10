import { WarningAmberRounded } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";

const MissingIngWarning = ({ missingIng }) => {
  const toolTip = `You are missing ${missingIng} ingredient${
    missingIng === 1 ? "." : "s."
  }`;

  return (
    <Tooltip title={toolTip} enterDelay={300} leaveDelay={200} enterTouchDelay={0} > 
      <IconButton sx={{ alignSelf: "flex-end" }}>
        <WarningAmberRounded color="warning" />
      </IconButton>
    </Tooltip>
  );
};

export default MissingIngWarning;
