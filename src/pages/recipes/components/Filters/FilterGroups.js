import { Box, styled, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

const FilterGroups = ({ filterBy, handleFilterChange }) => {

    const ToggleBtGroup = styled(ToggleButtonGroup)({
        "&.MuiToggleButtonGroup-root": {
          display: "flex",
          flexFlow: "row wrap",
          marginTop: "15px",
          marginBottom: "20px",
        },
        "& .MuiToggleButtonGroup-grouped:not(:last-of-type)": {
          border: "1px solid",
          borderRadius: "30px",
        },
        "& .MuiToggleButtonGroup-grouped:not(:first-of-type)": {
          border: "1px solid",
          borderRadius: "30px",
        },
      });
    
      const ToggleBt = styled(ToggleButton)(({ theme }) => ({
        "&.MuiToggleButton-root": {
          padding: "0px 10px",
          marginRight: "5px",
          marginTop: "5px",
          "&:hover": {
            backgroundColor: "rgba(127, 215, 195, 0.1);",
          },
          "&.Mui-selected": {
            backgroundColor: `${theme.palette.primary.main}`,
            border: "1px solid transparent",
            "&:hover": {
              backgroundColor: "rgba(127, 215, 195, 0.8);",
            },
          },
        },
      }));

  return (
    <>
      {filterBy.map((type) => {
        return (
          <Box
            key={type.name}
            sx={{
              borderTop: "2px solid",
              borderColor: "primary.main",
              position: "relative",
            }}
          >
            <Typography
              variant="body2"
              component="h2"
              color="primary"
              pr={1}
              sx={{
                backgroundColor: "background.paper",
                position: "absolute",
                top: "-10px",
              }}
            >
              {type.name.toUpperCase()}
            </Typography>
            <ToggleBtGroup
              value={type.value}
              exclusive
              onChange={(e) => handleFilterChange(e, type.name)}
              color="secondary"
            >
              {type.filters.map((item) => (
                <ToggleBt
                  key={item}
                  value={item}
                  sx={{ color: "primary.main" }}
                >
                  {item}
                </ToggleBt>
              ))}
            </ToggleBtGroup>
          </Box>
        );
      })}
    </>
  );
};

export default FilterGroups;
