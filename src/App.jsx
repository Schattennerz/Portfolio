import { useEffect, useState } from 'react'
import './App.css'

function App() {
    // Theme Toggle (persistent)
    const [dark, setDark] = useState(() => {
        const saved = localStorage.getItem('theme')
        if (saved === 'dark') return true
        if (saved === 'light') return false
        return false // Standard: light
    })

        useEffect(() => {
            const root = document.documentElement
            if (dark) {
                root.setAttribute('data-theme', 'dark')
                localStorage.setItem('theme', 'dark')
            } else {
                root.setAttribute('data-theme', 'light')
                localStorage.setItem('theme', 'light')
            }
        }, [dark])

  return (
        <>
            <div className="header">
                <h1 className="brand">Tobias Dalisda</h1>
                <nav className="main-nav" id="mainNav">
                    <ul>
                        <li><a href="#about">Über mich</a></li>
                        <li><a href="#projects">Projekte</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Kontakt</a></li>
                    </ul>
                </nav>
                <div className="header-actions">
                    <button
                        id="themeToggle"
                        aria-label="Theme wechseln"
                        onClick={() => setDark((d) => !d)}
                        title={dark ? 'Zu Light wechseln' : 'Zu Dark wechseln'}
                    >
                        {dark ? '☀️' : '🌙'}
                    </button>
                </div>
            </div>

            <section className="hero">
                <div className="container hero-inner">
                    <h1>
                        Ich baue digitale Produkte
                        <br />
                        <span className="accent">Web- & Softwarelösungen</span>
                    </h1>
                    <p className="lead">
                        Ich bin Full‑Stack Entwickler mit Fokus auf moderne Webtechnologien, sauberes Design und skalierbare Architekturen.
                    </p>
                    <p>
                        <a className="btn primary" href="#projects">Meine Projekte ansehen</a>
                        <a className="btn ghost" href="#contact" style={{ marginLeft: 12 }}>Kontakt</a>
                    </p>
                </div>
            </section>

            <section id="about" className="container about">
                <h2>Über mich</h2>
                <p>
                    Ich entwickle seit einem Jahr Web‑ und Softwarelösungen — von Single Page Apps bis zu Backend‑Services. Ich arbeite bevorzugt mit React, Node.js, und modernen CI/CD‑Pipelines.
                </p>
                <p>
                    Mein Fokus liegt auf: performanter Frontend‑Entwicklung, robusten APIs und guter Entwicklererfahrung (tests, linting, CI).
                </p>
            </section>

            <section id="projects" className="container projects">
                <h2>Ausgewählte Projekte</h2>
                <div className="grid cards">
                    <article className="card">
                        <h3>Warehouse Manager</h3>
                        <p>Vollständiges Inventory‑Management (React, Vite, Express). UI, Kontext, und REST API.</p>
                        <p><a className="link" href="Lager/index.html">Zur Demo</a></p>
                    </article>

                    <article className="card">
                        <h3>Portfolio Web</h3>
                        <p>Dieses Portfolio als statische Seite; Vite‑basiertes Setup mit optimiertem Build.</p>
                        <p><a className="link" href="Portfolio_web/">Repo</a></p>
                    </article>

                    <article className="card">
                        <h3>Weitere Projekte</h3>
                        <p>Microservices, CLI‑Tools und Automatisierungen — Tests und Deployment mit GitHub Actions.</p>
                        <p><span className="muted">Mehr auf Anfrage</span></p>
                    </article>
                </div>
            </section>

            <section id="skills" className="container skills">
                <h2>Skills</h2>
                <ul className="skill-list">
                    <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React, Vite</li>
                    <li><strong>Backend:</strong> Node.js, Express, REST, GraphQL</li>
                    <li><strong>Tooling:</strong> Git, CI/CD, Testing (Jest, Playwright)</li>
                </ul>
            </section>

            <section id="contact" className="container contact">
                <h2>Kontakt</h2>
                <p>Interessiert an Zusammenarbeit? Schreib mir eine Mail:</p>
                <p><a className="btn primary" href="mailto:tobiasdalisda@gmail.com">tobiasdalisda@gmail.com</a></p>
            </section>

            <div className="container">
                <p>© <span id="year"></span> Tobias Dalisda — Web & Software Entwickler</p>
            </div>
        </>
  )
}

export default App
