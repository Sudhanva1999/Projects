import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import SideDrawer from "./SideDrawer"

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [atTheTop, setAtTheTop] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])

    const toggleDrawer = (value) => {
        setDrawerOpen(value);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setAtTheTop(false);
        } else {
            setAtTheTop(true);
        }
    }

    return (
        <AppBar
            position="fixed"
            style={{
                backgroundColor: atTheTop ? "black" : "transparent",
                boxShadow: "none",
                padding: "10px 0px"
            }}
        >
            <Toolbar>
                <div className="header_logo">
                    <div className="font_righteous header_logo_venue">Comic Con 2023</div>
                    <div className="header_logo_title">Greatest Anime gathering</div>
                </div>

                <IconButton
                    aria-label="Menu"
                    color="inherit"
                    onClick={() => toggleDrawer(true)}
                >
                    <MenuIcon />

                </IconButton>

                <SideDrawer
                    open={drawerOpen}
                    onClose={(value) => toggleDrawer(value)}
                />

            </Toolbar>
        </AppBar>
    );
}

export default Header;
