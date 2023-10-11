import { Link } from "react-router-dom";

import { Button } from "@mui/material";

function LinkButton({ url, sx, color, variant, type = "", children }) {
  return (
    <Link to={url}>
      <Button sx={sx} color={color} variant={variant} type={type}>
        {children}
      </Button>
    </Link>
  );
}

export default LinkButton;
