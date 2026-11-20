// Play publication preview videos on hover (desktop) or while in view (touch).
(function () {
  const previews = document.querySelectorAll(".preview.has-video");
  if (!previews.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const play = (preview) => {
    const video = preview.querySelector("video");
    if (!video) return;
    const started = video.play();
    if (started && started.catch) started.catch(() => {});
    preview.classList.add("is-playing");
  };

  const stop = (preview) => {
    const video = preview.querySelector("video");
    if (!video) return;
    video.pause();
    preview.classList.remove("is-playing");
  };

  if (canHover) {
    previews.forEach((preview) => {
      // Hovering anywhere on the publication row plays its preview.
      const row = preview.closest("li") || preview;
      row.addEventListener("mouseenter", () => play(preview));
      row.addEventListener("mouseleave", () => stop(preview));
    });
  } else if (!reduceMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => (e.isIntersecting ? play(e.target) : stop(e.target))),
      { threshold: 0.6 }
    );
    previews.forEach((preview) => observer.observe(preview));
  }
})();
