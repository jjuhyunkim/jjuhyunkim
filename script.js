const THEME_STORAGE_KEY = "jjuhyunkim-theme";

function applyTheme(theme) {
	document.body.classList.toggle("dark", theme === "dark");

	document.querySelectorAll(".profile-page, .cv-page").forEach(container => {
		container.classList.toggle("dark", theme === "dark");
	});

	document.querySelectorAll("[data-theme-toggle]").forEach(button => {
		button.setAttribute("aria-pressed", String(theme === "dark"));
	});
}

function getStoredTheme() {
	const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
	if (storedTheme === "dark" || storedTheme === "light") {
		return storedTheme;
	}

	return document.body.classList.contains("dark") ? "dark" : "light";
}

function toggleTheme() {
	const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
	window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
	applyTheme(nextTheme);
}

window.toggleTheme = toggleTheme;

document.addEventListener("DOMContentLoaded", () => {
	applyTheme(getStoredTheme());

	document.querySelectorAll("[data-theme-toggle]").forEach(button => {
		button.addEventListener("click", toggleTheme);
	});
});