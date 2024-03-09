import React, { Children, ReactNode, useState } from "react";
import Header from "./Header";
import { Paper } from "@mui/material";
export interface HrsFormProps {
  children: ReactNode;
}

const HrsForm = (props: HrsFormProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    console.log("mobileOpen", mobileOpen);
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Paper style={{ height: '100vh', width: '100%', overflow: 'auto' }}>
      <Header
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        /><br/><br/><br/><br/>
        <div style={{marginLeft:mobileOpen ?'250px':'100px'}}>
        {props.children}
        </div>
      </Paper>
    </>
  );
};

export default HrsForm;
