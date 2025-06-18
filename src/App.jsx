import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Treiner from "./Screenshot 2025-06-18 225906.png"
import './App.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function App() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const heroRef = useRef(null);
  const coursesRef = useRef(null);
  const trainerRef = useRef(null);
  const contactRef = useRef(null);

  const changeLanguage = (e) => i18n.changeLanguage(e.target.value);

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <motion.nav
        className="navbar"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="logo">MuscleMaster</div>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li onClick={() => scrollToRef(heroRef)}>{t('navHome')}</li>
            <li onClick={() => scrollToRef(coursesRef)}>{t('navCourses')}</li>
            <li onClick={() => scrollToRef(trainerRef)}>{t('navTrainer')}</li>
            <li onClick={() => scrollToRef(contactRef)}>{t('navContact')}</li>
          </ul>
          <select onChange={changeLanguage} defaultValue={i18n.language}>
            <option value="uz">UZ</option>
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </motion.nav>

      <section className="hero" ref={heroRef}>
        <div className="hero-content glass">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{t('heroTitle')}</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>{t('heroSubtitle')}</motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta"
            onClick={() => scrollToRef(contactRef)}
          >
            {t('startButton')}
          </motion.button>
        </div>
      </section>

      <section className="courses" ref={coursesRef}>
        <h2>{t('coursesTitle')}</h2>
        <div className="course-cards">
          {["course1", "course2", "course3"].map((c, i) => (
            <motion.div
              className="card glass"
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <h3>{t(c)}</h3>
              <p>{t(`${c}Desc`)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="about-trainer parallax" ref={trainerRef}>
        <div className="trainer-inner glass">
          <h2>{t('aboutTrainer')}</h2>
          <img src={Treiner} alt="Zulfiqor" className="trainer-img" />
          <p>{t('trainerDescription')}</p>
        </div>
      </section>

      <section className="contact" ref={contactRef}>
        <h2>{t('contactTitle')}</h2>
        <form>
          <input type="text" placeholder={t('name')} required />
          <input type="email" placeholder={t('email')} required />
          <textarea placeholder={t('message')} required></textarea>
          <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {t('send')}
          </motion.button>
        </form>
        <div className="social">
          <p>Instagram | Telegram | YouTube</p>
        </div>
      </section>

      <footer>
        <p>{t('footer1')}</p>
        <p>📍 {t('footer2')}</p>
        <p>📞 +998 90 123 45 67 | 📩 trener@example.com</p>
        <p>© 2025 MuscleMaster. {t('footer3')}</p>
      </footer>
    </div>
  );
}
