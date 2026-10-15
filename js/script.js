"use strict";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    navigation.classList.remove("is-open");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuButton.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMenu();
  });
}

document.querySelectorAll("[data-year]").forEach((year) => {
  year.textContent = String(new Date().getFullYear());
});

const backToTop = document.querySelector(".back-to-top");
if (backToTop) {
  const updateBackToTop = () => backToTop.classList.toggle("is-visible", window.scrollY > 550);
  window.addEventListener("scroll", updateBackToTop, { passive: true });
  updateBackToTop();
}

document.querySelectorAll("img").forEach((image) => {
  image.addEventListener("error", () => {
    image.parentElement?.classList.add("image-fallback");
    image.alt = image.alt ? `${image.alt} (illustrative image unavailable)` : "Illustrative image unavailable";
  }, { once: true });
});

document.querySelectorAll(".faq-list details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (!detail.open) return;
    document.querySelectorAll(".faq-list details[open]").forEach((otherDetail) => {
      if (otherDetail !== detail) otherDetail.open = false;
    });
  });
});

document.querySelectorAll("[data-phone-validation]").forEach((phoneInput) => {
  const validatePhone = () => {
    const value = phoneInput.value.trim();
    const isValid = value === "" || /^[0-9+(). -]{7,20}$/.test(value);
    phoneInput.setCustomValidity(isValid ? "" : "Enter a phone number using 7 to 20 digits or common phone symbols.");
  };

  phoneInput.addEventListener("input", validatePhone);
  phoneInput.addEventListener("blur", validatePhone);
});

document.querySelectorAll("[data-demo-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!(form instanceof HTMLFormElement)) return;

    const status = form.querySelector(".form-message");
    if (!form.reportValidity()) {
      if (status) status.textContent = "Please check the highlighted fields and try again.";
      return;
    }

    if (status) {
      status.textContent = "Thank you! Your sample message has been validated. This demonstration does not send or store your information.";
      status.classList.add("is-visible");
    }
    form.reset();
  });
});

const notices = [
  { date: "2026-09-12", category: "Academic", title: "A week of wondering: our science showcase", description: "Families are warmly invited to explore student projects, questions and experiments.", type: "Upcoming event" },
  { date: "2026-09-24", category: "Notices", title: "A note about the new school term", description: "A few helpful reminders for students and families as the new term begins.", type: "School circular" },
  { date: "2026-10-04", category: "Arts", title: "Save the date: a celebration of creativity", description: "An afternoon of student performances, artwork and community on campus.", type: "Upcoming event" },
  { date: "2026-10-18", category: "Sports", title: "Friendly inter-house sports meet", description: "A sample day of teamwork, movement and good-natured house spirit.", type: "Upcoming event" },
  { date: "2026-10-24", category: "Holidays", title: "Illustrative autumn break notice", description: "This fictional calendar note describes a short sample school break.", type: "Holiday notice" },
  { date: "2026-11-06", category: "Academic", title: "A thoughtful approach to term assessments", description: "A sample reminder about reflection, preparation and asking teachers for support.", type: "Exam notice" },
  { date: "2026-11-14", category: "Events", title: "Community morning: making room for ideas", description: "A sample get-together for student-led ideas, shared learning and conversation.", type: "Community event" },
  { date: "2026-11-21", category: "Sports", title: "Move together: campus activity day", description: "An illustrative activity day celebrating participation across ages and stages.", type: "Sports event" },
  { date: "2026-12-03", category: "Arts", title: "The winter arts gathering", description: "A fictional celebration of music, theatre, making and student creativity.", type: "Upcoming event" },
  { date: "2026-12-12", category: "Holidays", title: "End-of-term calendar reminder", description: "A sample notice to help families plan around an illustrative term-end date.", type: "School circular" },
  { date: "2027-01-09", category: "Academic", title: "Student project reflections are coming up", description: "A fictional invitation to share learning journeys, drafts and discoveries.", type: "Academic notice" },
  { date: "2027-01-22", category: "Events", title: "An afternoon of stories and discovery", description: "A sample community event celebrating reading, curiosity and student voice.", type: "Upcoming event" }
];

const eventList = document.querySelector("#event-list");
if (eventList) {
  const searchInput = document.querySelector("#event-search");
  const categorySelect = document.querySelector("#event-category");
  const resetButton = document.querySelector("#reset-filters");
  const loadMoreButton = document.querySelector("#load-more");
  const emptyState = document.querySelector("#empty-state");
  const resultsCount = document.querySelector("#results-count");
  const pageSize = 6;
  let visibleCount = pageSize;

  const filteredNotices = () => {
    const query = searchInput.value.trim().toLocaleLowerCase();
    const category = categorySelect.value;
    return notices.filter((notice) => {
      const matchesQuery = `${notice.title} ${notice.description} ${notice.category} ${notice.type}`.toLocaleLowerCase().includes(query);
      return matchesQuery && (category === "all" || notice.category === category);
    });
  };

  const formatDate = (isoDate) => new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric" }).format(new Date(`${isoDate}T12:00:00`));

  const renderNotices = () => {
    const results = filteredNotices();
    const visibleNotices = results.slice(0, visibleCount);
    eventList.replaceChildren();

    visibleNotices.forEach((notice) => {
      const card = document.createElement("article");
      card.className = "event-card";
      const top = document.createElement("div");
      top.className = "event-card__top";
      const date = document.createElement("time");
      date.className = "event-card__date";
      date.dateTime = notice.date;
      const dateValue = new Date(`${notice.date}T12:00:00`);
      date.innerHTML = `<strong>${dateValue.getDate()}</strong><span>${new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(dateValue)}</span>`;
      const category = document.createElement("span");
      category.className = "event-card__category";
      category.textContent = notice.category;
      top.append(date, category);

      const title = document.createElement("h3");
      title.textContent = notice.title;
      const description = document.createElement("p");
      description.textContent = notice.description;
      const type = document.createElement("span");
      type.className = "event-card__type";
      type.textContent = `${notice.type} · ${formatDate(notice.date)} · fictional sample`;
      card.append(top, title, description, type);
      eventList.append(card);
    });

    emptyState.hidden = results.length !== 0;
    loadMoreButton.hidden = results.length <= visibleCount;
    resultsCount.textContent = `Showing ${visibleNotices.length} of ${results.length} fictional ${results.length === 1 ? "notice" : "notices"}.`;
  };

  searchInput.addEventListener("input", () => {
    visibleCount = pageSize;
    renderNotices();
  });
  categorySelect.addEventListener("change", () => {
    visibleCount = pageSize;
    renderNotices();
  });
  resetButton.addEventListener("click", () => {
    searchInput.value = "";
    categorySelect.value = "all";
    visibleCount = pageSize;
    renderNotices();
    searchInput.focus();
  });
  loadMoreButton.addEventListener("click", () => {
    visibleCount += pageSize;
    renderNotices();
  });
  renderNotices();
}
