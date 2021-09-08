import { Button } from "@material-ui/core";

type buttonProps = {
  textOnButton: string;
  href?: string;
  marginRight?: boolean;
};

function GreyButton({ textOnButton, href, marginRight }: buttonProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      href={href}
      style={{
        marginRight: marginRight? "20px" : "",
        backgroundColor: "#282c34",
        width: "40%",
      }}
    >
      {textOnButton}
    </Button>
  );
}

export default GreyButton;
