'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Globe, Smartphone, Cloud, X } from 'lucide-react';

const WHATSAPP_NUMBER = '212700547163';
const getDemoRequestUrl = (projectTitle) => {
    const message = `Bonjour, je souhaite demander une démo du projet ${projectTitle}.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

import easy from "../assets/easy.png";
import recruit from "../assets/recruit.jpg";
import chat from "../assets/chat.jpg";
import travel from "../assets/travel.png";
import photographer from "../assets/photographer.png";
import photographer2 from "../assets/photographer2.png";
import hotel from "../assets/hotel.png";
import mada_scanner from "../assets/mada_scanner.png"
import liftmosque from "../assets/liftMosque.png"
import couvoit from "../assets/mada_covoit.png"
import ironElite from "../assets/ironElite.png"
import ayoubStore from "../assets/ayoubStore.png"
import cosmeticStore from "../assets/cosmeticStore.png"
import dentalClinic from "../assets/dentalClinic.png"
import beautySalon from "../assets/beautySalon.png"
import riadAtlasPalace from "../assets/riadAtlasPalace.png"
import perfumeStore from "../assets/parfums2.png"
import womenFashionStore from "../assets/womenFashionStore.png"
import tawziiFlow from "../assets/tawziiFlow.jpeg"
import centerHub from "../assets/centerHub2.png"
import smartersIptv from "../assets/smartersIptv.png"
import driveFlow from "../assets/driveFlow.png"
import rentFlow from "../assets/rentFlow.png"
import syndicFlow from "../assets/syndicFlow.png"
import gymFlow from "../assets/gymFlow.png"

const projects = [
    {
        title: "CenterHub",
        category: "Plateforme SaaS Éducative",
        img: centerHub,
        desc: "Application SaaS de gestion complète pour centre éducatif. Tableau de bord multi-rôles (Admin, Secrétaire, Professeur, Étudiant) permettant de gérer les présences, paiements, cours et notifications en temps réel avec support multilingue (FR/AR).",
        tech: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "NextAuth",
            "Prisma",
            "PostgreSQL",
            "Tailwind CSS"
        ],
        type: "saas",
        preview: "https://center-hub.vercel.app/",
        code: "#",
    },

    {
        title: "SyndicFlow",
        category: "SaaS de Gestion de Syndic & Copropriété",
        img: syndicFlow,
        desc: "Plateforme SaaS complète dédiée à la gestion des syndics et des copropriétés. Le système permet aux administrateurs de gérer les syndics et leurs comptes, tandis que chaque syndic dispose d'un espace dédié pour gérer ses immeubles, appartements, copropriétaires et résidents. La solution intègre la gestion des charges, paiements, impayés, dépenses et suivi financier avec tableaux de bord analytiques, recherche, filtres et pagination côté serveur. L'application propose une authentification sécurisée avec gestion des rôles et changement obligatoire du mot de passe à la première connexion. Conçue en mobile-first avec une interface premium et originale, elle supporte le Français et l'Arabe avec une gestion complète du RTL.",
        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Prisma ORM",
            "PostgreSQL",
            "NextAuth",
            "React Hook Form",
            "Zod",
            "TanStack Table",
            "Recharts",
            "Framer Motion",
            "i18n (FR / AR)",
            "RTL Support"
        ],
        type: "saas",
        preview: "#",
        code: "#"
    },
    {
        title: "PowerGym",
        category: "SaaS de Gestion de Salle de Sport",
        img: gymFlow,
        desc: "Plateforme SaaS moderne dédiée à la gestion complète des salles de sport et de leurs adhérents. Le système permet aux administrateurs et secrétaires de gérer les membres, les abonnements, les paiements, les échéances et les présences. L'application intègre un tableau de bord avec statistiques sur les adhérents actifs, les revenus, les paiements récents, les abonnements expirant et les activités quotidiennes. Les administrateurs disposent également d'une gestion des secrétaires avec des permissions basées sur les rôles. Conçue selon une approche mobile-first avec une interface sportive, premium et originale, la solution offre une expérience optimisée pour les opérations quotidiennes d'une salle de sport.",
        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Prisma ORM",
            "PostgreSQL",
            "NextAuth",
            "React Hook Form",
            "Zod",
            "Recharts",
            "Framer Motion",
            "RBAC"
        ],
        type: "saas",
        preview: "#",
        code: "#"
    },
    {
        title: "RentFlow",
        category: "SaaS de Gestion pour Agences de Location",
        img: rentFlow,
        desc: "Plateforme SaaS dédiée aux agences de location de voitures permettant de centraliser la gestion des clients, des véhicules, des locations et des dépenses. Le système assure le suivi de l'état et des coûts des véhicules, la gestion des contrats et factures avec génération automatique de documents, ainsi que l'intégration de la signature électronique. Il intègre également une fonctionnalité d'extraction automatique des informations à partir du scan des permis de conduire afin d'accélérer la création des dossiers clients. Une solution complète pensée pour automatiser les opérations quotidiennes et améliorer le suivi financier de l'agence.",
        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn UI",
            "NextAuth",
            "Prisma ORM",
            "PostgreSQL",
            "React Hook Form",
            "Zod",
            "OCR",
            "Signature électronique"
        ],
        type: "saas",
        preview: "#",
        code: "#"
    },
    {
        title: "DriveFlow",
        category: "ERP SaaS pour Auto-Écoles",
        img: driveFlow, // importe l'image correspondante
        desc: "Application SaaS complète destinée aux auto-écoles permettant de digitaliser la gestion des élèves, des paiements, des moniteurs et des formations. Le système offre un tableau de bord analytique, un suivi financier en temps réel, la gestion des échéances, l'historique des paiements, la génération de reçus, des statistiques interactives et une administration sécurisée multi-rôles. Conçue avec une architecture moderne et évolutive, l'application propose une expérience utilisateur premium, responsive et optimisée pour une utilisation quotidienne.",
        tech: [
            "Next.js 15",
            "React 19",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn UI",
            "Framer Motion",
            "NextAuth v5",
            "Prisma ORM",
            "PostgreSQL",
            "React Hook Form",
            "Zod",
            "TanStack Query",
            "TanStack Table",
            "Recharts"
        ],
        type: "saas",
        preview: "https://auto-ecole-production.up.railway.app", // Remplacer par ton lien
        code: "#"
    },
    {
        title: "Smarters IPTV Canada",
        category: "Plateforme de vente d’abonnements IPTV",
        img: smartersIptv, // importe ton image
        desc: "Site vitrine moderne conçu pour la vente d’abonnements IPTV au Canada. Interface claire et orientée conversion avec présentation des offres, mise en avant des avantages du service, FAQ, sections marketing et parcours utilisateur fluide. Design responsive, animations légères et expérience optimisée pour desktop et mobile.",
        tech: [
            "React 18",
            "TypeScript",
            "Vite",
            "React Router DOM",
            "Tailwind CSS",
            "Shadcn UI / Radix UI",
            "Framer Motion",
            "Lucide React",
            "React Hook Form",
            "Zod",
            "React Query"
        ],
        type: "web",
        preview: "https://smarters-iptv-8r8f.vercel.app/",
        code: "#"
    },
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
        title: "SmileCare Dental Clinic",
        category: "Site web Cabinet Dentaire Premium",
        img: dentalClinic, // Assure-toi d'importer l'image
        desc: "Site vitrine moderne pour cabinet dentaire conçu pour inspirer confiance et attirer de nouveaux patients. Interface UI/UX premium avec mode sombre/clair, animations fluides et sections complètes (services, équipe médicale, témoignages, avant/après, prise de rendez-vous). Optimisé SEO, totalement responsive et ultra performant.",
        tech: [
            "React 19",
            "Vite",
            "Tailwind CSS",
            "Framer Motion",
            "Lucide Icons",
            "Responsive Design",
            "Dark / Light Mode"
        ],
        type: "web",
        preview: "https://smilecare-dental-clinic-pi.vercel.app/", // mets ton lien Vercel
        code: "#", // mets ton repo GitHub
    },
    {
        title: "Oud Essence Maroc",
        category: "E-commerce Parfums Premium (FR / AR)",
        img: perfumeStore, // importe ton image
        desc: "Boutique e-commerce haut de gamme spécialisée dans les parfums orientaux et de luxe au Maroc. Expérience immersive avec design élégant inspiré des grandes maisons (Dior, Chanel), support multilingue Français / Arabe (RTL), animations fluides et branding complet (logo, favicon, visuels). Gestion du panier et des favoris via localStorage avec commande rapide via WhatsApp. Interface optimisée pour mobile avec une UX premium orientée conversion.",
        tech: [
            "Next.js (App Router)",
            "React",
            "Tailwind CSS",
            "Framer Motion",
            "i18n (FR / AR)",
            "RTL Support",
            "LocalStorage API",
            "Responsive Design",
            "SEO Optimized"
        ],
        type: "web",
        preview: "https://parfums-du-maroc.vercel.app/", // remplace si besoin
        code: "#"
    },
    {
        title: "Velvet Beauty Casablanca",
        category: "Salon de beauté féminin – Coiffure & Soins visage",
        img: beautySalon,
        desc: "Site web premium pour un salon de beauté au Maroc avec support Français / Arabe (RTL), galerie immersive et réservation.",
        tech: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "Framer Motion",
            "i18n (FR / AR)",
            "RTL Support"
        ],
        type: "web",
        preview: "https://velvet-beauty-casablanca.vercel.app/",
        code: "#"
    },
    {
        title: "Luna Chic Boutique",
        category: "E-commerce Mode Féminine (Vêtements, Bijoux, Pyjamas)",
        img: womenFashionStore, // importe ton image
        desc: "Plateforme e-commerce féminine moderne et immersive dédiée à la mode au Maroc (robes, bijoux, pyjamas). Design chic et instagrammable avec animations Framer Motion, sections marketing engageantes (best sellers, coups de cœur, looks complets) et expérience utilisateur fluide. Support multilingue FR / AR avec RTL, panier et favoris persistants via localStorage et commande simplifiée via WhatsApp. Pensée pour maximiser l'engagement et la conversion avec une UI/UX premium.",
        tech: [
            "Next.js (App Router)",
            "React",
            "Tailwind CSS",
            "Framer Motion",
            "i18n (FR / AR)",
            "RTL Support",
            "LocalStorage API",
            "Responsive Design",
            "UX Optimized"
        ],
        type: "web",
        preview: "https://luna-chic-boutique.vercel.app/", // remplace si besoin
        code: "#"
    },
    {
        title: "Riad Al-Andalous",
        category: "Riad Marocain – Luxe & Expérience Immersive",
        img: riadAtlasPalace, // Assure-toi d'importer l'image
        desc: "Site web premium pour un riad marocain de luxe avec animations professionnelles, galerie immersive, réservation en ligne et support multilingue automatique (FR / EN / AR). Design inspiré de l'architecture marocaine traditionnelle, fully responsive et ultra performant. Inclut génération automatique des icônes et favicon.",
        tech: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "Framer Motion",
            "Lucide Icons",
            "i18n (FR / EN / AR)",
            "RTL Support",
            "Responsive Design",
            "Performance Optimized"
        ],
        type: "web",
        preview: "https://riad-al-andalous.vercel.app/", // mets ton lien Vercel
        code: "#", // mets ton GitHub si dispo
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
        title: "Portfolio Photographe v2",
        category: "Galerie artistique responsive",
        img: photographer2,
        desc: "Portfolio moderne avec galerie en mosaïque artistique et intégration d’un chatbot via n8n pour l'assistance visiteurs.",
        tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
        type: "web",
        preview: "https://photographer-portfolio-wheat.vercel.app/",
        code: "#",
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
        title: "TawziiFlow",
        category: "Application mobile de distribution & facturation",
        img: tawziiFlow, // importe l'image générée
        desc: "Application mobile professionnelle conçue pour les agents de distribution permettant la gestion des produits et la création de factures en temps réel chez les clients. Inclut un système complet de facturation avec calcul automatique, génération de PDF personnalisés, stockage local des factures et partage via WhatsApp ou email. Interface moderne, rapide et optimisée pour une utilisation terrain (offline-first).",
        tech: [
            "Flutter",
            "Dart",
            "SQLite / Hive",
            "PDF & Printing",
            "Share Plus",
            "Clean Architecture",
            "Material 3",
            "Offline First"
        ],
        type: "mobile",
        preview: null, // mets lien si tu fais une démo (APK ou vidéo)
        code: "#", // ton repo GitHub
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

const filterCategories = [
    { id: 'all', label: 'Tous' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'saas', label: 'SaaS' }
];

const ProjectCard = ({ project, i, onOpen }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const shouldTruncate = project.desc.length > 120;

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onOpen(project);
        }
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            role="button"
            tabIndex={0}
            onClick={() => onOpen(project)}
            onKeyDown={handleKeyDown}
            className="flex flex-col group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-accent/80 rounded-[2rem]"
        >
            <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/3] mb-6 glass border-main group-hover:shadow-2xl group-hover:shadow-accent/10 transition-all duration-500">
                <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute top-6 right-6 px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2">
                    {project.type === 'mobile' ? <Smartphone size={12} className="text-accent" /> :
                        project.type === 'saas' ? <Cloud size={12} className="text-accent" /> :
                            <Globe size={12} className="text-accent" />}
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">{project.type}</span>
                </div>
            </div>

            <div className="px-2">
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 4).map(t => (
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

                <div className="mb-6">
                    <p className={`text-sm text-strong opacity-75 leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>
                        {project.desc}
                    </p>
                    {shouldTruncate && (
                        <button
                            onClick={(event) => {
                                event.stopPropagation();
                                setIsExpanded(!isExpanded);
                            }}
                            className="text-xs font-bold text-accent hover:underline mt-2 inline-block"
                        >
                            {isExpanded ? 'Voir moins' : 'Voir plus'}
                        </button>
                    )}
                </div>

                <div className="flex flex-wrap gap-4">
                    {project.preview && project.preview !== '#' ? (
                        <a href={project.preview} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} className="text-xs font-bold text-accent flex items-center gap-1.5 underline decoration-2 underline-offset-4 hover:text-accent/80 transition-colors">
                            Live Demo <ExternalLink size={14} />
                        </a>
                    ) : (
                        <a href={getDemoRequestUrl(project.title)} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} className="text-xs font-bold text-accent flex items-center gap-1.5 underline decoration-2 underline-offset-4 hover:text-accent/80 transition-colors">
                            Demander une démo <ExternalLink size={14} />
                        </a>
                    )}
                    {project.code && project.code !== "#" && (
                        <a href={project.code} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} className="text-xs font-bold text-strong flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
                            Code <Github size={14} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default function Portfolio() {
    const [filterType, setFilterType] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (!selectedProject) return;

        const handleEscape = (event) => {
            if (event.key === 'Escape') setSelectedProject(null);
        };

        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [selectedProject]);

    const filteredProjects = projects.filter(
        (p) => filterType === 'all' || p.type === filterType
    );

    return (
        <>
            <section id="portfolio" className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {filterCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilterType(cat.id)}
                                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${filterType === cat.id
                                    ? 'bg-accent text-white shadow-lg shadow-accent/30'
                                    : 'bg-white/5 text-strong hover:bg-white/10 hover:text-accent border border-white/10'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <motion.div layout className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, i) => (
                                <ProjectCard key={project.title} project={project} i={i} onOpen={setSelectedProject} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/80 backdrop-blur-sm p-3 sm:p-6"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 24, scale: 0.96 }}
                            transition={{ duration: 0.22 }}
                            onClick={(event) => event.stopPropagation()}
                            className="w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1220] shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                        >
                            <div className="relative h-full">
                                <button
                                    type="button"
                                    aria-label="Fermer la fiche du projet"
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition hover:bg-black/60"
                                >
                                    <X size={18} />
                                </button>

                                <div className="max-h-[90vh] overflow-y-auto">
                                    <div className="sticky top-0 z-10 bg-[#0c1220]">
                                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                                            <Image
                                                src={selectedProject.img}
                                                alt={selectedProject.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 70vw"
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-5 p-4 sm:p-6 lg:p-8">
                                        <div>
                                            <p className="mb-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-accent">
                                                {selectedProject.type}
                                            </p>
                                            <h3 className="text-2xl sm:text-3xl font-bold text-white">
                                                {selectedProject.title}
                                            </h3>
                                            <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                                                {selectedProject.category}
                                            </p>
                                        </div>

                                        <p className="text-sm sm:text-base leading-relaxed text-slate-200/90">
                                            {selectedProject.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tech.map((tech) => (
                                                <span key={tech} className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-accent">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row">
                                            {selectedProject.preview && selectedProject.preview !== '#' ? (
                                                <a
                                                    href={selectedProject.preview}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-bold text-white transition hover:bg-accent/90"
                                                >
                                                    Live Demo <ExternalLink size={16} />
                                                </a>
                                            ) : (
                                                <a
                                                    href={getDemoRequestUrl(selectedProject.title)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-bold text-white transition hover:bg-accent/90"
                                                >
                                                    Demander une démo <ExternalLink size={16} />
                                                </a>
                                            )}
                                            {selectedProject.code && selectedProject.code !== "#" && (
                                                <a
                                                    href={selectedProject.code}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                                                >
                                                    Code <Github size={16} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
