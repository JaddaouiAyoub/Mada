import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe, Smartphone } from 'lucide-react';

import easy from "../assets/easy.png";
import recruit from "../assets/recruit.jpg";
import chat from "../assets/chat.jpg";
import travel from "../assets/travel.png";
import photographer from "../assets/photographer.png";
import hotel from "../assets/hotel.png";
import mada_scanner from "../assets/mada_scanner.png"
import liftmosque from "../assets/liftMosque.png"
import couvoit from "../assets/mada_covoit.png"
import ironElite from "../assets/ironElite.png"
import ayoubStore from "../assets/ayoubStore.png"
import cosmeticStore from "../assets/cosmeticStore.png"

const projects = [
    {
        title: "Iron Elite",
        category: "Application web fitness",
        img: ironElite, // Assure-toi d'importer l'image ironElite
        desc: "Application web interactive pour fitness avec suivi des entraînements, animations fluides et design moderne.",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        type: "web",
        preview: "https://iron-elite.vercel.app/", // Ajouter le lien si disponible
        code: null, // Ajouter le lien si disponible
    },
    {
        title: "Botanical Beauty Store",
        category: "E-commerce Cosmétique Premium",
        img: cosmeticStore, // Assure-toi d'importer l'image
        desc: "Application e-commerce cosmétique premium inspirée de Yves Rocher. UI/UX haut de gamme avec animations immersives Framer Motion, panier sans login, filtres avancés et dashboard admin complet. Architecture scalable prête à connecter un backend (REST/GraphQL).",
        tech: [
            "React 19",
            "TypeScript",
            "Vite",
            "Tailwind CSS (Custom Design System)",
            "Framer Motion (Advanced Animations)",
            "Zustand",
            "React Router DOM",
            "Axios",
            "Chart.js / Recharts",
            "LocalStorage API"
        ],
        type: "web",
        preview: "https://botanical-beauty-store.vercel.app/", // Ajoute ton lien Vercel quand dispo
        code: "#", // Ajoute ton GitHub quand dispo
    },
    {
        title: "AyoubStore",
        category: "E-commerce Premium",
        img: ayoubStore, // Assure-toi d'importer l'image
        desc: "Application e-commerce moderne avec animations fluides, interface premium et architecture performante. Gestion d’état avec Zustand, formulaires validés avec React Hook Form & Zod et UI basée sur Radix.",
        tech: [
            "React 19",
            "Vite",
            "Tailwind CSS",
            "Framer Motion",
            "Radix UI",
            "Zustand",
            "React Hook Form",
            "Zod"
        ],
        type: "web",
        preview: "https://ayoub-store.vercel.app/", // Mets ton lien Vercel si dispo
        code: "#", // Mets ton GitHub si dispo
    },
    {
        title: "Travel With Kaoutar",
        category: "Agence de voyages romantiques",
        img: travel,
        desc: "Plateforme web élégante conçue pour promouvoir des voyages romantiques. Expérience immersive avec mode sombre/clair et fonds animés.",
        tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "tsParticles"],
        type: "web",
        preview: "https://travel-with-kaoutar.vercel.app/",
        code: "#",
    },
    {
        title: "Portfolio Photographe",
        category: "Galerie artistique responsive",
        img: photographer,
        desc: "Portfolio moderne avec galerie en mosaïque artistique et intégration d’un chatbot via n8n pour l'assistance visiteurs.",
        tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "n8n"],
        type: "web",
        preview: "https://photograph-portfolio-two.vercel.app/",
        code: "#",
    },
    {
        title: "Hotel Booking Landing",
        category: "React & Tailwind",
        img: hotel,
        desc: "Landing page optimisée pour un hôtel avec Lazy Loading et intégration Stripe. Performante et 100% responsive.",
        tech: ["React", "Tailwind CSS", "Framer Motion", "Stripe", "Unsplash"],
        type: "web",
        preview: null,
        code: null,
    },
    {
        title: "EasyStock Maroc",
        category: "Gestion de stock intelligente",
        img: easy,
        desc: "Plateforme de gestion de stock temps réel pour entreprises. Automatisation des commandes et statistiques précises.",
        tech: ["Spring Boot", "Angular", "MySQL"],
        type: "web",
        preview: "https://easy-stock-maroc.vercel.app/",
        code: "#",
    },
    {
        title: "EasyRecruit",
        category: "Recrutement intelligent",
        img: recruit,
        desc: "Gestion du recrutement avec IA (NLP) pour l'analyse des CV et assistance aux entretiens. Sécurisé via Keycloak.",
        tech: ["Spring Boot", "Angular", "Keycloak", "Python (IA/NLP)", "FastAPI"],
        type: "web",
        preview: null,
        code: "#",
    },
    {
        title: "Chat en temps réel",
        category: "Stack MERN & Socket.io",
        img: chat,
        desc: "Messagerie instantanée permettant des conversations en temps réel avec indicateurs de saisie et statuts en ligne.",
        tech: ["MongoDB", "Express", "React", "NodeJs", "Tailwind CSS", "Socket.io"],
        type: "web",
        preview: null,
        code: "#",
    },
    {
        title: "Covoiturage Intervilles",
        category: "Mobilité Intervilles & Aéroport",
        img: couvoit,
        desc: "Application mobile facilitant le covoiturage avec gestion des trajets et intégration Mapbox pour le suivi temps réel.",
        tech: ["Flutter", "Firebase", "Mapbox"],
        type: "mobile",
        preview: null,
        code: "#",
    },
    {
        title: "LiftMosque",
        category: "Covoiturage vers les mosquées",
        img: liftmosque,
        desc: "Réduction des véhicules via covoiturage intelligent. Inclut un dashboard d'administration sophistiqué.",
        tech: ["Flutter", "Firebase", "React.js"],
        type: "mobile",
        preview: null,
        code: "#",
    },
    {
        title: "Mada Scanner",
        category: "Scan & PDF intelligent",
        img: mada_scanner,
        desc: "Numérisation de documents avec détection de bords, filtres d'amélioration et conversion PDF instantanée.",
        tech: ["Flutter"],
        type: "mobile",
        preview: null,
        code: "#",
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-4xl sm:text-5xl font-bold text-strong mb-4">
                        Portfolio
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted font-medium">
                        Une sélection de projets où l'excellence technique rencontre la vision créative.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col group"
                        >
                            <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/3] mb-6 glass border-main group-hover:shadow-2xl group-hover:shadow-accent/10 transition-all duration-500">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                {/* Desktop Overlay */}
                                <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 hidden md:flex flex-col items-center justify-center p-8 text-center translate-y-4 group-hover:translate-y-0">
                                    <div className="flex gap-4 mb-6">
                                        {project.preview && (
                                            <a href={project.preview} target="_blank" rel="noopener noreferrer" className="p-3 bg-accent text-white rounded-xl hover:scale-110 transition-transform shadow-lg shadow-accent/20">
                                                <Globe size={20} />
                                            </a>
                                        )}
                                        {project.code && (
                                            <a href={project.code} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 text-white rounded-xl hover:scale-110 transition-transform backdrop-blur-md border border-white/20">
                                                <Github size={20} />
                                            </a>
                                        )}
                                    </div>
                                    <p className="text-sm text-slate-200 leading-relaxed line-clamp-4 px-4">
                                        {project.desc}
                                    </p>
                                </div>
                                {/* Badge Type */}
                                <div className="absolute top-6 right-6 px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2">
                                    {project.type === 'web' ? <Globe size={12} className="text-accent" /> : <Smartphone size={12} className="text-accent" />}
                                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">{project.type}</span>
                                </div>
                            </div>

                            <div className="px-2">
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-[9px] font-bold px-2 py-0.5 rounded-lg bg-accent/5 text-accent border border-accent/10">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold text-strong mb-1.5 transition-colors group-hover:text-accent">
                                    {project.title}
                                </h3>
                                <p className="text-xs font-semibold text-muted mb-4 uppercase tracking-widest opacity-80">
                                    {project.category}
                                </p>
                                {/* Mobile Desc */}
                                <p className="text-sm text-strong opacity-75 leading-relaxed md:hidden mb-6 line-clamp-3">
                                    {project.desc}
                                </p>
                                {/* Mobile Links */}
                                <div className="flex md:hidden gap-4">
                                    {project.preview && (
                                        <a href={project.preview} className="text-xs font-bold text-accent flex items-center gap-1.5 underline decoration-2 underline-offset-4">
                                            Live Demo <ExternalLink size={14} />
                                        </a>
                                    )}
                                    {project.code && (
                                        <a href={project.code} className="text-xs font-bold text-strong flex items-center gap-1.5 opacity-80">
                                            Code <Github size={14} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
