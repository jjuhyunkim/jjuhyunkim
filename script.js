const THEME_STORAGE_KEY = "jjuhyunkim-theme";

function hashString(value) {
	let hash = 0;
	const text = String(value || "tag");

	for (let index = 0; index < text.length; index += 1) {
		hash = text.charCodeAt(index) + ((hash << 5) - hash);
	}

	return Math.abs(hash);
}

function getTagColor(tag) {
	const hue = hashString(tag) % 360;
	const isDark = document.body.classList.contains("dark");

	if (isDark) {
		return {
			background: `hsla(${hue}, 52%, 24%, 1)`,
			border: `hsla(${hue}, 70%, 62%, 1)`,
			text: `hsla(${hue}, 85%, 86%, 1)`,
			highlightBackground: `hsla(${hue}, 58%, 30%, 1)`,
			highlightBorder: `hsla(${hue}, 74%, 70%, 1)`,
			edge: `hsla(${hue}, 72%, 70%, 0.34)`
		};
	}

	return {
		background: `hsla(${hue}, 78%, 90%, 1)`,
		border: `hsla(${hue}, 68%, 44%, 1)`,
		text: `hsla(${hue}, 74%, 28%, 1)`,
		highlightBackground: `hsla(${hue}, 80%, 84%, 1)`,
		highlightBorder: `hsla(${hue}, 72%, 38%, 1)`,
		edge: `hsla(${hue}, 68%, 42%, 0.26)`
	};
}

function normalizeTagLabel(raw) {
	return String(raw || "")
		.replace(/^#/, "")
		.trim()
		.toLowerCase();
}

function applyUnifiedTagColors() {
	document.querySelectorAll(".tag, .doc-tag, .chip").forEach(element => {
		const fromAttr = element.getAttribute("data-tag");
		const fromText = element.textContent;
		const tag = normalizeTagLabel(fromAttr || fromText);

		if (!tag) {
			return;
		}

		const palette = getTagColor(tag);
		element.style.backgroundColor = palette.background;
		element.style.color = palette.text;
		element.style.border = `1px solid ${palette.border}`;
	});
}

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
	applyUnifiedTagColors();
}

window.toggleTheme = toggleTheme;
window.getTagColor = getTagColor;

document.addEventListener("DOMContentLoaded", () => {
	applyTheme(getStoredTheme());
	applyUnifiedTagColors();

	document.querySelectorAll("[data-theme-toggle]").forEach(button => {
		button.addEventListener("click", toggleTheme);
	});
});