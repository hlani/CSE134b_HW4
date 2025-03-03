document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // ✅ Show the toggle switch when JS is enabled
    document.documentElement.classList.add("js-enabled");

    // ✅ Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark-mode") {
        body.classList.add("dark-mode");
    }

    // ✅ Toggle Theme on Click
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        const newTheme = body.classList.contains("dark-mode") ? "dark-mode" : "";

        // ✅ Save the selection in localStorage
        localStorage.setItem("theme", newTheme);
    });
});
