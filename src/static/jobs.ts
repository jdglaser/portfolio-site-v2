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
    title: "Lead Software Engineer",
    time: "Oct 2024 - Present",
    bulletPoints: [],
  },
  {
    id: 2,
    companyName: "Northwestern Mutual",
    title: "Senior Software Engineer",
    time: "Apr 2022 - Oct 2024",
    bulletPoints: [],
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
