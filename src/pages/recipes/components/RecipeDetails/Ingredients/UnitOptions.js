import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { styled } from "@mui/system";

const UnitOptions = ({ handleUnitChange, unit }) => {
  const measureOptions = [
    { name: "us", aria: "us units" },
    { name: "metric", aria: "metric units" },
  ];

  // Customized toggle button group for measure options
  const MeasureToggleBtGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
      border: "2px solid",
      borderColor: theme.palette.primary.main,
      borderRadius: "30px",
      padding: "4px 10px",
    },
  }));

  return (
    <MeasureToggleBtGroup
      value={unit}
      exclusive
      onChange={handleUnitChange}
      aria-label="unit options"
      color="primary"
      size="small"
    >
      {measureOptions.map((item) => (
        <ToggleButton
          key={item.name}
          value={item.name}
          aria-label={item.aria}
          sx={{ color: "text.primary" }}
        >
          {item.name}
        </ToggleButton>
      ))}
    </MeasureToggleBtGroup>
  );
};

export default UnitOptions;
