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
      heart.className = 'heart';
      heart.innerText = '💖';
      heart.style.left = Math.random() * 100 + 'vw';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }, 900);
    return () => clearInterval(interval);
  }, [unlocked]);

  const popConfetti = () => {
    confetti({ particleCount: 220, spread: 100 });
    setCelebrate(true);
  };

  /* ================= LOCK SCREEN ================= */
  if (!unlocked) {
    return (
      <div className="lock-screen">
        <div className="lock-card">
          <div
            className="lock-heart"
            onClick={() => setHeartCount((c) => c + 1)}
          >
            💖
          </div>

          <h2 className="lock-title">Private Space</h2>
          <p className="lock-subtitle">Only for Tannu 🤍</p>

          <input
            className="lock-input"
            placeholder="Type our secret…"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
          />

          <button
            className="lock-btn"
            onClick={() =>
              secret.trim().toLowerCase() === 'phle boobies dikhao' &&
              setUnlocked(true)
            }
          >
            Unlock 💫
          </button>

          <p className="lock-hint">
            Hint: Something I always ask for 😉
          </p>

          {heartCount >= 5 && (
            <p className="secret-reveal">
              You found it… of course you did 🤍
            </p>
          )}
        </div>
      </div>
    );
  }
  if (secondUnlocked) {
  return (
    <div className="letters-page">
      <h1 className="letters-title">Letters Only For You 🤍</h1>

      <div className="letters-grid">
        {[
          {
            id: 1,
            title: 'Read this when you miss me',
            preview: 'Close your eyes for a second…',
            full: `Close your eyes for a second.
I want you to imagine me sitting next to you,
holding your hand,
telling you that everything is okay
and I’m not going anywhere.`
          },
          {
            id: 2,
            title: 'Read this when you feel insecure',
            preview: 'If you ever doubt yourself…',
            full: `If you ever doubt yourself,
remember this:
you are loved deeply,
chosen intentionally,
and wanted endlessly —
by me.`
          },
          {
            id: 3,
            title: 'Read this at 3 AM',
            preview: 'If it’s late and your mind is loud…',
            full: `If it’s late and your thoughts won’t stop,
know that somewhere,
I’m thinking of you too,
even if I’m asleep.`
          }
        ].map((letter) => (
          <div
            key={letter.id}
            className="letter-card"
            onClick={() => setOpenLetter(letter)}
          >
            <h3>{letter.title}</h3>
            <p>{letter.preview}</p>
          </div>
        ))}
      </div>

      {openLetter && (
        <div className="letter-modal" onClick={() => setOpenLetter(null)}>
          <div className="letter-paper" onClick={(e) => e.stopPropagation()}>
            <h2>{openLetter.title}</h2>
            <p>{openLetter.full}</p>
          </div>
        </div>
      )}
    </div>
  );
}


  /* ================= MAIN SITE ================= */
  return (
    <div className="app-container">
      <audio ref={audioRef} src="/music/love.mp3" loop />

      {/* HERO */}
      <header className="hero">
        <div className="title-wrapper">
          <h1 className="title-animated">Taysh</h1>
        </div>

        <p className="subtitle">
          Hey Tannu…<br />
          this isn’t a website.<br />
          It’s just me choosing you again.
        </p>

        <p className="description">Meri KuchhuPuchhu and Wifey</p>
        <p className="description">Kattar Man hater</p>
      </header>

      {/* WHY DIFFERENT */}
      <section className="section">
        <div className="content">
          <h2 className="section-title">Why You're Different 💕</h2>
          <div className="card-grid">
            <div className="card">You don't try to be cute. Tu bas hai meri cutu.</div>
            <div className="card">You think of me so selflessly even if you aren't right.</div>
            <div className="card">You made love feel easy, not scary.</div>
          </div>
        </div>
      </section>

      {/* LOVE GAME */}
      <section className="section bg-pink">
        <div className="content">
          <h2 className="section-title">Important Question 👀</h2>

          {!celebrate ? (
            <div className="love-game">
              <p>Do you love me?</p>

              <div className="love-buttons">
                <button className="yes-btn" onClick={popConfetti}>
                  Yes, I love you bebu 💖
                </button>

                <button
                  className="no-btn"
                  onMouseEnter={(e) => {
                    const btn = e.target;
                    const parent = btn.parentElement;
                    const maxX = parent.clientWidth - btn.offsetWidth;
                    const maxY = parent.clientHeight - btn.offsetHeight;
                    btn.style.left = Math.random() * maxX + 'px';
                    btn.style.top = Math.random() * maxY + 'px';
                  }}
                >
                  No 😒
                </button>
              </div>
            </div>
          ) : (
            <div className="celebrate-box">
              <h3>YAYYYYY 💕</h3>
              <p>You were always mine and will be 🤍</p>
            </div>
          )}
        </div>
      </section>

      {/* WHEN NOT TOGETHER */}
      <section className="section">
        <div className="content">
          <h2 className="section-title">When We’re Not Together 🕊️</h2>
          <div className="card-grid">
            <div className="card">Tu mere dimag me rehti hai 24/7.</div>
            <div className="card">SaxSux thoughts never stop 😭</div>
            <div className="card">I wait just to talk to you and spill the tea.</div>
          </div>
        </div>
      </section>

      {/* FAKE CHAT */}
      <section className="section">
        <div className="content">
          <h2 className="section-title">Messages I Never Stop Typing 💬</h2>

          <div className="chat-box">
            <div className="chat-bubble">Yash: I miss you 🥺</div>
            <div className="chat-bubble delay1">Yash: Are you smiling right now?</div>
            <div className="chat-bubble delay2">Yash: Okay good… because I am 🤍</div>
            <div className="chat-bubble delay3">Yash: Come here na 😌</div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline">
        <div className="content">
          <div className="stat-number">{daysTogether}</div>
          <p>Days of choosing you</p>
        </div>
      </section>

      {/* PHOTOS */}
      <section className="section bg-pink">
        <div className="content">
          <h2 className="section-title">Us 📸</h2>
          <div className="photo-grid">
            <img src="/p1.jpeg" alt="us" />
            <img src="/p2.jpeg" alt="us" />
            <img src="/p3.jpeg" alt="us" />
          </div>
        </div>
      </section>

      {/* PROMISES */}
      <section className="section">
        <div className="content">
          <h2 className="section-title">Small Promises 💖</h2>
          <div className="card-grid">
            <div className="card">I’ll choose you even on hard days.</div>
            <div className="card">I won’t leave when things get messy.</div>
            <div className="card">I'll buy you Flowers, dark chocolate & cold coffee — always.</div>
          </div>
        </div>
      </section>
      {/* SECOND SECRET */}
<section className="section bg-pink">
  <div className="content">
    <h2 className="section-title">One More Secret 👀</h2>

    {!secondUnlocked ? (
      <div className="second-lock">
        <p>This one is even more private.</p>

        <input
          className="lock-input"
          placeholder="Enter the secret…"
          value={secondSecret}
          onChange={(e) => setSecondSecret(e.target.value)}
        />

        <button
          className="lock-btn"
          onClick={() =>
            secondSecret.trim().toLowerCase() === 'meri future biwi' &&
            setSecondUnlocked(true)
          }
        >
          Unlock 💌
        </button>
      </div>
    ) : (
      <p className="unlocked-text">
        Okay… now come here 🤍
      </p>
    )}
  </div>
</section>


      <footer className="footer">
        Made only for Tannu, by Yash 💖
      </footer>
    </div>
  );
}

export default App;
