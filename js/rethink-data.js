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
      ['video', 'Guided video: recordings, predictions, and an expert’s reasoning'], ['game', 'Escape room: evaluate competing explanations to unlock each step'], ['field', 'Field investigation: record locally, or use a supplied recording'], ['mix', 'I’d like to choose as I go'] ] },
    { id: 'shaky', title: 'What would you like to review before getting started?', sub: 'Choose any you’d find helpful.', type: 'many', opts: [
      ['graphs', 'Reading and comparing graphs'], ['pitch', 'Understanding frequency and pitch'], ['spectro', 'Reading a spectrogram, a visual map of sound'], ['evidence', 'Comparing evidence for different explanations'] ] }
  ];
  var COURSE_Q = Q.slice();
  Q = COURSE_Q.concat(UNIT_Q);
  var JORDAN = { major: 'physics', why: 'required', style: 'mix', shaky: ['spectro', 'evidence'], keep: 'points' };

  var UNIT = { n: 'Unit 3', concept: 'Adaptation in a changing environment', question: 'How does birdsong differ between a city park and a nearby forest, and why?',
    doing: 'You’ll compare recordings and environmental data from two settings, consider more than one explanation, and finish with a shared task that every route prepares you for.',
    skills: ['Reading and comparing graphs', 'Frequency and pitch', 'Reading a spectrogram', 'Weighing evidence for different explanations'] };

  var MAJOR = {
    physics: { lens: 'Birdsong as a signal', text: 'Birdsong is a signal traveling through a noisy channel. In cities, some birds sing at a higher pitch to be heard over traffic. You’ll start from the physics of sound and work toward why that shift matters for survival.' },
    biology: { lens: 'Foundation for your major', text: 'Adaptation comes up again in ecology and evolution. This unit gives you a first look at the evidence researchers use, with data you collect yourself.' },
    business: { lens: 'Costs and decisions', text: 'Noise, light, and habitat change are side effects of how cities and businesses grow. You’ll look at what that change means for local species and how organizations weigh it in their decisions.' },
    music: { lens: 'Song, pitch, and learning', text: 'Many songbirds learn their songs much like people learn melodies. You’ll compare recordings and look at how pitch and timing shift when the environment gets louder.' },
    cs: { lens: 'Audio as data', text: 'Bird identification apps use machine learning on audio recordings. You’ll work with the same kind of data those tools are trained on and see where they get it wrong.' },
    undecided: { lens: 'A sampler', text: 'This unit touches biology, data, and fieldwork, so you can notice which parts you enjoy most. That’s useful information for choosing a major.' }
  };
  var WHY = {
    required: 'Since this course is a requirement, each unit starts by showing where it connects to your own program.',
    curious: 'Since you’re here out of curiosity, every unit includes optional detours for questions you want to follow further.',
    career: 'Since this connects to a career goal, examples come from the kinds of work you’re aiming for whenever possible.',
    unsure: 'If you’re not sure yet, that’s fine. The first week includes short samples of each kind of activity so you can find what fits.'
  };
  var FORMAT = {
    video: { tag: 'Watch', name: 'Guided video', text: 'Compare recordings and spectrograms from a city park and a nearby forest, make predictions, and examine an expert’s reasoning.' },
    game: { tag: 'Explore', name: 'Escape room', text: 'Use recordings, noise measurements, and field notes from both settings to evaluate competing explanations.' },
    field: { tag: 'Listen', name: 'Field investigation', text: 'Collect a local recording, or use a supplied one, and compare it with supplied city and forest recordings and noise data.' }
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
    plan: { name: 'A steady plan', text: 'A suggested weekly plan with reminders and short check-ins, so the next step is always clear.' }
  };
  var TASK = 'Use the recordings and environmental data to explain a difference in birdsong between two settings. Consider another possible explanation and identify what additional evidence would help you investigate it.';

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
