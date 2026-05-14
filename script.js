document.documentElement.classList.add("js");

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
