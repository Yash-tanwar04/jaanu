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

  /* LOCK SCREEN */
  if (!unlocked) {
    return (
      <div className="lock-screen">
        <div className="lock-card">
          <div className="lock-heart">💖</div>

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
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">

      <audio ref={audioRef} src="/music/love.mp3" loop />

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
          Meri KuchhuPuchhu and Wifey
        </p>
        <p className="description">
          Kattar Man hater
        </p>
      </header>

      {/* WHY YOU'RE DIFFERENT */}
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

      {/* FINAL LETTER */}
      <section className="final-letter-section">
        <div className="content">
          <div className="final-letter-card">
            <h2>For You, Always 🤍</h2>
            <p className="final-letter-text">
{`Hello baby,

You are the prettiest and sweetest person I've ever met. You bring the best out of me. I was never this sweet boy, and I hated doing all these things — they felt cringe. But now I realize why they say wait until your turn, because a beautiful girl was meant to love me. And if these things make her happy, I’ll happily be the cringiest person alive on this planet, because all I care about is you.

I know that you still don’t feel secure, and you’re scared of me leaving you alone to suffer like you did once. But NO, baby — I can’t live without you. You are my habit, my obsession, my love, my dream girl, my first thought, my last thought, my everything, bebu. I’ll never leave you. Ever.

We’ll get married and be the sexiest and coolest couple in my whole khaandan. You’ll always be my flex. I’ll tell everyone that I pulled a 10/10 baddie who is emotionally available 24/7, who is always there to care for me. I don’t need anybody else because I’ve got my whole world by my side.

Bebu, I know I fail to be there when you need me, and that’s the only regret and guilt I carry. Because I want to be with you every time you need me, and for one reason or another, I fail at doing that. No excuses, nothing — I am genuinely sorry for that, bebu.

I don’t want to live without you because I don’t know how to live without you, Tannu. You are the first person I’ve ever loved, and now that I love someone, I’ll love you madly and keep loving you till the end, bebu.

I want to give you all the love and respect you deserved and never got. I’ll fulfill all your cravings of love and respect.

I don’t even know why you get hurt when I jokingly say you don't look good. Like, girllll, come onnnn, babeeeeieee — tu sabse pyaari, sexyyy orrr bhtt hi hottt haiii, teri aakhein ughhhhhhhhhhhhhhh i can legit see dead into your eyes and just get lost they are so amazing fir teri smile i legit melt when you smile like teri vo vali smile when you try to control your laugh and fir tu khulke hasti h i lovee you and bebu aapki waist faaaaaakkkkkkkkk nooooo yaad mt dila merko mujhe hidden folder kholna pad jaega bebu. tu hai sabse pyaari or sundar meri jaan.

I want to meet you so badly i can't tell u bebu feel that touch of yours hug you kiss you ughhh can't wait bebu i still remember when last time we met tu thodi low ho gyi thi auto me and tune apna sarr mere shoulder p rakh liya tha then i kept kissing you mera tera forhead touch hora tha and then i slipped down to your lips and kissed your dry lips ahhhh that was my first kiss actually and it was so special that i still remember that moment second by second.

Never feel that i'll leave you alone NO bebu aisa kabhi ni hoga yes you can overthink kitna bhi kitni bhi baar i'll reassure you everytime standing by your side, kuki ik how much you have gone through in past and how you feel when in stress and will never leave you to suffer bebu.

I know I am very far from you but i never wanna feel you alone so i came up with this idea i'll keep changing the content so when ever you feel alone and when you miss me and i'm sleeping you can just open this and feel happy.

forever yours bebu and you'll always be mine meri jaan mera kuchhuPuchhu.

aapka hone vala pati Yash.`}
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        Made only for Tannu, by Yash 💖
      </footer>

    </div>
  );
}

export default App;
