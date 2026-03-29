import * as THREE from "three";
import gsap from "gsap";

export function setCharTimeline(
  character: THREE.Object3D<THREE.Object3DEventMap> | null,
  camera: THREE.PerspectiveCamera
) {
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".landing-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "center 55%",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".whatIDO",
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  if (window.innerWidth > 1024) {
    if (character) {
      tl1
        .fromTo(character.rotation, { y: 0 }, { y: 0.35, duration: 1 }, 0)
        .to(camera.position, { z: 20, duration: 1 }, 0)
        .fromTo(".character-model", { x: 0 }, { x: "-12%", duration: 1 }, 0)
        .to(".landing-container", { opacity: 0.08, duration: 0.7 }, 0)
        .to(".landing-container", { y: "10%", duration: 0.8 }, 0)
        .fromTo(".about-me", { y: "-50%" }, { y: "0%" }, 0);

      tl2
        .to(
          ".character-model",
          { opacity: 0.3, x: "-16%", duration: 3, ease: "power2.out" },
          0
        )
        .to(camera.position, { z: 24, y: 12, duration: 3, ease: "power2.out" }, 0)
        .to(character.rotation, { y: 0.5, x: 0.05, duration: 3 }, 0)
        .to(".about-section", { y: "12%", duration: 3 }, 0)
        .fromTo(
          ".character-rim",
          { opacity: 1, scaleX: 1.4 },
          { opacity: 0, scale: 0.7, y: "-20%", duration: 2.5 },
          0.3
        );

      tl3
        .fromTo(
          ".character-model",
          { y: "0%", opacity: 0.3 },
          { y: "-10%", opacity: 0, duration: 2.4, ease: "none" },
          0
        )
        .fromTo(".whatIDO", { y: 0 }, { y: "8%", duration: 2 }, 0)
        .to(character.rotation, { x: -0.02, duration: 2 }, 0);
    }
  } else {
    return;
  }
}

export function setAllTimeline() {
  const careerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".career-section",
      start: "top 30%",
      end: "100% center",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  careerTimeline
    .fromTo(
      ".career-timeline",
      { maxHeight: "10%" },
      { maxHeight: "100%", duration: 0.5 },
      0
    )

    .fromTo(
      ".career-timeline",
      { opacity: 0 },
      { opacity: 1, duration: 0.1 },
      0
    )
    .fromTo(
      ".career-info-box",
      { opacity: 0 },
      { opacity: 1, stagger: 0.1, duration: 0.5 },
      0
    )
    .fromTo(
      ".career-dot",
      { animationIterationCount: "infinite" },
      {
        animationIterationCount: "1",
        delay: 0.3,
        duration: 0.1,
      },
      0
    );

  if (window.innerWidth > 1024) {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: "20%", duration: 0.5, delay: 0.2 },
      0
    );
  } else {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: 0, duration: 0.5, delay: 0.2 },
      0
    );
  }
}
