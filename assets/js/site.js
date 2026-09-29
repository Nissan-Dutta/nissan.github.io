(function () {
  /* ---- theme toggle: flips light/dark and remembers the choice ---- */
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");

  function current() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ---- email: assembled here so the address isn't sitting in the HTML ---- */
  document.querySelectorAll(".js-email").forEach(function (a) {
    var address = a.dataset.user + "@" + a.dataset.domain;
    a.href = "mailto:" + address;
    a.textContent = address;
    a.hidden = false;
  });
})();
