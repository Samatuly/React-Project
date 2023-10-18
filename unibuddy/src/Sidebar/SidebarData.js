import React from "react";
import {Event, Group, Home, Input, LibraryAdd, Logout, Output, RestaurantMenu, Schedule, Settings, StarPurple500} from "@mui/icons-material";
import {Menu} from "@mui/material";

export const SidebarData = [
    {
        title:"Home",
        icon:<Home/>,
        link:"/home"
    },
    {
        title:"Schedule",
        icon:<Schedule/>,
        link:"/schedule"
    },
    {
        title:"Organizations",
        icon:<Group/>,
        link:"/organizations"
    },
    {
        title:"Library",
        icon:<LibraryAdd/>,
        link:"/library"
    },
    {
        title:"Events",
        icon:<Event/>,
        link:"/events"
    },
    {
        title:"Canteen",
        icon:<RestaurantMenu/>,
        link:"/canteen"
    },
    {
        title:"Ratings",
        icon:<StarPurple500/>,
        link:"/ratings"
    },
    {
        title:"Settings",
        icon:<Settings/>,
        link:"/settings"
    },
    {
        title:"Sign Out",
        icon:<Output/>,
        link:"/signout"
    },
]