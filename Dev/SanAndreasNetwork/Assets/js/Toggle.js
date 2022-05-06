function ContentToggle(id, iconid) {
    const Target = document.getElementById(id);
    const IconTarget = document.getElementById(iconid);
    const visibility = Target.getAttribute('data-visible');
    const Iconvisibility = IconTarget.getAttribute('data-toggle');
    if (visibility === "false") {
        Target.setAttribute('data-visible', true);
        IconTarget.setAttribute('data-toggle', true);
    } else if (visibility === "true") {
        Target.setAttribute('data-visible', false);
        IconTarget.setAttribute('data-toggle', false);
    }
}