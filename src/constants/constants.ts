import { Image1, Image2, Image3, Image4, Image5, Image6 } from "../assets";
import { Content } from "../models/models";


export const data: Content[] = [
    {
        title: 'Photography',
        listItem: [
            {
                title: 'Drone Photography'
            },
            {
                title: 'Interiors'
            },
            {
                title: 'Exteriors / Architectural'
            }
        ],
        image: Image1,
        paragraf: 'Every photograph we produce finds the beauty in your property while serving as a profitable asset.'
    },
    {
        title: 'Virtual Staging',
        listItem: [
            {
                title: 'Matterport'
            },
            {
                title: 'Video Walkthroughs'
            }
        ],
        image: Image2,
        paragraf: 'Give your audience the ability to explore your property without requiring in-person travel.'
    },
    {
        title: 'Virtual Staging',
        listItem: [],
        image: Image3,
        paragraf: `Our staging will help you sell the potential of your space.
        We can work off of our own photography or photos you provide.`
    },
    {
        title: 'Floor Plans',
        listItem: [
            {
                title: 'On-site Mesure'
            },
            {
                title: '2D Floor Plans'
            },
            {
                title: '3D Floor Plans'
            }
        ],
        image: Image4,
        paragraf: 'We produce laser-precise floor plans faster than any other service.'
    },
    {
        title: 'Interactive Tours',
        listItem: [
            {
                title: 'Interiors'
            },
            {
                title: 'Exteriors'
            },
        ],
        image: Image5,
        paragraf: 'Renderings are the gold standard in pre-construction marketing.'
    },
    {
        title: 'Video',
        listItem: [
            {
                title: 'Drone Cinematography'
            },
            {
                title: 'Interiors'
            },
            {
                title: 'Exteriors / Architectural'
            }
        ],
        image: Image6,
        paragraf: 'Video content has higher engagement and will help your property stand out online.'
    },
   
]