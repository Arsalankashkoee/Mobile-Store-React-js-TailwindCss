import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IoMenuSharp } from "react-icons/io5";
import { HiOutlineX } from "react-icons/hi";
import logoArsalan from "../Images/LOGO2.png";
import { AiFillHome } from "react-icons/ai";
import { ImBlogger } from "react-icons/im";
import { MdOutlineHelp } from "react-icons/md";
import { Link } from "react-router-dom";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <section className="border-b border-b-gray-300 pb-5 mt-3">
        <div className="container flex items-center justify-between">
          {/* close menu */}
          <div className="fixed top-10 left-48 cursor-pointer">
            <HiOutlineX className="text-violet-700 w-7 h-7" />
          </div>
          {/* logo site */}
          <div className="mt-4">
            <img
              src={logoArsalan}
              alt="logo site"
              className="w-14 h-14 rounded-full border border-gray-300"
            />
          </div>
        </div>
      </section>

      <List>
        {["Home", "Blogs", "About Us"].map((text, index) => (
          <ListItem key={text} disablePadding className="">
            <Link
              to={{
                pathname:
                  text === "Home"
                    ? "/"
                    : text === "Blogs"
                    ? "/blogs"
                    : text === "About Us"
                    ? "/aboutUs"
                    : null,
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? (
                    <AiFillHome className="text-violet-700" />
                  ) : null}
                  {index === 1 ? (
                    <ImBlogger className="text-violet-700" />
                  ) : null}
                  {index === 2 ? (
                    <MdOutlineHelp className="text-violet-700 w-5 h-5" />
                  ) : null}
                </ListItemIcon>

                <ListItemText primary={text} className="" />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            className="block md:hidden text-violet-700"
            onClick={toggleDrawer(anchor, true)}
          >
            <IoMenuSharp className="w-7 h-7 text-violet-700" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
