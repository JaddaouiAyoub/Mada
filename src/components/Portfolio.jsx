'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, Smartphone, Cloud, X, ChevronDown } from 'lucide-react';

const PAGE_SIZE = 6;

const WHATSAPP_NUMBER = '212700547163';
const getDemoRequestUrl = (projectTitle) => {
    const message = `Bonjour, je souhaite demander une démo du projet ${projectTitle}.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

import { projects } from '../data/projects';

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
                    alt={`${project.title} — ${project.category}`}
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
                    <Link href={`/fr/projets/${project.slug}`} onClick={(event) => event.stopPropagation()} className="text-xs font-bold text-strong flex items-center gap-1.5 underline decoration-2 underline-offset-4 hover:text-accent transition-colors">
                        Détails du projet
                    </Link>
                    {project.preview && project.preview !== '#' ? (
                        <a href={project.preview} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} className="text-xs font-bold text-accent flex items-center gap-1.5 underline decoration-2 underline-offset-4 hover:text-accent/80 transition-colors">
                            Live Demo <ExternalLink size={14} />
                        </a>
                    ) : (
                        <a href={getDemoRequestUrl(project.title)} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} className="text-xs font-bold text-accent flex items-center gap-1.5 underline decoration-2 underline-offset-4 hover:text-accent/80 transition-colors">
                            Demander une démo <ExternalLink size={14} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default function Portfolio() {
    const [filterType, setFilterType] = useState('all');
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
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
    const visibleProjects = filteredProjects.slice(0, visibleCount);
    const hasMore = visibleCount < filteredProjects.length;
    const canCollapse = !hasMore && filteredProjects.length > PAGE_SIZE;

    const changeFilter = (id) => {
        setFilterType(id);
        setVisibleCount(PAGE_SIZE);
    };

    const showLess = () => {
        setVisibleCount(PAGE_SIZE);
        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    };

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
                                onClick={() => changeFilter(cat.id)}
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
                            {visibleProjects.map((project, i) => (
                                <ProjectCard key={project.slug} project={project} i={i % PAGE_SIZE} onOpen={setSelectedProject} />
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {(hasMore || canCollapse) && (
                        <div className="mt-14 flex flex-col items-center gap-3">
                            {hasMore && (
                                <p className="text-xs font-semibold text-muted">
                                    {visibleProjects.length} / {filteredProjects.length} projets
                                </p>
                            )}
                            <button
                                type="button"
                                onClick={hasMore ? () => setVisibleCount((c) => c + PAGE_SIZE) : showLess}
                                className="inline-flex items-center gap-2 rounded-full border border-accent/30 px-6 py-3 text-sm font-bold text-accent hover:bg-accent/10 transition-colors"
                            >
                                {hasMore ? 'Voir plus de projets' : 'Voir moins'}
                                <ChevronDown size={16} className={hasMore ? '' : 'rotate-180'} aria-hidden="true" />
                            </button>
                        </div>
                    )}
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

                                <div className="max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                                    <div className="bg-[#0c1220]">
                                        <div className="relative w-full overflow-y-auto bg-slate-900 md:max-h-[55vh]">
                                            <div className="relative h-[260px] w-full sm:h-[320px] lg:h-[420px]">
                                                <Image
                                                    src={selectedProject.img}
                                                    alt={selectedProject.title}
                                                    fill
                                                    priority
                                                    loading="eager"
                                                    sizes="(max-width: 768px) 100vw, 70vw"
                                                    className="object-fill"
                                                />
                                            </div>
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
                                            <Link
                                                href={`/fr/projets/${selectedProject.slug}`}
                                                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                                            >
                                                Fiche complète du projet
                                            </Link>
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
