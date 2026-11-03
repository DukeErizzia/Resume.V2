
// ===== Shared behaviour: WD-ResumeSite =====

document.addEventListener("DOMContentLoaded", () => {

    const body = document.body;

    body.classList.add("pageEnter");


    // Mobile menu

    const toggle = document.querySelector(".menuToggle");
    const nav = document.querySelector(".mainNav");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("isOpen");
        });
    }


    // Page-to-page glitch fade

    document.querySelectorAll(".mainNav a, a.navCard, a.btnCyber").forEach((link) => {

        link.addEventListener("click", (event) => {

            const href = link.getAttribute("href");

            if (
                !href ||
                href.startsWith("#") ||
                link.hasAttribute("download") ||
                link.target === "_blank"
            ) {
                return;
            }

            event.preventDefault();

            body.classList.remove("pageEnter");
            body.classList.add("pageLeave");

            setTimeout(() => {
                window.location.href = href;
            }, 280);

        });

    });


    // Scroll reveal

    const revealItems = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("isVisible");
                    observer.unobserve(entry.target);
                }

            });

        }, { threshold: 0.12 });

        revealItems.forEach((item) => observer.observe(item));

    } else {

        revealItems.forEach((item) => {
            item.classList.add("isVisible");
        });

    }


    // Parallax: elements with data-parallax="0.3" drift at that speed

    const parallaxItems = document.querySelectorAll("[data-parallax]");

    if (
        parallaxItems.length &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {

        let ticking = false;

        const update = () => {

            const y = window.scrollY;

            parallaxItems.forEach((el) => {

                const speed = parseFloat(el.dataset.parallax) || 0.2;

                el.style.transform = `translateY(${y * speed}px)`;

            });

            ticking = false;

        };

        window.addEventListener("scroll", () => {

            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }

        }, { passive: true });

    }

});
