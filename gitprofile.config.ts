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
      header: 'Github Projects',
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
        projects: ['codekeshri/quotesApp', 'codekeshri/ecommerce', 'codekeshri/fitluck', 'codekeshri/chatapp'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Fitluck',
          description:
            'A platform to track your gym performance, log your results and stay motivated',
          imageUrl:
            'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          link: 'https://fitluck.netlify.app/login',
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
    'Java',
    'Spring Boot',
    'JavaScript',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
    'Docker',
    'Git',
    'React.js',
    'Angular',
    'C++',
    'Python',
    'Typescript',
    'Linux',
  ],
  experiences: [
    {
      company: 'Neosoft Technologies',
      position: 'Software Engineer',
      from: 'January 2025',
      to: 'May 2026',
      companyLink: 'https://www.neosofttech.com/',
    },
    {
      company: 'Teamopine Solutions',
      position: 'Software Developer',
      from: 'August 2024',
      to: 'December 2025',
      companyLink: 'https://www.teamopine.com/',
    },
    {
      company: 'SISL Infotech',
      position: 'Fullstack Software Developer',
      from: 'April 2024',
      to: 'August 2024',
      companyLink: 'https://www.sislinfotech.com/',
    },
    {
      company: 'Sharpener',
      position: 'Backend Developer',
      from: 'March 2023',
      to: 'May 2024',
      companyLink: 'https://www.sharpener.tech/',
    },
  ],
  certifications: [
    {
      name: 'TLE eliminators',
      body: 'Level 1 Competitive Programming',
      year: '2024',
      link: 'https://www.linkedin.com/in/codekeshri/overlay/Certifications/704419553/treasury/?profileId=ACoAAEOStusBtGkfgeInQVSO-Htgo-l6dYTXRG0',
    },
  ],
  educations: [
    {
      institution: 'Delhi Technological University',
      degree: 'B.E.',
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
