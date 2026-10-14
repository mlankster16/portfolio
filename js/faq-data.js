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
        'I’m a senior learning experience designer and a PMP®-certified project manager. I work with experts to turn complex ideas into learning people can use.',
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
        'I’m a Project Management Professional (PMP®) through the Project Management Institute. I also hold an M.S. in Science Education from North Carolina State University, an M.S. in Engineering Physics from Appalachian State University, and a B.S. in Physics from the University of North Carolina at Greensboro.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html' }],
      keys: 'education degree degrees school university college masters bachelors physics engineering physics science education nc state north carolina state appalachian state unc greensboro pmp certification certified credential credentials project management professional where did you go to school study studied graduate'
    },
    {
      id: 'work-history', group: 'about',
      phrases: ['work history','career history','how long have you worked','years of experience'],
      q: 'What’s your work history?',
      a: [
        'I’ve worked at Duke since 2020, first as a learning experience designer and now as a senior learning experience designer and project manager. I’ve led learning design and project delivery for more than 50 online courses and Specializations there.',
        'Before Duke, I was an educational technology specialist at High Point University, where I led campus-wide rollouts that supported more than 100 faculty. Before that, I was a program manager and instructional designer at UNC Greensboro, including designing the university’s first MOOC.',
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
      phrases: ['k-12 experience','do you have teaching experience','have you taught'],
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
      id: 'where-start', group: 'samples',
      phrases: ['where to start','where do i start','where should i begin','where to begin','what should i look at first','what is your favorite sample','which sample should i look at'],
      q: 'Where should I start?',
      a: ['It depends on what you’re curious about. Space Medicine, AI for Nurses, and Digital You are live projects. Branching Biology, Light the Beacon, and Cleared for Flight are concepts I designed to show my work. On the Home page, you can filter the samples by project type, features, audience, or platform.'],
      links: [
        { label: 'Space Medicine', href: 'space-medicine.html', note: 'a Coursera course, with Week 2 reimagined as an interactive module' },
        { label: 'Branching Biology', href: 'choose-your-own-adventure.html', note: 'a concept for personalized learning' },
        { label: 'Light the Beacon', href: 'beacon-escape-room.html', note: 'a playable Grade 6 math escape room' },
        { label: 'Cleared for Flight', href: 'drone-inspection-training.html', note: 'a drone inspection training concept' },
        { label: 'AI for Nurses', href: 'ai-for-nurses.html', note: 'a full Specialization, from start to launch' },
        { label: 'Digital You', href: 'digital-you.html', note: 'a for-credit course in Canvas' },
        { label: 'Project Management', href: 'project-management.html', note: 'how I scope, manage, and deliver projects' },
        { label: 'Course Portfolio', href: 'course-portfolio.html', note: 'everything I’ve developed over the last six years' }
      ],
      keys: 'start begin first overview where to begin best work highlights recommend recommendation tour what should i look at see samples portfolio examples favorite hiring technical training higher ed custom design group category show me higher ed work filter filters audience platform features k-12 workforce lifelong learning'
    },
    {
      id: 'space-medicine', group: 'samples',
      q: 'What is Space Medicine?',
      a: [
        'Space Medicine is a 2021 Coursera course from Duke that I managed and designed, with nearly 30,000 learners since launch. I coordinated the media teams, guided the scripts, and designed the learner journey.',
        'On the Space Medicine page, I reimagined Week 2 with an interactive exercise after every video, following an 1862 balloon flight from first symptoms to a redesigned flight. You can try it there.'
      ],
      links: [{ label: 'Space Medicine', href: 'space-medicine.html' }],
      keys: 'space medicine coursera balloon glaisher coxwell hypoxia altitude week 2 exercise interactive module reimagined nasa astronaut'
    },
    {
      id: 'cyoa', group: 'samples',
      q: 'What is Branching Biology?',
      a: [
        'It’s a concept I designed for a required undergraduate science course. An interactive walkthrough follows one learner, Jordan, through a unit, showing how interests and prior knowledge could shape the activities and support while the learning goals stay the same.',
        'It’s a proof of concept built from a learning designer’s perspective, so it would need UX research and product design before anyone used it.'
      ],
      links: [{ label: 'Branching Biology', href: 'choose-your-own-adventure.html' }],
      keys: 'cyoa choose your own adventure jordan biology 101 personalized adaptive learner choice walkthrough proof of concept concept undergraduate science dashboard'
    },
    {
      id: 'drone', group: 'samples',
      q: 'What is Cleared for Flight?',
      a: [
        'Cleared for Flight is a curriculum concept for training field employees to fly drone inspections. It works from a task analysis to a course map, simulator scenarios and a field checkride.',
        'It’s a concept, so you can try the interactive pieces on the page, but it hasn’t been used with real trainees.'
      ],
      links: [{ label: 'Cleared for Flight', href: 'drone-inspection-training.html' }],
      keys: 'cleared for flight drone drones inspection training field employees utility technical training task analysis course map simulator scenario checkride aircraft performance objective'
    },
    {
      id: 'beacon', group: 'samples',
      q: 'What is Light the Beacon?',
      a: [
        'Light the Beacon is a virtual escape room for Grade 6 math. Learners restore a storm-damaged lighthouse by reasoning with equivalent ratios and unit rates, with staged hints and feedback for each kind of mistake.',
        'It’s a playable concept, so you can try all four rooms on the page, but it hasn’t been used with real students.'
      ],
      links: [{ label: 'Light the Beacon', href: 'beacon-escape-room.html' }],
      keys: 'light the beacon escape room game game-based lighthouse grade 6 math ratio ratios unit rate rates equivalent ratios puzzle puzzles hints feedback middle school gamification playable 6.rp.a.3 common core'
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
    {
      id: 'digital-you', group: 'samples',
      q: 'What is Digital You?',
      a: [
        'Let’s Talk Digital You is a for-credit, interdisciplinary Duke course in Canvas, open to students in any major. As project manager and lead learning experience designer, I helped two lead instructors and weekly guest experts build one integrated course on the technical and ethical sides of a data-centric world.',
        'It ran as a hybrid, semester-long course in Spring 2024.'
      ],
      links: [{ label: 'Digital You', href: 'digital-you.html' }],
      keys: 'digital you canvas for-credit credit course interdisciplinary ethics technology data guest lecturers instructors tas university undergraduate hybrid spring 2024'
    },
    {
      id: 'beacon-standard', group: 'samples',
      phrases: ['what standard','which standard','what math standard','common core'],
      q: 'What standard does Light the Beacon address?',
      a: [
        'Light the Beacon is built on one Grade 6 Common Core standard, 6.RP.A.3: use ratio and rate reasoning to solve real-world and mathematical problems. The page breaks it into essential questions and “I can” goals for equivalent ratios, unit rates, and reasoning in context.',
        'Learners move from a visual model in the lens room to a ratio table in the generator room, then to a unit rate in the radio room. At the control panel, they use what they’ve learned to choose a signal plan.'
      ],
      links: [{ label: 'Light the Beacon', href: 'beacon-escape-room.html' }],
      keys: 'standard standards common core 6.rp.a.3 6rp grade 6 ratio rate ratios unit rate equivalent ratios math mathematics rooms lens generator radio control panel essential question i can goals alignment aligned'
    },
    {
      id: 'beacon-design', group: 'samples',
      phrases: ['how do hints work','are there hints','does it have hints'],
      q: 'How do hints and feedback work in Light the Beacon?',
      a: [
        'Each room has three optional hints. They move from a guiding question to a more concrete next step, and they’re free to use. There’s no timer or penalty, so learners can try again as often as they like.',
        'Feedback points back to the part of the relationship a learner may want to reconsider. At the final panel, learners choose a plan and pick the reason it works, which gives a class something to compare and discuss.'
      ],
      links: [{ label: 'Light the Beacon', href: 'beacon-escape-room.html' }],
      keys: 'hints hint feedback support scaffolding scaffold timer penalty try again mistakes wrong answers explain reasoning discussion classroom class use escape room staged hints free'
    },
    {
      id: 'drone-design', group: 'samples',
      phrases: ['how did you design the drone training','task analysis','design the drone course','drone course','design cleared for flight','how did you design cleared for flight'],
      q: 'How did you design Cleared for Flight?',
      a: [
        'I started with a task analysis: I broke the job into duties, tasks, and steps, then rated each task by how much harm a mistake could cause. Every task became a performance objective with a condition, a behavior, and a standard.',
        'From there, I built a course map that matches each lesson to the format that suits its tasks. Knowledge is self-paced, judgment is practiced in the simulator, and anything that touches the real aircraft happens with an instructor.'
      ],
      links: [{ label: 'Cleared for Flight', href: 'drone-inspection-training.html' }],
      keys: 'task analysis duties tasks steps criticality risk harm performance objective condition behavior standard course map modality simulator self-paced classroom field instructor curriculum design process'
    },
    {
      id: 'drone-assess', group: 'samples',
      phrases: ['how do you assess trainees','what is a checkride','how do you evaluate training'],
      q: 'How would you assess and evaluate the drone training?',
      a: [
        'Qualification depends on a field checkride, where an instructor scores the trainee flying a real aircraft against the same standards as the objectives. Missing any critical item means the trainee isn’t qualified yet, however well the rest went.',
        'I plan the measures with the curriculum, so the data needed to revise it comes in from the first cohort: simulator decisions and attempts, first-attempt checkride pass rates, the items missed most often, and incident and near-miss reports. When an item is missed often, I trace it back through the course map to the lesson and objective behind it and revise there first.'
      ],
      links: [{ label: 'Cleared for Flight', href: 'drone-inspection-training.html' }],
      keys: 'assess assessment evaluate evaluation measure measures effectiveness checkride qualification qualified pass rate xapi lms simulator data incident near-miss revise improve trainees training evaluation kirkpatrick'
    },
    {
      id: 'cyoa-how', group: 'samples',
      phrases: ['is this adaptive learning','how does it adapt','what formats'],
      q: 'How does Branching Biology adapt to each learner?',
      a: [
        'The walkthrough follows Jordan, a physics major in Biology 101. A learner’s program, reasons for taking the course, and motivation shape the examples and support they see, while the course’s learning goals stay the same.',
        'Each unit asks an essential question from the existing syllabus. Each week offers three formats, a guided video, an escape room, or a field investigation, that all lead to the same final task.'
      ],
      links: [{ label: 'Branching Biology', href: 'choose-your-own-adventure.html' }],
      keys: 'adapt adaptive personalized personalization learner path pathways choice formats guided video escape room field investigation essential question syllabus final task interests prior knowledge jordan physics major biology 101'
    },
    {
      id: 'cyoa-faculty', group: 'samples',
      phrases: ['what does the faculty view show','faculty dashboard'],
      q: 'What does faculty see in Branching Biology?',
      a: [
        'The walkthrough includes a faculty view. It shows which formats learners choose, class patterns on shared criteria, and how learners’ confidence compares with their results. It also includes a roster that shows who might need a check-in, and a view of how the class is doing on each course outcome.',
        'Faculty decide whether and how to follow up.'
      ],
      links: [{ label: 'Branching Biology', href: 'choose-your-own-adventure.html' }],
      keys: 'faculty view instructor dashboard roster check-in confidence results class patterns outcomes curriculum accreditation data analytics learning analytics teacher what does faculty see'
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
        'Lessons pair a short expert video from Duke School of Nursing faculty with readings that connect vocabulary to real tools. In Course 3, case study videos pause three times so nurses make a real-time clinical judgment, and learners apply the AI-SBAR framework.'
      ],
      links: [{ label: 'AI for Nurses', href: 'ai-for-nurses.html' }],
      keys: 'design process co-design codesign survey nurses registered nurses learning objectives courses three courses ai-sbar sbar case studies videos clinical judgment vocabulary progression stakeholders johnson school of nursing'
    },
    {
      id: 'digital-structure', group: 'samples',
      phrases: ['who did you work with on digital you','what were the digital you topics'],
      q: 'How was Digital You organized?',
      a: [
        'Two lead instructors and a rotating guest expert taught each week, and I coordinated people across five roles into one integrated course. Each theme ran across two weeks: how a technology works, then its ethical implications. Two panel weeks brought live Q&A across disciplines.',
        'I defined three outcomes with the lead instructors, then mapped every week to the same six-step structure so guests and TAs could begin co-design work. Each week included a guest session for about 100 students, hands-on exploration in EdStem, smaller sections for discussion, and a weekly blog post on each student’s own WordPress site.'
      ],
      links: [{ label: 'Digital You', href: 'digital-you.html' }],
      keys: 'organized structure weekly guest lecturers instructors tas panel weeks themes outcomes six-step edstem wordpress blog sections students 100 canvas ethics technology generative art privacy social media algorithms topics who did you work with'
    },
    {
      id: 'top-rated', group: 'samples',
      phrases: ['which courses are rated highest','best rated courses','highest rated course'],
      q: 'Which of your courses are rated highest?',
      a: [
        'A few favorites from the Course Portfolio: the Financial Management Specialization has a 4.8 out of 5 average rating with 59,525 enrolled. Space Medicine also has 4.8 out of 5, with 29,777 enrolled. The AI in Nursing Practice Specialization, new in 2026, has a 5.0 out of 5 so far, with 100+ enrolled.',
        'Across everything, I’ve designed 47 Coursera courses and 12 Specializations with more than 377,000 enrollments.'
      ],
      links: [{ label: 'Course Portfolio', href: 'course-portfolio.html' }],
      keys: 'rated rating ratings highest best top favorite favourite reviews review stars popular most popular enrollments enrolled financial management space medicine ai in nursing practice'
    },
    {
      id: 'generator', group: 'samples',
      phrases: ['what is the interactivity generator'],
      q: 'What is the Interactivity Generator?',
      a: [
        'It’s a tool I designed and built for Duke’s learning design team to turn course content into small interactive activities. A designer describes what learners should understand or practice, and the tool helps them explore formats, create and edit an activity, and prepare it for review. A plugin then places the finished activity in Coursera.',
        'I built it with Claude Design and Claude Code, and the tool uses the Claude API to recommend formats and build activities. Learners get static text alternatives.'
      ],
      links: [{ label: 'Interactivity Generator', href: 'interactivity-generator.html' }],
      keys: 'interactivity generator tool plugin coursera claude api activity activities interactions formats designers design team duke built tool'
    },
    {
      id: 'design-guide', group: 'samples',
      phrases: ['what is the coursera design guide','design guide'],
      q: 'What is the Coursera Design Guide?',
      a: [
        'I developed course design resources that have been used in 25 published courses, and I trained faculty, Duke Corporate Education partners, and fellow designers to use them. I built on that work with a shared design guide, planning templates, and reusable examples.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html' }],
      keys: 'coursera design guide design guide resources templates planning templates reusable examples faculty training duke corporate education published courses guidelines'
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
      id: 'in-use', group: 'samples',
      phrases: ['are all the projects in use','which projects are real','which are real','real or concept','live or concept','what is a concept','what are concepts','are these real','are these real projects','what is a live project','proof of concept','learning design of your live courses','see your live courses','show your live work','why are some projects concepts'],
      q: 'Which projects are real, and which are concepts?',
      a: [
        'Space Medicine, AI for Nurses, and Digital You are live projects: real courses I worked on with Duke faculty and partners. Space Medicine launched on Coursera in 2021, AI for Nurses launched in September 2026, and Digital You ran as a for-credit course in Spring 2024. On Space Medicine, the original course is live, and the reimagined Week 2 module is a concept I built.',
        'Branching Biology, Light the Beacon, and Cleared for Flight are concepts: custom designs I created to show my work. Because of intellectual property, it’s harder for me to show the learning design behind live courses, so the concepts let me share what I can do and what’s possible beyond them. They’re proofs of concept, and they would need further research, development, and testing before being used with learners.',
        'On the Home page, each sample is marked Live project or Concept, and you can filter by project type, features, audience, or platform. I also built the Coursera Design Guide and Interactivity Generator to support Duke’s faculty and learning design team. You’ll find them mentioned on my résumé.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html' }],
      keys: 'real in use live launched concept concepts prototype proof of concept hypothetical actual production published difference live project ip intellectual property confidential confidentiality why concepts custom design design guide interactivity generator tools'
    },

    /* ---------- Project management ---------- */
    {
      id: 'design-build-manage', group: 'pm',
      q: 'Do you design the learning, build it, or manage the project?',
      a: [
        'My work often includes all three. I help shape the learning experience, develop materials and prototypes, and coordinate the work needed to bring a project together.',
        'The mix depends on the project and the team. In AI for Nurses, I led learning design and project management with faculty and project partners. For the Coursera Design Guide and Interactivity Generator, I also designed and built the resources themselves.'
      ],
      links: [{ label: 'Project Management', href: 'project-management.html' }],
      keys: 'designer or project manager both roles build develop manage lead responsibilities what do you actually do hands on developer'
    },
    {
      id: 'keep-moving', group: 'pm',
      phrases: ['manage projects','manage a project','how do you manage','keep a project','manage your projects','project management process','how do you run projects'],
      q: 'How do you keep a project moving?',
      a: [
        'I work with the team to agree on what we’re creating, who is responsible for each part, and when we need decisions or feedback. I’m a PMP®-certified project manager, and much of my work involves helping people plan around the time and resources available.',
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
        'Midweek, everyone posted a short async update in Teams, with blocked cards flagged on the board. Each sprint ended with a review and demo, then a 15-minute retrospective on how we worked. I designed and facilitated the process and was product owner for two of the tools.',
        'We built a Coursera interaction generator, a Claude Skills library and dashboard, a capacity forecasting model, a course design outline tool, and a script writing agent.'
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
      phrases: ['ai','use ai','artificial intelligence','claude','chatgpt','generative ai'],
      q: 'How do you use AI in your work?',
      a: [
        'I use AI to help develop ideas, build prototypes, and create tools that support our team’s work. For example, I used Claude Design and Claude Code to build the Coursera Design Guide and Interactivity Generator. The generator also uses Claude to suggest formats and create activities from a designer’s content and learning goal.',
        'I make the decisions about the learning experience and review what we create. When the content requires subject expertise, I work with experts to check it. I’m especially interested in where AI gives us more room to explore an idea, try an approach, and improve it.',
        'On my concept samples, I used Claude as a thought and design partner. The Space Medicine module was built with Claude Design and Claude Code, and for AI for Nurses, I used ChatGPT, Claude, and Claude Code to support the design.'
      ],
      links: [{ label: 'Space Medicine', href: 'space-medicine.html' }],
      keys: 'ai artificial intelligence claude chatgpt llm generative tools automation prompts copilot machine learning code claude code claude design vibe coding'
    },
    {
      id: 'accessibility', group: 'how',
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
        'At High Point University, I collected and analyzed adoption and engagement data to evaluate technology effectiveness and guide improvements. In my Cleared for Flight concept, I plan the measures alongside the curriculum, so the data needed to revise it is collected from the first cohort.'
      ],
      links: [{ label: 'Cleared for Flight', href: 'drone-inspection-training.html', note: 'how I plan measures in a concept' }],
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
      links: [{ label: 'Light the Beacon', href: 'beacon-escape-room.html', note: 'a playable example' }, { label: 'Space Medicine', href: 'space-medicine.html', note: 'a quiz with feedback on each answer' }],
      keys: 'practice assessment assessments quizzes quiz activities coding practice branching scenarios scenarios interactive media case-based simulations games gamification game-based simulations hands-on interactive'
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
        'Yes. I’ve designed hands-on coding practice and other practice for technical and professional audiences, and I’ve trained faculty, Duke Corporate Education partners, and fellow designers to use course design resources. Cleared for Flight is a technical training concept that works from a task analysis through simulator scenarios to a field checkride.',
        'AI for Nurses is another example of professional learning, offering continuing education credit for working nurses.'
      ],
      links: [{ label: 'Cleared for Flight', href: 'drone-inspection-training.html' }, { label: 'AI for Nurses', href: 'ai-for-nurses.html' }],
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
      a: ['Yes! My résumé is on this site, and there’s a Download PDF button there too.'],
      links: [{ label: 'Résumé', href: 'resume.html' }],
      keys: 'resume résumé cv curriculum vitae download pdf experience history employment work history education publications presentations awards'
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
