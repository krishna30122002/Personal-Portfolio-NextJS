import About from "./components/About";
import Email from "./components/Email";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects";

export default function Home() {
    return (
        <main className="container flex flex-col bg-[#210535] min-h-screen">
            <Navbar />
            <div className="container mt-24 mx-auto px-12 py-4">
                <Hero />
                <About />
                <Projects />
                <Email />
            </div>
            <Footer />
        </main>
    );
}
