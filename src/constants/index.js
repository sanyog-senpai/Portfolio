import {
    beats,
    css,
    danfe,
    facebook,
    figma,
    git,
    html,
    javascript,
    pc,
    mongodb,
    movieZone,
    movies,
    nodejs,
    photoshop,
    reactjs,
    redux,
    tailwind,
    typescript,
    web,
    webHostNepal,
    wenSolutions,
    xypo,
    wordpress
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "FrontEnd Developer",
        icon: web,
    },
    {
        title: "UI/UX Designer",
        icon: pc,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "wordpress",
        icon: wordpress,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "photoShop",
        icon: photoshop,
    },
    
];

const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Web Host Nepal Pvt Ltd",
        icon: webHostNepal,
        iconBg: "#E6DEDD",
        date: "Mar 2022 - Feb 2023",
        points: [
            "Adapted designs to suit diverse browser and device requirements",
            "Developed user scenarios to understand preferences, selections and end goals of users",
            "Tested websites to identify design issues",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "QA and Support",
        company_name: "WEN Solutions",
        icon: wenSolutions,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - August 2021",
        points: [
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products."
        ],
    },


];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Movie Zone",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "html",
                color: "orange-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
            {
                name: "tmbdAPI",
                color: "green-text-gradient",
            },
        ],
        image: movieZone,
        source_code_link: "https://movie-zone-livid.vercel.app/",
    },
    // link not ready
    {
        name: "Beats",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        tags: [
            {
                name: "html",
                color: "orange-text-gradient",
            },
            {
                name: "css",
                color: "blue-text-gradient",
            },
            {
                name: "js",
                color: "yellow-text-gradient",
            },
            {
                name: "scrollreveal",
                color: "pink-text-gradient",
            },
        ],
        image: beats,
        source_code_link: "https://sanyog-senpai.github.io/beats/",
    },
    {
        name: "Movies",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        tags: [
            {
                name: "html",
                color: "orange-text-gradient",
            },
            {
                name: "css",
                color: "blue-text-gradient",
            },
            {
                name: "js",
                color: "yellow-text-gradient",
            },
            {
                name: "swiperjs",
                color: "blue-text-gradient",
            },
        ],
        image: movies,
        source_code_link: "https://sanyog-senpai.github.io/Movies/",
    },
    {
        name: "Danfe",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        tags: [
            {
                name: "html",
                color: "orange-text-gradient",
            },
            {
                name: "css",
                color: "blue-text-gradient",
            },
            {
                name: "js",
                color: "yellow-text-gradient",
            },
        ],
        image: danfe,
        source_code_link: "https://sanyog-senpai.github.io/Danfe-College/",
    },
    {
        name: "Xypo",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        tags: [
            {
                name: "html",
                color: "orange-text-gradient",
            },
            {
                name: "css",
                color: "blue-text-gradient",
            },
            {
                name: "js",
                color: "yellow-text-gradient",
            },
        ],
        image: xypo,
        source_code_link: "https://sanyog-senpai.github.io/Xypo/",
    },
    // link not ready
    {
        name: "Facebook",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        tags: [
            {
                name: "html",
                color: "orange-text-gradient",
            },
            {
                name: "css",
                color: "blue-text-gradient",
            },
            {
                name: "swiperjs",
                color: "blue-text-gradient",
            },
        ],
        image: facebook,
        source_code_link: "#",
    },

];

export { experiences, projects, services, technologies, testimonials };
