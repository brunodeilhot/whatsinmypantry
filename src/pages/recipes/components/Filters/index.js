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
  // const that determines wether there are active filters
  const noFilters = mealType === undefined && diet === undefined ? true : false;

  const filterBy = [
    {
      name: "meal type",
      activeFilter: mealType,
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
      activeFilter: diet,
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

  const FiltersAccordion = styled(Accordion)(({ theme }) => ({
    "&:before": {
      opacity: 0
    }
  }))

  // Customized Filters accordion Open/Close icon
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
    <FiltersAccordion
      square
      disableGutters
      sx={{ boxShadow: "none", backgroundColor: "background.default" }}
    >
      <AccordionIcon
        expandIcon={
          noFilters ? <FilterListOffRounded /> : <FilterListRounded />
        }
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
        <FilterGroups
          filterBy={filterBy}
          handleFilterChange={handleFilterChange}
        />
      </AccordionDetails>
    </FiltersAccordion>
  );
};

export default Filters;
