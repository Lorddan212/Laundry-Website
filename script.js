
document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const navbar = document.getElementById("mainNavbar");
  const themeToggle = document.getElementById("themeToggle");
  const backToTop = document.getElementById("backToTop");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const sections = document.querySelectorAll("section[id], header[id]");
  const revealElements = document.querySelectorAll(".reveal");
  const bookingForm = document.getElementById("bookingForm");
  const formSuccess = document.getElementById("formSuccess");
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const prevBtn = document.getElementById("prevTestimonial");
  const nextBtn = document.getElementById("nextTestimonial");
  const tiltCards = document.querySelectorAll(".tilt-card");
  const heroVisual = document.querySelector(".hero-visual");

  /* =========================================================
     THEME TOGGLE
  ========================================================= */
  const savedTheme = localStorage.getItem("luxwash-theme");
  if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);
  }

  themeToggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("luxwash-theme", newTheme);
  });

  /* =========================================================
     NAVBAR SCROLL + BACK TO TOP
  ========================================================= */
  const handleScrollEffects = () => {
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    if (window.scrollY > 500) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  };

  handleScrollEffects();
  window.addEventListener("scroll", handleScrollEffects);

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* =========================================================
     ACTIVE NAV LINK ON SCROLL
  ========================================================= */
  const activateNavOnScroll = () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      const href = link.getAttribute("href").replace("#", "");
      if (href === currentSection) {
        link.classList.add("active");
      }
    });
  };

  activateNavOnScroll();
  window.addEventListener("scroll", activateNavOnScroll);

  /* =========================================================
     COLLAPSE MOBILE NAV ON LINK CLICK
  ========================================================= */
  const navCollapse = document.getElementById("navMenu");
  const bsCollapse = navCollapse ? new bootstrap.Collapse(navCollapse, { toggle: false }) : null;

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992 && navCollapse.classList.contains("show")) {
        bsCollapse.hide();
      }
    });
  });

  /* =========================================================
     REVEAL ON SCROLL
  ========================================================= */
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
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  /* =========================================================
     TILT CARDS
  ========================================================= */
  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      if (window.innerWidth < 992) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

  /* =========================================================
     HERO PARALLAX
  ========================================================= */
  if (heroVisual) {
    window.addEventListener("mousemove", (e) => {
      if (window.innerWidth < 992) return;

      const x = (window.innerWidth / 2 - e.clientX) / 45;
      const y = (window.innerHeight / 2 - e.clientY) / 45;

      heroVisual.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  /* =========================================================
     TESTIMONIAL SLIDER
  ========================================================= */
  let testimonialIndex = 0;
  let testimonialInterval;

  const showTestimonial = (index) => {
    testimonialCards.forEach((card, i) => {
      card.classList.toggle("active", i === index);
    });
  };

  const nextTestimonial = () => {
    testimonialIndex = (testimonialIndex + 1) % testimonialCards.length;
    showTestimonial(testimonialIndex);
  };

  const prevTestimonial = () => {
    testimonialIndex = (testimonialIndex - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(testimonialIndex);
  };

  const startTestimonialAuto = () => {
    testimonialInterval = setInterval(nextTestimonial, 5000);
  };

  const resetTestimonialAuto = () => {
    clearInterval(testimonialInterval);
    startTestimonialAuto();
  };

  if (testimonialCards.length) {
    showTestimonial(testimonialIndex);
    startTestimonialAuto();

    nextBtn.addEventListener("click", () => {
      nextTestimonial();
      resetTestimonialAuto();
    });

    prevBtn.addEventListener("click", () => {
      prevTestimonial();
      resetTestimonialAuto();
    });
  }

  /* =========================================================
     FORM VALIDATION
  ========================================================= */
  const fields = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    phone: document.getElementById("phone"),
    service: document.getElementById("service"),
    address: document.getElementById("address"),
    date: document.getElementById("date"),
    message: document.getElementById("message"),
  };

  const getErrorElement = (input) => input.parentElement.querySelector(".error-text");

  const setError = (input, message) => {
    input.classList.add("input-invalid");
    getErrorElement(input).textContent = message;
  };

  const clearError = (input) => {
    input.classList.remove("input-invalid");
    getErrorElement(input).textContent = "";
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  };

  const validatePhone = (phone) => {
    return /^[0-9+\-\s()]{7,20}$/.test(phone.trim());
  };

  const validateDate = (dateValue) => {
    if (!dateValue) return false;
    const selectedDate = new Date(dateValue);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  };

  const validateForm = () => {
    let isValid = true;

    // Name
    if (!fields.name.value.trim()) {
      setError(fields.name, "Please enter your full name.");
      isValid = false;
    } else if (fields.name.value.trim().length < 3) {
      setError(fields.name, "Name must be at least 3 characters.");
      isValid = false;
    } else {
      clearError(fields.name);
    }

    // Email
    if (!fields.email.value.trim()) {
      setError(fields.email, "Please enter your email address.");
      isValid = false;
    } else if (!validateEmail(fields.email.value)) {
      setError(fields.email, "Please enter a valid email address.");
      isValid = false;
    } else {
      clearError(fields.email);
    }

    // Phone
    if (!fields.phone.value.trim()) {
      setError(fields.phone, "Please enter your phone number.");
      isValid = false;
    } else if (!validatePhone(fields.phone.value)) {
      setError(fields.phone, "Please enter a valid phone number.");
      isValid = false;
    } else {
      clearError(fields.phone);
    }

    // Service
    if (!fields.service.value.trim()) {
      setError(fields.service, "Please select a service.");
      isValid = false;
    } else {
      clearError(fields.service);
    }

    // Address
    if (!fields.address.value.trim()) {
      setError(fields.address, "Please enter your pickup address.");
      isValid = false;
    } else if (fields.address.value.trim().length < 6) {
      setError(fields.address, "Address looks too short.");
      isValid = false;
    } else {
      clearError(fields.address);
    }

    // Date
    if (!fields.date.value.trim()) {
      setError(fields.date, "Please choose a pickup date.");
      isValid = false;
    } else if (!validateDate(fields.date.value)) {
      setError(fields.date, "Pickup date cannot be in the past.");
      isValid = false;
    } else {
      clearError(fields.date);
    }

    // Message
    if (!fields.message.value.trim()) {
      setError(fields.message, "Please enter a short message.");
      isValid = false;
    } else if (fields.message.value.trim().length < 10) {
      setError(fields.message, "Message must be at least 10 characters.");
      isValid = false;
    } else {
      clearError(fields.message);
    }

    return isValid;
  };

  Object.values(fields).forEach((field) => {
    field.addEventListener("input", () => {
      if (field.classList.contains("input-invalid")) {
        validateForm();
      }
    });

    field.addEventListener("blur", () => {
      validateForm();
    });
  });

  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formSuccess.classList.remove("show");

    if (validateForm()) {
      formSuccess.classList.add("show");
      bookingForm.reset();

      Object.values(fields).forEach((field) => clearError(field));

      setTimeout(() => {
        formSuccess.classList.remove("show");
      }, 5000);
    }
  });

  /* =========================================================
     BUTTON MICRO INTERACTION
  ========================================================= */
  document.querySelectorAll(".btn-lux, .slider-btn, .footer-socials a").forEach((button) => {
    button.addEventListener("mousemove", (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      button.style.setProperty("--mx", `${x}px`);
      button.style.setProperty("--my", `${y}px`);
    });
  });

  /* =========================================================
     SET MIN DATE FOR BOOKING
  ========================================================= */
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  fields.date.min = `${yyyy}-${mm}-${dd}`;
});