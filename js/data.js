const portfolioOwner = {
    name: "Dominique Thomas",

    theme: {
        mode: "light",
        accent: "#5B3FD9"
    },

    hero: {
        headline: "Hi, I'm Dominique.",
        highlight: "Dominique.",
        subline: "I design learning experiences and the tools around them, from interactive content to the workflows behind it."
    },

    about: [
        "I'm Dominique, an instructional designer who also works across UX, multimedia, and front-end development. For 10+ years I've built eLearning, simulations, and interactive tools that help people explore and practice complex ideas.",
        "I enjoy mixing tools and techniques to create experiences that are engaging and memorable, while keeping the design clean and focused."
    ],

    toolkit: [
        { label: "Authoring", tools: ["Articulate Storyline 360", "Articulate Rise 360", "Adobe Captivate"] },
        { label: "Design & Media", tools: ["Adobe Creative Suite", "Canva"] },
        { label: "Code & Development", tools: ["HTML", "CSS", "JavaScript", "SQL", "Unity 3D"] },
        { label: "LMS & Standards", tools: ["Blackboard", "Moodle", "Cornerstone (Saba)", "SCORM"] },
        { label: "Workflow", tools: ["Git", "GitHub", "Jira", "MS Project"] },
        { label: "AI & Emerging Technology", tools: ["ChatGPT", "Claude", "Gemini"] }
    ],

    stats: [
        { number: 10, suffix: "+", label: "Years of experience" },
        { number: 200, suffix: "+", label: "Learning & media projects" },
        { number: 50, suffix: "+", label: "Simulations & videos" },
        { number: 3, suffix: "+", label: "Core disciplines" }
    ],

    contact: {
        heading: "Let's work together",
        text: "Have a project, an idea, or just want to say hi? I'd love to hear from you.",
        button: {
            label: "Connect on LinkedIn",
            url: "https://www.linkedin.com/in/dominique-thomas-ab56b433/"
        }
    },

    socials: [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/dominique-thomas-ab56b433/" },
        { label: "YouTube", url: "https://www.youtube.com/@thesoftstackstudio" },
        { label: "Blog", url: "https://softstack-notes.hashnode.dev/" }
    ],

    blogUrl: "https://softstack-notes.hashnode.dev/",

    moreWork: {
        desktop: 6,
        mobile: 4
    }
};

const projectKeywords = {
    ar: "Augmented Reality",
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
    graphicDesign: "Graphic Design",
    threeD: "3D Design",
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
    generativeAI: "Generative AI Tools",
    adobe3D: "Adobe Substance 3D / Dimension"
};

let data = [

    {
        id: "STEADY_TALK",
        featured: true,
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
        blogPost: "",
        specialNote: false,
        videoUrls: [],
        imageRange: 4
    },

    {
        id: "VIRTU_CARE",
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
        details: "Designed as a guided patient-encounter experience where learners interview a virtual patient, select or ask follow-up questions, and receive scenario-based responses. At the end of the encounter, the system delivers a feedback summary highlighting information gathered, missed questions, and communication choices. Built as a web-accessible experience with supporting media edited in Premiere Pro.",
        demo: [
            { title: "Visit VirtuCare Simulation", link: "https://dominique-thomas.github.io/virtu-care/" }
        ],
        blogPost: "",
        specialNote: false,
        videoUrls: [],
        imageRange: 4
    },

    {
        id: "MENTOR_SPACE",
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
        blogPost: "",
        specialNote: false,
        videoUrls: [],
        imageRange: 4
    },

    {
        id: "TRBL_AR",
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
        blogPost: "https://softstack-notes.hashnode.dev/troubleshootar-an-approach-to-it-troubleshooting",
        specialNote: false,
        videoUrls: [],
        imageRange: 4
    },

    {
        id: "DAILY_UPLIFT",
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
        blogPost: "https://softstack-notes.hashnode.dev/daily-uplift-a-mindful-pwa-for-affirmations",
        specialNote: false,
        videoUrls: [],
        imageRange: 2
    },

    {
        id: "COMP_BRAND",
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
        blogPost: "",
        specialNote: false,
        videoUrls: [],
        imageRange: 10
    },

    {
        id: "UNA_TRAIN",
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
        blogPost: "",
        specialNote: false,
        videoUrls: [],
        imageRange: 4
    },

    {
        id: "DINN_SIMU",
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
        blogPost: "",
        specialNote: false,
        videoUrls: [],
        imageRange: 3
    },

    {
        id: "COSMO_BRAND",
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
        blogPost: "",
        specialNote: false,
        videoUrls: [],
        imageRange: 2
    },

    {
        id: "CBY_SEC",
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
        blogPost: "",
        specialNote: true,
        videoUrls: [],
        imageRange: 5
    }

];