import { useEffect, useState } from "react";
import Portfolio from "./portfolio";
import PdfViewerPage from "./PdfViewerPage";

const RESUME_PATH = "/resume";
const RESUME_PDF_URL = "/resume/Resume_2026.pdf";

function App() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (nextPath) => {
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, "", nextPath);
    }

    setPath(nextPath);
    window.scrollTo(0, 0);
  };

  if (path === RESUME_PATH) {
    return (
      <PdfViewerPage
        pdfUrl={RESUME_PDF_URL}
        onBack={() => navigate("/")}
      />
    );
  }

  return <Portfolio onOpenResume={() => navigate(RESUME_PATH)} />;
}

export default App;
