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

  /* ================= LOCK SCREEN (FIRST SECRET) ================= */
  if (!unlocked) {
    return (
      <div className="lock-screen">
        <div className="bg-blobs"></div>
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
          <div className="lock-heart-container" onClick={() => {
            const newCount = heartCount + 1;
            setHeartCount(newCount);
            if (newCount === 5) { setShowVideo(true); confetti({ particleCount: 100, spread: 70 }); }
          }}>
            <div className={`lock-heart ${heartCount > 0 ? 'pop' : ''}`}>💖</div>
            {heartCount > 0 && <span className="tap-count">{heartCount}</span>}
          </div>
          <h2 className="lock-title">Private Space</h2>
          <p className="lock-subtitle">Strictly for Tannu 🤍</p>
          <input className="lock-input" type="password" placeholder="Type our secret…" value={secret} onChange={(e) => setSecret(e.target.value)} />
          <button className="lock-btn" onClick={() => secret.trim().toLowerCase() === 'boobies' && setUnlocked(true)}>Unlock 💫</button>
          <p className="lock-hint">Hint: Something I always ask for 😉</p>
          {heartCount >= 5 && <p className="secret-reveal clickable" onClick={() => setShowVideo(true)}>You found it... re-watch here 🎥</p>}
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
        <h1 className="letters-title">Letters Only For You 🤍</h1>
        <div className="letters-grid">
          {[
            { id: 1, title: 'Forever Yours, In Every Lifetime', preview: 'Meri Jaaann, mera bebuuuu…', full: `Meri Jaaann, mera bebuuuu, You are the prettiest and sweetest person Ive ever met. You bring the best out of me. I was never this sweet boy, and I hated doing all these things — they felt cringe. But now I realize why they say wait until your turn, because a beautiful girl was meant to love me. And if these things make her happy, I’ll happily be the cringiest person alive on this planet, because all I care about is you. I know that you still don’t feel secure, and you’re scared of me leaving you alone to suffer like you did once. But NO, baby — I can’t live without you. You are my habit, my obsession, my love, my dream girl, my first thought, my last thought, my everything, bebu. I’ll never leave you. Ever. We’ll get married and be the sexiest and coolest couple in my whole khaandan. You’ll always be my flex. I’ll tell everyone that I pulled a 10/10 baddie who is emotionally available 24/7, who is always there to care for me. I don’t need anybody else because I’ve got my whole world by my side. Bebu, I know I fail to be there when you need me, and that’s the only regret and guilt I carry. Because I want to be with you every time you need me, and for one reason or another, I fail at doing that. No excuses, nothing — I am genuinely sorry for that, bebu. I don’t want to live without you because I don’t know how to live without you, Tannu. You are the first person I’ve ever loved, and now that I love someone, I’ll love you madly and keep loving you till the end, bebu. I want to give you all the love and respect you deserved and never got. I’ll fulfill all your cravings for love and respect. I don’t even know why you get hurt when I jokingly say you don’t look good. Like, girllll, come onnnn, babeeeeieee — tu sabse pyaari, sexyyy aur bahut hi hottt haiii. Teri aankhein… ughhhhhhhhhhh, I can legit look straight into your eyes and just get lost. They are so amazing. Phir teri smile — I legit melt when you smile, especially that smile when you try to control your laugh and then khulke hasti hai. I love you. And bebu, aapki waist… faaaaaakkkkk, nooooo, yaad mat dila, mujhe hidden folder kholna pad jaayega, bebu. Tu sabse pyaari aur sundar hai, meri jaan. I want to meet you so badly, I can’t even tell you, bebu. Feel your touch, hug you, kiss you — ughhh, can’t wait. I still remember the last time we met, when you got a little low in the auto and rested your head on my shoulder. I kept kissing you. Our foreheads were touching, and then I slipped down to your lips and kissed your dry lips. Ahhhh, that was my first kiss actually, and it was so special that I still remember that moment second by second. Never feel that I’ll leave you alone. No, bebu, aisa kabhi nahi hoga. Yes, you can overthink — kitna bhi, jitni bhi baar — I’ll reassure you every single time, standing by your side. Kyunki I know how much you’ve gone through in the past, how you feel when you’re stressed, and I’ll never leave you to suffer, bebu. I know I’m very far from you, but I never want you to feel alone. That’s why I came up with this idea — I’ll keep changing the content, so whenever you feel alone, miss me, and I’m sleeping, you can just open this and feel happy. Forever yours, bebu. And you’ll always be mine, meri jaan, mera KuchhuPuchhu. Aapka hone wala pati, Yash.` },
            { id: 2, title: 'You are my Safe Place', preview: 'I will stay and we are forever bebu', full: `You can feel secure\nBebu, I know you have that insecurity that i'll leave you again like i did after that silly ye big fight of ours and that is totally natural but you don't need to be scared about that again meri jaan. I'll never leave you because I can't live without you.\n\nFuck obsession babe you are my addiction for once i can live without my phone ya food or anything but not without you babe. Not even kidding but my fav song rn is 'die first'\nBecause when i say "If one of us dies, i hope i die first cuz i don't wanna live without you"\nI mean it bebu kuki i really don't know how do i live without you. Babe you are soo soo pretty not just outside but inside and It would be foolish of me if i leave a person like you, and i can be anything but not fool jaanu and i'll never leave you.\nI never said i love you to anyone but youu my bebu you are very very special for me that's the only reason i gabe my commitment and said i love you and now that i said i promise you that i'll never say that again to anyone else just you bebu.\nTerko to hazaar baar bolunga that i loveee you bebuuu.\nTu bohott pyaari h mera cutu bachha mera bebu meri kuchhuPuchhu.\nI lovee you \n\n💋💋💋❤️❤️❤️❤️❤️` }
          ].map((letter) => (
            // Find this section in your letters-page mapping
          <div 
            key={letter.id} 
            className="letter-card glass fade-up" 
            onClick={() => {
              setOpenLetter(letter);

              // Improved Audio Playback Logic
              if (audioRef.current) {
                audioRef.current.play().catch(error => {
                  console.log("Audio playback failed. User interaction might be required first:", error);
                });
              }
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
              <button className="close-letter" onClick={() => setOpenLetter(null)}>×</button>
              <h2>{openLetter.title}</h2>
              <div className="letter-divider"></div>
              <div className="letter-content">
                {openLetter.full.split('\n\n').map((para, i) => (
                  <p key={i} style={{ animationDelay: `${i * 0.6}s` }}>
                    {para}
                  </p>
                ))}
              </div>
              <div className="letter-footer">Forever Yours, Yash</div>
            </div>
          </div>
        )}
      </div>
    );
  }

  /* ================= MAIN SITE CONTENT ================= */
  return (
    <div className="app-container">
      <div className="bg-blobs"></div>
      <audio ref={audioRef} src="/1.mp3" loop />

      <header className="hero">
        <div className="title-wrapper glass"><h1 className="title-animated">Taysh</h1></div>
        <p className="subtitle">Hey Tannu…<br /><span>This isn’t just a website.</span><br /><strong>It’s me choosing you again.</strong></p>
        <p className="description">Meri KuchhuPuchhu and Wifey</p>
        <p className="description">Kattar Man hater</p>
      </header>

      <section className="section">
        <div className="content">
          <h2 className="section-title">Why You're Different 💕</h2>
          <div className="card-grid">
            <div className="card glass">You don't try to be cute. Tu bas hai meri cutu.</div>
            <div className="card glass">You think of me so selflessly even if you aren't right.</div>
            <div className="card glass">You made love feel easy, not scary.</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="content">
          <div className="love-game glass">
            <h2 className="section-title">Important Question 👀</h2>
            {!celebrate ? (
              <div className="game-box">
                <p className="question-text">Do you love me?</p>
                <div className="doodle-container">{responseType === 'no' && <div className="doodle">😡👊</div>}</div>
                <div className="love-buttons">
                  <button className="yes-btn highlight" onClick={() => { setResponseType('yes'); popConfetti(); }}>Yes, I love you bebu 💖</button>
                  <button className="no-btn normal" onClick={() => setResponseType('no')}>No 😒</button>
                </div>
                {responseType === 'no' && <p className="angry-text fade-in">Marne se darr ni lagta kya? 🔪</p>}
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

      <section className="section">
        <div className="content">
          <h2 className="section-title">When We’re Not Together 🕊️</h2>
          <div className="card-grid">
            <div className="card glass">Tu mere dimag me rehti hai 24/7.</div>
            <div className="card glass">SaxSux thoughts never stop 😭</div>
            <div className="card glass">I wait just to talk to you and spill the tea.</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="content">
          <h2 className="section-title">Messages I Never Stop Typing 💬</h2>
          <div className="chat-box glass">
            <div className="chat-bubble">Yash: I Lovieeeee you bebuuuu 🥺</div>
            <div className="chat-bubble delay1">Yash: Merko video kissie chaiyeee</div>
            <div className="chat-bubble delay2">Yash: Merko Bonus chaiye hehehehe🤍</div>
            <div className="chat-bubble delay3">Yash: bebu waist dikhadooo</div>
          </div>
        </div>
      </section>
      {/* GIFT SURPRISE */}
      <section className="section bg-pink">
        <div className="content">
          <h2 className="section-title">A Little Surprise 🎁</h2>
      
          <div
            className={`gift-box ${giftOpen ? 'open' : ''}`}
            onClick={() => {
              if (!giftOpen) {
                setGiftOpen(true);
                confetti({ particleCount: 120, spread: 70 });
                giftAudioRef.current.play();
              } else {
                setGiftOpen(false); // reset
              }
            }}
          >
            {/* LID */}
            <div className="gift-lid"></div>
      
            {/* BOX */}
            <div className="gift-body">
              <div className="gift-heart"></div>
            </div>
      
            {/* ITEMS */}
            <div className="gift-items">
              <div className="bouquet">
                <div className="flower"></div>
                <div className="flower"></div>
                <div className="flower"></div>
              </div>
      
              <div className="chocolate">
                <div className="choco-block"></div>
                <div className="choco-block"></div>
                <div className="choco-block"></div>
              </div>
            </div>
          </div>
      
          {!giftOpen && (
            <p className="gift-hint">Tap the box 👀</p>
          )}
      
          {giftOpen && (
            <p className="gift-message">
              Flowers, chocolate… and all my love 🤍
              <br />
              (Tap again to close 🎀)
            </p>
          )}
      
          {/* SOUND */}
          <audio ref={giftAudioRef} src="/music/1.mp3" />
        </div>
      </section>


      <section className="timeline-section glass-dark">
        <div className="content">
          <div className="stat-number">{daysTogether}</div>
          <p className="stat-text">Days of choosing you</p>
        </div>
      </section>

      <section className="section">
        <div className="content">
          <h2 className="section-title">Our Story in Frames 📸</h2>
          <div className="heart-collage">
            {['p1.jpeg', 'p2.jpeg', 'p3.jpeg', 'p4.jpeg', 'p5.jpeg', 'p6.jpeg', 'p7.jpeg', 'p8.jpeg', 'p9.jpeg', 'p10.jpeg', 'p11.jpeg', 'p12.jpeg', 'p13.jpeg'].map((img, i) => (
              <div key={i} className={`photo-piece pos-${i + 1}`} onMouseUp={(e) => { e.currentTarget.classList.add('shattered'); setTimeout(() => e.currentTarget.classList.remove('shattered'), 1000); }}>
                <img src={`/${img}`} alt="memory" />
              </div>
            ))}
          </div>
          <p className="hint-text">Hold to see us clearly, release to shatter... ✨</p>
        </div>
      </section>

      <section className="section">
        <div className="content">
          <h2 className="section-title">Small Promises 💖</h2>
          <div className="card-grid">
            <div className="card glass">I’ll choose you even on hard days.</div>
            <div className="card glass">I won’t leave when things get messy.</div>
            <div className="card glass">I'll buy you Flowers, dark chocolate & cold coffee — always.</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="content">
          <div className="second-lock glass">
            <h2 className="section-title">One More Secret 👀</h2>
            {!secondUnlocked ? (
              <div className="lock-inner">
                <p>This one is even more private.</p>
                <input className="lock-input" placeholder="Enter the secret…" value={secondSecret} onChange={(e) => setSecondSecret(e.target.value)} />
                <button className="lock-btn highlight" onClick={() => secondSecret.trim().toLowerCase() === 'meri future biwi' && setSecondUnlocked(true)}>Unlock 💌</button>
              </div>
            ) : <p className="unlocked-text">Scroll up for your letters 🤍</p>}
          </div>
        </div>
      </section>

      {/* MOOD CHECK */}
      <section className="section">
       <div className="content">
         <h2 className="section-title">Mood Check 💭</h2>
         <div className="mood-grid">
           <button onClick={() => alert("Come here 🤍 I'm holding you.")}>
             🥺 Missing You
           </button>
           <button onClick={() => alert("Okay but you’re still cute 😏")}>
             😤 Angry
           </button>
           <button onClick={() => alert("I knew it 😌 stay smiling")}>
             😊 Happy
           </button>
           <button onClick={() => alert("Text me. Now.")}>
             😔 Low
           </button>
         </div>
       </div>
      </section>


      <footer className="footer">Made only for Tannu, by Yash 💖</footer>
    </div>
  );
}

export default App;