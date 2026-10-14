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

    /* ---------- Samples ---------- */
    {
      id: 'where-start', group: 'samples',
      phrases: ['where to start','where do i start','where should i begin','where to begin','what should i look at first'],
      q: 'Where should I start?',
      a: ['It depends on what you’re curious about:'],
      links: [
        { label: 'Space Medicine', href: 'space-medicine.html', note: 'course design on Coursera' },
        { label: 'Cleared for Flight', href: 'drone-inspection-training.html', note: 'a drone inspection training concept' },
        { label: 'Access Granted', href: 'admin-certification.html', note: 'a certification concept for platform admins' },
        { label: 'AI for Nurses', href: 'ai-for-nurses.html', note: 'a full Specialization, from start to launch' },
        { label: 'Digital You', href: 'digital-you.html', note: 'a for-credit course in Canvas' },
        { label: 'Branching Biology', href: 'choose-your-own-adventure.html', note: 'a concept for personalized learning' },
        { label: 'Project Management', href: 'project-management.html', note: 'how I scope, manage, and deliver projects' },
        { label: 'Course Portfolio', href: 'course-portfolio.html', note: 'everything I’ve developed over the last six years' }
      ],
      keys: 'start begin first overview where to begin best work highlights recommend recommendation tour what should i look at see samples portfolio examples'
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
      id: 'admin-cert', group: 'samples',
      q: 'What is Access Granted?',
      a: [
        'Access Granted is a certification concept for administrators of an enterprise platform. Admins practice in a simulated console, work toward a three-level credential and stay current as the product changes.',
        'It’s a concept, so you can try the sandbox lab and sample exam item on the page, but it hasn’t been used with real admins.'
      ],
      links: [{ label: 'Access Granted', href: 'admin-certification.html' }],
      keys: 'access granted admin administrator certification credential levels associate professional expert exam blueprint sandbox lab console enterprise platform technical training'
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
      q: 'Are all the projects in this portfolio in use?',
      a: [
        'The portfolio includes both work developed for use at Duke and ideas I’m exploring. Space Medicine launched on Coursera in 2021, and the reimagined Week 2 is a concept I built to show what more interactivity could look like. AI for Nurses launched in September 2026, and Digital You ran as a for-credit course in Spring 2024.',
        'Branching Biology is a proof of concept. It would need further research, development, and testing before being used with students. Cleared for Flight and Access Granted are concepts too.',
        'I also built the Coursera Design Guide and Interactivity Generator to support Duke’s faculty and learning design team. You’ll find them mentioned on my résumé.'
      ],
      links: [{ label: 'Résumé', href: 'resume.html' }],
      keys: 'real in use live launched concept prototype proof of concept hypothetical actual production published design guide interactivity generator tools'
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
        'I also note AI use on the pages where it applies, like the Space Medicine module, which I built with Claude Design and Claude Code.'
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
      phrases: ['where are you', 'where do you live', 'where are you based', 'where are you located', 'are you remote', 'are you in maine', 'live in maine', 'based in', 'relocate', 'relocation', 'work remotely', 'remote work', 'remote roles', 'in person', 'time zone'],
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
