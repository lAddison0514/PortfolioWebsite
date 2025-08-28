import { EXPERIENCE_SECTION, GAMES_SECTION, ENGINE_RENDERING_SECTION, WEB_DEV_SECTION, MODELING_SECTION } from './PortfolioCardInfo.js';

// Function to preload a single image
const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
        img.src = src;
    });
};

// Function to get all unique image locations from all sections
const getAllImageLocations = () => {
    const allSections = [
        EXPERIENCE_SECTION,
        GAMES_SECTION,
        ENGINE_RENDERING_SECTION,
        WEB_DEV_SECTION,
        MODELING_SECTION
    ];
    
    const imageLocations = new Set();
    
    allSections.forEach(section => {
        section.forEach(item => {
            if (item.imgLocation && item.imgLocation.trim() !== '') {
                imageLocations.add(item.imgLocation);
            }
        });
    });
    
    return Array.from(imageLocations);
};

// Main function to preload all portfolio images
export const preloadPortfolioImages = async () => {
    const imageLocations = getAllImageLocations();
    const preloadPromises = imageLocations.map(imgLocation => 
        preloadImage(imgLocation).catch(error => {
            console.warn(`Failed to preload image: ${imgLocation}`, error);
            return null; // Continue with other images even if one fails
        })
    );
    
    try {
        await Promise.all(preloadPromises);
        console.log(`Successfully preloaded ${imageLocations.length} portfolio images`);
    } catch (error) {
        console.error('Error preloading portfolio images:', error);
    }
};

// Function to get image count for debugging
export const getImageCount = () => {
    return getAllImageLocations().length;
};
