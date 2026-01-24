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

  // Calculate days since the start date
  useEffect(() => {
    const startDate = new Date('2025-09-20');
    const today = new Date();
    const diff = Math.abs(today - startDate);
    setDaysTogether(Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }, []);

  // Floating heart animation effect
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

  /* ================= LOCK SCREEN ================= */
  if (!unlocked) {
    return (
      <div className="lock-screen">
        <div className="bg-blobs"></div>
        
        {/* Secret Video Modal - Easter Egg */}
        {showVideo && (
          <div className="video-overlay" onClick={() => setShowVideo(false)}>
            <div className="video-container glass" onClick={(e) => e.stopPropagation()}>
              <button className="close-video" onClick={() => setShowVideo(false)}>×</button>
              <video controls autoPlay className="secret-video">
                <source src="/v1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="video-caption">A little something extra for you... 🤍</p>
            </div>
          </div>
        )}

        <div className="lock-card glass">
          <div 
            className="lock-heart-container" 
            onClick={() => {
              const newCount = heartCount + 1;
              setHeartCount(newCount);
              if (newCount === 5) {
                setShowVideo(true);
                confetti({ particleCount: 100, spread: 70 });
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
            placeholder="Our little secret..."
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
          />

          <button
            className="lock-btn highlight"
            onClick={() => secret.trim().toLowerCase() === 'phle boobies dikhao' && setUnlocked(true)}
          >
            Unlock My Heart 💫
          </button>
          <p className="lock-hint">Hint: Something I always ask for 😉</p>
          {heartCount >= 5 && (
            <p className="secret-reveal clickable" onClick={() => setShowVideo(true)}>
              Click here to re-watch your surprise 🎥
            </p>
          )}
        </div>
      </div>
    );
  }

  /* ================= LETTERS PAGE ================= */
  if (secondUnlocked) {
    return (
      <div className="letters-page">
        <div className="bg-blobs"></div>
        <button className="back-btn" onClick={() => setSecondUnlocked(false)}>← Back to Memories</button>
        <h1 className="letters-title">Secret Letters For You 🤍</h1>

        <div className="letters-grid">
          {[
            {
              id: 1,
              title: 'Forever Yours, In Every Lifetime',
              preview: 'Meri Jaaann, mera bebuuuu…',
              full: `Meri Jaaann, mera bebuuuu, You are the prettiest and sweetest person Ive ever met. You bring the best out of me... (Include full text here)`
            },
            {
              id: 2,
              title: 'You are my Safe Place',
              preview: 'I will stay and we are forever bebu',
              full: `You can feel secure\nBebu, I know you have that insecurity... (Include full text here)`
            }
          ].map((letter) => (
            <div 
              key={letter.id} 
              className="letter-card glass fade-up" 
              onClick={() => {
                setOpenLetter(letter);
                audioRef.current?.play();
              }}
            >
              <div className="envelope-icon">✉️</div>
              <h3>{letter.title}</h3>
              <p>{letter.preview}</p>
              <span className="read-btn">Read Deeply...</span>
            </div>
          ))}
        </div>

        {openLetter && (
          <div className="letter-modal fade-in" onClick={() => setOpenLetter(null)}>
            <div className="letter-paper slide-up" onClick={(e) => e.stopPropagation()}>
              <button className="close-modal close-video" onClick={() => setOpenLetter(null)}>×</button>
              <h2>{openLetter.title}</h2>
              <div className="letter-divider"></div>
              <p>{openLetter.full}</p>
              <div className="letter-footer">Forever Yours, Yash</div>
            </div>
          </div>
        )}
      </div>
    );
  }

  /* ================= MAIN SITE ================= */
  return (
    <div className="app-container">
      <div className="bg-blobs"></div>
      <audio ref={audioRef} src="/love.mp3" loop />

      <header className="hero">
        <div className="title-wrapper glass">
          <h1 className="title-animated">Taysh</h1>
        </div>
        <p className="subtitle">
          Hey Tannu…<br />
          <span>This isn’t just a website.</span><br />
          <strong>It’s me choosing you again.</strong>
        </p>
      </header>

      {/* HEART COLLAGE SECTION */}
      <section className="section">
        <div className="content">
          <h2 className="section-title">Our Story in Frames 📸</h2>
          <div className="heart-collage">
            {[
              'p1.jpeg', 'p2.jpeg', 'p3.jpeg', 'p4.jpeg', 'p5.jpeg', 
              'p6.jpeg', 'p7.jpeg', 'p8.jpeg', 'p9.jpeg', 'p10.jpeg', 
              'p11.jpeg', 'p12.jpeg', 'p13.jpeg'
            ].map((img, i) => (
              <div 
                key={i} 
                className={`photo-piece pos-${i + 1}`} 
                onMouseUp={(e) => {
                  e.currentTarget.classList.add('shattered');
                  setTimeout(() => e.currentTarget.classList.remove('shattered'), 1000);
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.classList.add('shattered');
                  setTimeout(() => e.currentTarget.classList.remove('shattered'), 1000);
                }}
              >
                <img src={`/${img}`} alt="memory" />
              </div>
            ))}
          </div>
          <p className="hint-text">Hold to see us clearly, release to shatter... ✨</p>
        </div>
      </section>

      {/* IMPORTANT QUESTION SECTION */}
      <section className="section">
        <div className="content">
          <div className="love-game glass">
            <h2 className="section-title">Important Question 👀</h2>
            {!celebrate ? (
              <div className="game-box">
                <p className="question-text">Do you love me?</p>
                <div className="doodle-container">
                  {responseType === 'no' && <div className="doodle">😡👊</div>}
                </div>
                <div className="love-buttons">
                  <button 
                    className="yes-btn highlight" 
                    onClick={() => { setResponseType('yes'); popConfetti(); }}
                  >
                    Yes, I love you bebu 💖
                  </button>
                  <button 
                    className="no-btn normal" 
                    onClick={() => setResponseType('no')}
                  >
                    No 😒
                  </button>
                </div>
                {responseType === 'no' && (
                  <p className="angry-text fade-in">Marne se darr ni lagta kya? 🔪</p>
                )}
              </div>
            ) : (
              <div className="celebrate-box fade-in">
                <div className="doodle love-doodle">🥰👩‍❤️‍👨✨</div>
                <h3>YAYYYYY 💕</h3>
                <p>You were always mine and will be 🤍</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* COUNTER */}
      <section className="timeline glass">
        <div className="stat-number">{daysTogether}</div>
        <p className="stat-text">Days of choosing you</p>
      </section>

      {/* SECONDARY LOCK */}
      <section className="section">
        <div className="content">
          <div className="second-lock glass">
            <h2 className="section-title">One More Secret 👀</h2>
            {!secondUnlocked ? (
              <div className="lock-inner" style={{textAlign: 'center', padding: '20px'}}>
                <p>This one is even more private.</p>
                <input 
                  className="lock-input" 
                  placeholder="Enter the secret…" 
                  value={secondSecret} 
                  onChange={(e) => setSecondSecret(e.target.value)} 
                />
                <button 
                  className="lock-btn highlight" 
                  onClick={() => secondSecret.trim().toLowerCase() === 'meri future biwi' && setSecondUnlocked(true)}
                >
                  Unlock 💌
                </button>
              </div>
            ) : (
              <p className="unlocked-text" style={{textAlign: 'center', color: '#ff5c8a'}}>
                Scroll back up to check your letters 🤍
              </p>
            )}
          </div>
        </div>
      </section>

      <footer className="footer">Made only for Tannu, by Yash 💖</footer>
    </div>
  );
}

export default App;