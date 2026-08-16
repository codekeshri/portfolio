// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'codekeshri', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects | Open Source & Research Work',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['codekeshri/quotesApp', 'codekeshri/ecommerce', 'codekeshri/fitluck', 'codekeshri/group-chat'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Fitluck',
          description:
            'A platform to track your gym performance, log your results and stay motivated. Built to suggest exercises as per user profile using recommedation algorithm for better user engagement.',
          imageUrl:
            'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          link: 'https://fitluck.netlify.app',
        },
        {
          title: 'Microservices E-commerce',
          description:
            'Advanced Ecommerce Backend at scale in Spring Boot using Eureka, Kafka, API Gateway & Docker handling real-time order processing, inventory management and secure payments',
          imageUrl:
            'https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          link: 'https://github.com/codekeshri/ecommerce',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Arvind Keshri ', description: '', imageURL: '' },
  social: {
    linkedin: 'codekeshri',
    x: 'iarvindkeshri',
    website: 'https://codekeshri.github.io/portfolio/',
    phone: '',
    email: 'arvidce@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/12Ev9MpaxIH9L3VoSaR7sewl58RTG4dfS/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Machine Learning',
    'Generative AI',
    'Agentic AI',
    'Java',
    'Spring Boot',
    'MERN',
    'Docker',
    'Git',
    'AWS',
    'Microservices',
    'Serverless',
    'PostgreSQL',
    'Linux',
  ],
  experiences: [
    {
      company: 'Neosoft Technologies',
      position: 'Software Engineer',
      from: 'January 2025',
      to: 'May 2026',
      companyLink: 'https://www.neosofttech.com/',
      logo: 'https://university.neosofttech.com/public/images/neosoft.svg',
    },
    {
      company: 'Teamopine Solutions',
      position: 'Software Developer',
      from: 'August 2024',
      to: 'December 2025',
      companyLink: 'https://www.teamopine.com/',
      logo: 'https://www.teamopine.com/Content/images/logo.svg',
    },
    {
      company: 'SISL Infotech',
      position: 'Fullstack Software Developer',
      from: 'April 2024',
      to: 'August 2024',
      companyLink: 'https://www.sislinfotech.com/',
      logo: 'https://www.sislinfotech.com/wp-content/uploads/2019/07/SISL-Logo-1.png',
    },
    {
      company: 'Sharpener',
      position: 'Backend Developer',
      from: 'March 2023',
      to: 'May 2024',
      companyLink: 'https://www.sharpener.tech/',
      logo: 'https://sharpener.blob.core.windows.net/landing/logo/sharpenerLogo.png',
    },
  ],
  certifications: [
    {
      name: 'TLE eliminators',
      body: 'Level 1 Competitive Programming, An intensive program focused on mastering data structures and advanced algorithms to efficiently solve complex, time-constrained programming problems.',
      year: 'March 2024',
      link: 'https://www.linkedin.com/in/codekeshri/overlay/Certifications/704419553/treasury/?profileId=ACoAAEOStusBtGkfgeInQVSO-Htgo-l6dYTXRG0',
      logo: 'https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ],
  codingProfiles: [
    {
      name: 'GitHub',
      link: 'https://github.com/codekeshri',
    },
    {
      name: 'LeetCode',
      link: 'https://leetcode.com/u/codekeshri/',
    },
    {
      name: 'Codeforces',
      link: 'https://codeforces.com/profile/Code_keshri',
    },
    {
      name: 'CodeChef',
      link: 'https://www.codechef.com/users/codekeshri',
    },
    {
      name: 'GeeksforGeeks',
      link: 'https://www.geeksforgeeks.org/profile/arvind_keshri',
    },
  ],
  educations: [
    {
      institution: 'Delhi Technological University',
      degree: 'Bachelor of Engineering, Mech.',
      from: '2020',
      to: '2024',
      logo: 'https://we-recycle.org/wp-content/uploads/2014/03/dtu-logo.png?w=300',
    },
  ],
  achievements: [
    {
      title: 'Tilkamanhi University CAT topper',
      description: 'Ranked 2nd among the 100,000+ applicants for admission in a highly competitive state-level admission test for Intermediate.',
      imageUrl: 'https://tmbu.collegeesolution.org/Images/TMBU_LOGO.png',
      link: 'https://www.linkedin.com/in/codekeshri/',
    },
    {
      title: 'High Performer in Enterprise Insurance',
      description: 'Selected as one of the key members for handling Production Live for Motor Insurance and Mobile Insurance External Vendors in Serverless Microservices Setup.',
      imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200&auto=format&fit=crop',
      link: 'https://www.linkedin.com/in/codekeshri/',
    },
    {
      title: 'Solving For Programming Contests',
      description: 'Recognized in top 25% in Leetcode & Codechef contests, performing consistently, competing farely and always pushing toward achieving 1% more.',
      imageUrl: 'https://images.unsplash.com/photo-1775994121053-35fd6d91703b?q=80&w=1316&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://www.linkedin.com/in/codekeshri/',
    },
  ],
  positionsOfResponsibility: [
    {
      position: 'Mentor & Leader for Backend',
      company: 'Sharpener',
      from: 'August 2023',
      to: 'May 2024',
      description: 'Mentored 20+ contributors, fostering impactful community contributions and engagement on backend projects.',
      logo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&auto=format&fit=crop',
      tags: ['ContributeWithMe', 'OpenSourceCommunity', 'BuildInPublic'],
    },
    {
      position: 'Leading the Resourcing Team',
      company: 'Neosoft',
      from: 'May 2025',
      to: 'Mar 2026',
      description: 'Led a team of 6 developers outsourced to insurance client for serverless microservices backend, engaging the team in business understanding participation and improving company visibility at client end.',
      logo: 'https://images.unsplash.com/photo-1541844053589-346841d0b34c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['TeamLeadership', 'LeadWithImpact', 'EventLeadership'],
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
