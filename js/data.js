
//class project, instructional design, graphic design, group leader, award winning
//Corporate Project, personal project, gamification, video editing, in-house solution, LMS, FREELANCE

//target='_blank'

//Tags: ["Personal Projects", "Professional Projects", "Web Design", "Graphic Design", "Video Editing", "Product Branding", "Instructional Design", "Gamification", "Featured", "3D Development"]

/*
   {
        id:"ETH_COM", 
        title: "Building Ethical Competence", 
        keywords: ["Class Project", "Instructional Design", "Graphic Design"],
        year: "2012", 
        role: "", 
        scope: "", 
        solution: "", 
        reflection: "",
        specialNote: false,
        imageRange: 6
    },
*/

let data = [

    {
        id:"DINN_SIMU", 
        title: "Pre-Dinner Prep Simulation", 
        keywords: ["Personal Project", "Instructional Design", "Featured"],
        year: "2024", 
        role: "I designed and developed both the simulation and the website that hosts it.", 
        scope: "Recognizing the challenges of showcasing live simulations from past projects, I set out to create a new project that demonstrates my expertise in simulation development, utilizing the 3D game engine <a href='https://unity.com/' target='_blank' title='Unity'>Unity</a>. This project is designed for an audience aged 16 and older.", 
        solution: "I used the <i>Unity</i> game engine to help design a simulation centered around the experience of preparing for a dinner party. Students assume the role of a homeowner tasked with completing various party preparations, such as tidying up the living room and assembling a dining room table. The simulation offers high interactivity and exploration within the confines of the house, allowing students to click on labeled interactive areas to receive feedback. Some interactions require specific tools or materials to complete a task, adding depth to the experience.", 
        reflection: "I believe that simulations should strike a balance between realism and enjoyment. In this simulation, I opted for a relatable scenario to captivate a diverse audience. I attempted  to embody this philosophy by integrating informative elements such as a to-do list and  an instruction manual, as well as enjoyable elements such as exploration. My aim was to create an experience that is both informative and engaging to the student.<br><br>During the development process, I encountered challenges that tested my problem-solving skills. Despite facing obstacles, I persevered by finding workarounds.<br><br>This project was a lot of fun and offered me a rare opportunity to delve into simulation development using a game engine. It serves as a constant motivation for me to continually hone and refine my skills in this field.",
        demo: [{title: "", link: "https://dominique-thomas.github.io/pre_dinner_prep_simulation/"}],
        specialNote: false,
        imageRange: 5
    },


    {
        id:"IMP_BIAS", 
        title: "Implicit Bias eLearning Website and Training", 
        keywords: ["Personal Project", "Instructional Design", "Web Design", "Video Editing", "Featured"],
        year: "2024", 
        role: "For this project, I designed and developed the website and videos. Additionally, I handled uploading and timing the closed captions (CC). I also set up and uploaded the training to SCORM Cloud, a Learning Management System (LMS).", 
        scope: "Given the limitations on showcasing live training from previous projects, I wanted to create a project that highlights my expertise in instructional design, multimedia design, and web design. This training is intended for a corporate training setting and can be conducted in a self-paced eLearning environment. The target audience for this project is individuals 18 and older.", 
        solution: "I created several videos to introduce students to the concept of implicit biases, a topic that is seen in all aspects of life. These videos cover major topics such as the origins of biases, common types of implicit biases, and strategies for mitigating these biases.<br><br>To complement the videos, I developed a webpage that displays them and includes features typical of a traditional eLearning course, such as navigational controls and a slide indicator. The site also enhances learning retention with additional content like reflection questions, resources, quizzes, and a final assessment.<br><br>The site tracks student progress and completion status and functions in both a stand-alone platform in a browser or within a LMS. I chose this dual functionality to provide flexibility, as many courses benefit from the ability to stand alone or integrate with an LMS for metrics tracking and retention rate analysis.<br><br>While creating a site from scratch takes more time, it offers greater flexibility to add robust features not available in traditional authoring programs, such as interactive closed captioning and incorporating high-end simulations. Additionally, building from scratch allows for reusability and expansion of the existing baseline as needed.", 
        reflection: "This project was interesting and more challenging than I anticipated. Finding appropriate videos to illustrate the concepts took longer than expected. Additionally, developing the site was time-consuming. Despite my previous experience with video and website development, I assumed this project would be straightforward. However, I encountered unforeseen challenges that extended the development time. This eye-opening experience taught me to avoid making such assumptions in the future and to better anticipate/mitigate potential obstacles in future projects.<br><br>Ultimately, this project allowed me to further practice and refine my three aforementioned skill sets to better create comprehensive and flexible eLearning solutions.",
        demo: [{title: "stand-alone website", link:"https://dominique-thomas.github.io/implicit_biases_awareness/"}, {title: "LMS - registration required", link: "https://app.cloud.scorm.com/sc/InvitationConfirmEmail?publicInvitationId=c0d7fb27-e071-4ae9-b284-7dd88649f132"}],
        additional_demo: "Note that it's recommended to explore the stand-alone website first. While the LMS version offers the same content, it limits registration to 10 students at a time, managed on a first-come, first-served basis. For guidance on LMS registration, view this <a href='documents/Quick Guide - Access Training in SCORM Cloud.pdf' target='_blank' title='Quick Start Guide'>Quick Start Guide</a>.",
        specialNote: false,
        imageRange: 7
    },

    {
        id:"UNA_TRAIN", 
        title: "Unanet eLearning Website/Micro-Course & Simulation", 
        keywords: ["Personal Project", "Instructional Design", "Web Design", "Video Editing", "Featured"],
        year: "2024", 
        role: "For this project, I modified the website I originally built for the <a href='projects.html?id=IMP_BIAS'>Implicit Biases</a> project. I also produced videos with closed captions (CC) and designed the final assessment simulation.", 
        scope: "I wanted to create a project that highlights my expertise in instructional design, multimedia design, and web design. This training is intended for a corporate training setting and can be conducted in a self-paced eLearning environment. The target audience for this project is individuals 18 and older.", 
        solution: "I created a series of videos to teach students about the legacy Unanet v. 22.1.6 web application. The training focused on the most commonly used components of the timesheet web application. Specifically, the videos covered tasks under the Time menu, such as creating, editing, previewing, and submitting timesheets, as well as adding project codes. The training also addressed tasks under the My Account menu, including changing passwords and logging out of the web application.<br><br>To complement the training, I developed a final assessment simulation that allows students to test their understanding of the tasks covered.  Once all tasks are completed, students can submit their work for grading.", 
        reflection: "Unlike my previous project where I uploaded the course to a Learning Management System (LMS), this project mainly focused on the videos and software simulation. I leveraged a previously built webpage to save development time by updating the site's color scheme and adding new site features.<br><br>The final assessment simulation was both my favorite and most challenging part of the project. I pride myself on being detail-oriented, so I worked hard to closely replicate both the email and Unanet applications to ensure the simulation felt realistic. While I successfully recreated much of the functionality some elements were too time-consuming to implement in the HTML5 canvas.<br><br>Though this isn't my first simulation, it's one of the most detailed I've worked on in a while. The added attention to detail, combined with technical challenges, made the development process more time-consuming than I initially anticipated. Overall, I'm proud of how the project turned out.",
        demo: [{link:"https://dominique-thomas.github.io/unanet_training/"}],
        specialNote: false,
        imageRange: 7
    },


    {
        id:"ELEA_ASSE", 
        title: "eLearning Website/Course (Level 3 Interactivity)", 
        keywords: ["Professional Project", "Web Design", "Instructional Design"],
        year: "2021", 
        role: "I was responsible for developing the website. I also worked with and led a small team who developed an eLearning course using the aforementioned website.", 
        scope: "I was tasked with creating a website that could present eLearning content. The website was required to support MP4 and HTML media. Additionally, the site was required to be 508 compliant and SCORM conformant. Finally, the website had to have the ability to support <a href='https://community.articulate.com/articles/get-to-know-the-4-levels-of-e-learning' target='_blank' title='Level 3 Interactivity Overview'>Level 3 Interactivity</a>. In addition to making the site, I also worked on a team to develop a course that covered radar theory and operations.", 
        solution: "I followed design specifications to develop a sleek and modern look for the website. In addition, I incorporated JSON files to auto-populate module titles, navigation menus, content order, resources, and Closed Captions (CC). These files allowed developers to modify course-wide content with little effort, saving them time in the long run.<br><br>Moving on, I also created an Application Programming Interface (API) that supports Level 3 Interactivity. This level of interactivity could be seen in our Practical Exercise (PEs) scenarios.  We had three types of branching procedure scenarios: removal, replacement, and troubleshooting. In each exercise, students were required to perform an action for each step in the procedure. Often, students were required to use tools/parts located in the virtual bin. Students had to use the correct tool/part on the hardware prior to proceeding to the next step. Students were given tailored feedback depending on how they interacted with the hardware.", 
        reflection: "I enjoyed developing the interactivity for the Tools and Parts bin. It was challenging interfacing with my code and the HTML5 canvas library that the developers used.  It took a lot of planning and testing to get the desired functionality. This project was also interesting because I had the opportunity to be a team lead. Balancing these various roles was challenging. I was able to handle this workload due to careful planning and time management.",
        demo: [],
        specialNote: true,
        imageRange: 3
    },

    {
        id:"COSMO_BRAND", 
        title: "Organic Coffee 3D Mockup", 
        keywords: ["Personal Project", "3D Development", "Graphic Design", "Product Branding"],
        year: "2020", 
        role: "For this project, I invented a coffee brand named Cosmo's Organic Coffee. During the project lifecycle, I determined the goal, target audience, brand styling, and logo.", 
        scope: "I created this project because I wanted more practice creating 3D brand advertisements. Moreover, I wanted to make a coffee brand that looked modern and natural. I targeted adults ages 18+ years of age with mid-income ranges.", 
        solution: "I chose to create the project in 3D as it is more versatile than other mediums and allowed me to make quick changes to the mockup. I drew inspiration from a well-known brand named Cameron's Specialty Coffee. By the end of the project, I presented the brand using techniques similar to other popular advertisement campaigns. I chose to use a clean background, a simple logo, and earth tones to draw attention to the brand.", 
        reflection: "Although the models are quite simplistic, I was challenged with lighting and texturing.  Overall, this was a fun and quick project that gave me a chance to practice 3D development-a medium that I don't get to work in as often as I used to.<br><br>In a poignant connection, the brand name Cosmo serves as a tribute to my beloved pup who passed in 2023.",
        demo: [],
        specialNote: false,
        imageRange: 2
    },

    {
        id:"VIRT_CLASS", 
        title: "eLearning Website/Course with Gamification", 
        keywords: ["Professional Project", "Gamification", "Instructional Design", "Web Design"],
        year: "2019", 
        role: "I was the website developer for this project. I was also responsible for developing templates for developers to create Practical Exercises (PEs) and Check-on-Learning (CoL) content. Additionally, I developed the <a href='https://www.gamify.com/what-is-gamification' target='_blank' title='Gamification Overview'>gamification</a> component for this website. Finally, I worked with a team of developers to create eLearning course content using the aforementioned website and templates.", 
        scope: "For this project, I was required to create a responsive website that played eLearning content that taught tactical software. The supported media was MP4,  Adobe Small Web Format (SWFs), and HTML5 media. I was also required to make the site 508 Compliant and SCORM conformant. Finally, I was required to incorporate a gamification piece into the website that let students take a break from the training. My teammates used these assets to create a course that covered radar software.", 
        solution: "I incorporated JSON files into the site's architecture that auto-populated the course title, navigation menu, set the lesson/content order, specified the transcript/resources, and set Closed Captions. These files allowed developers the flexibility to reorder and modify lessons without having to wait for User Interface changes. This saved a lot of time in the long run as changes could be made relatively quickly. I also created a small Application Programming Interface (API) that allowed developers to specify the completion status of their PEs and CoL content.<br><br>Finally, I created the gamification piece. I choose to create a virtual classroom as it coincides with what the student would see in real life. I created several characters and hotspots which the student could interact with. After finishing the website and gamification component, I helped create the course content. We used screen capture software to get imagery from the actual software to help teach concepts and build interactive branching exercises.", 
        reflection: "I enjoyed this project although we ran into a lot of problems along the way. The hardest part of this project was ensuring that everything was SCORM conformant and could be uploaded to a Learning Management System. I spent a long time testing the architecture and ensuring that every piece of the project had progress tracking for both stand-alone and online versions. I created several validation functions to check for this connectivity. Although it was one of the most enjoyable aspects to create, I especially had a tough time with the gamification piece. I had to create two variations of the code, one that supported high-bandwidth devices and one for low-bandwidth devices. Although we ran into a few problems, it was a truly unique learning experience.",
        demo: [],
        specialNote: true,
        imageRange: 6
    },

    {
        id:"CARR_HILL", 
        title: "Carriage Hills Christian Church Website", 
        keywords: ["Professional Project", "Web Design"],
        year: "2018", 
        role: "I developed the website for the <a href='chcclawton.com' target='_blank'>Carriage Hills Christian Church</a> (CHCC).", 
        scope: "The client requested that I create a website for the CHCC. The client specified that the site should consist of a Home, Sermons, Photo Album, Calendar, and Admin page.", 
        solution: "During each development phase, I presented my work to the client and received approval. I kept the client involved throughout the entire process, starting from initial planning to the final upload.<br><br>One feature that I added that really stood out was the use of JSON files. These files helped in-house developers update content for the Gallery, Sermon's page, and Calendar without needing to update the HTML files directly. This would save in-house developers several hours of development time and reduce the likelihood of page errors.", 
        reflection: "This project taught me how to better document my development progress, create and follow a development schedule, and better organize my deliverable artifacts.",
        demo: [],
        specialNote: false,
        imageRange: 2
    },

    {
        id:"KIN_INP", 
        title: "Kinetic Input Product Branding", 
        keywords: ["Professional Project", "Web Design", "Graphic Design", "Video Editing", "Product Branding"],
        year: "2017", 
        role: "I developed the product branding for the startup company Kinetic Input.  Specifically, I created the website, logo, product demo presentation, demo videos, and set up social media accounts.", 
        scope: "The purpose of this product branding was to demonstrate to potential investors the capabilities of the software. Furthermore, the purpose of the software was to ensure individuals performed physical therapy exercises at home. The software would keep track of the number of reps per exercise and acceptable ranges of motions. Unacceptable ranges of motion were recorded and discussed at the end of the exercise.", 
        solution: "This was an unpaid freelance project that I worked on to get more experience developing product branding. I worked closely with the client to ensure the aforementioned branding followed design specifications. The client showcased the website and business cards to local physical therapists to get their input.", 
        reflection: "This project gave me a lot of first-hand experience working closely with a client. This project taught me a lot about how to balance project goals and how to better manage my time.",
        demo: [],
        specialNote: false,
        imageRange: 5
    },

    {
        id:"FOUN_BALL", 
        title: "Foundations of Ballistics Vignettes", 
        keywords: ["Professional Project", "Video Editing","3D Development"],
        year: "2014", 
        role: "I worked with other developers to set up the 3D environment, render image stills, and animate several video vignettes.", 
        scope: "Our manager expressed the need to create video vignettes that explain the foundations of ballistics. In particular, our manager wanted us to incorporate 3D imagery and motion graphics to appeal to younger students ranging from ages 18-30.", 
        solution: "The video vignettes illustrated some of the factors that affect a round's trajectory, such as target location, air density, and weapon condition (to name a few). We used Technical Manual specifications to help us create the 16 video vignettes. We demoed these vignettes at business development conferences, as well as during in-person company tours. The following images are stills from one vignette that covers a target's position.", 
        reflection: "This was an interesting project that allowed me to use my various skillsets including 3D manipulation, image editing, and video editing. What I found interesting about this project the most was that we were able to reuse previously created video assets as well as the 3D environment. It was interesting seeing the workflow and how all the components fit together to make a cohesive whole.",
        demo: [],
        specialNote: true,
        imageRange: 3
    },

    {
        id:"WEB_GAM", 
        title: "eLearning Website and Game", 
        keywords: ["Professional Project", "Graphic Design", "Instructional Design", "Gamification"],
        year: "2013", 
        role: "I was responsible for developing a website and the gamification components for a radar course.", 
        scope: "I was tasked with creating a website that could play eLearning content. The website was required to support HTML media and SWFs. Additionally, the site was required to be 508 compliant and SCORM conformant so it could be uploaded to a locally managed LMS. Finally, the website had to contain gamification elements to promote learner motivation/engagement.", 
        solution: "For this project, I wanted the user to feel like they were a part of a game-like world. Upon logging into the course, students were presented with a map that contained various towns. Each town represented a mission (lesson) that must be completed in chronological order. Upon completing all missions, the student had the option to play a tower-defense game and print out their Certificate of Completion.<br><br>To further engage the student, I implemented an achievement system, where students could earn badges as they progressed throughout the course. I also created an Intel Point system, where students earned points as they correctly answered Check on Learning questions and completed missions. These points served as a form of currency. Finally, I created several characters that students could interact with during missions. The characters were intended for world-building and provided information about the fictitious country and tips on how to beat the tower-defense game.<br><br>I created XML files that auto-populated the course title, navigation menu, set the lesson/content order, specified the transcript/resources, and set Closed Captions. I also created XML files to dynamically change the text of the characters as needed. These files allowed developers the flexibility to reorder and modify lessons without having to wait for UI changes. We were able to reuse the interface for three other Radar-specific projects, which saved quite a bit of development time and money. Additionally, this project was demoed during several in-person tours of our facility and was widely liked by attendees.", 
        reflection: "We had just lost our main programmer and I volunteered to be the lead for this task. Needless to say, this was a huge learning curve. Although daunting, I did extensive planning on how everything would flow and function.<br><br>I enjoyed designing the world and coming up with the gamification components for this project. Seeing how all the components come together at the end was worth the effort. This was one of the most challenging projects that I have ever worked on. Hands down, this is by far this is my favorite project!",
        demo: [],
        specialNote: true,
        imageRange: 5
    },

    {
        id:"CBY_SEC", 
        title: "Cyber Security Challenge Prototype", 
        keywords: ["Professional Project", "Instructional Design", "Gamification"],
        year: "2012", 
        role: "I was responsible for designing and developing this cybersecurity awareness prototype.", 
        scope: "My supervisor expressed the need to create this prototype. The prototype was intended to be presented to our manager so that it could eventually replace our in-house cybersecurity training, which many employees described as <span class='emphasis2'>boring</span> and <span class='emphasis2'>lacking</span> in information. Moreover, the prototype was intended to fill the gap in our existing training by providing common cybersecurity-related problems. I was granted creative freedom to design the prototype as I saw fit.", 
        solution: "I chose to incorporate real-world scenarios and gamification techniques to engage the learner. Moreover, the prototype was situated in a virtual office. I gave the student the ability to select various hotspots in the office to start a scenario. If the learner would gain or lose points depending on how they would respond to a cyber threat. All user responses were followed up with tailored feedback explaining what they could have done better if applicable. I presented the prototype to my manager and he was impressed.", 
        reflection: "This was another unique project where I ran into a problem early on. My manager initially wanted the content to be playable in a game engine; however, due to plugin issues on our system, I had to take a different approach. I had to scrap the game engine and switch to a different platform altogether. Fortunately, I was able to address the issue early on and create a working prototype.",
        demo: [],
        specialNote: true,
        imageRange: 5
    },

    {
        id:"ETH_COM", 
        title: "Building Ethical Competence Project", 
        keywords: ["Personal Project", "Instructional Design", "Graphic Design", "3D Development"],
        year: "2012", 
        role: "This was an individual project for the Theories, Pedagogies, and Tools for Online Learning (EIPT 6433) class. The project was titled Building Ethical Competence.", 
        scope: "The parameters for this project were to create a distance-learning instructional design product of our choice that uses strategies from the <a href='https://edutechwiki.unige.ch/en/R2D2' target='_blank' title='R2D2 Model'>Read, Reflect, Display, and Do</a> (R2D2) model. Moreover, this model is used to increase problem-solving skills using various hands-on activities. For this project, I chose to teach about workplace ethics and how to recognize/respond to ethical dilemmas.", 
        solution: "I used two design interventions for this project. The first intervention was an online Community of Practice website.  The second intervention was a scenario-based simulation, where the student assisted other employees at a fictitious company that I created called SimTec. Based on the R2D2 model, I provided methods for reading and reflecting using online article/video reviews, case studies, eLearning, and simulation discussion. I also allowed students to display their understanding of the concepts using a workplace Observational Log Sheet. Finally, I allowed students to transfer this knowledge by letting them create their own Ethical Guidelines document. Students were then given the opportunity to summarize their individual experiences throughout the class via a podcast/videocast.", 
        reflection: "This was one of my favorite projects that I worked on at OU, as I had the creative freedom to come up with my own virtual world where students could interact. I enjoy creating relatable characters and thought-provoking scenarios that leave a lasting impression on the student. I also had a lot of fun designing the logo, characters, and 3D environment.",
        demo: [],
        specialNote: false,
        imageRange: 6
    },

    {
        id:"ITS_SMR", 
        title: "ITS-SMR Project", 
        keywords: ["Personal Project", "Instructional Design", "Graphic Design"],
        year: "2011", 
        role: "I worked with a team of two others for my Instructional Design Theories and Multimedia Instruction (EIPT 6343) class project. The project was titled Intelligent Tutoring System, Self-Monitored Blood Glucose Records (ITS-SMR). I developed the design for the tutorial/simulation and helped develop the scenarios.", 
        scope: "My teammates and I were required to develop an instructional design product for newly diagnosed Type II diabetes patients. We were required to teach these patients how to read and use their self-monitored blood glucose records (SMR). We were also required to teach them about the effects of varying glucose levels on the body.", 
        solution: "My team decided to use various instructional design interventions. One intervention was a tutorial that presented basic information about managing blood glucose levels. Another intervention was a <a href='https://edutechwiki.unige.ch/en/Microworld' target='_blank' title='Micro-world'>micro-world</a> that allowed users to manipulate blood glucose levels and see what happens to the body in real-time. The last intervention was a simulation where the user takes on the role of a healthcare assistant who helps patients solve diabetes-related problems. In the simulation, the student learns from the doctor, an Intelligent Tutoring System (ITS).<br><br>The doctor's role is to guide the learner and ask probing questions as they interact with the patients. We chose these design interventions because we felt they would provide a solid foundation for patients to recognize the factors of increasing blood glucose levels and apply what they've learned in a realistic environment. This project is a self-awareness tool for the OU Health Sciences Center. In addition, this project was entered into the OU Student Research & Performance Day and won a prize.", 
        reflection: "This is another project that I really enjoyed working on! Although we weren't able to choose the learning topic, we were given the creative freedom to choose our own learning interventions. My favorite part was designing the characters with realistic backstories. I feel that this intrigues the student and keeps them interested in the topic.",
        demo: [],
        specialNote: false,
        imageRange: 6
    }
];