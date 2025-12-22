export type ProjectCategory = 'Logos' | 'Posters' | 'UI Design' | 'Brands Managed';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  imageId: string;
}

export const projects: Project[] = [
    { id: 'proj-1', imageId: 'logo-1', title: 'YOUNG STARS', description: 'Modern logo for an emerging brand.', category: 'Logos' },
    { id: 'proj-2', imageId: 'logo-2', title: 'Bakers Kitchen', description: 'Elegant branding for a bakery.', category: 'Logos' },
    { id: 'proj-3', imageId: 'logo-3', title: 'ZIM LOGISTICS LTD', description: 'Corporate identity for a logistics company.', category: 'Logos' },
    { id: 'proj-4', imageId: 'logo-4', title: 'BADAR UL HARMANI', description: 'Brand mark for a luxury group.', category: 'Logos' },
    { id: 'proj-5', imageId: 'logo-5', title: 'Creative Circle', description: 'Vibrant logo for a design agency.', category: 'Logos' },
    { id: 'proj-6', imageId: 'poster-1', title: 'Music Fest 2024', description: 'Dynamic poster for a music festival.', category: 'Posters' },
    { id: 'proj-7', imageId: 'poster-2', title: 'Art Exhibition', description: 'Minimalist design for a gallery opening.', category: 'Posters' },
    { id: 'proj-8', imageId: 'poster-3', title: 'Film Noir Marathon', description: 'Vintage-inspired poster for a film event.', category: 'Posters' },
    { id: 'proj-9', imageId: 'poster-4', title: 'Tech Conference', description: 'Futuristic poster for a tech summit.', category: 'Posters' },
    { id: 'proj-10', imageId: 'poster-5', title: 'Summer Sale', description: 'Bright and catchy retail poster.', category: 'Posters' },
    { id: 'proj-11', imageId: 'poster-6', title: 'Eco Awareness', description: 'Informative poster about climate change.', category: 'Posters' },
    { id: 'proj-12', imageId: 'poster-7', title: 'Indie Game Launch', description: 'Pixel art poster for a new game.', category: 'Posters' },
    { id: 'proj-13', imageId: 'poster-8', title: 'Poetry Night', description: 'Elegant and subtle event poster.', category: 'Posters' },
    { id: 'proj-14', imageId: 'ui-1', title: 'Mobile Banking App', description: 'Clean and secure financial app UI.', category: 'UI Design' },
    { id: 'proj-15', imageId: 'ui-2', title: 'Travel Booking Website', description: 'User-friendly interface for a travel site.', category: 'UI Design' },
    { id: 'proj-16', imageId: 'ui-3', title: 'Fitness Tracker Dashboard', description: 'Data visualization for health metrics.', category: 'UI Design' },
    { id: 'proj-17', imageId: 'ui-4', title: 'E-commerce Store UI', description: 'Seamless shopping experience design.', category: 'UI Design' },
    { id: 'proj-18', imageId: 'brand-1', title: 'Starlight Coffee', description: 'Complete brand identity and packaging.', category: 'Brands Managed' },
    { id: 'proj-19', imageId: 'brand-2', title: 'Urban Edge Apparel', description: 'Streetwear brand creation and launch.', category: 'Brands Managed' },
    { id: 'proj-20', imageId: 'brand-3', title: 'Innovate Solutions', description: 'Brand strategy for a tech startup.', category: 'Brands Managed' },
    { id: 'proj-21', imageId: 'brand-4', title: 'Greenleaf Organics', description: 'Branding for an organic food company.', category: 'Brands Managed' },
    { id: 'proj-22', imageId: 'brand-5', title: 'Momentum Fitness', description: 'Identity and marketing for a gym chain.', category: 'Brands Managed' },
];

export const caseStudyLogoIds = ['logo-1', 'logo-2', 'logo-3', 'logo-4'];

export const categoryCounts = {
    'All': projects.length,
    'Logos': projects.filter(p => p.category === 'Logos').length,
    'Posters': projects.filter(p => p.category === 'Posters').length,
    'UI Design': projects.filter(p => p.category === 'UI Design').length,
    'Brands Managed': projects.filter(p => p.category === 'Brands Managed').length
  };