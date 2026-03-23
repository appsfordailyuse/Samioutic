/* ═══════════════════════════════════════════════════════
   SAMIOUTIC AI CHATBOT v2 — Powered by Claude AI
   Drop-in replacement for chatbot-1.js
   ═══════════════════════════════════════════════════════ */
(function () {

  /* ── SAMI BAJWA KNOWLEDGE BASE ── */
  const KB = {
    name: "Sami Bajwa",
    title: "AI Educator, Digital Entrepreneur & Content Creator",
    location: "Sargodha, Punjab, Pakistan",
    handle: "@samibajwaisking",
    whatsapp: "923258948738",
    website: "samioutic.com",
    social: {
      facebook: "https://www.facebook.com/samibajwaisking",
      instagram: "https://www.instagram.com/samibajwaisking",
      twitter: "https://x.com/samibajwa106",
      threads: "https://www.threads.net/@samibajwaisking",
      whatsapp: "https://wa.me/923258948738",
      whatsappChannel: "https://whatsapp.com/channel/0029VbCNzQeISTkQR04DvX3r"
    },
    mission: "Pakistan ke har student tak free AI education pohanchana — koi paywall nahi, koi gatekeeping nahi.",
    quote: "Ilm dene se kam nahi hota — barh jata hai. Seedha dil se do, bina kisi laalach ke.",
    expertise: ["Claude AI", "ChatGPT", "n8n Automation", "Web Development", "WhatsApp Bots", "Freelancing", "Crypto & Blockchain", "AI Agents", "Voice Agents", "Digital Marketing"],
    certifications: ["Claude 101 — Anthropic", "Claude Code in Action — Anthropic", "AI Fluency — Anthropic"],
    businesses: ["Samioutic (AI Education Platform)", "Zam Zam Gas Agency (Sargodha)"],
    books: [
      { num: "01", icon: "🧠", title: "Artificial Intelligence — Complete Introduction", cat: "ai", link: "https://drive.google.com/file/d/1sLGwMw0nSSuZkoiLrpxTdYpiWw7mWJ_n/view" },
      { num: "02", icon: "🔬", title: "Deep Learning — Beginner to Advanced", cat: "ai", link: "https://docs.google.com/document/d/1vNytNKwwShWr7djKYiNuMVWczkjEObOh/edit" },
      { num: "03", icon: "🎯", title: "Reinforcement Learning — Complete Guide", cat: "ai", link: "https://docs.google.com/document/d/13ZXGR-ZUqR4GMkSyj4o7498eZWhs-HRh/edit" },
      { num: "04", icon: "⚙️", title: "AI Engineering — Practical Handbook", cat: "ai", link: "https://drive.google.com/file/d/1lPWdauXb3z9JwxV6cSyY7Hor0lW8KOk4/view" },
      { num: "05", icon: "🤝", title: "Co-Intelligence — Living & Working with AI", cat: "ai", link: "https://drive.google.com/file/d/17fRw53MSi4dkLH19-yFJ13KPHDdHTdeA/view" },
      { num: "06", icon: "🌍", title: "Intelligence Origins — The Story of AI", cat: "ai", link: "https://drive.google.com/file/d/1adBtI3KSlZ3Pn1URxPqTF0FrJOdMCI9m/view" },
      { num: "07", icon: "⚖️", title: "The Alignment Problem — AI Safety", cat: "ai", link: "https://drive.google.com/file/d/1aWvxQFnEi1fHMFDOZV9-OlWCEJ4-2ZCe/view" },
      { num: "08", icon: "🚀", title: "Superintelligence — Paths, Dangers & Strategies", cat: "ai", link: "https://drive.google.com/drive/folders/14gLn9SPlJSz66M64f_SCrQCpeLioD4Ad" },
      { num: "09", icon: "👑", title: "Empire of AI — The Future is Now", cat: "ai", link: "https://drive.google.com/drive/folders/14gLn9SPlJSz66M64f_SCrQCpeLioD4Ad" },
      { num: "10", icon: "📖", title: "AI Basic Book — By Sami Bajwa", cat: "mine", link: "https://drive.google.com/drive/folders/1O95XD4lIp6psWZKvzG41I-HRuXlZhQfH" },
      { num: "11", icon: "₿", title: "Bitcoin, Blockchain & Cryptocurrency — By Sami Bajwa", cat: "mine", link: "https://drive.google.com/drive/folders/1O95XD4lIp6psWZKvzG41I-HRuXlZhQfH" },
      { num: "12", icon: "💼", title: "Claude AI For Business — By Sami Bajwa", cat: "mine", link: "https://drive.google.com/drive/folders/1O95XD4lIp6psWZKvzG41I-HRuXlZhQfH" },
      { num: "13", icon: "💻", title: "Claude Code Guide — By Sami Bajwa", cat: "mine", link: "https://drive.google.com/drive/folders/1O95XD4lIp6psWZKvzG41I-HRuXlZhQfH" },
      { num: "14", icon: "🛒", title: "Daraz Seller Store — Complete eBook By Sami Bajwa", cat: "mine", link: "https://drive.google.com/drive/folders/1O95XD4lIp6psWZKvzG41I-HRuXlZhQfH" },
      { num: "15", icon: "🔍", title: "Free Grok Use Guideline — By Sami Bajwa", cat: "mine", link: "https://drive.google.com/drive/folders/1O95XD4lIp6psWZKvzG41I-HRuXlZhQfH" },
      { num: "16", icon: "💰", title: "Freelancer Bano — By Sami Bajwa", cat: "mine", link: "https://drive.google.com/drive/folders/1O95XD4lIp6psWZKvzG41I-HRuXlZhQfH" },
      { num: "17", icon: "🤖", title: "How to Use Claude — By Sami Bajwa", cat: "mine", link: "https://drive.google.com/drive/folders/1O95XD4lIp6psWZKvzG41I-HRuXlZhQfH" },
      { num: "18", icon: "🔎", title: "Perplexity AI — Computer Use Guide By Sami Bajwa", cat: "mine", link: "https://drive.google.com/drive/folders/1O95XD4lIp6psWZKvzG41I-HRuXlZhQfH" },
      { num: "19", icon: "🛠️", title: "Powerful 7 AI Tools — By Sami Bajwa", cat: "mine", link: "https://drive.google.com/drive/folders/1O95XD4lIp6psWZKvzG41I-HRuXlZhQfH" },
      { num: "20", icon: "🎓", title: "Student ID Benefits Guide — By Sami Bajwa", cat: "mine", link: "https://drive.google.com/drive/folders/1O95XD4lIp6psWZKvzG41I-HRuXlZhQfH" },
      { num: "21", icon: "💵", title: "100 Earning Books — Complete Collection", cat: "earning", link: "https://drive.google.com/drive/folders/1qevtdVUjq5G55M0L1Nb2VWz9nlRSBsB6" },
      { num: "22", icon: "📈", title: "Online Earning Mastery — 100 Books Folder", cat: "earning", link: "https://drive.google.com/drive/folders/1qevtdVUjq5G55M0L1Nb2VWz9nlRSBsB6" },
      { num: "23", icon: "🏆", title: "Freelancing & Business Books — Earning Series", cat: "earning", link: "https://drive.google.com/drive/folders/1qevtdVUjq5G55M0L1Nb2VWz9nlRSBsB6" },
      { num: "24", icon: "💡", title: "Passive Income & Investment — Earning Series", cat: "earning", link: "https://drive.google.com/drive/folders/1qevtdVUjq5G55M0L1Nb2VWz9nlRSBsB6" },
      { num: "25", icon: "🌐", title: "Digital Marketing Complete Guide — Earning Series", cat: "earning", link: "https://drive.google.com/drive/folders/1qevtdVUjq5G55M0L1Nb2VWz9nlRSBsB6" }
    ],
    services: [
      "Automation for Business (n8n, AI)",
      "Social Media Automation",
      "Web Development",
      "Web Designing",
      "Web To App Creation",
      "WhatsApp Bot Creation",
      "Captions Making (Roman Urdu + English)",
      "Auto Email Controls",
      "Voice Agents for E-stores",
      "E-store Development",
      "Brand Kit Facilitation",
      "Logo Designing",
      "Copyright Content Creation"
    ]
  };

  /* ── SYSTEM PROMPT ── */
  function buildSystemPrompt() {
    const booksText = KB.books.map(b =>
      `Book ${b.num}: "${b.title}" [${b.cat}] — Link: ${b.link}`
    ).join('\n');

    const servicesText = KB.services.map((s, i) => `${i + 1}. ${s}`).join('\n');

    return `You are the official AI assistant for Samioutic.com — the personal website of Sami Bajwa.

## WHO IS SAMI BAJWA
- Full Name: Sami Bajwa
- Title: AI Educator, Digital Entrepreneur & Content Creator
- Location: Sargodha, Punjab, Pakistan
- Social Handle: @samibajwaisking (Facebook, Instagram, Threads)
- Twitter/X: @samibajwa106
- WhatsApp: +92 325 8948738
- Website: samioutic.com
- Mission: ${KB.mission}
- Famous Quote: "${KB.quote}"
- Expertise: ${KB.expertise.join(', ')}
- Certifications: ${KB.certifications.join(', ')}
- Businesses: ${KB.businesses.join(', ')}

## BOOKS (${KB.books.length} total — ALL FREE)
${booksText}

## SERVICES (${KB.services.length} services)
${servicesText}
WhatsApp for enquiry: https://wa.me/923258948738

## YOUR BEHAVIOR RULES
1. Answer in the SAME LANGUAGE as the user — Roman Urdu, Urdu script, or English
2. For questions about Sami Bajwa: Give VARIED, FRESH answers each time — never copy-paste the same bio. Sometimes focus on his education work, sometimes his books, sometimes his journey, sometimes his mission. Always sound natural and warm.
3. For ANY topic (AI, freelancing, crypto, automation, business, etc.): Give a REAL helpful answer, then naturally recommend the most relevant book from the list above with its direct link.
4. For book searches: Show matching books with their links.
5. For service enquiries: Give details and WhatsApp link.
6. Keep answers concise but complete — use line breaks, emojis where natural.
7. Never give the same "About Sami Bajwa" answer twice — vary the angle each time.
8. Be warm, friendly, like a knowledgeable friend — not a corporate bot.
9. When recommending books, use this format: 📚 *Book Title* — [Download Free →](link)
10. Always end with a helpful follow-up question or offer.`;
  }

  /* ── CONVERSATION HISTORY ── */
  let conversationHistory = [];
  const MAX_HISTORY = 10;

  /* ── INJECT CSS ── */
  const style = document.createElement('style');
  style.textContent = `
    #sb-cb-btn {
      position: fixed; bottom: 1.8rem; right: 1.8rem; z-index: 1000;
      width: 58px; height: 58px; border-radius: 50%;
      background: linear-gradient(135deg, #c8a84b, #8a6d2a);
      border: none; cursor: pointer;
      box-shadow: 0 4px 24px rgba(200,168,75,.45);
      display: flex; align-items: center; justify-content: center;
      transition: all .3s; font-size: 1.5rem;
    }
    #sb-cb-btn:hover { transform: scale(1.1); box-shadow: 0 8px 32px rgba(200,168,75,.6); }
    #sb-cb-btn .sb-notif {
      position: absolute; top: -2px; right: -2px;
      width: 14px; height: 14px; border-radius: 50%;
      background: #34d471; border: 2px solid #060608;
      animation: sbBlink 2s infinite;
    }
    #sb-cb-box {
      position: fixed; bottom: 5.5rem; right: 1.8rem; z-index: 1000;
      width: 370px; max-width: calc(100vw - 2rem);
      height: 520px; max-height: calc(100vh - 8rem);
      background: #0c0c10; border: 1px solid rgba(200,168,75,.25);
      border-radius: 14px; display: none; flex-direction: column;
      box-shadow: 0 24px 70px rgba(0,0,0,.75); overflow: hidden;
    }
    #sb-cb-box.open { display: flex; }
    .sb-cbh {
      background: linear-gradient(135deg, rgba(200,168,75,.15), rgba(52,212,113,.07));
      border-bottom: 1px solid rgba(200,168,75,.15);
      padding: .9rem 1.1rem;
      display: flex; align-items: center; justify-content: space-between;
      flex-shrink: 0;
    }
    .sb-cbh-left { display: flex; align-items: center; gap: .75rem; }
    .sb-cbh-av {
      width: 36px; height: 36px; border-radius: 50%;
      overflow: hidden; border: 1.5px solid rgba(200,168,75,.4);
      flex-shrink: 0; background: rgba(200,168,75,.1);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.1rem;
    }
    .sb-cbh-av img { width: 100%; height: 100%; object-fit: cover; object-position: top; }
    .sb-cbh-name { font-size: .83rem; font-weight: 700; color: #f2ede4; font-family: 'Playfair Display', serif; }
    .sb-cbh-status { font-size: .6rem; color: #34d471; letter-spacing: 1px; }
    .sb-cbh-powered { font-size: .52rem; color: rgba(200,168,75,.5); letter-spacing: 1px; text-transform: uppercase; }
    .sb-cbh-close {
      background: none; border: none; color: #545058;
      cursor: pointer; font-size: 1.1rem; transition: color .2s; padding: .2rem;
    }
    .sb-cbh-close:hover { color: #c8a84b; }
    .sb-cbm {
      flex: 1; overflow-y: auto; padding: 1rem;
      display: flex; flex-direction: column; gap: .75rem;
      scroll-behavior: smooth;
    }
    .sb-cbm::-webkit-scrollbar { width: 2px; }
    .sb-cbm::-webkit-scrollbar-thumb { background: rgba(200,168,75,.25); border-radius: 4px; }
    .sb-cm {
      max-width: 88%; font-size: .8rem; line-height: 1.7;
      padding: .65rem .95rem; border-radius: 10px;
      font-family: 'DM Sans', sans-serif;
    }
    .sb-cm.bot {
      background: rgba(200,168,75,.07); border: 1px solid rgba(200,168,75,.12);
      color: #c8c0b4; align-self: flex-start; border-radius: 3px 10px 10px 10px;
    }
    .sb-cm.usr {
      background: linear-gradient(135deg, rgba(200,168,75,.2), rgba(200,168,75,.1));
      color: #e8c96a; align-self: flex-end; border-radius: 10px 3px 10px 10px;
      border: 1px solid rgba(200,168,75,.22);
    }
    .sb-cm a { color: #c8a84b; text-decoration: underline; word-break: break-all; }
    .sb-cm strong { color: #e8c96a; }
    .sb-cm em { color: #9a9288; font-style: italic; }
    .sb-typing {
      display: flex; gap: 5px; padding: .4rem .6rem; align-items: center;
    }
    .sb-typing span {
      width: 7px; height: 7px; border-radius: 50%;
      background: rgba(200,168,75,.5); animation: sbDot 1.2s infinite;
    }
    .sb-typing span:nth-child(2) { animation-delay: .2s; }
    .sb-typing span:nth-child(3) { animation-delay: .4s; }
    .sb-cq {
      padding: .5rem .8rem; display: flex; gap: .4rem;
      flex-wrap: wrap; border-top: 1px solid rgba(200,168,75,.08);
      flex-shrink: 0;
    }
    .sb-cqb {
      padding: .3rem .7rem; background: rgba(200,168,75,.06);
      border: 1px solid rgba(200,168,75,.18); border-radius: 20px;
      font-size: .62rem; color: #c8a84b; cursor: pointer;
      transition: all .2s; white-space: nowrap;
      font-family: 'DM Sans', sans-serif;
    }
    .sb-cqb:hover { background: rgba(200,168,75,.14); border-color: rgba(200,168,75,.4); }
    .sb-cbir {
      border-top: 1px solid rgba(200,168,75,.1);
      padding: .75rem; display: flex; gap: .5rem;
      align-items: center; flex-shrink: 0;
    }
    .sb-cbi {
      flex: 1; background: rgba(200,168,75,.05);
      border: 1px solid rgba(200,168,75,.15); color: #f2ede4;
      padding: .58rem .9rem; border-radius: 8px;
      font-size: .82rem; outline: none;
      font-family: 'DM Sans', sans-serif; transition: border .2s;
    }
    .sb-cbi:focus { border-color: rgba(200,168,75,.45); }
    .sb-cbi::placeholder { color: #545058; }
    .sb-cbs {
      background: linear-gradient(135deg, #c8a84b, #8a6d2a);
      border: none; width: 38px; height: 38px; border-radius: 8px;
      cursor: pointer; display: flex; align-items: center;
      justify-content: center; font-size: .95rem; flex-shrink: 0;
      transition: all .25s;
    }
    .sb-cbs:hover { transform: scale(1.08); }
    .sb-cbs:disabled { opacity: .5; cursor: not-allowed; transform: none; }
    .sb-ai-badge {
      font-size: .52rem; letter-spacing: 1.5px; text-transform: uppercase;
      background: rgba(52,212,113,.08); color: #34d471;
      border: 1px solid rgba(52,212,113,.2); padding: .15rem .5rem;
      border-radius: 10px; display: inline-block; margin-top: .2rem;
    }
    @keyframes sbBlink { 0%,100%{opacity:.4;transform:scale(1);} 50%{opacity:1;transform:scale(1.3);} }
    @keyframes sbDot { 0%,60%,100%{transform:translateY(0);} 30%{transform:translateY(-6px);} }
    @media(max-width:480px){
      #sb-cb-box { width: calc(100vw - 1rem); right: .5rem; bottom: 5rem; }
      #sb-cb-btn { bottom: 1.2rem; right: 1.2rem; }
    }
  `;
  document.head.appendChild(style);

  /* ── BUILD UI ── */
  // Remove old chatbot if exists
  ['#cb-btn','#cb-box','#sb-chat-btn','#sb-chat-box'].forEach(sel => {
    const el = document.querySelector(sel);
    if (el) el.remove();
  });

  const btn = document.createElement('button');
  btn.id = 'sb-cb-btn';
  btn.innerHTML = `💬<span class="sb-notif"></span>`;
  btn.onclick = () => box.classList.toggle('open');

  const box = document.createElement('div');
  box.id = 'sb-cb-box';
  box.innerHTML = `
    <div class="sb-cbh">
      <div class="sb-cbh-left">
        <div class="sb-cbh-av">🤖</div>
        <div>
          <div class="sb-cbh-name">Samioutic Assistant</div>
          <div class="sb-cbh-status">● Online · AI Powered</div>
          <div class="sb-cbh-powered">Powered by Claude AI</div>
        </div>
      </div>
      <button class="sb-cbh-close" onclick="document.getElementById('sb-cb-box').classList.remove('open')">✕</button>
    </div>
    <div class="sb-cbm" id="sb-cbm"></div>
    <div class="sb-cq" id="sb-cq">
      <span class="sb-cqb" onclick="sbAsk('Sami Bajwa kaun hain?')">👤 About</span>
      <span class="sb-cqb" onclick="sbAsk('Sab books dikhao')">📚 Books</span>
      <span class="sb-cqb" onclick="sbAsk('AI kaise seekhun?')">🧠 AI Seekho</span>
      <span class="sb-cqb" onclick="sbAsk('Freelancing kaise shuru karun?')">💰 Freelancing</span>
      <span class="sb-cqb" onclick="sbAsk('Services kya hain?')">💼 Services</span>
      <span class="sb-cqb" onclick="sbAsk('Contact kaise karun?')">📞 Contact</span>
    </div>
    <div class="sb-cbir">
      <input class="sb-cbi" id="sb-cbi" placeholder="Kuch bhi poochein — English ya Roman Urdu mein..." 
             onkeydown="if(event.key==='Enter')sbSend()"/>
      <button class="sb-cbs" id="sb-cbs" onclick="sbSend()">➤</button>
    </div>
  `;

  document.body.appendChild(btn);
  document.body.appendChild(box);

  /* ── HELPERS ── */
  const cbm = () => document.getElementById('sb-cbm');

  function addMsg(html, type) {
    const d = document.createElement('div');
    d.className = 'sb-cm ' + type;
    d.innerHTML = html;
    cbm().appendChild(d);
    cbm().scrollTop = cbm().scrollHeight;
    return d;
  }

  function showTyping() {
    const t = document.createElement('div');
    t.className = 'sb-cm bot';
    t.innerHTML = `<div class="sb-typing"><span></span><span></span><span></span></div>`;
    cbm().appendChild(t);
    cbm().scrollTop = cbm().scrollHeight;
    return t;
  }

  function formatBotText(text) {
    // Convert markdown-style to HTML
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
      .replace(/\n/g, '<br>');
  }

  /* ── WELCOME MESSAGE ── */
  setTimeout(() => {
    addMsg(`👋 <strong>Assalam o Alaikum!</strong> Main Samioutic ka AI Assistant hun.<br><br>
Mujhse <strong>English ya Roman Urdu</strong> mein kuch bhi poochhein — AI, freelancing, books, ya Sami Bajwa ke baare mein!<br><br>
<span class="sb-ai-badge">✨ Claude AI Powered</span>`, 'bot');
  }, 400);

  /* ── SEND MESSAGE ── */
  window.sbAsk = function (q) {
    document.getElementById('sb-cbi').value = q;
    sbSend();
  };

  window.sbSend = async function () {
    const inp = document.getElementById('sb-cbi');
    const sendBtn = document.getElementById('sb-cbs');
    const q = inp.value.trim();
    if (!q) return;

    inp.value = '';
    addMsg(q, 'usr');

    // Hide quick buttons after first real message
    const cq = document.getElementById('sb-cq');
    if (cq) cq.style.display = 'none';

    const typing = showTyping();
    sendBtn.disabled = true;

    // Add to history
    conversationHistory.push({ role: 'user', content: q });
    if (conversationHistory.length > MAX_HISTORY * 2) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: buildSystemPrompt(),
          messages: conversationHistory
        })
      });

      const data = await response.json();
      typing.remove();

      if (data.content && data.content[0]) {
        const reply = data.content[0].text;
        conversationHistory.push({ role: 'assistant', content: reply });
        addMsg(formatBotText(reply), 'bot');
      } else {
        throw new Error('No response');
      }
    } catch (err) {
      typing.remove();
      // Fallback to local KB
      const fallback = localFallback(q);
      addMsg(formatBotText(fallback), 'bot');
      console.warn('AI API error, using fallback:', err);
    }

    sendBtn.disabled = false;
    inp.focus();
  };

  /* ── LOCAL FALLBACK (when API unavailable) ── */
  function localFallback(q) {
    const ql = q.toLowerCase();
    const books = typeof getBooks === 'function' ? getBooks() : KB.books;

    // Book search
    const matched = books.filter(b => {
      const hay = (b.title + ' ' + (b.desc || '') + ' ' + b.cat).toLowerCase();
      return ql.split(' ').filter(w => w.length > 3).some(w => hay.includes(w));
    });

    if (matched.length > 0 && matched.length <= 4) {
      let h = `📚 **Yeh books relevant lagti hain:**\n\n`;
      matched.forEach(b => {
        h += `${b.icon || '📖'} **${b.title}**\n[Free Download →](${b.link})\n\n`;
      });
      return h;
    }

    if (ql.includes('book') || ql.includes('kitab')) {
      let h = `📚 **Sami Bajwa ki ${books.length} free books hain!**\n\nTop picks:\n\n`;
      books.slice(0, 5).forEach(b => h += `${b.icon || '📖'} [${b.title}](${b.link})\n`);
      h += `\nSab books dekhne ke liye Books section visit karein! 👆`;
      return h;
    }

    if (ql.includes('contact') || ql.includes('rabta') || ql.includes('whatsapp')) {
      return `📞 **Sami Bajwa se rabta karein:**\n\n💬 [WhatsApp: +92 325 8948738](https://wa.me/923258948738)\n📘 [Facebook: @samibajwaisking](${KB.social.facebook})\n📸 [Instagram: @samibajwaisking](${KB.social.instagram})`;
    }

    return `Maafi chahta hun, abhi AI service temporarily unavailable hai. 😊\n\nBrahe raast **WhatsApp** par poochh saktay hain:\n💬 [+92 325 8948738](https://wa.me/923258948738)\n\nYa **books section** check karein — wahan sab kuch free available hai!`;
  }

})();
