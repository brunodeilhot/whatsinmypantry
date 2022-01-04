import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";
import { Switch } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const ThemeButton = () => {
  const dispatch = useDispatch();

  // If the user does not toggle a theme mode the app will read
  // the user's default system or brower setting, once the user
  // changes the theme the new setting will be saved on local storage
  const preferedDarkMode = useSelector((state) => state.preferedDarkMode);
  const darkMode = useSelector((state) => state.darkMode);

  const toggleMode = () => {
    dispatch({
      type: "THEME_MODE",
      payload: darkMode === null ? !preferedDarkMode : !darkMode,
    });
  };

  const iconOptions = {
    fontSize: 30,
    padding: 0.5,
    marginTop: -0.7,
    backgroundColor: "secondary.main",
    borderRadius: "50%",
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
  };

  return (
    <Switch
      checked={darkMode === null ? preferedDarkMode : darkMode}
      onChange={toggleMode}
      aria-label="theme mode"
      color="secondary"
      checkedIcon={<DarkModeRounded color="primary" sx={iconOptions} />}
      icon={<LightModeRounded color="primary" sx={iconOptions} />}
      sx={{ paddingBottom: 1.5, paddingTop: 1.5, width: 70 }}
    />
  );
};

export default ThemeButton;
