const portfolioOwner = {
    name: "Dominique Thomas",
    about: `Hi, I'm <span class="textEmphasis">Dominique</span>!<br><br>
            I'm an <span class="textEmphasis">instructional designer</span> who blends creativity, technology, and clarity to build meaningful learning experiences.<br><br>

            With 12+ years of experience, I've developed eLearning, simulations, and interactive content that simplify complex ideas and keep learners engaged. My focus is using <span class="textEmphasis">practical design and emerging tools</span> to make learning both effective and memorable.<br><br>

            When I'm not designing, you'll find me experimenting with new tech, exploring UI/UX, or coding small side projects just to see what's possible. I'm always learning, always creating, and always curious about what's next. Want to learn more about me or collaborate on a project?`,


    linkedin: "https://www.linkedin.com/in/dominique-thomas-ab56b433/",

    heroAnimation: [
        "Instructional Designer",
        "Multimedia Specialist",
        "Interactive Designer",
        "Creative Problem Solver",
        "Emerging Tech Enthusiast"
    ],

    proficiencies: [
        { label: "Design Tools (Photoshop, Premiere Pro, Audition, Canva)", value: 85 },
        { label: "Authoring Tools (Articulate Storyline 360, Rise 360, Captivate)", value: 90 },
        { label: "Code & Development (HTML, CSS, JavaScript, VS Code, CodePen)", value: 80 },
        { label: "LMS & eLearning Platforms (Blackboard, Moodle, SCORM)", value: 85 },
        { label: "Version Control & Project Management (Git, GitHub, Jira, MS Project)", value: 75 },
        { label: "AI & Emerging Tools (ChatGPT, Claude, Gemini)", value: 75 }
    ],

    competencies: [
        { icon: "fa-chalkboard-teacher", title: "Instructional Design" },
        { icon: "fa-video", title: "Multimedia Production" },
        { icon: "fa-laptop-code", title: "UX & Front-End Design" },
        { icon: "fa-diagram-project", title: "Workflow & Collaboration" }
    ],

    stats: [
        { number: 12, suffix: "+", label: "Years of Experience" },
        { number: 5, suffix: "+", label: "Core Disciplines of Expertise" },
        { number: 200, suffix: "+", label: "Learning & Media Projects Delivered" },
        { number: 50, suffix: "+", label: "Interactive Simulations & Videos Produced" }
    ],

    blogUrl: "https://softstack-notes.hashnode.dev/?source=top_nav_blog_home",

    youtubeUrl: "https://www.youtube.com/@thesoftstackstudio",
};

const projectKeywords = {
    ar: "Augmened Reality",
    vr: "Virtual Reality",
    instructionalDesign: "Instructional Design",
    simulation: "Simulation",
    elearning: "eLearning",
    ai: "AI Integration",
    webDesign: "Web Design",
    ux: "UX Design",
    multimedia: "Multimedia Design",
    video: "Video Production",
    branding: "Branding",
    gamification: "Gamification",
    professional: "Professional Project",
    personal: "Personal Project"
};

const programKeywords = {
    storyline: "Articulate Storyline 360",
    rise: "Articulate Rise 360",
    captivate: "Adobe Captivate",
    photoshop: "Adobe Photoshop",
    premierePro: "Adobe Premiere Pro",
    audition: "Adobe Audition",
    canva: "Canva",
    webDesign: "Web Design",
    unity: "Unity 3D",
    blackboard: "Blackboard LMS",
    moodle: "Moodle LMS",
    scorm: "SCORM-Compliant LMSs",
    chatgpt: "ChatGPT",
    claude: "Claude",
    gemini: "Gemini",
    vsCode: "Visual Studio Code",
    generativeAI: "Generative AI Tools",
    adobe3D: "Adobe Substance 3D / Dimension",
};

const categoryDisplayOrder = [
    "Instructional Design & Simulations",
    "Emerging Tech & Prototypes",
    "Visual & Multimedia Design"
];

const projectCategories = {
    "INSTRUCT_SIM": "Instructional Design & Simulations",
    "EMERGING": "Emerging Tech & Prototypes",
    "VISUAL_MEDIA": "Visual & Multimedia Design"
};

let data = [

    // eLearning & Simulation 
    {
        id: "STEADY_TALK",
        categoryKey: "INSTRUCT_SIM",
        title: "Steady Talk Interview Simulation",
        year: "2025",
        keywords: [
            projectKeywords.instructionalDesign,
            projectKeywords.simulation,
            projectKeywords.ai,
            projectKeywords.webDesign,
            projectKeywords.personal
        ],
        programs: [
            programKeywords.webDesign,
            programKeywords.photoshop,
            programKeywords.premierePro,
            programKeywords.generativeAI
        ],
        description: "An interactive interview simulation that helps users practice communication skills with a realistic virtual mentor.",
        details: "Developed as a browser-based simulation integrating AI-driven mentor visuals and real-time speech recognition through web APIs. Supports multiple interview stages and transcript exports for self-assessment. Designed to help learners build confidence and communication fluency in a low-pressure, self-paced environment.",
        demo: [
            { title: "Visit Steady Talk Simulation", link: "https://dominique-thomas.github.io/steady-talk" }
        ],
        specialNote: false,
        videoUrls: [],
        imageRange: 4
    },

    {
        id: "MENTOR_SPACE",
        categoryKey: "INSTRUCT_SIM",
        title: "Mentor Space Leadership Simulation",
        year: "2025",
        keywords: [
            projectKeywords.instructionalDesign,
            projectKeywords.simulation,
            projectKeywords.ai,
            projectKeywords.webDesign,
            projectKeywords.personal
        ],
        programs: [
            programKeywords.webDesign,
            programKeywords.photoshop,
            programKeywords.chatgpt
        ],
        description: "A browser-based chat simulation where learners build leadership and communication skills through guided mentor interactions.",
        details: "Developed as an interactive simulation where users are introduced to their virtual mentor, explore the mentor's leadership style, and then take a short quiz to reflect on their own approach. Afterward, learners engage in dynamic chat sessions where the mentor provides personalized feedback, book recommendations, and performance insights. Designed to promote reflection, soft-skill growth, and conversational learning in an approachable digital format.",
        demo: [
            { title: "Visit Mentor Space Simulation", link: "https://leadership-ai-project.web.app/" }
        ],
        specialNote: false,
        videoUrls: [],
        imageRange: 4
    },


    {
        id: "UNA_TRAIN",
        categoryKey: "INSTRUCT_SIM",
        title: "Unanet eLearning Website, Training, & Simulation",
        year: "2024",
        keywords: [
            projectKeywords.instructionalDesign,
            projectKeywords.simulation,
            projectKeywords.elearning,
            projectKeywords.webDesign,
            projectKeywords.personal
        ],
        programs: [
            programKeywords.webDesign,
            programKeywords.photoshop,
            programKeywords.premierePro,
            programKeywords.audition,
            programKeywords.scorm
        ],
        description: "A responsive eLearning site combining tutorials, videos, and interactive simulations for mastering Unanet timesheet workflows.",
        details: "Developed a comprehensive web-based training system that integrates video tutorials, assessments, and an interactive simulation to simplify Unanet timesheet processes. Designed visuals and interface components in Photoshop, edited and produced narration in Premiere Pro and Audition, and structured content for SCORM compliance to ensure seamless LMS integration. Focused on accessibility, clarity, and user-friendly progression to improve learner confidence and efficiency.",
        demo: [
            { title: "Visit Unanet Training Website", link: "https://dominique-thomas.github.io/unanet-training/" }
        ],
        specialNote: false,
        videoUrls: [],
        imageRange: 4
    },


    {
        id: "DINN_SIMU",
        categoryKey: "INSTRUCT_SIM",
        title: "Pre-Dinner Prep Simulation",
        year: "2024",
        keywords: [
            projectKeywords.instructionalDesign,
            projectKeywords.simulation,
            projectKeywords.multimedia,
            projectKeywords.personal
        ],
        programs: [
            programKeywords.webDesign,
            programKeywords.unity,
            programKeywords.photoshop,
            programKeywords.premierePro,
            programKeywords.audition
        ],
        description: "A Unity-based 3D simulation where learners complete household tasks in a virtual home environment.",
        details: "Developed as an interactive 3D training experience where users complete household prep tasks within a virtual home. Created and textured assets in Photoshop, integrated them into Unity for scene composition and programmed interactivity directly within the Unity environment. Edited supporting audio and video elements in Premiere Pro and Audition. The final simulation is hosted on a custom website, providing learners with a seamless, browser-accessible experience.",
        demo: [
            { title: "Visit Pre-Dinner Prep Simulation", link: "https://dominique-thomas.github.io/pre-dinner-prep-simulation/" }
        ],
        specialNote: false,
        videoUrls: [],
        imageRange: 3
    },


    // Emerging Technologies
    {
        id: "MICROSNAP",
        categoryKey: "EMERGING",
        title: "MicroSnap Builder",
        year: "2025",
        keywords: [
            projectKeywords.webDesign,
            projectKeywords.instructionalDesign,
            projectKeywords.personal
        ],
        programs: [
            programKeywords.vsCode,
            programKeywords.webDesign
        ],
        description: "A lightweight web app for creating short, visual slide decks through a simple in-browser editor or JSON API.",
        details: "Developed as a small HTML-based authoring tool for designing microlearning slide decks. The editor allows users to create, preview, and export slide decks directly in the browser, while the render API dynamically generates decks from JSON input. The project demonstrates front-end architecture for portable learning content creation.",
        demo: [
            { title: "Visit MicroSnap Builder", link: "https://microsnap-builder.netlify.app/" },
            { title: "View Sample JSON", link: "https://microsnap-builder.netlify.app/microsnap_example.json" }
        ],
        specialNote: false,
        videoUrls: [],
        imageRange: 3
    },

    {
        id: "VIRTU_CARE",
        categoryKey: "EMERGING",
        title: "VirtuCare Patient Simulation",
        year: "2025",
        keywords: [
            projectKeywords.instructionalDesign,
            projectKeywords.simulation,
            projectKeywords.webDesign,
            projectKeywords.personal
        ],
        programs: [
            programKeywords.webDesign,
            programKeywords.unity,
            programKeywords.premierePro
        ],
        description: "A medical simulation where healthcare professionals practice patient interviews with virtual patients in a safe, realistic environment.",
        details: "Designed as a guided patient-encounter experience where learners interview a virtual patient, select or ask follow-up questions, and receive scenario-based responses. At the end of the encounter, the system delivers a feedback summary highlighting information gathered, missed questions, and communication choices. Built as a web-accessible experience with supporting media edited in Premiere Pro to keep interactions smooth and realistic.",
        demo: [
            { title: "Visit VirtuCare Simulation", link: "https://dominique-thomas.github.io/virtu-care/" }
        ],
        specialNote: false,
        videoUrls: [],
        imageRange: 4
    },


    {
        id: "TRBL_AR",
        categoryKey: "EMERGING",
        title: "TroubleshootAR Diagnostic Tool",
        year: "2025",
        keywords: [
            projectKeywords.instructionalDesign,
            projectKeywords.simulation,
            projectKeywords.ar,
            projectKeywords.personal
        ],
        programs: [
            programKeywords.canva,
            programKeywords.webDesign
        ],
        description: "An augmented reality diagnostic tool guiding IT students through collaborative hardware troubleshooting exercises.",
        details: "Developed as a guided AR learning experience that helps IT students build analytical troubleshooting skills in a hands-on, exploratory way. Users scan AR markers to reveal system checklists and take notes. Each session concludes with group discussion prompts and mentor-led analysis, reinforcing collaboration and critical thinking. Designed to merge real-world equipment with interactive digital scaffolding for authentic skill development.",
        demo: [
            { title: "Visit TroubleshootAR Prototype", link: "https://dominique-thomas.github.io/troubleshoot-ar/" }
        ],
        specialNote: false,
        videoUrls: [],
        imageRange: 4
    },


    {
        id: "DAILY_UPLIFT",
        categoryKey: "EMERGING",
        title: "Daily Uplift PWA",
        year: "2025",
        keywords: [
            projectKeywords.webDesign,
            projectKeywords.personal
        ],
        programs: [
            programKeywords.canva,
            programKeywords.webDesign
        ],
        description: "A lightweight progressive web app delivering daily affirmations to help users stay positive and focused.",
        details: "Developed as a mobile-friendly progressive web app (PWA) that displays a new motivational affirmation each day. Built using responsive web design principles for smooth performance across devices, with offline functionality for continuous access. Focused on simplicity, accessibility, and consistent user engagement through minimal design and effortless daily use.",
        demo: [
            { title: "Visit Daily Uplift PWA", link: "https://dominique-thomas.github.io/Daily-Uplift/" }
        ],
        specialNote: false,
        videoUrls: [],
        imageRange: 2
    },


    // Branding & Visual Identity
    {
        id: "COMP_BRAND",
        categoryKey: "VISUAL_MEDIA",
        title: "Blush & Ember Brand Guidelines",
        year: "2025",
        keywords: [
            projectKeywords.branding,
            projectKeywords.graphicDesign,
            projectKeywords.personal
        ],
        programs: [
            programKeywords.canva,
            programKeywords.photoshop
        ],
        description: "A complete branding guide for a luxury candle concept, outlining logo, color, and typography standards.",
        details: "Developed a cohesive brand identity system for the fictional luxury candle company, Blush & Ember. Designed all visual components including logo variations, color palette, and typography hierarchy to ensure consistency across digital and print media. The final guide provides clear direction for maintaining a refined, high-end aesthetic across packaging and marketing materials.",
        demo: [],
        specialNote: false,
        videoUrls: [],
        imageRange: 10
    },

    {
        id: "COSMO_BRAND",
        categoryKey: "VISUAL_MEDIA",
        title: "Cosmo's Organic Coffee 3D Mockup",
        year: "2020",
        keywords: [
            projectKeywords.branding,
            projectKeywords.graphicDesign,
            projectKeywords.threeD,
            projectKeywords.personal
        ],
        programs: [
            programKeywords.adobe3D,
            programKeywords.photoshop
        ],
        description: "A 3D product mockup series for a fictional organic coffee brand, featuring minimalist design and earthy tones.",
        details: "Created a set of 3D product renders to visualize packaging concepts for a fictional coffee brand named after my late dog, Cosmo. Modeled and textured product scenes using Adobe's 3D suite and finalized visual refinements in Photoshop. Focused on natural materials, balance, and visual storytelling to create a brand-ready aesthetic that feels authentic and warm.",
        demo: [],
        specialNote: false,
        videoUrls: [],
        imageRange: 2
    },

    {
        id: "CBY_SEC",
        categoryKey: "VISUAL_MEDIA",
        title: "Cybersecurity Challenge Prototype",
        year: "2012",
        keywords: [
            projectKeywords.instructionalDesign,
            projectKeywords.gamification,
            projectKeywords.simulation,
            projectKeywords.professional
        ],
        programs: [
            programKeywords.captivate,
            programKeywords.unity,
            programKeywords.photoshop
        ],
        description: "A gamified corporate training prototype designed to teach security awareness through interactive decision-making.",
        details: "Developed as an interactive training prototype using Adobe Captivate and Unity 3D to simulate a virtual office environment. Learners explore departments, identify potential security threats, and receive instant feedback based on their choices. Visual assets were created in Photoshop and integrated to enhance realism and immersion. The project demonstrated how gamification can transform traditional compliance content into an engaging and memorable learning experience.",
        demo: [],
        specialNote: true,
        videoUrls: [],
        imageRange: 5
    }


];