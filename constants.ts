import { Skill, Certification, Education, School, Experience } from './types';

export const PERSONAL_INFO = {
    name: "Antonio Jose Cantillo Gutierrez",
    title: "DBA OCP | OCI | GoldenGate | Data Guard | Disaster Recovery",
    profileImageUrl: "https://antoniojcantillog.github.io/images/about.jpg",
    heroBg1: "https://antoniojcantillog.github.io/images/img_bg_1.jpg",
    heroBg2: "https://antoniojcantillog.github.io/images/img_bg_2.jpg",
    resumeUrl: "https://antoniojcantillog.github.io/ResumeAntonioCantillo.pdf",
    linkedinUrl: "https://www.linkedin.com/in/antoniocantillo/",
    email: "antoniocantillo@gmail.com",
    phone: "+57 324 4386911",
    address: "Cra 11b 38 64, barrio el troncal, Cali, Valle, Colombia",
};

export const ABOUT_ME = {
    bio1: "I am a highly skilled Oracle Database Administrator (DBA) with over 18 years of extensive experience in managing and optimizing Oracle database environments. Throughout my career, I have developed a deep understanding of Oracle technologies and best practices, enabling me to effectively design, implement, and maintain robust database solutions for various organizations.",
    bio2: "My expertise spans database performance tuning, backup and recovery strategies, high availability configurations, and database security measures. With a proven track record of delivering reliable and scalable database solutions, I am dedicated to ensuring the stability, performance, and security of mission-critical Oracle databases.",
    services: [
        { title: "Oracle Database 21C, 19C, 12C, etc." },
        { title: "RAC, GoldenGate, DataGuard" },
        { title: "System Administrador Unix: Linux, Exadata, AIX, etc." },
        { title: "Bash scripting, Sql, PL-SQL" },
        { title: "CLOUD: OCI, AZURE, AWZ, etc" },
    ]
};

export const SKILLS: Skill[] = [
  { name: "Oracle Database", level: 95 },
  { name: "Disaster Recovery (RMAN, EXPDP)", level: 95 },
  { name: "GoldenGate", level: 95 },
  { name: "Bash Script", level: 95 },
  { name: "ASM", level: 95 },
  { name: "DataGuard", level: 95 },
  { name: "Linux Administration", level: 90 },
  { name: "Zabbix - Nagios - OEM", level: 90 },
  { name: "ServiceNow - Jira", level: 90 },
  { name: "Tuning", level: 80 },
  { name: "MS SQL, Postgres, Mysql", level: 70 },
  { name: "Exadata", level: 70 },
  { name: "Cloud (OCI, Azure, AWS)", level: 70 },
  { name: "ITIL, CMMI, ISO-9000, ISO-27000", level: 70 },
  { name: "Github, Subversion", level: 70 },
  { name: "Docker - Kubernetes", level: 70 },
];

export const CERTIFICATIONS: Certification[] = [
    { date: "Aug 2025", title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", id: "cert0", imageUrl: "https://antoniojcantillog.github.io/cert/AIFoundationsAssociate2025.png" },
    { date: "Apr 2024", title: "Oracle Database Cloud Administration 2021 Certified Professional", id: "cert1", imageUrl: "https://antoniojcantillog.github.io/cert/CLOUDOCP19C.png" },
    { date: "Apr 2024", title: "Oracle Database Administration 2019 Certified Professional", id: "cert2", imageUrl: "https://antoniojcantillog.github.io/cert/OCP19C.png" },
    { date: "Apr 2024", title: "Oracle Database Administration II | 1Z0-083", id: "cert3", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-083.png" },
    { date: "Mar 2024", title: "Oracle Database Administration I | 1Z0-082", id: "cert4", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-082.jpg" },
    { date: "Mar 2024", title: "Oracle GoldenGate 12c Certified Implementation Specialist | 1Z0-447", id: "cert5", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-447.jpg" },
    { date: "Oct 2023", title: "Azure Fundamentals | AZ-900", id: "cert6", imageUrl: "https://antoniojcantillog.github.io/cert/AZ-900.jpg" },
    { date: "Feb 2022", title: "Oracle Machine Learning using Autonomous Database 2021 Specialist | 1Z0-1096-21", id: "cert7", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-1096-21.jpg" },
    { date: "Feb 2022", title: "Oracle Cloud Infrastructure Security 2021 Associate | 1Z0-1104-21", id: "cert8", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-1104-21.jpg" },
    { date: "Feb 2022", title: "Oracle Cloud Platform Identity and Security Management 2021 Specialist | 1Z0-1070-21", id: "cert9", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-1070-21.jpg" },
    { date: "Jan 2022", title: "Oracle Cloud Infrastructure Developer 2021 Associate | 1Z0-1084-21", id: "cert10", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-1084-21.jpg" },
    { date: "Jan 2022", title: "Oracle Cloud Database Cloud Operations 2021 Associate | 1Z0-1067-21", id: "cert11", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-1067-21.jpg" },
    { date: "Dec 2021", title: "Oracle Cloud Database Architect 2021 Professional | 1Z0-997-21", id: "cert12", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-997-21.jpg" },
    { date: "Dec 2021", title: "Oracle Cloud Database Architect 2021 Associate | 1Z0-1072-21", id: "cert13", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-1072-21.jpg" },
    { date: "Dec 2021", title: "Oracle Cloud Database Services 2021 Certified Specialist | 1Z0-1093-21", id: "cert14", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-1093-21.jpg" },
    { date: "Dec 2021", title: "Oracle Cloud Platform Enterprise Analytics 2021 Specialist | 1Z0-1041-21", id: "cert15", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-1041-21.jpg" },
    { date: "Nov 2021", title: "Oracle Cloud Database Migration and Integration 2021 Specialist | 1Z0-1094-21", id: "cert16", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-1094-21.jpg" },
    { date: "Nov 2021", title: "Oracle Autonomous Database Cloud 2021 Specialist | 1Z0-931-21", id: "cert17", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-931-21.jpg" },
    { date: "Oct 2021", title: "Oracle Cloud Infrastructure 2021 Foundations | 1Z0-1085-21", id: "cert18", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-1085-21.jpg" },
    { date: "Dec 2019", title: "British English B2 Level", id: "cert19", imageUrl: "https://antoniojcantillog.github.io/cert/british.jpg" },
    { date: "Jun 2016", title: "Red Hat System Administration", id: "cert20", imageUrl: "https://antoniojcantillog.github.io/cert/redhat.jpg" },
    { date: "Oct 2015", title: "Product Owner Scrum Agile Institute", id: "cert21", imageUrl: "https://antoniojcantillog.github.io/cert/scrum.jpg" },
    { date: "Nov 2014", title: "Certified PSP Developer, SEI Certification", id: "cert22", imageUrl: "https://antoniojcantillog.github.io/cert/psp.jpg" },
    { date: "Jan 2009", title: "Online Prometric Oracle Database: SQL Fundamentals I | 1Z0-051", id: "cert23", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-051.jpg" },
    { date: "Jan 2009", title: "Prometric Center Oracle Database 10g: Administration I | 1Z0-042", id: "cert24", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-042.jpg" }
];

export const EDUCATION: Education[] = [
    { date: "2025", title: "Oracle Cloud Infrastructure Generative AI Professional, oracle Education", id: "edu_genai", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-1085-21.jpg" },
    { date: "2025", title: "Oracle Cloud Infrastructure AI Foundations, Oracle Education", id: "edu_ai", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-1085-21.jpg" },
    { date: "2024", title: "Administracion Oracle Database 19c, 40 hours, Udemy", id: "edu1", imageUrl: "https://antoniojcantillog.github.io/cert/udemy_oracle19c.jpg" },
    { date: "2024", title: "Oracle GoldenGate 19c, 40 hours, Udemy", id: "edu2", imageUrl: "https://antoniojcantillog.github.io/cert/udemy_goldengate.jpg" },
    { date: "2023", title: "AZ-900: Microsoft Azure Fundamental Exam Prep, Udemy", id: "edu3", imageUrl: "https://antoniojcantillog.github.io/cert/udemy_az900.jpg" },
    { date: "2023", title: "Software Security, TCS", id: "edu4", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-1104-21.jpg" },
    { date: "2023", title: "Softskill leadership: assertive communication, TCS", id: "edu5", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-1070-21.jpg" },
    { date: "2023", title: "Softskill Rigor in operations, TCS", id: "edu6", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-1104-21.jpg" },
    { date: "2023", title: "Softskill Language tips for everyday business, virtual conferencing, TCS", id: "edu7", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-1084-21.jpg" },
    { date: "2023", title: "Softskill Writing effective incident and outage notification, Emails, bussiness chat, TCS", id: "edu8", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-1067-21.jpg" },
    { date: "2023", title: "Softskill Creating effective status reports, TCS", id: "edu9", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-997-21.jpg" },
    { date: "2022", title: "Become a Specialist on Oracle Machine Learning with Autonomous Database", id: "edu10", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-1072-21.jpg" },
    { date: "2022", title: "Become A Cloud Security Associate", id: "edu11", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-1093-21.jpg" },
    { date: "2022", title: "Become OCI Developer (Associate), Oracle Learning", id: "edu12", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-1041-21.jpg" },
    { date: "2021", title: "Become an OCI Cloud Operations Associate, Oracle Learning", id: "edu13", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-1094-21.jpg" },
    { date: "2021", title: "Become an OCI Architect (Associate), Oracle Learning", id: "edu14", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-931-21.jpg" },
    { date: "2021", title: "Become an Oracle Cloud Database Services Specialist, Oracle Learning", id: "edu15", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-1085-21.jpg" },
    { date: "2021", title: "Become a Business Analytics Expert, Oracle Learning", id: "edu16", imageUrl: "https://antoniojcantillog.github.io/cert/british.jpg" },
    { date: "2021", title: "Become an Oracle Cloud Database Migration and Integration Specialist, Oracle Learning", id: "edu17", imageUrl: "https://antoniojcantillog.github.io/cert/redhat.jpg" },
    { date: "2021", title: "Become an Autonomous Database Specialist, Oracle Learning", id: "edu18", imageUrl: "https://antoniojcantillog.github.io/cert/scrum.jpg" },
    { date: "2021", title: "Become an OCI Foundations Associate, Oracle Learning", id: "edu19", imageUrl: "https://antoniojcantillog.github.io/cert/psp.jpg" },
    { date: "2019", title: "Tourism English B2 level, 400 Hours, Comfenalco Valle", id: "edu20", imageUrl: "https://antoniojcantillog.github.io/cert/british.jpg" },
    { date: "2018", title: "IT Government/ITIL Diploma, ICESI", id: "edu21", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-042.jpg" },
    { date: "2018", title: "IT 2016 Red Hat System Administration I and II, BScolombia", id: "edu22", imageUrl: "https://antoniojcantillog.github.io/cert/curso_redhat.jpg" },
    { date: "2014", title: "Auditor Interno ISO-27001, Password Consulting Services", id: "edu23", imageUrl: "https://antoniojcantillog.github.io/cert/diplomadoiso27001.jpg" },
    { date: "2014", title: "Psp - Personal Software Process, SEONTI", id: "edu24", imageUrl: "https://antoniojcantillog.github.io/cert/curso_psp.jpg" },
    { date: "2012", title: "Advanced English, Open English", id: "edu25", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-042.jpg" },
    { date: "2009", title: "Oracle Database Performance Tuning, Oracle Education", id: "edu26", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-042.jpg" },
    { date: "2000", title: "LESARU Intermediate English Course", id: "edu27", imageUrl: "https://antoniojcantillog.github.io/cert/1Z0-042.jpg" },
];

export const SCHOOL: School[] = [
    { date: "Present", title: "Máster En Big Data Y Business Intelligence, ENEB - Escuela de Negocios Europea de Barcelona", id: "sch1", imageUrl: "https://antoniojcantillog.github.io/cert/eneb.png" },
    { date: "2014", title: "Diploma in Project Management with a PMI Approach, U. Autónoma de Occidente", id: "sch2", imageUrl: "https://antoniojcantillog.github.io/cert/diplomadopmi.jpg" },
    { date: "2007", title: "Diploma Development and Administration of Applications with Oracle Database, U. Autónoma de Occidente", id: "sch3", imageUrl: "https://antoniojcantillog.github.io/cert/diplomadooracle.jpg" },
    { date: "2005", title: "Systems Engineering, Universidad del Valle", id: "sch4", imageUrl: "https://antoniojcantillog.github.io/cert/DiplomaGrado.jpg" }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Oracle DBA",
    company: "Scotiabank",
    duration: "May 2024 - Present",
    functions: [
      "Provide first-level support for Oracle database environments, ensuring high availability and performance.",
      "Monitor database health and performance using enterprise monitoring tools, proactively addressing potential issues.",
      "Manage and resolve incidents and service requests according to SLA guidelines.",
      "Perform routine database administration tasks, including user access management, schema changes, and data refreshes.",
      "Execute standard operational procedures (SOPs) for database maintenance and support.",
      "Escalate complex technical issues to second and third-level support teams, providing detailed analysis.",
    ],
    achievements: [
      "Consistently met and exceeded SLA targets for incident resolution and request fulfillment.",
      "Contributed to the refinement of monitoring alerts to reduce false positives and improve proactivity.",
      "Streamlined the user access request process, reducing turnaround time.",
      "Praised for clear communication and effective troubleshooting during critical production incidents.",
    ],
  },
  {
    role: "DBA",
    company: "Tata Consultancy Services",
    duration: "Dec 2022 - Mar 2024",
    functions: [
      "Oracle (10g-21c, OCI) deployments, configuration, administration and migrations on-premise and cloud (Azure, OCI).",
      "Administration, Configuration and operation of EXADATA (dbascli), Superdome and RAC.",
      "GoldenGate: Installation, configuration and operation of Oracle GoldenGate replication.",
      "SQL Server, Postgres: deployments, configuration, administration and migrations.",
      "Tuning Process and queries & Implementation of Security Controls.",
      "Migration of on-premise databases to OCI using DataGuard, GoldenGate, RMAN, and TTS.",
    ],
    achievements: [
      "Implemented multiple monitoring metrics (Nagios) for flash recovery area, IO disk, UNDO and TEMP usage.",
      "Fixed unexpected Exadata reboots.",
      "Implemented bash scripts to clean diag logs and archive logs.",
      "Optimized RMAN backups, reducing backup times from 1 week to 1 day.",
    ],
  },
  {
    role: "DBA Leader",
    company: "SOLUCIONES INTEGRALES DE OFICINA SAS",
    duration: "Mar 2012 – Dec 2022",
    functions: [
        "Led Oracle database administration on-premise and in the cloud.",
        "Implemented security policies and configuration management (SVN, GitHub).",
        "Managed DevOps, including app deployment in Docker.",
        "Optimized Oracle databases and business processes using TOAD, SQL Developer, and OEM.",
        "Monitored infrastructure using Zabbix and Nagios.",
        "Administered infrastructure, networks, VPNs, and cloud servers (OCI, Azure, AWS).",
    ],
    achievements: [
      "Implemented contingency plans to prevent data loss and service failure.",
      "Achieved efficient recovery from 5 serious database damage incidents.",
      "Implemented and certified good practices and frameworks like ITMARK, CMMI SVC LEVEL 3, ISO-27001, and ISO-9000.",
      "Migrated company tools (SVN, databases) from local to cloud infrastructure.",
    ],
  },
   {
    role: "Oracle DBA Consultant",
    company: "Optima Consulting",
    duration: "Sep 2010 - Mar 2012",
    functions: [
      "Provided Oracle database administration for national and international clients.",
      "Analyzed and optimized Oracle databases and business processes.",
      "Evaluated and implemented new Oracle technologies.",
      "Monitored and performed preventive maintenance on Oracle databases and Unix operating systems.",
    ],
    achievements: [
        "Expanded DBA support to new international markets: Nicaragua, Salvador, Ecuador, and Puerto Rico.",
        "Successfully migrated clients to more current versions of Oracle.",
        "Implemented Oracle RAC, GoldenGate, and DataGuard for high availability.",
    ],
  },
  {
    role: "DBA Oracle",
    company: "Open System International",
    duration: "Mar 2007 - Sep 2010",
    functions: [
        "Creation and testing of Backup politics, Oracle software installation, Database Creation.",
        "Database optimization of queries and Pl/Sql code.",
        "Database and Operating Systems Monitoring (space, performance, etc), SQL Tuning.",
        "Evaluation and Implementation of new Technologies.",
    ],
    achievements: [
        "Process optimization such as: one that took 5 days to 10 hours.",
        "Implementation of new infrastructure such as: SAN, backup appliance.",
        "Implementation of a Script that automates database replication with a single button.",
    ],
  },
  {
    role: "Software developer",
    company: "OITEL – Universidad del Valle",
    duration: "Sep 2001 - Feb 2007",
    functions: [
        "System analysis.",
        "Software developer.",
        "Postgres Database Administrator.",
        "Mysql database Administrator.",
        "Customer service.",
        "Creation of database reports.",
    ],
    achievements: [],
  }
];

export const NAV_ITEMS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'school', label: 'School' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
];