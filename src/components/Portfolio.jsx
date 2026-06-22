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
                                    return (
                                        <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ type: "spring", stiffness: 300, damping: 24 }} className="group relative w-full h-full flex">
                                            <a href={project.url} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); setSelectedProject(project); }} className={`group flex flex-col rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 w-full ${isUIUX ? "bg-slate-950 text-white shadow-blue-500/10 hover:shadow-blue-400/20" : "bg-white hover:shadow-2xl"}`}>
                                                <div className={`h-60 overflow-hidden relative ${isUIUX ? "bg-gradient-to-br from-cyan-500/10 via-slate-950 to-slate-900" : ""}`}>
                                                    <img src={project.image} alt={project.title} referrerPolicy="no-referrer" className={`w-full h-full object-cover ${isUIUX ? "group-hover:scale-105" : "group-hover:scale-110"} transition duration-500`} />
                                                    {isUIUX && <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),transparent_30%)] pointer-events-none" />}
                                                    <span className={`absolute bottom-4 left-4 inline-block px-4 py-1.5 text-[10px] font-extrabold tracking-wider uppercase rounded-full shadow-lg pointer-events-none ${isUIUX ? "bg-cyan-300 text-slate-950" : "bg-blue-600 text-white"}`}>{project.category.toUpperCase()} APP</span>
                                                    {isUIUX && <span className="absolute top-4 left-4 inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Prototype</span>}
                                                    <button onClick={(e) => handleToggleHide(project.id, e)} title="Sembunyikan proyek ini" className={`absolute top-4 right-4 p-2 ${isUIUX ? "bg-slate-900/90 text-slate-100 border border-slate-700" : "bg-white/90 text-slate-500 border border-slate-100"} hover:bg-rose-500 hover:text-white rounded-full transition duration-150 shadow-md backdrop-blur-sm group-hover:opacity-100 opacity-80 z-10`}>
                                                        <X className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>

                                                <div className="p-6 flex flex-col flex-1">
                                                    <span className={`inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full self-start ${isUIUX ? "bg-slate-800 text-cyan-200" : "bg-slate-100 text-slate-600"}`}>{project.subtitle}</span>
                                                    <h4 className={`text-3xl font-extrabold mb-4 leading-tight font-display transition-colors duration-150 ${isUIUX ? "text-white group-hover:text-cyan-200" : "text-slate-900 group-hover:text-blue-600"}`}>{project.title}</h4>
                                                    <p className={`mb-5 text-sm leading-relaxed flex-1 ${isUIUX ? "text-slate-300" : "text-slate-500"}`}>{project.description}</p>
                                                    <div className="flex flex-wrap gap-2 mb-5">{project.tags.map((tag) => (<span key={tag} className={`px-3 py-1 rounded-full text-xs font-semibold ${isUIUX ? "bg-white/10 text-cyan-100 border border-white/10" : "bg-blue-100 text-blue-700"}`}>{tag}</span>))}</div>
                                                    <div className={`flex items-center gap-2 font-bold ${isUIUX ? "text-cyan-200" : "text-blue-600"}`}>Lihat Detail Proyek <span className="text-xl group-hover:translate-x-1.5 transition-transform duration-200">→</span></div>
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
                                    <div className="h-64 sm:h-80 relative bg-slate-100">
                                        <img src={selectedProject.image} alt={selectedProject.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                                        <div className="absolute bottom-6 left-6 right-6">
                                            <span className="inline-block px-3.5 py-1.5 mb-2.5 text-[10px] font-extrabold tracking-widest uppercase rounded-full bg-blue-600 text-white">
                                                {selectedProject.category.toUpperCase()}
                                            </span>

                                            <h3 className="text-3xl font-black text-white [text-shadow:0_2px_12px_rgba(0,0,0,1)]">
                                                {selectedProject.title}
                                            </h3>
                                        </div>
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
