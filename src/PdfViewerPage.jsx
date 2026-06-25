import { useEffect } from "react";

const PDF_TITLE = "Resume 2026";

function PdfIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 15h6" />
      <path d="M9 18h3" />
    </svg>
  );
}

function ArrowLeftIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

export default function PdfViewerPage({ pdfUrl, onBack }) {
  useEffect(() => {
    const googleFonts = document.createElement("link");
    googleFonts.rel = "stylesheet";
    googleFonts.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap";
    document.head.appendChild(googleFonts);
  }, []);

  return (
    <main style={{
      minHeight: "100vh",
      background: "#080c18",
      color: "#f1f5f9",
      padding: "clamp(1rem,4vw,2rem)",
      fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gap: "1.25rem" }}>
        <header style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
          padding: "0.25rem 0",
        }}>
          <button
            type="button"
            onClick={onBack}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "transparent",
              color: "#94a3b8",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: 8,
              padding: "10px 14px",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <ArrowLeftIcon />
            Portfolio
          </button>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#22d3ee",
                textDecoration: "none",
                border: "1px solid rgba(34,211,238,0.35)",
                borderRadius: 8,
                padding: "10px 14px",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              <PdfIcon />
              Open PDF
            </a>
            <a
              href={pdfUrl}
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#22d3ee",
                color: "#080c18",
                textDecoration: "none",
                borderRadius: 8,
                padding: "10px 14px",
                fontSize: 14,
                fontWeight: 800,
              }}
            >
              Download
            </a>
          </div>
        </header>

        <section style={{
          display: "grid",
          gap: "0.75rem",
        }}>
          <div>
            <p style={{
              margin: "0 0 0.35rem",
              fontFamily: "'JetBrains Mono', monospace",
              color: "#22d3ee",
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: 2,
            }}>
              PDF Viewer
            </p>
            <h1 style={{
              margin: 0,
              color: "#f8fafc",
              fontSize: "clamp(1.8rem,4vw,3rem)",
              lineHeight: 1.1,
              fontWeight: 800,
            }}>
              {PDF_TITLE}
            </h1>
          </div>

          <div style={{
            overflow: "hidden",
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "#020617",
            boxShadow: "0 24px 80px rgba(0,0,0,0.28)",
          }}>
            <object
              data={`${pdfUrl}#toolbar=1&navpanes=0`}
              type="application/pdf"
              title={PDF_TITLE}
              style={{
                display: "block",
                width: "100%",
                height: "min(78vh, 920px)",
                minHeight: 560,
                border: 0,
              }}
            >
              <div style={{
                minHeight: 420,
                display: "grid",
                placeItems: "center",
                padding: "2rem",
                textAlign: "center",
              }}>
                <p style={{ color: "#94a3b8", lineHeight: 1.7, margin: 0 }}>
                  Your browser cannot display the embedded PDF. Use the Open PDF or Download button above.
                </p>
              </div>
            </object>
          </div>
        </section>
      </div>
    </main>
  );
}
