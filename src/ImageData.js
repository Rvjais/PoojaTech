// src/imageData.js

// Import all storage unit images
import storage1 from './assets/My Products-1-001/My Products/storage1.jpg';
import storage2 from './assets/My Products-1-001/My Products/storage2.jpg';
import storage4 from './assets/My Products-1-001/My Products/storage4.jpg'; // Note: Original code used storage4 for what might have been storage3 logically
import storage5 from './assets/My Products-1-001/My Products/storage5.jpg';
import storage6 from './assets/My Products-1-001/My Products/storage6.jpg';
import storage7 from './assets/My Products-1-001/My Products/storage7.jpg';
import storage8 from './assets/My Products-1-001/My Products/storage8.jpg';
import storage9 from './assets/My Products-1-001/My Products/storage9.jpg';
import storage10 from './assets/My Products-1-001/My Products/storage10.jpg';

// Import all trolly images
import trolly1 from './assets/My Products-1-001/My Products/trolly1.jpeg';
import trolly2 from './assets/My Products-1-001/My Products/trolly2.jpg';
import trolly3 from './assets/My Products-1-001/My Products/trolly3.jpg';
import trolly4 from './assets/My Products-1-001/My Products/trolly4.webp';
import trolly5 from './assets/My Products-1-001/My Products/trolly5.webp';

export const storageImages = [
  {
    id: 'storage-unit-1',
    src: storage1,
    alt: 'Hospital Storage Unit 1',
    description: 'Robust and spacious storage unit designed for medical supplies and equipment, featuring multiple compartments and a durable build ideal for hospital environments.',
  },
  {
    id: 'storage-unit-2',
    src: storage2,
    alt: 'Hospital Storage Unit 2',
    description: 'Compact and efficient storage solution, ideal for small spaces in clinics or patient rooms, with an easy-access design for quick retrieval.',
  },
  {
    id: 'storage-unit-3', // Changed id to reflect the image (storage4.jpg) more clearly
    src: storage4,
    alt: 'Hospital Storage Unit 3',
    description: 'Versatile storage cabinet with secure locking mechanisms, suitable for sensitive medical documents or pharmaceuticals, ensuring content security.',
  },
  {
    id: 'storage-unit-4',
    src: storage5,
    alt: 'Hospital Storage Unit 4',
    description: 'Large-capacity storage system with adjustable shelves, perfect for organizing a wide range of hospital inventory from linens to specialized tools.',
  },
  {
    id: 'storage-unit-5',
    src: storage6,
    alt: 'Hospital Storage Unit 5',
    description: 'Specialized storage unit with clear panels for quick visual inspection of contents, often used in pharmacies or labs for efficient stock management.',
  },
  {
    id: 'storage-unit-6',
    src: storage7,
    alt: 'Hospital Storage Unit 6',
    description: 'Mobile storage cart with multiple drawers, providing easy transport and access to essential supplies during medical procedures or ward rounds.',
  },
  {
    id: 'storage-unit-7',
    src: storage8,
    alt: 'Hospital Storage Unit 7',
    description: 'Heavy-duty storage locker for large medical equipment, ensuring safety and organization in busy hospital environments, built for durability.',
  },
  {
    id: 'storage-unit-8',
    src: storage9,
    alt: 'Hospital Storage Unit 8',
    description: 'Compact under-counter storage solution, maximizing space utility in examination rooms or nurses\' stations, offering convenient storage.',
  },
  {
    id: 'storage-unit-9',
    src: storage10,
    alt: 'Hospital Storage Unit 9',
    description: 'Customizable modular storage units, allowing hospitals to adapt to changing storage needs and space configurations with flexible design.',
  },
];

export const trollyImages = [
  {
    id: 'medical-trolly-1',
    src: trolly1,
    alt: 'Medical Trolly 1',
    description: 'Standard medical trolly with multiple shelves and smooth-rolling casters, essential for daily hospital rounds and general transport of medical items.',
  },
  {
    id: 'medical-trolly-2',
    src: trolly2,
    alt: 'Medical Trolly 2',
    description: 'Emergency crash cart trolly, equipped with drawers for critical medications and resuscitation equipment, designed for rapid deployment in emergencies.',
  },
  {
    id: 'medical-trolly-3',
    src: trolly3,
    alt: 'Medical Trolly 3',
    description: 'Utility service trolly with sturdy construction, perfect for transporting linens, waste, or maintenance tools efficiently across hospital departments.',
  },
  {
    id: 'medical-trolly-4',
    src: trolly4,
    alt: 'Medical Trolly 4',
    description: 'Specialized anesthesia trolly with organized compartments for instruments and supplies, ensuring efficiency and quick access in the operating room.',
  },
  {
    id: 'medical-trolly-5',
    src: trolly5,
    alt: 'Medical Trolly 5',
    description: 'Portable medication dispensing trolly with secure drawers and a work surface, facilitating safe and accurate drug administration at the patient bedside.',
  },
];

// Export all image data for easier import in other components
export const allProducts = [...storageImages, ...trollyImages];
