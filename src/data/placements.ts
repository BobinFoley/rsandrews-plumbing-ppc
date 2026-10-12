import placementData from './image-placements.json';

export interface ImagePlacement {
  id: string;
  page: string;
  zone: 'hero' | 'top-content' | 'in-content' | 'callout-banner' | 'sidebar-badge' | 'custom';
  image: string;
  imageAlt: string;
  caption?: string;
  notes?: string;
  status: 'active' | 'in-review' | 'draft';
  updatedAt: string;
}

export interface CatalogImage {
  id: string;
  filename: string;
  path: string;
  title: string;
  category: 'Tech & Service' | 'Banners & Hero' | 'Logos & Badges' | 'Equipment & Brands' | 'Vehicles & Team';
  alt: string;
  dimensions?: string;
  tags: string[];
}

export const staticCatalogImages: CatalogImage[] = [
  {
    id: 'plumber-rsandrews-webp',
    filename: 'plumber-rsandrews.webp',
    path: '/images/plumber-rsandrews.webp',
    title: 'RS Andrews Service Van & Emergency Plumber Banner',
    category: 'Banners & Hero',
    alt: 'RS Andrews licensed emergency plumber loading service van in Metro Atlanta',
    dimensions: '1280x471',
    tags: ['Hero', 'Plumber', 'Service Van', 'PEX', 'Emergency', 'Sitewide', 'WebP']
  },
  {
    id: 'plumber-rsandrews-hero',
    filename: 'plumber-rsandrews.jpeg',
    path: '/images/plumber-rsandrews.jpeg',
    title: 'RS Andrews Service Van & Emergency Plumber',
    category: 'Banners & Hero',
    alt: 'RS Andrews licensed emergency plumber loading service van in Metro Atlanta',
    dimensions: '1376x768',
    tags: ['Hero', 'Plumber', 'Service Van', 'PEX', 'Emergency', 'Sitewide']
  },
  {
    id: 'hero-banner-main',
    filename: 'hero.jpg',
    path: '/images/hero.jpg',
    title: 'RS Andrews 24/7 Emergency Plumber Hero',
    category: 'Banners & Hero',
    alt: 'RS Andrews licensed emergency plumber with service truck in Metro Atlanta',
    dimensions: '1376x768',
    tags: ['Hero', 'Plumber', 'Emergency', 'Truck', 'Atlanta']
  },
  {
    id: 'plumber-soldering-copper-joint',
    filename: 'plumber-soldering-a-small-copper-joint.webp',
    path: '/images/plumber-soldering-a-small-copper-joint.webp',
    title: 'RS Andrews Master Plumber Soldering Copper Pipe Joint',
    category: 'Tech & Service',
    alt: 'RS Andrews Master Plumber soldering a copper pipe joint during a plumbing repair in Metro Atlanta',
    dimensions: '1200x800',
    tags: ['Plumbing Repair', 'Soldering', 'Copper Pipe', 'Master Plumber']
  },
  {
    id: 'tankless-water-heater',
    filename: 'tankless-water-heater5fg.webp',
    path: '/images/tankless-water-heater5fg.webp',
    title: 'RS Andrews Tankless Water Heater Installation & Repair',
    category: 'Equipment & Brands',
    alt: 'RS Andrews High-Efficiency Tankless Water Heater Installation & Repair Metro Atlanta',
    dimensions: '1254x1254',
    tags: ['Water Heater', 'Tankless', 'Plumbing', 'Atlanta']
  },
  {
    id: 'ac-repair-tech',
    filename: 'ac-repair.jpg',
    path: '/images/ac-repair.jpg',
    title: 'RS Andrews Master Plumber Diagnostic',
    category: 'Tech & Service',
    alt: 'RS Andrews technician inspecting residential plumbing and water line equipment',
    dimensions: '600x450',
    tags: ['Plumbing Repair', 'Diagnostic', 'Service']
  },
  {
    id: 'ac-repair-condenser',
    filename: 'ac-repair31-1.jpg',
    path: '/images/ac-repair31-1.jpg',
    title: 'Plumbing & Outdoor Line Diagnostic',
    category: 'Tech & Service',
    alt: 'Technician inspecting main water line and home equipment in residential yard',
    dimensions: '800x533',
    tags: ['Plumber', 'Outdoor Line', 'Inspection']
  },
  {
    id: 'heating-air-service',
    filename: 'heatingand-air-conditioning.jpg',
    path: '/images/heatingand-air-conditioning.jpg',
    title: 'RS Andrews Plumbing Service Specialist',
    category: 'Tech & Service',
    alt: 'RS Andrews licensed plumbing technician performing residential inspection',
    dimensions: '1000x667',
    tags: ['Plumbing', 'Water Line', 'Inspection']
  },
  {
    id: 'furnace-install',
    filename: 'furnace-install-lewisville.jpg',
    path: '/images/furnace-install-lewisville.jpg',
    title: 'Indoor Mechanical & Utility Installation',
    category: 'Equipment & Brands',
    alt: 'Clean indoor utility, gas line, and plumbing installation',
    dimensions: '800x600',
    tags: ['Utility', 'Gas Line', 'Installation']
  },
  {
    id: 'hvac-heatpump-install',
    filename: 'hvac-install.jpg',
    path: '/images/hvac-install.jpg',
    title: 'Home Utility & Water Equipment Installation',
    category: 'Equipment & Brands',
    alt: 'New energy-efficient home utility installation outside home',
    dimensions: '900x600',
    tags: ['Water System', 'Replacement', 'Installation']
  },
  {
    id: 'rheem-water-heater-install',
    filename: '2558-rheem-water-heater-installation.webp',
    path: '/images/2558-rheem-water-heater-installation.webp',
    title: 'RS Andrews Professional Rheem Water Heater Installation',
    category: 'Equipment & Brands',
    alt: 'RS Andrews Professional Rheem Water Heater Installation & Replacement Metro Atlanta',
    dimensions: '720x1280',
    tags: ['Water Heater', 'Rheem', 'Installation', 'Atlanta']
  },
  {
    id: 'ac-major-brands',
    filename: 'ac-brands.jpg',
    path: '/images/ac-brands.jpg',
    title: 'Major Plumbing & Fixture Brands',
    category: 'Equipment & Brands',
    alt: 'Major plumbing and water heater brands: Bradford White, Rheem, AO Smith, Kohler, Moen',
    dimensions: '1200x400',
    tags: ['Brands', 'Rheem', 'Bradford White', 'Kohler']
  },
  {
    id: 'rs-service-van',
    filename: 'rs-truck.png',
    path: '/images/rs-truck.png',
    title: 'RS Andrews 24/7 Mobile Plumbing Truck',
    category: 'Vehicles & Team',
    alt: 'RS Andrews emergency plumbing service van with Smiley logo',
    dimensions: '600x380',
    tags: ['Van', '24/7 Truck', 'Fleet']
  },
  {
    id: 'rs-team-photo',
    filename: 'rsandrews-2020.jpg',
    path: '/images/rsandrews-2020.jpg',
    title: 'RS Andrews Professional Team & Fleet',
    category: 'Vehicles & Team',
    alt: 'RS Andrews staff, plumbers, and fleet lined up at Atlanta headquarters',
    dimensions: '1200x628',
    tags: ['Team', 'Staff', 'Since 1968']
  },
  {
    id: 'brand-logo-main',
    filename: 'brand-logo.jpg',
    path: '/images/brand-logo.jpg',
    title: 'RS Andrews Brand Logo',
    category: 'Logos & Badges',
    alt: 'RS Andrews Plumbing logo with yellow smiley',
    dimensions: '400x120',
    tags: ['Logo', 'Header', 'Branding']
  },
  {
    id: 'nate-badge',
    filename: 'nate.png',
    path: '/images/nate.png',
    title: 'NATE Certified Certification Seal',
    category: 'Logos & Badges',
    alt: 'North American Technician Excellence (NATE) certified badge',
    dimensions: '250x250',
    tags: ['Badge', 'Trust', 'Certification']
  },
  {
    id: 'consumer-choice-badge',
    filename: 'rs-cons.png',
    path: '/images/rs-cons.png',
    title: 'Consumer Choice Award Badge',
    category: 'Logos & Badges',
    alt: 'Consumer Choice Award badge',
    dimensions: '200x200',
    tags: ['Badge', 'Award', 'Trust']
  },
  {
    id: 'rs-smiley-character',
    filename: 'SMILEY-RS-Andrews.png',
    path: '/images/SMILEY-RS-Andrews.png',
    title: 'RS Andrews Smiling Character Mascot',
    category: 'Logos & Badges',
    alt: 'RS Andrews smiling service icon mascot',
    dimensions: '300x300',
    tags: ['Mascot', 'Smiley', 'Icon']
  },
  {
    id: 'atlanta-skyline-badge',
    filename: 'logoATL.png',
    path: '/images/logoATL.png',
    title: 'Atlanta Skyline Local Badge',
    category: 'Logos & Badges',
    alt: 'RS Andrews Metro Atlanta local badge',
    dimensions: '300x150',
    tags: ['Atlanta', 'Local', 'Metro']
  },
  {
    id: 'five-star-banner',
    filename: '5-star-background-1536x384.jpg',
    path: '/images/5-star-background-1536x384.jpg',
    title: '5-Star Customer Rating Panorama Banner',
    category: 'Banners & Hero',
    alt: '5-star customer review banner with gold stars',
    dimensions: '1536x384',
    tags: ['Reviews', '5-Star', 'Gold Stars']
  },
  {
    id: 'gold-star-texture',
    filename: 'star-gold-background.jpg',
    path: '/images/star-gold-background.jpg',
    title: 'Gold Star Review Background',
    category: 'Banners & Hero',
    alt: 'Gold star background texture for ratings and testimonials',
    dimensions: '1200x600',
    tags: ['Stars', 'Ratings', 'Background']
  },
  {
    id: 'slider-promotion-banner',
    filename: 'slider5-1-1024x377.jpg',
    path: '/images/slider5-1-1024x377.jpg',
    title: 'Seasonal Promo Slider Banner',
    category: 'Banners & Hero',
    alt: 'RS Andrews seasonal heating and cooling discount banner',
    dimensions: '1024x377',
    tags: ['Slider', 'Promotion', 'Specials']
  },
  {
    id: 'banner-comfort-truck',
    filename: 'banner-4-1-1024x377.jpg',
    path: '/images/banner-4-1-1024x377.jpg',
    title: 'Comfort Guarantee & Truck Banner',
    category: 'Banners & Hero',
    alt: 'RS Andrews 100% satisfaction guarantee with service vehicle',
    dimensions: '1024x377',
    tags: ['Banner', 'Truck', 'Guarantee']
  },
  {
    id: 'residential-plumbing-brands-fixtures-banner',
    filename: 'residential-plumbing-brands-fixtures-appliances.webp',
    path: '/images/residential-plumbing-brands-fixtures-appliances.webp',
    title: 'RS Andrews Residential Plumbing Brands & Fixtures Banner',
    category: 'Banners & Hero',
    alt: 'RS Andrews Plumbing Brands, Fixtures and Appliances Servicing Metro Atlanta 365 Days a Year',
    dimensions: '1280x714',
    tags: ['Banner', 'Plumbing Brands', 'Fixtures', 'Appliances', 'Metro Atlanta']
  }
];

export function getPlacements(): ImagePlacement[] {
  return (placementData.placements || []) as ImagePlacement[];
}

export function getPlacementsForPage(pagePath: string): ImagePlacement[] {
  const all = getPlacements();
  // Normalize path with leading & trailing slashes
  const cleanPath = pagePath.startsWith('/') ? pagePath : `/${pagePath}`;
  const finalPath = cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`;
  
  const pageMatches = all.filter(p => {
    if (p.status !== 'active') return false;
    const target = p.page.endsWith('/') ? p.page : `${p.page}/`;
    return target === finalPath || p.page === pagePath;
  });

  // If this page does not have a page-specific hero, include site-wide fallback hero ('*' or 'all')
  const hasHero = pageMatches.some(p => p.zone === 'hero');
  if (!hasHero) {
    const siteWideHero = all.find(p => p.status === 'active' && p.zone === 'hero' && (p.page === '*' || p.page === 'all'));
    if (siteWideHero) {
      pageMatches.push(siteWideHero);
    }
  }

  return pageMatches;
}
