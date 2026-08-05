// ==========================================================================
// MAIN PORTFOLIO DATA FILE
// ==========================================================================

const projects = [
    {
        title: "Sensor Skins for Vehicle Tires",
        tags: ["R&D", "Sensor Fabrication", "Automotive", "Materials Science"],
        media: [
            { type: "image", src: "https://eli-mitra.github.io/sensor_skin.png" }
        ],
        objective: "Developed a highly flexible tactile skin that maintains its required baseline capacitance and optimal sensor performance even under extreme tire strain.",
        contribution: "R&D Undergraduate Researcher | Synthesized and processed specialized polymer elastomer formulations alongside PhD researchers, focusing on chemical solution mixing and mold preparation.",
        technicalDetail: "Formulated and optimized SEBS-based polymer solutions to achieve consistent viscosity and precise membrane thickness across both dielectric and conductive layers. Evaluated mechanical compliance through cyclical shear testing to mitigate delamination risks and ensure long-term structural integrity under severe strain.",
        result: "Successfully manufactured functional sensor skin prototypes that maintained integrity under physical strain cycles for dynamic bench testing.",
        paperTitle: "Flexible Elastomer Sensor Arrays for Dynamic Tire Telemetry",
        paperLink: "https://eli-mitra.github.io/sensing_skin_paper.pdf",
        githubLink: "#"
    },
    {
        title: "Flexure Beam-Hinge Structural Simulation",
        tags: ["R&D", "Python", "SciPy", "FEA", "Structural Mechanics"],
        media: [
            { type: "image", src: "https://eli-mitra.github.io/beam_hinge.jpg" },
            { type: "image", src: "https://eli-mitra.github.io/beam_hinge_cad.jpeg" }
        ],
        objective: "Perform non-linear structural modeling to predict out-of-plane buckling behaviors in complex flexure beam-hinge lattice geometries.",
        contribution: "R&D Undergraduate Researcher | Collaborated with a PhD candidate to construct Python-based numerical models for multi-node elastic lattice displacement.",
        technicalDetail: "Formulated non-linear differential equations using SciPy to capture out-of-plane buckling behavior along the Z-axis. The kinematic model establishes the relationship between X-axis displacement and Z-axis deflection while simultaneously accounting for joint angles and non-linear hinge stiffness under prescribed displacement boundary conditions.",
        result: "Provided validated predictive simulations that matched physical test deformation modes within close margins, guiding physical prototype refinement.",
        paperTitle: "Non-Linear Numerical Modeling of Out-of-Plane Flexure Buckling",
        paperLink: "https://eli-mitra.github.io/flexture_hinge_paper.pdf",
        githubLink: "#"
    },
    {
        title: "Drone Flight Control Law",
        tags: ["Python", "Control Theory", "Avionics", "Robotics"],
        media: [
            { type: "video", src: "https://eli-mitra.github.io/drone_video1.mp4" }
        ],
        objective: "Engineer a stable flight control software law to mitigate external wind turbulence and improve dynamic attitude recovery.",
        contribution: "Recoded core flight control law algorithms, replacing inefficient integrated rate loops with an explicit rotation rate demand law.",
        technicalDetail: "Implemented real-time sensor fusion filtering and 3D attitude transformation matrices in Python on an onboard Raspberry Pi, significantly reducing telemetry latency to drive high-frequency, responsive PID loop control.",
        result: "Demonstrated significantly reduced overshoot and smoother pitch/roll disturbance rejection during dynamic flight testing.",
        githubLink: "#"
    },
    {
        title: "Autonomous Obstacle-Avoiding Robot",
        tags: ["Robotics", "Arduino", "Sensors", "Embedded C++", "Hardware"],
        media: [
            // 👈 Make sure this matches your exact MP4 filename in the media/ folder
            { type: "video", src: "https://eli-mitra.github.io/robot_video.mp4" } 
        ],
        objective: "Design and build an autonomous wheeled mobile robot capable of detecting and navigating around physical obstacles in real time.",
        contribution: "Fabricated a 3D-printed attachment head to house integrated ultrasonic distance sensors, interfacing them directly with motor driver circuits. Developed reactive decision-making control logic in software to process real-time range data and execute dynamic obstacle-avoidance maneuvers.",
        technicalDetail: "Implemented distance thresholding routines in C++ to trigger dynamic differential drive steering maneuvers when obstacles entered the sensor's field of view.",
        result: "Successfully demonstrated continuous autonomous navigation and collision avoidance in dynamic indoor and outdoor environments.",
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

        // Build media gallery HTML
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

        // Generate PDF Citation HTML conditionally
        const paperHTML = (project.paperLink && project.paperLink !== '#') ? `
            <div class="section-block publication-block">
                <h4>Publication / Citation</h4>
                <p>📄 <em>${project.paperTitle}</em> — <a href="${project.paperLink}" target="_blank" rel="noopener" class="paper-link">View PDF Document ↗</a></p>
            </div>
        ` : '';

        // Construct full card structure
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

                    ${paperHTML}

                    ${project.githubLink && project.githubLink !== '#' ? `<a href="${project.githubLink}" target="_blank" rel="noopener" class="project-link">View Repository →</a>` : ''}
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

// Initialize rendering & smooth scrolling
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();

    const scrollBtn = document.getElementById('scroll-to-projects');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.getElementById('portfolio-grid');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
