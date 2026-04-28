document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const body = document.body;
  const navbar = document.getElementById("mainNavbar");
  const themeToggle = document.getElementById("themeToggle");
  const backToTop = document.getElementById("backToTop");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const revealElements = document.querySelectorAll(".reveal");
  const animatedSections = document.querySelectorAll(".section-space, .page-hero, .hero-shell, .site-footer");
  const bookingForm = document.getElementById("bookingForm");
  const year = document.getElementById("year");
  const heroPanel = document.querySelector(".hero-panel");
  const dateInput = document.getElementById("pickupDate");
  const orbs = document.querySelectorAll(".orb");

  const scrollProgress = document.createElement("div");
  scrollProgress.className = "scroll-progress";
  body.prepend(scrollProgress);

  window.requestAnimationFrame(() => {
    body.classList.add("page-ready");
  });

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = html.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", nextTheme);
      localStorage.setItem("danwash-theme", nextTheme);
    });
  }

  const handleScroll = () => {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 24);
    }

    if (backToTop) {
      backToTop.classList.toggle("show", window.scrollY > 420);
    }

    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
    scrollProgress.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;

    if (orbs.length) {
      orbs.forEach((orb, index) => {
        const depth = (index + 1) * 10;
        const offset = window.scrollY / (18 + depth);
        orb.style.setProperty("--scroll-shift", `${offset}px`);
      });
    }
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  const navCollapse = document.getElementById("siteNav");
  const collapseInstance =
    navCollapse && typeof bootstrap !== "undefined"
      ? new bootstrap.Collapse(navCollapse, { toggle: false })
      : null;

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992 && navCollapse && navCollapse.classList.contains("show") && collapseInstance) {
        collapseInstance.hide();
      }
    });
  });

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute("data-delay");
            if (delay) {
              entry.target.style.transitionDelay = `${delay}ms`;
            }
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    revealElements.forEach((element) => revealObserver.observe(element));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.12 }
    );

    animatedSections.forEach((section) => sectionObserver.observe(section));
  } else {
    revealElements.forEach((element) => element.classList.add("visible"));
    animatedSections.forEach((section) => section.classList.add("in-view"));
  }

  if (heroPanel) {
    window.addEventListener("mousemove", (event) => {
      if (window.innerWidth < 992) return;

      const offsetX = (window.innerWidth / 2 - event.clientX) / 70;
      const offsetY = (window.innerHeight / 2 - event.clientY) / 70;
      heroPanel.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });

    heroPanel.addEventListener("mouseleave", () => {
      heroPanel.style.transform = "translate(0, 0)";
    });
  }

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    dateInput.min = `${yyyy}-${mm}-${dd}`;
  }

  if (!bookingForm) {
    return;
  }

  const fields = {
    fullName: document.getElementById("fullName"),
    phone: document.getElementById("phone"),
    email: document.getElementById("email"),
    area: document.getElementById("area"),
    service: document.getElementById("service"),
    pickupDate: document.getElementById("pickupDate"),
    pickupWindow: document.getElementById("pickupWindow"),
    address: document.getElementById("address"),
    notes: document.getElementById("notes")
  };

  const successBox = document.getElementById("formSuccess");

  const getErrorElement = (input) => {
    const wrapper = input.closest(".field-wrap");
    return wrapper ? wrapper.querySelector(".error-text") : null;
  };

  const setError = (input, message) => {
    if (!input) return;
    input.classList.add("input-invalid");
    const errorEl = getErrorElement(input);
    if (errorEl) {
      errorEl.textContent = message;
    }
  };

  const clearError = (input) => {
    if (!input) return;
    input.classList.remove("input-invalid");
    const errorEl = getErrorElement(input);
    if (errorEl) {
      errorEl.textContent = "";
    }
  };

  const emailValid = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  const phoneValid = (value) => /^[0-9+\-\s()]{10,20}$/.test(value.trim());

  const validateForm = () => {
    let valid = true;

    if (!fields.fullName.value.trim() || fields.fullName.value.trim().length < 3) {
      setError(fields.fullName, "Enter your full name.");
      valid = false;
    } else {
      clearError(fields.fullName);
    }

    if (!fields.phone.value.trim() || !phoneValid(fields.phone.value)) {
      setError(fields.phone, "Enter a valid phone number.");
      valid = false;
    } else {
      clearError(fields.phone);
    }

    if (!fields.email.value.trim() || !emailValid(fields.email.value)) {
      setError(fields.email, "Enter a valid email address.");
      valid = false;
    } else {
      clearError(fields.email);
    }

    if (!fields.area.value) {
      setError(fields.area, "Choose your pickup area.");
      valid = false;
    } else {
      clearError(fields.area);
    }

    if (!fields.service.value) {
      setError(fields.service, "Select a service type.");
      valid = false;
    } else {
      clearError(fields.service);
    }

    if (!fields.pickupDate.value) {
      setError(fields.pickupDate, "Choose your preferred pickup date.");
      valid = false;
    } else {
      clearError(fields.pickupDate);
    }

    if (!fields.pickupWindow.value) {
      setError(fields.pickupWindow, "Select a pickup window.");
      valid = false;
    } else {
      clearError(fields.pickupWindow);
    }

    if (!fields.address.value.trim() || fields.address.value.trim().length < 8) {
      setError(fields.address, "Enter a clear pickup address.");
      valid = false;
    } else {
      clearError(fields.address);
    }

    if (!fields.notes.value.trim() || fields.notes.value.trim().length < 10) {
      setError(fields.notes, "Add a short note about the items or request.");
      valid = false;
    } else {
      clearError(fields.notes);
    }

    return valid;
  };

  Object.values(fields).forEach((field) => {
    if (!field) return;
    field.addEventListener("input", () => clearError(field));
    field.addEventListener("change", () => clearError(field));
  });

  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const submitButton = bookingForm.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending Request...";
    }

    window.setTimeout(() => {
      bookingForm.reset();

      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Send Pickup Request";
      }

      if (successBox) {
        successBox.classList.remove("d-none");
      }
    }, 900);
  });
});
