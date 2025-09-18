import { Education, Experience } from "portfolioManager";

const ABOUT = {
  education: [
    {
      id: "1",
      institute: "The University of Oklahoma",
      period: { from: "Dec, 2024", to: "Dec, 2026" },
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
      period: { to: "Feb 2025", from: "Aug 2022" },
      company: { name: "New School for Social Research", url: "https://cut.social" },
      role: {
        title: "Volunteer Developer/Researcher",
        description:
          "Building two research platforms: Cut (Lens) for psychological and behavioral studies, and Jamasp for wearables data collection to analysis.",
      },
    },
    {
      id: "2",
      period: { to: "2024", from: "2018" },
      company: { name: "Freelance", url: "" },
      role: {
        title: "Software and Web Developer",
        description:
          "Delivered a wide range of web apps using Java, React, PHP, static sites, and GCP—across greenfield builds and modernizations.",
      },
    },
    {
      id: "3",
      period: { to: "2018", from: "2016" },
      company: {
        name: "BongaMonga®",
        url: "https://bongamonga.ir",
      },
      role: {
        title: "Software Engineer",
        description:
          "Built a web/mobile real‑estate platform for listings, search, and rentals.",
      },
    },
    {
      id: "4",
      period: { to: "2016", from: "2015" },
      company: { name: "WhiteOx", url: "" },
      role: {
        title: "Software Engineer",
        description:
          "Worked on building a platform for online multi-player card games.",
      },
    },
    {
      id: "4",
      company: { name: "Ratnic", url: "https://ratnic.se/" },
      period: { to: "2015", from: "2014" },
      role: {
        title: "Software Engineer/Co-Founder",
        description:
          "Developed a social platform with quiz‑driven engagement and rewards.",
      },
    },
    {
      id: "5",
      company: { name: "IRS", url: "" },
      period: { to: "2014", from: "2013" },
      role: {
        title: "Software Engineer",
        description:
          "Designed and developed the front‑end for Clonet, a firewall appliance solution.",
      },
    },
    {
      id: "6",
      company: { name: "ICT Research institute", url: "https://en.itrc.ac.ir/" },
      period: { to: "2013", from: "2012" },
      role: {
        title: "Research Engineer/Developer",
        description:
          "Developed a knowledge management platform for automated network attack reporting using OWL ontologies and logic reasoning.",
      },
    },
  ],
} satisfies
  | Record<"education", Education[]>
  | Record<"experience", Experience[]>;

export default ABOUT;
