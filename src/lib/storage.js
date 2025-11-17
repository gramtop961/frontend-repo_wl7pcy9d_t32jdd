// Local storage helpers and demo data for Kalyanii | Portfolio
export const STORAGE_KEY = 'kalyanii_portfolio_v1';

const demoData = {
  profile: {
    name: 'Kalyanii Alexa',
    title: 'AI Researcher · Full‑Stack Engineer',
    location: 'Earth · Remote',
    bio: 'Passionate about designing intelligent systems with human‑centered craft. I merge research rigor with elegant product engineering to build experiences that feel like magic.',
    mission: 'Craft calm, premium, future‑proof products that empower people.',
    vision: 'A world where advanced intelligence is delightful, accessible, and ethical.',
    avatar: '',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      scholar: 'https://scholar.google.com',
      twitter: 'https://x.com',
      website: 'https://example.com'
    }
  },
  stats: {
    years: 6,
    projects: 28,
    research: 12,
    certificates: 9
  },
  certificates: [
    { id: 'c1', title: 'Deep Learning Specialization', org: 'Coursera · deeplearning.ai', year: '2023', type: 'PDF', url: '', description: 'Sequence models, optimization, and CNNs.' },
    { id: 'c2', title: 'Advanced React', org: 'Meta', year: '2024', type: 'PDF', url: '', description: 'Scalable patterns and performance.' },
    { id: 'c3', title: 'Prompt Engineering', org: 'OpenAI', year: '2024', type: 'PDF', url: '', description: 'Systematic prompting strategies.' },
    { id: 'c4', title: 'Cloud Architecture', org: 'Google', year: '2022', type: 'PDF', url: '', description: 'GCP architectures and SRE.' },
    { id: 'c5', title: 'Product Design', org: 'IDEO U', year: '2021', type: 'PDF', url: '', description: 'Human‑centered design.' },
    { id: 'c6', title: 'Data Visualization', org: 'Tableau', year: '2020', type: 'PDF', url: '', description: 'Storytelling with data.' },
    { id: 'c7', title: 'Security Essentials', org: 'Cisco', year: '2023', type: 'PDF', url: '', description: 'Zero‑trust foundations.' }
  ],
  projects: [
    { id: 'p1', title: 'Aurora UI', subtitle: 'Design system', tag: 'Design', description: 'A calm, premium component library.', image: '', demo: '#', repo: '#', pdf: '' },
    { id: 'p2', title: 'NeuroNav', subtitle: 'Research tool', tag: 'AI', description: 'Interactive embeddings explorer.', image: '', demo: '#', repo: '#', pdf: '' },
    { id: 'p3', title: 'Pulseboard', subtitle: 'Analytics', tag: 'Data', description: 'GPU‑accelerated dashboards.', image: '', demo: '#', repo: '#', pdf: '' },
    { id: 'p4', title: 'Verve', subtitle: 'Motion', tag: 'UX', description: 'Framer‑motion powered interactions.', image: '', demo: '#', repo: '#', pdf: '' },
    { id: 'p5', title: 'Helix Docs', subtitle: 'Docs', tag: 'Docs', description: 'Elegant knowledge base.', image: '', demo: '#', repo: '#', pdf: '' },
    { id: 'p6', title: 'SilentWave', subtitle: 'Privacy', tag: 'Security', description: 'On‑device inference sandbox.', image: '', demo: '#', repo: '#', pdf: '' },
    { id: 'p7', title: 'Violet Grid', subtitle: '3D', tag: 'WebGL', description: 'Spline + WebGL experiments.', image: '', demo: '#', repo: '#', pdf: '' }
  ],
  research: [
    { id: 'r1', title: 'Calm AI Interfaces', venue: 'CHI 2024', abstract: 'Guidelines for calm, premium AI experiences.', pdf: '', year: '2024' },
    { id: 'r2', title: 'Trust in Black‑Box Models', venue: 'NeurIPS Workshop', abstract: 'Evaluating interpretability at scale.', pdf: '', year: '2023' },
    { id: 'r3', title: 'Embodied Agents', venue: 'ICRA', abstract: 'Robotics meets LLMs.', pdf: '', year: '2023' },
    { id: 'r4', title: 'On‑device Diffusion', venue: 'ArXiv', abstract: 'Mobile‑friendly diffusion models.', pdf: '', year: '2024' },
    { id: 'r5', title: 'UX of Prompting', venue: 'UIST', abstract: 'HCI patterns for prompts.', pdf: '', year: '2022' },
    { id: 'r6', title: 'Ethical Evaluation', venue: 'FAccT', abstract: 'Measuring unintended harm.', pdf: '', year: '2021' },
    { id: 'r7', title: 'Data Compaction', venue: 'KDD', abstract: 'Training with fewer tokens.', pdf: '', year: '2022' }
  ],
  journey: [
    { id: 'j1', role: 'Senior AI Engineer', org: 'Nova Labs', period: '2023 — Present', description: 'Leading AI product R&D and ML platformization.', attachments: [] },
    { id: 'j2', role: 'Full‑Stack Engineer', org: 'Lumen', period: '2021 — 2023', description: 'Built consumer apps with elegant interactions.', attachments: [] },
    { id: 'j3', role: 'Research Associate', org: 'Tech Institute', period: '2019 — 2021', description: 'Human‑AI collaboration experiments.', attachments: [] }
  ],
  skills: {
    technical: [
      { name: 'TypeScript', level: 85 },
      { name: 'React', level: 92 },
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 88 },
      { name: 'ML/AI', level: 84 }
    ],
    research: [
      { name: 'HCI Research', level: 90 },
      { name: 'Experiment Design', level: 86 },
      { name: 'Statistics', level: 78 }
    ],
    soft: [
      { name: 'Product Thinking', level: 92 },
      { name: 'Leadership', level: 85 },
      { name: 'Communication', level: 88 }
    ]
  },
  messages: [],
  settings: {
    cv: {
      include: {
        about: true,
        skills: true,
        experience: true,
        research: true,
        projects: true,
        certificates: true,
        socials: true,
        contact: true
      },
      includeAvatar: false
    },
    branding: {
      logoText: 'Kalyanii | Portfolio'
    }
  }
};

export function loadData() {
  try {
    const str = localStorage.getItem(STORAGE_KEY);
    if (!str) return demoData;
    const parsed = JSON.parse(str);
    return { ...demoData, ...parsed };
  } catch (e) {
    console.warn('Failed to load data, using demo', e);
    return demoData;
  }
}

export function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function resetData() {
  localStorage.removeItem(STORAGE_KEY);
}
