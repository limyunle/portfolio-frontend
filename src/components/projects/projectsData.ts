export const projectsData = [
  {
    title: "Personal Portfolio Website",
    subtitle: "Full-stack Go + React portfolio, integrated with AWS services",
    description:
      "A full-stack personal portfolio built with Go (backend) and React (frontend), showcasing my projects, GitHub activity, and LeetCode stats. " 
      + " The AWS services integrated are S3 for storing and retrieve data, Lambda Functions written in Go, EventBridge for cron trigger, API Gateway for triggering backend Lambda",
    techStack: ["Go", "React", "TypeScript", "Material UI", "AWS"],
    image: "/assets/portfolio_thumbnail.jpg",
    architecture: "/assets/portfolio_architecture.png",
    liveDemo: "https://limyunle.github.io/portfolio-frontend/",
    githubLinks: [
      { label: "Frontend", url: "https://github.com/limyunle/portfolio-frontend" },
      { label: "Backend", url: "https://github.com/limyunle/portfolio-backend" },
    ],
  },
];
