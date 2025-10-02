export const profile = {
  name: "Ega Evan",
  title: "Backend Developer",
  location: "Padang, Indonesia",
  email: "egaevan1@gmail.com",
  phone: "+62 822 8482 4842",
  avatarUrl: "/avatar.jpg",
  summary:
    "Software engineer berpengalaman dalam membangun sistem backend Telkomsel dengan Go dan ekosistem microservice. Terbiasa mengerjakan orkestrasi produk B2B, observability, serta kolaborasi lintas fungsi dari discovery sampai delivery.",
  linkedin: "https://www.linkedin.com/in/egaevan",
  github: "https://www.linkedin.com/in/ega-evan-4078a0155/",
} as const;

export const education = [
  {
    school: "Andalas University",
    degree: "Bachelor of Information System",
    period: "2016 - 2020",
    details:
      "GPA 3.16. Thesis: Implementation Business Intelligence for dashboard and forecasting at PT. Jasa Raharja Sumatera Barat.",
  },
] as const;

export const experience = [
  {
    company: "Salt / Telkomsel",
    role: "Backend Developer",
    period: "Nov 2021 - Present",
    stack: [
      "Go",
      "Gin",
      "gRPC",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "Docker",
      "GitLab CI",
    ],
    highlights: [
      "Mengembangkan layanan B2B MyEnterprise untuk otomasi penjualan produk korporasi dengan microservice gRPC berbasis Go dan GORM.",
      "Membangun Grapari Online dashboard & service monitoring menggunakan Go (Gin), Redis, PostgreSQL, serta pipeline GitLab CI/CD.",
      "Menjaga keandalan platform Telkomsel (tSurvey.id, TelkomselDFE, Dunia Games) termasuk integrasi event-driven dan observability stack.",
      "Kolaborasi dengan squad lintas fungsi (product, design, QA) untuk merumuskan roadmap dan praktik engineering yang konsisten.",
    ],
  },
  {
    company: "Revival TV",
    role: "Backend Developer",
    period: "Jun 2021 - Nov 2021",
    stack: ["Go", "FusionAuth", "MySQL", "Kafka", "Git"],
    highlights: [
      "Mengimplementasikan FusionAuth pada Selena Project untuk manajemen akses RevivalTV & RevivalPedia termasuk migrasi pengguna.",
      "Mendesain API media dan autentikasi dengan Go serta berkoordinasi dengan tim product, mobile, dan desain untuk kebutuhan rilis.",
    ],
  },
  {
    company: "Badan Sistem Informasi UII",
    role: "Backend Engineer",
    period: "Nov 2020 - Jun 2021",
    stack: ["Go", "Echo", "GORM", "Kafka", "MySQL"],
    highlights: [
      "Membangun platform SDM UII Personal dan UII Insani berbasis event-driven Go dengan migrasi dari database legacy ke relational schema baru.",
      "Mengembangkan otomasi proses HR dan integrasi layanan internal dengan pipeline observability serta praktik Agile.",
    ],
  },
] as const;

export const projects = [
  {
    title: "Grapari Online (2024 - Present)",
    description: "Dashboard layanan Grapari yang memonitor performa pelayanan dan operasional outlet Telkomsel secara real-time.",
    tech: ["Go", "Gin", "PostgreSQL", "Redis", "Docker", "GitLab CI"],
    status: "Live",
    category: "Service Monitoring",
  },
  {
    title: "B2B MyEnterprise (2022 - Present)",
    description: "Platform penjualan produk korporasi Telkomsel dengan orkestrasi microservice gRPC dan workflow otomasi dokumen.",
    tech: ["Go", "gRPC", "GORM", "MongoDB", "PostgreSQL", "RabbitMQ"],
    status: "Live",
    category: "Enterprise Platform",
  },
  {
    title: "TelkomselDFE (2022 - 2023)",
    description: "Sistem farming berbasis teknologi untuk digital farmer Telkomsel dengan integrasi data dan notifikasi multi-channel.",
    tech: ["Go", "gRPC", "MongoDB", "PostgreSQL", "RabbitMQ"],
    status: "Delivered",
    category: "AgriTech",
  },
  {
    title: "tSurvey.id (2021 - 2022)",
    description: "Platform survei Telkomsel yang menangani distribusi kuesioner dan agregasi data analitik skala nasional.",
    tech: ["Go", "gRPC", "MongoDB", "PostgreSQL", "RabbitMQ"],
    status: "Delivered",
    category: "Survey Platform",
  },
  {
    title: "Dunia Games (2023)",
    description: "Pemeliharaan portal gaming Telkomsel mencakup sistem produk, katalog, serta reliabilitas infrastruktur.",
    tech: ["Go", "PHP", "Laravel", "MySQL", "RabbitMQ", "Docker"],
    status: "Maintenance",
    category: "Digital Entertainment",
  },
  {
    title: "Selena Project (2021)",
    description: "Integrasi FusionAuth untuk akses RevivalTV & RevivalPedia termasuk orkestrasi migrasi pengguna multi-platform.",
    tech: ["Go", "FusionAuth", "MySQL", "Git"],
    status: "Completed",
    category: "Identity & Access",
  },
] as const;

export const featuredSkills = [
  "Golang",
  "Distributed Microservices (gRPC)",
  "PostgreSQL & Redis",
  "CI/CD Automation (GitLab)",
  "Observability (Grafana & Prometheus)",
] as const;

export const skillCategories = [
  {
    name: "Languages & Frameworks",
    items: ["Golang", "PHP", "Node.js", "Gin", "Echo", "GORM"],
  },
  {
    name: "Data & Messaging",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "RabbitMQ", "Kafka", "InfluxDB"],
  },
  {
    name: "Platform & Ops",
    items: ["Docker", "GitLab CI/CD", "Grafana", "Prometheus", "FusionAuth"],
  },
  {
    name: "Collaboration",
    items: ["Jira & Confluence", "Agile Delivery"],
  },
] as const;

export const skills = skillCategories.flatMap((category) => category.items);
