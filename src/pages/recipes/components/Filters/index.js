import { FilterListOffRounded, FilterListRounded } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
  Typography,
} from "@mui/material";
import FilterGroups from "./FilterGroups";

const Filters = ({ handleFilterChange, mealType, diet }) => {

  const noFilters = mealType === undefined && diet === undefined ? true : false;

  const filterBy = [
    {
      name: "meal type",
      value: mealType,
      filters: [
        "main course",
        "breakfast",
        "soup",
        "salad",
        "dessert",
        "drink",
        "side dish",
      ],
    },
    {
      name: "dietary options",
      value: diet,
      filters: [
        "gluten free",
        "ketogenic",
        "vegetarian",
        "vegan",
        "pescetarian",
        "paleo",
      ],
    },
  ];

  const AccordionIcon = styled(AccordionSummary)(({ theme }) => {
    const filterColors = noFilters
      ? theme.palette.text.secondary
      : theme.palette.primary.main;
    return {
      "&.MuiAccordionSummary-root": {
        flexDirection: "row-reverse",
        marginTop: "10px",
        width: "fit-content",
      },
      "& .MuiAccordionSummary-content": {
        paddingLeft: "10px",
      },
      "& .MuiAccordionSummary-expandIconWrapper": {
        padding: "0px 10px",
        color: `${filterColors}`,
        border: `2px solid ${filterColors}`,
        borderRadius: "10px",
        "&.Mui-expanded": {
          transform: "none",
          color: `${theme.palette.secondary.main}`,
          backgroundColor: `${filterColors}`,
        },
      },
    };
  });

  return (
    <Accordion square disableGutters sx={{ boxShadow: "none" }}>
      <AccordionIcon
        expandIcon={
          noFilters ? <FilterListOffRounded /> : <FilterListRounded />
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {noFilters ? (
          <Typography sx={{ color: "text.secondary" }}>
            no filtered results
          </Typography>
        ) : (
          <Typography color="primary">showing filtered results</Typography>
        )}
      </AccordionIcon>
      <AccordionDetails>
        <FilterGroups filterBy={filterBy} handleFilterChange={handleFilterChange} />
      </AccordionDetails>
    </Accordion>
  );
};

export default Filters;
