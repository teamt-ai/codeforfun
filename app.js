// HTML MODULES DATASET (10 LESSONS)
const HTML_MODULES = [
  {
    id: 1,
    title: '1. What is HTML? The Magic Lego Bricks of the Web!',
    badgeName: 'Lego Architect 🧱',
    emoji: '🧱',
    summary: 'Discover how web pages are built just like Lego castles using magic tags!',
    analogy: {
      title: 'Imagine Building a Toy Castle 🏰',
      description: 'HTML stands for HyperText Markup Language. Think of HTML as a giant box of colorful Lego bricks! Just like you snap blue bricks for walls and red bricks for roofs, HTML uses special tags like <h1> and <p> to snap titles, stories, and photos onto your computer screen!',
      icon: '🧩'
    },
    explanations: [
      {
        heading: 'What is a Tag?',
        text: 'A tag is a magic label wrapped in angle brackets `<` and `>`. Tags come in pairs! An opening tag `<h1>` says "Start Title!", and a closing tag `</h1>` (with a slash `/`) says "Stop Title!"'
      },
      {
        heading: 'Why do we need Tags?',
        text: 'Computers need clear instructions! Without tags, a computer just sees a big pile of messy words. Tags tell the computer: "Hey! Make this big, make this a photo, and make this a button!"',
        codeExample: '<h1>My Awesome Pet Dragon 🐉</h1>\n<p>His name is Sparky and he loves tacos!</p>'
      }
    ],
    initialCode: '<h1>Welcome to Dragon Land</h1>\n<p>Touch the screen to feed Sparky the Dragon! 🐉</p>',
    quizzes: [
      {
        prompt: 'Which magic tag tells the computer to START a big title?',
        snippet: '<__?>My Secret Treasure Chest</h1>',
        blankAnswer: 'h1',
        options: ['h1', '/h1', 'title', 'box'],
        explanation: '`<h1>` is the opening tag for the biggest, boldest title on a web page!'
      },
      {
        prompt: 'What special symbol goes inside a CLOSING tag to say "STOP"?',
        snippet: '<__?>h1>',
        blankAnswer: '/',
        options: ['/', '!', '#', '*'],
        explanation: 'The slash `/` is the magic "stop" sign for closing tags!'
      }
    ]
  },
  {
    id: 2,
    title: '2. Headings & Titles: From Giant Kings to Tiny Knights! 👑',
    badgeName: 'Royal Crown 👑',
    emoji: '👑',
    summary: 'Learn h1, h2, h3, h4, h5, and h6 to make titles of all shapes and sizes!',
    analogy: {
      title: 'The Royal Heading Family 🏰',
      description: 'HTML has 6 heading tags, from <h1> to <h6>. Think of <h1> as the Giant King Heading (the biggest!), <h2> as the Queen Heading, <h3> as the Prince, down to <h6> as the tiny Mouse Knight!',
      icon: '👑'
    },
    explanations: [
      {
        heading: 'Why 6 Headings?',
        text: 'When you read a comic book or newspaper, the main headline is BIG, and smaller chapter titles are medium sized. Using different headings helps people read your website easily!'
      },
      {
        heading: 'Heading Examples in Action',
        text: '`<h1>` is for the main website title. `<h2>` is for section headings. `<h3>` is for small topic titles.',
        codeExample: '<h1>🚀 Space Exploration Club</h1>\n<h2>Moon Mission 1</h2>\n<h3>Rocket Countdown</h3>'
      }
    ],
    initialCode: '<h1>Super Rocket Academy 🚀</h1>\n<h2>Chapter 1: Blast Off!</h2>\n<h3>3... 2... 1... Ignition!</h3>',
    quizzes: [
      {
        prompt: 'Which heading tag makes the BIGGEST title on the whole page?',
        snippet: '<__?>The Giant Alien Ship</h1>',
        blankAnswer: 'h1',
        options: ['h1', 'h6', 'h10', 'big'],
        explanation: '`<h1>` is the King of headings — the largest title available!'
      },
      {
        prompt: 'Fill in the missing tag for a medium chapter title:',
        snippet: '<h2>Chapter 2: The Moon Base<__?>',
        blankAnswer: '/h2',
        options: ['/h2', '/h1', '/h6', '/title'],
        explanation: '`</h2>` closes the medium `<h2>` chapter title cleanly!'
      }
    ]
  },
  {
    id: 3,
    title: '3. Paragraphs & Storytelling: Typing with `<p>` 📖',
    badgeName: 'Story Wizard 🧙‍♂️',
    emoji: '📖',
    summary: 'Write stories, fun facts, and messages using the paragraph tag!',
    analogy: {
      title: 'Your Digital Notebook 📝',
      description: 'The `<p>` tag stands for Paragraph! Whenever you want to write a story sentence, a joke, or a description of your pet, you wrap your text inside `<p>` and `</p>`. It tells the computer to put space around your text like a nice clean paragraph in a book.',
      icon: '✍️'
    },
    explanations: [
      {
        heading: 'How to use `<p>`',
        text: 'Place your story right between `<p>` and `</p>`. You can have as many paragraphs as you like on your page!'
      },
      {
        heading: 'Paragraph Example',
        text: 'Watch how each paragraph gets its own clean line and spacing on the web page:',
        codeExample: '<p>Once upon a time, a fluffy cat learned to fly a helicopter.</p>\n<p>She flew all the way to Rainbow Island!</p>'
      }
    ],
    initialCode: '<h1>My Flying Puppy 🐶</h1>\n<p>Barnaby is a golden retriever with tiny blue wings.</p>\n<p>He loves eating cheese in the clouds!</p>',
    quizzes: [
      {
        prompt: 'What tag is used to write regular story sentences or paragraphs?',
        snippet: '<__?>I love playing video games with my friends.</p>',
        blankAnswer: 'p',
        options: ['p', 'story', 'text', 'para'],
        explanation: '`<p>` stands for Paragraph!'
      }
    ]
  },
  {
    id: 4,
    title: '4. Magic Photos & Pictures: `<img>`, `src` & `alt` 🖼️',
    badgeName: 'Photo Wizard 📸',
    emoji: '🖼️',
    summary: 'Show awesome pictures on your web page using img, src, and alt attributes!',
    analogy: {
      title: 'The Magical Picture Frame 🖼️',
      description: 'The `<img>` tag is a photo frame! But a frame needs a picture inside it! We use `src="..."` (Source) to give the computer the web address of the picture. And we use `alt="..."` (Alternative Text) as a secret whisper to describe what the photo shows!',
      icon: '🖼️'
    },
    explanations: [
      {
        heading: 'The Self-Closing Magic!',
        text: 'Unlike `<h1>` or `<p>`, the `<img>` tag is a SOLO HERO! It does NOT need a closing `</img>` tag because the picture lives entirely inside the attributes!'
      },
      {
        heading: 'Image Example',
        text: 'Here is how you display a cute kitten picture on a website:',
        codeExample: '<img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300" alt="A cute superhero puppy">'
      }
    ],
    initialCode: '<h2>Superhero Puppy 🐶</h2>\n<img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300" alt="Superhero puppy looking cool" />\n<p>Meet Buster, the fastest dog on Earth!</p>',
    quizzes: [
      {
        prompt: 'Which attribute tells the computer WHERE to find the photo file or image link?',
        snippet: '<img __?>="cute_dog.jpg" alt="A cute dog">',
        blankAnswer: 'src',
        options: ['src', 'link', 'url', 'photo'],
        explanation: '`src` stands for Source — the address where the picture is located!'
      }
    ]
  },
  {
    id: 5,
    title: '5. Teleport Portals & Action Buttons: `<a>` & `<button>` 🚀',
    badgeName: 'Portal Master 🌀',
    emoji: '🌀',
    summary: 'Build clickable teleport links with <a> and interactive action buttons with <button>!',
    analogy: {
      title: 'Teleportation Portals! 🌌',
      description: 'The `<a>` tag stands for Anchor (or Portal!). When you click an `<a>` link with `href="https://..."`, your browser instantly teleports to a new web page! The `<button>` tag creates a satisfying clicky button for games and popups!',
      icon: '🚀'
    },
    explanations: [
      {
        heading: 'What is `href`?',
        text: '`href` stands for Hypertext REFerence — it is the destination portal address where your link takes the player when clicked!'
      },
      {
        heading: 'Links vs Buttons',
        text: 'Use `<a>` to teleport to a new page. Use `<button>` for actions like "Play Game", "Jump!", or "Launch Rocket"!',
        codeExample: '<a href="https://wikipedia.org">Visit Magic Wiki 🌌</a>\n<button>🚀 Launch Spaceship!</button>'
      }
    ],
    initialCode: '<h1>Portal Station 🚀</h1>\n<a href="https://google.com">Teleport to Search Engine 🌌</a>\n<br><br>\n<button onclick="alert(\'Blast Off!\')">Press to Launch Rocket! 🚀</button>',
    quizzes: [
      {
        prompt: 'Which attribute inside `<a>` specifies the destination URL portal address?',
        snippet: '<a __?>="https://codeforfun.com">Play Code Games</a>',
        blankAnswer: 'href',
        options: ['href', 'target', 'go', 'to'],
        explanation: '`href` holds the link web address!'
      }
    ]
  },
  {
    id: 6,
    title: '6. Lists & Inventories: `<ul>`, `<ol>`, & `<li>` 📋',
    badgeName: 'Inventory Hero 🎒',
    emoji: '📋',
    summary: 'Organize items using bullet lists (ul), numbered lists (ol), and list items (li)!',
    analogy: {
      title: 'Your Gamer Backpack Inventory 🎒',
      description: 'Imagine opening your video game inventory bag! Bullet lists `<ul>` (Unordered List) show dots for items like snacks or toys. Numbered lists `<ol>` (Ordered List) show 1, 2, 3 steps for high scores or baking recipes! Every item inside uses `<li>` (List Item).',
      icon: '🎒'
    },
    explanations: [
      {
        heading: 'How Lists Work Together',
        text: '`<ul>` or `<ol>` is the outer container box. `<li>` wraps each item inside the box!'
      },
      {
        heading: 'List Example',
        text: 'Check out a player inventory list:',
        codeExample: '<h2>🎒 My Superhero Kit</h2>\n<ul>\n  <li>Laser Goggles</li>\n  <li>Flying Boots</li>\n</ul>'
      }
    ],
    initialCode: '<h2>🎒 My Top 3 Favorite Games</h2>\n<ol>\n  <li>Minecraft</li>\n  <li>Roblox</li>\n  <li>Super Mario Bros</li>\n</ol>',
    quizzes: [
      {
        prompt: 'Which tag wraps EACH individual item inside a list?',
        snippet: '<ul>\n  <__?>Golden Sword</li>\n</ul>',
        blankAnswer: 'li',
        options: ['li', 'ul', 'ol', 'item'],
        explanation: '`<li>` stands for List Item!'
      }
    ]
  },
  {
    id: 7,
    title: '7. Toy Boxes & Highlighters: `<div>` & `<span>` 📦',
    badgeName: 'Box Stacker 📦',
    emoji: '📦',
    summary: 'Group big sections using div boxes and highlight special text using span!',
    analogy: {
      title: 'Toy Boxes & Magic Highlighters 📦',
      description: 'Think of `<div>` as a giant plastic storage box to group toys together on a shelf. Think of `<span>` as a neon yellow highlighter marker to make a single word pop out inside a sentence!',
      icon: '📦'
    },
    explanations: [
      {
        heading: 'Block vs Inline Containers',
        text: '`<div>` takes up a full new block line. `<span>` sits inline inside a sentence without breaking the text flow!'
      }
    ],
    initialCode: '<div style="background: #FEF3C7; padding: 15px;">\n  <h2>Secret Cave Treasure 💎</h2>\n  <p>I found a <span style="color: #DC2626; font-weight: bold;">fire-red</span> ruby!</p>\n</div>',
    quizzes: [
      {
        prompt: 'Which container tag is used to group big layout blocks on a web page?',
        snippet: '<__?>\n  <h1>Welcome to my Fortress</h1>\n</div>',
        blankAnswer: 'div',
        options: ['div', 'span', 'box', 'section'],
        explanation: '`<div>` (Division) is the main container box tag in HTML!'
      }
    ]
  },
  {
    id: 8,
    title: '8. Interactive Forms & Inputs: Asking Questions! 🎮',
    badgeName: 'Game Controller 🎮',
    emoji: '🎮',
    summary: 'Let players type names, pick colors, check boxes, and slide controls with input!',
    analogy: {
      title: 'Your Video Game Character Creator 🎮',
      description: 'Ever created a character in a game where you type your hero name, pick your armor color, and slide your power levels? That is made with `<input>` tags inside a `<form>`!',
      icon: '🎮'
    },
    explanations: [
      {
        heading: 'Input Types',
        text: '`<input type="text">` creates a typing box. `<input type="color">` opens a color picker! `<input type="checkbox">` makes a check box!'
      }
    ],
    initialCode: '<h2>🎮 Character Creator</h2>\n<form>\n  <label>Hero Name:</label><br>\n  <input type="text" placeholder="e.g. Captain Spark"><br><br>\n  <label>Armor Color:</label><br>\n  <input type="color"><br><br>\n  <button type="button">Save Hero! 🛡️</button>\n</form>',
    quizzes: [
      {
        prompt: 'Which input type lets a player type text sentences into a web page?',
        snippet: '<input type="__?">',
        blankAnswer: 'text',
        options: ['text', 'color', 'checkbox', 'range'],
        explanation: '`type="text"` creates a text typing box!'
      }
    ]
  },
  {
    id: 9,
    title: '9. Leaderboard Tables: `<table>`, `<tr>`, `<th>`, & `<td>` 🏆',
    badgeName: 'Score Master 🏆',
    emoji: '🏆',
    summary: 'Build high-score leaderboards and game stats using HTML tables!',
    analogy: {
      title: 'The High Score Leaderboard Board 📊',
      description: 'A table is like a grid game board! `<table>` is the table board. `<tr>` (Table Row) is a horizontal row from left to right. `<th>` (Table Header) is a bold column header title. `<td>` (Table Data) is the individual score cell!',
      icon: '🏆'
    },
    explanations: [
      {
        heading: 'Table Anatomy',
        text: 'Rows `<tr>` hold data cells `<td>` side by side like Lego tiles in a row.'
      }
    ],
    initialCode: '<h2>🏆 Game High Scores</h2>\n<table>\n  <tr>\n    <th>Player</th>\n    <th>Score</th>\n  </tr>\n  <tr>\n    <td>Alex</td>\n    <td>9,500 pts</td>\n  </tr>\n  <tr>\n    <td>Sam</td>\n    <td>8,900 pts</td>\n  </tr>\n</table>',
    quizzes: [
      {
        prompt: 'Which tag creates a horizontal row inside a table?',
        snippet: '<table>\n  <__?>\n    <td>Item 1</td>\n  </tr>\n</table>',
        blankAnswer: 'tr',
        options: ['tr', 'td', 'th', 'table'],
        explanation: '`<tr>` stands for Table Row!'
      }
    ]
  },
  {
    id: 10,
    title: '10. The Master Website Blueprint: DOCTYPE, html, head, & body 🏰',
    badgeName: 'HTML Master Legend 👑🌟',
    emoji: '🏰',
    summary: 'Combine everything you learned into a complete, professional HTML web page!',
    analogy: {
      title: 'The Human Body Analogy 🧍‍♂️',
      description: 'Every real web page has a complete skeleton structure! `<!DOCTYPE html>` is the passport. `<html>` is the entire body. `<head>` is the brain (holds title and secret settings). `<body>` is the main body where all visible pictures, text, and buttons live!',
      icon: '🧠'
    },
    explanations: [
      {
        heading: 'Head vs Body',
        text: '`<head>` contains invisible metadata and the browser tab `<title>`. `<body>` contains everything you SEE on screen!'
      }
    ],
    initialCode: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>My Super Web Castle</title>\n  </head>\n  <body>\n    <h1>Welcome to My Website! 🚀</h1>\n    <p>I built this using HTML magic!</p>\n  </body>\n</html>',
    quizzes: [
      {
        prompt: 'Where do visible titles, photos, and buttons live on a web page?',
        snippet: '<__?>\n  <h1>I am visible!</h1>\n</body>',
        blankAnswer: 'body',
        options: ['body', 'head', 'title', 'footer'],
        explanation: '`<body>` holds all visible content that visitors see on screen!'
      }
    ]
  }
];

// STATE VARIABLES
let currentCoderName = localStorage.getItem('codeforfun_user') || '';
let completedModules = JSON.parse(localStorage.getItem('codeforfun_progress') || '[]');
let activeModuleId = 1;
let currentQuizIndex = 0;
let selectedOption = '';

// DOM ELEMENTS
const loginOverlay = document.getElementById('login-overlay');
const loginForm = document.getElementById('login-form');
const kidNameInput = document.getElementById('kid-name-input');
const passcodeInput = document.getElementById('passcode-input');
const loginError = document.getElementById('login-error');

const displayCoderName = document.getElementById('display-coder-name');
const progressBarFill = document.getElementById('progress-bar-fill');
const progressText = document.getElementById('progress-text');
const progressPercent = document.getElementById('progress-percent');

const btnCert = document.getElementById('btn-cert');
const heroCertBtn = document.getElementById('hero-cert-btn');
const certOverlay = document.getElementById('cert-overlay');
const btnCloseCert = document.getElementById('btn-close-cert');

const moduleGrid = document.getElementById('module-grid');
const codeEditor = document.getElementById('code-editor');
const previewIframe = document.getElementById('preview-iframe');

// INITIALIZATION
function initApp() {
  if (currentCoderName) {
    loginOverlay.classList.add('hidden');
    displayCoderName.textContent = currentCoderName;
  } else {
    loginOverlay.classList.remove('hidden');
  }

  updateProgressUI();
  renderModuleGrid();
  loadModule(activeModuleId);
  setupEventListeners();
}

// EVENT LISTENERS
function setupEventListeners() {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const code = passcodeInput.value.trim().toLowerCase();
    if (code === 'codeforfun') {
      const name = kidNameInput.value.trim() || 'Young Coder';
      currentCoderName = name;
      localStorage.setItem('codeforfun_user', name);
      displayCoderName.textContent = name;
      loginOverlay.classList.add('hidden');
      triggerConfetti();
    } else {
      loginError.textContent = 'Oops! Secret passcode is "codeforfun" 🔑 Try typing: codeforfun';
      loginError.classList.remove('hidden');
    }
  });

  document.getElementById('btn-logout').addEventListener('click', () => {
    localStorage.removeItem('codeforfun_user');
    currentCoderName = '';
    loginOverlay.classList.remove('hidden');
  });

  document.getElementById('btn-reset').addEventListener('click', () => {
    if (confirm('Are you sure you want to restart your HTML adventure from Module 1?')) {
      completedModules = [];
      localStorage.removeItem('codeforfun_progress');
      activeModuleId = 1;
      updateProgressUI();
      renderModuleGrid();
      loadModule(1);
    }
  });

  btnCert.addEventListener('click', openCertificate);
  heroCertBtn.addEventListener('click', openCertificate);
  btnCloseCert.addEventListener('click', () => certOverlay.classList.add('hidden'));

  codeEditor.addEventListener('keyup', updateLivePreview);

  document.getElementById('btn-reset-code').addEventListener('click', () => {
    const mod = HTML_MODULES.find(m => m.id === activeModuleId);
    if (mod) {
      codeEditor.value = mod.initialCode;
      updateLivePreview();
    }
  });

  document.getElementById('btn-prev-lesson').addEventListener('click', () => {
    if (activeModuleId > 1) {
      activeModuleId--;
      loadModule(activeModuleId);
    }
  });

  document.getElementById('btn-next-lesson').addEventListener('click', () => {
    if (activeModuleId < HTML_MODULES.length) {
      activeModuleId++;
      loadModule(activeModuleId);
    }
  });

  document.getElementById('btn-quiz-hint').addEventListener('click', () => {
    const hintBox = document.getElementById('quiz-hint-box');
    hintBox.classList.toggle('hidden');
  });

  document.getElementById('btn-check-quiz').addEventListener('click', checkQuizAnswer);
  document.getElementById('btn-next-quiz').addEventListener('click', nextQuizQuestion);
}

// MODULE LOADING & RENDERING
function renderModuleGrid() {
  moduleGrid.innerHTML = '';
  HTML_MODULES.forEach(mod => {
    const isActive = mod.id === activeModuleId;
    const isDone = completedModules.includes(mod.id);

    const btn = document.createElement('button');
    btn.className = `mod-btn ${isActive ? 'active' : ''} ${isDone ? 'completed' : ''}`;
    btn.onclick = () => {
      activeModuleId = mod.id;
      renderModuleGrid();
      loadModule(mod.id);
    };

    btn.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span class="mod-emoji">${mod.emoji}</span>
        ${isDone ? '<span class="checkmark-icon">✅</span>' : ''}
      </div>
      <div>
        <span class="mod-lesson-num">Lesson ${mod.id}</span>
        <div class="mod-title">${mod.title.split('.')[1] || mod.title}</div>
      </div>
    `;
    moduleGrid.appendChild(btn);
  });
}

function loadModule(id) {
  const mod = HTML_MODULES.find(m => m.id === id);
  if (!mod) return;

  activeModuleId = id;
  currentQuizIndex = 0;
  selectedOption = '';

  document.getElementById('lesson-emoji').textContent = mod.emoji;
  document.getElementById('lesson-badge-tag').textContent = `Lesson ${mod.id} of ${HTML_MODULES.length}`;
  document.getElementById('lesson-title').textContent = mod.title;
  document.getElementById('lesson-summary').textContent = mod.summary;
  document.getElementById('lesson-badge-name').textContent = `Badge: ${mod.badgeName}`;

  document.getElementById('analogy-icon').textContent = mod.analogy.icon;
  document.getElementById('analogy-title').textContent = mod.analogy.title;
  document.getElementById('analogy-desc').textContent = mod.analogy.description;

  // EXPLANATIONS
  const expGrid = document.getElementById('explanation-grid');
  expGrid.innerHTML = '';
  mod.explanations.forEach(exp => {
    const div = document.createElement('div');
    div.className = 'exp-box';
    div.innerHTML = `
      <h4>✨ ${exp.heading}</h4>
      <p>${exp.text}</p>
      ${exp.codeExample ? `<div class="code-example-block"><pre>${exp.codeExample}</pre></div>` : ''}
    `;
    expGrid.appendChild(div);
  });

  // QUIZ
  loadQuizQuestion();

  // CODE EDITOR
  codeEditor.value = mod.initialCode;
  updateLivePreview();

  // NAV BUTTONS
  document.getElementById('btn-prev-lesson').disabled = id === 1;
  document.getElementById('btn-next-lesson').disabled = id === HTML_MODULES.length;
  document.getElementById('lesson-counter-tag').textContent = `Module ${id} of ${HTML_MODULES.length}`;

  renderModuleGrid();
}

// QUIZ LOGIC
function loadQuizQuestion() {
  const mod = HTML_MODULES.find(m => m.id === activeModuleId);
  const quiz = mod.quizzes[currentQuizIndex];

  document.getElementById('quiz-progress-tag').textContent = `Fill-in-the-Blanks Quiz (${currentQuizIndex + 1} of ${mod.quizzes.length})`;
  document.getElementById('quiz-prompt').textContent = quiz.prompt;

  const parts = quiz.snippet.split('<__?>');
  document.getElementById('code-before').textContent = parts[0] || '';
  document.getElementById('code-blank').textContent = selectedOption || '___';
  document.getElementById('code-after').textContent = parts[1] || '';

  document.getElementById('quiz-hint-text').textContent = quiz.explanation;
  document.getElementById('quiz-hint-box').classList.add('hidden');

  document.getElementById('quiz-feedback').classList.add('hidden');
  document.getElementById('btn-check-quiz').classList.remove('hidden');
  document.getElementById('btn-next-quiz').classList.add('hidden');

  // OPTIONS
  const optsGrid = document.getElementById('quiz-options-grid');
  optsGrid.innerHTML = '';
  quiz.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = `opt-btn ${selectedOption === opt ? 'selected' : ''}`;
    btn.textContent = opt;
    btn.onclick = () => {
      selectedOption = opt;
      loadQuizQuestion();
    };
    optsGrid.appendChild(btn);
  });
}

function checkQuizAnswer() {
  const mod = HTML_MODULES.find(m => m.id === activeModuleId);
  const quiz = mod.quizzes[currentQuizIndex];
  const feedback = document.getElementById('quiz-feedback');

  if (selectedOption === quiz.blankAnswer) {
    feedback.className = 'feedback-msg correct';
    feedback.textContent = 'SUPER BOOM! That is 100% Correct! 🎉';
    feedback.classList.remove('hidden');
    triggerConfetti();

    document.getElementById('btn-check-quiz').classList.add('hidden');
    document.getElementById('btn-next-quiz').classList.remove('hidden');

    if (!completedModules.includes(activeModuleId)) {
      completedModules.push(activeModuleId);
      localStorage.setItem('codeforfun_progress', JSON.stringify(completedModules));
      updateProgressUI();
      renderModuleGrid();
    }
  } else {
    feedback.className = 'feedback-msg wrong';
    feedback.textContent = 'Almost there! Try another answer option! 💡';
    feedback.classList.remove('hidden');
  }
}

function nextQuizQuestion() {
  const mod = HTML_MODULES.find(m => m.id === activeModuleId);
  if (currentQuizIndex < mod.quizzes.length - 1) {
    currentQuizIndex++;
    selectedOption = '';
    loadQuizQuestion();
  } else {
    alert(`🎉 Module ${activeModuleId} Completed! Badge Unlocked: ${mod.badgeName}`);
    if (activeModuleId < HTML_MODULES.length) {
      activeModuleId++;
      loadModule(activeModuleId);
    }
  }
}

// LIVE CODE PREVIEW
function updateLivePreview() {
  const code = codeEditor.value;
  const doc = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: 'Fredoka', 'Quicksand', sans-serif; padding: 1.25rem; background: #FFFBEB; color: #1E1B4B; }
          h1 { color: #6D28D9; }
          h2 { color: #D97706; }
          h3 { color: #2563EB; }
          p { font-size: 1.05rem; line-height: 1.5; color: #374151; }
          img { max-width: 100%; height: auto; border-radius: 1rem; }
          button { background: linear-gradient(135deg, #F59E0B, #EC4899); color: white; border: none; padding: 0.6rem 1.2rem; font-size: 1rem; font-weight: bold; border-radius: 1rem; cursor: pointer; }
          a { color: #06B6D4; font-weight: bold; text-decoration: underline; }
          ul, ol { padding-left: 1.5rem; }
          table { width: 100%; border-collapse: collapse; margin-top: 0.75rem; background: white; border-radius: 0.5rem; overflow: hidden; }
          th, td { padding: 0.5rem 0.85rem; border-bottom: 1px solid #E5E7EB; text-align: left; }
          th { background: #6D28D9; color: white; }
          input { padding: 0.4rem 0.85rem; border-radius: 0.5rem; border: 2px solid #CBD5E1; }
        </style>
      </head>
      <body>${code}</body>
    </html>
  `;
  previewIframe.srcdoc = doc;
}

// PROGRESS UI & CERTIFICATE
function updateProgressUI() {
  const count = completedModules.length;
  const total = HTML_MODULES.length;
  const percent = Math.round((count / total) * 100);

  progressText.textContent = `Progress (${count}/${total})`;
  progressBarFill.style.width = `${percent}%`;
  progressPercent.textContent = `${percent}%`;

  if (count > 0) {
    btnCert.classList.remove('hidden');
  }
}

function openCertificate() {
  document.getElementById('cert-kid-name').textContent = currentCoderName || 'Master Kid Coder';
  document.getElementById('cert-desc').textContent = `For successfully mastering ${completedModules.length} out of ${HTML_MODULES.length} HTML Modules, learning tags, elements, attributes, headings, photos, forms, and building web pages from scratch!`;
  document.getElementById('cert-date').textContent = new Date().toLocaleDateString();
  certOverlay.classList.remove('hidden');
  triggerConfetti();
}

function triggerConfetti() {
  try {
    if (window.confetti) {
      window.confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    }
  } catch (e) {}
}

// RUN AT STARTUP
document.addEventListener('DOMContentLoaded', initApp);
