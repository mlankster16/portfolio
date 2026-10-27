/* Questions and answers for the portfolio Q&A chat.
   Edit this file to change what the chat says. Nothing else needs to change.

   - groups: the topic buttons shown first.
   - items: one entry per question.
       id      short unique name
       group   one of the group ids below
       q       the question as shown to visitors
       a       the answer, one string per paragraph
       links   optional page links shown under the answer: { label, href, note }
       keys    extra words and phrases a visitor might type (helps matching)
   - Write answers in first person, plain and warm. No em dashes. */
window.FAQ_DATA = {
  title: 'Questions about my work',
  greeting: 'Hi! These are answers I wrote ahead of time. Pick a topic, choose a question, or type your own.',
  note: 'This is a Q&A tool, not an AI. It matches your question to the closest answer I wrote, and nothing you type is saved or sent anywhere.',
  noMatch: 'I’m not sure I have an answer for that one. You can try one of these questions, or send me a message and I’ll be glad to help.',
  email: 'meganrlancaster@gmail.com',
  linkedin: 'https://www.linkedin.com/in/megan-lancaster-pmp/',

  groups: [
    { id: 'about', label: 'About me' },
    { id: 'samples', label: 'Samples' },
    { id: 'pm', label: 'Project management' },
    { id: 'how', label: 'How I work' },
    { id: 'contact', label: 'Contact' }
  ],

  items: [
    /* ---------- About me ---------- */
    {
      id: 'what-do-you-do', group: 'about',
      phrases: ['what do you do','who are you','tell me about yourself'],
      q: 'What do you do?',
      a: [
        'I’m a Senior Learning Experience Designer, STEM Educator, and PMP®-certified Project Manager. I work with experts to turn complex ideas into learning people can use.',
        'Along the way, I help teams decide what to focus on, how learners will practice, and what we can build well with the time and resources available.'
      ],
      links: [{ label: 'About me', href: 'about.html' }],
      keys: 'role who are you introduce yourself learning designer instructional designer experience designer project manager pmp occupation profession tell me about yourself'
    },
    {
      id: 'kinds-of-projects', group: 'about',
      q: 'What kinds of learning projects have you worked on?',
      a: [
        'My work spans K–12 classrooms, teacher professional development, undergraduate courses, and online learning for working professionals. At Duke, I’ve partnered with experts across nursing, engineering, data science, business, and other fields to design and launch more than 50 courses and Specializations.',
        'Across those settings, I enjoy helping people connect what they’re learning to something they can investigate, practice, or use.'
      ],
      links: [{ label: 'Course Portfolio', href: 'course-portfolio.html', note: 'every course and Specialization' }],
      keys: 'types of projects industries fields subjects k12 k-12 teacher professional development undergraduate working professionals nursing engineering data science business courses specializations clients'
    },
    {
      id: 'stem-background', group: 'about',
      phrases: ['do you teach','teaching experience','are you a teacher','your background','where did you study','what did you study'],
      q: 'How does your STEM background shape your work?',
      a: [
        'I studied physics, engineering physics, and science education, and I’ve taught hands-on STEM courses to students of different ages.',
        'That experience shapes the questions I ask as a designer: What could learners explore? What might they predict or try? What would help them explain their thinking? I look for opportunities to make an idea concrete and give learners room to work with it.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html', note: 'education and teaching experience' }],
      keys: 'background education degree degrees studied study physics engineering science teacher teaching taught classroom stem school university where did you go to school'
    },
    {
      id: 'joy', group: 'about',
      phrases: ['what brings you joy', 'brings you joy', 'what do you love', 'what do you enjoy about your work', 'what motivates you', 'what drives you'],
      q: 'What brings you joy?',
      a: [
        'I love taking an idea, building something we can try, and making it better as we learn. Working quickly gives me energy, especially when I can share an early version, hear what people think, and use that feedback to try something new.',
        'What makes that exciting is finding an approach that meets the needs of the people I\u2019m designing for. That might mean helping a learner make sense of a difficult concept, giving faculty a way to bring their ideas to life, or working through priorities with project partners. I love the puzzle of bringing those needs together and creating something useful with a team.'
      ],
      links: [{ label: 'About me', href: 'about.html' }],
      keys: 'joy love enjoy passion motivation motivates drives excites exciting rewarding energy prototype feedback iterate puzzle'
    },
    {
      id: 'outside-work', group: 'about',
      phrases: ['outside of work', 'outside work', 'for fun', 'free time', 'in your spare time', 'what do you do for fun'],
      q: 'What do you enjoy outside of work?',
      a: [
        'I\u2019m happiest outdoors! I love hiking, camping, traveling, and spending time surrounded by nature. I enjoy exploring somewhere new, but I\u2019m just as happy taking a familiar trail and enjoying a little time outside my current state of Maine.'
      ],
      keys: 'hike hikes hiker hobbies hobby interests outside work fun free time spare time weekends outdoors hiking camping travel traveling nature trail personal life'
    },
    {
      id: 'credentials', group: 'about',
      phrases: ['what is your education','where did you go to school','what degrees do you have','are you pmp certified','do you have a certification'],
      q: 'What are your education and certifications?',
      a: [
        'I’m a Project Management Professional (PMP®) through the Project Management Institute. I also hold an M.Ed. in Science Education from North Carolina State University, an M.S. in Engineering Physics from Appalachian State University, and a B.S. in Physics from the University of North Carolina at Greensboro.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html' }],
      keys: 'education degree degrees school university college masters bachelors physics engineering physics science education nc state north carolina state appalachian state unc greensboro pmp certification certified credential credentials project management professional where did you go to school study studied graduate'
    },
    {
      id: 'work-history', group: 'about',
      phrases: ['work history','career history','how long have you worked','years of experience'],
      q: 'What’s your work history?',
      a: [
        'I’ve worked at Duke since 2020, first as a Learning Experience Designer and now as a Senior Learning Experience Designer and Project Manager. I’ve led learning design and project delivery for more than 50 online courses and Specializations there.',
        'Before Duke, I was an Educational Technology Specialist at High Point University, where I led campus-wide rollouts that supported more than 100 faculty. Before that, I was a Program Manager and Instructional Designer at UNC Greensboro, including designing the university’s first MOOC.',
        'Earlier in my career, I taught science and STEM courses to K–12 students. My résumé has the details.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html' }],
      keys: 'work history experience career background jobs employment previous roles employers high point university unc greensboro uncg duke years of experience how long timeline resume cv positions'
    },
    {
      id: 'recognition', group: 'about',
      phrases: ['any awards','have you presented','have you published'],
      q: 'Have you received any awards, or presented at conferences?',
      a: [
        'I received the Coursera Vision & Values Award in 2025, recognizing principled innovation, platform leadership, and AI-integrated teaching tools. In 2021, I received the Duke Presidential Award for contributions to Duke’s move to remote teaching during COVID-19.',
        'I’ve also presented on designing with empathy and trauma-informed principles in asynchronous MOOCs at the UPCEA DT&L conference in 2024, and on accelerating skill development with Coursera Labs at the 2022 Coursera Conference. My résumé lists my publications and other presentations.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html' }],
      keys: 'awards award honors recognition presentations presented conference conferences speaker speaking publications published research papers journal articles vision values presidential award trauma-informed upcea dt&l'
    },
    {
      id: 'classroom-experience', group: 'about',
      phrases: ['k-12 experience','do you have teaching experience','have you taught','what did you do at the challenger learning center','challenger learning center','virtual mission flight director','what is a flight director'],
      q: 'Do you have classroom or K–12 experience?',
      a: [
        'Yes. I taught middle school science and high school environmental science at New Garden Friends School, using hands-on, guided inquiry. I also taught STEM courses for the Duke Talent Identification Program, coordinated Engineering is Elementary lessons for elementary students, and worked as a Virtual Mission Flight Director at the Challenger Learning Center, leading virtual missions to the Moon and Mars.',
        'I also designed and led teacher professional development workshops in engineering education.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html' }],
      keys: 'classroom teaching teacher taught k-12 k12 middle school high school science teacher stem instructor elementary engineering is elementary eie challenger learning center flight director duke tip professional development workshops'
    },
    /* ---------- Samples ---------- */
    {
      id: 'more-examples', group: 'samples',
      phrases: ['can i see something not on your portfolio', 'i dont see', 'i don\'t see', 'is there anything else', 'more examples', 'other examples', 'other samples', 'can you make a sample', 'can you mock something up', 'can you do a design exercise', 'work sample'],
      q: 'Can I see something that isn’t on your portfolio?',
      a: [
        'Yes! What I share here is a general representation of my work, not the whole picture. If you don’t see the kind of example you’re looking for, I likely have one I’m happy to share.',
        'If I don’t, I can mock something up quickly to show how I’d approach your design ask. Just send me a note with what you have in mind.'
      ],
      links: 'contact',
      keys: 'example examples sample samples more other not on portfolio not here missing something else specific type show me mock up mockup design exercise work sample portfolio request share'
    },
    {
      id: 'where-start', group: 'samples',
      phrases: ['where to start','where do i start','where should i begin','where to begin','what should i look at first','what is your favorite sample','which sample should i look at'],
      q: 'Where should I start?',
      a: ['It depends on what you’re curious about. Space Medicine, AI for Nurses, and Digital You are live projects. Light the Beacon and the reimagined Space Medicine Week 2 are concepts I designed to show my work. On the Home page, you can filter the samples by project type, features, audience, or platform.'],
      links: [
        { label: 'Space Medicine', href: 'space-medicine.html', note: 'a Coursera course, with Week 2 reimagined as a guided story' },
        { label: 'Light the Beacon', href: 'beacon-escape-room.html', note: 'a playable Grade 6 math escape room' },
        { label: 'AI for Nurses', href: 'ai-for-nurses.html', note: 'a full Specialization, from start to launch' },
        { label: 'Digital You', href: 'digital-you.html', note: 'a for-credit course in Canvas' },
        { label: 'Project Management', href: 'project-management.html', note: 'how I scope, manage, and deliver projects' },
        { label: 'Course Portfolio', href: 'course-portfolio.html', note: 'everything I’ve developed over the last six years' }
      ],
      keys: 'start begin first overview where to begin best work highlights recommend recommendation tour what should i look at see samples portfolio examples favorite hiring technical training higher ed custom design group category show me higher ed work filter filters audience platform features k-12 workforce lifelong learning'
    },
    {
      id: 'in-use', group: 'samples',
      phrases: ['are all the projects in use','which projects are real','which are real','real or concept','live or concept','what is a concept','what are concepts','are these real','are these real projects','what is a live project','proof of concept','learning design of your live courses','see your live courses','show your live work','why are some projects concepts'],
      q: 'Which projects are real, and which are concepts?',
      a: [
        'Space Medicine, AI for Nurses, and Digital You are live projects: real courses I worked on with Duke faculty and partners. Space Medicine launched on Coursera in 2021, AI for Nurses launched in September 2026, and Digital You ran as a for-credit course in Spring 2024. On Space Medicine, the original course is live, and the reimagined Week 2 module is a concept I built.',
        'Light the Beacon and the reimagined Space Medicine Week 2 are concepts: custom designs I created to show my work. Because of intellectual property, it’s harder for me to show the learning design behind live courses, so the concepts let me share what I can do and what’s possible beyond them. They’re proofs of concept, and they would need further research, development, and testing before being used with learners.',
        'On the Home page, each sample is marked Live project or Just for fun, and you can filter by project type, features, audience, or platform.'
      ],
      keys: 'real in use live launched concept concepts prototype proof of concept hypothetical actual production published difference live project ip intellectual property confidential confidentiality why concepts custom design'
    },
    {
      id: 'try-concepts', group: 'samples',
      phrases: ['can i try the concepts', 'can i try the samples', 'are the interactives working', 'are the samples interactive'],
      q: 'Can I try the concepts?',
      a: [
        'Yes. Light the Beacon is interactive on its project page, and the Space Medicine Week 2 concept is interactive on the Space Medicine page.'
      ],
      links: [{ label: 'Light the Beacon', href: 'beacon-escape-room.html' }, { label: 'Space Medicine', href: 'space-medicine.html' }],
      keys: 'try interactive demo play can i try the concepts samples working prototypes are they interactive do they work live demo'
    },
    {
      id: 'concept-making', group: 'samples',
      phrases: ['how did you make your concept samples', 'what tools did you use for the concepts', 'how did you build the samples'],
      q: 'How did you make your concept samples?',
      a: [
        'For Space Medicine and Light the Beacon, I designed the learning sequence, including the practice, feedback, and assessment, and then built an interactive prototype to show how it would work. I used Claude Design, Claude Code, and occasionally ChatGPT as thought and design partners throughout.',
        'Both are prototypes, and they would need review with subject experts and testing with learners before anyone used them.'
      ],
      links: [{ label: 'Space Medicine', href: 'space-medicine.html' }, { label: 'Light the Beacon', href: 'beacon-escape-room.html' }],
      keys: 'how did you make how did you build what tools did you use tools role what did you do process concept samples prototype claude design claude code ai partner built made created designed concepts'
    },
    {
      id: 'ip-assets', group: 'samples',
      phrases: ['can you share the full assets for your live courses', 'can i see your live courses', 'can i see the course files', 'why are there no live course samples', 'can i see your work', 'why can\'t you share the full assets','why can\'t i see the full assets','why cant you share','why are the live courses not shown'],
      q: 'Why can’t you share the full assets for your live courses?',
      a: [
        'Live courses (Coursera and Canvas) were developed with Duke faculty and partners, so intellectual property and proprietary restrictions limit what I can share publicly. I can share selected snippets of work, and I’m happy to talk through the design decisions, my role, and how the work came together.'
      ],
      keys: 'full assets live courses share assets course files intellectual property proprietary ip restrictions confidential portfolio samples snippets can i see the course can i see your work coursera canvas duke permission'
    },
    {
      id: 'course-count', group: 'samples',
      q: 'How many courses have you worked on?',
      a: [
        'Since 2020, I’ve designed and developed 47 Coursera courses and 12 Coursera Specializations with Duke faculty, with more than 377,000 enrollments. I’ve also built courses on Canvas and other platforms.',
        'The Course Portfolio has the full list.'
      ],
      links: [{ label: 'Course Portfolio', href: 'course-portfolio.html' }],
      keys: 'how many count total courses specializations enrollments learners enrolled numbers stats statistics scale impact reach years 2020 catalog list archive'
    },
    {
      id: 'top-rated', group: 'samples',
      phrases: ['which courses are rated highest','best rated courses','highest rated course'],
      q: 'Which of your courses are rated highest?',
      a: [
        'A few favorites from the Course Portfolio: the Financial Management Specialization has a 4.8 out of 5 average rating with 59,525 enrolled. Space Medicine also has 4.8 out of 5, with 29,777 enrolled. The AI in Nursing Practice Specialization, new in 2026, has a 5.0 out of 5 so far, with 150+ enrolled.',
        'Across everything, I’ve designed 47 Coursera courses and 12 Specializations with more than 377,000 enrollments.'
      ],
      links: [{ label: 'Course Portfolio', href: 'course-portfolio.html' }],
      keys: 'rated rating ratings highest best top favorite favourite reviews review stars popular most popular enrollments enrolled financial management space medicine ai in nursing practice'
    },
    {
      id: 'space-medicine', group: 'samples',
      phrases: ['what is space medicine', 'what did you do on space medicine', 'is the week 2 module live', 'what happened to glaisher and coxwell', 'how do you work with media teams', 'work with media teams', 'media team', 'media teams', 'media producers', 'media production'],
      q: 'What is Space Medicine?',
      a: [
        'Space Medicine is a Duke Coursera course launched in 2021. As Senior Learning Experience Designer and Project Manager, I managed the project and led the learning design, coordinating media production, guiding scripts, and shaping the course structure. It has reached nearly 30,000 learners.',
        'Separately, I reimagined Week 2 as a guided story. Dr. Elena Rivera, a lead flight surgeon, guides learners by chat the night before a high-altitude flight. They investigate James Glaisher and Henry Coxwell’s 1862 balloon flight, do a short activity right after each video, and make the calls in a live cabin-pressure scenario on launch day. The module is a portfolio concept and isn’t part of the live Coursera course.'
      ],
      links: [{ label: 'Explore the course and Week 2 concept', href: 'space-medicine.html' }],
      keys: 'space medicine coursera balloon glaisher coxwell hypoxia altitude week 2 exercise interactive module reimagined nasa astronaut what did you do on space medicine is the week 2 module live live course concept role'
    },
    {
      id: 'space-week2', group: 'samples',
      phrases: ['what did you redesign', 'how did you redesign week 2', 'how did you make the week 2 module'],
      q: 'How did you redesign Space Medicine Week 2?',
      a: [
        'I kept the course’s existing videos and built the week around a story. Dr. Elena Rivera sends each video with a note on what to watch for, and after each one learners act on the idea: they rebuild Glaisher’s flight from his logbook, trace one breath’s oxygen from nose to mitochondria, watch a training crew for signs of hypoxia, calculate the oxygen in each breath at three altitudes, and design the atmosphere for an airliner, a spacesuit, and the space station. The week ends with a live scenario: cabin pressure drops, and learners make the calls, oxygen first, then descend.',
        'The goal was to help learners connect the videos and practice across the week, so each topic builds on the last. I built the module with Claude Design and Claude Code, and the images are concept mockups I generated with ChatGPT.'
      ],
      links: [{ label: 'Space Medicine', href: 'space-medicine.html' }],
      keys: 'redesign reimagined week 2 what did you redesign how did you make module exercises hypothesis investigate evidence simulator quiz cabin pressure final challenge redesign balloon activities after each video design process tools claude design claude code'
    },
    { /* DRAFT for Megan to edit */
      id: 'space-1862', group: 'samples',
      phrases: ['why start with the balloon flight', 'why the 1862 balloon flight', 'why glaisher', 'why a case study first'],
      q: 'Why does Space Medicine Week 2 start with the 1862 balloon flight?',
      a: [
        'The original course opens each week with a case, so learners meet the symptoms before the vocabulary. James Glaisher and Henry Coxwell’s 1862 balloon flight shows what low oxygen does to the body in a real story.',
        'In the reimagined week, learners rebuild the flight from Glaisher’s logbook first. Then each video adds a new lens on the same flight: physiology, pathophysiology, physics, and engineering.'
      ],
      links: [{ label: 'Space Medicine', href: 'space-medicine.html' }],
      keys: '1862 balloon flight glaisher coxwell case study first why start story history symptoms before vocabulary lenses'
    },
    { /* DRAFT for Megan to edit */
      id: 'space-mentor', group: 'samples',
      phrases: ['why a mentor', 'why a chat', 'who is dr rivera', 'who is elena rivera', 'why dr rivera'],
      q: 'Why use a mentor chat in Space Medicine?',
      a: [
        'Dr. Elena Rivera is a lead flight surgeon I created for the reimagined week. She guides learners by chat the night before a high-altitude flight, so every video arrives with a reason to watch it and a note on what to look for.',
        'The chat also connects the week. Instead of moving from video to video, learners talk with one mentor, act on each idea, and carry what they learn into the launch-day scenario.'
      ],
      links: [{ label: 'Space Medicine', href: 'space-medicine.html' }],
      keys: 'mentor chat dr elena rivera flight surgeon character story guide narrative why chat conversation'
    },
    { /* DRAFT for Megan to edit */
      id: 'space-cabin', group: 'samples',
      phrases: ['cabin pressure', 'final scenario', 'live scenario', 'launch day scenario', 'what happens at the end'],
      q: 'What happens in the Space Medicine cabin pressure scenario?',
      a: [
        'On launch day, the cabin loses pressure and learners make the calls. They read the crew’s signs over the radio, work out how much oxygen each breath holds, choose a safe altitude to descend to, and respond when a mask fails.',
        'At the end, a debrief walks through each decision and connects it back to the videos and activities from the week.'
      ],
      links: [{ label: 'Space Medicine', href: 'space-medicine.html' }],
      keys: 'cabin pressure lost scenario final challenge launch day decisions oxygen descend altitude mask debrief simulation'
    },
    {
      id: 'space-test', group: 'samples',
      phrases: ['how would you test space medicine', 'has space medicine been tested', 'what would you test in space medicine'],
      q: 'What would you test next in the Space Medicine redesign?',
      a: [
        'I’d test whether Rivera’s mentor framing adds value, while keeping the existing videos and page structure intact.',
        'Version A: After each video, learners get the activity through Rivera’s conversational prompts and replies.',
        'Version B: Learners get the same prompts, choices, and feedback as direct instructional text, without the mentor framing.',
        'I’d compare where learners pause or leave, whether they take part in the activities, and how useful they find the experience. To check whether the learning sticks, I’d use an immediate knowledge check and a later question that asks them to apply the ideas to a new scenario. I’d keep the videos, sequence, activity, and feedback the same across versions. If enrollment is small, I’d use learner interviews or a pilot instead of treating the comparison as a conclusive A/B test.'
      ],
      links: [{ label: 'Space Medicine', href: 'space-medicine.html' }],
      keys: 'test testing pilot validate next steps faculty review learners scenario quiz compare evidence'
    },
    {
      id: 'cyoa', group: 'samples',
      phrases: ['what is branching biology', 'is branching biology real', 'is it a working product', 'who is jordan', 'who is jordan in branching biology', 'what is the branching biology course map', 'branching biology course map', 'is branching biology adaptive', 'what is the birdsong activity', 'song sparrow', 'what did you design in branching biology', 'what learning science informed branching biology', 'has branching biology been tested', 'how would you validate branching biology', 'where did branching biology come from'],
      q: 'What is Branching Biology?',
      a: [
        'Branching Biology is a concept I designed for a required undergraduate Biology 101 course. It explores how learner choices could shape the examples, activity format, and support in a unit while the learning goals stay the same for everyone.',
        'Branching Biology is under construction while I rebuild it as a hands-on mobile case. The page will be back once the new version is ready. In the meantime, Space Medicine and Light the Beacon show comparable interactive design work.'
      ],
      links: [{ label: 'Space Medicine', href: 'space-medicine.html' }, { label: 'Light the Beacon', href: 'beacon-escape-room.html' }],
      keys: 'cyoa choose your own adventure branching biology biology 101 jordan birdsong song sparrow city birds bird songs traffic noise spectrogram walkthrough course map faculty view undergraduate under construction rebuild rebuilding mobile case coming soon unavailable'
    },
    {
      id: 'beacon', group: 'samples',
      phrases: ['what is light the beacon', 'is light the beacon tested with students'],
      q: 'What is Light the Beacon?',
      a: [
        'I designed Light the Beacon as a playable browser concept for Grade 6 math. Learners restore a storm-damaged lighthouse across four rooms: build a 2:3 blue-to-gold ratio on a lens, complete a ratio table to start the generator, find a unit rate to set the radio, and use the clues in their logbook to set the final signal and check it against the supplies and time available.',
        'The rooms move from a visual model to a table to a rate, then ask learners to use those results in a decision. Optional hints support retries, and feedback points learners toward a relationship they may want to check.',
        'It’s a prototype that hasn’t been tested with students. I built it to make the learning sequence and interactions concrete, with Claude Design and Claude Code as thought and design partners. It would need review and piloting before classroom use.'
      ],
      links: [{ label: 'Light the Beacon', href: 'beacon-escape-room.html' }],
      keys: 'light the beacon escape room game game-based lighthouse grade 6 math ratio ratios unit rate rates equivalent ratios puzzle puzzles hints feedback middle school gamification playable prototype concept untested not tested with students'
    },
    {
      id: 'beacon-standard', group: 'samples',
      phrases: ['what standard', 'which standard', 'what math standard', 'common core', 'what math is in the escape room'],
      q: 'What standard does Light the Beacon address?',
      a: [
        'Light the Beacon focuses on selected parts of Grade 6 Common Core standard 6.RP.A.3, especially 3a, working with equivalent ratios and a ratio table, and 3b, solving a unit-rate problem.',
        'Learners use that reasoning across the lens, generator, and radio rooms, then apply it when they set the final signal. It doesn’t practice plotting ratio pairs from 3a, percents (3c), or unit conversions (3d), so it doesn’t address every expectation in 6.RP.A.3.'
      ],
      links: [{ label: 'Light the Beacon', href: 'beacon-escape-room.html' }],
      keys: 'standard standards common core 6.rp.a.3 6rp 3a 3b grade 6 ratio rate ratios unit rate equivalent ratios ratio table math mathematics rooms lens generator radio control panel essential question i can goals alignment aligned coverage percent measurement conversion'
    },
    {
      id: 'beacon-design', group: 'samples',
      phrases: ['how do hints work', 'are there hints', 'does it have hints', 'how does feedback work'],
      q: 'How do hints and feedback work in Light the Beacon?',
      a: [
        'Each room has three optional hints. They move from a guiding question to a more concrete next step, and they’re free to use. There’s no timer or penalty, so learners can try again as often as they like.',
        'Feedback points back to the part of the relationship a learner may want to reconsider. Some answers get targeted feedback, and others get a more general prompt.',
        'In the lens room, learners first say how many groups of 5 fit in the 20 spots. In rooms 1 to 3, they record the strategy they used before the door unlocks, and those strategies appear in the recap at the end.','In the final signal gallery, learners set each dial from their logbook clues, test the signal, and pick the two reasons it works. If they pick a reason that doesn’t hold, a short note points back to the supplies or the time, and if they pick only one true reason, it says there’s another limit to check. Learners can also type their answers instead of turning the dials.'
      ],
      links: [{ label: 'Light the Beacon', href: 'beacon-escape-room.html' }],
      keys: 'hints hint feedback support scaffolding scaffold timer penalty try again mistakes wrong answers explain reasoning discussion classroom class use escape room staged hints free final panel plan reason'
    },
    {
      id: 'beacon-class', group: 'samples',
      phrases: ['how could a teacher use light the beacon in class', 'can teachers use light the beacon', 'is light the beacon for the classroom'],
      q: 'How could a teacher use Light the Beacon in class?',
      a: [
        'Learners can complete the activity independently first, at their own pace. Then a teacher could use it to start a short discussion: How did you solve each puzzle? Which representation helped you? How did equivalent ratios and unit rates help you choose a final signal plan?'
      ],
      links: [{ label: 'Light the Beacon', href: 'beacon-escape-room.html' }],
      keys: 'teacher classroom use in class discussion independent practice representations equivalent ratios unit rates final signal plan how could a teacher use how long does it take middle school grade 6'
    },
    {
      id: 'beacon-validate', group: 'samples',
      phrases: ['what would you test', 'how would you test light the beacon', 'has it been tested'],
      q: 'What would you want to learn from testing Light the Beacon?',
      a: [
        'I’d test whether the escape-room format helps learners engage with and retain Grade 6 ratio and rate concepts compared with more traditional practice. Both versions would target Common Core 6.RP.A.3a and 6.RP.A.3b: equivalent ratios and ratio tables, then unit rates.',
        'Version A: The current lighthouse activity, where learners practice those ideas in the rooms and use them to choose a signal plan.',
        'Version B: A traditional lesson with worked examples, ratio-table practice, unit-rate word problems, and a final multi-step problem.',
        'I’d keep the learning goals, practice time, feedback, and assessment comparable. Then I’d look at learner engagement, performance on new standards-aligned problems, and a later check to see what they retained. If there are enough learners, I’d randomly assign them to a version; otherwise, I’d compare matched classes and ask learners and teachers what helped and what didn’t.'
      ],
      links: [{ label: 'Light the Beacon', href: 'beacon-escape-room.html' }],
      keys: 'test testing pilot validate validation next steps what would you test educator review students pilot reasoning learn from testing improve revise'
    },
    { /* DRAFT for Megan to edit */
      id: 'beacon-why', group: 'samples',
      phrases: ['why an escape room', 'why did you make an escape room', 'why a game'],
      q: 'Why an escape room?',
      a: [
        'The idea came from conversations with my middle school students a few years ago, and it stuck with me. An escape room gives every answer a job: the right ratio lights the lens, the right rate powers the radio, and each fix brings the ship a little closer to safety.',
        'The format also helps with sequencing. Each room builds on the one before, from a visual model to a table to a unit rate, and the final room asks learners to use all of it to make one decision.'
      ],
      links: [{ label: 'Light the Beacon', href: 'beacon-escape-room.html' }],
      keys: 'why escape room game format story motivation engaging exciting fun students middle school sequence rooms'
    },
    { /* DRAFT for Megan to edit */
      id: 'beacon-more-time', group: 'samples',
      phrases: ['what would you add', 'with more time', 'what would you change', 'next version'],
      q: 'What would you add to Light the Beacon with more time?',
      a: [
        'First, I’d test it with a Grade 6 math educator and students, and let what I learn shape the next version.',
        'After that, I’d add a short teacher guide with discussion questions, and new rooms for the parts of 6.RP.A.3 this version leaves out: plotting ratio pairs, percents, and unit conversions.'
      ],
      links: [{ label: 'Light the Beacon', href: 'beacon-escape-room.html' }],
      keys: 'more time add next version change improve teacher guide new rooms percents unit conversions plotting'
    },
    { /* DRAFT for Megan to edit */
      id: 'beacon-other-topics', group: 'samples',
      phrases: ['other math topics', 'other topics', 'other subjects', 'other grades'],
      q: 'Could Light the Beacon work for other math topics?',
      a: [
        'I think so. The structure works for any topic where each step depends on the one before: a few rooms that each practice one idea, optional practice and hints, and a final challenge that asks learners to combine them.',
        'Proportional relationships in Grade 7 or fractions in Grade 5 could follow the same pattern with a new story.'
      ],
      links: [{ label: 'Light the Beacon', href: 'beacon-escape-room.html' }],
      keys: 'other topics subjects grades reuse adapt template structure proportional relationships fractions grade 7 grade 5'
    },
    {
      id: 'ai-for-nurses', group: 'samples',
      q: 'What was your role on AI for Nurses?',
      a: [
        'I led learning design and project management for a three-course Coursera Specialization developed with Duke School of Nursing and Johnson & Johnson. I started with survey data from working nurses, then brought registered nurses into the design process so the examples would match what they see on a shift.',
        'The Specialization launched in September 2026 and offers up to 9 continuing education credit hours for nurses.'
      ],
      links: [{ label: 'AI for Nurses', href: 'ai-for-nurses.html' }],
      keys: 'ai for nurses nursing nurses specialization johnson johnson j&j duke school of nursing continuing education credit hours healthcare clinical artificial intelligence'
    },
    { /* DRAFT for Megan to edit */
      id: 'ai-did', group: 'samples',
      phrases: ['what did you do on ai for nurses', 'what did you lead on ai for nurses'],
      q: 'What did you do on AI for Nurses?',
      a: [
        'I led the design and development of a three-course Coursera Specialization with three Duke School of Nursing faculty, supported by a Johnson & Johnson grant. I worked with a nurse scientist, an engineer and data scientist, and a family nurse practitioner, alongside a Learning Experience Designer, a Media Designer, and a Media Producer.',
        'On the design side, I started with survey data from working nurses and mapped a learning progression across the three courses. I designed and facilitated a co-design session with registered nurses, which is where the four ways AI shows up on a shift came from. I used ChatGPT, Claude, and Claude Code to support more of the design work, from drafting activities to building the interactive examples.',
        'On the project side, I managed the work from kickoff in September 2025 through launch in September 2026. I designed, launched, and reviewed a learner pilot before launch, and managed everything needed to secure continuing education credit, up to 9 nursing CE hours accredited by ANCC, ACPE, and ACCME.'
      ],
      links: [{ label: 'AI for Nurses', href: 'ai-for-nurses.html' }],
      keys: 'what did you do lead led team design co-design sessions registered nurses survey progression ai tools chatgpt claude learner pilot testing continuing education ce credit accreditation project management'
    },
    {
      id: 'ai-accred', group: 'samples',
      phrases: ['is ai for nurses accredited','ce credit'],
      q: 'Is AI for Nurses accredited?',
      a: [
        'Yes. The Specialization offers up to 9 nursing continuing education credit hours through Duke University Health System Clinical Education and Professional Development, accredited by ANCC, ACPE, and ACCME.',
        'Because it’s accredited, the accreditation requirements shaped design decisions along the way.'
      ],
      links: [{ label: 'AI for Nurses', href: 'ai-for-nurses.html' }],
      keys: 'accredited accreditation ancc acpe accme continuing education ce credit credits hours nursing nurses duke health clinical education professional development certificate'
    },
    {
      id: 'ai-design', group: 'samples',
      phrases: ['how did you design ai for nurses'],
      q: 'How did you design the AI for Nurses courses?',
      a: [
        'Survey data from working nurses and conversations with partners shaped a progression that I shared early with stakeholders. In a co-design session, registered nurses described AI as something that flags, summarizes, prioritizes, or triggers, and those patterns carry through all three courses.',
        'Lessons pair a short expert video from Duke School of Nursing faculty with readings that connect vocabulary to real tools. In Course 3, case study videos pause three times so nurses make a real-time clinical judgment, and learners apply the AI-SBAR framework.',
        'I worked as Senior Learning Experience Designer and Project Manager, and I used ChatGPT, Claude, and Claude Code to support the design.'
      ],
      links: [{ label: 'AI for Nurses', href: 'ai-for-nurses.html' }],
      keys: 'design process co-design codesign survey nurses registered nurses learning objectives courses three courses ai-sbar sbar case studies videos clinical judgment vocabulary progression stakeholders johnson school of nursing'
    },
    {
      id: 'ai-activities', group: 'samples',
      phrases: ['what kinds of activities did you design for ai for nurses', 'what types of activities are in ai for nurses', 'what is the ai coach in ai for nurses', 'what is the coursera ai coach'],
      q: 'What kinds of activities did you design for AI for Nurses?',
      a: [
        'The courses use seven activity types: short faculty videos, term spotlights, readings about specific AI tools, dialogue activities with a Coursera AI Coach, ungraded practice quizzes, graded application quizzes, and post-case reflections.',
        'The activities connect concepts to clinical practice. For example, Course 3 case videos pause three times for a clinical judgment, while the AI Coach conversations ask nurses to reflect on a tool or moment from their own work. Graded quizzes allow unlimited attempts and provide feedback on every answer option.'
      ],
      links: [{ label: 'AI for Nurses', href: 'ai-for-nurses.html' }],
      keys: 'ai for nurses activities activity types seven videos term spotlights readings ai tools dialogue coursera ai coach practice quizzes graded quizzes application questions reflections case videos clinical judgment unlimited attempts feedback every answer option'
    },
    {
      id: 'ai-try', group: 'samples',
      phrases: ['can i try the ai for nurses activities', 'is there a demo of ai for nurses'],
      q: 'Can I try the AI for Nurses activities?',
      a: [
        'Yes. Two activities are fully interactive on the page. In one, you compare a fall-risk score with a generated discharge summary. In the other, you change what information a model receives and see how its output responds, including what the nurse knows that the model does not.'
      ],
      links: [{ label: 'AI for Nurses', href: 'ai-for-nurses.html' }],
      keys: 'try ai for nurses activities interactive live activity demo fall risk score discharge summary what a model receives predictive generative can i try'
    },
    {
      id: 'ai-after', group: 'samples',
      phrases: ['what happened after ai for nurses launched', 'is there a second ai for nurses specialization', 'what is next for ai for nurses'],
      q: 'What happened after AI for Nurses launched?',
      a: [
        'After the launch, our partners funded a second year of work, and a new Specialization is in development. I’m continuing as Project Manager and Senior Learning Experience Designer across the four courses in that project.'
      ],
      links: [{ label: 'AI for Nurses', href: 'ai-for-nurses.html' }],
      keys: 'after launch second year funded new specialization in development next project four courses continuing project manager senior learning experience designer partners johnson ai for nurses what happened next'
    },
    {
      id: 'digital-you', group: 'samples',
      q: 'What is Digital You?',
      a: [
        'Let’s Talk Digital You is a for-credit, interdisciplinary Duke course in Canvas, open to students in any major. As Project Manager and Lead Learning Experience Designer, I helped two lead instructors and weekly guest experts build one integrated course on the technical and ethical sides of a data-centric world.',
        'It ran as a hybrid, semester-long course in Spring 2024.'
      ],
      links: [{ label: 'Digital You', href: 'digital-you.html' }],
      keys: 'digital you canvas for-credit credit course interdisciplinary ethics technology data guest lecturers instructors tas university undergraduate hybrid spring 2024'
    },
    {
      id: 'digital-structure', group: 'samples',
      phrases: ['who did you work with on digital you','what were the digital you topics'],
      q: 'How was Digital You organized?',
      a: [
        'Two lead instructors and a rotating guest expert taught each week, and I coordinated people across five roles into one integrated course. Each theme ran across two weeks: how a technology works, then its ethical implications. Two panel weeks brought live Q&A across disciplines.',
        'With the lead instructors, I defined five course outcomes, then mapped every week to the same six-step structure so guests and TAs could begin co-design work. Each week included a guest session for about 100 students, hands-on exploration in EdStem, smaller sections for discussion, and a weekly blog post on each student’s own WordPress site.'
      ],
      links: [{ label: 'Digital You', href: 'digital-you.html' }],
      keys: 'organized structure weekly guest lecturers instructors tas panel weeks themes outcomes six-step edstem wordpress blog sections students 100 canvas ethics technology generative art privacy social media algorithms topics who did you work with'
    },
    { /* DRAFT for Megan to edit */
      id: 'digital-did', group: 'samples',
      phrases: ['what did you do on digital you', 'what did you do', 'what did you lead on digital you'],
      q: 'What did you do on Digital You?',
      a: [
        'I led the design of the whole semester and the team that built it, about 30 people across five roles: two lead instructors, two supplemental instructors, twelve guest lecturers, ten TAs, and a design and media team of four.',
        'On the design side, I led the high-level planning, curriculum mapping, and design strategy with the lead instructors. We defined five course outcomes, paired each technology theme with its ethics, and mapped every week to the same six-step structure. I prototyped the first lab pair, which is how we chose EdStem, and built Universal Design for Learning into each step.',
        'On the project side, I managed the work from April 2023 through the debrief in May 2024. I set up a team charter and two tracking boards, built the Canvas structure and guest templates, onboarded the TAs, coached the instructors, and ran QA and accessibility review before launch. Once the framework was in place, the Learning Experience Designers on my team built the course and the media team worked with faculty on multimedia.'
      ],
      links: [{ label: 'Digital You', href: 'digital-you.html' }],
      keys: 'what did you do lead led team semester design curriculum mapping outcomes charter tracking boards canvas templates tas instructors qa accessibility edstem prototype'
    },
    { /* DRAFT for Megan to edit */
      id: 'digital-guests', group: 'samples',
      phrases: ['guest lecturers', 'how did you work with guests', 'many instructors'],
      q: 'How did you work with 12 guest lecturers on Digital You?',
      a: [
        'Every week followed the same six-step structure, so each guest lecturer stepped into a format they already understood. I built guest templates in Canvas and coached the instructors, and the TAs had facilitation guides for sensitive conversations about AI and ethics.',
        'A team charter and two tracking boards, one for faculty and leadership and one for detailed tasks, kept twelve guests, two lead instructors, and ten TAs on the same schedule.'
      ],
      links: [{ label: 'Digital You', href: 'digital-you.html' }],
      keys: 'guest lecturers guests instructors many experts coordinate templates coaching tas facilitation guides charter tracking boards'
    },
    { /* DRAFT for Megan to edit */
      id: 'digital-next', group: 'samples',
      phrases: ['what would you change', 'next iteration', 'lessons learned digital you'],
      q: 'What would you change in the next Digital You?',
      a: [
        'Reflections, final projects, feedback, and course evaluations showed growth in ethical reasoning and digital literacy, and mid-semester feedback helped us refine the labs and pacing.',
        'For the next iteration, I’d build more flexible, open-ended lab pathways and stronger links between the tech and ethics weeks. For a large, multi-instructor course like this one, I’d also recommend a dedicated course coordinator.'
      ],
      links: [{ label: 'Digital You', href: 'digital-you.html' }],
      keys: 'change next time next iteration lessons learned debrief improve labs pathways coordinator results feedback'
    },
    {
      id: 'digital-pm', group: 'samples',
      phrases: ['how did you manage the digital you project', 'how long did digital you take to build', 'what was the digital you timeline', 'how did you keep digital you accessible', 'digital you timeline'],
      q: 'How did you manage the Digital You project?',
      a: [
        'I coordinated 31 people across five roles, including instructors, guest lecturers, TAs, and the design team. A team charter clarified roles, expectations, working norms, and conflict handling. Two tracking boards kept the work visible: one for faculty and leadership, and another for detailed internal tasks.',
        'The project timeline ran from April 2023 to May 2024. We defined outcomes and mapped content, prototyped the first lab pair, built the Canvas structure and guest templates, onboarded TAs, and then launched, gathered feedback, and debriefed. We reviewed each asset as it was created, added a second reviewer, and completed accessibility checks for captions, alt text, screen-reader-friendly PDFs, and the course as a whole.'
      ],
      links: [{ label: 'Digital You', href: 'digital-you.html' }],
      keys: 'digital you project management timeline how long coordinated 31 people five roles team charter tracking boards boards qa review accessibility checks captions alt text screen reader pdf canvas edstem tas guest lecturers conflict handling'
    },
    {
      id: 'digital-results', group: 'samples',
      phrases: ['what were the results of digital you', 'did students learn anything from digital you', 'how did digital you turn out', 'what would you change about digital you', 'digital you results'],
      q: 'What were the results of Digital You?',
      a: [
        'Reflections, final projects, mid-semester feedback, and course evaluations showed growth in students’ ethical reasoning and digital literacy. Final projects brought technical research together with ethical analysis, and course evaluations showed high engagement. Mid-semester feedback helped us refine the labs and pacing.',
        'For a next version, I’d offer more open-ended lab pathways, make stronger connections between the technology and ethics weeks, and add a course coordinator to support a large, multi-instructor course.'
      ],
      links: [{ label: 'Digital You', href: 'digital-you.html' }],
      keys: 'digital you results outcomes impact evaluation evaluations feedback growth ethical reasoning digital literacy final projects engagement lessons learned what would you change next version improve students learned'
    },
    /* ---------- Project management ---------- */
    {
      id: 'design-build-manage', group: 'pm',
      q: 'Do you design the learning, build it, or manage the project?',
      a: [
        'My work often includes all three. I help shape the learning experience, develop materials and prototypes, and coordinate the work needed to bring a project together.',
        'The mix depends on the project and the team. In AI for Nurses, Space Medicine (live course), and Digital You, I led learning design and project management with faculty and project partners.'
      ],
      links: [{ label: 'Project Management', href: 'project-management.html' }],
      keys: 'designer or project manager both roles build develop manage lead responsibilities what do you actually do hands on developer'
    },
    {
      id: 'keep-moving', group: 'pm',
      phrases: ['manage projects','manage a project','how do you manage','keep a project','manage your projects','project management process','how do you run projects'],
      q: 'How do you keep a project moving?',
      a: [
        'I work with the team to agree on what we’re creating, who is responsible for each part, and when we need decisions or feedback. I’m a PMP®-certified Project Manager, and much of my work involves helping people plan around the time and resources available.',
        'Every project moves through five phases: scope, kickoff, manage, deliver, and evaluate. When new ideas come up, I help us consider what they would add and what they would require. Those conversations help the team choose where to focus.'
      ],
      links: [{ label: 'Project Management', href: 'project-management.html', note: 'the five phases in more detail' }],
      keys: 'project management process manage schedule timeline deadlines scope kickoff deliver evaluate phases lifecycle planning priorities pmp certified stakeholders change requests scope creep budget'
    },
    {
      id: 'approaches', group: 'pm',
      q: 'Do you use Agile, hybrid, or waterfall?',
      a: [
        'It depends on the project. I choose an approach during scoping, based on how well-defined the work is and how often partners can review it.',
        'I’ve used Agile for a summer AI pilot with my team, a hybrid roadmap for a four-course nursing Specialization that’s in development, and a traditional approach for Data Science with R. The Project Management page walks through each one.'
      ],
      links: [{ label: 'Project Management', href: 'project-management.html' }],
      keys: 'agile hybrid waterfall traditional scrum sprint sprints methodology approach methods choose which framework iterative ai pilot data science with r'
    },
    {
      id: 'approach-when', group: 'pm',
      phrases: ['what is agile','what is waterfall','difference between agile and waterfall'],
      q: 'When do you choose Agile, hybrid, or traditional?',
      a: [
        'Agile fits when the product will change as we learn, partners can give frequent feedback, and working versions matter more than a full spec. Hybrid fits when the plan is set but details will evolve, partners review work in batches, and some pieces need room to iterate. Traditional fits when requirements are clear from the start, deadlines and approvals are fixed, and each phase builds on the one before.',
        'I choose during scoping, based on how defined the work is and how often partners can review it.'
      ],
      links: [{ label: 'Project Management', href: 'project-management.html' }],
      keys: 'agile hybrid traditional waterfall difference differences compare when to use choose choosing best when approach methodology what is agile what is waterfall sprints phases'
    },
    {
      id: 'agile-run', group: 'pm',
      phrases: ['do you use monday','what project management tools','how do you run sprints','project management tools','pm tools','what tools do you use for project management','tools for project management'],
      q: 'How did you run the Agile pilot?',
      a: [
        'Over a summer, June to August 2026, my team worked in one-week sprints. Each product started with a short definition and a backlog on our Monday.com board. At the start of each sprint, each person set a one-sentence goal and pulled in a few ready cards.',
        'Midweek, everyone posted a short async update in Teams, with blocked cards flagged on the board. Each sprint ended with a review and demo, then a 15-minute retrospective on how we worked. I designed and facilitated the process and was Product Owner for two of the tools.',
        'We built a Claude Skills library and dashboard, a capacity forecasting model, a course design outline tool, and a script writing agent.'
      ],
      links: [{ label: 'Project Management', href: 'project-management.html' }],
      keys: 'agile sprint sprints scrum backlog monday.com monday teams retrospective review demo product owner standup async update pilot summer ai tools project management tools software kanban'
    },
    /* ---------- How I work ---------- */
    {
      id: 'new-subject', group: 'how',
      q: 'How do you work with experts in a subject that’s new to you?',
      a: [
        'I start by listening and asking questions. I want to understand what matters in the field, what learners already know, and where they may need help.',
        'The expert brings the subject knowledge. I help us work through how to explain it, what learners will practice, and how we’ll know they’re ready to use it. Early examples give us something to discuss and improve together.'
      ],
      links: [{ label: 'About me', href: 'about.html' }],
      keys: 'work with experts faculty subject matter experts sme professors collaborate collaboration partners unfamiliar topic learn new content process listening interviews'
    },
    {
      id: 'ai-use', group: 'how',
      phrases: ['how do you use ai', 'do you use ai', 'do you use ai in your work', 'use of ai', 'ai in your work', 'ai tools', 'artificial intelligence', 'claude', 'chatgpt', 'generative ai', 'did you use ai'],
      q: 'How do you use AI in your work?',
      a: [
        'I use AI to help develop ideas, build prototypes, and create tools that support our team’s work. For example, I used Claude Design and Claude Code as thought and design partners across my portfolio, including every concept sample, and ChatGPT for the occasional idea session and the concept images in Light the Beacon and the Space Medicine story. For AI for Nurses, I used ChatGPT, Claude, and Claude Code to support the design. Digital You is the one project where I didn’t use AI.',
        'I make the decisions about the learning experience and review what we create. When the content requires subject expertise, I work with experts to check it. I’m especially interested in where AI gives us more room to explore an idea, try an approach, and improve it.'
      ],
      links: [{ label: 'Space Medicine', href: 'space-medicine.html' }],
      keys: 'ai artificial intelligence claude chatgpt llm generative tools automation prompts copilot machine learning code claude code claude design vibe coding'
    },
    {
      id: 'portfolio-build', group: 'how',
      phrases: ['how did you create this portfolio', 'how did you build this portfolio', 'how did you build this site', 'how did you make this website', 'who built this site', 'who made this website', 'who designed this portfolio', 'how was this site made', 'did you build this yourself'],
      q: 'How did you create this portfolio?',
      a: [
        'This portfolio turned out to be one of the most fun projects I’ve ever taken on. As a Learning Designer, I spend a lot of time helping others shape their story, so it was a real joy to do that for my own work, revisiting each phase of my career and finding the right way to share it.',
        'I built everything myself, with Claude Design and Claude Code as creative partners, and ChatGPT for the occasional idea session and some concept images.'
      ],
      links: [{ label: 'About Megan', href: 'about.html' }],
      keys: 'portfolio website site built made created build make create design designed developed yourself claude design claude code chatgpt how was this made who built behind the scenes'
    },
    {
      id: 'accessibility', group: 'how',
      phrases: ['how do you think about accessibility', 'do you use universal design for learning', 'do you know udl', 'what is udl'],
      q: 'How do you think about accessibility?',
      a: [
        'I design accessibility in from the start. I aim for materials and the learning experience to meet WCAG 2.2, with captions and transcripts, alt text, readable color contrast, clear headings, and descriptive links, and I check my work with accessibility tools.',
        'I also use Universal Design for Learning to give learners choice in how they engage and show what they know.',
        'At Duke, I co-created our quality and accessibility standards by combining the Quality Matters and OLC Scorecard frameworks.'
      ],
      links: [{ label: 'Digital You', href: 'digital-you.html', note: 'how Universal Design for Learning shaped a course' }],
      keys: 'accessibility accessible wcag ada udl universal design for learning inclusive inclusion captions transcripts alt text screen reader contrast quality matters olc scorecard standards qa quality review a11y disability'
    },
    {
      id: 'platforms', group: 'how',
      phrases: ['do you have experience with canvas', 'experience with canvas', 'canvas experience', 'do you use canvas', 'experience with storyline', 'do you have experience with articulate storyline', 'do you use storyline', 'do you use edstem', 'experience with edstem', 'experience with rise', 'experience with captivate'],
      q: 'What platforms and tools do you use?',
      a: [
        'It depends on the needs of the project. I’m fluent in a variety of learning management systems, and I design in a platform-agnostic way, so the learning is portable and modular and can work in an app or on the web.',
        'At Duke, I mostly build in Coursera, Canvas, and EdStem. Beyond Duke, I’ve worked in Storyline, Rise, and Captivate. I’m especially open to new platforms.',
        'For me, the learning design comes first and the platform integration second.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html', note: 'tools and platforms' }],
      keys: 'platform platforms tools software lms learning management system coursera canvas edstem storyline rise captivate articulate authoring tools technology tech stack blackboard moodle scorm xapi app agnostic'
    },
    {
      id: 'faculty-experts', group: 'how',
      phrases: ['do you work with faculty','subject matter experts'],
      q: 'Do you work with faculty and subject matter experts?',
      a: [
        'Yes, that’s a big part of my work. At Duke, I’ve partnered with faculty across nursing, engineering, data science, business, and other fields, and I led design sprints with faculty across Duke University and Duke Health.',
        'I also trained faculty, Duke Corporate Education partners, and fellow designers to use the course design resources I developed.'
      ],
      links: [{ label: 'Project Management', href: 'project-management.html' }],
      keys: 'faculty professors professor instructors experts sme smes subject matter expert experts collaborate collaboration partners stakeholders duke health design sprints work with faculty'
    },
    {
      id: 'measure-learning', group: 'how',
      phrases: ['how do you measure effectiveness','how do you evaluate learning','how do you know learning is working'],
      q: 'How do you measure whether learning is working?',
      a: [
        'I look for evidence in a few places. At Duke, I’ve developed interactive prototypes and assessments that gave measurable evidence of learning outcomes, and I’ve used learner analytics and faculty feedback to improve course designs.',
        'At High Point University, I collected and analyzed adoption and engagement data to evaluate technology effectiveness and guide improvements.'
      ],
      keys: 'measure measuring evaluate evaluation effectiveness impact outcomes evidence data analytics learner analytics engagement results assessment improvement iterate continuous improvement metrics success'
    },
    {
      id: 'practice-assessment', group: 'how',
      phrases: ['tell me about assessment design','do you design simulations','have you done gamification','do you build games'],
      q: 'What kinds of practice and assessment do you design?',
      a: [
        'I design hands-on coding practice, branching scenarios, interactive media, and case-based learning for technical and professional audiences. I work with experts to translate complex subject matter into relevant practice and assessment.',
        'I use learner feedback, expert consultation, and prototypes to shape experiences around what learners need.'
      ],
      links: [{ label: 'Light the Beacon', href: 'beacon-escape-room.html', note: 'a playable example' }, { label: 'Space Medicine', href: 'space-medicine.html', note: 'a live scenario with decisions under pressure' }],
      keys: 'practice assessment assessments quizzes quiz activities coding practice branching scenarios scenarios interactive media case-based simulations games gamification game-based simulations hands-on interactive'
    },
    {
      id: 'motivation', group: 'how',
      phrases: ['how do you design for learner motivation','learner motivation','design for motivation','how do you motivate learners','how do you keep learners motivated','how do you keep learners engaged','how do you engage learners','what keeps learners going','student motivation','learner engagement'],
      q: 'How do you design for learner motivation?',
      a: [
        'Learners come to a course for different reasons. Some are already interested in the topic; others are there because a course is required, or because something caught their curiosity. I want to make room for all of those starting points.',
        'My longer-term aim is to help learners find personal meaning and a reason to keep going. Along the way, clear goals, manageable milestones, visible progress, useful feedback, and chances to try again can provide structure and momentum. Meaningful choices and relevant examples can help learners connect the work to their own interests. I want those supports to build confidence and curiosity, not just reward completion.',
        'In Branching Biology, which I’m rebuilding as a hands-on mobile case, learners explore a shared question through different formats while working toward the same goals. In Light the Beacon, a sequence of problems builds toward a decision, with hints and feedback available along the way. Those concepts haven’t been tested with learners, so I’d want to learn which supports help different learners stay engaged and where the experience needs to change.'
      ],
      links: [{ label: 'Light the Beacon', href: 'beacon-escape-room.html' }],
      keys: 'motivation motivate motivated learner motivation student motivation engagement engage engaged keep going persistence meaning purpose curiosity interest required course relevance choice autonomy confidence progress milestones feedback try again retry goals momentum self-determination arcs reward gamification'
    },
    {
      id: 'design-process', group: 'how',
      phrases: ['what is your design process', 'whats your design process', 'what is your process', 'how do you approach a project', 'what instructional design models do you use'],
      q: 'What’s your design process, from first idea to launch?',
      a: [
        'I start by getting clear on what we’re trying to solve, who the learners are, and what success should look like. I listen to subject matter experts and project partners, look at what already exists, and figure out what we can carry forward, adapt, or create. From there, I turn the big idea into learning goals, a workable scope, and a plan the team can act on.',
        'Then we shape the learner experience, prototype key moments, and build the content and tools. I share work early so people can react while it’s still easy to make changes. Along the way, I coordinate reviews, timelines, and production details. Before launch, I focus on accessibility, clarity, and quality. Afterward, I use feedback and performance signals to decide what to refine. I enjoy making a fuzzy idea concrete while keeping the people it’s meant to serve at the center.'
      ],
      keys: 'design process process workflow first idea to launch how do you work steps approach methodology start scope goals prototype build review launch iterate refine instructional design model'
    },
    {
      id: 'led-team', group: 'how',
      phrases: ['have you led a team', 'have you managed a team', 'do you manage people', 'do you have leadership experience', 'have you led or managed a team'],
      q: 'Have you led or managed a team?',
      a: [
        'Yes. At Duke, I’ve led and co-led learning projects involving faculty and subject matter experts, design and media partners, project leads, and other stakeholders. I’ve contributed to work across more than 50 courses and Specializations, and developed resources now used in 25 published courses. I also mentor designers and help teams strengthen scoping, planning, review, and delivery.',
        'My leadership is hands-on. I help create shared direction, surface decisions early, make responsibilities and next steps clear, and keep work moving as needs shift. My experience has primarily been in project and team leadership.'
      ],
      keys: 'led a team managed a team leadership lead manage people direct reports mentor mentoring designers team lead project lead management experience supervise stakeholders hands-on'
    },
    {
      id: 'collab-style', group: 'how',
      phrases: ['what is your management style', 'what is your collaboration style', 'what is your working style', 'how do you work with a team', 'what is your biggest strength'],
      q: 'What’s your management and collaboration style?',
      a: [
        'I’m warm, direct, and collaborative. I start by listening and asking questions so we understand what matters to learners, faculty, and the project. I like to make goals, roles, timelines, and open decisions clear, then keep communication straightforward and feedback specific.',
        'I share early examples and prototypes so people have something concrete to react to. That helps us make better decisions together. I’m comfortable when the path isn’t fully defined. I bring structure where it helps, stay flexible as we learn, and help the team decide when to keep refining and when to ship. I know when to push for more and when to make a practical call and move forward.'
      ],
      keys: 'management style collaboration style working style how do you work with teams communication feedback leadership style warm direct collaborative strengths ambiguity ship decisions'
    },
    {
      id: 'learner-feedback', group: 'how',
      phrases: ['how do you use learner feedback', 'how do you use analytics', 'do you use learner research or user testing', 'how do you improve a course after launch', 'do you pilot courses'],
      q: 'How do you use learner feedback and analytics to improve a learning experience?',
      a: [
        'I bring learners into the process early, especially when a course is designed for a specific audience or addresses a workforce need. For AI for Nurses, co-design sessions helped us understand nurses’ needs and challenges and bring that perspective into the course. Nurses piloted the courses as well, giving us an important check on whether the content and learning experience felt relevant and useful to them.',
        'Focus groups and pilots can be especially helpful for checking alignment: Are we addressing the right needs? Does the content connect to learners’ work? Can they use what they’re learning? After launch, I look at learner feedback, assessment results, course evaluations, and available analytics to spot areas to explore. I treat those measures as signals rather than answers on their own, then use what learners say and do to decide what to clarify, adjust, or test next.'
      ],
      links: [{ label: 'AI for Nurses', href: 'ai-for-nurses.html' }],
      keys: 'learner feedback analytics data improve iterate pilot pilots focus groups co-design user testing learner research course evaluations assessment results signals continuous improvement ai for nurses nurses piloted'
    },
    {
      id: 'handle-feedback', group: 'how',
      phrases: ['how do you handle disagreement', 'how do you handle feedback from faculty', 'what do you do when faculty disagree', 'how do you handle conflict', 'how do you handle scope creep'],
      q: 'How do you handle disagreement or feedback from faculty and subject matter experts?',
      a: [
        'I try to understand what each person is trying to accomplish, then bring the conversation back to the shared goals, learner needs, quality expectations, and project constraints. I make the tradeoffs visible and look for an approach that addresses the concern while keeping the work aligned.',
        'On Duke projects, a clear scope of work and team charter established working norms and a process for handling conflict. I worked with the team through questions about visuals and course direction so we could maintain alignment across the project.'
      ],
      keys: 'disagreement conflict feedback faculty subject matter experts sme push back tradeoffs alignment scope of work team charter difficult conversations handle feedback criticism disagree'
    },
    {
      id: 'curriculum-vs-ld', group: 'how',
      phrases: ['what is the difference between curriculum and learning design', 'curriculum design vs learning design', 'curriculum vs instructional design'],
      q: 'What’s the difference between curriculum and learning design?',
      a: [
        'Curriculum design gives learning its structure: what learners should know or be able to do, how the goals connect, and what standards or requirements the experience needs to meet. Learning design focuses on how learners will work toward those goals through examples, practice, activities, and feedback.',
        'In my work as an educator, I’ve taught a range of STEM subjects and learners at different levels. Many of those experiences called for me to develop the curriculum and the learning design together. I see them as closely connected: the curriculum gives us a meaningful destination, and the learning design helps learners find their way there.'
      ],
      keys: 'curriculum design versus learning design difference between curriculum and instructional design learning experience design standards goals activities practice feedback educator stem curriculum developer'
    },
    {
      id: 'curriculum-process', group: 'how',
      phrases: ['what is your process for curriculum design', 'how do you write learning objectives', 'how do you align to standards', 'what standards do you use'],
      q: 'What’s your process for curriculum design?',
      a: [
        'I start with the learners, the subject, and what they need to be able to do. I also look at the standards or requirements that matter for that setting, whether that’s NGSS, Common Core, or accreditation standards. I use them to anchor the experience, then translate them into clear, tangible goals learners can work toward.',
        'That often means shaping the goals into essential questions and statements like, “By the end of this lesson, you’ll be able to…” From there, I map a sequence of ideas, examples, practice, and assessment that helps learners build toward those goals in manageable steps. I work with subject matter experts to make sure the content is accurate and relevant, and I refine the experience based on feedback and what learners need.'
      ],
      keys: 'curriculum design process standards ngss common core accreditation learning objectives learning goals write objectives essential questions backward design sequence scope and sequence map assessment alignment'
    },
    {
      id: 'inquiry', group: 'how',
      phrases: ['do you use inquiry-based learning', 'do you use inquiry', 'what is inquiry-based learning', 'inquiry-based teaching', 'guided inquiry', 'do you teach with inquiry'],
      q: 'Do you use inquiry-based learning?',
      a: [
        'Yes, it’s at the heart of how I teach. At New Garden Friends School, I planned and taught the full middle school science curriculum and high school environmental science through hands-on, guided inquiry aligned to the Next Generation Science Standards (NGSS). At Duke TIP, I designed and taught hands-on STEM courses for grades 5–12, from Roller Coaster Physics to Engineering of Space Exploration. As a Virtual Mission Flight Director at the Challenger Learning Center, I led students in grades 4–12 through virtual missions to the Moon and Mars and developed NGSS-aligned activities to go with them.',
        'I’ve also helped teachers bring inquiry into their own classrooms. I designed and led professional development for elementary and middle school teachers, including the Mastering Physical Science series with UNC Chapel Hill and Durham Public Schools and Engineering is Elementary workshops at UNC Greensboro, and I worked with teachers to bring the Challenger mission activities into their classrooms. I also researched how elementary students use science and engineering practices.',
        'I bring the same idea to online learning. In the reimagined Space Medicine Week 2, learners investigate the 1862 balloon flight before the videos explain what happened.'
      ],
      links: [{ label: 'Space Medicine', href: 'space-medicine.html' }, { label: 'Résumé', href: 'resume.html' }],
      keys: 'inquiry inquiry-based guided inquiry hands-on investigate investigation discovery learning student-centered active learning science teaching ngss duke tip teacher professional development workshops engineering is elementary eie mastering physical science'
    },
    {
      id: 'philosophy', group: 'how',
      phrases: ['what is your teaching philosophy', 'teaching philosophy', 'what is your philosophy of teaching', 'what is your learning philosophy', 'what learning theories do you use', 'what do you believe about learning', 'how do people learn best'],
      q: 'What’s your teaching philosophy?',
      a: [
        'I believe people learn best by doing the thinking themselves: investigating real phenomena and problems, testing ideas, and getting useful feedback along the way. My graduate study in how people think and learn shaped that, and so did years of teaching science through guided inquiry aligned to NGSS, at New Garden Friends School, in the hands-on STEM courses I designed for Duke TIP, and on virtual missions to the Moon and Mars at the Challenger Learning Center.',
        'Inquiry works best with structure. I turn standards into essential questions and “I can” statements, plan a sequence of practice that builds toward them, and use Universal Design for Learning so learners have more than one way to engage. I’ve shared that approach with other educators through teacher professional development in physical science and engineering design.'
      ],
      links: [{ label: 'About', href: 'about.html' }],
      keys: 'teaching philosophy learning philosophy beliefs believe how people learn learning theory theories pedagogy approach to teaching constructivism inquiry hands-on feedback essential questions i can statements udl ngss duke tip professional development'
    },
    {
      id: 'ngss', group: 'how',
      phrases: ['have you worked with ngss', 'do you use ngss', 'do you know ngss', 'are you familiar with ngss', 'next generation science standards', 'what is your experience with ngss'],
      q: 'Have you worked with NGSS?',
      a: [
        'Yes. At New Garden Friends School, I planned and taught the full middle school science curriculum and high school environmental science aligned to NGSS, using hands-on, guided inquiry. At Duke TIP, I designed and taught hands-on engineering and physics courses for grades 5–12, from Roller Coaster Physics to Digital Circuit Design and Analysis. As a Virtual Mission Flight Director at the Challenger Learning Center, I developed mission activities for students in grades 4–12, aligned them to NGSS, and worked with teachers to integrate them into their classrooms.',
        'I’ve also helped teachers build this kind of learning. I designed and led professional development in physical science and engineering design for elementary and middle school teachers. I also researched how elementary students and teachers engage in science and engineering practices, one of NGSS’s three dimensions.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html' }],
      keys: 'ngss next generation science standards science standards three dimensions science and engineering practices k-12 science middle school high school inquiry duke tip teacher professional development engineering design'
    },
    {
      id: 'teacher-pd', group: 'how',
      phrases: ['have you led teacher professional development', 'do you do teacher professional development', 'teacher professional development', 'have you trained teachers', 'do you train teachers', 'teacher workshops', 'have you coached teachers', 'teacher pd'],
      q: 'Have you led teacher professional development?',
      a: [
        'Yes. I’ve designed and led professional development for K–12 teachers in physical science and engineering. With UNC Chapel Hill and Durham Public Schools, I led the Mastering Physical Science series for elementary and middle school teachers, with workshops on topics like states of matter, forces and motion, and amusement park physics. At UNC Greensboro, I led ongoing Engineering is Elementary workshops that built STEM teaching capacity for dozens of educators across the district, and I’ve presented teacher workshops at the North Carolina Science Teachers Association.',
        'As a Virtual Mission Flight Director at the Challenger Learning Center, I worked with K–12 teachers to integrate NGSS-aligned mission activities into their classrooms, so students’ virtual missions to the Moon and Mars connected to what they were learning. At Duke TIP, I trained instructional staff and gave feedback on online STEM curriculum in development.',
        'My research has focused on teachers, too. At UNC Chapel Hill, I designed K–8 physical science content and professional development to strengthen teachers’ physics teaching knowledge. At UNC Greensboro, I studied how elementary teachers think about knowledge in science and engineering.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html' }],
      keys: 'teacher professional development pd teachers workshops workshop train training coach coaching educators in-service k-12 elementary middle school physical science engineering is elementary eie mastering physical science unc chapel hill durham public schools unc greensboro ncsta challenger learning center flight director duke tip instructional staff research'
    },
    {
      id: 'stem-curriculum', group: 'how',
      phrases: ['how do you approach stem curriculum design', 'stem curriculum design', 'how do you design stem curriculum', 'how do you design a science unit', 'how do you use phenomena', 'what are the three dimensions of ngss', 'how do you use formative assessment'],
      q: 'How do you approach STEM curriculum design?',
      a: [
        'I start with the learning goals and work backward to design experiences that help students use what they learn. When working with the Next Generation Science Standards (NGSS), I consider all three dimensions together: disciplinary core ideas, science and engineering practices, and crosscutting concepts. Rather than teaching these as separate pieces, I build units around a meaningful phenomenon or problem that students can investigate over time.',
        'Inquiry is central to my approach, but it isn’t unguided. I plan opportunities for students to ask questions, develop models, analyze evidence, test ideas, and revise their explanations, while providing the structure and support they need to make progress. I also use frequent formative checks to see how students’ thinking is changing and adjust instruction accordingly.',
        'My goal is a curriculum that is rigorous and accessible: students should see a clear purpose for their work, have multiple ways to participate, and leave with a deeper understanding of both STEM concepts and how STEM knowledge is built.'
      ],
      keys: 'stem curriculum design science unit unit design phenomenon phenomena anchoring problem three dimensions disciplinary core ideas science and engineering practices crosscutting concepts backward design formative assessment checks models evidence explanations rigorous accessible ngss'
    },
    {
      id: 'labs', group: 'how',
      phrases: ['coursera labs','hands-on coding labs'],
      q: 'What’s your experience with Coursera Labs?',
      a: [
        'I co-designed Coursera’s integrated labs interface, which is now deployed platform-wide, applying Universal Design for Learning to make technical learning environments easier to navigate. I also presented on accelerating skill development with Coursera Labs at the 2022 Coursera Conference.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html' }],
      keys: 'coursera labs lab labs interface hands-on coding technical learning environments platform-wide integrated labs udl coding practice programming data science'
    },
    {
      id: 'technical-training', group: 'how',
      phrases: ['do you do corporate training','technical training','workforce training'],
      q: 'Do you design technical or workforce training?',
      a: [
        'Yes. I’ve designed hands-on coding practice and other practice for technical and professional audiences, and I’ve trained faculty, Duke Corporate Education partners, and fellow designers to use course design resources.',
        'AI for Nurses is another example of professional learning, offering continuing education credit for working nurses.'
      ],
      links: [{ label: 'AI for Nurses', href: 'ai-for-nurses.html' }],
      keys: 'technical training workforce corporate training corporate learning professional development upskilling industry employees field employees on the job training job aids simulations technical audiences business'
    },
    /* ---------- Contact ---------- */
    {
      id: 'work-type', group: 'contact',
      phrases: ['what type of work', 'what kind of work', 'what kinds of work', 'what are you looking for', 'looking for work', 'looking for a job', 'open to work', 'open to', 'new job', 'new jobs', 'new role', 'new roles', 'new opportunity', 'new opportunities', 'available for', 'available for hire', 'for hire', 'full time', 'full-time', 'job', 'jobs', 'hiring', 'employment', 'freelance', 'consulting', 'consultant', 'contract', 'contractor', 'part time'],
      q: 'What type of work are you looking for?',
      a: [
        'I\u2019m open to full-time roles, consulting, and contract-based projects where I can help shape learning experiences, lead design work, and build with a team. I\u2019d love to bring my experience in higher education and STEM to learning products that give people more ways to explore, practice, and connect what they\u2019re learning to their lives.',
        'I\u2019m especially excited about opportunities to use AI thoughtfully, build and test ideas quickly, and improve them with feedback from learners and project partners. I enjoy helping a team turn a promising idea into something useful, whether through an ongoing role or a focused project.'
      ],
      links: 'contact',
      keys: 'type kind work looking roles role jobs job open opportunities opportunity full time fulltime consulting consultant contract contractor freelance project projects hire hiring employment position positions career availability available seeking want next step ideal'
    },
    {
      id: 'location-roles', group: 'contact',
      phrases: ['where are you', 'where do you live', 'where are you based', 'where are you located', 'are you remote', 'are you in maine', 'live in maine', 'based in', 'relocate', 'relocation', 'work remotely', 'remote work', 'remote roles', 'in person', 'time zone','remote work','open to remote','are you open to remote work','remote roles','work remotely'],
      q: 'Where are you based?',
      a: [
        'I\u2019m based in Maine. At this time, I\u2019m interested in remote roles or roles local to Maine.',
        'If you\u2019re thinking about working together, I\u2019d love to hear from you.'
      ],
      links: 'contact',
      keys: 'location located based live living where maine remote local onsite on-site hybrid relocate relocation time zone state'
    },
    {
      id: 'resume', group: 'contact',
      phrases: ['your resume','your cv','see your resume'],
      q: 'Can I see your résumé?',
      a: ['Yes! My résumé is on this site as a full, searchable record, and there’s a Download résumé button that opens the two-page PDF in a new tab.'],
      links: [{ label: 'Résumé', href: 'resume.html' }],
      keys: 'resume résumé cv curriculum vitae download pdf word docx search experience history employment work history education publications presentations awards'
    },
    {
      id: 'contact', group: 'contact',
      phrases: ['hire you','work together','phone','call you','email you','get in touch'],
      q: 'How can I contact you?',
      a: [
        'I’d love to hear from you. If you’re thinking through a learning challenge, interested in working together, or just want to say hello, send me a message.'
      ],
      links: 'contact',
      keys: 'contact email reach message hire hiring work together collaborate connect linkedin talk get in touch freelance consulting available availability'
    },
    {
      id: 'about-chat', group: 'contact',
      phrases: ['is this ai','is this a bot','are you a bot','are you ai','is this chatgpt','who am i talking to','are you real','is this a chatbot','how does this work'],
      q: 'How does this Q&A work?',
      a: [
        'These are answers I wrote ahead of time. When you type a question, the tool looks for the closest match. It doesn’t use AI, and nothing you type is saved or sent anywhere.'
      ],
      keys: 'chat chatbot bot this tool how does this work ai is this ai real person human privacy data saved stored'
    }
  ]
};
