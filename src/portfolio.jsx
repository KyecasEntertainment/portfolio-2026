import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Projects", "Skills", "Contact", "Resume"];

const PROJECTS = [
  {
    id: 1,
    title: "Simple Static E-Commerce App",
    period: "Oct 2025",
    type: "Mobile App",
    tags: ["Flutter", "Dart", "State Management"],
    description:
      "A full-featured Flutter-based food ordering mobile app simulating a food marketplace — browse items, manage a cart, and place orders using in-memory state and built-in navigation.",
    github: "https://github.com/KyecasEntertainment/food_app.git",
    color: "#a78bfa",
    icon: "🛒",
    screenshot: "/food_app/thumbnail_food_app.png",
    sampleImages: ["/food_app/1.png","/food_app/2.png","/food_app/3.png","/food_app/4.png","/food_app/5.png"]
  },
  {
    id: 2,
    title: "Mobile Inventory System (Applied to 3 different stores)",
    period: "May 2025 – Present",
    type: "Mobile App",
    tags: ["Flutter", "Hive", "Android", "iOS"],
    description:
      "A mobile inventory management app to create categories, add stock batches, track daily sales/returns/discards, and log all actions. Data stored locally via Hive for offline-first use or Firebase for cloud storage purposes",
    github: "https://github.com/ZhyKazer/jk_inventory_system",
    color: "#34d399",
    icon: "📦",
    screenshot: "/B&M/thumbnail_mobile_inv.png",
    sampleImages: ["/B&M/1.jpg", "/B&M/2.jpg", "/B&M/3.jpg", "/B&M/4.jpg", "/B&M/6.jpg"],
  },
  {
    id: 3,
    title: "Reward Token App",
    period: "Feb 2026",
    type: "Mobile App",
    tags: ["Flutter", "Firebase", "Hive", "Material 3", "QR"],
    description:
      "A loyalty system application (for a Vape Shop) with QR-based customer registration, PIN login, role-based access, Firestore sync, PDF generation, and a custom dark-themed UI. Built with Firebase Auth and Cloud Firestore.",
    github: "https://github.com/ZhyKazer/reward_token_app.git",
    color: "#f472b6",
    icon: "🎁",
    screenshot: "/reward_token/thumbnail_reward_token.png",
    sampleImages:["/reward_token/1.jpg","/reward_token/2.jpg","/reward_token/3.jpg","/reward_token/4.jpg","/reward_token/5.jpg",]
  },
  {
    id: 4,
    title: "Bike Rides Tracker",
    period: "Feb 2026",
    type: "Mobile App",
    tags: ["Flutter", "Hive", "OpenStreetMap"],
    description:
      "A bike tracking app with GPS ride recording, live stats, ride history, route replay maps, offline map caching, background tracking notifications, and customizable themes. Built with Flutter, Hive, Provider, Geolocator, and OpenStreetMap.",
    github: "https://github.com/KyecasEntertainment/bike_tracker.git",
    color: "#f472b6",
    icon: "🚲",
    screenshot: "/bike_tracking/thumbnail_bike_tracker.png",
    sampleImages: ["/bike_tracking/1.jpg", "/bike_tracking/2.jpg", "/bike_tracking/3.jpg", "/bike_tracking/4.jpg"],
  },
  {
    id: 5,
    title: "DOST Calabarzon ASSIST",
    period: "Feb 2025 – May 2025",
    type: "Web App",
    tags: ["Laravel 11", "TypeScript", "PHP"],
    description:
      "Developed the Assistance & Support Services for Information System Technologies website for DOST Calabarzon. Led backend development using Laravel 11 with frontend contributions in TypeScript.",
    github: null,
    color: "#22d3ee",
    icon: "🌐",
    screenshot: "/assist_dost/thumbnail_assist.png",
    sampleImages: ["/assist_dost/1.jpg","/assist_dost/2.png","/assist_dost/3.png",]
  },
];

const SKILLS = [
  { category: "Mobile", items: ["Flutter", "Dart", "Firebase", "Swift", "Kotlin"] },
  { category: "Backend", items: ["Laravel", "PHP", "Python", "C#", "Java"] },
  { category: "Frontend", items: ["TypeScript", "HTML", "CSS", "React"] },
  { category: "Database", items: ["MySQL", "Firestore", "SQLite"] },
  { category: "Game Dev", items: ["Unity", "Godot", "C#", "GDScript"] },
  { category: "Tools & AI", items: ["Git", "GitHub", "Claude AI", "ChatGPT", "Llama", "GLM", "Deepseek", "QWEN"] },
];

function useViewport() {
  const getWidth = () => (typeof window === "undefined" ? 1200 : window.innerWidth);
  const [width, setWidth] = useState(getWidth);

  useEffect(() => {
    const onResize = () => setWidth(getWidth());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return {
    width,
    isMobile: width <= 640,
    isTablet: width <= 900,
  };
}

function NavBar({ active, onNav, onResume, isMobile }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(8,12,24,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(34,211,238,0.12)" : "none",
      transition: "all 0.3s ease",
      padding: isMobile ? "0.25rem clamp(0.75rem,4vw,1rem)" : "0 clamp(1.5rem,5vw,4rem)",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: isMobile ? "stretch" : "center",
        justifyContent: "space-between", minHeight: isMobile ? 82 : 64, flexDirection: isMobile ? "column" : "row",
        paddingTop: isMobile ? 6 : 0, paddingBottom: isMobile ? 6 : 0,
      }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace", color: "#22d3ee", fontSize: isMobile ? 16 : 18,
          fontWeight: 700, letterSpacing: "-0.5px", lineHeight: isMobile ? "24px" : "normal",
        }}>
          <span style={{ color: "#64748b" }}>&lt;</span>ZTB<span style={{ color: "#64748b" }}>/&gt;</span>
        </span>
        <div style={{
          display: "flex",
          gap: isMobile ? "0.9rem" : "2rem",
          overflowX: isMobile ? "auto" : "visible",
          whiteSpace: isMobile ? "nowrap" : "normal",
          paddingBottom: isMobile ? 2 : 0,
          scrollbarWidth: "thin",
        }}>
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => link === "Resume" ? onResume() : onNav(link)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "'Inter', sans-serif", fontSize: isMobile ? 13 : 14, fontWeight: 500,
              color: active === link ? "#22d3ee" : "#94a3b8",
              transition: "color 0.2s",
              padding: "4px 0",
              borderBottom: active === link ? "2px solid #22d3ee" : "2px solid transparent",
            }}>{link}</button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function HeroSection({ onNav, isMobile, isTablet }) {
  return (
    <section id="hero" style={{
      minHeight: isTablet ? "auto" : "100vh", display: "flex", alignItems: "center",
      padding: isMobile ? "6.5rem clamp(1rem,4.5vw,1.25rem) 3.5rem" : "0 clamp(1.5rem,5vw,4rem)",
      background: "linear-gradient(135deg, #080c18 0%, #0d1529 60%, #0a1628 100%)",
      position: "relative", overflow: "hidden",
      scrollMarginTop: isMobile ? 92 : 70,
    }}>
      <div style={{
        position: "absolute", top: "20%", right: "5%",
        width: isMobile ? 260 : 420, height: isMobile ? 260 : 420, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "2%",
        width: isMobile ? 180 : 300, height: isMobile ? 180 : 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: isMobile ? "2rem" : "4rem", width: "100%", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#22d3ee", fontSize: 14, marginBottom: "1rem", letterSpacing: 1 }}>
            {"// hello world"}
          </p>
          <h1 style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 800, color: "#f1f5f9", lineHeight: 1.1, margin: "0 0 0.5rem" }}>
            Zhyheim Traisser<br />
            <span style={{ color: "#22d3ee" }}>Bathan</span>
          </h1>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#64748b", fontSize: 16, margin: "0.75rem 0 1.5rem" }}>
            Flutter Dev · Full-Stack · BSCS Graduate
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8", fontSize: 16, lineHeight: 1.75, maxWidth: 520, marginBottom: "2rem" }}>
            Computer Science graduate from Laguna State Polytechnic University — Los Baños. I build cross-platform mobile apps, web systems, and machine learning solutions that solve real-world problems.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <button onClick={() => onNav("Projects")} style={{
              background: "#22d3ee", color: "#080c18", border: "none", borderRadius: 8,
              padding: isMobile ? "11px 18px" : "12px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer",
              fontFamily: "'Inter', sans-serif", transition: "opacity 0.2s",
            }}>View Projects</button>
            <button onClick={() => onNav("Contact")} style={{
              background: "transparent", color: "#22d3ee", border: "1.5px solid rgba(34,211,238,0.4)",
              borderRadius: 8, padding: isMobile ? "11px 18px" : "12px 28px", fontSize: 15, fontWeight: 600, cursor: "pointer",
              fontFamily: "'Inter', sans-serif", transition: "all 0.2s",
            }}>Get In Touch</button>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
          <div style={{
            width: isMobile ? 168 : 200, height: isMobile ? 168 : 200, borderRadius: "50%",
            border: "3px solid rgba(34,211,238,0.35)",
            overflow: "hidden", position: "relative",
            boxShadow: "0 0 40px rgba(34,211,238,0.12)",
          }}>
            <img
              src="/grad_pic.jpg"
              alt="Zhyheim Traisser Bathan"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div style={{
            background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.2)",
            borderRadius: 8, padding: "8px 20px", textAlign: "center",
          }}>
            <p style={{ margin: 0, fontFamily: "'JetBrains Mono', monospace", color: "#22d3ee", fontSize: 13 }}>Available for opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ isMobile }) {
  return (
    <section id="about" style={{ padding: "6rem clamp(1.5rem,5vw,4rem)", background: "#080c18", scrollMarginTop: isMobile ? 96 : 72 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel label="01 — About Me" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "3rem", alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'Inter', sans-serif", color: "#f1f5f9", fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 700, margin: "0 0 1.25rem" }}>
              Building things that matter
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8", fontSize: 16, lineHeight: 1.85, marginBottom: "1rem" }}>
              I'm a BS Computer Science graduate (Major in Intelligent Systems) from Laguna State Polytechnic University – Los Baños, with hands-on experience in software development, mobile apps, web development, and machine learning.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8", fontSize: 16, lineHeight: 1.85 }}>
              I've built inventory systems, loyalty apps, e-commerce backends, and even 2D games — always looking for ways to turn ideas into useful, polished products.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { label: "Education", value: "BSCS – Intelligent Systems, LSPU Los Baños (2021–2025)" },
              { label: "Current Role", value: "Programmer & System Administrator" },
              { label: "Location", value: "Los Baños, Laguna, Philippines" },
              { label: "Languages", value: "Filipino (Native) · English (C2 Proficient)" },
            ].map(({ label, value }) => (
              <div key={label} style={{
                background: "#0d1529", border: "1px solid rgba(34,211,238,0.1)", borderRadius: 10,
                padding: "1rem 1.25rem",
              }}>
                <p style={{ margin: "0 0 4px", fontFamily: "'JetBrains Mono', monospace", color: "#22d3ee", fontSize: 11, textTransform: "uppercase", letterSpacing: 1 }}>{label}</p>
                <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", color: "#e2e8f0", fontSize: 14 }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection({ isMobile }) {
  const [hovered, setHovered] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const activeImage = selectedProject?.sampleImages?.[selectedImage];

  const openProjectGallery = (project) => {
    if (!project.sampleImages?.length) return;
    setSelectedProject(project);
    setSelectedImage(0);
  };

  const closeProjectGallery = () => {
    setSelectedProject(null);
    setSelectedImage(0);
  };

  useEffect(() => {
    if (!selectedProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeProjectGallery();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="projects" style={{ padding: "6rem clamp(1.5rem,5vw,4rem)", background: "#060a14", scrollMarginTop: isMobile ? 96 : 72 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel label="02 — Projects" />
        <h2 style={{ fontFamily: "'Inter', sans-serif", color: "#f1f5f9", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 700, margin: "0 0 3rem" }}>
          Things I've built
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${isMobile ? "240px" : "300px"}, 1fr))`, gap: "1.5rem" }}>
          {PROJECTS.map(project => (
            <div
              key={project.id}
              role={project.sampleImages?.length ? "button" : undefined}
              tabIndex={project.sampleImages?.length ? 0 : undefined}
              onClick={() => openProjectGallery(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openProjectGallery(project);
                }
              }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "#0d1529",
                border: `1px solid ${hovered === project.id ? project.color + "40" : "rgba(255,255,255,0.06)"}`,
                borderRadius: 14,
                overflow: "hidden",
                transition: "border-color 0.25s, transform 0.25s",
                transform: hovered === project.id ? "translateY(-4px)" : "none",
                display: "flex", flexDirection: "column",
                cursor: project.sampleImages?.length ? "pointer" : "default",
                outline: "none",
              }}
            >
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src={project.screenshot}
                  alt={`${project.title} screenshot`}
                  style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }}
                />
                <div style={{
                  position: "absolute", top: 10, right: 10,
                  background: "rgba(8,12,24,0.75)", backdropFilter: "blur(4px)",
                  border: `1px solid ${project.color}40`, borderRadius: 6,
                  padding: "4px 10px",
                  fontFamily: "'JetBrains Mono', monospace", color: project.color, fontSize: 11,
                }}>{project.type}</div>
                {project.sampleImages?.length && (
                  <div style={{
                    position: "absolute", left: 10, bottom: 10,
                    background: "rgba(8,12,24,0.8)", backdropFilter: "blur(4px)",
                    border: `1px solid ${project.color}40`, borderRadius: 6,
                    padding: "4px 10px",
                    fontFamily: "'JetBrains Mono', monospace", color: "#e2e8f0", fontSize: 11,
                  }}>View samples</div>
                )}
              </div>
              <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: 22 }}>{project.icon}</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", color: "#475569", fontSize: 11 }}>{project.period}</span>
                </div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", color: "#f1f5f9", fontSize: 17, fontWeight: 700, margin: "0 0 0.6rem" }}>
                  {project.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8", fontSize: 14, lineHeight: 1.75, flex: 1, margin: "0 0 1rem" }}>
                  {project.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1rem" }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                      background: project.color + "15", color: project.color,
                      border: `1px solid ${project.color}30`,
                      borderRadius: 5, padding: "3px 8px",
                    }}>{tag}</span>
                  ))}
                </div>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600,
                    color: project.color, textDecoration: "none",
                    border: `1px solid ${project.color}30`, borderRadius: 7,
                    padding: "7px 14px", transition: "background 0.2s",
                    background: hovered === project.id ? project.color + "12" : "transparent",
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {selectedProject && activeImage && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} sample images`}
            onClick={closeProjectGallery}
            style={{
              position: "fixed", inset: 0, zIndex: 200,
              background: "rgba(3,7,18,0.88)", backdropFilter: "blur(10px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "clamp(1rem,4vw,2rem)",
            }}
          >
            <div
              onClick={(event) => event.stopPropagation()}
              style={{
                width: "min(980px, 100%)", maxHeight: "92vh",
                display: "grid", gridTemplateColumns: "minmax(0, 1fr)",
                gap: "1rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                <div>
                  <p style={{ margin: "0 0 4px", fontFamily: "'JetBrains Mono', monospace", color: selectedProject.color, fontSize: 12, textTransform: "uppercase", letterSpacing: 1 }}>
                    Project Samples
                  </p>
                  <h3 style={{ margin: 0, fontFamily: "'Inter', sans-serif", color: "#f8fafc", fontSize: "clamp(1.2rem,3vw,1.8rem)", fontWeight: 700 }}>
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={closeProjectGallery}
                  aria-label="Close gallery"
                  style={{
                    width: 42, height: 42, borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.14)",
                    background: "rgba(15,23,42,0.9)", color: "#e2e8f0",
                    cursor: "pointer", fontSize: 24, lineHeight: 1,
                  }}
                >
                  ×
                </button>
              </div>
              <div style={{
                background: "#020617", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12, overflow: "hidden",
              }}>
                <img
                  src={activeImage}
                  alt={`${selectedProject.title} sample ${selectedImage + 1}`}
                  style={{
                    width: "100%", maxHeight: "65vh",
                    objectFit: "contain", display: "block",
                    background: "#020617",
                  }}
                />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))", gap: "0.75rem" }}>
                {selectedProject.sampleImages.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    style={{
                      padding: 0, borderRadius: 8, overflow: "hidden",
                      border: index === selectedImage ? `2px solid ${selectedProject.color}` : "1px solid rgba(255,255,255,0.12)",
                      background: "#0f172a", cursor: "pointer",
                      aspectRatio: "16 / 10",
                    }}
                  >
                    <img
                      src={image}
                      alt={`${selectedProject.title} thumbnail ${index + 1}`}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function SkillsSection({ isMobile }) {
  return (
    <section id="skills" style={{ padding: "6rem clamp(1.5rem,5vw,4rem)", background: "#080c18", scrollMarginTop: isMobile ? 96 : 72 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel label="03 — Skills" />
        <h2 style={{ fontFamily: "'Inter', sans-serif", color: "#f1f5f9", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 700, margin: "0 0 3rem" }}>
          Tech I work with
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
          {SKILLS.map(({ category, items }) => (
            <div key={category} style={{
              background: "#0d1529", border: "1px solid rgba(34,211,238,0.1)",
              borderRadius: 12, padding: "1.25rem",
            }}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#22d3ee", fontSize: 12, textTransform: "uppercase", letterSpacing: 1, margin: "0 0 0.9rem" }}>
                {category}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {items.map(item => (
                  <span key={item} style={{
                    fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500,
                    background: "rgba(255,255,255,0.05)", color: "#cbd5e1",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 6, padding: "4px 10px",
                  }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ isMobile }) {
  return (
    <section id="contact" style={{ padding: "6rem clamp(1.5rem,5vw,4rem)", background: "#060a14", scrollMarginTop: isMobile ? 96 : 72 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <SectionLabel label="04 — Contact" centered />
        <h2 style={{ fontFamily: "'Inter', sans-serif", color: "#f1f5f9", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 700, margin: "0 0 1rem" }}>
          Let's work together
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8", fontSize: 16, lineHeight: 1.75, maxWidth: 500, margin: "0 auto 2.5rem" }}>
          Open to full-time roles, freelance projects, and collaborations. Send me a message and let's build something great.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
          <a href="mailto:bathanzhyheim@gmail.com" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#22d3ee", color: "#080c18", borderRadius: 8,
            padding: isMobile ? "12px 22px" : "13px 32px", fontSize: 15, fontWeight: 700, textDecoration: "none",
            fontFamily: "'Inter', sans-serif",
          }}>
            ✉️ Email Me
          </a>
          <a href="https://github.com/ZhyKazer" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "transparent", color: "#94a3b8",
            border: "1.5px solid rgba(255,255,255,0.12)", borderRadius: 8,
            padding: isMobile ? "12px 22px" : "13px 32px", fontSize: 15, fontWeight: 600, textDecoration: "none",
            fontFamily: "'Inter', sans-serif",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          {[
            { label: "Email", value: "bathanzhyheim@gmail.com", href: "mailto:bathanzhyheim@gmail.com" },
            { label: "Phone", value: "+63 9637383903", href: "tel:+639637383903" },
            { label: "Location", value: "Los Baños, Laguna, PH", href: null },
          ].map(({ label, value, href }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#475569", fontSize: 11, textTransform: "uppercase", letterSpacing: 1, margin: "0 0 4px" }}>{label}</p>
              {href ? (
                <a href={href} style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8", fontSize: 14, textDecoration: "none" }}>{value}</a>
              ) : (
                <p style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8", fontSize: 14, margin: 0 }}>{value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#060a14", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "1.5rem clamp(1.5rem,5vw,4rem)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", color: "#334155", fontSize: 13 }}>
          <span style={{ color: "#22d3ee" }}>&lt;</span>ZTB<span style={{ color: "#22d3ee" }}>/&gt;</span>
        </span>
        <p style={{ fontFamily: "'Inter', sans-serif", color: "#334155", fontSize: 13, margin: 0 }}>
          © 2026 Zhyheim Traisser Bathan · Built with React
        </p>
      </div>
    </footer>
  );
}

function SectionLabel({ label, centered }) {
  return (
    <p style={{
      fontFamily: "'JetBrains Mono', monospace",
      color: "#22d3ee", fontSize: 12,
      textTransform: "uppercase", letterSpacing: 2,
      margin: "0 0 0.75rem",
      textAlign: centered ? "center" : "left",
    }}>{label}</p>
  );
}

export default function Portfolio({ onOpenResume }) {
  const [activeNav, setActiveNav] = useState("About");
  const { isMobile, isTablet } = useViewport();

  const scrollTo = (section) => {
    setActiveNav(section);
    const id = section === "About" ? "about" : section.toLowerCase();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const googleFonts = document.createElement("link");
    googleFonts.rel = "stylesheet";
    googleFonts.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap";
    document.head.appendChild(googleFonts);
  }, []);

  return (
    <div style={{ background: "#080c18", minHeight: "100vh", color: "#f1f5f9" }}>
      <NavBar active={activeNav} onNav={scrollTo} onResume={onOpenResume} isMobile={isMobile} />
      <HeroSection onNav={scrollTo} isMobile={isMobile} isTablet={isTablet} />
      <AboutSection isMobile={isMobile} />
      <ProjectsSection isMobile={isMobile} />
      <SkillsSection isMobile={isMobile} />
      <ContactSection isMobile={isMobile} />
      <Footer />
    </div>
  );
}
