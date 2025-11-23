import { useEffect, useState } from 'react'
import './App.css'

function App() {
    
    const [dark, setDark] = useState(() => {
        const saved = localStorage.getItem('theme')
        if (saved === 'dark') return true
        if (saved === 'light') return false
        return false
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

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            try {
                window.history.scrollRestoration = 'manual'
            } catch (e) {
                
            }
        }
        window.scrollTo(0, 0)
    }, [])
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
                        Digitale Produkte gestalten
                        <br />
                        <span className="accent">Web- & Softwarelösungen</span>
                    </h1>
                    <p className="lead">
                        Als Full‑Stack‑Entwickler liegt mein Fokus auf modernen Webtechnologien, sauberem Design und skalierbaren Architekturen.
                    </p>
                    <p>
                        <a className="btn primary" href="#projects">Meine Projekte ansehen</a>
                        <a className="btn ghost" href="#contact" style={{ marginLeft: 12 }}>Kontakt</a>
                    </p>
                </div>
            </section>

            <section id="about" className="container about">
                <h2>Über mich</h2>
                <br />
                <p>
                    Seit einem Jahr entwickle ich Web‑ und Softwarelösungen — von Single Page Apps bis zu Backend‑Services. Bevorzugt arbeite ich mit React und Node.js.
                </p>
                <p>
                    Stetiges Lernen neuer Technologien gehört zu meinem Ansatz; mein Ziel ist es, qualitativ hochwertige Software zu liefern, die sowohl den Nutzer als auch den Entwickler im Blick hat. Zudem lege ich großen Wert auf sauberen, wartbaren Code und eine durchdachte Architektur. 
                </p>
                <p>
                    Leider fehlen mir aktuell noch umfangreiche Berufserfahrungen, aber ich bin hochmotiviert, mein Wissen in realen Projekten anzuwenden und weiter auszubauen.    
                </p>
                <p>
                    Neue Herausforderungen und spannende Projekte reizen mich besonders, da ich so mein Können unter Beweis stellen und weiterentwickeln kann.
                </p>
                <p>
                    Auf die Zusammenarbeit an innovativen Lösungen freue ich mich und bringe meine Fähigkeiten gern in ein professionelles Umfeld ein.
                </p>
                <p>
                    Da man mit dem Lernen nie fertig ist, erweitere ich kontinuierlich mein Wissen in Bereichen wie Datenbanken, Cloud‑Services, DevOps und KI-Technologien, um flexibel zu bleiben.
                </p>

            </section>

            <section id="projects" className="container projects">
                <h2>Ausgewählte Projekte</h2>
                <div className="grid cards">
                    <article className="card">
                        <h3>Warehouse Manager</h3>
                        <p>Vollständiges Inventory‑Management (React, Vite, Express). UI, Kontext, und REST API.</p>
                        <p><a className="link" href="https://github.com/Schattennerz/Lager" target='_blank'>Zur Demo</a></p>
                    </article>

                    <article className="card">
                        <h3>Portfolio Web</h3>
                        <p>Dieses Portfolio als statische Seite; Vite‑basiertes Setup mit optimiertem Build.</p>
                        <p><a className="link" href="https://github.com/Schattennerz/Portfolio" target='_blank'>Zum Github</a></p>
                    </article>

                    <article className="card">
                        <h3>Des weiteren</h3>
                        <p>Werden weitere lerneinheiten wie zb SQL, Python und weitere tools nacheinander gelernt um flexibel zu bleiben.</p>
                        <p><span className="muted">Mehr auf Anfrage</span></p>
                    </article>
                </div>
            </section>

            <section id="skills" className="container skills">
                <h2>Skills</h2>
                <ul className="skill-list">
                    <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React, Vite, Tailwind CSS</li>
                    <li><strong>Backend:</strong> Node.js, MongoDB, MySQL(eigenständig)</li>
                    <li><strong>Tooling:</strong> Git, Github, VS-Code </li>
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
