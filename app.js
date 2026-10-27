document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector(".site-footer p");

  if (footer && !footer.textContent.includes(String(year))) {
    footer.textContent = `BPMN → ТЗ для аналитиков • ${year}`;
  }
});
