export interface ExperienceItem {
  id: number;
  companyName: string;
  title: string;
  time: string;
  bulletPoints: string[];
}

export const jobs: ExperienceItem[] = [
  {
    id: 1,
    companyName: "Northwestern Mutual",
    title: "Senior Data Engineer",
    time: "June 2023 - Present",
    bulletPoints: [],
  },
  {
    id: 2,
    companyName: "Northwestern Mutual",
    title: "Senior Software Engineer",
    time: "April 2022 - June 2023",
    bulletPoints: [
      "Architected and deployed a Java Spring and React web app with AWS EKS allowing investment analysts to manage and explore investment opportunities resulting in an increase of over $1.2m in investment profits for the company",
      "Engineered a Python microservice hosted on Kubernetes that enabled communication between our on-prem batch orchestration tool and AWS Batch (EKS), improving cloud integrations and scalability of our on-prem batch jobs",
      "Developed a custom GitLab CI/CD template using Python and Docker to enhance config-as-code state management for our enterprise batch solution, improving developer productivity and reducing bugs when deploying batch jobs",
      "Created a high-performance multithreaded data transfer CLI tool in Rust, facilitating the seamless transfer of 100GB+ data between AWS Redshift and Snowflake databases",
      "Built and deployed custom Snowflake external functions using AWS Lambda and API gateway, allowing analysts to enrich data by pulling information from external APIs and services directly through SQL queries",
      "Led daily stand-ups following agile best practices and allowing our team to efficiently handle incoming requests",
    ],
  },
  {
    id: 3,
    companyName: "Northwestern Mutual",
    title: "Software Engineer",
    time: "Jan 2020 - April 2022",
    bulletPoints: [
      "Developed a custom data ingestion microservice using Java/Spring, AWS EKS, and S3, facilitating the seamless onboarding of over 100GB of data into Snowflake",
      "Modernized several legacy ETL pipelines using Python and Docker resulting in an ~80% decrease in data quality issues and unexpected failures and downtime for our daily batch processes",
      "Developed and maintained a Java Spring and React web application on AWS (EKS, RDS, S3) enabling investment analysts to monitor and manage their investment portfolios resulting in increased investment revenue for the company",
    ],
  },
  {
    id: 4,
    companyName: "Continuus Technologies",
    title: "Business Intelligence Engineer",
    time: "Sep 2019 - Jan 2020",
    bulletPoints: [
      "Provided data engineering and analytics consulting work to clients across various industries streamlining and automating processes and leading to greater analytical insights and decreased time spent on manual tasks",
    ],
  },
  {
    id: 5,
    companyName: "Uline",
    title: "Data Analyst",
    time: "Jan 2019 - Sep 2019",
    bulletPoints: [
      "Modernized and automated reporting capabilities on the company's high volume ecommerce site with Python, MS SQL Server, and Power BI enabling improved insights into SEO and website conversions",
    ],
  },
  {
    id: 6,
    companyName: "Johnson Controls",
    title: "Business Intelligence Analyst",
    time: "Oct 2017 - Jan 2019",
    bulletPoints: [
      "Implemented Google Analytics across ~100 company brand websites and used Python and SQL Server to set up a web marketing data warehouse driving stronger insights into the company's website performance and marketing KPIs",
    ],
  },
];
