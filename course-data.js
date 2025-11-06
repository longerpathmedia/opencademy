// Course Configuration
const COURSE_ID = 'startups-101';
const COURSE_TITLE = 'How to Start a Startup 101';

const MODULES = [
  {
    title: 'Module 1 · Idea Generation',
    description: 'How to notice problems and turn them into viable startup ideas.',
    lessons: [
      { id: 'm1l1', title: 'Paul Graham: don\'t try to come up with startup ideas', url: 'https://www.youtube.com/watch?v=FlCWg-KkUN4', duration: '3:42' },
      { id: 'm1l2', title: 'Kevin Systrom: make sure you\'re solving a real problem', url: 'https://www.youtube.com/watch?v=iQmrJ9SYRe4', duration: '2:18' },
      { id: 'm1l3', title: 'Michael Seibel: what\'s the frequency & intensity of the problem?', url: 'https://www.youtube.com/watch?v=L3zqlv-5H6U', duration: '3:29' },
      { id: 'm1l4', title: 'Aaron Levie: ideas for enterprise software startups', url: 'https://www.youtube.com/watch?v=Q-3BZqGBGLw', duration: '1:38' },
      { id: 'm1l5', title: 'Marc Andreesen: many big tech companies started as products first', url: 'https://www.youtube.com/watch?v=LZT-S08IaMk', duration: '1:42' }
    ]
  },
  {
    title: 'Module 2 · Market Definition',
    description: 'Start with a well-defined, narrow slice of your target market.',
    lessons: [
      { id: 'm2l1', title: 'Peter Thiel: start with a small market and expand from there', url: 'https://www.youtube.com/watch?v=0C1H0_Uv1us', duration: '4:31' },
      { id: 'm2l2', title: 'Jim Goetz: solve a specific problem for a specific customer', url: 'https://www.youtube.com/watch?v=awQfAMWoMjE', duration: '1:53' },
      { id: 'm2l3', title: 'Max Levchin: how Yelp got started with local reviews', url: 'https://www.youtube.com/watch?v=39M073zfzi8', duration: '1:05' },
      { id: 'm2l4', title: 'Paul Graham: start with a small, intense fire', url: 'https://www.youtube.com/watch?v=rCkCA1EaoVo', duration: '2:29' },
      { id: 'm2l5', title: 'Paul Buchheit: build something that 100 people love', url: 'https://www.youtube.com/watch?v=sj-jSMS6H9o', duration: '3:39' }
    ]
  },
  {
    title: 'Module 3 · Founding Team',
    description: 'What makes a great founding team? How do you choose a co-founder?',
    lessons: [
      { id: 'm3l1', title: 'Dalton Caldwell: what founders of great companies have in common', url: 'https://www.youtube.com/watch?v=za3pNcCi2u0', duration: '2:22' },
      { id: 'm3l2', title: 'Sam Altman: advice for solo founders', url: 'https://www.youtube.com/watch?v=MdUxyY7W8PE', duration: '1:22' },
      { id: 'm3l3', title: 'Ben Horowitz: four principles to choosing a co-founder', url: 'https://www.youtube.com/watch?v=-P-n-NjjVm0', duration: '2:55' },
      { id: 'm3l4', title: 'Paul Graham: in the best startups, each founder is king of their own domain', url: 'https://www.youtube.com/watch?v=Wu4ZXHOvgH8', duration: '0:44' },
      { id: 'm3l5', title: 'Brian Chesky: what the Airbnb co-founders established early on', url: 'https://www.youtube.com/watch?v=cEeN7VIo7nI', duration: '2:31' }
    ]
  },
  {
    title: 'Module 4 · Validation & Minimum Viable Product (MVP)',
    description: 'Lean validation techniques and the art of building an MVP—the smallest possible product you can build to start learning.',
    lessons: [
      { id: 'm4l1', title: 'Eric Migicovsky: five questions for user interviews', url: 'https://www.youtube.com/watch?v=tb1oyRXVyKw', duration: '6:36' },
      { id: 'm4l2', title: 'Eric Migicovsky: three common user interview mistakes', url: 'https://www.youtube.com/watch?v=rOjp8vq2Sd8', duration: '2:07' },
      { id: 'm4l3', title: 'Aaron Levie (Box): start with something ridiculously simple', url: 'https://www.youtube.com/watch?v=BDqqYmtAsfA', duration: '2:30' },
      { id: 'm4l4', title: 'Michael Seibel (YC): build a very lean MVP', url: 'https://www.youtube.com/watch?v=iEAW4-B_vuI', duration: '3:14' },
      { id: 'm4l5', title: 'Stanley Tang: lessons from starting DoorDash', url: 'https://www.youtube.com/watch?v=0xnrf0V6sEo', duration: '5:46' }
    ]
  },
  {
    title: 'Module 5 · Launching',
    description: 'Launch your product early and iterate from there.',
    lessons: [
      { id: 'm5l1', title: 'Paul Graham: launch as soon as you have a quantum of utility', url: 'https://www.youtube.com/watch?v=xiFINZVtjQ4', duration: '0:59' },
      { id: 'm5l2', title: 'Sam Altman: four strategies to get your first 100 users', url: 'https://www.youtube.com/watch?v=4XEJCR23yec', duration: '1:36' },
      { id: 'm5l3', title: 'Kevin Systrom: launch lessons from Instagram\'s early days', url: 'https://www.youtube.com/watch?v=0YpDgyf9jKs', duration: '3:04' },
      { id: 'm5l4', title: 'Michael Seibel: the four goals of a pre-launch startup', url: 'https://www.youtube.com/watch?v=W_i-V8VH2yg', duration: '2:35' }, 
      { id: 'm5l5', title: 'Michael Seibel: start with the most desperate customers', url: 'https://www.youtube.com/watch?v=r1fnTC3mfyc', duration: '2:42' },  
    ]
  },
  {
    title: 'Module 6 · Product-Market Fit (PMF)',
    description: 'PMF is the holy grail for early-stage startup - iterate until you find it.',
    lessons: [
      { id: 'm6l1', title: 'Brian Armstrong: pre-PMF? only do these two things', url: 'https://www.youtube.com/watch?v=EcHmRnpQg_I', duration: '1:32' },
      { id: 'm6l2', title: 'Brian Chesky: doing things that don\'t scale at Airbnb', url: 'https://www.youtube.com/watch?v=XPRxaWZhwQ0', duration: '2:23' },
      { id: 'm6l3', title: 'Patrick Collison: understanding early user behavior', url: 'https://www.youtube.com/watch?v=9XWvUJhrbNk', duration: '2:13' },
      { id: 'm6l4', title: 'Peter Reinhardt: using sales qualification for B2B product development', url: 'https://www.youtube.com/watch?v=_qibdVVmj8E', duration: '2:57' },
      { id: 'm6l5', title: 'Sam Altman: make sure you have some users that really love your product', url: 'https://www.youtube.com/watch?v=3MyBdh479Xk', duration: '1:01' },     
    ]
  },
  {
    title: 'Module 7 · Pivoting',
    description: 'If you can\'t find PMF, how do you know when it\'s time to change direction?',
    lessons: [
      { id: 'm7l1', title: 'Elad Gil (Color Health): things that work tend to work pretty fast', url: 'https://www.youtube.com/watch?v=gsAKObZcPw8', duration: '2:51' },
      { id: 'm7l2', title: 'Kevin Systrom: most successful things are pivots', url: 'https://www.youtube.com/watch?v=oHyQBqMSqeI', duration: '3:09' },
      { id: 'm7l3', title: 'Kevin Systrom: how he pivoted from Burbn to Instagram', url: 'https://www.youtube.com/watch?v=nOLF1t79PwI', duration: '4:54' }, 
      { id: 'm7l4', title: 'Ben Horowitz: the story of Slack\'s pivot from a video game', url: 'https://www.youtube.com/watch?v=5Mb69m5UoKE', duration: '3:16' },
      { id: 'm7l5', title: 'Dalton Caldwell: characteristics of a good pivot', url: 'https://www.youtube.com/watch?v=AWlzD-4CBnw', duration: '2:20' }
    ]
  },
  {
    title: 'Module 8 · Early Stage Advice',
    description: 'General startup advice as you go from 0 to 1.',
    lessons: [
      { id: 'm8l1', title: 'Dalton Caldwell: growth hacking is a waste of time at the early stage', url: 'https://www.youtube.com/watch?v=bFjmahaE9YE', duration: '1:26' },
      { id: 'm8l2', title: 'Dalton Caldwell: spend 20-30% of your time talking to customers', url: 'https://www.youtube.com/watch?v=R6PRjlwJ_KY', duration: '2:47' },
      { id: 'm8l3', title: 'Naval Ravikant: stay small until you’ve figured out what’s working', url: 'https://www.youtube.com/watch?v=8cYqUYrZnL4', duration: '0:24' },
      { id: 'm8l4', title: 'Elon Musk: actively seek out negative feedback', url: 'https://www.youtube.com/watch?v=QTY3o_fseo4', duration: '0:41' },
      { id: 'm8l5', title: 'Jason Fried: learn what your customers really want', url: 'https://www.youtube.com/watch?v=R5zjYTok0wA', duration: '2:38' }
    ]
  }
];

