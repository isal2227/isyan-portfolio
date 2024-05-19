import { three } from "maath";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    ig,
    linkedin,
    ig2,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Graphic Design",
      icon: web,
    },
    {
      title: "3D Visuals",
      icon: mobile,
    },
    {
      title: "Social Media Strategy",
      icon: backend,
    },
    {
      title: "Video Editing",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Blender",
      icon: html,
    },
    {
      name: "Photoshop",
      icon: css,
    },
    {
      name: "Premiere",
      icon: javascript,
    },
    {
      name: "AfterEffect",
      icon: typescript,
    },
    {
      name: "Capcut",
      icon: nodejs,
    },
    {
      name: "Lightroom",
      icon: redux,
    },
    /*{
      name: "React",
      icon: reactjs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },*/
  ];
  
  const experiences = [
    {
      title: "Finishing Product",
      company_name: "PT. GALENIUM PHARMASIA",
      icon: starbucks,
      iconBg: "#ffffff",
      date: "Jul 2017 – Aug 2018",
      points: [
        "Performing final packing in the production process.",
        "Recording activities and outcomes of the final stage on the Batch Product sheet.",
        "Generating and printing Batch numbers on each product.",
      ],
    },
    {
      title: "Front-end Game Developer",
      company_name: "PT. SAMUDRA KREATIF STUDIO",
      icon: tesla,
      iconBg: "#ffffff",
      date: "Nov 2018 - Aug 2020",
      points: [
        "Responsible for the creation and management of various company games on the Android platform.",
        "Developing games using the C Sharp (C#) programming language and Unity Technologies software.",
        "Providing guidance and concept themes for games to be developed to the team.",
        "Coordinating with company leadership regarding games requested by clients.",
        "Handing over and coordinating with the Back-end for the games developed.",
      ],
    },
    {
      title: "Online Food Driver",
      company_name: "PT. SHOPEE INDONESIA",
      icon: shopify,
      iconBg: "#ffffff",
      date: "Jul 2021 - Oct 2022",
      points: [
        "Responsible for maintaining and delivering food ordered by customers.",
        "Memorizing local routes and conducting deliveries using Google Maps.",
        "Communicating with customers about the details and availability of food.",
      ],
    },
    {
      title: "Social Media Designer",
      company_name: "PT HSK BIO DERMA",
      icon: meta,
      iconBg: "#ffffff",
      date: "Nov 2022 - Present",
      points: [
        "Devised monthly content calendars to align with marketing objectives and seasonal trends.",
        "Conducted regular competitor analysis to stay ahead of industry trends and incorporate innovative content strategies.",
        "Designed visually appealing graphics for daily Instagram stories and feeds, increasing follower engagement by 40%.",
        "Pioneered the use of 3D visuals for product showcases, resulting in a 25% increase in online engagement and a 15% rise in click-through rates.",
        "Managed and executed digital campaigns across multiple social media platforms, leading to a 30% increase in brand visibility.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testi1:"LinkedIn",
      testimonial:
        "This is my Linekdin profile. You can check it out to know more about me. And if you want to connect with me, you can send me a request.",
      name: "Isyan Febriyana",
      designation: "on",
      company: "LinkedIn",
      image: linkedin,
      source_code_link: "https://instagram.com/hsksecret.id",
    },
    {
      testi2:"Instagram",
      testimonial:
        "I post about new tecnologies and other geeky stuffs on instgram as a hobby. Want to be updated with the latest technologies? Follow me.",
      name: "isyanfbryn",
      designation: "on",
      company: "Instagram",
      image: ig2,
      source_code_link: "https://instagram.com/isyanfbryn",
    },
    {
      testi3:"Instagram",
      testimonial:
        "This is my second account, showcasing the results of my work on various projects, featuring creative solutions and innovative designs.",
      name: "isyandesign",
      designation: "on",
      company: "Instagram",
      image: ig2,
      source_code_link: "https://instagram.com/isyandesign",
    },
  ];
  
  const projects = [
    {
      name: "Campaign Designs for Brand Awareness",
      description:
        "Here, I've incorporated innovative graphic elements and compelling copywriting to capture the essence of each brand, resulting in increased engagement and follower growth.",
      tags: [
        {
          name: "instagram",
          color: "blue-text-gradient",
        },
        {
          name: "graphicdesign",
          color: "green-text-gradient",
        },
        {
          name: "elements",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://instagram.com/hsksecret.id",
    },
    {
      name: "Video Content for Storytelling",
      description:
        "Short video content designed for platforms like Instagram and TikTok. These videos were crafted to tell compelling stories or share valuable information in an engaging and concise format, optimizing view time and shareability.",
      tags: [
        {
          name: "instagram",
          color: "blue-text-gradient",
        },
        {
          name: "creations",
          color: "green-text-gradient",
        },
        {
          name: "tiktok",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://instagram.com/isyandesign",
    },
    {
      name: "Interactive Posts for Community Engagement",
      description:
        "I have designed several interactive posts that encouraged audience participation and fostered community spirit. ",
      tags: [
        {
          name: "instagram",
          color: "blue-text-gradient",
        },
        {
          name: "community",
          color: "green-text-gradient",
        },
        {
          name: "reels",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://instagram.com/isyanfbryn",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };