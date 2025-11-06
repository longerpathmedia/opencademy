// Course Configuration
const COURSE_ID = 'startups-102';
const COURSE_TITLE = 'How to Start a Startup 102';

const MODULES = [
 
  {
    title: 'Module 1 · Building Products',
    description: 'Great products don\'t happen by accident.',
    lessons: [
      { id: 'm1l1', title: 'Sam Altman: at some point, people have to spontaneously tell their friends', url: 'https://www.youtube.com/watch?v=akUudSvPSdo', duration: '1:15' },
      { id: 'm1l2', title: 'Scott Belsky: nail the first-mile experience', url: 'https://www.youtube.com/watch?v=T0aN1JcF1ZY', duration: '3:25' },
      { id: 'm1l3', title: 'Daniel Ek: how can you make the user\'s journey shorter?', url: 'https://www.youtube.com/watch?v=y4t3xb9EALs', duration: '1:11' },
      { id: 'm1l4', title: 'Vlad Tenev: one screen, one button, one core action', url: 'https://www.youtube.com/watch?v=4ahQo-6FbbU', duration: '1:17' },  
      { id: 'm1l5', title: 'Aravind Srinivas: Larry Page\'s “the user is never wrong” philosophy', url: 'https://www.youtube.com/watch?v=avX_MbYv79g', duration: '1:56' }
    ]
  },
  {
    title: 'Module 2 · Go To Market',
    description: 'Quick advice on marketing, pricing, and distribution.',
    lessons: [
      { id: 'm2l1', title: 'Andy Rachleff: advertising can distract you from PMF', url: 'https://www.youtube.com/watch?v=75BTnMVesqM', duration: '1:07' },
      { id: 'm2l2', title: 'Kevin Hale: why startups get pricing wrong', url: 'https://www.youtube.com/watch?v=_SsRT6x3SJ8', duration: '3:05' },
      { id: 'm2l3', title: 'David Sacks: innovate on distribution, not just product', url: 'https://www.youtube.com/watch?v=LkktnOG4Xmo', duration: '3:48' },
      { id: 'm2l4', title: 'Drew Houston: growth hacks used by Dropbox early on', url: 'https://www.youtube.com/watch?v=QE8upulWcIg', duration: '2:21' },
      { id: 'm2l5', title: 'Aaron Levie: enterprise software can be viral, too', url: 'https://www.youtube.com/watch?v=uFIEjdtz9eg', duration: '1:34' }
    ]
  },
  {
    title: 'Module 3 · Metrics',
    description: 'What to track - and how to track it.',
    lessons: [
      { id: 'm3l1', title: 'Michael Seibel: the basics of setting up startup metrics', url: 'https://www.youtube.com/watch?v=NusMLpT9NbY', duration: '4:02' },
      { id: 'm3l2', title: 'Adam D’Angelo: cohort retention and key startup metrics', url: 'https://www.youtube.com/watch?v=4V9VLnH4ZJk', duration: '7:30' },
      { id: 'm3l3', title: 'Suhail Doshi: commit to one North Star metric', url: 'https://www.youtube.com/watch?v=ZpcWja4d4i4', duration: '1:47' },
      { id: 'm3l4', title: 'Suhail Doshi: a simple framework for understanding growth', url: 'https://www.youtube.com/watch?v=93HgcXuxy0E', duration: '3:24' },
      { id: 'm3l5', title: 'Alex Schultz: how to measure and assess virality', url: 'https://www.youtube.com/watch?v=XOqShs8Od80', duration: '9:58' }
    ]
  },
  {
    title: 'Module 4 · Competition',
    description: 'How to think (or not think) about your competitors.',
    lessons: [
      { id: 'm4l1', title: 'Jeff Bezos: obsess over customers, not competitors', url: 'https://www.youtube.com/watch?v=iFAg7g9BKoU', duration: '0:57' },
      { id: 'm4l2', title: 'Jan Koum: worry about product and users instead', url: 'https://www.youtube.com/watch?v=2mYwuQ6iylc', duration: '1:20' },
      { id: 'm4l3', title: 'Aaron Levie: do something that an incumbent can\'t do', url: 'https://www.youtube.com/watch?v=Ufu9BkAYUK8', duration: '1:20' },
      { id: 'm4l4', title: 'Tony Xu: you can\'t compete against an incumbent on their territory', url: 'https://www.youtube.com/watch?v=Ts0koAKnGJI', duration: '1:33' },
      { id: 'm4l5', title: 'Alfred Lin: the best companies never talk about the competition', url: 'https://www.youtube.com/watch?v=rvbmSQV9o7Y', duration: '0:38' },
    ]
  },
  {
    title: 'Module 5 · Pitching & Raising Money',
    description: 'How to tell the story of your startup. The basics of raising Venture Capital.',
    lessons: [
      { id: 'm5l1', title: 'Michael Seibel: how to create a great startup pitch', url: 'https://www.youtube.com/watch?v=UrdqXffoOUo', duration: '7:36' },
      { id: 'm5l2', title: 'Travis Kalanick: go as long as you can without raising money', url: 'https://www.youtube.com/watch?v=REIIjrlcDBI', duration: '1:14' },
      { id: 'm5l3', title: 'Marc Andreessen: have a prototype ready to show investors', url: 'https://www.youtube.com/watch?v=PiTSl85Owxs', duration: '1:44' },
      { id: 'm5l4', title: 'Naval Ravikant: VC is an emotional sale', url: 'https://www.youtube.com/watch?v=Qf7nvOzqiXc', duration: '2:53' },
      { id: 'm5l5', title: 'Elad Gil: too many raise money when they shouldn\'t', url: 'https://www.youtube.com/watch?v=UDqMUJzOg9A', duration: '2:28' }
    ]
  },
  {
    title: 'Module 6 · Hiring',
    description: 'You\'re only as strong as the team around you - here\'s how to build a great one.',
    lessons: [
      { id: 'm6l1', title: 'Jason Fried (Basecamp): do the job first before you hire someone to do it', url: 'https://www.youtube.com/watch?v=4ua5y1PKyxk', duration: '2:36' },
      { id: 'm6l2', title: 'Naval Ravikant: why you should hire high-agency people', url: 'https://www.youtube.com/watch?v=U8srC2ivSJw', duration: '2:55' },
      { id: 'm6l3', title: 'Eric Schmidt: hire the divas', url: 'https://www.youtube.com/watch?v=w5gcf-sNnvI', duration: '0:40' },
      { id: 'm6l4', title: 'Sam Altman: hire for values first, aptitude second, and skills third', url: 'https://www.youtube.com/watch?v=6s9Dy06BiVM', duration: '0:58' },
      { id: 'm6l5', title: 'Jack Dorsey: you have to constantly edit the team', url: 'https://www.youtube.com/watch?v=g-aB3CnuFGU', duration: '1:40' },
    ]
  },
  {
    title: 'Module 7 · Culture',
    description: 'Culture is often misunderstood and overlooked - but critical to long term success.',
    lessons: [
      { id: 'm7l1', title: 'Brian Chesky: importance of having great core values', url: 'https://www.youtube.com/watch?v=5vSZY87IoV4', duration: '1:49' },
      { id: 'm7l2', title: 'Jeff Bezos: have a culture that supports truth-telling', url: 'https://www.youtube.com/watch?v=f79bfju-mEA', duration: '5:14' },
      { id: 'm7l3', title: 'Jack Dorsey: lessons on culture from Bill Walsh', url: 'https://www.youtube.com/watch?v=LM-Y88tucCE', duration: '3:14' },
      { id: 'm7l4', title: 'Sam Altman: what startups get wrong about culture', url: 'https://www.youtube.com/watch?v=Y3DfsEw-yog', duration: '2:34' },
      { id: 'm7l5', title: 'Ben Horowitz: to define culture, understand who you want to be', url: 'https://www.youtube.com/watch?v=OTSrD2xQ5cE', duration: '1:36' }
    ]
  },
  {
    title: 'Module 8 · Leadership',
    description: 'Advice as you progress from founder to CEO.',
    lessons: [
      { id: 'm8l1', title: 'Drew Houston: no one is born a CEO', url: 'https://www.youtube.com/watch?v=IXtjWDk7LV8', duration: '1:54' },
      { id: 'm8l2', title: 'Reed Hastings: above all, try to be authentic', url: 'https://www.youtube.com/watch?v=K8o0FJ6R0fQ', duration: '1:28' },
      { id: 'm8l3', title: 'Frank Slootman: focus on one thing at a time', url: 'https://www.youtube.com/watch?v=HjHAsxMLWyU', duration: '1:58' },
      { id: 'm8l4', title: 'Elon Musk: the CEO must work on the most pernicious and painful problems', url: 'https://www.youtube.com/watch?v=EGL3UXUnOdM', duration: '0:59' },
      { id: 'm8l5', title: 'Steve Jobs: your job is to recruit the right people', url: 'https://www.youtube.com/watch?v=-Ec5QvZmnB4', duration: '0:55' },
    ]
  }

];

