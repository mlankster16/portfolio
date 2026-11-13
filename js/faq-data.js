/* Questions and answers for the portfolio Q&A chat.
   Edit this file to change what the chat says. Nothing else needs to change.

   - groups: the topic buttons shown first.
   - items: one entry per question.
       id      short unique name
       group   one of the group ids below
       phrases extra ways a visitor might ask the question
       q       the question as shown to visitors
       a       the answer, one string per paragraph
       links   optional page links shown under the answer: { label, href, note }
       keys    extra words and phrases a visitor might type (helps matching)
       related optional list of ids to show first under "You might also like"
   - resumeTopics: names of past roles that have no answer yet. Questions that mention one get resumeReply
     and a link to the Résumé page. Empty now that each role has its own answer.
   - hello, thanks, didYouMean: short replies to a greeting, a thank-you, and a question the chat
     is not sure about (it offers the closest questions instead of guessing).
   - Write answers in first person, plain and warm. No em dashes. */
window.FAQ_DATA = {
  title: 'Questions about my work',
  greeting: 'Hi! I wrote these answers to help you get to know my work. Pick a topic, choose a question, or type your own.',
  note: 'This Q&A doesn’t use AI. It matches your question to an answer I wrote ahead of time. Nothing you type is saved or sent anywhere.',
  noMatch: 'I don’t think I have an answer for that here. You can try one of these questions, or send me a note. I’d be happy to talk.',
  resumeReply: 'You’ll find that role on my résumé, with dates and details. You’re welcome to send me a question about it, too.',
  hello: 'Hi! Thanks for stopping by. Pick a topic, or type a question.',
  thanks: 'You’re welcome! If you’d like to talk more, you’ll find my email at the bottom of every page.',
  didYouMean: 'I’m not quite sure which answer fits. Were you asking about one of these?',
  resumeTopics: [],
  email: 'meganrlancaster@gmail.com',
  linkedin: 'https://www.linkedin.com/in/megan-lancaster-pmp/',

  groups: [
    { id: 'about', label: 'About me' },
    { id: 'samples', label: 'Samples' },
    { id: 'how', label: 'How I design' },
    { id: 'ai', label: 'AI' },
    { id: 'teach', label: 'Teaching and curriculum' },
    { id: 'pm', label: 'Projects and teams' },
    { id: 'contact', label: 'Contact' }
  ],

  items: [
    /* ---------- About me ---------- */
    {
      id: 'what-do-you-do', group: 'about',
      phrases: ['what do you do','who are you','tell me about yourself'],
      q: 'What do you do?',
      a: [
        'I’m a Senior Learning Experience Designer, STEM Educator, and PMP®-certified Project Manager. I work with educators and subject experts to make complex ideas easier to understand and give learners ways to try them out.',
        'That often means helping a team decide what matters most, how learners will practice, and what we can realistically build with the time and resources we have.'
      ],
      links: [{ label: 'About me', href: 'about.html' }],
      keys: 'role who are you introduce yourself learning designer instructional designer experience designer project manager pmp occupation profession tell me about yourself'
    },
    {
      id: 'kinds-of-projects', group: 'about',
      q: 'What kinds of learning projects have you worked on?',
      a: [
        'I’ve worked on K–12 lessons, teacher professional development, undergraduate courses, and online learning for working professionals. At Duke, I’ve partnered with faculty in nursing, engineering, data science, business, and other fields on more than 50 courses and Specializations.',
        'Across those settings, I like helping people do something with what they’re learning, whether that’s investigating a question, trying a new skill, or making a decision at work.'
      ],
      links: [{ label: 'Project Archive', href: 'course-portfolio.html', note: 'the full course and Specialization list' }],
      keys: 'types of projects industries fields subjects k12 k-12 teacher professional development undergraduate working professionals nursing engineering data science business courses specializations clients'
    },
    {
      id: 'stem-background', group: 'about',
      phrases: ['do you teach','teaching experience','are you a teacher','your background','where did you study','what did you study'],
      q: 'How does your STEM background shape your work?',
      a: [
        'I studied physics, engineering physics, and science education, and I’ve taught hands-on STEM courses to students of different ages.',
        'I still think like a science teacher when I design. What could learners investigate? What might they predict or try? How could they explain what they found? I look for ways to make an idea concrete and give learners something to work with.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html', note: 'education and teaching experience' }],
      keys: 'background education degree degrees studied study physics engineering science teacher teaching taught classroom stem school university where did you go to school'
    },
    {
      id: 'joy', group: 'about',
      phrases: ['what brings you joy', 'brings you joy', 'what do you love', 'what do you enjoy about your work', 'what motivates you', 'what drives you'],
      q: 'What brings you joy?',
      a: [
        'I love taking an idea, building something we can try, and making it better as we learn. I especially enjoy sharing an early version and seeing what other people notice or want to try next.',
        'The best part is when it helps someone: a learner makes sense of a difficult concept, a faculty member sees their idea come to life, or a team works out what to focus on. I like figuring those things out together.'
      ],
      links: [{ label: 'About me', href: 'about.html' }],
      keys: 'joy love enjoy passion motivation motivates drives excites exciting rewarding energy prototype feedback iterate puzzle'
    },
    {
      id: 'outside-work', group: 'about',
      phrases: ['outside of work', 'outside work', 'for fun', 'free time', 'in your spare time', 'what do you do for fun'],
      q: 'What do you enjoy outside of work?',
      a: [
        'I’m happiest outdoors! I love hiking, camping, and exploring somewhere new. I’m just as happy on a familiar trail close to home in Maine.'
      ],
      keys: 'hike hikes hiker hobbies hobby interests outside work fun free time spare time weekends outdoors hiking camping travel traveling nature trail personal life'
    },
    {
      id: 'credentials', group: 'about',
      phrases: ['what is your education', 'where did you go to school', 'what degrees do you have', 'are you pmp certified', 'do you have a certification', 'do you have a phd', 'do you have a doctorate', 'phd', 'doctorate'],
      q: 'What are your education and certifications?',
      a: [
        'I’m a certified Project Management Professional (PMP®) through the Project Management Institute. I also hold an M.Ed. in Science Education from North Carolina State University, an M.S. in Engineering Physics from Appalachian State University, and a B.S. in Physics from the University of North Carolina at Greensboro.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html' }],
      keys: 'education degree degrees school university college masters bachelors physics engineering physics science education nc state north carolina state appalachian state unc greensboro pmp certification certified credential credentials project management professional where did you go to school study studied graduate'
    },
    {
      id: 'work-history', group: 'about',
      phrases: ['work history','career history','how long have you worked','years of experience','where have you worked','where did you work before duke'],
      q: 'What’s your work history?',
      a: [
        'I started teaching in 2011 and moved into learning design and educational technology in 2013. I’ve been at Duke since 2020, first as a Learning Experience Designer and now as a Senior Learning Experience Designer and Project Manager. My work there spans more than 50 online courses and Specializations.',
        'Before Duke, I was an Educational Technology Specialist at High Point University, supporting more than 100 faculty as they adopted teaching tools. At UNC Greensboro, I worked as a Learning Specialist for K–5 engineering education and, earlier, as an Instructional Designer and Project Manager. That’s where I designed the university’s first MOOC.',
        'Along the way, I’ve taught science and STEM courses to K–12 students. My résumé has the full timeline.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html' }],
      keys: 'work history experience career background jobs employment previous roles employers high point university unc greensboro uncg duke years of experience how long timeline resume cv positions'
    },
    {
      id: 'recognition', group: 'about',
      phrases: ['any awards', 'have you presented', 'have you published', 'awards', 'award'],
      q: 'Have you received any awards, or presented at conferences?',
      a: [
        'Yes. I received the Coursera Vision & Values Award in 2025 for work in principled innovation, platform leadership, and AI-integrated teaching tools. In 2021, I received the Duke Presidential Award for contributions to Duke’s move to remote teaching during COVID-19.',
        'I’ve also presented on designing with empathy and trauma-informed principles in asynchronous MOOCs at UPCEA DT&L in 2024, and on skill development with Coursera Labs at the 2022 Coursera Conference. My résumé includes my publications and other presentations.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html' }],
      keys: 'awards award honors recognition presentations presented conference conferences speaker speaking publications published research papers journal articles vision values presidential award trauma-informed upcea dt&l'
    },
    {
      id: 'classroom-experience', group: 'about',
      phrases: ['k-12 experience','do you have teaching experience','have you taught'],
      q: 'Do you have classroom or K–12 experience?',
      a: [
        'Yes. I taught middle school science and high school environmental science at New Garden Friends School through hands-on, guided inquiry. I also taught STEM courses for Duke TIP, coordinated Engineering is Elementary lessons for elementary students, and led virtual Moon and Mars missions as a Challenger Learning Center Flight Director.',
        'I’ve also designed and led professional development for teachers in engineering education.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html' }],
      keys: 'classroom teaching teacher taught k-12 k12 middle school high school science teacher stem instructor elementary engineering is elementary eie duke tip professional development workshops'
    },
    {
      id: 'high-point', group: 'about',
      phrases: ['high point university', 'high point', 'hpu', 'blackboard bootcamp', 'blackboard'],
      q: 'What did you do at High Point University?',
      a: [
        'From 2018 to 2019, I was an Educational Technology Specialist at High Point University. I helped roll out campus-wide learning initiatives and supported more than 100 faculty as they adopted Blackboard and other teaching tools.',
        'I created Blackboard Bootcamp to help faculty get comfortable with the platform. Reported confidence increased by 32%, and support requests fell by an average of 18%. I also designed the university’s first cross-disciplinary Pathway system, using e-portfolios and achievement badges to help students show their progress.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html' }],
      keys: 'high point university hpu educational technology specialist blackboard bootcamp faculty training pathway badges e-portfolios'
    },
    {
      id: 'duke-tip', group: 'about',
      phrases: ['duke tip', 'talent identification program'],
      q: 'What did you do at Duke TIP?',
      a: [
        'From 2011 to 2015, I designed and taught hands-on STEM courses for the Duke Talent Identification Program, which served academically gifted students in grades 5–12. My courses included Engineering of Space Exploration, Roller Coaster Physics, Aerospace Engineering, and Digital Circuit Design and Analysis.',
        'I also reviewed online STEM curriculum, trained instructional staff, and served as STEM eStudies Academic Coordinator in 2014. I loved that work. It shaped a lot of what I went on to do.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html' }],
      keys: 'duke tip talent identification program gifted stem instructor roller coaster physics aerospace engineering digital circuits estudies'
    },
    {
      id: 'challenger', group: 'about',
      phrases: ['challenger', 'challenger learning center', 'flight director', 'virtual missions', 'virtual mission'],
      q: 'What did you do at the Challenger Learning Center?',
      a: [
        'From 2024 to 2025, I was a Virtual Mission Flight Director at the Challenger Learning Center in Bangor, Maine. As part of NASA’s educator program, I led students in grades 4–12 through virtual missions to the Moon and Mars.',
        'I also worked with their teachers on activities that connected the missions to classroom learning and the Next Generation Science Standards.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html' }],
      keys: 'challenger learning center flight director virtual mission moon mars nasa bangor maine'
    },
    {
      id: 'assist-center', group: 'about',
      phrases: ['assist center', 'pre-service teacher'],
      q: 'What did you do at the ASSIST Center?',
      a: [
        'From 2012 to 2014, while I was a graduate student at NC State University, I coordinated education outreach for future teachers at the ASSIST Center. The name stands for Advanced Self-Powered Systems of Integrated Sensors and Technologies. My résumé has more detail about that role.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html' }],
      keys: 'assist center nc state pre-service teacher education outreach coordinator'
    },
    {
      id: 'proudest', group: 'about',
      phrases: ['proudest project', 'proudest of', 'most proud of', 'what are you most proud of', 'project you are proudest of', 'biggest accomplishment', 'greatest accomplishment', 'greatest achievement', 'proudest accomplishment', 'favorite project'],
      q: 'What project are you proudest of?',
      a: [
        'It’s hard to pick just one, but right now I’d say this portfolio.',
        'Building it gave me a reason to revisit the different parts of my career, the people I’ve worked with, and what I learned along the way. Figuring out how to bring more than 13 years of work into one place turned out to be a learning design project of its own. I had a lot of fun making it.',
        'If you’re curious about a particular kind of project, ask me. I have a few favorites.'
      ],
      links: 'contact',
      keys: 'proud proudest pride accomplishment achievement favorite project best work'
    },

    /* ---------- Samples ---------- */
    {
      id: 'more-examples', group: 'samples',
      phrases: ['can i see something not on your portfolio', 'i dont see', 'i don\'t see', 'is there anything else', 'more examples', 'other examples', 'other samples', 'can you make a sample', 'can you mock something up', 'can you do a design exercise', 'work sample', 'writing sample', 'writing samples'],
      q: 'Can I see something that isn’t on your portfolio?',
      a: [
        'Yes! This is a selection of my work, so I may have an example that isn’t shown here. Let me know what you’re looking for, and I’ll see what I can share.',
        'If I don’t have something that fits, we can talk about a small mock-up to show how I’d approach it.'
      ],
      links: 'contact',
      keys: 'example examples sample samples more other not on portfolio not here missing something else specific type show me mock up mockup design exercise work sample portfolio request share'
    },
    {
      id: 'where-start', group: 'samples',
      phrases: ['where to start', 'where do i start', 'where should i begin', 'where to begin', 'what should i look at first', 'what is your favorite sample', 'which sample should i look at', 'where should i start'],
      q: 'Where should I start?',
      a: [
        'It depends on what you’d like to see. Space Medicine, AI for Nurses, and Digital You show my work with Duke faculty and partners. The Interactivity Generator is an AI app my team uses, and Teachers as Engineers covers my work with K–12 teachers.',
        'If you’d rather try something, Light the Beacon and the reimagined Space Medicine Week 2 are playable concepts. You can also filter the samples on the Home page by skills, audience, or platform.'
      ],
      links: [
        { label: 'Space Medicine', href: 'space-medicine.html', note: 'a Coursera course, with Week 2 reimagined as a guided story' },
        { label: 'Light the Beacon', href: 'beacon-escape-room.html', note: 'a playable Grade 6 math escape room' },
        { label: 'AI for Nurses', href: 'ai-for-nurses.html', note: 'a Specialization, from first planning to launch' },
        { label: 'Interactivity Generator', href: 'interactivity-generator.html', note: 'an AI app that builds Coursera activities' },
        { label: 'Teachers as Engineers', href: 'engineering-is-elementary.html', note: 'engineering professional development for K–5 teachers' },
        { label: 'Digital You', href: 'digital-you.html', note: 'a for-credit course in Canvas' },
        { label: 'Project Management', href: 'project-management.html', note: 'how I plan and guide projects' },
        { label: 'Project Archive', href: 'course-portfolio.html', note: 'the full course and Specialization list' }
      ],
      keys: 'start begin first overview where to begin best work highlights recommend recommendation tour what should i look at see samples portfolio examples favorite hiring technical training higher ed custom design group category show me higher ed work filter filters audience platform features k-12 workforce lifelong learning ai app teachers coaching'
    },
    {
      id: 'in-use', group: 'samples',
      phrases: ['are all the projects in use','which projects are real','which are real','real or concept','live or concept','what is a concept','what are concepts','are these real','are these real projects','what is a live project','proof of concept','learning design of your live courses','see your live courses','show your live work','why are some projects concepts'],
      q: 'Which projects have been used, and which are concepts?',
      a: [
        'Space Medicine, AI for Nurses, and Digital You are courses I worked on with Duke faculty and partners. Space Medicine launched on Coursera in 2021, AI for Nurses launched in September 2026, and Digital You ran as a for-credit course in Spring 2024. The Space Medicine page includes both the original course and a separate Week 2 concept.',
        'The Interactivity Generator is a tool my team uses. I piloted it on a few activities in Year 1 of AI for Nurses and am using it throughout Year 2. Teachers as Engineers describes a professional development program for elementary teachers. Its interactive water filter challenge is a simplified illustration I built for this portfolio, not official Engineering is Elementary material or real test data.',
        'Light the Beacon and the reimagined Space Medicine Week 2 are playable concepts that haven’t been tested with learners yet. They let me share more of my design and building work than I can show from courses with intellectual property restrictions. Both would need further review and testing before classroom or course use.',
        'You can filter the samples on the Home page by skills, audience, or platform.'
      ],
      keys: 'real in use live launched concept concepts prototype proof of concept hypothetical actual production published difference live project ip intellectual property confidential confidentiality why concepts custom design'
    },
    {
      id: 'try-concepts', group: 'samples',
      phrases: ['can i try the concepts', 'can i try the samples', 'are the interactives working', 'are the samples interactive'],
      q: 'Can I try the concepts?',
      a: [
        'Yes! You can play Light the Beacon on its project page and explore the Week 2 concept on the Space Medicine page.',
        'You can also try the Interactivity Generator with saved demo responses and no account, or work through the simplified water filter challenge on the Teachers as Engineers page.'
      ],
      links: [{ label: 'Light the Beacon', href: 'beacon-escape-room.html' }, { label: 'Space Medicine', href: 'space-medicine.html' }, { label: 'Interactivity Generator', href: 'interactivity-generator.html' }, { label: 'Teachers as Engineers', href: 'engineering-is-elementary.html' }],
      keys: 'try interactive demo play can i try the concepts samples working prototypes are they interactive do they work live demo'
    },
    {
      id: 'concept-making', group: 'samples',
      phrases: ['how did you make your concept samples', 'what tools did you use for the concepts', 'how did you build the samples'],
      q: 'How did you make your concept samples?',
      a: [
        'For Light the Beacon and the Space Medicine redesign, I planned the learning sequence, practice, feedback, and assessment, then used AI tools to help build working prototypes. I worked with Claude Design on the screens and interactions, Claude Code on the build, and ChatGPT on the images.',
        'I described what I wanted learners to see and do, tried the results, and kept revising. Both are still prototypes. They would need subject expert review and testing with learners before being used in a class or course.'
      ],
      links: [{ label: 'Space Medicine', href: 'space-medicine.html' }, { label: 'Light the Beacon', href: 'beacon-escape-room.html' }],
      keys: 'how did you make how did you build what tools did you use tools role what did you do process concept samples prototype claude design claude code ai partner built made created designed concepts'
    },
    {
      id: 'ip-assets', group: 'samples',
      phrases: ['can you share the full assets for your live courses', 'can i see your live courses', 'can i see the course files', 'why are there no live course samples', 'can i see your work', 'why can\'t you share the full assets','why can\'t i see the full assets','why cant you share','why are the live courses not shown'],
      q: 'Why can’t you share the full materials from your courses?',
      a: [
        'The Coursera and Canvas courses were developed with Duke faculty and partners, so there are limits on what I can share publicly. I can show selected examples and talk through the design decisions, my role, and how the work came together.'
      ],
      keys: 'full assets live courses share assets course files intellectual property proprietary ip restrictions confidential portfolio samples snippets can i see the course can i see your work coursera canvas duke permission'
    },
    {
      id: 'course-count', group: 'samples',
      phrases: ['experience with coursera', 'coursera experience'],
      q: 'How many courses have you worked on?',
      a: [
        'Since 2020, I’ve designed and developed 47 Coursera courses and 12 Coursera Specializations with Duke faculty, with more than 377,000 enrollments. Including my work in Canvas and other platforms, I’ve worked on more than 50 courses.',
        'The Project Archive has the full list.'
      ],
      links: [{ label: 'Project Archive', href: 'course-portfolio.html' }],
      keys: 'how many count total courses specializations enrollments learners enrolled numbers stats statistics scale impact reach years 2020 catalog list archive'
    },
    {
      id: 'top-rated', group: 'samples',
      phrases: ['which courses are rated highest', 'best rated courses', 'highest rated course', 'what do learners say', 'learner reviews', 'course reviews', 'course ratings'],
      q: 'Which of your courses are rated highest?',
      a: [
        'AI for Nurses, listed on Coursera as AI in Nursing Practice, has a 5.0 out of 5 from its first learners in 2026, with more than 150 enrolled. It’s still early, so I’d read that as an encouraging start.',
        'Financial Management and Space Medicine each have a 4.8 out of 5, with 59,525 and 29,777 enrollments, respectively. The Project Archive includes ratings and enrollment figures for the courses I’ve worked on.'
      ],
      links: [{ label: 'Project Archive', href: 'course-portfolio.html' }],
      keys: 'rated rating ratings highest best top favorite favourite reviews review stars popular most popular enrollments enrolled financial management space medicine ai in nursing practice'
    },
    {
      id: 'neon', group: 'samples',
      phrases: ['what is neon', 'what did you do at neon', 'what did you do for neon', 'tell me about neon', 'national education opportunity network', 'medical sociology', 'have you designed for high school', 'high school students', 'neon'],
      q: 'What did you do for NEON?',
      a: [
        'Through the National Education Opportunity Network (NEON), Duke adapted Professor Tyson Brown’s Medical Sociology course so high school students could earn college credit during the school day, at no cost. In Spring 2026, it reached 255 students in 15 high schools across 9 cities. Duke faculty and 10 Teaching Fellows led instruction, with a high school co-teacher in each room.',
        'I worked with a fellow Learning Experience Designer and the faculty lead on the Canvas structure, assignments, and assessments. I built modules, co-developed weekly quizzes, and helped redesign the capstone.',
        'I also wrote guides for co-teachers and Teaching Fellows. I wanted the people supporting each class to feel prepared and understand not just what to do each week, but why.'
      ],
      links: [{ label: 'Project Archive', href: 'course-portfolio.html#neon', note: 'Medical Sociology' }],
      keys: 'neon national education opportunity network medical sociology high school high schools dual enrollment college credit canvas teaching fellows co-teachers co-teacher guides capstone quizzes tyson brown duke 2026'
    },
    {
      id: 'space-medicine', group: 'samples',
      phrases: ['what is space medicine', 'what did you do on space medicine', 'is the week 2 module live', 'how did you redesign week 2', 'how did you redesign space medicine week 2', 'reimagined week 2', 'cabin pressure', 'cabin pressure scenario', 'mentor chat', 'why use a mentor chat', '1862 balloon flight', 'balloon flight', 'elena rivera', 'space medicine'],
      q: 'What is Space Medicine?',
      a: [
        'Space Medicine is a Duke course on Coursera that launched in 2021 and has reached nearly 30,000 learners. As Senior Learning Experience Designer and Project Manager, I led the learning design and coordinated the project.',
        'For this portfolio, I also reimagined Week 2 as a separate concept. Dr. Elena Rivera, a lead flight surgeon, guides learners by chat as they investigate the 1862 balloon flight. Each video leads into a short activity, and the week ends with a real-time launch-day scenario. The project page compares the two versions and explains how I’d test the redesign.'
      ],
      links: [{ label: 'Explore the course and Week 2 concept', href: 'space-medicine.html' }],
      keys: 'space medicine coursera balloon glaisher coxwell hypoxia altitude week 2 exercise interactive module reimagined nasa astronaut what did you do on space medicine is the week 2 module live live course concept role redesign redesigned cabin pressure scenario mentor chat rivera flight surgeon story launch day 1862'
    },
    {
      id: 'beacon', group: 'samples',
      phrases: ['what is light the beacon', 'what happens in the storm', 'storm in light the beacon', 'final room in light the beacon', 'is light the beacon tested with students', 'how could a teacher use light the beacon', 'use light the beacon in class', 'light the beacon teacher guide', 'light the beacon lesson plans', 'light the beacon handouts', 'the keeper’s logbook story', 'what would you want to learn from testing light the beacon', 'what would you test in light the beacon', 'how would you test light the beacon', 'has light the beacon been tested', 'how would you know light the beacon worked', 'measure learning in light the beacon', 'measuring learning in light the beacon', 'assess light the beacon', 'light the beacon', 'escape room'],
      q: 'What is Light the Beacon?',
      a: [
        'Light the Beacon is a playable escape room I designed for Grade 6 ratios and rates. Learners restore a storm-damaged lighthouse across four rooms, then use what they found to set the final signal.',
        'I also created a two-day classroom package with a teacher guide, a slide deck with an illustrated story, and student handouts. The game runs in a browser on Chromebooks and iPads and saves progress so students can return to it.',
        'It hasn’t been tested with students yet. You can try the game, explore the classroom materials, and read about my design decisions and proposed evaluation on the project page.'
      ],
      links: [{ label: 'Light the Beacon', href: 'beacon-escape-room.html' }],
      keys: 'light the beacon escape room game game-based lighthouse grade 6 math ratio ratios unit rate rates equivalent ratios puzzle puzzles hints feedback middle school gamification playable prototype concept untested not tested with students standard standards common core 6.rp teacher class classroom teacher guide lesson lessons lesson plan plans handouts slides slide deck story storybook two-day chromebook chromebooks ipad ipads devices save progress room code'
    },
    {
      id: 'ai-for-nurses', group: 'samples',
      phrases: ['what is ai for nurses', 'what was your role on ai for nurses', 'what did you do on ai for nurses', 'what did you lead on ai for nurses', 'how did you design the ai for nurses courses', 'how did you design ai for nurses', 'is there a second ai for nurses specialization', 'what is next for ai for nurses', 'is ai for nurses accredited', 'ce credit', 'ai for nurses', 'ai in nursing practice'],
      q: 'What is AI for Nurses?',
      a: [
        'AI for Nurses is a three-course Coursera Specialization from the Duke University School of Nursing, funded by a Johnson & Johnson grant. I led learning design and project management from kickoff in September 2025 to launch in September 2026.',
        'I used survey data from working nurses and brought registered nurses into the design so the examples would reflect what they encounter on a shift. The Specialization offers up to 9 accredited continuing education hours, and a second year is now in development.',
        'Early feedback has been encouraging, including a 5.0 out of 5 rating from learners who have finished. The project page explains how we designed it and includes two activities you can try.'
      ],
      links: [{ label: 'AI for Nurses', href: 'ai-for-nurses.html' }],
      keys: 'accredited accreditation ce hours role second year activities ai for nurses nursing nurses specialization johnson johnson j&j duke school of nursing continuing education credit hours healthcare clinical artificial intelligence'
    },
    {
      id: 'ai-try', group: 'samples',
      phrases: ['can i try the ai for nurses activities', 'is there a demo of ai for nurses'],
      q: 'Can I try the AI for Nurses activities?',
      a: [
        'Yes! There are two interactive activities on the project page. In one, you compare a fall-risk score with a generated discharge summary. In the other, you change the information a model receives and see how its output changes, including what the nurse knows that the model doesn’t.'
      ],
      links: [{ label: 'AI for Nurses', href: 'ai-for-nurses.html' }],
      keys: 'try ai for nurses activities interactive live activity demo fall risk score discharge summary what a model receives predictive generative can i try'
    },
    {
      id: 'interactivity-generator', group: 'samples',
      phrases: ['interactivity generator', 'what is the interactivity generator', 'tell me about the interactivity generator', 'what does the interactivity generator do', 'can i try the interactivity generator', 'why did you build the interactivity generator'],
      q: 'What is the Interactivity Generator?',
      a: [
        'It’s an AI app I designed and built for Duke’s Learning Experience Design team during our summer 2026 AI pilot. A designer describes what learners need to understand, and the app helps turn that into a hands-on Coursera activity with a standalone text version.',
        'For years, faculty asked me some version of “Can Coursera do this?” and my answer was often “not yet.” The pilot gave me a chance to build a way to say yes. I tried it on a few activities in Year 1 of AI for Nurses, and I’m now using it throughout Year 2.',
        'You can try it on the project page with saved demo responses and no account. The page also explains how it works and what I changed during testing.'
      ],
      links: [{ label: 'Interactivity Generator', href: 'interactivity-generator.html' }],
      keys: 'interactivity generator ai app tool claude api coursera activity activities interactive six activity types preview no-code editor export text version demo summer pilot why built faculty can coursera do this'
    },
    {
      id: 'eie', group: 'samples',
      phrases: ['teachers as engineers', 'what is teachers as engineers', 'engineering is elementary', 'what is engineering is elementary', 'what is eie', 'tell me about engineering is elementary', 'what did you do with engineering is elementary', 'what did you do at unc greensboro', 'what did you do at uncg', 'seed leadership team', 'what happened in the summer institute', 'summer institute', 'what is the water filter challenge', 'water filter', 'is the water filter challenge real', 'is the water filter challenge engineering is elementary material', 'what did teachers do in the institute', 'how did you prepare the teachers', 'how did you coach the teachers'],
      q: 'What was Teachers as Engineers?',
      a: [
        'As Learning Specialist for K–5 Engineering Education at UNC Greensboro, I helped bring Engineering is Elementary, a curriculum from the Museum of Science, Boston, to Title I schools in Guilford County, North Carolina. The museum-funded Seed Leadership Team project was led by Dr. Heidi Carlone.',
        'We worked with 20 to 30 teachers at a time in a week-long summer institute, then coached them through the school year. Many were teaching engineering for the first time. The work also led to research, including a published study of students’ experiences in these classrooms.',
        'The project page includes the research and presentations, along with a simplified water filter activity I built to illustrate the teacher experience. That activity isn’t official Engineering is Elementary material and doesn’t use real test data.'
      ],
      links: [{ label: 'Teachers as Engineers', href: 'engineering-is-elementary.html' }],
      keys: 'teachers as engineers engineering is elementary eie unc greensboro uncg museum of science boston seed leadership team heidi carlone title i guilford county elementary k-5 engineering teachers coaching professional development'
    },
    {
      id: 'digital-you', group: 'samples',
      phrases: ['what is digital you', 'what were the digital you topics', 'what did you do on digital you', 'what did you lead on digital you', 'digital you', 'lets talk digital you'],
      q: 'What is Digital You?',
      a: [
        'Let’s Talk Digital You is a for-credit Duke course about how technologies work and the ethical questions they raise. It was open to students in any major and ran as a hybrid, semester-long course in Spring 2024, using Canvas.',
        'As Senior Learning Experience Designer and Project Manager, I worked with two lead instructors and weekly guest experts to make the course feel connected across disciplines. The project page shows how we organized the weeks, a sample two-week module, and what students said in their final reflections.'
      ],
      links: [{ label: 'Digital You', href: 'digital-you.html' }],
      keys: 'digital you canvas for-credit credit course interdisciplinary ethics technology data guest lecturers instructors tas university undergraduate hybrid spring 2024'
    },
    {
      id: 'ai-nurses-results', group: 'samples',
      phrases: ['results of ai for nurses', 'ai for nurses results', 'what happened after ai for nurses launched', 'how did ai for nurses perform', 'how did ai for nurses turn out', 'ai for nurses ratings', 'completion rate', 'completion rates'],
      q: 'What were the results of AI for Nurses?',
      a: [
        'It launched in September 2026, so these are early results. So far, most learners who start a course finish it, and learners who have finished have rated it 5.0 out of 5. Their comments mention both the content and the learning experience.',
        'Across the three courses, learners have flagged only a handful of items. Our review hasn’t identified a substantive issue in those reports so far. The partners also funded a second year of work.'
      ],
      links: [{ label: 'AI for Nurses', href: 'ai-for-nurses.html' }, { label: 'Project Archive', href: 'course-portfolio.html' }],
      keys: 'results outcomes impact data ratings completion engagement enrollment launch nurses how did it go'
    },
    {
      id: 'ai-nurses-testing', group: 'samples',
      phrases: ['what did testing change', 'what did learner testing change', 'what did testing with nurses change', 'what did the co-design session change', 'what did nurses tell you', 'what did you learn from nurses', 'co-design session', 'codesign session'],
      q: 'What changed after you heard from nurses?',
      a: [
        'Quite a bit. Our first case studies assumed a bedside role. Nurses working in other settings told us those examples didn’t fit their day, so we adapted several.',
        'Nurses also described AI in terms of what it did in their workflow: flagging, summarizing, prioritizing, or triggering something. Those four patterns helped organize all three courses, and we rewrote the support materials around them.'
      ],
      links: [{ label: 'AI for Nurses', href: 'ai-for-nurses.html#heard' }],
      keys: 'learner testing co-design session nurses feedback changed case studies bedside four patterns flagged summarized prioritized triggered'
    },
    {
      id: 'ai-nurses-activities', group: 'samples',
      phrases: ['what kinds of activities did you design for ai for nurses', 'what types of activities are in ai for nurses', 'ai for nurses activities', 'what is the ai coach in ai for nurses', 'what is the coursera ai coach', 'dialogue activity', 'dialogue activities'],
      q: 'What kinds of activities are in AI for Nurses?',
      a: [
        'Lessons combine short expert videos with term spotlights, “Inside the AI tool” readings, practice and graded quizzes, Dialogue activities, and post-case reflections. Each course ends with a capstone based on the nurse’s own workflow.',
        'Dialogue lets learners have a back-and-forth conversation with Coursera’s AI coach. I set the objectives, instructions, and rubric for each activity, and the coach draws on the module’s videos and readings. In Course 3, case videos pause three times to ask nurses what they would do next.'
      ],
      links: [{ label: 'AI for Nurses', href: 'ai-for-nurses.html#courses' }],
      keys: 'activities activity types dialogue coursera ai coach capstone term spotlights quizzes case videos reflections'
    },
    {
      id: 'beacon-why', group: 'samples',
      phrases: ['why an escape room', 'why did you make an escape room', 'why a game', 'why did you make light the beacon', 'where did light the beacon come from'],
      q: 'Why did you make an escape room?',
      a: [
        'The idea grew out of conversations with my own middle school students years ago. Ratios and rates were often difficult for them, and I wanted to make something I would have liked to try in that classroom.',
        'An escape room gave me a way to connect the problems. Learners build a ratio with tiles, extend a table, and use a radio log to find a unit rate. Those answers matter again in the last room, where they choose a signal plan and explain why it works.'
      ],
      links: [{ label: 'Light the Beacon', href: 'beacon-escape-room.html' }],
      keys: 'escape room game why idea inspiration middle school students light the beacon story'
    },
    {
      id: 'beacon-hints', group: 'samples',
      phrases: ['how do hints work in light the beacon', 'hints and feedback', 'what standard does light the beacon address', 'light the beacon standard'],
      q: 'How do hints and feedback work in Light the Beacon?',
      a: [
        'Every room has an optional three-part practice and three hints that get more specific, from a guiding question to a concrete next step. There’s no penalty for using them. Learners can also type answers instead of turning the dials.',
        'I wrote feedback for anticipated mistakes, since the game hasn’t been tested with students yet. For example, if someone answers “14 flashes” in the generator room, the feedback asks them to check whether their answer doubled when the packs doubled. The rooms address Common Core 6.RP.A.3a (equivalent ratios) and 6.RP.A.3b (unit rates).'
      ],
      links: [{ label: 'Light the Beacon', href: 'beacon-escape-room.html#rooms' }],
      keys: 'hints feedback mistakes practice standard common core ratios unit rates rooms light the beacon'
    },
    {
      id: 'sm-test', group: 'samples',
      phrases: ['what would you test next in the space medicine redesign', 'how would you test space medicine', 'has space medicine been tested', 'what would you test in space medicine', 'what would you test next in space medicine', 'test the space medicine redesign', 'measure impact of space medicine', 'did the space medicine redesign make a difference'],
      q: 'How would you test the Space Medicine redesign?',
      a: [
        'The redesign hasn’t been tested with learners yet. If Coursera supports random assignment, I’d compare the live Week 2 with the reimagined version. I’d keep the videos the same and give both groups the same quiz as a common learning measure.',
        'I’d look at whether more learners finish the week and continue, whether they find it engaging and worthwhile, and whether they do at least as well on the quiz. If possible, I’d also check whether they can apply the ideas later.',
        'Before the test, I’d decide what would count as a worthwhile improvement. If the redesign adds time without a clear benefit, I’d stay with the original version. That would be useful to know, too.'
      ],
      links: [{ label: 'Space Medicine', href: 'space-medicine.html#assess' }],
      keys: 'test space medicine redesign week 2 a/b compare versions measure impact engagement satisfaction quiz'
    },
    {
      id: 'ig-how', group: 'samples',
      phrases: ['how does the interactivity generator work', 'which models does the interactivity generator use', 'how much does the interactivity generator cost', 'does the interactivity generator add things to courses', 'how do the activities get into coursera', 'what is the coursera plugin', 'did you build a coursera plugin', 'does the interactivity generator need h5p'],
      q: 'How does the Interactivity Generator work?',
      a: [
        'A designer describes the content and where learners need help. Claude Haiku, a faster, lower-cost model, recommends an activity format and explains why it fits. Once the designer chooses a format, Claude Sonnet builds a working preview and a plain-text version.',
        'Designers and faculty can edit the wording without touching code, then export the activity for Coursera. AI calls cost a few cents per activity. A person reviews and approves the work, the app never adds anything to a course on its own, and every activity is ungraded practice.',
        'I also built the Coursera plugin that displays the activities inside a reading. That means there’s no need for external hosting or an H5P license.'
      ],
      links: [{ label: 'Interactivity Generator', href: 'interactivity-generator.html#how' }],
      keys: 'interactivity generator how it works models haiku sonnet cost plugin coursera h5p export preview'
    },
    {
      id: 'ig-testing', group: 'samples',
      phrases: ['how did you test the interactivity generator', 'what went wrong with the interactivity generator', 'what did you change in the interactivity generator', 'what is in the interactivity generator prompt', 'interactivity generator system prompt', 'what guardrails did you add'],
      q: 'What went wrong when you tested the Interactivity Generator?',
      a: [
        'Quite a few things, and they gave me specific changes to make. When a sponsor asked for a live Python coding environment, the app couldn’t build it and didn’t explain why. Now it explains the limit and suggests a supported format. When I deliberately asked for twelve reveal cards, it tried to build them all. Each format now has an item limit, with suggestions for narrowing or splitting the content.',
        'Some activities appeared blank or ignored clicks. I added instructions to the system prompt to include the content on the page from the start and check that the code refers to the right page elements. Those checks help catch problems, but the activities still need review.',
        'I also moved recommendations to a faster model, added a progress bar, and built a text editor so designers wouldn’t have to edit code. Building and testing all of this cost about $6 in API calls.'
      ],
      links: [{ label: 'Interactivity Generator', href: 'interactivity-generator.html#testing' }],
      keys: 'interactivity generator testing went wrong changed guardrails prompt rules limits stress test'
    },
    {
      id: 'eie-research', group: 'samples',
      phrases: ['what did the engineering is elementary research find', 'what did your research find', 'what did you study at unc greensboro', 'what was your research about', 'tell me about your research', 'who counts as smart', 'what did the research find', 'your research', 'research findings'],
      q: 'What did your research find?',
      a: [
        'At UNC Greensboro, I worked on three studies of Engineering is Elementary with teachers and students. One thing we explored was how engineering could change who was seen as capable in a classroom. Students described a “smart student” as someone who raises a hand and answers questions. A “smart engineer” worked well with others, made thoughtful material choices, and understood that mistakes were part of improving.',
        'In a fifth-grade classroom, students described good engineering as getting along and using evidence. Those ideas could support their work, but they could also limit it. Some students held back ideas to keep the peace, and “evidence” often came to mean only the score.',
        'For teachers, that points to the importance of making room for disagreement and recognizing evidence beyond the data chart. The fifth-grade study was published in the Journal of Research in Science Teaching in 2025.'
      ],
      links: [{ label: 'Teachers as Engineers', href: 'engineering-is-elementary.html#research' }, { label: 'Résumé', href: 'resume.html' }],
      keys: 'research findings study published paper journal smart engineer students evidence getting along elementary engineering'
    },
    {
      id: 'digital-you-how', group: 'samples',
      phrases: ['how was digital you organized', 'who did you work with on digital you', 'how did you work with 12 guest lecturers on digital you', 'how did you manage the digital you project', 'how long did digital you take to build', 'what was the digital you timeline', 'how did you keep digital you accessible', 'digital you timeline', 'guest lecturers', 'how did you work with guests', 'many instructors'],
      q: 'How did you keep Digital You connected across so many instructors?',
      a: [
        'With two lead instructors, twelve guest lecturers, and ten TAs, we needed a shared structure. Working with the lead instructors, I defined five course outcomes and mapped each week to the same seven-step sequence. Each theme spanned two weeks, pairing how a technology works with the ethical questions it raises.',
        'Guest lecturers and TAs had templates and guides to plan from. A team charter, two tracking boards, and scheduled quality and accessibility reviews helped us coordinate the work from planning in April 2023 through the debrief in May 2024.'
      ],
      links: [{ label: 'Digital You', href: 'digital-you.html' }],
      keys: 'digital you organized structure guest lecturers instructors tas timeline charter tracking boards accessibility seven steps outcomes'
    },
    {
      id: 'digital-you-results', group: 'samples',
      phrases: ['what were the results of digital you', 'did students learn anything from digital you', 'how did digital you turn out', 'digital you results', 'what did students say about digital you', 'what did students say'],
      q: 'What were the results of Digital You?',
      a: [
        'At the end of the semester, 84 students reflected on how they’d met each course outcome. Of those, 65, or 77%, described a change in their thinking or a deeper understanding of something they already knew. The other 19 didn’t explicitly describe either.',
        'One student said the paired technical and ethical weeks helped them develop “a holistic and interdisciplinary lens on each technology.” A computer science major valued the ethics discussions, while students outside STEM described learning more about how the technologies work. Some also reported changing habits, such as rejecting tracking cookies or setting limits on social apps.',
        'I found those reflections useful for understanding what students took from the course, though they aren’t a complete measure of learning.'
      ],
      links: [{ label: 'Digital You', href: 'digital-you.html' }],
      keys: 'digital you results outcomes reflections students said impact thinking changed habits evidence'
    },
    {
      id: 'digital-you-change', group: 'samples',
      phrases: ['what would you change in the next digital you', 'lessons learned digital you', 'what would you change about digital you', 'what would you do differently on digital you', 'what did not work in digital you'],
      q: 'What would you change about Digital You?',
      a: [
        'One student said discussions “didn’t scratch through the surface” as much as they’d hoped because the questions repeated. They also pointed out that many data charts weren’t based on real data.',
        'Next time, I’d vary the questions so discussions build from week to week and use real datasets wherever possible. That feedback gave me two practical places to start.'
      ],
      links: [{ label: 'Digital You', href: 'digital-you.html' }],
      keys: 'digital you change differently lessons learned improve next time discussion questions datasets'
    },

    /* ---------- Project management ---------- */
    {
      id: 'design-build-manage', group: 'pm',
      q: 'Do you design the learning, build it, or manage the project?',
      a: [
        'Often all three. I help plan the learning experience, develop materials and prototypes, and coordinate the people and tasks needed to get it ready for learners.',
        'The balance depends on the team. On AI for Nurses, the original Space Medicine course, and Digital You, I led learning design and project management in collaboration with faculty and project partners.'
      ],
      links: [{ label: 'Learning Design', href: 'learning-design.html' }, { label: 'Project Management', href: 'project-management.html' }],
      keys: 'designer or project manager both roles build develop manage lead responsibilities what do you actually do hands on developer'
    },
    {
      id: 'keep-moving', group: 'pm',
      phrases: ['manage projects','manage a project','how do you manage','keep a project','manage your projects','project management process','how do you run projects'],
      q: 'How do you keep a project moving?',
      a: [
        'I start by helping the team agree on what we’re making, who’s responsible for each part, and when we’ll need decisions or feedback. My PMP® training helps, but a lot of the day-to-day work is listening, following up, and planning around people’s available time.',
        'I generally work through five phases: scope, kickoff, manage, deliver, and evaluate. They often overlap. When a new idea comes up, we talk through what it would add and what it would take, then decide together whether it belongs in the project.'
      ],
      links: [{ label: 'Project Management', href: 'project-management.html', note: 'the five phases in more detail' }],
      keys: 'project management process manage schedule timeline deadlines scope kickoff deliver evaluate phases lifecycle planning priorities pmp certified stakeholders change requests scope creep budget'
    },
    {
      id: 'approaches', group: 'pm',
      phrases: ['do you use agile, hybrid, or waterfall', 'how did you run the agile pilot', 'do you use monday', 'what project management tools', 'how do you run sprints', 'project management tools', 'pm tools', 'tools for project management', 'what tools do you use for project management', 'monday com'],
      q: 'Do you use Agile, hybrid, or waterfall?',
      a: [
        'I’ve used all three. During scoping, I look at how much we know up front and how often partners can give feedback. That helps me choose an approach, and I adjust it as we learn.',
        'For our summer AI pilot, we used Agile with one-week sprints and a Monday.com board. For a four-course nursing Specialization now in development, I’m using a hybrid approach. Data Science with R followed a more traditional plan. The Project Management page shows what each looked like in practice.'
      ],
      links: [{ label: 'Project Management', href: 'project-management.html' }],
      keys: 'agile hybrid waterfall traditional scrum sprint sprints methodology approach methods choose which framework iterative ai pilot data science with r'
    },
    {
      id: 'approach-when', group: 'pm',
      phrases: ['what is agile','what is waterfall','difference between agile and waterfall'],
      q: 'When do you choose Agile, hybrid, or traditional?',
      a: [
        'I lean toward Agile when we expect the work to change and partners can give frequent feedback on working versions. A hybrid approach helps when the overall plan is set but some parts need room to evolve. Traditional planning fits when requirements, deadlines, and approvals are clear and the work needs to happen in sequence.',
        'I make that choice with the team during scoping. The approach needs to fit the work and the people, not just a preferred process.'
      ],
      links: [{ label: 'Project Management', href: 'project-management.html' }],
      keys: 'agile hybrid traditional waterfall difference differences compare when to use choose choosing best when approach methodology what is agile what is waterfall sprints phases'
    },
    {
      id: 'budgets', group: 'pm',
      phrases: ['have you managed a budget', 'managed a budget', 'budget', 'budgets', 'grant', 'grants', 'grant funded', 'grant-funded'],
      q: 'Have you worked with budgets and grants?',
      a: [
        'Yes. Several projects I’ve worked on have been grant-funded, including AI for Nurses through Johnson & Johnson and a $220,000 Museum of Science, Boston project at UNC Greensboro.',
        'For projects with a set plan, I track the agreed scope, schedule, and costs. Data Science with R finished on budget despite a pause partway through. After our team’s AI pilot, I also gathered hosting and API cost estimates for each tool so leadership could make informed decisions about what to support next.'
      ],
      links: [{ label: 'Project Management', href: 'project-management.html' }],
      keys: 'budget budgets cost grant grants funding funded johnson museum of science baseline'
    },
    {
      id: 'didnt-go-to-plan', group: 'pm',
      phrases: ['project that failed', 'project that didn’t go to plan', 'a time a project failed', 'a challenge you faced', 'biggest challenge', 'tell me about a challenge', 'when things went wrong', 'a project that went wrong', 'project setback'],
      q: 'Tell me about a project that didn’t go to plan.',
      a: [
        'Data Science with R is one example. It was a four-course Specialization with a clear scope and a traditional project plan. Partway through, the faculty lead paused the work. When it restarted, we agreed on a new schedule rather than trying to hold everyone to dates that no longer made sense. It finished on budget, with the materials and handoff complete.',
        'A smaller example came from our summer AI pilot. The task cards we drafted with AI were too detailed to be useful, so we simplified them and focused on the weekly show-and-tell. When most of the team was away for a week, we shared updates asynchronously instead of skipping the sprint.'
      ],
      links: [{ label: 'Project Management', href: 'project-management.html#traditional' }],
      keys: 'failed failure challenge setback went wrong paused pause reset baseline obstacle problem difficult'
    },

    /* ---------- How I work ---------- */
    {
      id: 'new-subject', group: 'pm',
      q: 'How do you work with experts in a subject that’s new to you?',
      a: [
        'I ask a lot of questions. I want to understand what matters in the field, what learners already know, and where they tend to have trouble.',
        'The expert brings the subject knowledge. I help us figure out how to explain it, what learners could practice, and what would show that they understand. Sharing an early example gives us something specific to discuss and improve.'
      ],
      links: [{ label: 'About me', href: 'about.html' }],
      keys: 'work with experts faculty subject matter experts sme professors collaborate collaboration partners unfamiliar topic learn new content process listening interviews'
    },
    {
      id: 'ai-use', group: 'ai',
      phrases: ['how do you use ai', 'do you use ai', 'do you use ai in your work', 'use of ai', 'ai in your work', 'ai tools', 'artificial intelligence', 'claude', 'chatgpt', 'generative ai', 'did you use ai'],
      q: 'How do you use AI in your work?',
      a: [
        'I use AI to explore ideas, build prototypes, and create tools for our team. For this portfolio, I worked with Claude Design and Claude Code on the site and concept samples, and with ChatGPT on some ideas and images. I also used ChatGPT, Claude, and Claude Code to support the design of AI for Nurses. Digital You and Teachers as Engineers came before I used AI in my work.',
        'I decide what the learning experience needs to do and review what the tools produce. When the content calls for subject expertise, I bring in experts to check it. What I enjoy most is being able to try something I couldn’t easily build before, see how it works, and change it.'
      ],
      links: [{ label: 'Interactivity Generator', href: 'interactivity-generator.html' }, { label: 'Space Medicine', href: 'space-medicine.html' }],
      keys: 'ai artificial intelligence claude chatgpt llm generative tools automation prompts copilot machine learning code claude code claude design vibe coding'
    },
    {
      id: 'ai-build', group: 'ai',
      phrases: ['have you built ai tools', 'have you built ai-powered tools', 'have you built ai apps', 'what ai tools have you built', 'do you build ai tools', 'have you used the claude api', 'claude skills', 'summer ai pilot', 'ai coach', 'ai pilot', 'the ai pilot'],
      q: 'Have you built AI-powered tools?',
      a: [
        'Yes, and it’s become one of my favorite parts of the work.',
        'During our summer 2026 AI pilot, I facilitated one-week build sprints and served as Product Owner for two tools. One was the Interactivity Generator, built with the Claude API, along with a Coursera plugin to display its activities. Designers can choose a format, try a preview, edit the wording, and export an activity with a standalone text version.',
        'I also built a Claude Skills library and dashboard so other designers could find and use the Skills I’d made for different parts of our work. Other team projects included a capacity forecasting model, a course outline tool, and a scriptwriting agent.',
        'For AI for Nurses, I used AI to help draft and refine the instructions for Coursera’s Dialogue activities, where nurses reflect on examples from their own work.'
      ],
      links: [{ label: 'Interactivity Generator', href: 'interactivity-generator.html' }, { label: 'AI for Nurses', href: 'ai-for-nurses.html' }],
      keys: 'build built building ai tools ai apps app ai-powered claude api interactivity generator coursera plugin claude skills skills library dashboard agent script writing agent prototype product owner summer pilot ai coach dialogue llm apps'
    },
    {
      id: 'ai-prompts', group: 'ai',
      phrases: ['how do you write prompts', 'how do you write prompts for ai', 'what is your prompting approach', 'how do you prompt ai', 'prompt engineering', 'system prompts', 'how do you design prompts', 'how do you make ai outputs reliable', 'how do you check ai output', 'do you use reference material with ai'],
      q: 'How do you write prompts for AI?',
      a: [
        'I start with the context: who the learners are, what we’re trying to accomplish, what a useful result would look like, and which materials the tool should draw from. I try to be clear about what matters without prescribing every detail. Leaving some room to explore often leads to ideas I wouldn’t have considered.',
        'I use reference materials such as course documents, style guidance, and examples. When I find myself repeating a process, I may turn it into a Claude Skill so the guidance is easier for me and other designers to reuse.',
        'I review the output for accuracy and fit before sharing or using it, and I bring in subject experts when needed. A good prompt helps, but it doesn’t replace that review.'
      ],
      keys: 'prompt prompts prompting prompt engineering system prompt instructions context reference material knowledge grounding grounded examples few-shot skills claude skills reliable outputs accuracy review human in the loop designated human guardrails quality check hallucination'
    },
    {
      id: 'ai-coach-others', group: 'ai',
      phrases: ['how do you help others use ai', 'do you teach others to use ai', 'have you trained people on ai', 'do you coach people on ai', 'ai training', 'ai bootcamp', 'have you led ai workshops', 'how do you help educators build with ai', 'ai mentor'],
      q: 'How do you help others use AI?',
      a: [
        'As a go-to AI mentor on my team, I’ve led internal bootcamps and one-on-one sessions to help colleagues try AI in their learning design work. I also built a Claude Skills library and dashboard so they could find examples and guidance to adapt for themselves.',
        'My approach comes from working with teachers. I like to start with something the person actually wants to do, help them build a first version, and work through it together. It’s easier to get comfortable with a new tool when it helps with a problem you already care about.'
      ],
      keys: 'help others teach coach coaching mentor mentoring train training bootcamp bootcamps workshops one-on-one colleagues team designers educators faculty build with ai adoption upskilling ai literacy skills dashboard'
    },
    {
      id: 'portfolio-build', group: 'ai',
      phrases: ['how did you create this portfolio', 'how did you build this portfolio', 'how did you build this site', 'how did you make this website', 'who built this site', 'who made this website', 'who designed this portfolio', 'how was this site made', 'did you build this yourself'],
      q: 'How did you create this portfolio?',
      related: ['proudest', 'can-code', 'ai-use'],
      a: [
        'I designed and built it with help from Claude Design and Claude Code, and used ChatGPT for some ideas and concept images.',
        'The site is plain HTML, CSS, and JavaScript, with no framework. I built this Q&A with Claude’s help, too, but it doesn’t use AI to answer questions. It matches what you type to answers I wrote ahead of time.'
      ],
      links: [{ label: 'About me', href: 'about.html' }],
      keys: 'portfolio website site built made created build make create design designed developed yourself claude design claude code chatgpt how was this made who built behind the scenes'
    },
    {
      id: 'accessibility', group: 'how',
      phrases: ['how do you think about accessibility', 'do you use universal design for learning', 'do you know udl', 'what is udl', 'quality matters', 'wcag', 'olc scorecard', 'accessibility', 'udl', 'universal design for learning'],
      q: 'How do you think about accessibility?',
      a: [
        'I consider accessibility from the start rather than leaving it for a final check. I use WCAG 2.2 as a guide and check things like captions, transcripts, alt text, color contrast, headings, descriptive links, and keyboard navigation. Accessibility tools help me find issues, but they aren’t a complete check on their own.',
        'I also use Universal Design for Learning to offer different ways to take part and show understanding.',
        'At Duke, I co-created our quality and accessibility standards using the Quality Matters and OLC Scorecard frameworks.'
      ],
      links: [{ label: 'Digital You', href: 'digital-you.html', note: 'how Universal Design for Learning shaped a course' }],
      keys: 'accessibility accessible wcag ada udl universal design for learning inclusive inclusion captions transcripts alt text screen reader contrast quality matters olc scorecard standards qa quality review a11y disability'
    },
    {
      id: 'equity', group: 'how',
      phrases: ['how do you think about equity', 'how do you think about equity and access', 'equity and access', 'do you care about equity', 'have you worked with underserved schools', 'have you worked with title i schools', 'have you worked with rural schools', 'have you worked with marginalized communities', 'diversity equity and inclusion'],
      q: 'How do you think about equity and access?',
      a: [
        'I care about who gets the opportunity to learn and who might be left out. Much of my K–12 work has been with communities that have less access to new resources, including teacher professional development in Durham Public Schools, engineering lessons in Title I schools, and virtual missions with rural schools in Maine. Through NEON, I’ve also helped bring a Duke course into high school classrooms for college credit.',
        'In design, I look for practical ways to make participation easier. That might mean a standalone text version of an activity, different ways to show understanding, or hints that don’t cost points. I’ve also presented on empathy and trauma-informed design in asynchronous courses.',
        'Access to AI learning matters to me, too. AI for Nurses was designed for people across the care team, including registered nurses, certified nursing assistants, licensed practical nurses, and nurse administrators. Understanding the tools shouldn’t be limited to specialists.'
      ],
      links: [{ label: 'Teachers as Engineers', href: 'engineering-is-elementary.html' }, { label: 'NEON', href: 'course-portfolio.html#neon', note: 'Medical Sociology for high school students' }],
      keys: 'equity access equitable underserved under-resourced marginalized historically underrepresented title i title 1 rural maine durham public schools dps engineering is elementary high school teaching fellows dei diversity inclusion udl trauma-informed low-pressure ai literacy care team'
    },
    {
      id: 'platforms', group: 'how',
      phrases: ['do you have experience with canvas', 'experience with canvas', 'canvas experience', 'do you use canvas', 'experience with storyline', 'do you have experience with articulate storyline', 'do you use storyline', 'do you use edstem', 'experience with edstem', 'experience with rise', 'experience with captivate', 'what lms have you used', 'which lms', 'lms', 'learning management system'],
      q: 'What platforms and tools do you use?',
      a: [
        'At Duke, I mostly work in Coursera, Canvas, and EdStem. I’ve also used Blackboard, Articulate Storyline, Rise, and Adobe Captivate.',
        'I start with what learners need to do, then work out how the platform can support it. I’m comfortable learning a new tool when the project calls for one.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html', note: 'tools and platforms' }],
      keys: 'platform platforms tools software lms learning management system coursera canvas edstem storyline rise captivate articulate authoring tools technology tech stack blackboard moodle scorm xapi app agnostic'
    },
    {
      id: 'faculty-experts', group: 'pm',
      phrases: ['do you work with faculty','subject matter experts'],
      q: 'Do you work with faculty and subject matter experts?',
      a: [
        'Yes, that’s a big part of my work. At Duke, I’ve partnered with faculty in nursing, engineering, data science, business, and other fields. I’ve also led design sprints with faculty across Duke University and Duke Health.',
        'Beyond individual projects, I’ve helped faculty, Duke Corporate Education partners, and fellow designers use the course design resources I developed.'
      ],
      links: [{ label: 'Project Management', href: 'project-management.html' }],
      keys: 'faculty professors professor instructors experts sme smes subject matter expert experts collaborate collaboration partners stakeholders duke health design sprints work with faculty'
    },
    {
      id: 'measure-learning', group: 'how',
      phrases: ['how do you measure effectiveness','how do you evaluate learning','how do you know learning is working', 'how do you measure whether learning is working', 'how do you measure learning', 'how do you evaluate your courses', 'how do you evaluate', 'evaluate your courses', 'evaluation'],
      q: 'How do you know whether a learning experience is helping?',
      a: [
        'I start by deciding what learners should be able to do and what would show that they can do it. Evaluation can be challenging in my current role because I don’t always have access to instructor evaluations or longer-term outcomes. I use what’s available, including learner testing, assessments, completion, ratings, flagged items, and written feedback. Each tells me something different.',
        'Where I’ve had more access, I’ve looked more closely. At High Point University, reported faculty confidence increased by 32% after Blackboard Bootcamp, and support requests fell by an average of 18%. At UNC Greensboro, I helped study students’ experiences with engineering, which led to a published paper.',
        'For my concept samples, I explain what I’d test next. In Light the Beacon, I’d compare responses to two short questions before and after, using new numbers, and ask how sure learners are of their answers. That would give me a starting point for looking at both skill and confidence.'
      ],
      links: [{ label: 'Light the Beacon', href: 'beacon-escape-room.html' }],
      keys: 'measure measuring evaluate evaluation effectiveness impact outcomes evidence data analytics learner analytics engagement results assessment improvement iterate continuous improvement metrics success'
    },
    {
      id: 'practice-assessment', group: 'how',
      phrases: ['tell me about assessment design', 'what is ungrading', 'do you use ungrading', 'why ungrading', 'have you used ungrading', 'alternative grading', 'do you design simulations', 'have you done gamification', 'do you build games', 'experience with assessment', 'assessment design'],
      q: 'What kinds of practice and assessment do you design?',
      a: [
        'I’ve designed hands-on coding practice, branching scenarios, interactive media, and case-based activities. I work with subject experts to decide what learners need to practice and what would give us useful evidence of their understanding.',
        'For Let’s Talk Digital You, we used ungrading, with more emphasis on feedback, reflection, and revision than on points. Students received TA feedback, reflected on their weekly work, and used a rubric to assign their final grade.',
        'We wanted students to feel comfortable exploring ideas and making mistakes. That was the intention, not something I’d assume happened for everyone. Their reflections helped us understand parts of that experience.'
      ],
      links: [{ label: 'Light the Beacon', href: 'beacon-escape-room.html', note: 'a playable example' }, { label: 'Space Medicine', href: 'space-medicine.html', note: 'a concept scenario with decisions under pressure' }, { label: 'Digital You', href: 'digital-you.html', note: 'ungrading in a for-credit course' }],
      keys: 'ungrading ungraded grades grading letter grades self-assessment self-grading feedback revision reflection practice assessment assessments quizzes quiz activities coding practice branching scenarios scenarios interactive media case-based simulations games gamification game-based simulations hands-on interactive'
    },
    {
      id: 'motivation', group: 'how',
      phrases: ['how do you design for learner motivation','learner motivation','design for motivation','how do you motivate learners','how do you keep learners motivated','how do you keep learners engaged','how do you engage learners','what keeps learners going','student motivation','learner engagement'],
      q: 'How do you design for learner motivation?',
      a: [
        'I try not to assume everyone arrives interested in the topic. Some learners are curious, some need a skill for work, and others are taking a required course. I want the experience to give each of them a reason to keep going.',
        'Clear goals, manageable steps, useful feedback, and chances to try again can help. So can examples that connect to learners’ lives and choices that matter to them. I’m interested in helping people feel more capable and curious, not just getting them to the next screen.',
        'In the Space Medicine concept, the mentor’s messages connect each video to the mission. In Light the Beacon, earlier answers help solve the final problem. Both still need testing with learners, so I’d want to see which parts actually help and which get in the way.'
      ],
      links: [{ label: 'Space Medicine', href: 'space-medicine.html' }, { label: 'Light the Beacon', href: 'beacon-escape-room.html' }],
      keys: 'motivation motivate motivated learner motivation student motivation engagement engage engaged keep going persistence meaning purpose curiosity interest required course relevance choice autonomy confidence progress milestones feedback try again retry goals momentum self-determination arcs reward gamification'
    },
    {
      id: 'design-process', group: 'how',
      phrases: ['what is your design process', 'whats your design process', 'what is your process', 'how do you approach a project', 'what instructional design models do you use', 'prototype', 'prototyping', 'rapid prototyping'],
      q: 'What’s your design process, from first idea to launch?',
      a: [
        'I start by asking who the learning is for, what they need, and what we’re trying to change or help them understand. I talk with experts and partners, review what already exists, and work out what we can reuse, adapt, or create. From there, we agree on learning goals, scope, and a plan.',
        'I like to share an outline or prototype early, while it’s still easy to change. As we build, I coordinate content reviews, production, and accessibility checks. After launch, I use the feedback and learning data available to decide what needs attention.',
        'The process varies by project, but I always want people to have something concrete to discuss rather than having to imagine the finished experience.'
      ],
      links: [{ label: 'Learning Design', href: 'learning-design.html', note: 'the process in more detail' }],
      keys: 'design process process workflow first idea to launch how do you work steps approach methodology start scope goals prototype build review launch iterate refine instructional design model'
    },
    {
      id: 'design-methods', group: 'how',
      phrases: ['action map', 'action maps', 'action mapping', 'have you used action mapping', 'have you worked with action maps', 'cathy moore', 'knowledge graph', 'knowledge graphs', 'concept map', 'concept maps', 'design methods', 'what methods do you use', 'design frameworks', 'co-design', 'codesign'],
      q: 'What design methods do you use?',
      a: [
        'I choose based on what the learning needs to accomplish. For AI for Nurses, action mapping helped me focus on what nurses need to do at work and build practice around those actions. For Space Medicine, we used a knowledge graph to connect ideas, identify what learners need to understand first, and see where concepts return later.',
        'For Light the Beacon, a curriculum map helped me check that the lessons, practice, and assessments addressed the standards. Across projects, I involve learners and experts where I can, share prototypes early, and plan how we’ll check learning before building.'
      ],
      links: [{ label: 'Learning Design', href: 'learning-design.html', note: 'my process and the methods I use' }, { label: 'AI for Nurses', href: 'ai-for-nurses.html#connections', note: 'an action map informed by nurses’ input' }, { label: 'Space Medicine', href: 'space-medicine.html#map', note: 'a knowledge graph for Week 2' }, { label: 'Light the Beacon', href: 'beacon-escape-room.html#map', note: 'a curriculum map and playable prototype' }],
      keys: 'method methods framework frameworks model models action map maps mapping cathy moore knowledge graph graphs concept map ontology co-design codesign prototype prototyping job training on-the-job performance behavior behaviors'
    },
    {
      id: 'led-team', group: 'pm',
      phrases: ['have you led a team', 'have you managed a team', 'do you manage people', 'do you have leadership experience', 'have you led or managed a team', 'managing people', 'manage people', 'people management', 'people manager'],
      q: 'Have you led or managed a team?',
      a: [
        'I’ve led and co-led project teams at Duke, working with faculty, subject experts, designers, media partners, and project leads. I also mentor designers and develop resources that help teams plan and deliver their work.',
        'I haven’t been a formal people manager, and no one reports directly to me. My leadership is through projects: helping people agree on the direction, making responsibilities clear, working through decisions, and keeping the work moving when plans change.'
      ],
      keys: 'led a team managed a team leadership lead manage people direct reports mentor mentoring designers team lead project lead management experience supervise stakeholders hands-on'
    },
    {
      id: 'collab-style', group: 'pm',
      phrases: ['what is your management style', 'what is your collaboration style', 'what is your working style', 'how do you work with a team', 'what is your biggest strength'],
      q: 'What’s your management and collaboration style?',
      a: [
        'I’m warm, direct, and collaborative. I ask questions, listen, and try to make sure we understand what matters to the people involved. I also like everyone to know what we’ve agreed on, what’s still undecided, and what happens next.',
        'I share work early so we can talk about something concrete. I’m comfortable figuring things out as we go, as long as we keep communicating. Part of my job is helping the team decide when another revision would be worthwhile and when something is ready.'
      ],
      keys: 'management style collaboration style working style how do you work with teams communication feedback leadership style warm direct collaborative strengths ambiguity ship decisions'
    },
    {
      id: 'learner-feedback', group: 'how',
      phrases: ['how do you use learner feedback', 'how do you use analytics', 'do you use learner research or user testing', 'how do you improve a course after launch', 'do you pilot courses'],
      q: 'How do you use learner feedback and analytics?',
      a: [
        'I try to hear from learners while there’s still time to change the design. For AI for Nurses, registered nurses reviewed our plans in a co-design session and piloted the courses. When nurses working away from the bedside said our first cases didn’t fit their day, we adapted several.',
        'After launch, I look at the feedback, assessment results, and analytics I can access. A low score or a drop-off point gives me a place to investigate, but not necessarily an explanation. I use those patterns alongside what learners say and do to decide what to clarify, change, or test next.'
      ],
      links: [{ label: 'AI for Nurses', href: 'ai-for-nurses.html' }],
      keys: 'learner feedback analytics data improve iterate pilot pilots focus groups co-design user testing learner research course evaluations assessment results signals continuous improvement ai for nurses nurses piloted'
    },
    {
      id: 'handle-feedback', group: 'pm',
      phrases: ['how do you handle disagreement', 'how do you handle feedback from faculty', 'what do you do when faculty disagree', 'how do you handle conflict', 'how do you handle scope creep'],
      q: 'How do you handle disagreement or feedback?',
      a: [
        'I start by asking what’s behind the concern. Often there’s a learner need, subject detail, or practical limitation we haven’t fully talked through. Once I understand it, I help us compare the options against the learning goals and the time and resources we have.',
        'On Duke projects, a scope of work and team charter give us a shared starting point, including how we’ll make decisions and handle disagreements. They don’t prevent every difficult conversation, but they make those conversations easier to have.'
      ],
      keys: 'disagreement conflict feedback faculty subject matter experts sme push back tradeoffs alignment scope of work team charter difficult conversations handle feedback criticism disagree'
    },
    {
      id: 'curriculum-vs-ld', group: 'teach',
      phrases: ['what is the difference between curriculum and learning design', 'curriculum design vs learning design', 'curriculum vs instructional design'],
      q: 'What’s the difference between curriculum and learning design?',
      a: [
        'I think of curriculum design as deciding what learners should understand or be able to do, how the ideas connect, and which standards or requirements matter. Learning design is about how they’ll get there through explanations, examples, practice, and feedback.',
        'In my teaching work, I often did both together. They overlap quite a bit, especially when you’re planning a unit and teaching it yourself.'
      ],
      keys: 'curriculum design versus learning design difference between curriculum and instructional design learning experience design standards goals activities practice feedback educator stem curriculum developer'
    },
    {
      id: 'curriculum-process', group: 'teach',
      phrases: ['what is your process for curriculum design', 'how do you write learning objectives', 'how do you align to standards', 'what standards do you use', 'approach to curriculum'],
      q: 'What’s your process for curriculum design?',
      a: [
        'I start with the learners and what they need to understand or do. I also look at the standards or requirements for the setting, such as NGSS, Common Core, or accreditation requirements.',
        'Then I turn those into questions worth exploring and clear learning goals, often written as “I can” statements. I plan the examples, practice, and assessments so they build on one another. Subject experts help check accuracy and relevance, and feedback helps me see where the sequence or support needs adjusting.'
      ],
      keys: 'curriculum design process standards ngss common core accreditation learning objectives learning goals write objectives essential questions backward design sequence scope and sequence map assessment alignment'
    },
    {
      id: 'inquiry', group: 'teach',
      phrases: ['do you use inquiry-based learning', 'do you use inquiry', 'what is inquiry-based learning', 'inquiry-based teaching', 'guided inquiry', 'do you teach with inquiry'],
      q: 'Do you use inquiry-based learning?',
      a: [
        'Yes. Much of my teaching has involved helping students investigate a question rather than starting by giving them the explanation. At New Garden Friends School, I taught middle school science and high school environmental science through guided inquiry. I also used hands-on investigation in my Duke TIP courses and Challenger Learning Center missions.',
        'I’ve helped teachers use that approach through professional development in physical science and engineering design, including Mastering Physical Science and Engineering is Elementary.',
        'I look for ways to do this online, too. In the Space Medicine concept, learners investigate the 1862 balloon flight before the videos explain what happened.'
      ],
      links: [{ label: 'Space Medicine', href: 'space-medicine.html' }, { label: 'Résumé', href: 'resume.html' }],
      keys: 'inquiry inquiry-based guided inquiry hands-on investigate investigation discovery learning student-centered active learning science teaching ngss duke tip teacher professional development workshops engineering is elementary eie mastering physical science'
    },
    {
      id: 'philosophy', group: 'teach',
      phrases: ['what is your teaching philosophy', 'teaching philosophy', 'what is your philosophy of teaching', 'what is your learning philosophy', 'what learning theories do you use', 'what do you believe about learning', 'how do people learn best'],
      q: 'What’s your teaching philosophy?',
      a: [
        'I want learners to have a chance to do the thinking themselves: ask questions, investigate something, test an idea, and explain what they found. My graduate study shaped that approach, but so did seeing what happened when students had something interesting to figure out.',
        'That doesn’t mean leaving them to work it all out alone. I plan clear goals, a sequence that builds, and support when they need it. I also look for different ways learners can take part and show what they understand.'
      ],
      links: [{ label: 'About me', href: 'about.html' }],
      keys: 'teaching philosophy learning philosophy beliefs believe how people learn learning theory theories pedagogy approach to teaching constructivism inquiry hands-on feedback essential questions i can statements udl ngss duke tip professional development'
    },
    {
      id: 'ngss', group: 'teach',
      phrases: ['have you worked with ngss', 'do you use ngss', 'do you know ngss', 'are you familiar with ngss', 'next generation science standards', 'what is your experience with ngss', 'ngss'],
      q: 'Have you worked with NGSS?',
      a: [
        'Yes. At New Garden Friends School, I planned and taught middle school science and high school environmental science aligned to the Next Generation Science Standards, using hands-on, guided inquiry. At the Challenger Learning Center, I developed NGSS-aligned mission activities for grades 4–12 and worked with teachers to connect them to classroom learning.',
        'I’ve also led teacher professional development in physical science and engineering design, and researched how students and teachers use science and engineering practices, one of NGSS’s three dimensions.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html' }],
      keys: 'ngss next generation science standards science standards three dimensions science and engineering practices k-12 science middle school high school inquiry duke tip teacher professional development engineering design'
    },
    {
      id: 'teacher-pd', group: 'teach',
      phrases: ['have you led teacher professional development', 'do you do teacher professional development', 'teacher professional development', 'have you trained teachers', 'do you train teachers', 'teacher workshops', 'have you coached teachers', 'teacher pd', 'mastering physical science', 'k-12 teachers', 'k12 teachers', 'worked with teachers'],
      q: 'Have you led teacher professional development?',
      a: [
        'Yes. With UNC Chapel Hill and Durham Public Schools, I led the Mastering Physical Science series for elementary and middle school teachers. We worked on topics like states of matter, forces and motion, and amusement park physics.',
        'At UNC Greensboro, I led Engineering is Elementary workshops and supported teachers as they brought the units into their classrooms. I’ve also presented teacher workshops at the North Carolina Science Teachers Association, worked with teachers on Challenger mission activities, and trained Duke TIP instructional staff.',
        'My research has included teacher learning, too. At UNC Chapel Hill, I developed K–8 physical science content and professional development. At UNC Greensboro, I studied how elementary teachers’ beliefs about knowledge in science and engineering changed after teaching engineering.'
      ],
      links: [{ label: 'Teachers as Engineers', href: 'engineering-is-elementary.html' }, { label: 'Résumé', href: 'resume.html' }],
      keys: 'teacher professional development pd teachers workshops workshop train training coach coaching educators in-service k-12 elementary middle school physical science engineering is elementary eie mastering physical science unc chapel hill durham public schools unc greensboro ncsta duke tip instructional staff research'
    },
    {
      id: 'stem-curriculum', group: 'teach',
      phrases: ['how do you approach stem curriculum design', 'stem curriculum design', 'how do you design stem curriculum', 'how do you design a science unit', 'how do you use phenomena', 'what are the three dimensions of ngss', 'how do you use formative assessment'],
      q: 'How do you approach STEM curriculum design?',
      a: [
        'I start with what students need to understand, then look for a phenomenon or problem that gives them a reason to investigate. With NGSS, I plan the three dimensions together: disciplinary core ideas, science and engineering practices, and crosscutting concepts.',
        'I build in chances to ask questions, make models, work with evidence, and revise explanations, with guidance along the way. Short checks help me see how students are thinking and what we need to revisit.',
        'I want the work to be challenging without making it hard to participate. That means a clear purpose, more than one way to take part, and enough support for students to keep working through an idea.'
      ],
      keys: 'stem curriculum design science unit unit design phenomenon phenomena anchoring problem three dimensions disciplinary core ideas science and engineering practices crosscutting concepts backward design formative assessment checks models evidence explanations rigorous accessible ngss'
    },
    {
      id: 'labs', group: 'how',
      phrases: ['coursera labs','hands-on coding labs'],
      q: 'What’s your experience with Coursera Labs?',
      a: [
        'I co-designed Coursera’s integrated labs interface, which is now used platform-wide. We applied Universal Design for Learning to make technical learning environments easier to navigate. I also presented on skill development with Coursera Labs at the 2022 Coursera Conference.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html' }],
      keys: 'coursera labs lab labs interface hands-on coding technical learning environments platform-wide integrated labs udl coding practice programming data science'
    },
    {
      id: 'technical-training', group: 'how',
      phrases: ['do you do corporate training','technical training','workforce training'],
      q: 'Do you design technical or workforce training?',
      a: [
        'Yes. I’ve designed hands-on coding exercises and other practice for technical and professional audiences. I’ve also trained faculty, Duke Corporate Education partners, and fellow designers to use course design resources.',
        'AI for Nurses is another example. It focuses on decisions nurses face at work and offers continuing education credit.'
      ],
      links: [{ label: 'AI for Nurses', href: 'ai-for-nurses.html' }],
      keys: 'technical training workforce corporate training corporate learning professional development upskilling industry employees field employees on the job training job aids simulations technical audiences business'
    },
    {
      id: 'frameworks', group: 'how',
      phrases: ['addie', 'kirkpatrick', 'bloom', 'blooms', 'blooms taxonomy', 'bloom’s taxonomy', 'backward design', 'sam model', 'learning design frameworks', 'what frameworks do you use', 'what models do you use', 'four levels of evaluation'],
      q: 'Which learning design frameworks do you use?',
      a: [
        'I draw most often on backward design, action mapping, and Universal Design for Learning. For evaluation, I use the four levels often associated with Kirkpatrick: reaction, learning, behavior, and results.',
        'I don’t apply every framework to every project. I choose what helps with the problem we’re working on. If your team uses ADDIE, Bloom’s taxonomy, or another model, I’d be happy to talk about how my process connects to it.'
      ],
      links: [{ label: 'Learning Design', href: 'learning-design.html' }],
      keys: 'frameworks models addie kirkpatrick bloom taxonomy backward design udl action mapping evaluation levels theory'
    },
    {
      id: 'scorm', group: 'how',
      phrases: ['scorm', 'xapi', 'tin can'],
      q: 'Do you work with SCORM or xAPI?',
      a: [
        'I’ve worked with SCORM and xAPI in earlier roles, using Articulate Storyline, Rise, and Adobe Captivate. I don’t use them day to day in my current Duke work, which is mostly in Coursera and Canvas, but I’m comfortable returning to them when a project needs a packaged course for another learning management system.'
      ],
      links: [{ label: 'Learning Design', href: 'learning-design.html' }],
      keys: 'scorm xapi tin can package export standards authoring storyline rise captivate'
    },
    {
      id: 'can-code', group: 'ai',
      phrases: ['can you code', 'do you code', 'do you program', 'coding skills', 'programming skills', 'are you a developer', 'do you know html', 'do you know javascript', 'html and javascript'],
      q: 'Can you code?',
      a: [
        'I build with AI-assisted HTML, CSS, and JavaScript. That’s how I made this portfolio, its playable samples, the Claude API-powered Interactivity Generator, and the Coursera plugin that displays its activities.',
        'I’m not a software engineer by training. I design the experience, use AI to help write and revise the code, and test what we build. I’ve also worked with faculty to design coding practice for technical courses.'
      ],
      links: [{ label: 'Interactivity Generator', href: 'interactivity-generator.html' }],
      keys: 'code coding programming developer html css javascript software engineer build technical skills'
    },
    {
      id: 'video-scripts', group: 'how',
      phrases: ['how do you work with media teams', 'work with media teams', 'media team', 'media teams', 'media producers', 'media production', 'video scripts', 'do you write scripts', 'script writing', 'storyboard', 'storyboards', 'experience with video', 'video production'],
      q: 'Do you work on video, scripts, and storyboards?',
      a: [
        'Yes. Video is a big part of the courses I’ve worked on. For Space Medicine, I coordinated the media teams and guided script development. For AI for Nurses, I worked with a Media Designer and Media Producer through scripting, recording, and visual design. We kept faculty videos under seven minutes.',
        'I use script and storyboard reviews to work through details before production. In one review, we caught a red blood cell flowing the wrong way in an animation. I’ve also used Vyond and Camtasia.'
      ],
      links: [{ label: 'Space Medicine', href: 'space-medicine.html' }, { label: 'AI for Nurses', href: 'ai-for-nurses.html#timeline' }],
      keys: 'video videos script scripts storyboard storyboards media team producer recording animation production vyond camtasia'
    },
    {
      id: 'healthcare', group: 'how',
      phrases: ['healthcare', 'health care', 'worked in healthcare', 'healthcare experience', 'medical education', 'clinical education', 'worked with nurses', 'nursing education', 'telehealth'],
      q: 'Have you designed learning for healthcare?',
      a: [
        'Yes. Along with AI for Nurses, I’ve worked on Stress First Aid for Healthcare Workers, Legal Nurse Consulting, and a telehealth course with interactive video cases for physicians and nurses. I also worked on an AI and machine learning course for surgical practice with the American College of Surgeons, as well as Space Medicine.',
        'For AI for Nurses, I partnered with three School of Nursing faculty and brought registered nurses into the design. Nursing continuing education requirements also helped shape the course and assessments.'
      ],
      links: [{ label: 'AI for Nurses', href: 'ai-for-nurses.html' }, { label: 'Project Archive', href: 'course-portfolio.html' }],
      keys: 'healthcare health care medical clinical nursing nurses physicians surgeons telehealth hospital continuing education'
    },

    /* ---------- Contact ---------- */
    {
      id: 'work-type', group: 'contact',
      phrases: ['what type of work', 'what kind of work', 'what kinds of work', 'what are you looking for', 'looking for work', 'looking for a job', 'open to work', 'open to', 'new job', 'new jobs', 'new role', 'new roles', 'new opportunity', 'new opportunities', 'available for', 'available for hire', 'for hire', 'full time', 'full-time', 'job', 'jobs', 'hiring', 'employment', 'freelance', 'consulting', 'consultant', 'contract', 'contractor', 'part time'],
      q: 'What type of work are you looking for?',
      a: [
        'I’m open to full-time roles, consulting, and contract projects where I can design learning, build things people can try, and work closely with a team. I’d love to bring my background in K–12 teaching, teacher professional development, higher education, and STEM to that work.',
        'I’m especially interested in thoughtful uses of AI, opportunities to test ideas with learners, and helping educators build tools of their own. If that sounds like something your team is working on, I’d love to hear about it.'
      ],
      links: 'contact',
      keys: 'type kind work looking roles role jobs job open opportunities opportunity full time fulltime consulting consultant contract contractor freelance project projects hire hiring employment position positions career availability available seeking want next step ideal'
    },
    {
      id: 'location-roles', group: 'contact',
      phrases: ['where are you', 'where do you live', 'where are you based', 'where are you located', 'are you remote', 'are you in maine', 'live in maine', 'based in', 'relocate', 'relocation', 'work remotely', 'remote work', 'remote roles', 'in person', 'time zone','remote work','open to remote','are you open to remote work','remote roles','work remotely'],
      q: 'Where are you based?',
      a: [
        'I’m based in Maine and am currently interested in remote work or roles here in Maine.',
        'If you have something in mind, I’d be happy to talk.'
      ],
      links: 'contact',
      keys: 'location located based live living where maine remote local onsite on-site hybrid relocate relocation time zone state'
    },
    {
      id: 'resume', group: 'contact',
      phrases: ['your resume','your cv','see your resume'],
      q: 'Can I see your résumé?',
      a: [
        'Yes! There’s a full, searchable version on this site. The Download résumé button opens a shorter PDF in a new tab.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html' }],
      keys: 'resume résumé cv curriculum vitae download pdf word docx search experience history employment work history education publications presentations awards'
    },
    {
      id: 'contact', group: 'contact',
      phrases: ['hire you', 'work together', 'phone', 'call you', 'email you', 'get in touch', 'schedule a call', 'set up a call', 'book a call', 'schedule a meeting', 'set up a meeting', 'schedule an interview', 'your email', 'email address', 'reach you', 'contact you'],
      q: 'How can I contact you?',
      a: [
        'Send me an email or connect with me on LinkedIn. Whether you have a project in mind, a question about my work, or just want to say hello, I’d love to hear from you.'
      ],
      links: 'contact',
      keys: 'contact email reach message hire hiring work together collaborate connect linkedin talk get in touch freelance consulting available availability'
    },
    {
      id: 'logistics', group: 'contact',
      phrases: ['when can you start', 'start date', 'availability', 'when are you available', 'notice period', 'salary', 'salary expectations', 'compensation', 'hourly rate', 'day rate', 'pay rate', 'references', 'reference'],
      q: 'Can we talk about start date, salary, or references?',
      a: [
        'Of course. Those details are easier to discuss directly, so send me a note and we can talk through what you have in mind. I’m also happy to provide references on request.'
      ],
      links: 'contact',
      keys: 'start date availability notice salary compensation rate references'
    },
    {
      id: 'lets-talk', group: 'contact',
      phrases: ['biggest weakness', 'greatest weakness', 'your weakness', 'your weaknesses', 'weakness', 'weaknesses', 'area of growth', 'areas of growth', 'growth area', 'areas for improvement', 'what would you do differently', 'what would you change', 'do differently', 'why are you leaving', 'why do you want to leave', 'why should we hire you', 'why should i hire you', 'what makes you different', 'what sets you apart', 'tell me about a time', 'biggest mistake', 'biggest failure', 'interview question', 'interview questions'],
      q: 'Do you answer interview-style questions here?',
      a: [
        'I’d be happy to talk about those directly. I’ve included some project examples and lessons learned here, but questions about where I’m growing or what I’d bring to your team are better as a conversation.',
        'Send me a note, and we can find a time.'
      ],
      links: 'contact',
      keys: 'interview weakness strengths growth improve differently leaving mistake failure unique different apart'
    },
    {
      id: 'work-auth', group: 'contact',
      phrases: ['work authorization', 'authorized to work', 'work in the us', 'visa', 'sponsorship', 'need sponsorship', 'citizen', 'us citizen', 'citizenship'],
      q: 'Are you authorized to work in the US?',
      a: [
        'Yes. I’m a US citizen based in Maine and am authorized to work in the United States.'
      ],
      links: 'contact',
      keys: 'work authorization authorized visa sponsorship citizen citizenship eligible united states'
    },
    {
      id: 'about-chat', group: 'contact',
      phrases: ['is this ai','is this a bot','are you a bot','are you ai','is this chatgpt','who am i talking to','are you real','is this a chatbot','how does this work'],
      q: 'How does this Q&A work?',
      a: [
        'I wrote these answers ahead of time. When you type a question, the tool looks for the closest match rather than generating a new answer. It doesn’t use AI, and nothing you type is saved or sent anywhere.'
      ],
      keys: 'chat chatbot bot this tool how does this work ai is this ai real person human privacy data saved stored'
    }
  ]
};