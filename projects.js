// ==========================================================================
// MAIN PORTFOLIO DATA FILE
// Add, remove, or edit your projects here.
// ==========================================================================

const projects = [
    {
        title: "Sensor Skins for Vehicle Tires",
        description: "R&D Undergraduate Researcher | Conducted material synthesis and manufacturing research alongside PhD researchers to develop flexible tactile sensor skins. Formulated, mixed, and processed custom polymer elastomer solutions for tire integration to enable real-time tread deformation and dynamic contact-patch data collection.",
        mediaType: "image", // Options: "image" or "video"
        mediaSrc: "media/sensor_skin.png", // Path to image/video inside your media/ folder
        tags: ["R&D", "Sensor Fabrication", "Automotive"],
        githubLink: "https://github.com/eli-mitra/tire-sensor-skins"
    },
    {
        title: "Flexure Beam-Hinge Structural Simulation",
        description: "R&D Undergraduate Researcher | Collaborated with a PhD researcher on non-linear numerical structural analysis for advanced flexible lattice geometries. Developed Python scripts using SciPy to model multi-node out-of-plane buckling behavior along the Z-axis under physical displacements to guide experimental validation.",
        mediaType: "image",
        mediaSrc: "media/beam_hinge.jpg",
        tags: ["R&D", "Python", "SciPy", "FEA", "Structural Mechanics"],
        githubLink: "https://github.com/eli-mitra/lattice-buckling-sim"
    },
    {
        title: "Drone Flight Control Law",
        description: "Engineered a custom rotation rate demand law to improve aerodynamic stability during turbulent conditions. Replaced inefficient rate control loops for high-performance dynamic handling.",
        mediaType: "video", // Rendered automatically as an inline HTML5 video
        mediaSrc: "media/thursday_group3_7",
        tags: ["Python", "Control Theory", "Avionics"],
        githubLink: "https://github.com/eli-mitra/drone-flight-control"
    }
];

// ==========================================================================
// RENDER ENGINE (Renders the projects onto index.html automatically)
// ==========================================================================

function loadProjects() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    grid.innerHTML = ''; // Clear existing content

    projects.forEach(project => {
        // Create card container element
        const card = document.createElement('article');
        card.className = 'project-card';

        // Select media element based on type
        let mediaHTML = '';
        if (project.mediaType === 'video') {
            mediaHTML = `<video src="${project.mediaSrc}" controls muted loop playsinline></video>`;
        } else {
            mediaHTML = `<img src="${project.mediaSrc}" alt="${project.title}" loading="lazy">`;
        }

        // Generate technology tags
        const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        // Construct full card structure
        card.innerHTML = `
            <div class="project-media">
                ${mediaHTML}
            </div>
            <div class="project-content">
                <h2>${project.title}</h2>
                <div class="tags">${tagsHTML}</div>
                <p>${project.description}</p>
                ${project.githubLink && project.githubLink !== '#' ? `<a href="${project.githubLink}" target="_blank" rel="noopener" class="project-link">View Repository →</a>` : ''}
            </div>
        `;

        grid.appendChild(card);
    });
}

// Execute when page finishes loading
document.addEventListener('DOMContentLoaded', loadProjects);
