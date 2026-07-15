// Loads each interactive tool's standalone HTML and assigns it as an
// iframe's srcdoc, rather than embedding the markup inline. Both tools
// independently define the same class names, element IDs, and CSS custom
// properties, so inlining them on one page risks a collision quietly
// breaking a slider or click handler. Loading via iframe + srcdoc keeps
// each document isolated and running exactly as authored.

document.addEventListener('DOMContentLoaded', () => {
  const embeds = [
    { id: 'iframe-predictive-generative', src: 'assets/interactives/predictive-vs-generative.html' },
    { id: 'iframe-features-labels', src: 'assets/interactives/features-vs-labels.html' },
  ];

  // Fixed pixel heights can't fit content that reflows this much between a
  // wide desktop layout and a stacked mobile one (900px+ swings). Each tool
  // reports its own body height via postMessage (a same-realm ResizeObserver
  // inside the iframe, which is reliable, unlike observing a child
  // document's box from the parent's realm) whenever it changes, including
  // on tab switches, and the matching iframe is resized to fit.
  window.addEventListener('message', (e) => {
    if (!e.data || e.data.type !== 'embed-resize') return;
    embeds.forEach(({ id }) => {
      const iframe = document.getElementById(id);
      if (iframe && iframe.contentWindow === e.source) {
        iframe.style.height = e.data.height + 'px';
      }
    });
  });

  embeds.forEach(({ id, src }) => {
    const iframe = document.getElementById(id);
    if (!iframe) return;
    fetch(src, { cache: 'no-store' })
      .then((res) => res.text())
      .then((html) => {
        iframe.srcdoc = html;
      })
      .catch((err) => {
        console.error(`Could not load interactive at ${src}`, err);
      });
  });
});
