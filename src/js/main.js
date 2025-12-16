document.addEventListener('DOMContentLoaded', () => {

    function initGlobalBackgroundMusic() {
        const bgMusic = document.getElementById('bg-music');
        const soundToggle = document.getElementById('sound-toggle');

        if (!bgMusic || !soundToggle) return;

        let isMuted = localStorage.getItem('musicMuted') === 'true';
        const musicShouldPlay = localStorage.getItem('bgMusicPlaying') === 'true';
        const savedTime = parseFloat(localStorage.getItem('bgMusicTime')) || 0;

        if (isMuted) {
            bgMusic.muted = true;
            soundToggle.classList.add('muted');
        } else {
            bgMusic.muted = false;
            soundToggle.classList.remove('muted');
        }

        if (musicShouldPlay) {
            bgMusic.volume = 0.10;
            bgMusic.currentTime = savedTime;
            bgMusic.play().catch(() => {
                soundToggle.classList.add('muted');
            });
        }

        soundToggle.addEventListener('click', (e) => {
            e.preventDefault();

            if (bgMusic.paused) {
                bgMusic.volume = 0.10;
                bgMusic.play();
                bgMusic.muted = false;
                soundToggle.classList.remove('muted');
                isMuted = false;
                localStorage.setItem('bgMusicPlaying', 'true');
            } else {
                bgMusic.muted = !bgMusic.muted;

                if (bgMusic.muted) {
                    soundToggle.classList.add('muted');
                    isMuted = true;
                } else {
                    soundToggle.classList.remove('muted');
                    isMuted = false;
                }
            }

            localStorage.setItem('musicMuted', isMuted);
        });

        setInterval(() => {
            if (!bgMusic.paused) {
                localStorage.setItem('bgMusicTime', bgMusic.currentTime.toString());
                localStorage.setItem('bgMusicPlaying', 'true');
            }
        }, 1000);

        window.addEventListener('beforeunload', () => {
            if (!bgMusic.paused) {
                localStorage.setItem('bgMusicTime', bgMusic.currentTime.toString());
                localStorage.setItem('bgMusicPlaying', 'true');
            }
        });
    }

    const translations = {
        'fr': {
            'logo-subtitle': 'Étudiant Ingénieur Logiciel',
            'nav-home': 'Accueil',
            'nav-projets': 'Projets',
            'nav-about': 'À Propos',
            'btn-contact': 'Me Contacter',
            'hero-title': 'Informatique — Logiciel & Données',
            'hero-desc': 'Étudiant en Mathématiques et Informatique à Paris 1 Panthéon-Sorbonne. Je conçois des systèmes fiables basés sur la logique et la data.',
            'cta-hero': 'Voir mes projets',
            'projects-title': 'PROJETS TECHNIQUES',
            'projects-subtitle': 'Projets démontrant mon expérience en systèmes distribués, backend infrastructure, et developer tooling qui améliore les workflows d\'équipe.',
            'project1-title': 'Real-Time Multi-Client Chat System',
            'project1-desc': 'Application client-serveur temps réel supportant 50+ connexions concurrentes avec broadcasting de messages thread-safe. Architecture basée sur un thread pool avec protocole de communication personnalisé pour un broadcasting efficace des messages.',
            'project1-h1': '→ Support de 50+ connexions simultanées',
            'project1-h2': '→ Thread-pool architecture avec protocole custom',
            'project1-h3': '→ Gestion edge cases (déconnexions, packets malformés)',
            'project1-h4': '→ Monitoring léger (timestamps, events, error logs)',
            'project2-title': 'Wildfire Risk Prediction System',
            'project2-desc': 'Pipeline ETL automatisé traitant 500+ relevés météorologiques, réduisant la préparation manuelle des données. Développement d\'un pipeline de data processing scalable avec backend services atteignant 87% de précision avec régression et algorithmes decision-tree.',
            'project2-h1': '→ Pipeline ETL automatisé pour 500+ records',
            'project2-h2': '→ Accuracy de 87% avec regression/decision-tree',
            'project2-h3': '→ Visualisations: heatmaps, risk mapping, métriques (MAE, RMSE)',
            'project3-title': 'REST API + Project Monitoring Dashboard',
            'project3-desc': 'Outil interne de développement améliorant le workflow d\'équipe en réduisant les étapes manuelles. Base de données SQLite avec opérations CRUD complètes, authentification JWT, et dashboard temps réel avec Chart.js. Système de monitoring/logging avec statistiques automatisées et export CSV/JSON.',
            'project3-h1': '→ SQLite database avec CRUD complet + JWT auth',
            'project3-h2': '→ Real-time dashboard avec WebSocket et Chart.js',
            'project3-h3': '→ Monitoring/logging avec stats auto et export CSV/JSON',
            'project4-title': 'Dev Workflow Automation CLI Tool',
            'project4-desc': 'Outil CLI automatisant les tâches répétitives de développement (log cleanup, format checks, test execution) avec architecture modulaire de commandes. Améliore significativement la productivité des développeurs en réduisant les opérations manuelles.',
            'project4-h1': '→ Automation de tâches répétitives (cleanup, checks, tests)',
            'project4-h2': '→ Architecture modulaire de commandes',
            'project4-h3': '→ Amélioration significative de la productivité dev',
            'project-tech': 'Technologies',
            'project-highlights': 'Points Clés',
            'project-view': 'Voir le code',
            'cta-title': 'Intéressé par mon travail ?',
            'cta-desc': 'Je suis toujours ouvert à discuter de nouveaux projets, d\'opportunités de collaboration ou simplement d\'échanger sur des sujets techniques.',
            'cta-button': 'Démarrer une conversation',
            'about-title': 'À PROPOS',
            'about-intro': 'Étudiant en Mathématiques et Informatique Appliquées à l\'Université Paris 1 Panthéon-Sorbonne, je développe des applications logicielles avec un intérêt particulier pour le backend et les systèmes client-serveur.',
            'about-approach': 'À travers mes projets académiques et personnels, j\'ai conçu des APIs, des applications backend et des pipelines de traitement de données, en mettant l\'accent sur la clarté du code, la structuration des projets et la fiabilité des fonctionnalités.',
            'about-curious': 'Curieux et motivé, je cherche à approfondir mes compétences en Software Engineering, notamment sur les bonnes pratiques de développement, la conception de systèmes simples et maintenables, et le travail sur des projets concrets proches des problématiques réelles.',
            'about-focus': 'Domaines d\'intérêt et compétences :',
            'expertise-backend-title': 'Ingénierie Logicielle & Développement Backend',
            'expertise-backend-desc': 'Développement d\'applications backend, APIs REST, architecture client-serveur, bases de la programmation concurrente.',
            'expertise-data-title': 'Données & Machine Learning Appliqué',
            'expertise-data-desc': 'Traitement et analyse de données, pipelines simples, premiers modèles de machine learning avec scikit-learn.',
            'expertise-tools-title': 'Outils pour Développeurs',
            'expertise-tools-desc': 'Scripts et outils CLI, automatisation de tâches, logging, debugging et attention portée à la qualité du code.',
            'about-education-title': 'Parcours',
            'about-edu-degree': 'Licence Mathématiques et Informatique Appliquées',
            'about-edu-desc': 'Focus sur l\'Analyse Réelle, l\'Algèbre Linéaire et les structures de données avancées.',
            'about-values': 'Formation solide en Analyse Réelle, Algèbre Linéaire, Probabilités & Statistiques, avec des compétences en Algorithms Avancés et Data Structures.',
            'about-stack': 'Tech Stack',
            'about-languages': 'Languages',
            'about-data-ai': 'Data & AI',
            'about-tools': 'Tools & Frameworks',
            'stat-projects': 'Projets Techniques',
            'stat-languages': 'Langages Maîtrisés',
            'stat-algorithms': 'Problèmes Algorithmiques Résolus',
            'about-available': 'Ouvert aux opportunités',
            'about-available-desc': 'Stage • Alternance • Projets',
            'modal-title': 'Partagez votre vision',
            'lbl-name': 'Nom',
            'lbl-email': 'Email',
            'lbl-msg': 'Message',
            'btn-send': 'Envoyer',
            'footer-nav': 'Navigation',
            'footer-socials': 'Connect',
            'footer-cv': 'Télécharger CV',
            'footer-copyright': 'Tous droits réservés',
            'enter-site': 'Entrer'
        },
        'en': {
            'logo-subtitle': 'Software Engineer Student',
            'nav-home': 'Home',
            'nav-projets': 'Projects',
            'nav-about': 'About',
            'btn-contact': 'Contact Me',
            'hero-title': 'SOFTWARE ENGINEER & DATA STUDENT',
            'hero-desc': 'Mathematics and Computer Science student at Paris 1 Panthéon-Sorbonne. I build reliable systems driven by logic and data.',
            'cta-hero': 'View my projects',
            'projects-title': 'TECHNICAL PROJECTS',
            'projects-subtitle': 'Projects demonstrating my experience in distributed systems, backend infrastructure, and developer tooling that improves team workflows.',
            'project1-title': 'Real-Time Multi-Client Chat System',
            'project1-desc': 'Real-time client-server application supporting 50+ concurrent connections with thread-safe message broadcasting. Thread-pool-based architecture with custom communication protocol for efficient message broadcasting.',
            'project1-h1': '→ Support for 50+ concurrent connections',
            'project1-h2': '→ Thread-pool architecture with custom protocol',
            'project1-h3': '→ Edge case handling (disconnections, malformed packets)',
            'project1-h4': '→ Lightweight monitoring (timestamps, events, error logs)',
            'project2-title': 'Wildfire Risk Prediction System',
            'project2-desc': 'Automated ETL pipeline processing 500+ meteorological records, reducing manual data preparation. Developed scalable data processing pipeline with backend services achieving 87% model accuracy using regression and decision-tree algorithms.',
            'project2-h1': '→ Automated ETL pipeline for 500+ records',
            'project2-h2': '→ 87% accuracy with regression/decision-tree',
            'project2-h3': '→ Visualizations: heatmaps, risk mapping, metrics (MAE, RMSE)',
            'project3-title': 'REST API + Project Monitoring Dashboard',
            'project3-desc': 'Internal developer tooling improving team workflow by reducing the number of manual steps. Built SQLite database with full CRUD operations, JWT authentication, and real-time dashboard (Chart.js). Implemented monitoring/logging system with automated statistics, CSV/JSON export for analytics.',
            'project3-h1': '→ SQLite database with full CRUD + JWT auth',
            'project3-h2': '→ Real-time dashboard with WebSocket and Chart.js',
            'project3-h3': '→ Monitoring/logging with auto stats and CSV/JSON export',
            'project4-title': 'Dev Workflow Automation CLI Tool',
            'project4-desc': 'CLI tool automating repetitive developer tasks (log cleanup, format checks, test execution) with modular command architecture. Significantly improves developer productivity by reducing manual operations.',
            'project4-h1': '→ Automation of repetitive tasks (cleanup, checks, tests)',
            'project4-h2': '→ Modular command architecture',
            'project4-h3': '→ Significant improvement in dev productivity',
            'project-tech': 'Technologies',
            'project-highlights': 'Key Points',
            'project-view': 'View Code',
            'cta-title': 'Interested in my work?',
            'cta-desc': 'I\'m always open to discussing new projects, collaboration opportunities, or simply exchanging ideas about technical topics.',
            'cta-button': 'Start a conversation',
            'about-title': 'ABOUT',
            'about-intro': 'Applied Mathematics and Computer Science student at Paris 1 Panthéon-Sorbonne University, developing software applications with a particular interest in backend and client-server systems.',
            'about-approach': 'Through my academic and personal projects, I have designed APIs, backend applications, and data processing pipelines, with an emphasis on code clarity, project structure, and feature reliability.',
            'about-curious': 'Curious and motivated, I seek to deepen my skills in Software Engineering, particularly in development best practices, designing simple and maintainable systems, and working on concrete projects close to real-world issues.',
            'about-focus': 'Areas of interest and skills:',
            'expertise-backend-title': 'Software Engineering & Backend Development',
            'expertise-backend-desc': 'Backend application development, REST APIs, client-server architecture, basics of concurrent programming.',
            'expertise-data-title': 'Data & Applied Machine Learning',
            'expertise-data-desc': 'Data processing and analysis, simple pipelines, first machine learning models with scikit-learn.',
            'expertise-tools-title': 'Developer Tools',
            'expertise-tools-desc': 'CLI scripts and tools, task automation, logging, debugging, and attention to code quality.',
            'about-education-title': 'Education',
            'about-edu-degree': 'Bachelor\'s Degree in Applied Mathematics and Computer Science',
            'about-edu-desc': 'Focus on Real Analysis, Linear Algebra, and advanced data structures.',
            'about-values': 'Strong foundation in Real Analysis, Linear Algebra, Probability & Statistics, with skills in Advanced Algorithms and Data Structures.',
            'about-stack': 'Tech Stack',
            'about-languages': 'Languages',
            'about-data-ai': 'Data & AI',
            'about-tools': 'Tools & Frameworks',
            'stat-projects': 'Technical Projects',
            'stat-languages': 'Languages Mastered',
            'stat-algorithms': 'Algorithmic Problems Solved',
            'about-available': 'Open to opportunities',
            'about-available-desc': 'Internship • Work-Study • Projects',
            'modal-title': 'Share your vision',
            'lbl-name': 'Name',
            'lbl-email': 'Email',
            'lbl-msg': 'Message',
            'btn-send': 'Send',
            'footer-nav': 'Navigation',
            'footer-socials': 'Connect',
            'footer-cv': 'Download CV',
            'footer-copyright': 'All rights reserved',
            'enter-site': 'Enter'
        }
    };

    function applyTranslations(lang) {
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            const translation = translations[lang][key];
            if (translation) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });
    }

    function updateButton(lang) {
        const langButton = document.getElementById('lang-toggle');
        if (langButton) {
            langButton.textContent = lang === 'fr' ? 'FR' : 'EN';
        }
    }

    function switchLanguage(newLang) {
        localStorage.setItem('preferredLang', newLang);
        applyTranslations(newLang);
        updateButton(newLang);
    }

    function initLanguage() {
        const savedLang = localStorage.getItem('preferredLang') || 'fr';
        applyTranslations(savedLang);
        updateButton(savedLang);

        const langButton = document.getElementById('lang-toggle');
        if (langButton) {
            langButton.addEventListener('click', (e) => {
                e.preventDefault();
                const currentLang = localStorage.getItem('preferredLang') || 'fr';
                const newLang = currentLang === 'fr' ? 'en' : 'fr';
                switchLanguage(newLang);
            });
        }
    }

    initLanguage();

    initGlobalBackgroundMusic();

    initIntroLoader();

    initAudioFeedback();

    const contactBtns = document.querySelectorAll('.btn-contact');
    const modal = document.getElementById('contact-modal');
    const closeBtn = document.querySelector('.close-modal');

    contactBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    function initAudioFeedback() {
        const clickSoundUrl = 'src/assets/buttons_sound.wav';

        const audio = new Audio();
        audio.preload = 'auto';
        audio.src = clickSoundUrl;
        audio.volume = 0.3;

        document.addEventListener('click', (e) => {
            const target = e.target.closest('button');

            if (!target) return;
            if (target.closest('footer')) return;
            if (target.classList.contains('close-modal')) return;
            if (target.id === 'sound-toggle' || target.closest('#sound-toggle')) return;

            const sound = audio.cloneNode();
            sound.volume = 0.3;

            sound.play().catch(error => {
                console.error("Erreur lecture audio :", error);
            });
        });
    }

    function initIntroLoader() {
        const overlay = document.getElementById('intro-overlay');
        const enterBtn = document.getElementById('enter-btn');
        const mainContent = document.getElementById('main-content');
        const bgMusic = document.getElementById('bg-music');

        if (!overlay || !mainContent) return;

        if (sessionStorage.getItem('introShown') === 'true') {
            overlay.style.display = 'none';
            mainContent.classList.add('visible');
            return;
        }

        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            if (enterBtn) {
                enterBtn.classList.remove('hidden');
            }
        }, 2000);

        if (enterBtn) {
            enterBtn.addEventListener('click', () => {
                if (bgMusic) {
                    setTimeout(() => {
                        bgMusic.volume = 0.10;
                        bgMusic.play().catch(error => {
                            console.log('Erreur lecture musique de fond:', error);
                        });
                        localStorage.setItem('bgMusicPlaying', 'true');
                        localStorage.setItem('bgMusicTime', '0');

                        const soundToggle = document.getElementById('sound-toggle');
                        if (soundToggle && !bgMusic.muted) {
                            soundToggle.classList.remove('muted');
                        }
                    }, 1750);
                }

                overlay.classList.add('fade-out');
                document.body.style.overflow = 'auto';

                setTimeout(() => {
                    mainContent.classList.add('visible');
                    sessionStorage.setItem('introShown', 'true');
                }, 300);
            });
        }
    }
});
