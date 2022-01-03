import { KeyboardArrowUpRounded } from "@mui/icons-material";
import { Fab, styled, useScrollTrigger, Zoom } from "@mui/material";

const ScrollTop = ({ mobileList }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  // Customized scroll to top button
  const ScrollTopFab = styled(Fab)(({ theme }) => ({
    "&.MuiFab-root": {
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  }));

  return (
    <Zoom in={trigger}>
      <ScrollTopFab
        onClick={handleClick}
        color="primary"
        aria-label="scroll back to top"
        sx={
          mobileList
            ? { position: "fixed", bottom: 70, right: 16 }
            : { position: "fixed", bottom: 16, right: 16 }
        }
      >
        <KeyboardArrowUpRounded color="secondary" sx={{ fontSize: 40 }} />
      </ScrollTopFab>
    </Zoom>
  );
};

export default ScrollTop;
