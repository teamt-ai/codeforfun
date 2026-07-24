export interface QuizQuestion {
  id: string;
  prompt: string;
  codeSnippet: string;
  blankAnswers: string[];
  options: string[];
  explanation: string;
}

export interface LessonModule {
  id: number;
  slug: string;
  title: string;
  badgeName: string;
  emoji: string;
  color: string;
  bgColor: string;
  summary: string;
  analogy: {
    title: string;
    description: string;
    icon: string;
  };
  explanationSections: {
    heading: string;
    text: string;
    codeExample?: string;
  }[];
  interactiveChallenge: {
    instructions: string;
    initialCode: string;
    targetCode: string;
    hints: string[];
    quizzes: QuizQuestion[];
  };
}

export const HTML_MODULES: LessonModule[] = [
  {
    id: 1,
    slug: 'what-is-html',
    title: '1. What is HTML? The Magic Lego Bricks of the Web!',
    badgeName: 'Lego Architect 🧱',
    emoji: '🧱',
    color: '#8B5CF6',
    bgColor: '#F5F3FF',
    summary: 'Discover how web pages are built just like Lego castles using magic tags!',
    analogy: {
      title: 'Imagine Building a Toy Castle 🏰',
      description: 'HTML stands for HyperText Markup Language. Think of HTML as a giant box of colorful Lego bricks! Just like you snap blue bricks for walls and red bricks for roofs, HTML uses special tags like <h1> and <p> to snap titles, stories, and photos onto your computer screen!',
      icon: '🧩'
    },
    explanationSections: [
      {
        heading: 'What is a Tag?',
        text: 'A tag is a magic label wrapped in angle brackets `<` and `>`. Tags come in pairs! An opening tag `<h1>` says "Start Title!", and a closing tag `</h1>` (with a slash `/`) says "Stop Title!"'
      },
      {
        heading: 'Why do we need Tags?',
        text: 'Computers are super fast, but they need clear instructions! Without tags, a computer just sees a big pile of messy words. Tags tell the computer: "Hey! Make this big, make this a photo, and make this a button!"',
        codeExample: '<h1>My Awesome Pet Dragon 🐉</h1>\n<p>His name is Sparky and he loves tacos!</p>'
      }
    ],
    interactiveChallenge: {
      instructions: 'Help Sparky the Dragon! Fill in the missing closing tag `</h1>` to make his title big and proud!',
      initialCode: '<h1>Welcome to Dragon Land<__?>\n<p>Touch the screen to feed Sparky!</p>',
      targetCode: '<h1>Welcome to Dragon Land</h1>\n<p>Touch the screen to feed Sparky!</p>',
      hints: ['Closing tags ALWAYS start with a slash `/`!', 'Look for `/h1`!'],
      quizzes: [
        {
          id: 'q1-1',
          prompt: 'Which magic tag tells the computer to START a big title?',
          codeSnippet: '<__?>My Secret Treasure Chest</h1>',
          blankAnswers: ['h1'],
          options: ['h1', '/h1', 'title', 'box'],
          explanation: '`<h1>` is the opening tag for the biggest, boldest title on a web page!'
        },
        {
          id: 'q1-2',
          prompt: 'What special symbol goes inside a CLOSING tag to say "STOP"?',
          codeSnippet: '<__?>h1>',
          blankAnswers: ['/'],
          options: ['/', '!', '#', '*'],
          explanation: 'The slash `/` is the magic "stop" sign for closing tags!'
        }
      ]
    }
  },
  {
    id: 2,
    slug: 'headings',
    title: '2. Headings & Titles: From Giant Kings to Tiny Knights! 👑',
    badgeName: 'Royal Crown 👑',
    emoji: '👑',
    color: '#F59E0B',
    bgColor: '#FFFBEB',
    summary: 'Learn h1, h2, h3, h4, h5, and h6 to make titles of all shapes and sizes!',
    analogy: {
      title: 'The Royal Heading Family 🏰',
      description: 'HTML has 6 heading tags, from <h1> to <h6>. Think of <h1> as the Giant King Heading (the biggest!), <h2> as the Queen Heading, <h3> as the Prince, down to <h6> as the tiny Mouse Knight!',
      icon: '👑'
    },
    explanationSections: [
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
    interactiveChallenge: {
      instructions: 'Make a Super Rocket Title using `<h1>` and a Chapter Heading using `<h2>`!',
      initialCode: '<__?>Super Rocket Academy</h1>\n<__?>Chapter 1: Blast Off!</h2>',
      targetCode: '<h1>Super Rocket Academy</h1>\n<h2>Chapter 1: Blast Off!</h2>',
      hints: ['Use `h1` for the main title!', 'Use `h2` for the chapter heading!'],
      quizzes: [
        {
          id: 'q2-1',
          prompt: 'Which heading tag makes the BIGGEST title on the whole page?',
          codeSnippet: '<__?>The Giant Alien Ship</h1>',
          blankAnswers: ['h1'],
          options: ['h1', 'h6', 'h10', 'big'],
          explanation: '`<h1>` is the King of headings — the largest title available!'
        },
        {
          id: 'q2-2',
          prompt: 'Fill in the missing tag for a medium chapter title:',
          codeSnippet: '<h2>Chapter 2: The Moon Base<__?>',
          blankAnswers: ['/h2'],
          options: ['/h2', '/h1', '/h6', '/title'],
          explanation: '`</h2>` closes the medium `<h2>` chapter title cleanly!'
        }
      ]
    }
  },
  {
    id: 3,
    slug: 'paragraphs',
    title: '3. Paragraphs & Storytelling: Typing with `<p>` 📖',
    badgeName: 'Story Wizard 🧙‍♂️',
    emoji: '📖',
    color: '#10B981',
    bgColor: '#ECFDF5',
    summary: 'Write stories, fun facts, and messages using the paragraph tag!',
    analogy: {
      title: 'Your Digital Notebook 📝',
      description: 'The `<p>` tag stands for Paragraph! Whenever you want to write a story sentence, a joke, or a description of your pet, you wrap your text inside `<p>` and `</p>`. It tells the computer to put space around your text like a nice clean paragraph in a book.',
      icon: '✍️'
    },
    explanationSections: [
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
    interactiveChallenge: {
      instructions: 'Complete the pet story by adding `<p>` and `</p>` around the story sentences!',
      initialCode: '<h1>My Flying Puppy 🐶</h1>\n<__?>Barnaby is a golden retriever with tiny blue wings.</p>\n<p>He loves eating cheese in the clouds!<__?>',
      targetCode: '<h1>My Flying Puppy 🐶</h1>\n<p>Barnaby is a golden retriever with tiny blue wings.</p>\n<p>He loves eating cheese in the clouds!</p>',
      hints: ['Start paragraphs with `<p>`!', 'Close paragraphs with `</p>`!'],
      quizzes: [
        {
          id: 'q3-1',
          prompt: 'What tag is used to write regular story sentences or paragraphs?',
          codeSnippet: '<__?>I love playing video games with my friends.</p>',
          blankAnswers: ['p'],
          options: ['p', 'story', 'text', 'para'],
          explanation: '`<p>` stands for Paragraph!'
        }
      ]
    }
  },
  {
    id: 4,
    slug: 'images',
    title: '4. Magic Photos & Pictures: `<img>`, `src` & `alt` 🖼️',
    badgeName: 'Photo Wizard 📸',
    emoji: '🖼️',
    color: '#EC4899',
    bgColor: '#FDF2F8',
    summary: 'Show awesome pictures on your web page using img, src, and alt attributes!',
    analogy: {
      title: 'The Magical Picture Frame 🖼️',
      description: 'The `<img>` tag is a photo frame! But a frame needs a picture inside it! We use `src="..."` (Source) to give the computer the web address of the picture. And we use `alt="..."` (Alternative Text) as a secret whisper to describe what the photo shows!',
      icon: '🖼️'
    },
    explanationSections: [
      {
        heading: 'The Self-Closing Magic!',
        text: 'Unlike `<h1>` or `<p>`, the `<img>` tag is a SOLO HERO! It does NOT need a closing `</img>` tag because the picture lives entirely inside the attributes!'
      },
      {
        heading: 'Image Example',
        text: 'Here is how you display a cute kitten picture on a website:',
        codeExample: '<img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300" alt="A fluffy superhero dog looking awesome">'
      }
    ],
    interactiveChallenge: {
      instructions: 'Fix the photo frame by adding `src` and `alt` to display the superhero puppy picture!',
      initialCode: '<img __?>="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300" __?>="Superhero puppy looking cool" />',
      targetCode: '<img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300" alt="Superhero puppy looking cool" />',
      hints: ['`src` specifies WHERE the image lives!', '`alt` gives a description!'],
      quizzes: [
        {
          id: 'q4-1',
          prompt: 'Which attribute tells the computer WHERE to find the photo file or image link?',
          codeSnippet: '<img __?>="cute_dog.jpg" alt="A cute dog">',
          blankAnswers: ['src'],
          options: ['src', 'link', 'url', 'photo'],
          explanation: '`src` stands for Source — the address where the picture is located!'
        },
        {
          id: 'q4-2',
          prompt: 'Does `<img>` require a closing `</img>` tag?',
          codeSnippet: '<img src="cat.png" alt="Cat"><__?>',
          blankAnswers: [''],
          options: ['No, img is self-closing!', 'Yes, always </img>', 'Only on Sundays', 'Only for big photos'],
          explanation: '`<img>` is a self-closing tag — it doesn\'t need `</img>`!'
        }
      ]
    }
  },
  {
    id: 5,
    slug: 'links-and-buttons',
    title: '5. Teleport Portals & Action Buttons: `<a>` & `<button>` 🚀',
    badgeName: 'Portal Master 🌀',
    emoji: '🌀',
    color: '#06B6D4',
    bgColor: '#ECFEFF',
    summary: 'Build clickable teleport links with <a> and interactive action buttons with <button>!',
    analogy: {
      title: 'Teleportation Portals! 🌌',
      description: 'The `<a>` tag stands for Anchor (or Portal!). When you click an `<a>` link with `href="https://..."`, your browser instantly teleports to a new web page! The `<button>` tag creates a satisfying clicky button for games and popups!',
      icon: '🚀'
    },
    explanationSections: [
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
    interactiveChallenge: {
      instructions: 'Complete the teleport link with `href` and the launch button with `<button>`!',
      initialCode: '<a __?>="https://google.com">Teleport to Search Engine</a>\n<__?>Press to Play Sound!</button>',
      targetCode: '<a href="https://google.com">Teleport to Search Engine</a>\n<button>Press to Play Sound!</button>',
      hints: ['Use `href` for links!', 'Use `<button>` for clicky buttons!'],
      quizzes: [
        {
          id: 'q5-1',
          prompt: 'Which attribute inside `<a>` specifies the destination URL portal address?',
          codeSnippet: '<a __?>="https://codeforfun.com">Play Code Games</a>',
          blankAnswers: ['href'],
          options: ['href', 'target', 'go', 'to'],
          explanation: '`href` holds the link web address!'
        }
      ]
    }
  },
  {
    id: 6,
    slug: 'lists',
    title: '6. Lists & Inventories: `<ul>`, `<ol>`, & `<li>` 📋',
    badgeName: 'Inventory Hero 🎒',
    emoji: '📋',
    color: '#3B82F6',
    bgColor: '#EFF6FF',
    summary: 'Organize items using bullet lists (ul), numbered lists (ol), and list items (li)!',
    analogy: {
      title: 'Your Gamer Backpack Inventory 🎒',
      description: 'Imagine opening your video game inventory bag! Bullet lists `<ul>` (Unordered List) show dots for items like snacks or toys. Numbered lists `<ol>` (Ordered List) show 1, 2, 3 steps for high scores or baking recipes! Every item inside uses `<li>` (List Item).',
      icon: '🎒'
    },
    explanationSections: [
      {
        heading: 'How Lists Work Together',
        text: '`<ul>` or `<ol>` is the outer container box. `<li>` wraps each item inside the box!'
      },
      {
        heading: 'List Example',
        text: 'Check out a player inventory list:',
        codeExample: '<h2>🎒 My Superhero Kit</h2>\n<ul>\n  <li>Laser Goggles</li>\n  <li>Flying Boots</li>\n  <li>Invisible Cloak</li>\n</ul>'
      }
    ],
    interactiveChallenge: {
      instructions: 'Build a top 3 favorite games list using `<ol>` (Ordered List) and `<li>`!',
      initialCode: '<ol>\n  <__?>Minecraft</li>\n  <li>Roblox</li>\n  <li>Super Mario<__?>\n</ol>',
      targetCode: '<ol>\n  <li>Minecraft</li>\n  <li>Roblox</li>\n  <li>Super Mario</li>\n</ol>',
      hints: ['Opening list item tag is `<li>`!', 'Closing list item tag is `</li>`!'],
      quizzes: [
        {
          id: 'q6-1',
          prompt: 'Which tag wraps EACH individual item inside a list?',
          codeSnippet: '<ul>\n  <__?>Golden Sword</li>\n</ul>',
          blankAnswers: ['li'],
          options: ['li', 'ul', 'ol', 'item'],
          explanation: '`<li>` stands for List Item!'
        }
      ]
    }
  },
  {
    id: 7,
    slug: 'containers-div-span',
    title: '7. Toy Boxes & Highlighters: `<div>` & `<span>` 📦',
    badgeName: 'Box Stacker 📦',
    emoji: '📦',
    color: '#D97706',
    bgColor: '#FFFBEB',
    summary: 'Group big sections using div boxes and highlight special text using span!',
    analogy: {
      title: 'Toy Boxes & Magic Highlighters 📦',
      description: 'Think of `<div>` as a giant plastic storage box to group toys together on a shelf. Think of `<span>` as a neon yellow highlighter marker to make a single word pop out inside a sentence!',
      icon: '📦'
    },
    explanationSections: [
      {
        heading: 'Block vs Inline Containers',
        text: '`<div>` takes up a full new block line. `<span>` sits inline inside a sentence without breaking the text flow!'
      },
      {
        heading: 'Div & Span Example',
        text: 'Combining `<div>` and `<span>` for styling:',
        codeExample: '<div style="background-color: lightyellow; padding: 10px;">\n  <p>The dragon had <span style="color: red;">fire-red</span> scales!</p>\n</div>'
      }
    ],
    interactiveChallenge: {
      instructions: 'Wrap the text box inside `<div>` and highlight the magic word with `<span>`!',
      initialCode: '<__?>\n  <p>I found a <__?>rainbow</span> crystal in the cave!</p>\n</div>',
      targetCode: '<div>\n  <p>I found a <span>rainbow</span> crystal in the cave!</p>\n</div>',
      hints: ['Outer container starts with `<div>`!', 'Inner highlight starts with `<span>`!'],
      quizzes: [
        {
          id: 'q7-1',
          prompt: 'Which container tag is used to group big layout blocks and sections on a web page?',
          codeSnippet: '<__?>\n  <h1>Welcome to my Fortress</h1>\n</div>',
          blankAnswers: ['div'],
          options: ['div', 'span', 'box', 'section'],
          explanation: '`<div>` (Divider / Division) is the ultimate container box in HTML!'
        }
      ]
    }
  },
  {
    id: 8,
    slug: 'inputs-and-forms',
    title: '8. Interactive Forms & Inputs: Asking Questions! 🎮',
    badgeName: 'Game Controller 🎮',
    emoji: '🎮',
    color: '#8B5CF6',
    bgColor: '#F5F3FF',
    summary: 'Let players type names, pick colors, check boxes, and slide controls with input!',
    analogy: {
      title: 'Your Video Game Character Creator 🎮',
      description: 'Ever created a character in a game where you type your hero name, pick your armor color, and slide your power levels? That is made with `<input>` tags inside a `<form>`!',
      icon: '🎮'
    },
    explanationSections: [
      {
        heading: 'Input Types',
        text: '`<input type="text">` creates a typing box. `<input type="color">` opens a color picker! `<input type="checkbox">` makes a check box!'
      },
      {
        heading: 'Form Example',
        text: 'Creating a mini player profile form:',
        codeExample: '<form>\n  <label>Hero Name:</label>\n  <input type="text" placeholder="Enter name">\n  <label>Favorite Color:</label>\n  <input type="color">\n</form>'
      }
    ],
    interactiveChallenge: {
      instructions: 'Set `type="text"` for the hero name and `type="color"` for the cape color!',
      initialCode: '<label>Hero Name:</label>\n<input type="__?">\n<label>Cape Color:</label>\n<input type="__?">',
      targetCode: '<label>Hero Name:</label>\n<input type="text">\n<label>Cape Color:</label>\n<input type="color">',
      hints: ['Use `text` for typing names!', 'Use `color` for picking colors!'],
      quizzes: [
        {
          id: 'q8-1',
          prompt: 'Which input type lets a player type text sentences into a web page?',
          codeSnippet: '<input type="__?">',
          blankAnswers: ['text'],
          options: ['text', 'color', 'checkbox', 'range'],
          explanation: '`type="text"` creates a text box for typing!'
        }
      ]
    }
  },
  {
    id: 9,
    slug: 'tables',
    title: '9. Leaderboard Tables: `<table>`, `<tr>`, `<th>`, & `<td>` 🏆',
    badgeName: 'Score Master 🏆',
    emoji: '🏆',
    color: '#10B981',
    bgColor: '#ECFDF5',
    summary: 'Build high-score leaderboards and game stats using HTML tables!',
    analogy: {
      title: 'The High Score Leaderboard Board 📊',
      description: 'A table is like a grid game board! `<table>` is the table board. `<tr>` (Table Row) is a horizontal row from left to right. `<th>` (Table Header) is a bold column header title. `<td>` (Table Data) is the individual score cell!',
      icon: '🏆'
    },
    explanationSections: [
      {
        heading: 'Table Anatomy',
        text: 'Rows `<tr>` hold data cells `<td>` side by side like Lego tiles in a row.'
      },
      {
        heading: 'Table Example',
        text: 'Check out a game leaderboard:',
        codeExample: '<table>\n  <tr>\n    <th>Player</th>\n    <th>Score</th>\n  </tr>\n  <tr>\n    <td>Alex</td>\n    <td>9,500 pts</td>\n  </tr>\n</table>'
      }
    ],
    interactiveChallenge: {
      instructions: 'Complete the leaderboard table row `<tr>` and data cell `<td>`!',
      initialCode: '<table>\n  <__?>\n    <th>Player</th>\n    <th>Level</th>\n  </tr>\n  <tr>\n    <__?>Wizard Bob</td>\n    <td>Level 99</td>\n  </tr>\n</table>',
      targetCode: '<table>\n  <tr>\n    <th>Player</th>\n    <th>Level</th>\n  </tr>\n  <tr>\n    <td>Wizard Bob</td>\n    <td>Level 99</td>\n  </tr>\n</table>',
      hints: ['Table row starts with `<tr>`!', 'Table data starts with `<td>`!'],
      quizzes: [
        {
          id: 'q9-1',
          prompt: 'Which tag creates a horizontal row inside a table?',
          codeSnippet: '<table>\n  <__?>\n    <td>Item 1</td>\n  </tr>\n</table>',
          blankAnswers: ['tr'],
          options: ['tr', 'td', 'th', 'table'],
          explanation: '`<tr>` stands for Table Row!'
        }
      ]
    }
  },
  {
    id: 10,
    slug: 'html-doc-structure',
    title: '10. The Master Website Blueprint: DOCTYPE, html, head, & body 🏰',
    badgeName: 'HTML Master Legend 👑🌟',
    emoji: '🏰',
    color: '#7C3AED',
    bgColor: '#F5F3FF',
    summary: 'Combine everything you learned into a complete, professional HTML web page!',
    analogy: {
      title: 'The Human Body Analogy 🧍‍♂️',
      description: 'Every real web page has a complete skeleton structure! `<!DOCTYPE html>` is the passport. `<html>` is the entire body. `<head>` is the brain (holds title and secret settings). `<body>` is the main body where all visible pictures, text, and buttons live!',
      icon: '🧠'
    },
    explanationSections: [
      {
        heading: 'Head vs Body',
        text: '`<head>` contains invisible metadata and the browser tab `<title>`. `<body>` contains everything you SEE on screen!'
      },
      {
        heading: 'Complete Web Page Blueprint',
        text: 'Here is the complete template of every website on planet Earth:',
        codeExample: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>My Super Web Castle</title>\n  </head>\n  <body>\n    <h1>Welcome to My Website!</h1>\n    <p>I built this using HTML magic!</p>\n  </body>\n</html>'
      }
    ],
    interactiveChallenge: {
      instructions: 'Complete the Master Web Blueprint by adding `<head>` and `<body>`!',
      initialCode: '<!DOCTYPE html>\n<html>\n  <__?>\n    <title>CodeForFun Champion</title>\n  </head>\n  <__?>\n    <h1>I am an HTML Developer! 🚀</h1>\n  </body>\n</html>',
      targetCode: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>CodeForFun Champion</title>\n  </head>\n  <body>\n    <h1>I am an HTML Developer! 🚀</h1>\n  </body>\n</html>',
      hints: ['Invisible settings go inside `<head>`!', 'Visible content goes inside `<body>`!'],
      quizzes: [
        {
          id: 'q10-1',
          prompt: 'Where do visible titles, photos, and buttons live on a web page?',
          codeSnippet: '<__?>\n  <h1>I am visible!</h1>\n</body>',
          blankAnswers: ['body'],
          options: ['body', 'head', 'title', 'footer'],
          explanation: '`<body>` holds all visible content that visitors see on screen!'
        }
      ]
    }
  }
];
