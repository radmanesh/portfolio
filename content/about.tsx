import { Education, Experience } from "portfolioManager";

const ABOUT = {
  education: [
    {
      id: "1",
      institute: "The University of Oklahoma",
      period: { from: "Jan, 2024", to: "Dec, 2026" },
      degree: "Masters of Science in Data Science and Analytics",
    },
    {
      id: "2",
      institute: "Amirkabir University of Technology",
      period: { from: "Sep, 2004", to: "Aug, 2011" },
      degree: "Bachelor of Science in Software Engineering",
    },
  ],
  experience: [
    {
      id: "1",
      period: { to: "present", from: "2022" },
      company: { name: "New School for Social Research", url: "https://cut.social" },
      role: {
        title: "Developer/Researcher",
        description:
          "Working on two projects: 1. cut.social, a psychological and behavioral research platform, 2. som3aware, a knowledge engineering and AI platform",
      },
    },
    {
      id: "2",
      period: { to: "present", from: "2006" },
      company: { name: "Freelance", url: "" },
      role: {
        title: "Freelance Software and Web Developer",
        description:
          "Developed developed a wide range of web applications using Java, ReactJS, PHP, Static Websites, Google Cloud Platform, and much more.",
      },
    },
    {
      id: "3",
      period: { to: "2018", from: "2015" },
      company: {
        name: "BongaMonga®",
        url: "https://bongamonga.ir",
      },
      role: {
        title: "Software Engineer",
        description:
          "Worked on building web/mobile realstate online selling and renting platform",
      },
    },
    {
      id: "4",
      company: { name: "Ratnic", url: "https://ratnic.se/" },
      period: { to: "2014", from: "2015" },
      role: {
        title: "Research Engineer/Developer",
        description:
          "Developed a social platform where users could win by completing quizzes.",
      },
    },
    {
      id: "5",
      company: { name: "IRS", url: "" },
      period: { to: "2013", from: "2014" },
      role: {
        title: "Software Engineer",
        description:
          "Designed and developed a front-end web-application for “Clonet”; a firewall appliance solution.",
      },
    },
    {
      id: "6",
      company: { name: "ICT Research institute", url: "https://en.itrc.ac.ir/" },
      period: { to: "2012", from: "2013" },
      role: {
        title: "Research Engineer/Developer",
        description:
          "Developed an experimental knowledge engineering and semantic methods, primarily focused on ontology and logic.",
      },
    },
  ],
} satisfies
  | Record<"education", Education[]>
  | Record<"experience", Experience[]>;

export default ABOUT;
