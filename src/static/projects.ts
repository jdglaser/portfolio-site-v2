export interface Project {
  name: string
  description: string
  link: string
}

export const projects: Project[] = [
  {
    name: "fast-to-sql",
    description: "A Python library that improves uploading Pandas dataframes to MS SQL Server.",
    link: "https://github.com/jdglaser/fast-to-sql"
  },
  {
    name: "MA Thesis",
    description: "My 2018 Masters Thesis: \"Using Machine Learning and Google Searches to Predict Stock Market Changes\"",
    link: "https://github.com/jdglaser/mathesis"
  },
  {
    name: "Portfolio Site",
    description: "The code to my portfolio site. Built with ReactJS",
    link: "https://github.com/jdglaser/portfolio-site-v2"
  },
  {
    name: "fastapi-example-project",
    description: "A template project to setup a robust REST API with FastAPI framework.",
    link: "https://github.com/jdglaser/fastapi-example-project"
  },
  {
    name: "fastapi-example-project-ui",
    description: "A UI built with React to interact with fast-api-example-project REST API",
    link: "https://github.com/jdglaser/fastapi-example-project-ui"
  },
  {
    name: "Census Data Warehouse",
    description: "A SQL Data Warehouse housing US Census data, built in AWS using Python for ETL.",
    link: "https://github.com/jdglaser/census-dw"
  },
  {
    name: "REP Scrape",
    description: "A web scraper hosted in AWS (Lambda + SES) to check for home gym equipment availability.",
    link: "https://github.com/jdglaser/rep-scrape/tree/master/src"
  },
  {
    name: "C++ Console CRM",
    description: "A simple console CRM built with C++ for a school project.",
    link: "https://github.com/jdglaser/cpp-console-crm"
  }
]