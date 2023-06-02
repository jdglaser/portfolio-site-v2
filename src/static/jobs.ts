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
    title: "Sr. Software Engineer",
    time: "April 2022 - Present",
    bulletPoints: [
      "Built and maintained a data ingestion solution using AWS, Snowflake, Java/Spring, Python, and React.",
      "Led the effort to move team's data infrastructure to a modern Snowflake + DBT solution.",
      "Played major role in large scale batch tool migration effort, and built custom CI tooling used throughout the department.",
      "Supported development of business facing applications and microservices hosted on AWS and built with Java/Spring and React.",
    ]
  },
  {
    id: 2,
    companyName: "Northwestern Mutual",
    title: "Software Engineer",
    time: "Aug 2020 - April 2022",
    bulletPoints: [
      "Supported development of business facing applications and microservices hosted on AWS and built with Java/Spring and React.",
      "Led the development effort to build an application that used Python docker batch jobs to pull daily investment offerings from external APIs, store the data, and expose it to end users through a Java/Spring REST API and React frontend.",
      "Modernized legacy ETL processes by migrating them to Python/Docker batch jobs."
    ]
  },
  {
    id: 3,
    companyName: "Northwestern Mutual",
    title: "Data Engineer",
    time: "Jan 2020 - Aug 2020",
    bulletPoints: [
      "Developed data pipelines using Python and SQL",
      "Maintained and developed business intelligence dashboards using Power BI"
    ]
  },
  {
    id: 4,
    companyName: "Continuus Technologies",
    title: "Business Intelligence Engineer",
    time: "Sep 2019 - Jan 2020",
    bulletPoints: [
      "Helped deliver an automated machine learning solution in Alteryx, SQL, and Python for a large client that compared performance metrics across hundreds of franchise locations.",
      "Built out analytics infrastructure and tooling for various clients across several industries."
    ]
  },
  {
    id: 5,
    companyName: "Uline",
    title: "Web Data Analyst",
    time: "Jan 2019 - Sep 2019",
    bulletPoints: [
      "Used Python, SQL, and Google Analytics API to modernized and improve reporting capabilities on high volume traffic E-commerce website",
      "Modeled data warehouse tables for web and marketing analytics",
      "Created BI dashboards and automated static report creation using Power BI, Python, SQL, HTML, and CSS"
    ]
  },
  {
    id: 6,
    companyName: "Johnson Controls",
    title: "Business Intelligence Analyst",
    time: "Oct 2017 - Jan 2019",
    bulletPoints: [
      "Built web analytics ETL pipelines using Google Analytics, Python, SQL, and SSIS.",
      "Worked on development of marketing analytics data warehouse.",
      "Built Business Intelligence dashboards and reports using Tableau and R."
    ]
  },
]