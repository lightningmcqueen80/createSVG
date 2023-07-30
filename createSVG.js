const createSVG = (xmlns, width, height, viewbox, ariaHidden, classes, styles, path) => {
    const svgIcon = document.createElementNS(xmlns, "svg");
    svgIcon.setAttribute("xmlns", xmlns);
    svgIcon.setAttribute("viewBox", viewbox);
    svgIcon.setAttribute("width", width);
    svgIcon.setAttribute("height", height);
    svgIcon.setAttribute("aria-hidden", ariaHidden);
    svgIcon.className = classes;
    svgIcon.setAttribute("style", styles);
    svgIcon.innerHTML = path;

    return svgIcon;
};