import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa";

export const projects = [
    {
        imageUrl: "images/ecommerce_chatbot_cover.jpg",
        title: "E-commerce Chatbot",
        description:
            "Created a conversational AI to address customer inquiries regarding order tracking and refunds for an e-commerce store. \n Implemented features such as real-time order status updates and refund requests, with escalation to human agents for complex issues.",
        tags: ["FaReact", "FaNode", "SiMongodb"],
        source: "https://github.com/peter2707/ecomm-chatbot",
        id: 1,
    },
    {
        imageUrl: "images/c_backdoor_cover.jpg",
        title: "C Backdoor",
        description:
            "Built a sophisticated malware (backdoor) in C to provide remote access and control over a system, incorporating advanced persistence mechanisms and AES-256 encryption to evade detection.",
        tags: ["SiC"],
        source: "https://github.com/peter2707/remote-backdoor-c",
        id: 2,
    },
    {
        imageUrl: "images/cest_la_vie_cover.jpg",
        title: "C'est La Vie",
        description:
            "Built a modern social application to enhance user interaction and engagement. \n Implemented features including user authentication, photo uploads with gallery, data paging, sorting, filtering, and secure routing.",
        tags: ["SiCsharp", "FaAngular", "SiSqlite", "SiTypescript"],
        source: "https://github.com/peter2707/CestLaVie",
        id: 3,
    },
    {
        imageUrl: "images/self_testing_cover.jpg",
        title: "HIV Self Testing Platform",
        description:
            "Built a platform to provide guidance & support to prevent undiagnosed HIV infections due to privacy concern. \n Codeveloped intuitive user-interface, step-by-step instruction, test portal, information hub, interactive FAQ, and admin dashboard with content, user-management, and analytic tools including report generation.",
        tags: [
            "FaReact",
            "SiExpress",
            "SiPostgresql",
            "SiMongodb",
            "FaDocker",
            "SiTailwindcss",
        ],
        source: "https://github.com/peter2707/COS70008-Front-End",
        id: 4,
    },
    {
        imageUrl: "images/social_network_analysis_cover.jpg",
        title: "Social Network Analysis",
        description:
            "Created a cloud platform that collects data via surveys, analyses, and generates valuable insights, such as egonet diagram, to help solve problems such as academic failure, social isolation, depression, and burnout. \n Developed login, registration form, dynamic survey form that fetches questions using Axios, progress bar, and data visualisation with Vis.js.",
        tags: ["FaReact", "FaNode", "SiMongodb", "FaAws", "FaDocker"],
        source: "https://github.com/peter2707/COS60011-SNA-Project-Front-End",
        id: 5,
    },
    {
        imageUrl: "images/job_match_cover.jpg",
        title: "Job Match",
        description:
            "Created a job hunting/posting platform that matches job posts with job seekers using a heuristic matching algorithm based on multiple variables. \n Co-developed front-end, back-end, database, and key features such as user login & registration, admin portal, job seeker/employer profile, matching algorithm, job post/search, and password reset using SendGrid.",
        tags: ["FaPhp", "FaHtml5", "FaCss3", "SiJavascript", "SiMysql"],
        source: "https://github.com/peter2707/PP1Group02MatchMaking",
        id: 6,
    },
    {
        imageUrl: "images/banagram_cover.jpg",
        title: "Bananagrams",
        description:
            "Co-developed a board game that runs on a local network to provide tutoring for kindergarten students in rural areas without internet access. \n Implemented interactive features, including a draggable board, tile placement, letter pool, home menu, user inputs, and API integration.",
        tags: ["FaReact", "FaPython", "SiDjango", "SiFastapi"],
        source: "https://github.com/peter2707/prum-portfolio",
        id: 7,
    },
    {
        imageUrl: "images/employee_booking_cover.jpg",
        title: "Employee Booking System",
        description:
            "Developed a desktop application for staff to book meeting and conference spaces within the organisation for a period of time. \n Implemented MVC architectural pattern to ensure code maintainability and overcoming challenges such as real-time update, and user input validation while reinforcing security measures.",
        tags: ["FaJava", "SiSqlite"],
        source: "https://github.com/FurtherProgramming/assignment-2-s3848409.com",
        id: 8,
    },
    {
        imageUrl: "images/qwirkle_cover.jpg",
        title: "Qwirkle with C++",
        description:
            "Developed the console interface and various input checks using C++. \n Created objects, methods, vectors, pointers, and memory management. \n Implemented game logic and scoring algorithm.",
        tags: ["SiCplusplus", "SiCmake"],
        source: "https://github.com/peter2707/qwirkleM3-M4.com",
        id: 9,
    },
    {
        imageUrl: "images/expense_tracker_cover.jpg",
        title: "Expense Tracker iOS",
        description:
            "Designed UI/UX with InVision Studio, Implemented Front-End using storyboard. \n Built Back-End methods using Swift. \n Some features are: Add&Remove expenses base on their category, Set user's name, profile picture, monthly budget, and graph analysis.",
        tags: ["SiSwift", "SiCocoapods"],
        source: "https://github.com/rmit-S2-2020-iPhone/a1-s3813756_s3848409.com",
        id: 10,
    },
    {
        imageUrl: "images/inspire_bot_cover.jpg",
        title: "Inspire Discord Bot",
        description:
            "Developed a discord bot that takes commands from text channel by users on discord and communicates with users or tell a poem.",
        tags: ["FaPython", "SiReplit", "SiFlask"],
        source: "https://github.com/peter2707/s3848409-s3761982-cosc2670-assignment2.com",
        id: 11,
    },
    {
        imageUrl: "images/dad_jokes_cover.jpg",
        title: "Dad Jokes Community",
        description:
            "This is a community platform built with ASP.NET and C# for sharing and enjoying dad jokes. \n It allows users to submit, rate, and comment on jokes.",
        tags: ["SiCsharp", "FaHtml5", "FaCss3", "SiJavascript"],
        source: "https://github.com/peter2707/DadJokesCommunity",
        id: 12,
    },
];

export const certifications = [
    {   
        icon: <FcGoogle className="mb-1"/>,
        title: "Google Cybersecurity Professional",
        year: "June 2024",
        skills: [
            "Security Information and Event Management (SIEM) tools",
            "Intrusion Detection Systems (IDS)",
            "Linux",
            "Manage Security Risks",
            "Security Incident Handling & Response",
            "Security Audits"
        ],
    },
    {
        icon: <FaMicrosoft className="mb-1"/>,
        title: "Microsoft Foundational C# Certificate",
        year: "March 2024",
        skills: [
            "C# Syntax and Structure",
            ".NET Framework",
            "Object-Oriented Programming (OOP)",
            "Exception Handling",
            "Collections and Data Structures",
            "Asynchronous Programming",
            "Unit Testing"
        ],
    },
];

export const timeline = [
    {
        title: "2022 - Present",
        cardTitle: "Master of IT in Cloud and Mobile Computing",
        cardSubtitle: "Swinburne University of Technology",
    },
    {
        title: "2019 - 2021",
        cardTitle: "Bachelor of IT in Software Development",
        cardSubtitle: "Royal Melbourne Institute of Technology (RMIT)",
    },
    {
        title: "2018 - 2019",
        cardTitle: "Diploma of IT",
        cardSubtitle: "Central Queensland University",
    },
];
