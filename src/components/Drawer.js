import React, { useState } from "react";
import { Drawer, List, ListItemIcon, ListItemButton } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Link } from "react-router-dom";

const Drawercomp = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClick={() => setOpenDrawer(false)}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {props.pages.map((page, index) => (
            <ListItemButton component={Link} to={page.link} key={index}>
              <ListItemIcon>{page.category}</ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ margin: "auto", color: "#FFF" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuBookIcon sx={{ fontSize: "2.8rem" }} />
      </IconButton>
    </>
  );
};

export default Drawercomp;
