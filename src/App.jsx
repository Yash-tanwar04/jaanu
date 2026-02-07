import React, { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

function App() {
  const [page, setPage] = useState('home'); // home | rose
  const [unlocked, setUnlocked] = useState(false);
  const [secret, setSecret] = useState('');
  const [heartCount, setHeartCount] = useState(0);

  /* ================= ROSE PAGE ================= */
  if (page === 'rose') {
    return (
      <div className="rose-page">
        <div className="rose-petals"></div>

        <button className="rose-back" onClick={() => setPage('home')}>
          ← Back
        </button>

        <div className="rose-center">
          <div className="big-rose">🌹</div>

          <div className="rose-letter">
            <p>
              Happy Rose Day, meri jaan.  
              Even though I can’t hand you a real rose today, I want you to know
              that every rose in this world reminds me of you.  
              Soft, beautiful, delicate, and powerful — just like my Tannu.  
              Distance can never take away what I feel for you.  
              This rose is my promise, my love, and my way of holding your hand
              even when I’m far away.  
              I choose you. Every single day. 🌹
            </p>
          </div>
        </div>
      </div>
    );
  }

  /* ================= LOCK SCREEN ================= */
  if (!unlocked) {
    return (
      <div className="lock-screen">
        <div className="lock-card glass">
          <div
            className="lock-heart"
            onClick={() => setHeartCount(heartCount + 1)}
          >
            💖
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

  /* ================= MAIN SITE ================= */
  return (
    <div className="app-container">
      <div className="bg-blobs"></div>

      <header className="hero">
        <div className="title-wrapper glass">
          <h1 className="title-animated">Taysh</h1>
        </div>

        {/* 🌹 ROSE ENTRY */}
        <div
          className="rose-entry"
          onClick={() => {
            confetti({ particleCount: 120, spread: 80 });
            setPage('rose');
          }}
        >
          🌹
          <span>Tap the rose</span>
        </div>

        <p className="subtitle">
          Hey Tannu…<br />
          <span>This isn’t just a website.</span><br />
          <strong>It’s me choosing you again.</strong>
        </p>

        <p className="description">Made only for Tannu, by Yash 💖</p>
      </header>

      {/* everything else of your site stays EXACTLY same */}
    </div>
  );
}

export default App;
