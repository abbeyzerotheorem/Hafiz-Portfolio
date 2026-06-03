export type ProjectCategory = 'Logos' | 'Posters' | 'UI Design' | 'Brands Managed';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  imageId: string;
}

export const projects: Project[] = [
  { id: 'proj-32', imageId: 'logo-15', title: 'Logo 15', category: 'Logos' },
  { id: 'proj-33', imageId: 'logo-16', title: 'Logo 16', category: 'Logos' },
  { id: 'proj-34', imageId: 'logo-17', title: 'Logo 17', category: 'Logos' },
  { id: 'proj-35', imageId: 'logo-18', title: 'Logo 18', category: 'Logos' },
  { id: 'proj-36', imageId: 'logo-19', title: 'Logo 19', category: 'Logos' },
  { id: 'proj-37', imageId: 'logo-20', title: 'Logo 20', category: 'Logos' },
  { id: 'proj-38', imageId: 'logo-21', title: 'Logo 21', category: 'Logos' },
  { id: 'proj-39', imageId: 'logo-22', title: 'Logo 22', category: 'Logos' },
  { id: 'proj-40', imageId: 'logo-23', title: 'Logo 23', category: 'Logos' },
  { id: 'proj-41', imageId: 'logo-24', title: 'Logo 24', category: 'Logos' },
  { id: 'proj-42', imageId: 'logo-25', title: 'Logo 25', category: 'Logos' },
  { id: 'proj-43', imageId: 'logo-26', title: 'Logo 26', category: 'Logos' },
  { id: 'proj-30', imageId: 'logo-13', title: 'Logo 13', category: 'Logos' },
    { id: 'proj-31', imageId: 'logo-14', title: 'Logo 14', category: 'Logos' },
    { id: 'proj-1', imageId: 'logo-1', title: 'YOUNG STARS', category: 'Logos' },
    { id: 'proj-2', imageId: 'logo-2', title: 'Bakers Kitchen', category: 'Logos' },
    { id: 'proj-3', imageId: 'logo-3', title: 'ZIM LOGISTICS LTD', category: 'Logos' },
    { id: 'proj-4', imageId: 'logo-4', title: 'BADAR UL HARMANI', category: 'Logos' },
    { id: 'proj-5', imageId: 'logo-5', title: 'Creative Circle', category: 'Logos' },
    { id: 'proj-23', imageId: 'logo-6', title: 'Logo 6', category: 'Logos' },
    { id: 'proj-24', imageId: 'logo-7', title: 'Logo 7', category: 'Logos' },
    { id: 'proj-25', imageId: 'logo-8', title: 'Logo 8', category: 'Logos' },
    { id: 'proj-26', imageId: 'logo-9', title: 'Logo 9', category: 'Logos' },
    { id: 'proj-27', imageId: 'logo-10', title: 'Logo 10', category: 'Logos' },
    { id: 'proj-28', imageId: 'logo-11', title: 'Logo 11', category: 'Logos' },
    { id: 'proj-29', imageId: 'logo-12', title: 'Logo 12', category: 'Logos' },
    { id: 'proj-6', imageId: 'poster-1', title: 'Music Fest 2024', category: 'Posters' },
    { id: 'proj-7', imageId: 'poster-2', title: 'Art Exhibition', category: 'Posters' },
    { id: 'proj-8', imageId: 'poster-3', title: 'Film Noir Marathon', category: 'Posters' },
    { id: 'proj-9', imageId: 'poster-4', title: 'Tech Conference', category: 'Posters' },
    { id: 'proj-10', imageId: 'poster-5', title: 'Summer Sale', category: 'Posters' },
    { id: 'proj-11', imageId: 'poster-6', title: 'Eco Awareness', category: 'Posters' },
    { id: 'proj-12', imageId: 'poster-7', title: 'Indie Game Launch', category: 'Posters' },
    { id: 'proj-13', imageId: 'poster-8', title: 'Poetry Night', category: 'Posters' },
    { id: 'proj-14', imageId: 'ui-1', title: 'Mobile Banking App', category: 'UI Design' },
    { id: 'proj-15', imageId: 'ui-2', title: 'Travel Booking Website', category: 'UI Design' },
    { id: 'proj-16', imageId: 'ui-3', title: 'Fitness Tracker Dashboard', category: 'UI Design' },
    { id: 'proj-17', imageId: 'ui-4', title: 'E-commerce Store UI', category: 'UI Design' },
    { id: 'proj-23', imageId: 'brand-6', title: 'DHA_Cinema', category: 'Brands Managed' },
    { id: 'proj-25', imageId: 'brand-8', title: 'She Trends', category: 'Brands Managed' },
    { id: 'proj-26', imageId: 'brand-9', title: 'She Trends', category: 'Brands Managed' },
    { id: 'proj-24', imageId: 'brand-7', title: 'She Trends', category: 'Brands Managed' },
    { id: 'proj-18', imageId: 'brand-1', title: 'Starlight Coffee', category: 'Brands Managed' },
    { id: 'proj-19', imageId: 'brand-2', title: 'Urban Edge Apparel', category: 'Brands Managed' },
    { id: 'proj-20', imageId: 'brand-3', title: 'Innovate Solutions', category: 'Brands Managed' },
    { id: 'proj-21', imageId: 'brand-4', title: 'Greenleaf Organics', category: 'Brands Managed' },
    { id: 'proj-22', imageId: 'brand-5', title: 'Momentum Fitness', category: 'Brands Managed' },
    
];

export const caseStudyLogoIds = ['logo-1', 'logo-2', 'logo-3', 'logo-4'];

export const categoryCounts = {
    'All': projects.length,
    'Logos': projects.filter(p => p.category === 'Logos').length,
    'Posters': projects.filter(p => p.category === 'Posters').length,
    'UI Design': projects.filter(p => p.category === 'UI Design').length,
    'Brands Managed': projects.filter(p => p.category === 'Brands Managed').length
  };
