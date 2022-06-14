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
    title: "Sr Software Engineer",
    time: "Apr 2022 - Present",
    bulletPoints: [
      "Worked with a team to build and maintain a homegrown data lake solution that use AWS, Gitlab CI/CD, Java, Python, and React",
      "Built an application that uses Python/Docker batch jobs to pull daily investment offerings from Bloomberg APIs, store the data, and expose it to end users through a Java/Spring REST API and React frontend",
      "Modernized legacy ETL processes by migrating them to Python/Docker batch jobs"
    ]
  },
  {
    id: 2,
    companyName: "Northwestern Mutual",
    title: "Software Engineer",
    time: "Aug 2020 - Apr 2022",
    bulletPoints: [
      "Built and maintained various business facing web applications using Java (Spring), React, and SQL",
      "Deployed applications to AWS using CI/CD pipelines",
      "Planned software engineering work using Agile development best practices"
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
      "Developed BI solutions and data pipelines for various clients using tools like Python, Power BI, and SQL"  
    ]
  },
  {
    id: 5,
    companyName: "Uline",
    title: "Web Data Analyst",
    time: "Jan 2019 - Sep 2019",
    bulletPoints: [
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
      "Developed ETL pipelines and maintained data warehouse for marketing analytics",
      "Automated data collection processes using Python",
      "Built Business Intelligence dashboards and reports using Tableau and R"  
    ]
  },
]