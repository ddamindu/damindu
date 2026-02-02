
import { GalleryImage, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '#/' },
  { label: 'Portfolio', path: '#/gallery' },
  { label: 'About', path: '#/about' },
  { label: 'Contact', path: '#/contact' },
];

export interface EnhancedGalleryImage extends GalleryImage {
  description: string;
  longDescription: string;
  projectUrl?: string;
  deliverables: string[];
  role: string;
}

export const GALLERY_IMAGES: EnhancedGalleryImage[] = [
  { 
    id: '1', 
    url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1000', 
    title: 'Nexus Visual Identity', 
    category: 'branding',
    description: 'A comprehensive brand system developed for a leading tech consultancy.',
    longDescription: 'The Nexus identity was built around the concept of "connected intelligence." I developed a flexible grid system and a custom typography set that allowed the brand to remain consistent across diverse digital and print applications. The project involved deep competitive analysis and the creation of a 50-page brand manual.',
    projectUrl: '#/gallery',
    deliverables: ['Logo Architecture', 'Brand Manual', 'Visual Language', 'Iconography'],
    role: 'Lead Visual Designer'
  },
  { 
    id: '2', 
    url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000', 
    title: 'Velocity Social Strategy', 
    category: 'social-media',
    description: 'Data-driven social media assets designed to increase engagement for a fintech disruptor.',
    longDescription: 'For Velocity, the challenge was to make complex fintech concepts accessible. I designed a series of educational motion graphics and high-impact static templates that reduced information friction and increased user retention by 30% within the first month of deployment.',
    projectUrl: '#/gallery',
    deliverables: ['Content Framework', 'Motion Graphics', 'Template System', 'Art Direction'],
    role: 'Creative Strategist'
  },
  { 
    id: '3', 
    url: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000', 
    title: 'Lumina Interface Design', 
    category: 'web-ui',
    description: 'A minimalist enterprise interface concept for architecture management systems.',
    longDescription: 'Lumina focuses on the intersection of data visualization and spatial management. The UI utilizes a "glassmorphic" aesthetic to keep the focus on architectural drawings while providing high-level project telemetry at a glance. Built with a focus on accessibility and multi-device responsiveness.',
    projectUrl: '#/gallery',
    deliverables: ['UI/UX Design', 'Design System', 'Prototyping', 'Component Library'],
    role: 'UI Designer'
  },
  { 
    id: '4', 
    url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000', 
    title: 'Aura Mobile App', 
    category: 'web-ui',
    description: 'End-to-end mobile design focusing on health, wellness, and intuitive user flow.',
    longDescription: 'Aura required a sensory-friendly interface to align with its wellness mission. I conducted user research to identify key pain points in existing wellness apps and developed a flow that minimizes cognitive load. The visual style uses soft gradients and high-readability sans-serif type.',
    projectUrl: '#/gallery',
    deliverables: ['User Flow', 'High-Fidelity Wireframes', 'Visual Design', 'Interaction Design'],
    role: 'Product Designer'
  },
  { 
    id: '5', 
    url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000', 
    title: 'Ethos Editorial Layout', 
    category: 'branding',
    description: 'Publication layout and typography systems for a high-end sustainable catalog.',
    longDescription: 'Ethos is a publication dedicated to sustainable luxury. The design strategy used recycled aesthetic cues—stark layouts, tactile-inspired digital textures, and a classic serif-driven typographic hierarchy—to communicate both prestige and environmental responsibility.',
    projectUrl: '#/gallery',
    deliverables: ['Publication Design', 'Editorial Grid', 'Typography System', 'Brand Integration'],
    role: 'Editorial Designer'
  },
  { 
    id: '6', 
    url: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1000', 
    title: 'Peak Lifestyle Brand', 
    category: 'social-media',
    description: 'Cohesive Instagram strategy and asset creation for an outdoor lifestyle brand.',
    longDescription: 'Peak Lifestyle needed to move away from generic outdoor photography toward a distinct brand voice. I developed a curated "visual tone of voice" that combined raw adventure shots with geometric graphic overlays, creating a unique and recognizable feed presence.',
    projectUrl: '#/gallery',
    deliverables: ['Grid Strategy', 'Graphic Assets', 'Tone of Voice Guide', 'Engagement Assets'],
    role: 'Visual Identity Lead'
  }
];
