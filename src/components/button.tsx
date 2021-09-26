import React from "react";
import { Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

type ButtonProps = {
  textOnButton: string;
  href?: string;
  marginRight?: boolean;
  isRouter?: boolean;
};

export default function GreyButton({
  textOnButton,
  href,
  marginRight,
  isRouter,
}: ButtonProps) {
  return (
    <Button
      component={isRouter ? RouterLink : "button"}
      to={href ? href : ""}
      variant="contained"
      color="primary"
      style={{
        marginRight: marginRight ? "20px" : "",
        backgroundColor: "#282c34",
        width: "40%",
      }}
    >
      {textOnButton}
    </Button>
  );
}
