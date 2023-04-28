import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsorisé
        </Typography>
        <Typography color={medium}>Créer une pub</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/pub.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Nom de la marque</Typography>
        <Typography color={medium}>siteweb.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Ceci est une description de la publicité.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;