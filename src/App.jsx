import { useEffect, useState, useRef } from 'react'
import svg1 from './assets/0001.svg'
import svg2 from './assets/0002.svg'
import './App.css'

function App() {
    
    const [dark, setDark] = useState(() => {
        const saved = localStorage.getItem('theme')
        if (saved === 'dark') return true
        if (saved === 'light') return false
        return false
    })

    const [showResume, setShowResume] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [modalSrc, setModalSrc] = useState(null)
    const [modalZoom, setModalZoom] = useState(1)
    const [pan, setPan] = useState({ x: 0, y: 0 })
    const [isPanning, setIsPanning] = useState(false)
    const panRef = useRef({ startX: 0, startY: 0, origX: 0, origY: 0 })

    function openModal(src) {
        // reset zoom & pan when opening so the full image is shown
        setModalZoom(1)
        setPan({ x: 0, y: 0 })
        setModalSrc(src)
        setModalOpen(true)
    }

    function closeModal() {
        setModalOpen(false)
        setModalSrc(null)
        setModalZoom(1)
        setPan({ x: 0, y: 0 })
    }

    useEffect(() => {
        function onKey(e) {
            if (e.key === 'Escape' && modalOpen) closeModal()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [modalOpen])

    function toggleZoom(src) {
        // if not zoomed, zoom in; if zoomed, reset
        if (modalZoom === 1) {
            setModalZoom(2.4)
        } else {
            setModalZoom(1)
            setPan({ x: 0, y: 0 })
        }
    }

    function onPanStart(e) {
        if (modalZoom === 1) return
        e.preventDefault && e.preventDefault()
        setIsPanning(true)
        const pageX = e.touches ? e.touches[0].pageX : e.pageX
        const pageY = e.touches ? e.touches[0].pageY : e.pageY
        panRef.current.startX = pageX
        panRef.current.startY = pageY
        panRef.current.origX = pan.x
        panRef.current.origY = pan.y
    }

    function onPanMove(e) {
        if (!isPanning) return
        const pageX = e.touches ? e.touches[0].pageX : e.pageX
        const pageY = e.touches ? e.touches[0].pageY : e.pageY
        const dx = pageX - panRef.current.startX
        const dy = pageY - panRef.current.startY
        setPan({ x: panRef.current.origX + dx, y: panRef.current.origY + dy })
    }

    function onPanEnd() {
        setIsPanning(false)
    }

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
                    Da man mit dem Lernen nie fertig ist, erweitere ich kontinuierlich mein Wissen in Bereichen wie Datenbanken, Cloud‑Services, DevOps und KI‑Technologien, um flexibel zu bleiben.
                </p>
                <p>
                    Ein Raspberry‑Pi diente dabei als praktische Lernplattform zur Vertiefung von Server‑Technologien, Deployment‑Workflows und kleinerer Cloud‑Setups.
                </p>

            </section>
            <section>
                <div className="container">
                    <div className="button-group">
                        <a className="btn primary demo-scale" href="https://github.com/Schattennerz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            🐙 GitHub
                        </a>
                        <a
                            className="btn demo-gradient"
                            href="#"
                            onClick={(e) => { e.preventDefault(); setShowResume((s) => !s) }}
                            aria-expanded={showResume}
                            aria-label="Lebenslauf anzeigen"
                        >
                            📄 Lebenslauf
                        </a>
                        <a className="btn ghost demo-pulse" href="https://www.linkedin.com/in/tobias-dalisda-b0abb5322" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            🔗 LinkedIn
                        </a>
                        <a className="btn demo-rotate" href="#projects" aria-label="Projekte">
                            <span className="icon">🔁</span>
                            Projekte
                        </a>
                        <a className="btn ghost demo-ripple" href="#contact" aria-label="Kontakt">
                            ✉️ Kontakt
                        </a>
                    </div>
                    {showResume && (
                        <div className="resume-panel" role="region" aria-label="Lebenslauf Vorschau">
                            <div className="resume-images">
                                <img
                                    src={svg1}
                                    alt="Lebenslauf Seite 1"
                                    className="resume-img first"
                                    tabIndex={0}
                                    role="button"
                                    onClick={() => openModal(svg1)}
                                    onKeyDown={(e) => { if (e.key === 'Enter') openModal(svg1) }}
                                />
                                <img
                                    src={svg2}
                                    alt="Lebenslauf Seite 2"
                                    className="resume-img second"
                                    tabIndex={0}
                                    role="button"
                                    onClick={() => openModal(svg2)}
                                    onKeyDown={(e) => { if (e.key === 'Enter') openModal(svg2) }}
                                />
                            </div>
                        </div>
                    )}
                    {modalOpen && (
                        <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <button className="modal-close" aria-label="Schließen" onClick={closeModal}>✕</button>
                                    <div
                                        className={`modal-img-wrapper ${modalZoom > 1 ? 'zoomed' : ''} ${isPanning ? 'grabbing' : ''}`}
                                        onMouseDown={onPanStart}
                                        onMouseMove={onPanMove}
                                        onMouseUp={onPanEnd}
                                        onMouseLeave={onPanEnd}
                                        onTouchStart={onPanStart}
                                        onTouchMove={onPanMove}
                                        onTouchEnd={onPanEnd}
                                        onDoubleClick={() => toggleZoom(modalSrc)}
                                        onKeyDown={(e) => { if (e.key === 'Enter') toggleZoom(modalSrc) }}
                                        tabIndex={0}
                                        aria-label="Vollbild Lebenslauf, doppelklick zum zoomen"
                                    >
                                        <img
                                            src={modalSrc}
                                            alt="Lebenslauf (gross)"
                                            className="modal-img"
                                            style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${modalZoom})` }}
                                            draggable={false}
                                        />
                                    </div>
                                    <div className="modal-hint">Doppelklick zum Zoomen · Ziehen zum Verschieben · Escape zum Schließen</div>
                            </div>
                        </div>
                    )}
                </div>
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
