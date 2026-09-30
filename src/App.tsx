import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <Navbar />

      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  );
}

export default App;
