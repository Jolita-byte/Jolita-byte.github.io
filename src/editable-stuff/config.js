// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Jolita",
  middleName: "",
  lastName: "Gedminaitė",
  message: " Passionate about changing the world with technology. ",
  icons: [
    // {
    //   image: "fa-github",
    //   url: "https://github.com/hashirshoaeb",
    // },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/hashirshoaeb",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/hashirshoaeb/",
    // },
    {
      image: "fa-linkedin",
      url: "www.linkedin.com/in/jolita-gedminaite",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/JolitaFoto.jpg"),
  imageSize: 375,
  message:
  "I am experienced Software Developer with a Master's in Computer Science, seeking a challenging position in the field of data analytics or data science to leverage my 16 years of experience in software development. Proficient in full software development lifecycles, system implementation, and consultation. Skilled in business analysis, problem-solving, quality assurance, and data processing. <p> My technical expertise includes knowledge in SQL, Python, Power BI, Machine Learning, data processing, and data warehousing. I am committed to delivering high-quality results through a combination of strong work ethic, a passion for learning, and a dedication to excellence. <p> I am eager to contribute my skills and experience to a dynamic team and drive innovative data-driven solutions.",
  resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Jolita-byte", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/JolitaFoto.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/JolitaFoto.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Business Analytics & Process Improvement", value: 100 },
    { name: "Software Development Process Management", value: 100 },
    { name: "Software Implementation", value: 100 },
    { name: "Data Analytics", value: 80 },
    { name: "Data Structures", value: 80 },
    { name: "Data Warehousing", value: 80 },
    { name: "ETL Processes", value: 40 },
    { name: "Business Intelligence", value: 80 },
    { name: "Programming Principles", value: 50 },
    { name: "GIT", value: 50 },
    { name: "SQL", value: 50 },
    { name: "Python", value: 50 },
    { name: "Java", value: 20 },
    { name: "React", value: 10 },
    { name: "HTML/CSS", value: 70 },
  ],
  softSkills: [
    { name: "Problem-Solving", value: 100 },
    { name: "Critical Thinking", value: 100 },
    { name: "Goal-Oriented", value: 100 },
    { name: "Adaptability", value: 100 },
    { name: "User Training", value: 100 },
    { name: "Documentation", value: 100 },
    { name: "Communication", value: 100 },
    { name: "Collaboration", value: 100 },
  ],

  langSkills: [
    { name: "Lithuanian", value: 100 },
    { name: "English", value: 80 },
    { name: "Russian", value: 20 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Junior Data Analyst, Junior Data Scientist or Businiss Inteligence Analyst position opportunities! If you know of any positions available or if you have any questions, please feel free to email me at",
  email: "jolita.gedminaite1@gmail.com",
  phoneMessage: "or call",
  phone: "+37064884404"
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Business Central Consultant',// Here Add Company Name
      companylogo: require('../assets/img/Softera.png'),
      date: ' 2011 September – 2024 June',
      responsibilities: 
      `**Project Management:** Developed comprehensive project plans, managed priorities, and established timelines. Allocated tasks effectively to developers, ensuring efficient project execution.
        **Business Analysis:** Conducted thorough requirements gathering and analysis to understand client needs. Mapped and optimized business processes to improve efficiency and effectiveness.
        Software Development: Designed, developed and tested accounting, payroll and leasing software solutions, including customizations. Conducted communication with team members and stakeholders. Ensured software quality and functionality through rigorous testing and quality assurance processes.
        Customer Support: Provided timely technical assistance and training to clients. Resolved client issues promptly and effectively, addressing inquiries with a customer-centric approach.
        Documentation and User Training: Developed comprehensive requirement and functional documentation, as well as user manuals. Conducted informative user training sessions to enable clients to effectively utilize the software.`
    },
    {
      role: 'Quality Assurance Engineer',// Here Add Company Name
      companylogo: require('../assets/img/elsis_pro.jpg'),
      date: '2008 February – 2011 September',
    },
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
