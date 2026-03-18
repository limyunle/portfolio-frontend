export const projectsData = [
  {
    title: "Personal Portfolio Website",
    subtitle: "A serverless full-stack portfolio powered by React, Go, and AWS.",
    description: 
    `This portfolio showcases my projects and GitHub activity. 
    It is built with React and Go, using AWS Lambda for backend logic, API Gateway for routing, S3 for data storage, 
    and EventBridge for automated updates.`,
    techStack: ["Go", "React", "TypeScript", "AWS", "Material UI"],
    image: "assets/portfolio_thumbnail.png",
    architecture: "assets/portfolio_architecture.png",
    liveDemo: "https://limyunle.github.io/portfolio-frontend/",
    githubLinks: [
      { label: "Backend", url: "https://github.com/limyunle/portfolio-backend" },
      { label: "Frontend", url: "https://github.com/limyunle/portfolio-frontend" },
    ],
  },
  {
    title: "Bank Statement Parser",
    status: "In Progress",
    subtitle:
      "A serverless parser that extracts bank-statement PDFs and summarizes transactions with an LLM.",
    description: `This project is currently in progress. The backend uses a PDF extraction pipeline powered by pdfcpu, then sends the extracted statement text to NVIDIA NIM for transaction categorisation and summary generation.
    A lightweight React frontend supports multi-file uploads and visualises monthly credit/debit breakdowns.`,
    techStack: ["Go", "Gin", "React", "pdfcpu", "NVIDIA NIM API", "AWS Lambda"],
    image: "assets/bank_stmt_parser_thumbnail.svg",
    githubLinks: [
      { label: "Backend", url: "https://github.com/limyunle/bank-stmt-parser" },
      { label: "Frontend", url: "https://github.com/limyunle/bank-stmt-parser-frontend" },
    ],
  },
];
