import type { Application } from "./types";
import Gallery from "./gallery/Gallery";
import Projects from "./projects/Projects";
import Stories from "./stories/Stories";

export const applications: Record<string, Application> = {

    gallery:{
        id:"gallery",
        name:"Gallery",
        icon:"🖼️",
    desktop:true,
    taskbar:true,

        defaultSize:{
            width:500,
            height:400
        },

        component:Gallery
    },


    projects:{
        id:"projects",
        name:"Projects",
        icon:"📁",
        desktop:true,
        taskbar:true,

        defaultSize:{
            width:700,
            height:500
        },

        component:Projects
    },


    stories:{
        id:"stories",
        name:"Stories",
        icon:"📖",
        desktop:true,
        taskbar:true,

        defaultSize:{
            width:600,
            height:500
        },

        component:Stories
    }

};