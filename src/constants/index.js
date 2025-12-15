const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Oct, 2025",
        title:
            "Interstellar Visa Center Opened",
        image: "/images/blog1.png",
        link: "https://ecommerce-iztmivekov-nextjs.vercel.app/",
    },
    {
        id: 2,
        date: "Sep, 2025",
        title: "Iztmivekov App had opened",
        image: "/images/blog2.png",
        link: "https://iztmivekov-nextjs.vercel.app/",
    },
    {
        id: 3,
        date: "Aug 15, 2025",
        title: "Participated in the UTC competition in the University of Lincoln",
        image: "/images/blog3.png",
        link: "https://app.lincoln.ac.uk/",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "Vite"],
    },
    {
        category: "Mobile",
        items: ["React Native", "Expo"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Sass", "CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "NestJS", "Hono"],
    },
    {
        category: "Database",
        items: ["MongoDB", "PostgreSQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/anzorV",
    },
    {
        id: 2,
        text: "Platform",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "https://macos-portfolio-omega-five.vercel.app/",
    },
    {
        id: 3,
        text: "Youtube/YT",
        icon: "/icons/youtube.svg",
        bg: "#ff866b",
        link: "https://youtube.com/@AmiringPRO",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal1.jpg",
    },
    {
        id: 2,
        img: "/images/gal2.jpg",
    },
    {
        id: 3,
        img: "/images/gal3.jpg",
    },
    {
        id: 4,
        img: "/images/gal4.jpg",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1 — Top Left
        {
            "id": 5,
            "name": "3-D Portfolio Website",
            "icon": "/images/folder.png",
            "kind": "folder",
            "position": "top-10 left-5",
            "windowPosition": "top-[15vh] right-20",
            "children": [
                {
                    "id": 1,
                    "name": "3-D Portfolio.txt",
                    "icon": "/images/txt.png",
                    "kind": "file",
                    "fileType": "txt",
                    "position": "top-5 left-10",
                    "description": [
                        "The 3-D Portfolio website is a dynamic and interactive platform built using Next.js, showcasing my skills and projects in a 3D environment.",
                        "It integrates seamless animations, transitions, and an immersive user experience, allowing visitors to navigate through my work like never before.",
                        "The site is fully responsive, ensuring a smooth experience across devices and browsers, and utilizes the latest web technologies for optimal performance.",
                        "Explore the portfolio, view projects, and get a feel for the creative process through detailed descriptions, images, and interactive elements."
                    ]
                },
                {
                    "id": 2,
                    "name": "3-D Portfolio Website",
                    "icon": "/images/safari.png",
                    "kind": "file",
                    "fileType": "url",
                    "href": "https://3-d-portfolio-ten-brown.vercel.app/",
                    "position": "top-10 right-20"
                },
                {
                    "id": 4,
                    "name": "3D Portfolio Screenshot.png",
                    "icon": "/images/image.png",
                    "kind": "file",
                    "fileType": "img",
                    "position": "top-52 right-80",
                    "imageUrl": "/images/project-1.png"
                },
                {
                    "id": 5,
                    "name": "Design.fig",
                    "icon": "/images/plain.png",
                    "kind": "file",
                    "fileType": "fig",
                    "href": "https://google.com",
                    "position": "top-60 right-20"
                }
            ]
        },


        // ▶ Project 2 — Middle Left
        {
            "id": 6,
            "name": "HTML Portfolio Website - 2021",
            "icon": "/images/folder.png",
            "kind": "folder",
            "position": "top-52 left-5",
            "windowPosition": "top-[30vh] right-35",
            "children": [
                {
                    "id": 1,
                    "name": "HTML Portfolio Website.txt",
                    "icon": "/images/txt.png",
                    "kind": "file",
                    "fileType": "txt",
                    "position": "top-5 right-10",
                    "description": [
                        "This HTML Portfolio Website was created in 2021 as one of my earliest projects.",
                        "It showcases my personal introduction, skills, projects, and contact section using clean and simple HTML, CSS, and JavaScript.",
                        "The design focuses on clarity, smooth scrolling, and a classic portfolio look without relying on frameworks.",
                        "The site represents my early journey into web development, demonstrating core fundamentals and my growth from beginner-level coding."
                    ]
                },
                {
                    "id": 2,
                    "name": "HTML Portfolio Website",
                    "icon": "/images/safari.png",
                    "kind": "file",
                    "fileType": "url",
                    "href": "https://anzorv.github.io/personal-blog/dist",
                    "position": "top-20 left-20"
                },
                {
                    "id": 4,
                    "name": "html-portfolio-2021.png",
                    "icon": "/images/image.png",
                    "kind": "file",
                    "fileType": "img",
                    "position": "top-52 left-80",
                    "imageUrl": "/images/project-2.jpg"
                },
                {
                    "id": 5,
                    "name": "Design.fig",
                    "icon": "/images/plain.png",
                    "kind": "file",
                    "fileType": "fig",
                    "href": "https://google.com",
                    "position": "top-60 left-5"
                }
            ]
        },


        // ▶ Project 3 — Top Middle
        {
            "id": 7,
            "name": "Apple Product App - iPhone 14/15",
            "icon": "/images/folder.png",
            "kind": "folder",
            "position": "top-10 left-64",
            "windowPosition": "top-[60vh] right-56",
            "children": [
                {
                    "id": 1,
                    "name": "Apple Product App Project.txt",
                    "icon": "/images/txt.png",
                    "kind": "file",
                    "fileType": "txt",
                    "position": "top-5 left-10",
                    "description": [
                        "The Apple Product App is a sleek and interactive showcase of the iPhone 14 and iPhone 15 features.",
                        "With this app, users can explore the latest Apple products in a beautiful, intuitive interface.",
                        "It highlights key features such as camera improvements, performance upgrades, design enhancements, and new software capabilities.",
                        "Built with cutting-edge web technologies, the app offers smooth animations and a polished, modern user experience."
                    ]
                },
                {
                    "id": 2,
                    "name": "Apple Product App",
                    "icon": "/images/safari.png",
                    "kind": "file",
                    "fileType": "url",
                    "href": "https://apple-app-red.vercel.app/",
                    "position": "top-10 right-20"
                },
                {
                    "id": 4,
                    "name": "apple-product-app.png",
                    "icon": "/images/image.png",
                    "kind": "file",
                    "fileType": "img",
                    "position": "top-52 right-80",
                    "imageUrl": "/images/project-3.png"
                },
                {
                    "id": 5,
                    "name": "Design.fig",
                    "icon": "/images/plain.png",
                    "kind": "file",
                    "fileType": "fig",
                    "href": "https://google.com",
                    "position": "top-60 right-20"
                }
            ]
        },

        // ▶ Project 4 — Top Right
        {
            "id": 8,
            "name": "Interstellar Visa Center Shop",
            "icon": "/images/folder.png",
            "kind": "folder",
            "position": "top-10 left-[40rem]",
            "windowPosition": "top-[10vh] left-7",
            "children": [
                {
                    "id": 1,
                    "name": "Interstellar Visa Center Shop Project.txt",
                    "icon": "/images/txt.png",
                    "kind": "file",
                    "fileType": "txt",
                    "position": "top-5 left-10",
                    "description": [
                        "The Interstellar Visa Center Shop is an eCommerce platform for purchasing visas, permits, and travel documents to other planets and galaxies.",
                        "Browse various intergalactic travel packages, explore visa requirements, and purchase travel essentials—all in one place.",
                        "The app provides a seamless checkout experience, with real-time inventory, secure payment processing, and instant document generation.",
                        "Built with React, Next.js, and integrated with a custom API for processing interstellar transactions, the site delivers an efficient and futuristic shopping experience."
                    ]
                },
                {
                    "id": 2,
                    "name": "Interstellar Visa Center Shop",
                    "icon": "/images/safari.png",
                    "kind": "file",
                    "fileType": "url",
                    "href": "https://ecommerce-interstellar-visa-center.vercel.app/",
                    "position": "top-10 right-20"
                },
                {
                    "id": 4,
                    "name": "interstellar-shop.png",
                    "icon": "/images/image.png",
                    "kind": "file",
                    "fileType": "img",
                    "position": "top-52 right-80",
                    "imageUrl": "/images/project-4.jpg"
                },
                {
                    "id": 5,
                    "name": "Design.fig",
                    "icon": "/images/plain.png",
                    "kind": "file",
                    "fileType": "fig",
                    "href": "https://google.com",
                    "position": "top-60 right-20"
                }
            ]
        },

        // ▶ Project 5 — Middle Middle
        {
            "id": 9,
            "name": "Ecommerce Sanity and Stripe App",
            "icon": "/images/folder.png",
            "kind": "folder",
            "position": "top-52 left-64",
            "windowPosition": "top-[59vh] right-12",
            "children": [
                {
                    "id": 1,
                    "name": "Ecommerce Sanity and Stripe Project.txt",
                    "icon": "/images/txt.png",
                    "kind": "file",
                    "fileType": "txt",
                    "position": "top-5 left-10",
                    "description": [
                        "The Ecommerce Sanity and Stripe project is an eCommerce platform that integrates Sanity CMS for managing content and Stripe for handling payments.",
                        "With this app, you can manage products, prices, and customer orders effortlessly through a flexible CMS interface.",
                        "Stripe handles the payment processing seamlessly, offering secure and easy transactions for customers around the globe.",
                        "Built with Next.js and React, this platform delivers a fast, modern eCommerce experience with real-time updates and a smooth checkout process."
                    ]
                },
                {
                    "id": 2,
                    "name": "Ecommerce Sanity and Stripe",
                    "icon": "/images/safari.png",
                    "kind": "file",
                    "fileType": "url",
                    "href": "https://ecommerce-sanity-stripe-theta-eight.vercel.app/",
                    "position": "top-10 right-20"
                },
                {
                    "id": 4,
                    "name": "ecommerce-sanity-stripe.png",
                    "icon": "/images/image.png",
                    "kind": "file",
                    "fileType": "img",
                    "position": "top-52 right-80",
                    "imageUrl": "/images/project-5.jpg"
                },
                {
                    "id": 5,
                    "name": "Design.fig",
                    "icon": "/images/plain.png",
                    "kind": "file",
                    "fileType": "fig",
                    "href": "https://google.com",
                    "position": "top-60 right-20"
                }
            ]
        },

        // ▶ Project 6 — Middle Right
        {
            "id": 10,
            "name": "Interstellar Visa Center Portfolio",
            "icon": "/images/folder.png",
            "kind": "folder",
            "position": "top-52 left-[40rem]",
            "windowPosition": "top-[60vh] left-7",
            "children": [
                {
                    "id": 1,
                    "name": "Interstellar Visa Center Portfolio Project.txt",
                    "icon": "/images/txt.png",
                    "kind": "file",
                    "fileType": "txt",
                    "position": "top-5 left-10",
                    "description": [
                        "The Interstellar Visa Center Portfolio showcases a collection of projects related to the futuristic concept of interplanetary travel and visa processing.",
                        "The portfolio includes an online platform for acquiring visas and permits for intergalactic travel, as well as detailed insights into various space tourism packages.",
                        "It features an intuitive user interface, smooth navigation, and dynamic content management, providing a cutting-edge experience for potential space travelers.",
                        "Built with modern web technologies like React, Next.js, and a custom API, the portfolio demonstrates the potential of space-related eCommerce."
                    ]
                },
                {
                    "id": 2,
                    "name": "Interstellar Visa Center Portfolio",
                    "icon": "/images/safari.png",
                    "kind": "file",
                    "fileType": "url",
                    "href": "https://interstellar-visa-center.vercel.app/",
                    "position": "top-10 right-20"
                },
                {
                    "id": 4,
                    "name": "interstellar-visa-center.png",
                    "icon": "/images/image.png",
                    "kind": "file",
                    "fileType": "img",
                    "position": "top-52 right-80",
                    "imageUrl": "/images/project-6.jpg"
                },
                {
                    "id": 5,
                    "name": "Design.fig",
                    "icon": "/images/plain.png",
                    "kind": "file",
                    "fileType": "fig",
                    "href": "https://google.com",
                    "position": "top-60 right-20"
                }
            ]
        },

        // ▶ Project 7 — Bottom Left
        {
            "id": 11,
            "name": "Iztmivekov Online Restaurant",
            "icon": "/images/folder.png",
            "kind": "folder",
            "position": "top-[50vh] left-5",
            "windowPosition": "top-[40vh] left-50",
            "children": [
                {
                    "id": 1,
                    "name": "Iztmivekov Online Restaurant Project.txt",
                    "icon": "/images/txt.png",
                    "kind": "file",
                    "fileType": "txt",
                    "position": "top-5 left-10",
                    "description": [
                        "Iztmivekov Online Restaurant is a modern, interactive platform that allows users to browse and order from a wide variety of delicious dishes.",
                        "The app features a clean, user-friendly interface where customers can view the menu, customize orders, and securely place orders for home delivery or pick-up.",
                        "Built with Next.js and React, the site is fast, responsive, and provides an engaging experience for food lovers.",
                        "Whether you're craving a quick meal or planning a special event, Iztmivekov Online Restaurant offers a seamless and enjoyable online ordering experience."
                    ]
                },
                {
                    "id": 2,
                    "name": "Iztmivekov Online Restaurant",
                    "icon": "/images/safari.png",
                    "kind": "file",
                    "fileType": "url",
                    "href": "https://iztmivekov-nextjs.vercel.app/",
                    "position": "top-10 right-20"
                },
                {
                    "id": 4,
                    "name": "iztmivekov-restaurant.png",
                    "icon": "/images/image.png",
                    "kind": "file",
                    "fileType": "img",
                    "position": "top-52 right-80",
                    "imageUrl": "/images/project-7.png"
                },
                {
                    "id": 5,
                    "name": "Design.fig",
                    "icon": "/images/plain.png",
                    "kind": "file",
                    "fileType": "fig",
                    "href": "https://google.com",
                    "position": "top-60 right-20"
                }
            ]
        },

        // ▶ Project 8 — Bottom Middle
        {
            "id": 12,
            "name": "Zoom Clone App",
            "icon": "/images/folder.png",
            "kind": "folder",
            "position": "top-[50vh] left-64",
            "windowPosition": "top-[33vh] left-7",
            "children": [
                {
                    "id": 1,
                    "name": "Zoom Clone App Project.txt",
                    "icon": "/images/txt.png",
                    "kind": "file",
                    "fileType": "txt",
                    "position": "top-5 left-10",
                    "description": [
                        "The Zoom Clone App is a real-time video conferencing platform that replicates the essential features of Zoom, such as video calls, audio, and screen sharing.",
                        "It allows users to host meetings, join video conferences, and collaborate remotely with ease.",
                        "Built using React, and Clerk, the app provides a seamless, responsive experience for both personal and business use.",
                        "Whether for casual chats or professional meetings, the Zoom Clone App offers a smooth and interactive video conferencing solution."
                    ]
                },
                {
                    "id": 2,
                    "name": "Zoom Clone App",
                    "icon": "/images/safari.png",
                    "kind": "file",
                    "fileType": "url",
                    "href": "https://zoom-clone-mocha-five.vercel.app/",
                    "position": "top-10 right-20"
                },
                {
                    "id": 4,
                    "name": "zoom-clone-app.png",
                    "icon": "/images/image.png",
                    "kind": "file",
                    "fileType": "img",
                    "position": "top-52 right-80",
                    "imageUrl": "/images/project-8.png"
                },
                {
                    "id": 5,
                    "name": "Design.fig",
                    "icon": "/images/plain.png",
                    "kind": "file",
                    "fileType": "fig",
                    "href": "https://google.com",
                    "position": "top-60 right-20"
                }
            ]
        }
    ],
};


const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/amir-1.png",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/amir-2.jpg",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/amir-3.jpg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/amir-1.png",
            description: [
                "Hey! I’m Amir 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
                "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
                "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };