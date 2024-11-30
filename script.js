document.addEventListener('DOMContentLoaded', function () {
    // Dynamic Skills Section
    const skillsContainer = document.getElementById('skills-container');
    const skills = [
        {
            name: 'Backend Development', level: 'Advanced', icon: 'fa-server',
            details: ['Python', 'SQL', 'Django', 'Flask', 'FastAPI']
        },
        {
            name: 'AI & Machine Learning', level: 'Advanced', icon: 'fa-brain',
            details: ['TensorFlow', 'Scikit-learn', 'LangChain', 'OpenAI API']
        },
        {
            name: 'Databases', level: 'Advanced', icon: 'fa-database',
            details: ['MSSQL', 'SQLite', 'PostgreSQL', 'ChromaDB', 'Pinecone']
        },
        {
            name: 'DevOps & Tools', level: 'Intermediate', icon: 'fa-tools',
            details: ['Git', 'Docker', 'WSL', 'Postman', 'Jira']
        },
        {
            name: 'Frontend', level: 'Intermediate', icon: 'fa-code',
            details: ['HTML', 'CSS', 'JavaScript']
        },
        {
            name: 'Operating Systems', level: 'Advanced', icon: 'fa-laptop-code',
            details: ['Windows', 'Linux (Ubuntu, Fedora)']
        }
    ];

    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'col-md-4 mb-4';
        skillCard.innerHTML = `
            <div class="skill-card text-center">
                <i class="fas ${skill.icon} fa-3x mb-3"></i>
                <h4>${skill.name}</h4>
                <p class="text-muted">${skill.level}</p>
                <div class="skill-details">
                    ${skill.details.map(detail => `<span class="badge bg-secondary me-1 mb-1">${detail}</span>`).join('')}
                </div>
            </div>
        `;
        skillsContainer.appendChild(skillCard);
    });

    // Dynamic Projects Section
    const projectsContainer = document.getElementById('projects-container');
    const projects = [
        {
            name: 'AI-Powered Customer Service Platform',
            description: 'Developed a chatbot at Position Green enabling customers to query environmental data using OpenAI API, Langchain, and ChromaDB with FastAPI backend.',
            technologies: ['Python', 'FastAPI', 'OpenAI API', 'ChromaDB', 'React'],
            link: '#'
        },
        {
            name: 'Analytics Dashboard',
            description: 'Built a Flask-based dashboard for tracking customer and internal data at SYSCTL AB.',
            technologies: ['Flask', 'SQLite', 'Python', 'HTML/CSS'],
            link: '#'
        },
        {
            name: 'Automated Email Management System',
            description: 'Web application using Flask and SQLAlchemy for managing company inquiries with automated email handling using Google OAuth & Gmail API.',
            technologies: ['Flask', 'SQLAlchemy', 'Google OAuth', 'OpenAI API'],
            link: '#'
        },
        {
            name: 'Image Recognition CNN',
            description: 'Trained a Convolutional Neural Network for cat and dog classification, enhanced with transfer learning.',
            technologies: ['Python', 'TensorFlow', 'CNN', 'Transfer Learning'],
            link: '#'
        }
    ];

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'col-md-6 mb-4';
        projectCard.innerHTML = `
            <div class="card project-card h-100">
                <div class="card-body">
                    <h5 class="card-title">${project.name}</h5>
                    <p class="card-text">${project.description}</p>
                    <div class="badge-container mb-2">
                        ${project.technologies.map(tech => `<span class="badge bg-primary me-1 mb-1">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });

    // Contact Form Submission (Client-side only)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });

    // Smooth Scrolling for Navigation
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});