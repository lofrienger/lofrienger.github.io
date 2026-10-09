(function () {
  "use strict";

  function initializeNews() {
    document.querySelectorAll(".news-scroll").forEach(function (region) {
      var list = region.querySelector("ul");
      if (!list) return;

      var visibleCount = parseInt(region.dataset.visibleItems, 10) || 7;
      var items = Array.from(list.children);

      function updateHeight() {
        if (items.length <= visibleCount) {
          region.style.setProperty("--news-visible-height", "none");
          var hint = region.nextElementSibling;
          if (hint && hint.classList.contains("news-scroll-hint")) hint.hidden = true;
          return;
        }

        // Measure complete entries so wrapped news is never cut off on mobile.
        var styles = window.getComputedStyle(region);
        var height = items[visibleCount - 1].getBoundingClientRect().bottom
          - list.getBoundingClientRect().top
          + parseFloat(styles.paddingTop)
          + parseFloat(styles.paddingBottom)
          + parseFloat(styles.borderTopWidth)
          + parseFloat(styles.borderBottomWidth);
        region.style.setProperty("--news-visible-height", Math.ceil(height) + "px");
      }

      updateHeight();
      if ("ResizeObserver" in window) {
        new ResizeObserver(updateHeight).observe(list);
      } else {
        window.addEventListener("resize", updateHeight);
      }
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(updateHeight);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeNews);
  } else {
    initializeNews();
  }
})();
