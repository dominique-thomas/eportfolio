const owner = portfolioOwner;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const mobileQuery = window.matchMedia("(max-width: 760px)");

// Featured project first, then the rest in data.js order
const featuredProject = data.find((p) => p.featured) || data[0];
const projects = [featuredProject, ...data.filter((p) => p !== featuredProject)];

const projectTypes = ["Personal Project", "Professional Project"];

let moreWorkExpanded = false;
let activeIndex = -1;
let activeSlide = 0;
let openedFromPage = false;


/* ---------- Helpers ---------- */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function esc(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function slugFor(project) {
    return "project-" + project.id.toLowerCase().replace(/_/g, "-");
}

function hideSection(id) {
    const section = document.getElementById(id);
    if (section) section.hidden = true;
    $$(`a[href="#${id}"]`).forEach((link) => (link.hidden = true));
}

// Tags without "Personal Project" / "Professional Project"
function topicTags(project) {
    return (project.keywords || []).filter((k) => k && !projectTypes.includes(k));
}

function projectType(project) {
    return (project.keywords || []).find((k) => projectTypes.includes(k)) || "";
}

// Tries .png first, then falls back to .jpg (same as the old site)
function imageTag(base, alt, attrs = "") {
    return `<img src="${base}.png" alt="${esc(alt)}" ${attrs}
        onerror="this.onerror=null; this.src='${base}.jpg';">`;
}

function slideBase(project, index) {
    return `images/${project.id}_${String(index).padStart(3, "0")}`;
}


/* ---------- Theme and page basics ---------- */

function applyTheme() {
    const theme = owner.theme || {};
    const root = document.documentElement;
    if (theme.accent) root.style.setProperty("--accent", theme.accent);
    root.dataset.theme = theme.mode === "dark" ? "dark" : "light";
}

function renderBasics() {
    const name = owner.name || "";
    const possessive = name.endsWith("s") ? `${name}'` : `${name}'s`;
    document.title = `${possessive} ePortfolio`;

    $("#brandName").textContent = name;
    $("#menuBrandName").textContent = name;
    $("#footerCopy").textContent = `© ${name} ${new Date().getFullYear()}`;

    const socials = (owner.socials || [])
        .map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`)
        .join("");
    $("#footerSocials").innerHTML = socials;
    $("#menuSocials").innerHTML = socials;
}


/* ---------- Hero ---------- */

function renderHero() {
    const hero = owner.hero || {};
    let headline = esc(hero.headline);

    if (hero.highlight) {
        const highlight = esc(hero.highlight);
        headline = headline.replace(highlight, `<span class="accent">${highlight}</span>`);
    }

    $("#heroTitle").innerHTML = headline;

    if (hero.subline) $("#heroSubline").textContent = hero.subline;
    else $("#heroSubline").hidden = true;
}


/* ---------- Work ---------- */

function linkButtons(project, primaryClass) {
    const demos = (project.demo || []).map((d, i) => {
        const label = d.label || (i === 0 ? "Live demo" : d.title || "Live demo");
        return `<a class="btn ${i === 0 ? primaryClass : "btn-outline"}" href="${esc(d.link)}" target="_blank" rel="noopener">${esc(label)}</a>`;
    });

    if (project.blogPost) {
        demos.push(`<a class="btn btn-outline" href="${esc(project.blogPost)}" target="_blank" rel="noopener">Blog post</a>`);
    }

    return demos.join("");
}

function renderFeatured() {
    const p = featuredProject;
    const chips = topicTags(p).slice(0, 3).map((k) => `<li class="chip">${esc(k)}</li>`).join("");

    $("#featuredProject").innerHTML = `
        <article class="featured">
            <a class="featured-media" href="#${slugFor(p)}" tabindex="-1" aria-hidden="true">
                ${imageTag(slideBase(p, 0), "")}
            </a>
            <div class="featured-body">
                <p class="meta">${esc(p.year)}</p>
                <h3 class="featured-title">${esc(p.title)}</h3>
                <p class="featured-desc">${esc(p.description)}</p>
                <ul class="chips" aria-label="Tags">${chips}</ul>
                <div class="btn-row">
                    <a class="btn btn-primary" href="#${slugFor(p)}">View project</a>
                    ${linkButtons(p, "btn-outline")}
                </div>
            </div>
        </article>`;
}

function renderMoreWork() {
    const others = projects.slice(1);

    $("#workGrid").innerHTML = others.map((p) => `
        <a class="work-card" href="#${slugFor(p)}">
            <div class="work-thumb">
                <img src="images/${p.id}_thumb.jpg" alt="" loading="lazy">
            </div>
            <div class="work-card-head">
                <span class="work-card-title">${esc(p.title)}</span>
                <span class="work-card-year">${esc(p.year)}</span>
            </div>
            <span class="work-card-tags">${esc(topicTags(p).slice(0, 2).join(" · "))}</span>
        </a>`).join("");

    $("#showMore").addEventListener("click", () => {
        const firstHidden = $(".work-card[hidden]");
        moreWorkExpanded = true;
        applyMoreWorkLimit();
        if (firstHidden) firstHidden.focus();
    });

    mobileQuery.addEventListener("change", applyMoreWorkLimit);
    applyMoreWorkLimit();

    if (owner.blogUrl) {
        $("#blogCallout").innerHTML =
            `More projects and process notes can be found on <a href="${esc(owner.blogUrl)}" target="_blank" rel="noopener">my blog</a>.`;
    } else {
        $("#blogCallout").hidden = true;
    }

    if (!others.length) $(".more-work").hidden = true;
}

function applyMoreWorkLimit() {
    const limits = owner.moreWork || {};
    const limit = mobileQuery.matches ? limits.mobile ?? 4 : limits.desktop ?? 6;
    const cards = $$(".work-card");
    const remaining = Math.max(cards.length - limit, 0);

    cards.forEach((card, i) => (card.hidden = !moreWorkExpanded && i >= limit));

    const button = $("#showMore");
    button.hidden = moreWorkExpanded || remaining === 0;
    button.textContent = `Show more projects (${remaining})`;
    button.setAttribute("aria-expanded", String(moreWorkExpanded));
}


/* ---------- About, toolkit, stats, contact ---------- */

function renderAbout() {
    const paragraphs = owner.about || [];
    if (!paragraphs.length) return hideSection("about");
    $("#aboutText").innerHTML = paragraphs.map((text) => `<p>${esc(text)}</p>`).join("");
}

function renderToolkit() {
    const groups = owner.toolkit || [];
    if (!groups.length) return hideSection("toolkit");

    $("#toolkitGrid").innerHTML = groups.map((group) => `
        <div class="toolkit-group">
            <h3 class="toolkit-label">${esc(group.label)}</h3>
            <ul class="chips">
                ${(group.tools || []).map((tool) => `<li class="chip">${esc(tool)}</li>`).join("")}
            </ul>
        </div>`).join("");
}

function renderStats() {
    const stats = owner.stats || [];
    if (!stats.length) return hideSection("stats");

    const start = reduceMotion.matches ? null : 0;

    $("#statsGrid").innerHTML = stats.map((stat) => `
        <div class="stat">
            <p class="stat-number">
                <span data-count="${Number(stat.number) || 0}">${start ?? stat.number}</span>${esc(stat.suffix || "")}
            </p>
            <p class="stat-label">${esc(stat.label)}</p>
        </div>`).join("");
}

function countUp(el) {
    const target = Number(el.dataset.count);
    const duration = 1200;
    const startTime = performance.now();

    function tick(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased).toLocaleString();
        if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
}

function renderContact() {
    const contact = owner.contact;
    if (!contact) return hideSection("contact");

    $("#contactHeading").textContent = contact.heading || "";
    $("#contactText").textContent = contact.text || "";

    const button = $("#contactButton");
    if (contact.button?.url) {
        button.href = contact.button.url;
        button.textContent = contact.button.label || "Get in touch";
    } else {
        button.hidden = true;
    }
}


/* ---------- Mobile menu ---------- */

function initMobileMenu() {
    const menu = $("#mobileMenu");
    const openButton = $("#menuOpen");

    function open() {
        menu.hidden = false;
        document.body.classList.add("no-scroll");
        openButton.setAttribute("aria-expanded", "true");
        $("#menuClose").focus();
    }

    function close(restoreFocus = true) {
        if (menu.hidden) return;
        menu.hidden = true;
        document.body.classList.remove("no-scroll");
        openButton.setAttribute("aria-expanded", "false");
        if (restoreFocus) openButton.focus();
    }

    openButton.addEventListener("click", open);
    $("#menuClose").addEventListener("click", () => close());
    $$(".mobile-nav a").forEach((link) => link.addEventListener("click", () => close(false)));

    menu.addEventListener("keydown", (e) => {
        if (e.key === "Escape") close();
    });

    mobileQuery.addEventListener("change", (e) => {
        if (!e.matches) close(false);
    });
}


/* ---------- Project view ---------- */

function buildSlides(project) {
    const images = [];
    const total = project.imageRange || 0;

    for (let i = 0; i < total; i++) {
        images.push({ type: "image", base: slideBase(project, i) });
    }

    const videos = (project.videoUrls || []).map((url) => ({ type: "video", url }));
    return project.videoPosition === "start" ? [...videos, ...images] : [...images, ...videos];
}

function renderProjectView(project) {
    const index = projects.indexOf(project);
    const next = projects[(index + 1) % projects.length];
    const slides = buildSlides(project);
    const count = slides.length;

    const meta = [project.year, projectType(project)].filter(Boolean).join(" · ");
    const chips = topicTags(project).map((k) => `<li class="chip">${esc(k)}</li>`).join("");

    const slideHtml = slides.map((slide, i) => {
        const label = `${i + 1} of ${count}`;
        const inner = slide.type === "video"
            ? `<iframe src="${esc(slide.url)}" title="${esc(project.title)} video" loading="lazy"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            : imageTag(slide.base, `${project.title}, screenshot ${label}`, i === 0 ? "" : `loading="lazy"`);
        return `<div class="pv-slide${i === 0 ? " is-active" : ""}" role="group" aria-roledescription="slide" aria-label="${label}">${inner}</div>`;
    }).join("");

    const thumbs = count > 1 ? `
        <div class="pv-thumbs">
            ${slides.map((slide, i) => `
                <button type="button" class="pv-thumb${slide.type === "video" ? " pv-thumb-video" : ""}" data-slide="${i}"
                    aria-label="Show ${slide.type === "video" ? "video" : "screenshot"} ${i + 1} of ${count}" aria-current="${i === 0}">
                    ${slide.type === "video" ? "Video" : imageTag(slide.base, "", `loading="lazy"`)}
                </button>`).join("")}
        </div>
        <div class="pv-dots">
            ${slides.map((_, i) => `
                <button type="button" class="pv-dot" data-slide="${i}" aria-label="Show slide ${i + 1} of ${count}" aria-current="${i === 0}">
                    <span></span>
                </button>`).join("")}
        </div>` : "";

    const note = project.specialNote
        ? `<p class="pv-note">The visuals presented here are conceptual recreations based on original products.</p>`
        : "";

    // "details" for one overview, or "scope" + "solution" for two short sections
    const overview = project.details
        ? `<h3>Overview</h3><p>${esc(project.details)}</p>`
        : [
            project.scope ? `<h3>The goal</h3><p>${esc(project.scope)}</p>` : "",
            project.solution ? `<h3>My role</h3><p>${esc(project.solution)}</p>` : ""
        ].join("") || `<h3>Overview</h3><p>${esc(project.description)}</p>`;

    const links = linkButtons(project, "btn-primary");
    const tools = (project.programs || []).map((tool) => `<li>${esc(tool)}</li>`).join("");

    $("#pvBody").innerHTML = `
        <div class="wrap pv-header">
            <p class="meta">${esc(meta)}</p>
            <h2 class="pv-title" id="pvTitle">${esc(project.title)}</h2>
            ${chips ? `<ul class="chips" aria-label="Tags">${chips}</ul>` : ""}
        </div>

        ${count ? `
        <div class="wrap pv-media">
            <div class="pv-stage" id="pvStage" role="region" aria-roledescription="carousel" aria-label="Project images">
                ${slideHtml}
            </div>
            ${thumbs}
            ${note}
        </div>` : ""}

        <div class="wrap pv-content">
            <div class="pv-overview">${overview}</div>
            <aside class="pv-aside">
                ${links ? `<div class="pv-links">${links}</div>` : ""}
                ${tools ? `<div class="pv-tools"><h3>Tools</h3><ul>${tools}</ul></div>` : ""}
            </aside>
        </div>

        ${projects.length > 1 ? `
        <button type="button" class="pv-next" id="pvNextTeaser">
            <span class="wrap pv-next-inner" style="display: block">
                <span class="meta" style="display: block">Next project</span>
                <span class="pv-next-title" style="display: block">${esc(next.title)}</span>
            </span>
        </button>` : ""}`;

    $("#pvCount").textContent =
        `${String(index + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;

    activeSlide = 0;
    bindSlideControls();
    $("#pvNextTeaser")?.addEventListener("click", () => stepProject(1));
}

function bindSlideControls() {
    $$("#pvBody [data-slide]").forEach((button) => {
        button.addEventListener("click", () => goToSlide(Number(button.dataset.slide)));
    });

    // Swipe between slides on touch screens
    const stage = $("#pvStage");
    if (!stage) return;

    let startX = null;

    stage.addEventListener("pointerdown", (e) => {
        startX = e.clientX;
    });

    stage.addEventListener("pointerup", (e) => {
        if (startX === null) return;
        const diff = e.clientX - startX;
        startX = null;
        if (Math.abs(diff) > 40) goToSlide(activeSlide + (diff < 0 ? 1 : -1));
    });

    stage.addEventListener("pointercancel", () => (startX = null));
}

function goToSlide(index) {
    const slides = $$("#pvBody .pv-slide");
    if (!slides.length) return;

    stopVideos();
    activeSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === activeSlide));
    $$("#pvBody [data-slide]").forEach((button) => {
        button.setAttribute("aria-current", String(Number(button.dataset.slide) === activeSlide));
    });
}

// Reloading the iframe is the simplest way to stop an embedded video
function stopVideos() {
    $$("#pvBody iframe").forEach((frame) => {
        const src = frame.src;
        frame.src = src;
    });
}

function openProject(project) {
    const view = $("#projectView");
    activeIndex = projects.indexOf(project);

    renderProjectView(project);
    view.scrollTop = 0;

    if (!view.open) {
        view.showModal();
        document.body.classList.add("no-scroll");
    }

    $("#pvClose").focus();

    if (typeof gtag === "function") {
        gtag("event", "view_project", { project_id: project.id });
    }
}

function closeView() {
    const view = $("#projectView");
    if (!view.open) return;

    stopVideos();
    view.close();
    document.body.classList.remove("no-scroll");
    activeIndex = -1;
}

// Prev/next swap the URL without adding history entries,
// so the browser Back button always returns to the page
function stepProject(direction) {
    if (activeIndex < 0) return;
    const nextProject = projects[(activeIndex + direction + projects.length) % projects.length];
    location.replace(`#${slugFor(nextProject)}`);
}

function requestClose() {
    if (openedFromPage) {
        history.back();
    } else {
        history.replaceState(null, "", location.pathname + location.search);
        closeView();
    }
}

function handleRoute() {
    const hash = location.hash.slice(1);
    const project = projects.find((p) => slugFor(p) === hash);

    if (project) openProject(project);
    else closeView();
}

function initProjectView() {
    const view = $("#projectView");

    // Any link to a project from the page counts as "opened from page"
    document.addEventListener("click", (e) => {
        const link = e.target.closest('a[href^="#project-"]');
        if (link && !view.open) openedFromPage = true;
    });

    $("#pvClose").addEventListener("click", requestClose);
    $("#pvPrev").addEventListener("click", () => stepProject(-1));
    $("#pvNext").addEventListener("click", () => stepProject(1));

    // Esc closes through the same path as the button
    view.addEventListener("cancel", (e) => {
        e.preventDefault();
        requestClose();
    });

    view.addEventListener("keydown", (e) => {
        if (e.target.closest("input, textarea")) return;
        if (e.key === "ArrowLeft") stepProject(-1);
        if (e.key === "ArrowRight") stepProject(1);
    });

    view.addEventListener("close", () => {
        document.body.classList.remove("no-scroll");
        openedFromPage = false;
    });

    $("#pvPrev").disabled = projects.length < 2;
    $("#pvNext").disabled = projects.length < 2;

    window.addEventListener("hashchange", handleRoute);
    handleRoute();
}


/* ---------- Scroll effects ---------- */

function initScrollEffects() {
    // Count up stats when they come into view
    const counters = $$("[data-count]");

    if (!reduceMotion.matches && "IntersectionObserver" in window) {
        const statObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                countUp(entry.target);
                statObserver.unobserve(entry.target);
            });
        }, { threshold: 0.6 });

        counters.forEach((el) => statObserver.observe(el));
    } else {
        counters.forEach((el) => (el.textContent = Number(el.dataset.count).toLocaleString()));
    }

    // Fade sections up once as they enter
    if (!reduceMotion.matches && "IntersectionObserver" in window) {
        const targets = $$(".featured, .more-work, .about .wrap, .toolkit, .stats-grid, .contact");

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            });
        }, { rootMargin: "0px 0px -10% 0px" });

        targets.forEach((el) => {
            el.classList.add("reveal");
            revealObserver.observe(el);
        });
    }

    // Underline the nav link for the section in view
    const navLinks = $$(".nav a");
    const sections = navLinks
        .map((link) => document.getElementById(link.getAttribute("href").slice(1)))
        .filter(Boolean);

    if ("IntersectionObserver" in window) {
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                navLinks.forEach((link) => {
                    link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
                });
            });
        }, { rootMargin: "-45% 0px -50% 0px" });

        sections.forEach((section) => navObserver.observe(section));
    }
}


/* ---------- Start ---------- */

document.addEventListener("DOMContentLoaded", () => {
    applyTheme();
    renderBasics();
    renderHero();
    renderFeatured();
    renderMoreWork();
    renderAbout();
    renderToolkit();
    renderStats();
    renderContact();
    initMobileMenu();
    initProjectView();
    initScrollEffects();
});
