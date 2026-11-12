// Shared project data: used by the Portfolio section, project pages, landing pages and sitemap.
import easy from '../assets/easy.png';
import recruit from '../assets/recruit.jpg';
import chat from '../assets/chat.jpg';
import travel from '../assets/travel.png';
import photographer from '../assets/photographer.png';
import photographer2 from '../assets/photographer2.png';
import hotel from '../assets/hotel.png';
import mada_scanner from '../assets/mada_scanner.png';
import liftmosque from '../assets/liftMosque.png';
import couvoit from '../assets/mada_covoit.png';
import ironElite from '../assets/ironElite.png';
import ayoubStore from '../assets/ayoubStore.png';
import cosmeticStore from '../assets/cosmeticStore.png';
import dentalClinic from '../assets/dentalClinic.png';
import beautySalon from '../assets/beautySalon.png';
import riadAtlasPalace from '../assets/riadAtlasPalace.png';
import perfumeStore from '../assets/parfums2.png';
import womenFashionStore from '../assets/womenFashionStore.png';
import tawziiFlow from '../assets/tawziiFlow.jpeg';
import centerHub from '../assets/centerHub2.png';
import smartersIptv from '../assets/smartersIptv.png';
import driveFlow from '../assets/driveFlow.png';
import rentFlow from '../assets/rentFlow.png';
import syndicFlow from '../assets/syndicFlow.png';
import gymFlow from '../assets/gymFlow.png';
import agrimada from '../assets/agrimada.png';

const rawProjects = [
    {
        title: "Agrimada",
        category: "Plateforme SaaS de Gestion Agricole",
        img: agrimada,
        desc: "Application de gestion financière pour une ferme partagée entre associés. Elle suit les dépenses, revenus et cotisations, indique qui a payé ou encaissé quoi et avec quel argent (ferme ou avance personnelle). Elle comprend un tableau de bord avec graphiques, des rapports, des exports CSV/Excel et un journal d'activité. Les accès dépendent du rôle (Admin, Membre). Un site vitrine multilingue (FR/AR) l'accompagne.",
        tech: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "NextAuth",
            "Prisma",
            "PostgreSQL",
            "Tailwind CSS",
            "Zod",
            "Recharts",
            "ExcelJS"
        ],
        type: "saas",
        preview: "https://agrimada-production.up.railway.app",
        code: "#",
    },
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

export function slugify(title) {
    return title
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}

export const projects = rawProjects.map((p) => ({ ...p, slug: slugify(p.title) }));

export function getProjectBySlug(slug) {
    return projects.find((p) => p.slug === slug) ?? null;
}

export function getProjectsBySlugs(slugs) {
    return slugs.map(getProjectBySlug).filter(Boolean);
}
