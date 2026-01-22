import React, { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [secret, setSecret] = useState('');
  const [celebrate, setCelebrate] = useState(false);
  const [daysTogether, setDaysTogether] = useState(0);
  const audioRef = useRef(null);

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

  if (!unlocked) {
  return (
    <div className="lock-screen">
      <div className="lock-card">
        <div className="lock-heart">💖</div>

        <h2 className="lock-title">Private Space</h2>
        <p className="lock-subtitle">
          Only for Tannu 🤍
        </p>

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
      </div>
    </div>
  );
}


  return (
    <div className="app-container">

      <audio ref={audioRef} src="/music/love.mp3" loop />
      <div className="top-controls">
        <button onClick={() =>
          audioRef.current.paused
            ? audioRef.current.play()
            : audioRef.current.pause()
        }>
          🎵
        </button>
      </div>

      {/* HERO */}
      <header className="hero">
        <div className="title-wrapper">
          <h1 className="title-animated">Taysh</h1>
        </div>
        <p className="subtitle">
          Hey Tannu…  
          this isn’t a website.  
          It’s just me choosing you again.
        </p>
        <p className="description">
          Meri KuchhuPuchhu and Wifey </p>  
          <p>Kattar Man hater
        </p>
      </header>

      {/* WHY YOU'RE DIFFERENT */}
      <section className="section fancy-section">
        <h2 className="section-title">Why You're Different 💕</h2>
        <div className="card-grid">
          <div className="card">You don't try to be cute. Tu bas hai meri cutu.</div>
          <div className="card">You think of me so selflessly even if you aren't right.</div>
          <div className="card">You made love feel easy, not scary.</div>
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
          {/* YES BUTTON */}
          <button className="yes-btn" onClick={popConfetti}>
            Yes, I love you bebu 💖
          </button>

          {/* NO BUTTON (RUNS AWAY) */}
          <button
            className="no-btn"
            onMouseEnter={(e) => {
              const btn = e.target;
              const parent = btn.parentElement;

              const maxX = parent.clientWidth - btn.offsetWidth;
              const maxY = parent.clientHeight - btn.offsetHeight;

              const randomX = Math.random() * maxX;
              const randomY = Math.random() * maxY;

              btn.style.left = `${randomX}px`;
              btn.style.top = `${randomY}px`;
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
      <section className="section fancy-section">
        <h2 className="section-title">When We’re Not Together 🕊️</h2>
        <div className="card-grid">
          <div className="card">Tu mere dimag me rehti hai 24/7.</div>
          <div className="card">SaxSux thoughts never stop 😭</div>
          <div className="card">I wait just to talk to you and spill the tea.</div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline fancy-section">
        <div className="stat-number">{daysTogether}</div>
        <p>Days of choosing you</p>
      </section>

      {/* PHOTOS */}
      <section className="section bg-pink fancy-section">
        <h2 className="section-title">Us 📸</h2>
        <div className="photo-grid">
          <img src="/p1.jpeg" />
          <img src="/p2.jpeg" />
          <img src="/p3.jpeg" />
        </div>
      </section>

      {/* PROMISES */}
      <section className="section fancy-section">
        <h2 className="section-title">Small Promises 💖</h2>
        <div className="card-grid">
          <div className="card">I’ll choose you even on hard days.</div>
          <div className="card">I won’t leave when things get messy.</div>
          <div className="card">I'll buy you Flowers, dark chocolate & cold coffee — always.</div>
        </div>
      </section>

      {/* FINAL LETTER */}
      <section className="final-letter-section">
        <div className="final-letter-card">
          <h2>For You, Always 🤍</h2>
          <p className="final-letter-text typewriter">
{`Hello baby,

You are the prettiest and sweetest person I've ever met. You bring the best out of me. I was never this sweet boy, and I hated doing all these things — they felt cringe. But now I realize why they say wait until your turn, because a beautiful girl was meant to love me. And if these things make her happy, I’ll happily be the cringiest person alive on this planet, because all I care about is you.

I know that you still don’t feel secure, and you’re scared of me leaving you alone to suffer like you did once. But NO, baby — I can’t live without you. You are my habit, my obsession, my love, my dream girl, my first thought, my last thought, my everything, bebu. I’ll never leave you. Ever.

We’ll get married and be the sexiest and coolest couple in my whole khaandan. You’ll always be my flex. I’ll tell everyone that I pulled a 10/10 baddie who is emotionally available 24/7, who is always there to care for me. I don’t need anybody else because I’ve got my whole world by my side.

Bebu, I know I fail to be there when you need me, and that’s the only regret and guilt I carry. Because I want to be with you every time you need me, and for one reason or another, I fail at doing that. No excuses, nothing — I am genuinely sorry for that, bebu.

I don’t want to live without you because I don’t know how to live without you, Tannu. You are the first person I’ve ever loved, and now that I love someone, I’ll love you madly and keep loving you till the end, bebu.

I want to give you all the love and respect you deserved and never got. I’ll fulfill all your cravings for love and respect.

I don’t even know why you get hurt when I jokingly say you don’t look good. Like, girllll, come onnnn, babeeeeieee — tu sabse pyaari, sexyyy aur bahut hi hottt haiii. Teri aankhein… ughhhhhhhhhhh, I can legit look straight into your eyes and just get lost. They are so amazing. Phir teri smile — I legit melt when you smile, especially that smile when you try to control your laugh and then khulke hasti hai. I love you. And bebu, aapki waist… faaaaaakkkkk, nooooo, yaad mat dila, mujhe hidden folder kholna pad jaayega, bebu. Tu sabse pyaari aur sundar hai, meri jaan.

I want to meet you so badly, I can’t even tell you, bebu. Feel your touch, hug you, kiss you — ughhh, can’t wait. I still remember the last time we met, when you got a little low in the auto and rested your head on my shoulder. I kept kissing you. Our foreheads were touching, and then I slipped down to your lips and kissed your dry lips. Ahhhh, that was my first kiss actually, and it was so special that I still remember that moment second by second.

Never feel that I’ll leave you alone. No, bebu, aisa kabhi nahi hoga. Yes, you can overthink — kitna bhi, jitni bhi baar — I’ll reassure you every single time, standing by your side. Kyunki I know how much you’ve gone through in the past, how you feel when you’re stressed, and I’ll never leave you to suffer, bebu.

I know I’m very far from you, but I never want you to feel alone. That’s why I came up with this idea — I’ll keep changing the content, so whenever you feel alone, miss me, and I’m sleeping, you can just open this and feel happy.

Forever yours, bebu.
And you’ll always be mine, meri jaan, mera KuchhuPuchhu.

Aapka hone wala pati,
Yash.`}
          </p>
        </div>
      </section>

      <footer className="footer">
        Made only for Tannu, by Yash 💖
      </footer>

    </div>
  );
}

export default App;
