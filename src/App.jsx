import React, { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [secret, setSecret] = useState('');
  const [celebrate, setCelebrate] = useState(false);
  const [daysTogether, setDaysTogether] = useState(0);
  const [heartCount, setHeartCount] = useState(0);
  const audioRef = useRef(null);
  const [secondUnlocked, setSecondUnlocked] = useState(false);
  const [secondSecret, setSecondSecret] = useState('');
  const [openLetter, setOpenLetter] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [responseType, setResponseType] = useState(null);
  const [giftOpen, setGiftOpen] = useState(false);
  const giftAudioRef = useRef(null);

  /* 🌹 ADD ONLY */
  const [showRose, setShowRose] = useState(false);

  useEffect(() => {
    const startDate = new Date('2025-09-20');
    const today = new Date();
    const diff = Math.abs(today - startDate);
    setDaysTogether(Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }, []);

  useEffect(() => {
    if (!unlocked) return;
    const interval = setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.innerText = ['💖', '💗', '💓', '✨'][Math.floor(Math.random() * 4)];
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }, 700);
    return () => clearInterval(interval);
  }, [unlocked]);

  const popConfetti = () => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    setCelebrate(true);
  };

  /* ================= 🌹 ROSE DAY PAGE (ADD ONLY) ================= */
  if (showRose) {
    return (
      <div className="rose-page">
        <div className="rose-petals"></div>

        <button className="rose-back" onClick={() => setShowRose(false)}>
          ← Back
        </button>

        <div className="rose-content">
          <div className="big-rose">🌹</div>

          <h1 className="rose-title">Happy Rose Day, Tannu</h1>

          <p className="rose-letter">
{`PASTE YOUR ROSE DAY MESSAGE HERE.

Press Enter for new lines.
No tags needed.
This text auto-formats.`}
          </p>
        </div>
      </div>
    );
  }

  /* ================= LOCK SCREEN ================= */
  if (!unlocked) {
    return (
      <div className="lock-screen">
        <div className="bg-blobs"></div>
        <div className="lock-card glass">
          <div
            className="lock-heart-container"
            onClick={() => {
              const c = heartCount + 1;
              setHeartCount(c);
              if (c === 5) {
                setShowVideo(true);
                confetti({ particleCount: 100 });
              }
            }}
          >
            <div className={`lock-heart ${heartCount > 0 ? 'pop' : ''}`}>💖</div>
            {heartCount > 0 && <span className="tap-count">{heartCount}</span>}
          </div>

          <h2 className="lock-title">Private Space</h2>
          <p className="lock-subtitle">Strictly for Tannu 🤍</p>

          <input
            className="lock-input"
            type="password"
            placeholder="Type our secret…"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
          />

          <button
            className="lock-btn"
            onClick={() =>
              secret.trim().toLowerCase() === 'boobies' && setUnlocked(true)
            }
          >
            Unlock 💫
          </button>

          <p className="lock-hint">Hint: Something I always ask for 😉</p>
        </div>
      </div>
    );
  }

  /* ================= MAIN SITE CONTENT ================= */
  return (
    <div className="app-container">
      <div className="bg-blobs"></div>

      <header className="hero">
        <div className="title-wrapper glass">
          <h1 className="title-animated">Taysh</h1>

          {/* 🌹 ADD ONLY */}
          <div className="rose-trigger" onClick={() => setShowRose(true)}>
            🌹
            <span>Tap the rose</span>
          </div>
        </div>

        <p className="subtitle">
          Hey Tannu…<br />
          <span>This isn’t just a website.</span><br />
          <strong>It’s me choosing you again.</strong>
        </p>
      </header>

      {/* EVERYTHING BELOW IS 100% YOUR EXISTING CODE */}
      {/* NOTHING REMOVED / CHANGED */}
      {/* …rest of your file continues exactly as-is… */}

      <footer className="footer">
        Made only for Tannu, by Yash 💖
      </footer>
    </div>
  );
}

export default App;
