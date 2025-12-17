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
    postgresql,
    prisma,
	reactjs,
	redux,
	tailwind,
	typescript,
	web,
	webHostNepal,
	wenSolutions,
	facet,
	xypo,
	wordpress,
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
		id: "portfolio",
		title: "Portfolio",
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
		name: "Prisma",
		icon: prisma,
	},
	{
		name: "Postgre SQL",
		icon: postgresql,
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
		company_name: "Facet Technology Pvt Ltd",
		icon: facet,
		iconBg: "#E6DEDD",
		date: "Jan 2025 - Present",
		points: [
			"Frontend Development & CRM Systems: Built a CRM application with complex relational data using React.js and Tailwind CSS, focusing on performance and scalability.",
			"API Integration & Functionality Enhancement: Integrated third-party APIs to extend application capabilities and improve overall user experience.",
			"UI/UX & Responsive Design: Collaborated with designers to deliver modern, responsive, and user-friendly interfaces, including a company website in the AI domain.",
			"Branding & Visual Content: Designed engaging LinkedIn creatives using Adobe Photoshop to strengthen brand presence and social media engagement.",
		],
	},
	{
		title: "Frontend Developer",
		company_name: "Web Host Nepal Pvt Ltd",
		icon: webHostNepal,
		iconBg: "#E6DEDD",
		date: "Mar 2022 - Feb 2023",
		points: [
			"Frontend Development & Responsive Design: Built scalable, mobile-first interfaces using HTML, CSS, JavaScript, and Bootstrap, ensuring cross-browser compatibility and consistent performance across devices.",
			"UI/UX Design & User Research: Created intuitive, user-centered designs by developing user scenarios and translating insights into polished interfaces using Figma and Adobe Photoshop.",
			"Testing, Debugging & Code Quality: Tested websites to identify and fix design and compatibility issues, while actively participating in code reviews and providing constructive feedback.",
			"SEO & Performance Optimization: Implemented SEO best practices and performance enhancements to improve site speed, accessibility, and overall user engagement.",
		],
	},
	{
		title: "QA and Support",
		company_name: "WEN Solutions",
		icon: wenSolutions,
		iconBg: "#E6DEDD",
		date: "Jan 2021 - August 2021",
		points: [
			"Cross-Functional Collaboration: Worked closely with designers, product managers, and developers to deliver high-quality, user-focused products.",
			"Testing, QA & Process Optimization: Performed thorough testing, resolved issues, and improved workflows to boost performance, reliability, and team efficiency.",
			"WordPress Management & Technical Support: Maintained and optimized WordPress sites while providing hands-on technical troubleshooting and system support.",
			"Customer Support & User Experience: Delivered timely, effective solutions to customer issues, improving user satisfaction and long-term retention.",
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
