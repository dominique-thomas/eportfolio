const portfolioOwner = {
    name: "Dominique Thomas",
    about: `Hi, I'm Dominique!<br><br>
    I'm an instructional designer with a creative edge and a passion for building engaging, tech-forward learning experiences.<br><br>
    With over 12 years of experience, I specialize in <span class="textEmphasis">eLearning development, multimedia production, and interactive simulations</span>. 
    I also have a strong foundation in <span class="textEmphasis">front-end web development</span> that helps bring my projects to life. 
    I've worked across various industries to turn complex ideas into intuitive, learner-focused content.<br><br>
    When I'm not designing, you'll find me experimenting with new tools, digging into UI/UX, or coding up creative side projects. 
    I'm all about solving problems with clarity and curiosity. Want to learn more about me or collaborate on a project?`,

    linkedin: "https://www.linkedin.com/in/dominique-thomas-ab56b433/",

    heroAnimation: [
        "Instructional Designer",
        "Multimedia Specialist",
        "Web Designer",
        "Problem Solver"
    ],

    proficiencies: [
        { label: "eLearning Development & Multimedia Production", value: 90 },
        { label: "Articulate 360 & Adobe Captivate", value: 90 },
        { label: "Adobe Creative Cloud (Photoshop, Premiere Pro, Audition)", value: 85 },
        { label: "Front-End Web Development (HTML, CSS, JS)", value: 85 },
        { label: "Generative AI Tools (ChatGPT, Gemini, etc.)", value: 75 }
    ],

    competencies: [
        { icon: "fa-chalkboard-teacher", title: "eLearning Development" },
        { icon: "fa-object-group", title: "Multimedia Production" },
        { icon: "fa-laptop-code", title: "Front-End Web Design" },
        { icon: "fa-microchip", title: "Emerging Technology Integration" } 
    ],

    stats: [
        { number: 12, suffix: "+", label: "Years of Experience" },
        { number: 8, suffix: "+", label: "Tools & Platforms Mastered" },
        { number: 200, suffix: "+", label: "Projects Delivered" },
        { number: 30000, suffix: "+", label: "Creative Hours Logged" },
    ],
    
    blogUrl: "https://softstack-notes.hashnode.dev/?source=top_nav_blog_home",
    
    youtubeUrl: "https://www.youtube.com/@thesoftstackstudio",
};

const categoryDisplayOrder = [
    "eLearning & Simulation",
    "Emerging Tech & Prototypes",
    "Branding & Visual Identity"
];

const projectCategories = {
    "ELEARN_SIM": "eLearning & Simulation",
    "EMERGING": "Emerging Tech & Prototypes",    
    "BRAND_VISUAL": "Branding & Visual Identity"
};

let data = [

    // eLearning & Simulation 
    {
        id: "STEADY_TALK",
        categoryKey: "ELEARN_SIM",
        title: "Steady Talk Interview Simulation",
        year: "2025",
        keywords: ["Personal Project", "AI", "Instructional Design", "Web Design"],
        description: "Browser-based interview simulation that helps users practice multiple interviews and build confidence with a realistic mentor.",
        scope: "I built this project to help people build confidence and improve communication skills by practicing different interview scenarios in a realistic, low-pressure setting.",
        solution: "I created Steady Talk as a browser-based simulation that uses HeyGen for a realistic mentor voice and video, and TensorFlow with web speech APIs for speech recognition and head tracking. It supports multiple interview stages and lets users download transcripts for self-review.",

        demo: [{link: "https://dominique-thomas.github.io/steady-talk"}],
        specialNote: false,
        imageRange: 4
    },

    {
        id: "MENTOR_SPACE",
        categoryKey: "ELEARN_SIM",
        title: "Mentor Space Leadership Simulation",
        year: "2025",
        keywords: ["Personal Project", "Instructional Design", "AI", "Web Design"],
        description: "Browser-based mentoring simulation where learners explore leadership skills with a single virtual mentor.",
        scope: "I created this project to help people strengthen their leadership and soft skills by exploring communication, feedback, and conflict resolution in a guided, mentor-driven environment.",
        solution: "I built Mentor Space as a browser-based chat simulation where users take a short quiz to discover their leadership style, then interact with their virtual mentor. Using built-in chat options, users can ask for feedback on strengths and weaknesses, get personalized book or quote recommendations, and even ask leadership-related questions. Gemini powers the analysis and mentor responses, while the interface keeps the experience interactive and approachable.",

        demo: [{link: "https://leadership-ai-project.web.app/"}],
        specialNote: false,
        imageRange: 4
    },

    {
        id: "UNA_TRAIN",
        categoryKey: "ELEARN_SIM",
        title: "Unanet eLearning Website, Training, & Simulation",
        year: "2024",
        keywords: ["Personal Project", "Instructional Design", "Web Design"],
        description: "Custom website, training videos, and interactive simulation built to teach Unanet timesheet tasks.",
        scope: "I built this project to make it easier for employees to learn and master Unanet's timesheet system without feeling overwhelmed by its complexity.",
        solution: "I developed a responsive training website that combines closed-captioned tutorial videos, interactive simulations, and assessments for core timesheet workflows. The program offers a self-paced structure while ensuring all corporate learning requirements are met.",

        demo: [{link:"https://dominique-thomas.github.io/unanet-training/"}],
        specialNote: false,
        imageRange: 4
    },

    {
        id: "DINN_SIMU",
        categoryKey: "ELEARN_SIM",
        title: "Pre-Dinner Prep Simulation",
        year: "2024",
        keywords: ["Personal Project", "Gamification", "Instructional Design"],
        description: "Unity-based 3D simulation where learners complete interactive household tasks while exploring a virtual home.",
        scope: "I built this project to help learners develop problem-solving skills and task sequencing in a fun, game-like learning environment.",
        solution: "I created a 3D interactive simulation using Unity where learners explore a virtual home, complete tasks like cleaning and assembling furniture, and interact with tools. The design balances playful exploration with structured feedback, keeping users engaged while learning.",

        demo: [{link: "https://dominique-thomas.github.io/pre-dinner-prep-simulation/"}],
        specialNote: false,
        imageRange: 3
    },

    // Emerging Technologies
    {
        id: "VIRTU_CARE",
        categoryKey: "EMERGING",
        title: "VirtuCare Patient Simulation",
        year: "2025",
        keywords: ["Personal Project", "Instructional Design", "Web Design"],
        description: "Browser-based simulation where healthcare professionals practice patient interviews with virtual patients.",
        scope: "I built this project to help healthcare professionals improve their communication and diagnostic questioning skills in a safe, low-pressure environment.",
        solution: "I created VirtuCare as a browser-based simulation where users interview randomized virtual patients with varying symptoms and personalities. The system uses voice interaction and real-time feedback to highlight what details were captured or missed, encouraging reflective learning and skill growth.",

        demo: [{link: "https://dominique-thomas.github.io/virtu-care/"}],
        specialNote: false,
        imageRange: 4
    },

    {
        id: "TRBL_AR",
        categoryKey: "EMERGING",
        title: "TroubleshootAR Diagnostic Tool",
        year: "2025",
        keywords: ["Personal Project", "Instructional Design"],
        description: "Augmented reality-based tool guiding IT students through collaborative hardware troubleshooting exercises.",
        scope: "I created this project to help IT students develop analytical troubleshooting skills by exploring hardware issues in a guided, hands-on way.",
        solution: "I built TroubleshootAR as a scaffolding tool where students hover over AR markers to reveal checklists of areas to inspect and take notes. After completing their observations, they work with a mentor or peers to analyze their findings and identify the root issue. The system encourages critical thinking, collaboration, and structured analysis while using AR as a supportive learning aid.",

        demo: [{link: "https://dominique-thomas.github.io/troubleshoot-ar/"}],
        specialNote: false,
        imageRange: 4
    },

    {
        id: "DAILY_UPLIFT",
        categoryKey: "EMERGING",
        title: "Daily Uplift PWA",
        year: "2025",
        keywords: ["Personal Project", "Web Design", "Instructional Design"],
        description: "Lightweight progressive web app (PWA) delivering daily affirmations to keep users motivated and positive throughout the day.",
        scope: "I built this project to give users a simple, accessible way to stay motivated and focused through quick, uplifting daily messages.",
        solution: "I developed Daily Uplift as a mobile-friendly progressive web app that displays a new affirmation each day. The app uses a minimal design for easy navigation and works without sign-ins, making it quick and accessible for daily use.",

        demo: [{link: "https://dominique-thomas.github.io/Daily-Uplift/"}],
        specialNote: false,
        imageRange: 2
    },

    // Branding & Visual Identity
    {
        id: "COMP_BRAND",
        categoryKey: "BRAND_VISUAL",
        title: "Blush & Ember Brand Guidelines",
        year: "2025",
        keywords: ["Personal Project", "Graphic Design", "Product Branding"],
        description: "Complete branding guide for a luxury candle concept, covering logo, typography, and color standards.",
        scope: "I built this project to practice creating a cohesive, polished visual identity for a luxury product concept.",
        solution: "I developed a detailed brand guide for Blush & Ember that outlines logo treatments, color palettes, and typography. The guide ensures anyone can apply the brand consistently across both print and digital media.",

        demo: [],
        specialNote: false,
        imageRange: 10
    },

    {
        id: "COSMO_BRAND",
        categoryKey: "BRAND_VISUAL",
        title: "Cosmo's Organic Coffee 3D Mockup",
        year: "2020",
        keywords: ["Personal Project", "Graphic Design", "Product Branding"],
        description: "3D product mockups for a fictional organic coffee brand, featuring earthy, minimalist visuals.",
        scope: "I created this project to practice branding and 3D visualization while developing a clean, professional look for a fictional coffee company.",
        solution: "I produced a series of 3D product renders featuring simple logos, natural tones, and clean layouts to make the brand feel market-ready. The project also served as a personal tribute, named after my late dog Cosmo, while refining my lighting and texturing skills.",

        demo: [],
        specialNote: false,
        imageRange: 2
    },

    {
        id: "CBY_SEC",
        categoryKey: "BRAND_VISUAL",
        title: "Cybersecurity Challenge Prototype",
        year: "2012",
        keywords: ["Professional Project", "Gamification", "Instructional Design"],
        description: "Gamified corporate training prototype set in a virtual office to teach security awareness.",
        scope: "I developed this project to make corporate cybersecurity training more engaging by replacing static slideshow lessons with an interactive learning experience.",
        solution: "I built the Cybersecurity Challenge as a prototype where learners navigate a virtual office, respond to potential security threats, and earn or lose points based on their decisions. Tailored feedback reinforces best practices, turning a routine compliance lesson into an interactive and memorable session.",

        demo: [],
        specialNote: true,
        imageRange: 5
    },

];