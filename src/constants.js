// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';

import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';


import cLogo from './assets/tech_logo/c.png';

import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's
// import webverseLogo from './assets/company_logo/webverse_logo.png';
// import agcLogo from './assets/company_logo/agc_logo.png';
import aaraLogo from './assets/company_logo/aara_logo.png';


// Education Section Logo's
import aktuLogo from './assets/education_logo/aktu_logo.png';
import bbaLogo from './assets/education_logo/bba_logo.png';
import jbiLogo from './assets/education_logo/jbi_logo.png';

// Project Section Logo's
import grosifyLogo from './assets/work_logo/grosify.jpeg';
import foodieLogo from './assets/work_logo/foodie.jpeg';
import ecommLogo from './assets/work_logo/ecomm.png';
import metaLogo from './assets/work_logo/meta.jpeg';
import chatLogo from './assets/work_logo/chat.jpeg';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  // {
  //   title: 'Backend',
  //   skills: [
  //     { name: 'Springboot', logo: springbootLogo },
  //     { name: 'Node JS', logo: nodejsLogo },
  //     { name: 'Express JS', logo: expressjsLogo },
  //     { name: 'MySQL', logo: mysqlLogo },
  //     { name: 'MongoDB', logo: mongodbLogo },
  //     { name: 'Firebase', logo: firebaseLogo },
  //   ],
  // },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    // {
    //   id: 0,
    //   img: webverseLogo,
    //   role: "Fullstack Developer",
    //   company: "Webverse Digital",
    //   date: "April 2024 - Present",
    //   desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    //   skills: [
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //     "React JS",
    //     "TypeScript",
    //     "Node JS",
    //     "Tailwind CSS",
    //     "MongoDb",
    //     "Redux",
    //     " Next Js",
    //   ],
    // },
    // {
    //   id: 1,
    //   img: agcLogo,
    //   role: "Fullstack Engineer",
    //   company: "Agumentik Group of Companies",
    //   date: "July 2023 - March 2024",
    //   desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    //   skills: [
    //     "ReactJS",
    //     "Redux",
    //     "JavaScript",
    //     "Tailwind CSS",
    //     "HTML",
    //     "CSS",
    //     "SQL",
    //   ],
    // },
    {
      id: 1,
      img: aaraLogo,
      role: "React Developer Training",
      company: "Aara Groups",
      date: "January 2025 - March 2025",
      desc: " A passionate React Developer skilled in building dynamic, responsive, and user-friendly web applications. Experienced in working with React.js, JavaScript, HTML, and Tailwind CSS. Always eager to learn new technologies and create seamless user experiences.",
      skills: [
        "HTML",
        "Tailwind CSS",
        "Javascript",
        "React",
      ],
    },
  ];
  
  export const education = [
   
    {
      id: 0,
      img: aktuLogo,
      school: "Shambhunath Institute of Engineering and Technology, Prayagraj",
      date: "August 2020 - June 2024",
      grade: "65.9%",
      desc: "A  B.Tech graduate in Computer Science Engineering with a strong foundation in programming, data structures, and web technologies. Passionate about developing efficient solutions, learning emerging technologies, and building a successful career in software development.",
      degree: "Bachelor of Technology - Btech (Computer science engineering)",
    },
    {
      id: 1,
      img: bbaLogo,
      school: "Brijnandani Convent School, Chandauli",
      date: "July 2019 - july 2020",
      grade: "69%",
      desc: "I completed my class 12 education from Brijnandani Convent School, Chandauli , under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE Board(XII) - PCM ",
    },
    {
      id: 2,
      img: jbiLogo,
      school: "Brijnandani Convent School, Chandauli",
      date: "July 2017 - May 2018",
      grade: "80.4%",
      desc: "I completed my class 10 education from Brijnandani Convent School, Chandauli , under the UP Board with a strong academic foundation and interest in technology and learning.",
      degree: "CBSE Board (X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Grocify Website",
      description:
        "A powerful and user-friendly React.js application designed to Grocify is your one-stop online grocery store offering fresh fruits, vegetables, and daily essentials at the best prices .",
      image: grosifyLogo,
      tags: ["HTML", "Tailwind CSS", "JavaScript", "React JS",],
      github: "https://github.com/Amit9956/Dealshare",
      webapp: "https://dealshare-tau.vercel.app/",
    },
    {
      id: 1,
      title: "Foodie Website",
      description: "Foodie is a modern online platform designed to connect food lovers with their favorite restaurants, cuisines, and dining experiences. We bring convenience, variety, and taste together — making every meal a delightful experience.",
      image: foodieLogo,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Amit9956/Foodie_Website",
      webapp: "https://tourmaline-pie-d547d3.netlify.app/",
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description:
        "A fully responsive E-Commerce website built with modern web technologies to ensure smooth navigation, product filtering, secure checkout, and dynamic user experience.",
      image: ecommLogo,
      tags: ["React JS",  "HTML", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/Amit9956/LynkWebSite",
      webapp:"https://lynk-web-site.vercel.app/"
    },
    
    {
      id: 3,
      title: "Meta Clone",
      description:
        "A fully responsive Meta Clone landing page showcasing modern UI, dynamic content updates, and seamless user interaction — crafted using React and Tailwind CSS.",
      image: metaLogo,
      tags: ["HTML", "Tailwind CSS"],
      github: "https://github.com/Amit9956/Meta-Clone",
      webapp: "https://developer32144.netlify.app/",
    },
    {
      id: 4,
      title: "Chat3 Clone",
      description:
        "A Chat3 Clone providing AI-like conversational experience with real-time message exchange, responsive UI, and smooth animations.",
      image: chatLogo,
      tags: ["HTML", "Tailwind CSS" ],
      github: "https://github.com/Amit9956/chat3",
      webapp: "https://amit3.netlify.app/",
    },
  ];  