import React, { useState, useMemo } from "react";
import {
    Briefcase,
    Layers,
    Code,
    Palette,
    X,
    ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { projects as initialProjects, categories as rawCategories } from "../data/portfolio";

const iconMap = {
    Layers,
    Code,
    Palette,
};

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [hiddenIds, setHiddenIds] = useState(new Set());
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const categories = rawCategories.map((c) => ({ ...c, icon: iconMap[c.iconName] || Layers }));
    const projects = initialProjects;

    const visibleProjects = useMemo(() => {
        return projects.filter((project) => {
            const isNotHidden = !hiddenIds.has(project.id);
            const matchesCategory = activeCategory === "all" || project.category === activeCategory;
            return isNotHidden && matchesCategory;
        });
    }, [activeCategory, hiddenIds, projects]);

    const handleToggleHide = (id, e) => {
        e.stopPropagation();
        e.preventDefault();
        const nextHidden = new Set(hiddenIds);
        if (nextHidden.has(id)) nextHidden.delete(id);
        else nextHidden.add(id);
        setHiddenIds(nextHidden);
    };

    const handleResetVisibility = () => setHiddenIds(new Set());

    const getGridContainerClass = (count) => {
        if (count === 1) return "flex justify-center w-full max-w-md mx-auto";
        if (count === 2) return "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-center justify-items-center";
        return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto justify-items-center justify-center";
    };

    const getProjectImages = (project) => {
        if (!project) return [];
        if (project.images && project.images.length > 0) return project.images;
        return project.image ? [project.image] : [];
    };

    const nextImage = () => {
        if (!selectedProject) return;
        const images = getProjectImages(selectedProject);
        setActiveImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        if (!selectedProject) return;
        const images = getProjectImages(selectedProject);
        setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section id="portfolio" className="py-8 bg-transparent px-6 transition duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-blue-600 font-extrabold uppercase tracking-widest text-xs mb-2">Our Projects</h2>
                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 font-display tracking-tight leading-tight">Projects We've Built</h3>
                    <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">Melihat lebih dekat beberapa inovasi digital yang telah kami realisasikan untuk klien-klien terbaik kami.</p>
                </div>

                <div className="pb-4 px-6 max-w-7xl mx-auto text-center">
                    <div className="inline-flex flex-wrap gap-1 bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm">
                        {categories.map((cat) => {
                            const IconComponent = cat.icon;
                            const isActive = activeCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${isActive ? "bg-blue-600 text-white shadow-lg shadow-blue-500/15 scale-105" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"}`}>
                                    <IconComponent className="w-3.5 h-3.5" />
                                    <span>{cat.name}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="relative min-h-[400px]">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {visibleProjects.length === 0 ? (
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="flex flex-col items-center justify-center text-center p-12 bg-white border border-slate-100 rounded-[2rem] max-w-md mx-auto shadow-lg">
                                <Briefcase className="w-12 h-12 text-slate-400 mb-4 stroke-[1.2]" />
                                <h4 className="font-extrabold text-slate-900 text-lg mb-1">Tidak Ada Proyek Aktif</h4>
                                <p className="text-slate-500 text-xs mb-4">Semua proyek dalam kategori ini sedang disembunyikan atau dikesampingkan.</p>
                                <button onClick={handleResetVisibility} className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 py-2.5 text-xs font-bold transition duration-150 uppercase tracking-wider shadow-md">Tampilkan Semua Proyek</button>
                            </motion.div>
                        ) : (
                            <motion.div layout className={getGridContainerClass(visibleProjects.length)}>
                                {visibleProjects.map((project) => {
                                    const isUIUX = project.category === "ui/ux";
                                    const isLogo = project.category === "logo";

                                    return (
                                        <motion.div
                                            key={project.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 24 }}
                                            className="group relative w-full h-full flex"
                                        >
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setSelectedProject(project);
                                                    setActiveImageIndex(0);
                                                }}
                                                className={`group flex flex-col rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 w-full
                                                    ${isUIUX
                                                        ? "bg-slate-950 text-white shadow-blue-500/10 hover:shadow-blue-400/20"
                                                        : isLogo
                                                            ? "bg-white border border-slate-200 hover:shadow-2xl"
                                                            : "bg-white hover:shadow-2xl"
                                                    }`}
                                            >
                                                {/* =========================
                                                IMAGE / HERO SECTION
                                                ========================== */}
                                                <div
                                                    className={`
                                                        relative overflow-hidden
                                                        ${isUIUX ? "h-72 bg-gradient-to-br from-cyan-500/10 via-slate-950 to-slate-900" : ""}
                                                        ${isLogo ? "h-72 bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-8" : ""} 
                                                    `}
                                                >
                                                    {/* UI/UX CARD */}
                                                    {isUIUX && (
                                                        <>
                                                            <img
                                                                src={project.image}
                                                                alt={project.title}
                                                                referrerPolicy="no-referrer"
                                                                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                                            />
                                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),transparent_30%)] pointer-events-none" />
                                                            <span className="absolute bottom-4 right-4 inline-block px-4 py-1.5 text-[10px] font-extrabold tracking-wider uppercase rounded-full shadow-lg pointer-events-none bg-cyan-300 text-slate-950">
                                                                {project.category.toUpperCase()} APP
                                                            </span>
                                                            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200 shadow-sm backdrop-blur">
                                                                <span className="w-2 h-2 rounded-full bg-blue-500" />
                                                                <span className="text-[10px] font-extrabold tracking-[0.18em] uppercase text-slate-700">
                                                                    Prototype
                                                                </span>
                                                            </div>
                                                        </>
                                                    )}

                                                    {/* LOGO CARD */}
                                                    {isLogo && (
                                                        <>
                                                            {/* background premium */}
                                                            <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_35%,#eff6ff_100%)]" />

                                                            {/* decorative glow */}
                                                            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-blue-200/30 blur-3xl" />
                                                            <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-cyan-200/30 blur-3xl" />
                                                            <div className="absolute top-1/2 left-1/2 w-52 h-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/70" />
                                                            <div className="absolute top-1/2 left-1/2 w-72 h-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-100/80" />

                                                            {/* floating brand label */}
                                                            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200 shadow-sm backdrop-blur">
                                                                <span className="w-2 h-2 rounded-full bg-blue-500" />
                                                                <span className="text-[10px] font-extrabold tracking-[0.18em] uppercase text-slate-700">
                                                                    Brand Identity
                                                                </span>
                                                            </div>

                                                            {/* logo showcase */}
                                                            <div className="relative z-10 w-full h-full flex items-center justify-center px-8 py-10">
                                                                <div className="relative w-full max-w-[240px] aspect-square">
                                                                    {/* back layer */}
                                                                    <div className="absolute inset-0 rounded-[2rem] bg-white/70 border border-white/60 shadow-2xl rotate-6 scale-[0.95] transition duration-500 group-hover:rotate-3 group-hover:scale-100" />

                                                                    {/* middle layer */}
                                                                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white to-slate-50 border border-slate-100 shadow-xl -rotate-3 scale-[0.98] transition duration-500 group-hover:-rotate-1" />

                                                                    {/* main logo card */}
                                                                    <div className="relative h-full rounded-[2rem] bg-white border border-slate-100 shadow-2xl flex items-center justify-center p-4 transition duration-500 group-hover:scale-105 group-hover:-translate-y-1">
                                                                        <img
                                                                            src={project.image}
                                                                            alt={project.title}
                                                                            referrerPolicy="no-referrer"
                                                                            className="max-w-full max-h-full object-contain drop-shadow-[0_8px_20px_rgba(15,23,42,0.12)]"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* bottom info chip */}
                                                            <div className="absolute bottom-4 right-4 z-20 px-3 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-extrabold uppercase tracking-[0.18em] shadow-lg">
                                                                Logo Concept
                                                            </div>
                                                        </>
                                                    )}

                                                    {/* DEFAULT CARD */}
                                                    {!isUIUX && !isLogo && (
                                                        <>
                                                            <div className="relative w-full h-72 overflow-hidden">
                                                                <img
                                                                    src={project.image}
                                                                    alt={project.title}
                                                                    referrerPolicy="no-referrer"
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                                                />
                                                                <span className="absolute bottom-4 right-4 inline-block px-4 py-1.5 text-[10px] font-extrabold tracking-wider uppercase rounded-full shadow-lg pointer-events-none bg-blue-600 text-white">
                                                                    {project.category.toUpperCase()} APP
                                                                </span>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>

                                                {/* =========================
                                                CONTENT SECTION
                                                ========================== */}
                                                <div className={`p-6 flex flex-col flex-1`}>
                                                    <span
                                                        className={`inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full self-start
                                                            ${isUIUX
                                                                ? "bg-slate-800 text-cyan-200"
                                                                : isLogo
                                                                    ? "bg-blue-50 text-blue-700 self-center"
                                                                    : "bg-slate-100 text-slate-600"
                                                            }`}
                                                    >
                                                        {project.subtitle}
                                                    </span>

                                                    <h4
                                                        className={`text-3xl font-extrabold mb-4 leading-tight font-display transition-colors duration-150`}
                                                    >
                                                        {project.title}
                                                    </h4>

                                                    <p
                                                        className={`mb-5 text-sm leading-relaxed flex-1`}
                                                    >
                                                        {project.description}
                                                    </p>

                                                    <div className={`flex flex-wrap gap-2 mb-5 ${isLogo ? "justify-center" : ""}`}>
                                                        {project.tags.map((tag) => (
                                                            <span
                                                                key={tag}
                                                                className={`px-3 py-1 rounded-full text-xs font-semibold
                                                                    ${isUIUX
                                                                        ? "bg-white/10 text-cyan-100 border border-white/10"
                                                                        : isLogo
                                                                            ? "bg-slate-100 text-slate-700  border-slate-200"
                                                                            : "bg-blue-100 text-blue-700"
                                                                    }`}
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    <div
                                                        className={`flex items-center gap-2 font-bold
                                                            ${isUIUX
                                                                ? "text-cyan-200"
                                                                : isLogo
                                                                    ? "text-slate-900"
                                                                    : "text-blue-600"
                                                            }`}
                                                    >
                                                        Lihat Detail Proyek
                                                        <span className="text-xl group-hover:translate-x-1.5 transition-transform duration-200">→</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" />
                            <motion.div initial={{ opacity: 0, scale: 0.95, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 15 }} className="relative w-full max-w-2xl bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col text-slate-800">
                                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 p-2.5 bg-white/90 hover:bg-rose-500 text-slate-500 hover:text-white rounded-full transition duration-150 z-20 shadow-md border border-slate-100"><X className="w-4 h-4" /></button>

                                <div className="overflow-y-auto">
                                    <div className="relative bg-slate-100">
                                        {(() => {
                                            const images = getProjectImages(selectedProject);
                                            const currentImage = images[activeImageIndex];

                                            return (
                                                <>
                                                    {/* Main Preview */}
                                                    <div className="h-64 sm:h-80 relative overflow-hidden">
                                                        <img
                                                            src={currentImage}
                                                            alt={`${selectedProject.title} ${activeImageIndex + 1}`}
                                                            referrerPolicy="no-referrer"
                                                            className="w-full h-full object-cover"
                                                        />

                                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                                                        <div className="absolute bottom-6 left-6 right-6">
                                                            <span className="inline-block px-3.5 py-1.5 mb-2.5 text-[10px] font-extrabold tracking-widest uppercase rounded-full bg-blue-600 text-white">
                                                                {selectedProject.category.toUpperCase()}
                                                            </span>

                                                            <h3 className="text-3xl font-black text-white [text-shadow:0_2px_12px_rgba(0,0,0,1)]">
                                                                {selectedProject.title}
                                                            </h3>
                                                        </div>

                                                        {/* tombol prev/next hanya kalau gambar > 1 */}
                                                        {images.length > 1 && (
                                                            <>
                                                                <button
                                                                    onClick={prevImage}
                                                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 w-10 h-10 rounded-full shadow-md flex items-center justify-center"
                                                                >
                                                                    ‹
                                                                </button>

                                                                <button
                                                                    onClick={nextImage}
                                                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 w-10 h-10 rounded-full shadow-md flex items-center justify-center"
                                                                >
                                                                    ›
                                                                </button>
                                                            </>
                                                        )}
                                                    </div>

                                                    {/* Thumbnail horizontal scroll */}
                                                    {images.length > 1 && (
                                                        <div className="p-4 border-t border-slate-200 bg-white">
                                                            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
                                                                {images.map((img, index) => (
                                                                    <button
                                                                        key={index}
                                                                        onClick={() => setActiveImageIndex(index)}
                                                                        className={`flex-shrink-0 w-28 h-20 rounded-xl overflow-hidden border-2 transition ${activeImageIndex === index
                                                                            ? "border-blue-600"
                                                                            : "border-transparent hover:border-slate-300"
                                                                            }`}
                                                                    >
                                                                        <img
                                                                            src={img}
                                                                            alt={`thumb-${index}`}
                                                                            className="w-full h-full object-cover"
                                                                        />
                                                                    </button>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </>
                                            );
                                        })()}
                                    </div>

                                    <div className="p-6 sm:p-8">
                                        <div className="flex flex-wrap gap-2 mb-6">{selectedProject.tags.map((tag) => (<span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 border border-blue-50/20 rounded-md text-xs font-bold uppercase">{tag}</span>))}</div>
                                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">{selectedProject.description} Kami mengimplementasikan solusi frontend modern berkinerja tinggi serta mengoptimalkan desain visual untuk meyakinkan audiens target klien sehingga meningkatkan branding bernilai tinggi menggunakan Geometric Balance layout.</p>


                                        {selectedProject.url && (<div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                                            <div className="text-center sm:text-left">
                                                <span className="block text-slate-400 text-[10px] uppercase font-black tracking-wider">Demo Proyek</span>
                                                <span className="text-slate-700 text-xs sm:text-sm font-bold font-mono">{selectedProject.url}</span>
                                            </div>
                                            <a
                                                href={selectedProject.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition duration-150 shadow-md uppercase tracking-wide font-sans"
                                            >
                                                <span>Buka Tautan Luar</span>
                                                <ExternalLink className="w-3.5 h-3.5" />
                                            </a>
                                        </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Portfolio;
