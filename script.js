document.documentElement.classList.add("js");

const mailtoForms = document.querySelectorAll("[data-mailto-form]");

mailtoForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const body = Array.from(formData.entries())
      .filter(([, value]) => String(value).trim())
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    const subject = form.dataset.mailtoSubject || "Leaning Studios inquiry";
    const mailtoUrl = `mailto:maggiosproductions@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  });
});

const heroCarousel = document.querySelector("[data-hero-carousel]");

if (heroCarousel) {
  const slides = Array.from(heroCarousel.querySelectorAll("[data-carousel-slide]"));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let activeIndex = slides.findIndex((slide) => slide.classList.contains("is-active"));

  if (activeIndex < 0) {
    activeIndex = 0;
    slides[0]?.classList.add("is-active");
  }

  slides.forEach((slide, index) => {
    slide.setAttribute("aria-hidden", String(index !== activeIndex));
  });

  if (!reducedMotion && slides.length > 1) {
    window.setInterval(() => {
      const previousIndex = activeIndex;
      activeIndex = (activeIndex + 1) % slides.length;

      slides[previousIndex].classList.remove("is-active");
      slides[previousIndex].setAttribute("aria-hidden", "true");
      slides[activeIndex].classList.add("is-active");
      slides[activeIndex].setAttribute("aria-hidden", "false");
    }, 8000);
  }
}

const packageRouterForm = document.querySelector(".package-router-form");

if (packageRouterForm) {
  const laneOptions = packageRouterForm.querySelectorAll("[data-lane-option]");
  const packageGroups = packageRouterForm.querySelectorAll("[data-package-group]");
  const packageChoices = packageRouterForm.querySelectorAll('input[name="package-choice"]');
  const audioSupportFields = packageRouterForm.querySelector("[data-audio-support-fields]");
  const audioSupportInputs = audioSupportFields?.querySelectorAll("[data-required-when-active]") ?? [];

  function updatePackageGroups(selectedLane) {
    packageGroups.forEach((group) => {
      const isActive = group.dataset.packageGroup === selectedLane;
      group.classList.toggle("is-active", isActive);
      group.querySelectorAll('input[name="package-choice"]').forEach((input) => {
        input.required = false;
      });
    });

    packageChoices.forEach((input) => {
      input.checked = false;
    });

    const activeGroup = packageRouterForm.querySelector(`[data-package-group="${selectedLane}"]`);
    const firstActiveChoice = activeGroup?.querySelector('input[name="package-choice"]');

    if (firstActiveChoice) {
      firstActiveChoice.required = true;
    }

    const isAudioSupport = selectedLane === "audio-support";
    audioSupportFields?.classList.toggle("is-active", isAudioSupport);
    audioSupportFields?.setAttribute("aria-hidden", String(!isAudioSupport));
    audioSupportInputs.forEach((input) => {
      input.required = isAudioSupport;
    });
  }

  laneOptions.forEach((option) => {
    option.addEventListener("change", () => {
      updatePackageGroups(option.dataset.laneOption);
    });
  });

  const selectedLane = packageRouterForm.querySelector("[data-lane-option]:checked");

  if (selectedLane) {
    updatePackageGroups(selectedLane.dataset.laneOption);
  } else {
    updatePackageGroups("");
  }
}
