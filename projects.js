// ==========================================================================
// MAIN PORTFOLIO DATA FILE
// ==========================================================================

const projects = [
    {
        title: "Sensor Skins for Vehicle Tires",
        tags: ["R&D", "Sensor Fabrication", "Automotive", "Materials Science"],
        // Attach multiple media items (images or videos)
        media: [
            { type: "image", src: "sensor_skin.png" },
        ],
        objective: "Develop a flexible tactile sensor skin capable of withstanding dynamic tire deformation to gather real-time tread wear and contact-patch telemetry.",
        contribution: "R&D Undergraduate Researcher | Synthesized and processed specialized polymer elastomer formulations alongside PhD researchers, focusing on chemical solution mixing and mold preparation.",
        technicalDetail: "Optimized polymer solution viscosity for consistent sensor membrane thickness. Evaluated mechanical compliance under cyclical mechanical shear to prevent premature delamination.",
        result: "Successfully manufactured functional sensor skin prototypes that maintained signal integrity under physical strain cycles for dynamic bench testing.",
        githubLink: "#"
    },
    {
        title: "Flexure Beam-Hinge Structural Simulation",
        tags: ["R&D", "Python", "SciPy", "FEA", "Structural Mechanics"],
        media: [
            { type: "image", src: "beam_hinge.jpg" },
            { type: "image", src: "beam_hinge_cad.jpeg" } // Add CAD or stress contour images here
        ],
        objective: "Perform non-linear structural modeling to predict out-of-plane buckling behaviors in complex flexure beam-hinge lattice geometries.",
        contribution: "R&D Undergraduate Researcher | Collaborated with a PhD candidate to construct Python-based numerical models for multi-node elastic lattice displacement.",
        technicalDetail: "Formulated non-linear differential equations using SciPy to capture out-of-plane buckling modes along the Z-axis under physical axial loads.",
        result: "Provided validated predictive simulations that matched physical test deformation modes within close margins, guiding physical prototype refinement.",
        githubLink: "#"
    },
    {
        title: "Drone Flight Control Law",
        tags: ["Python", "Control Theory", "Avionics", "Robotics"],
        mediaType: "video",
        mediaSrc: "https://eli-mitra.github.io/media/drone_video1.mp4"
        objective: "Engineer a stable flight control software law to mitigate external wind turbulence and improve dynamic attitude recovery.",
        contribution: "Recoded core flight control law algorithms, replacing inefficient integrated rate loops with an explicit rotation rate demand law.",
        technicalDetail: "Implemented real-time sensor fusion filtering and attitude transformation matrix calculations in Python to lower latency on onboard hardware.",
        result: "Demonstrated significantly reduced overshoot and smoother pitch/roll disturbance rejection during dynamic flight testing.",
        githubLink: "#"
    }
];

// ==========================================================================
// RENDER ENGINE
// ==========================================================================

function loadProjects() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    grid.innerHTML = ''; 

    projects.forEach(project => {
        const card = document.createElement('article');
        card.className = 'project-card';

        // Build media gallery HTML (Iterates through all images/videos in media array)
        let galleryHTML = '<div class="project-media-gallery">';
        project.media.forEach(item => {
            if (item.type === 'video') {
                galleryHTML += `
                    <div class="project-media-item">
                        <video controls autoplay muted loop playsinline preload="metadata">
                            <source src="${item.src}" type="video/mp4">
                        </video>
                    </div>`;
            } else {
                galleryHTML += `
                    <div class="project-media-item">
                        <img src="${item.src}" alt="${project.title}" loading="lazy">
                    </div>`;
            }
        });
        galleryHTML += '</div>';

        // Generate tags HTML
        const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        // Construct full vertical layout structure
        card.innerHTML = `
            <div class="project-container">
                ${galleryHTML}
                <div class="project-content">
                    <h2>${project.title}</h2>
                    <div class="tags">${tagsHTML}</div>
                    
                    <div class="section-block">
                        <h4>Objective</h4>
                        <p>${project.objective}</p>
                    </div>
                    
                    <div class="section-block">
                        <h4>My Contribution</h4>
                        <p>${project.contribution}</p>
                    </div>

                    <div class="section-block">
                        <h4>Technical Detail</h4>
                        <p>${project.technicalDetail}</p>
                    </div>

                    <div class="section-block">
                        <h4>Result</h4>
                        <p>${project.result}</p>
                    </div>

                    ${project.githubLink && project.githubLink !== '#' ? `<a href="${project.githubLink}" target="_blank" rel="noopener" class="project-link">View Repository →</a>` : ''}
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', loadProjects);
