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
      phrases: ['what is space medicine', 'what did you do on space medicine', 'is the week 2 module live', 'what happened to glaisher and coxwell', 'how do you work with media teams', 'work with media teams', 'media team', 'media teams', 'media producers', 'media production'],
      q: 'What is Space Medicine?',
      a: [
        'Space Medicine is a Duke Coursera course launched in 2021. As Senior Learning Designer and Project Manager, I managed the project and led the learning design, coordinating media production, guiding scripts, and shaping the course structure. It has reached nearly 30,000 learners.',
        'Separately, I created a concept reimagining of Week 2. It follows James Glaisher and Henry Coxwell’s 1862 balloon flight through a case-based interactive module, with a short activity after each video and a final challenge to redesign Glaisher’s balloon. The module is a portfolio concept and isn’t part of the live Coursera course.'
      ],
      links: [{ label: 'Explore the course and Week 2 concept', href: 'space-medicine.html' }],
      keys: 'space medicine coursera balloon glaisher coxwell hypoxia altitude week 2 exercise interactive module reimagined nasa astronaut what did you do on space medicine is the week 2 module live live course concept role'
    },
    {
      id: 'space-week2', group: 'samples',
      phrases: ['what did you redesign', 'how did you redesign week 2', 'how did you make the week 2 module'],
      q: 'How did you redesign Space Medicine Week 2?',
      a: [
        'I organized the week around one case. Learners investigate what happened to Glaisher and Coxwell, form a hypothesis and revisit it as new evidence comes in, use physiology and pressure models to explain the risk, then apply what they’ve learned in a final challenge to redesign Glaisher’s balloon. Each video is followed by a short activity, and a scenario-based quiz asks learners to transfer the ideas to a cabin pressure loss.',
        'The goal was to help learners connect the videos and practice across the week, so each topic builds on the last. I built the module with Claude Design and Claude Code.'
      ],
      links: [{ label: 'Space Medicine', href: 'space-medicine.html' }],
      keys: 'redesign reimagined week 2 what did you redesign how did you make module exercises hypothesis investigate evidence simulator quiz cabin pressure final challenge redesign balloon activities after each video design process tools claude design claude code'
    },
    {
      id: 'cyoa', group: 'samples',
      phrases: ['what is branching biology', 'is branching biology real', 'is it a working product', 'who is jordan', 'who is jordan in branching biology', 'what is jordan', 'what is the branching biology course map', 'the course map', 'branching biology course map'],
      q: 'What is Branching Biology?',
      a: [
        'Branching Biology is a proof of concept for a personalized learning experience in a required undergraduate Biology 101 course. I designed the concept and prototype, and the walkthrough follows Jordan, a physics major, through a sample unit.',
        'It shows how learner choices could shape the examples, activity format, and support while keeping the unit’s learning goals in view. It’s a design proposal, not a deployed adaptive-learning product or a course validated with students. I made it as a Senior Learning and Curriculum Designer, with Claude Design and Claude Code as thought and design partners.'
      ],
      links: [{ label: 'Branching Biology', href: 'choose-your-own-adventure.html' }],
      keys: 'cyoa choose your own adventure branching biology jordan biology 101 personalized adaptive learner choice walkthrough proof of concept concept undergraduate science dashboard design proposal prototype what did you build'
    },
    {
      id: 'drone', group: 'samples',
      phrases: ['what is cleared for flight', 'is this real flight training', 'what parts are illustrative', 'what is illustrative', 'who is cleared for flight for'],
      q: 'What is Cleared for Flight?',
      a: [
        'Cleared for Flight is a curriculum concept I designed for field employees who already hold an FAA Remote Pilot Certificate (Part 107) but haven’t flown inspections. It shows how I’d connect a job task analysis to learning outcomes, guided simulator practice, independent scenarios, and an evaluator-scored field checkride.',
        'The interactive pieces are examples of the proposed training. The aircraft limits, clearance distances, battery reserves, and image tolerances are illustrative values, not approved operating standards. I haven’t piloted it with real trainees, and the operating details would need review by flight and utility safety experts before anyone could use it.',
        'I made it as a Senior Learning and Curriculum Designer, using Claude Design and Claude Code as thought and design partners.'
      ],
      links: [{ label: 'Cleared for Flight', href: 'drone-inspection-training.html' }],
      keys: 'cleared for flight drone drones inspection training field employees utility technical training task analysis course map simulator scenario checkride part 107 remote pilot certificate illustrative concept real flight training aircraft limits who is it for audience prerequisite'
    },
    {
      id: 'beacon', group: 'samples',
      phrases: ['what is light the beacon', 'is light the beacon tested with students'],
      q: 'What is Light the Beacon?',
      a: [
        'I designed Light the Beacon as a playable browser concept for Grade 6 math. Learners solve four connected problems: build a 2:3 blue-to-gold ratio on a lens, complete a ratio table, find a unit rate, and compare signal plans against the supplies and time available.',
        'The rooms move from a visual model to a table to a rate, then ask learners to use those results in a decision. Optional hints support retries, and feedback points learners toward a relationship they may want to check.',
        'It’s a prototype that hasn’t been tested with students. I built it to make the learning sequence and interactions concrete, as a Senior Learning and Curriculum Designer, with Claude Design and Claude Code as thought and design partners. It would need review and piloting before classroom use.'
      ],
      links: [{ label: 'Light the Beacon', href: 'beacon-escape-room.html' }],
      keys: 'light the beacon escape room game game-based lighthouse grade 6 math ratio ratios unit rate rates equivalent ratios puzzle puzzles hints feedback middle school gamification playable prototype concept untested not tested with students'
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
      phrases: ['what standard', 'which standard', 'what math standard', 'common core', 'what math is in the escape room'],
      q: 'What standard does Light the Beacon address?',
      a: [
        'Light the Beacon focuses on selected parts of Grade 6 Common Core standard 6.RP.A.3, especially 3a, working with equivalent ratios and a ratio table, and 3b, solving a unit-rate problem.',
        'Learners use that reasoning across the lens, generator, and radio rooms, then apply it to the final plan decision. It doesn’t practice plotting ratio pairs from 3a, percents (3c), or unit conversions (3d), so it doesn’t address every expectation in 6.RP.A.3.'
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
        'In the lens room, learners first say how many groups of 5 fit in the 20 spots. In rooms 1 to 3, they record the strategy they used before the door unlocks, and those strategies appear in the recap at the end.','At the final panel, learners choose a plan and then select every reason that applies. Two reasons are true and two are distractors, so the step checks that they can connect the ratio and the time available. If they select a distractor, a short note points back to the supplies or the plans, and if they select only one true reason, it says there’s another limit to check.'
      ],
      links: [{ label: 'Light the Beacon', href: 'beacon-escape-room.html' }],
      keys: 'hints hint feedback support scaffolding scaffold timer penalty try again mistakes wrong answers explain reasoning discussion classroom class use escape room staged hints free final panel plan reason'
    },
    {
      id: 'beacon-validate', group: 'samples',
      phrases: ['what would you test', 'how would you test light the beacon', 'has it been tested'],
      q: 'What would you want to learn from testing Light the Beacon?',
      a: [
        'I’d want to know whether learners can explain how the ratios and rates support their final choice, where they get stuck, and whether the hints help them move forward without giving away the answer.',
        'I’d review the activity with a Grade 6 math educator, then pilot it with students and look at their reasoning as well as whether they complete the rooms. I’d use what I learn to revise the prompts, feedback, and final decision. These are proposed next steps, not results.'
      ],
      links: [{ label: 'Light the Beacon', href: 'beacon-escape-room.html' }],
      keys: 'test testing pilot validate validation next steps what would you test educator review students pilot reasoning learn from testing improve revise'
    },
    {
      id: 'drone-design', group: 'samples',
      phrases: ['how did you design the drone training', 'task analysis', 'design the drone course', 'drone course', 'design cleared for flight', 'how did you design cleared for flight', 'how did you make cleared for flight'],
      q: 'How did you design Cleared for Flight?',
      a: [
        'I started by breaking the job into duties, tasks, and steps, then writing observable performance objectives. I rated each task by how much harm a mistake could cause, which helped me set priorities for practice and assessment.',
        'From there, I designed a progression: an instructor demonstration, guided simulator practice with prompts, optional hints, and retries, an independent scenario with new conditions, observed field practice, and an evaluator-scored checkride. A course map matches each lesson to the format that suits its tasks. Knowledge is self-paced, judgment is practiced in the simulator, and anything that touches the real aircraft happens with an instructor.',
        'The page shows the curriculum architecture and sample interactions. The aircraft-specific procedures and operating limits would need review with flight and utility safety experts before implementation.'
      ],
      links: [{ label: 'Cleared for Flight', href: 'drone-inspection-training.html' }],
      keys: 'task analysis duties tasks steps criticality risk harm performance objective condition behavior standard course map modality simulator self-paced classroom field instructor curriculum design process progression demonstration guided practice hints retries independent scenario observed field practice what did you do role tools how did you make'
    },
    {
      id: 'drone-assess', group: 'samples',
      phrases: ['how do you assess trainees', 'what is a checkride', 'how do you evaluate training'],
      q: 'How would you assess and evaluate the drone training?',
      a: [
        'This is a proposed evaluation model, not a course that has been piloted. A qualified evaluator scores the field checkride against behavior-based criteria and records what they observed as evidence. Missing a critical item means the trainee isn’t qualified yet. If all critical items are met, the instructor assigns targeted practice on any missed noncritical items before the trainee’s first independently assigned inspection.',
        'I’d also plan to review simulator decisions, attempts, and hint use, compare simulator results with checkride results for the same tasks, and look at flight lead observations, incident and near-miss reports, and inspection data that has to be re-flown. Those measures could show where to add guided practice, give field practice more time, or revisit an objective. I don’t have learner or operational results for this concept.'
      ],
      links: [{ label: 'Cleared for Flight', href: 'drone-inspection-training.html' }],
      keys: 'assess assessment evaluate evaluation measure measures effectiveness checkride qualification qualified evaluator rubric behavior-based critical items remediation pass rate xapi lms simulator data incident near-miss reflight revise improve trainees training evaluation results'
    },
    {
      id: 'drone-validate', group: 'samples',
      phrases: ['did you work with a drone expert', 'what would you test before using this', 'what would you validate'],
      q: 'What would you validate before using Cleared for Flight?',
      a: [
        'I didn’t work with a drone expert on this proof of concept. That would be a follow-up step. I’d start by working with flight and utility safety experts to confirm the aircraft, procedures, clearances, emergency actions, and image requirements for the actual operation. Then I’d review the task analysis, objectives, scenarios, and checkride rubric with them.',
        'After that, I’d test the learning sequence and interactions with representative trainees and evaluators, revise based on what I observe, and confirm the qualification criteria before launch. These are proposed next steps, not work I’ve completed.'
      ],
      links: [{ label: 'Cleared for Flight', href: 'drone-inspection-training.html' }],
      keys: 'validate validation review experts safety experts flight experts utility safety test pilot pilot test before using next steps what would you test did you work with a drone expert subject matter expert sme approve approval operating standards'
    },
    {
      id: 'drone-part107', group: 'samples',
      phrases: ['does it teach part 107', 'is this faa training', 'does it prepare for part 107'],
      q: 'Does Cleared for Flight teach someone to earn a Part 107 certificate?',
      a: [
        'No. The concept assumes learners already hold an FAA Remote Pilot Certificate (Part 107), earned before the course. It focuses on company qualification: the company’s aircraft, inspection procedures, and qualification standards.',
        'The field checkride represents company qualification in this concept. It doesn’t stand in for FAA certification.'
      ],
      links: [{ label: 'Cleared for Flight', href: 'drone-inspection-training.html' }],
      keys: 'part 107 faa remote pilot certificate remote pilot license drone license certification faa exam teach part 107 prerequisite prior certificate company qualification not faa'
    },
    {
      id: 'cyoa-how', group: 'samples',
      phrases: ['is branching biology adaptive', 'is this adaptive learning', 'how does it adapt', 'what formats', 'how does personalization work'],
      q: 'Is Branching Biology adaptive?',
      a: [
        'In this concept, personalization is shown through choices about context, activity format, and support. The walkthrough uses Jordan to illustrate how those choices might work. The path is personalized and choice-based, shaped by a few opening questions in the course chat. The concept doesn’t yet change instruction based on how a learner performs.',
        'The proposed formats are a guided video, an escape-room activity, and a field investigation. The design intent is to keep the learning goals consistent across formats. A next design step would be to check that each format gives learners a comparable chance to practice and show those goals.'
      ],
      links: [{ label: 'Branching Biology', href: 'choose-your-own-adventure.html' }],
      keys: 'adapt adaptive personalized personalization how does it adapt learner path pathways choice learner choice formats guided video escape room field investigation essential question syllabus interests prior knowledge jordan algorithm automatic recommendations skills check refreshers'
    },
    {
      id: 'cyoa-faculty', group: 'samples',
      phrases: ['what does the faculty view show', 'faculty dashboard'],
      q: 'What does faculty see in Branching Biology?',
      a: [
        'The concept includes a faculty view with example patterns in activity choices, confidence, and performance against shared criteria. It also sketches how an instructor might spot a reason to check in with a learner.',
        'These indicators are prompts for a conversation. They don’t diagnose a learner or draw conclusions about them. The view is a design concept with sample numbers for illustration, and it hasn’t been tested as an analytics tool. Before building something like it, I’d want to define what data are needed, who can see them, and how instructors should interpret them.'
      ],
      links: [{ label: 'Branching Biology', href: 'choose-your-own-adventure.html' }],
      keys: 'faculty view instructor dashboard roster check-in confidence results class patterns outcomes curriculum accreditation data analytics learning analytics teacher what does faculty see sample numbers privacy data'
    },
    {
      id: 'cyoa-biology', group: 'samples',
      phrases: ['what biology is in the activity', 'what is the birdsong activity', 'are the recordings real', 'what is the science', 'song sparrow', 'what bird is it', 'which bird', 'what species', 'portland study'],
      q: 'What biology idea does the Branching Biology activity explore?',
      a: [
        'The sample unit asks how organisms respond to changes in their environment, using song sparrow song in a city park and a nearby forest. Learners look at evidence, such as recordings and spectrograms, to explain why city birds might sing differently, and they consider other explanations. The unit includes a short “Meet the bird” reading and a list of sources, including a published Portland study that found an association between low-frequency background noise and song sparrow song frequency. That study doesn’t on its own establish the cause.',
        'The recordings and measurements in the walkthrough are illustrative, and the page says so. A live course would use cited recordings, for example from the Macaulay Library. I’d also document where and how the recordings were made, the sample size, and how pitch was measured.'
      ],
      links: [{ label: 'Branching Biology', href: 'choose-your-own-adventure.html' }],
      keys: 'song sparrow sparrow species portland study meet the bird macaulay library sources biology birdsong bird song song pitch recordings recording spectrogram traffic noise city birds forest park field investigation evidence alternative explanation another explanation evolution evolutionary dataset data sample data illustrative species science scientific claims environment'
    },
    {
      id: 'cyoa-validate', group: 'samples',
      phrases: ['what would you test before using this with students', 'has branching biology been tested', 'how would you validate branching biology'],
      q: 'What would you test before using Branching Biology with students?',
      a: [
        'I’d test first whether final-task work is comparable across formats, scored blind on the shared rubric, whether checkpoint feedback leads to stronger revisions, whether learners understand how their opening answers are used, and whether the dashboard signals lead faculty to useful check-ins. Success would look like similar results across formats, clear gains from the Checkpoint 2 draft to the final task, and learners reporting that the course felt relevant.',
        'Biology faculty would own the content. Before launch, a biology expert would review the recordings and data, the explanations, the key-terms definitions, and the rubric language. I’d replace illustrative data with cited recordings, test with screen reader and keyboard users and with learners who are Deaf or hard of hearing, choose a host platform and plan the connection to the LMS gradebook, and set privacy rules for opening-question and dashboard data. These are proposed next steps, not results from a completed study.'
      ],
      links: [{ label: 'Branching Biology', href: 'choose-your-own-adventure.html' }],
      keys: 'test testing pilot validate validation next steps before using with students instructors access needs accessibility screen reader keyboard deaf hard of hearing biology expert review evidence what would you test study results privacy gradebook lms success measures'
    },
    {
      id: 'cyoa-origin', group: 'samples',
      phrases: ['where did branching biology come from', 'what is illustrative in branching biology', 'what did you design in branching biology'],
      q: 'Where did the Branching Biology concept come from?',
      a: [
        'This proof of concept draws on 13 years of teaching and learning design work in higher education. It takes on tension points that a traditional LMS doesn’t handle well: making a required course feel relevant, offering choice without splitting up assessment, and giving faculty useful signals without over-reading the data.',
        'I designed and built the interactive walkthrough, including the essential question and unit goal, three formats with shared checkpoints, and the feedback, final task, and rubric. The learner data, faculty dashboard, course map results, and bird recordings and measurements are illustrative, and the platform features show how the design could work. They aren’t a built product.'
      ],
      links: [{ label: 'Branching Biology', href: 'choose-your-own-adventure.html' }],
      keys: 'where did it come from origin originated why branching biology concept background tension points required course relevant choice assessment faculty signals what did you design what is illustrative designed and built illustrative data platform features 13 years higher education'
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
        'I worked as Senior Learning Designer and Project Manager, and I used ChatGPT, Claude, and Claude Code to support the design.'
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
        'I defined three outcomes with the lead instructors, then mapped every week to the same six-step structure so guests and TAs could begin co-design work. Each week included a guest session for about 100 students, hands-on exploration in EdStem, smaller sections for discussion, and a weekly blog post on each student’s own WordPress site.',
        'My role was Senior Learning Designer and Project Manager.'
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
        'After the launch, our partners funded a second year of work, and a new Specialization is in development. I’m continuing as project manager and senior learning experience designer across the four courses in that project.'
      ],
      links: [{ label: 'AI for Nurses', href: 'ai-for-nurses.html' }],
      keys: 'after launch second year funded new specialization in development next project four courses continuing project manager senior learning experience designer partners johnson ai for nurses what happened next'
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
      id: 'cyoa-science', group: 'samples',
      phrases: ['what learning science informed branching biology', 'what research supports your design choices', 'what is self-determination theory', 'do you use backward design', 'what learning theories do you use'],
      q: 'What learning science informed Branching Biology?',
      a: [
        'Three ideas shape the concept. First, examples connect to a learner’s existing knowledge and interests, drawing on prior-knowledge research and Keller’s ARCS model. Second, backward design keeps activities and assessments focused on a shared essential question. Third, learners can choose among formats while working toward the same goals and criteria, drawing on self-determination theory and Universal Design for Learning.',
        'The choices shape how learners engage with the work, not what they are expected to learn.'
      ],
      links: [{ label: 'Branching Biology', href: 'choose-your-own-adventure.html' }],
      keys: 'learning science research evidence based theory prior knowledge keller arcs model backward design essential question self-determination theory universal design for learning udl autonomy competence relevance motivation three ideas how learning works ambrose'
    },
    {
      id: 'drone-sim', group: 'samples',
      phrases: ['how does the cleared for flight simulator work', 'what is the simulator in cleared for flight', 'can a learner fail cleared for flight'],
      q: 'How does the Cleared for Flight simulator work?',
      a: [
        'The sample scenario builds toward independent decisions across five decision points. The first includes a prompt, the next two offer optional hints, and the last two are completed without hints. After coaching, learners can try a decision again.',
        'This is a concept prototype, and the operating limits shown in it are illustrative values. They would need review by flight and utility safety experts before any real training use.'
      ],
      links: [{ label: 'Cleared for Flight', href: 'drone-inspection-training.html' }],
      keys: 'simulator scenario decision points five decisions prompt hints fade support no hints coaching retry try again substation inspection illustrative limits prototype how does the simulator work can a learner fail'
    },
    {
      id: 'try-concepts', group: 'samples',
      phrases: ['can i try the concepts', 'can i try the samples', 'are the interactives working', 'are the samples interactive'],
      q: 'Can I try the concepts?',
      a: [
        'Yes. Branching Biology, Light the Beacon, and Cleared for Flight are interactive on their project pages. The separate Space Medicine Week 2 concept is interactive on the Space Medicine page as well.'
      ],
      links: [{ label: 'Branching Biology', href: 'choose-your-own-adventure.html' }, { label: 'Light the Beacon', href: 'beacon-escape-room.html' }, { label: 'Cleared for Flight', href: 'drone-inspection-training.html' }, { label: 'Space Medicine', href: 'space-medicine.html' }],
      keys: 'try interactive demo play can i try the concepts samples working prototypes are they interactive do they work live demo'
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
        'On the Home page, each sample is marked Live project or Concept, and you can filter by project type, features, audience, or platform.'
      ],
      keys: 'real in use live launched concept concepts prototype proof of concept hypothetical actual production published difference live project ip intellectual property confidential confidentiality why concepts custom design'
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
      id: 'concept-making', group: 'samples',
      phrases: ['how did you make your concept samples', 'what tools did you use for the concepts', 'how did you build the samples'],
      q: 'How did you make your concept samples?',
      a: [
        'For Branching Biology, Light the Beacon, and Cleared for Flight, I worked as a Senior Learning and Curriculum Designer. I designed the learning sequence, including the practice, feedback, and assessment, and then built an interactive prototype to show how it would work. I used Claude Design and Claude Code as thought and design partners throughout.',
        'Each concept has its own page that walks through the design decisions. They’re prototypes, and they would need review with subject experts and testing with learners before anyone used them.'
      ],
      links: [{ label: 'Branching Biology', href: 'choose-your-own-adventure.html' }, { label: 'Light the Beacon', href: 'beacon-escape-room.html' }, { label: 'Cleared for Flight', href: 'drone-inspection-training.html' }],
      keys: 'how did you make how did you build what tools did you use tools role what did you do process concept samples prototype claude design claude code ai partner built made created designed concepts'
    },

    /* ---------- Project management ---------- */
    {
      id: 'design-build-manage', group: 'pm',
      q: 'Do you design the learning, build it, or manage the project?',
      a: [
        'My work often includes all three. I help shape the learning experience, develop materials and prototypes, and coordinate the work needed to bring a project together.',
        'The mix depends on the project and the team. In AI for Nurses, I led learning design and project management with faculty and project partners.'
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
        'I use AI to help develop ideas, build prototypes, and create tools that support our team’s work. For example, I used Claude Design and Claude Code as thought and design partners across my portfolio, including every concept sample. For AI for Nurses, I also used ChatGPT. Digital You is the one project where I didn’t use AI.',
        'I make the decisions about the learning experience and review what we create. When the content requires subject expertise, I work with experts to check it. I’m especially interested in where AI gives us more room to explore an idea, try an approach, and improve it.'
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
      id: 'motivation', group: 'how',
      phrases: ['how do you design for learner motivation','learner motivation','design for motivation','how do you motivate learners','how do you keep learners motivated','how do you keep learners engaged','how do you engage learners','what keeps learners going','student motivation','learner engagement'],
      q: 'How do you design for learner motivation?',
      a: [
        'Learners come to a course for different reasons. Some are already interested in the topic; others are there because a course is required, or because something caught their curiosity. I want to make room for all of those starting points.',
        'My longer-term aim is to help learners find personal meaning and a reason to keep going. Along the way, clear goals, manageable milestones, visible progress, useful feedback, and chances to try again can provide structure and momentum. Meaningful choices and relevant examples can help learners connect the work to their own interests. I want those supports to build confidence and curiosity, not just reward completion.',
        'In Branching Biology, learners can explore a shared question through different formats while working toward the same goals. In Light the Beacon, a sequence of problems builds toward a decision, with hints and feedback available along the way. Those concepts haven’t been tested with learners, so I’d want to learn which supports help different learners stay engaged and where the experience needs to change.'
      ],
      links: [{ label: 'Branching Biology', href: 'choose-your-own-adventure.html' }, { label: 'Light the Beacon', href: 'beacon-escape-room.html' }],
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
      phrases: ['what is your process for curriculum design', 'how do you write learning objectives', 'how do you align to standards', 'what standards do you use', 'do you use ngss'],
      q: 'What’s your process for curriculum design?',
      a: [
        'I start with the learners, the subject, and what they need to be able to do. I also look at the standards or requirements that matter for that setting, whether that’s NGSS, Common Core, or accreditation standards. I use them to anchor the experience, then translate them into clear, tangible goals learners can work toward.',
        'That often means shaping the goals into essential questions and statements like, “By the end of this lesson, you’ll be able to…” From there, I map a sequence of ideas, examples, practice, and assessment that helps learners build toward those goals in manageable steps. I work with subject matter experts to make sure the content is accurate and relevant, and I refine the experience based on feedback and what learners need.'
      ],
      keys: 'curriculum design process standards ngss common core accreditation learning objectives learning goals write objectives essential questions backward design sequence scope and sequence map assessment alignment'
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
      a: ['Yes! My résumé is on this site as a full, searchable record, and there’s a Download résumé button for the two-page version.'],
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
