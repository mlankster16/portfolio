window.RETHINK = (function () {
  var Q = [
    { id: 'major', title: 'What’s your major or program?', type: 'one', opts: [
      ['physics', 'Physics'], ['biology', 'Biology'], ['business', 'Business'], ['music', 'Music'], ['cs', 'Computer Science'], ['undecided', 'Undecided'] ] },
    { id: 'why', title: 'Why are you taking this course?', type: 'one', opts: [
      ['required', 'It’s required for my degree'], ['curious', 'I’m curious about it'], ['career', 'It connects to a career goal'], ['unsure', 'I’m not sure yet'] ] },
    { id: 'keep', title: 'What keeps you going?', type: 'one', opts: [
      ['self', 'Figuring things out on my own'], ['points', 'Streaks, points, and seeing progress'], ['people', 'Working alongside other people'], ['plan', 'A clear plan and reminders'] ] }
  ];
  var UNIT_Q = [
    { id: 'style', title: 'What kind of experience would you like for this unit?', type: 'one', opts: [
      ['video', 'Guided video: recordings, predictions, and an expert’s reasoning'], ['game', 'Escape room: evaluate competing explanations to move on to each step'], ['field', 'Field investigation: work with supplied field recordings, and add your own if you like'], ['mix', 'I’d like to choose as I go'] ] },
    { id: 'shaky', title: 'What would you like to review before getting started?', sub: 'Choose any you’d find helpful.', type: 'many', opts: [
      ['graphs', 'Reading and comparing graphs'], ['pitch', 'Understanding frequency and pitch'], ['spectro', 'Reading a spectrogram, a visual map of sound'], ['evidence', 'Comparing evidence for different explanations'] ] }
  ];
  var COURSE_Q = Q.slice();
  Q = COURSE_Q.concat(UNIT_Q);
  var JORDAN = { major: 'physics', why: 'required', style: 'mix', shaky: ['spectro', 'evidence'], keep: 'points' };

  var UNIT = { n: 'Unit 3', concept: 'Adaptation in a changing environment', question: 'How does birdsong differ between a city park and a nearby forest, and why?',
    doing: 'You’ll compare recordings and environmental data from two settings, consider more than one explanation, and finish with a shared task that every format prepares you for.',
    goal: 'Use recordings and noise data to compare song-frequency patterns, evaluate at least two explanations, and say what the data can and can’t tell us about why the songs differ.',
    skills: ['Reading and comparing graphs', 'Frequency and pitch', 'Reading a spectrogram', 'Weighing evidence for different explanations'] };

  var MAJOR = {
    physics: { lens: 'Birdsong as a signal', text: 'Birdsong is a signal traveling through a noisy channel. Some bird populations in noisy urban areas sing song elements with higher minimum frequencies than populations in quieter areas. One hypothesis is that higher notes are easier to detect over low-frequency traffic noise, but findings vary by species and no single explanation holds everywhere. You’ll start from the physics of sound and test that idea against other explanations.' },
    biology: { lens: 'Foundation for your major', text: 'Adaptation comes up again in ecology and evolution. This unit gives you a first look at the evidence researchers use, working with field recordings and noise data.' },
    business: { lens: 'Costs and decisions', text: 'Noise, light, and habitat change can be side effects of how cities and businesses grow. You’ll look at what that change means for local species and how organizations weigh it in their decisions.' },
    music: { lens: 'Song, pitch, and learning', text: 'Song sparrows, the species in this unit, learn their songs from older birds in their first year. That’s a simplified parallel to learning a melody by ear. You’ll compare recordings and look at how frequency and timing differ between a loud site and a quiet one.' },
    cs: { lens: 'Audio as data', text: 'Bird identification apps use machine learning on audio recordings. You’ll work with the same kind of data those tools are trained on and see where they can get it wrong.' },
    undecided: { lens: 'A sampler', text: 'This unit touches biology, data, and fieldwork, so you can notice which parts you enjoy most. That can help when you choose a major.' }
  };
  var WHY = {
    required: 'Since this course is a requirement, each unit starts by showing where it connects to your own program.',
    curious: 'Since you’re here out of curiosity, every unit includes optional detours for questions you want to follow further.',
    career: 'Since this connects to a career goal, examples come from the kinds of work you’re aiming for whenever possible.',
    unsure: 'If you’re not sure yet, that’s fine. The first week includes short samples of each kind of activity so you can find what fits.'
  };
  var FORMAT = {
    video: { tag: 'Watch', name: 'Guided video', text: 'Compare recordings and spectrograms from a city park and a nearby forest, make predictions, and examine an expert’s reasoning.', time: 'About 40 min', support: 'Captions and transcript · pause at any checkpoint' },
    game: { tag: 'Explore', name: 'Escape room', text: 'Use recordings, noise measurements, and field notes from both settings to evaluate competing explanations.', time: 'About 40 min', support: 'A hint after two tries · your room log saves as you go' },
    field: { tag: 'Listen', name: 'Field investigation', text: 'Work with the supplied city and forest recordings and noise data. You can also add a recording from near you.', time: 'About 40 min, plus up to 20 min if you record', support: 'Supplied recordings always available · step-by-step protocol' }
  };
  var SHAKY = {
    graphs: 'Reading and comparing graphs: a 5-minute practice with two charts side by side.',
    pitch: 'Understanding frequency and pitch: a short explainer with sound clips.',
    spectro: 'Reading a spectrogram: a guided walkthrough of one recording.',
    evidence: 'Comparing evidence for different explanations: two quick examples to sort.'
  };
  var KEEP = {
    self: { name: 'Room to explore', text: 'Optional deep-dive questions and an open dataset to explore, with no points attached.' },
    points: { name: 'Streaks, points, and seeing progress', text: 'Points and a weekly streak for each checkpoint, plus a progress map that fills in. Over the term, rewards shift from showing up to showing what you can explain.' },
    people: { name: 'A small crew', text: 'A group of four working on the same question, with a shared findings board at the end of the unit.' },
    plan: { name: 'A steady plan', text: 'A suggested weekly plan with reminders and short check-ins, so the next step is easy to see.' }
  };
  var TASK = 'First, using the recordings and noise data, describe how song frequency differs between the city park and the forest. Evaluate at least two explanations: which do the data support, and which remain uncertain? Then answer: can these data tell us whether the difference reflects a short-term behavioral response, a learned song spreading through the population (cultural change), or genetic change across generations? Name the evidence that would help you tell the explanations apart.';

  function path(a) {
    var formats = a.style === 'mix' ? ['video', 'game', 'field'] : [a.style];
    var shaky = (a.shaky || []).map(function (k) { return SHAKY[k]; });
    return {
      major: MAJOR[a.major], why: WHY[a.why],
      formats: formats.map(function (k) { return Object.assign({ key: k }, FORMAT[k]); }),
      choose: a.style === 'mix',
      shaky: shaky, keep: KEEP[a.keep], task: TASK
    };
  }
  return { Q: Q, COURSE_Q: COURSE_Q, UNIT_Q: UNIT_Q, JORDAN: JORDAN, UNIT: UNIT, FORMAT: FORMAT, KEEP: KEEP, path: path };
})();
