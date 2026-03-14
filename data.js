// ============================================================
//  data.js  —  YOUR SINGLE SOURCE OF TRUTH
//  To update anything: edit this file only.
//  Add a project? Add an object to PROJECTS.
//  New job? Add an object to EXPERIENCE.
// ============================================================

// ── THEME ────────────────────────────────────────────────────
// Control every visual aspect of your portfolio here.
// Google Fonts: https://fonts.google.com — pick any font name.
const THEME = {

  // ── Fonts ──────────────────────────────────────────────────
  fontHeading: "Arial",           // Used for big headings & name
  fontBody:    "Arial",           // Used for paragraphs & general text
  fontMono:    "JetBrains Mono", // Used for labels, tags, nav, code

  // ── Background Colors ──────────────────────────────────────
  bgPrimary:   "#080c10",   // Main page background
  bgSecondary: "#0d1117",   // Navbar, footer, stats bar
  bgCard:      "#111820",   // Cards (projects, skills, experience)
  bgCardHover: "#161e28",   // Cards on hover

  // ── Text Colors ────────────────────────────────────────────
  textPrimary:   "#e8f4f8", // Headings, main text
  textSecondary: "#8baab8", // Body paragraphs, descriptions
  textMuted:     "#4a6070", // Subtle labels, dividers

  // ── Accent Colors ──────────────────────────────────────────
  accentPrimary:   "#00e5ff", // Cyan  — navbar, tags, highlights
  accentSecondary: "#39ff14", // Green — bullet icons, gradients
  accentAmber:     "#ffb300", // Amber — dates, year badges

  // ── Border Colors ──────────────────────────────────────────
  borderSubtle: "rgba(0, 229, 255, 0.12)", // Default card borders
  borderGlow:   "rgba(0, 229, 255, 0.4)",  // Card borders on hover

};


const PROFILE = {
  name: "Devashish Mishra",
  title: "Staff Engineer",
  company: "Nagarro",
  location: "Delhi, IN",
  bio: "8 years crafting systems software — from bare-metal embedded firmware to automotive SOME/IP stacks, IoT gateways, and industrial communication protocols.",
  aboutHeading: "Software Engineer.<br>Systems Thinker.",
  about: "Proficient in C and C++ with deep roots in embedded systems, communication protocols, and firmware development. I architect and implement solutions for power systems, automotive ECUs, medical devices, and telecommunications — bringing both technical depth and team leadership to every project.",
  email: "devashishmishra90@gmail.com",
  phone: "+91-7838163544",
  linkedin: "https://www.linkedin.com/in/devashishmishra/",
  resume: "resume.pdf",
  nav: [
    { label: "experience", href: "work_experience.html" },
    { label: "skills",     href: "skills.html" },
    { label: "projects",   href: "projects.html" },
    { label: "education",  href: "education.html" },
  ],
  stats: [
    { number: "8+", label: "Years Experience" },
    { number: "7+",  label: "Major Projects" },
    { number: "5+",  label: "Industries" },
    { number: "C++", label: "Primary Stack" },
  ],
};

// ── WORK EXPERIENCE ──────────────────────────────────────────
// To add a new company: copy one block and fill in the details.
const EXPERIENCE = [
  {
    company: "Nagarro Software Pvt Ltd",
    period: "July 2020 — Present",
    roles: [
      {
        title: "Staff Engineer",
        bullets: [
          "Leading ADAS Development",
        ],
      },
      {
        title: "Associate Staff Engineer",
        bullets: [
          "Leading the backend team for development of PC-based application to communicate with connected Load Banks over USB-RS485, CAN Bus & Modbus TCP/IP",
          "System Designing for SOME/IP Library Stack — Autosar Compliant",
          "Led development of automotive SOME/IP communication stack in C++ for seamless ECU data exchange, following MISRA C++ Standard",
        ],
      },
      {
        title: "Senior Engineer",
        bullets: [
          "Developed Linux-based IoT gateway application software in C++",
          "Implemented a custom RAM disk image to optimize the boot-up process",
          "Designed and developed firmware for healthcare devices — increased device reliability and performance",
        ],
      },
      {
        title: "Engineer",
        bullets: [
          "Implemented low-level drivers for various peripherals, ensuring efficient and reliable operation",
          "Leveraged FreeRTOS for multi-threading, parallel processing, and effective hardware utilization",
        ],
      },
    ],
  },
  {
    company: "Frog Cellsat Ltd",
    period: "Sept 2019 — Mar 2020",
    roles: [
      {
        title: "Software Engineer",
        bullets: [
          "Designed and developed firmware for RF power controlling devices — precise and efficient RF power output control",
          "Demonstrated proficiency in bare metal programming for MSP430 microcontrollers",
        ],
      },
    ],
  },
  {
    company: "ASES Pvt Ltd",
    period: "Sept 2017 — Aug 2019",
    roles: [
      {
        title: "Software Engineer",
        bullets: [
          "Developed intuitive GUI applications in Python for fire detecting devices — enhanced user interaction and real-time monitoring",
          "Designed and implemented firmware for STM32 and Atmega2560 microcontrollers-based fire monitoring device",
        ],
      },
    ],
  },
];

// ── SKILLS ───────────────────────────────────────────────────
// To add a skill: just add it to the relevant array.
const SKILLS = [
  {
    icon: "⌨️",
    color: "rgba(0,229,255,0.1)",
    title: "Programming",
    tags: ["C", "C++", "Python", "Data Structures", "Algorithms", "OOP", "System Design"],
  },
  {
    icon: "🛠",
    color: "rgba(57,255,20,0.1)",
    title: "Libraries & Tools",
    tags: ["STL", "Boost", "Qt", "Visual Studio", "GNU Tools", "Make", "CMake"],
  },
  {
    icon: "🖥",
    color: "rgba(255,179,0,0.1)",
    title: "Operating Systems",
    tags: ["Linux", "Yocto", "FreeRTOS", "Android Automotive OS", "Shell Scripting", "Multithreading", "Memory Management"],
  },
  {
    icon: "🔌",
    color: "rgba(0,229,255,0.1)",
    title: "Embedded Systems",
    tags: ["ESP32", "STM32", "MSP430", "Device Drivers", "I2C / SPI / UART", "MQTT", "CAN", "SOME/IP", "Bare Metal", "MISRA C++", "U-Boot", "Bootloader"],
  },
  {
    icon: "📋",
    color: "rgba(57,255,20,0.1)",
    title: "Project Management",
    tags: ["JIRA", "Git", "Agile", "Technical Leadership"],
  },
];

// ── PROJECTS ─────────────────────────────────────────────────
// To add a project: copy one block below and fill in the details.
const PROJECTS = [
  {
    title: "PC-Based Load Banks Control & Monitoring",
    description: "Application controlling & monitoring Load Banks over USB-RS485, CAN Bus & Modbus TCP/IP. Simulates electrical loads for power source testing.",
    tech: ["C++", "Dart", "Flutter", "RS485", "Modbus TCP/IP", "CAN", "Multithreading"],
    bullets: [
      "Led the backend team for application development",
      "High & low level design of messaging protocol",
      "Developed messaging protocol in Dart — improved system performance by 35%",
      "Managed team for Modbus-based communication tasks with Load Banks",
      "Designed Class & Sequence Diagrams for PCAN-based communication",
      "Planned common APIs to interface frontend & backend with UI team",
      "Integrated multithreading to handle concurrent communication tasks",
    ],
  },
  {
    title: "SOME/IP Protocol Library for In-Vehicle Communication",
    description: "Robust C++ library implementing SOME/IP protocol for autonomous vehicle ECU communication and service discovery.",
    tech: ["Modern C++", "Linux", "Boost", "Multithreading", "UDP/TCP", "Raspberry Pi"],
    bullets: [
      "System designed the full library stack architecture",
      "Researched SOME/IP protocol spec and service discovery mechanisms",
      "Implemented packet creation and parsing modules to spec compliance",
      "Developed service discovery protocol — automatic device/service registration",
      "Used Boost libraries for efficient network & socket operations",
      "Integrated multithreading for concurrent communication performance",
    ],
  },
  {
    title: "Cloud-Enabled IoT Gateway Solution",
    description: "Bootable Linux environment for an Intel-based IoT Gateway, bridging local healthcare devices to cloud-based data processing.",
    tech: ["C", "C++", "Linux", "Buildroot", "Wt", "STL"],
    bullets: [
      "Implemented robust C++ error handling to ensure gateway stability",
      "Built and integrated Web UI features using the Wt library",
      "Led debugging for secure file upload from gateway to cloud application",
    ],
  },
  {
    title: "Scale Device Integration with UDL — Healthcare",
    description: "Drivers for new scale devices to facilitate seamless communication with the Universal Data Link (UDL) on TQM5200 single-board computer.",
    tech: ["C++", "Linux", "U-Boot", "RAM Disk"],
    bullets: [
      "Collaborated with UDL development team for seamless scale driver integration — reduced integration time by 25%",
      "Updated RAM disk image with new software updates and security patches",
    ],
  },
  {
    title: "Optical Repeater for Telecom Coverage",
    description: "RF over Fiber optical repeaters to enhance coverage in fiber-available areas. Firmware for Remote Optical Units (ROU).",
    tech: ["C", "MSP430", "Code Composer Studio", "OrCAD", "UART-SPI"],
    bullets: [
      "Developed ADC-based algorithms for signal power calculations — 15% improvement in signal quality",
      "Implemented ROU flash configuration read/write for easy customization management",
      "Established UART-SPI Bridge communication between ROU and Master Device",
    ],
  },
  {
    title: "Haemoglobin Measuring Device",
    description: "MCU and firmware porting of an existing haemoglobin meter, with a full Hardware Abstraction Layer (HAL) for the device application.",
    tech: ["C", "STM32", "STM32CubeIDE", "Glass LCD", "BLE", "RFID"],
    bullets: [
      "Designed software LCD library for 6COM/10SEG LCD — reduced BOM cost by 15%",
      "Developed HAL Layer for LCD subsystem — 20% improvement in LCD performance",
      "Led debugging of RFID, BLE, ADC peripherals — reduced system failure rate by 30%",
    ],
  },
];

// ── EDUCATION ────────────────────────────────────────────────
const EDUCATION = [
  {
    icon: "🎓",
    degree: "Bachelor of Technology",
    field: "Electronics & Communication Engineering",
    institution: "Noida Institute of Engineering & Technology, Greater Noida",
    year: "2013 — 2017",
  },
  {
    icon: "📘",
    degree: "XII Senior Secondary",
    field: "Science & Mathematics",
    institution: "CBSE, Delhi",
    year: "2011 — 2012",
  },
];