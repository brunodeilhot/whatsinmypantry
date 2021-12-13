import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { styled } from "@mui/system";

const UnitOptions = ({ handleUnitChange, unit }) => {
  const items = [
    { name: "us", aria: "us units" },
    { name: "metric", aria: "metric units" },
  ];

  const CustomToggleBtGroup = styled(ToggleButtonGroup)({
    "& .MuiToggleButtonGroup-grouped": {
      border: "2px solid #7FD7C3",
      borderRadius: "30px",
      padding: "4px 10px",
    },
  });

  return (
    <CustomToggleBtGroup
      value={unit}
      exclusive
      onChange={handleUnitChange}
      aria-label="unit options"
      color="primary"
      size="small"
    >
      {items.map((item) => (
        <ToggleButton
          key={item.name}
          value={item.name}
          aria-label={item.aria}
          sx={{ color: "text.primary" }}
        >
          {item.name}
        </ToggleButton>
      ))}
    </CustomToggleBtGroup>
  );
};

export default UnitOptions;
