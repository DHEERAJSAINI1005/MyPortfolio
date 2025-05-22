import React from "react";
import Box from "@mui/material/Box";

const Logo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#539753",
        borderRadius: "50%",
        width: "70px",
        height: "70px",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          background: "#3e7b3e",
          transform: "scale(1.1)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <b style={{ fontSize: "25px", fontWeight: "bold", color: "#fff" }}>
        Sohi
      </b>
    </Box>
  );
};

export default Logo;
