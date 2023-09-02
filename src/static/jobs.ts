export interface ExperienceItem {
  id: number
  companyName: string
  title: string
  time: string
  bulletPoints: string[]
}

export const jobs: ExperienceItem[] = [
  {
    id: 1,
    companyName: "Northwestern Mutual",
    title: "Senior Data Engineer",
    time: "July 2023 - Present",
    bulletPoints: [
      "Built and maintained Gitlab CI/CD tooling using Python and Docker for our Snowflake and DBT-based data platform enabling self service access for engineering teams and leading to improved platform adoption across the department",
      "Developed a Python FastAPI and React web application hosted on AWS EKS that served a custom Office web add-in allowing business users to publish custom Excel functions and driving improved accessibility for data consumers",
      "Led meetings with engineering and business teams to consult on data engineering best practices and gather requirements for the data platform using agile best practices to prioritize incoming requests",
      "Conducted daily agile standups leading agile ceremonies and working with the engineering team to delegate tasks"
    ]
  },
  {
    id: 2,
    companyName: "Northwestern Mutual",
    title: "Sr. Software Engineer",
    time: "April 2022 - July 2023",
    bulletPoints: [
      "Architected and deployed a Java/Spring and React web app with AWS EKS allowing investment analysts to manage and explore investment opportunities resulting in an increase of over $1.2m in investment profits for the company",
      "Developed a custom data ingestion microservice using Java/Spring, AWS EKS, and S3 that integrated with a Snowflake data platform enabling our engineering team to easily onboard over 100GB of data from various sources",
      "Modernized several legacy ETL processes to Python Docker batch jobs resulting in a ~80% decrease in data quality issues and unexpected failures and downtime for our daily batch processes",
    ]
  },
  {
    id: 3,
    companyName: "Northwestern Mutual",
    title: "Software Engineer",
    time: "Jan 2020 - April 2022",
    bulletPoints: [
      "Developed and maintained a Java/Spring and React web application on AWS (EKS, RDS, S3) enabling investment analysts to monitor and manage their investment portfolios resulting in increased investment revenue for the company",
    ]
  },
  {
    id: 4,
    companyName: "Continuus Technologies",
    title: "Business Intelligence Engineer",
    time: "Sep 2019 - Jan 2020",
    bulletPoints: [
      "Provided data engineering and analytics consulting work to clients across various industries streamlining and automating processes and leading to greater analytical insights and decreased time spent on manual tasks",
    ]
  },
  {
    id: 5,
    companyName: "Uline",
    title: "Data Analyst",
    time: "Jan 2019 - Sep 2019",
    bulletPoints: [
      "Modernized and automated reporting capabilities on the company's high volume ecommerce site with Python, MS SQL Server, and Power BI enabling improved insights into SEO and website conversions",
    ]
  },
  {
    id: 6,
    companyName: "Johnson Controls",
    title: "Business Intelligence Analyst",
    time: "Oct 2017 - Jan 2019",
    bulletPoints: [
      "Implemented Google Analytics across ~100 company brand websites and used Python and SQL Server to set up a web marketing data warehouse driving stronger insights into the company's website performance and marketing KPIs",
    ]
  },
]