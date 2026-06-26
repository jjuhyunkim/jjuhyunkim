---
title: About Me
permalink: /about/
---

<link rel="stylesheet" href="{{ '/style.css' | relative_url }}">

<style>
:root {
	--bg: #f6f7fb;
	--card: #ffffff;
	--text: #111;
	--subtext: #666;
	--muted: #5b6472;
	--border: rgba(0,0,0,0.06);
	--shadow: 0 10px 24px rgba(0,0,0,0.06);
	--hero-shadow: 0 16px 36px rgba(0,0,0,0.08);
	--accent-soft: #f7f8fc;
	<style>
	.profile-page {
		--bg: #f6f7fb;
		--card: #ffffff;
		--card-soft: linear-gradient(180deg, #ffffff, #f7f8fc);
		--text: #111;
		--muted: #5b6472;
		--subtext: #666;
		--border: rgba(0, 0, 0, 0.06);
		--shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
		--shadow-soft: 0 10px 24px rgba(0, 0, 0, 0.06);
		--accent-soft: #eef2ff;
		--accent-line: #c7d2fe;
		max-width: 960px;
		margin: 40px auto;
		padding: 0 28px 56px;
		color: var(--text);
	}

	.profile-page.dark {
		--bg: #0f1117;
		--card: #161922;
		--card-soft: linear-gradient(180deg, #171b24, #12161d);
		--text: #e6e6e6;
		--muted: #b6beca;
		--subtext: #9aa3b2;
		--border: rgba(255, 255, 255, 0.08);
		--shadow: 0 16px 36px rgba(0, 0, 0, 0.32);
		--shadow-soft: 0 10px 24px rgba(0, 0, 0, 0.24);
		--accent-soft: #222a3a;
		--accent-line: #4f67a8;
	}

	.profile-page,
	.profile-page * {
		box-sizing: border-box;
	}

	.profile-page a {
		color: inherit;
	}

	.profile-shell {
		background: var(--bg);
		border-radius: 28px;
		padding: 8px;
	}

	.profile-hero,
	.profile-card {
		background: var(--card);
		border: 1px solid var(--border);
		box-shadow: var(--shadow-soft);
	}

	.profile-hero {
		background: var(--card-soft);
		border-radius: 26px;
		padding: 28px 30px 30px;
		margin-bottom: 22px;
		box-shadow: var(--shadow);
	}

	.profile-topbar {
		display: flex;
		justify-content: space-between;
		gap: 16px;
		align-items: flex-start;
		margin-bottom: 16px;
	}

	.profile-kicker {
		font-size: 12px;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--subtext);
		margin-bottom: 10px;
	}

	.profile-title {
		margin: 0 0 10px;
		font-size: 42px;
		line-height: 1.08;
		color: var(--text);
	}

	.profile-lead {
		margin: 0;
		max-width: 720px;
		font-size: 16px;
		line-height: 1.7;
		color: var(--muted);
	}

	.profile-dark-toggle {
		border: 1px solid var(--border);
		background: var(--card);
		color: var(--text);
		border-radius: 14px;
		padding: 12px 14px;
		cursor: pointer;
		font: inherit;
		box-shadow: var(--shadow-soft);
	}

	.profile-links {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 14px;
		margin-top: 24px;
	}

	.profile-link-card {
		display: block;
		padding: 18px 20px;
		border-radius: 18px;
		background: var(--card);
		text-decoration: none;
		border: 1px solid var(--border);
		box-shadow: var(--shadow-soft);
	}

	.profile-link-card strong {
		display: block;
		font-size: 18px;
		margin-bottom: 6px;
	}

	.profile-link-card span {
		font-size: 13px;
		line-height: 1.5;
		color: var(--subtext);
	}

	.profile-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.6fr) minmax(280px, 0.9fr);
		gap: 20px;
		align-items: start;
	}

	.profile-column {
		display: grid;
		gap: 20px;
	}

	.profile-card {
		border-radius: 22px;
		padding: 28px 28px 24px;
	}

	.profile-card.compact {
		padding: 24px;
	}

	.profile-card h2 {
		margin: 0 0 14px;
		font-size: 24px;
		color: var(--text);
	}

	.profile-card h3 {
		margin: 0 0 10px;
		font-size: 18px;
		color: var(--text);
	}

	.profile-card p,
	.profile-card li,
	.profile-card ol,
	.profile-card ul,
	.profile-card div {
		color: var(--muted);
	}

	.profile-card p,
	.profile-card ul,
	.profile-card ol {
		line-height: 1.8;
	}

	.profile-card ul,
	.profile-card ol {
		margin: 0;
		padding-left: 20px;
	}

	.profile-divider {
		padding-bottom: 14px;
		margin-bottom: 14px;
		border-bottom: 1px solid var(--border);
	}

	@media (max-width: 900px) {
		.profile-page {
			padding: 0 16px 40px;
		}

		.profile-grid {
			grid-template-columns: 1fr;
		}

		.profile-topbar {
			flex-wrap: wrap;
		}

		.profile-title {
			font-size: 34px;
		}
	}
	</style>

	<div class="profile-page" id="about-page">
		<div class="profile-shell">
			<div class="profile-hero">
				<div class="profile-topbar">
					<div>
						<div class="profile-kicker">Academic Profile</div>
						<h1 class="profile-title">About Me</h1>
						<p class="profile-lead">Research profile, selected publications, and academic background. This page is structured like a short academic profile, with publications and research direction placed first.</p>
					</div>
					<button class="profile-dark-toggle theme-toggle" type="button" data-theme-toggle>🌓</button>
				</div>

				<div class="profile-links">
					<a href="{{ '/' | relative_url }}" class="profile-link-card">
						<strong>Home</strong>
						<span>Back to the main page with recent posts and notes</span>
					</a>
					<a href="{{ '/about/cv-template/' | relative_url }}" class="profile-link-card">
						<strong>CV</strong>
						<span>Open the full academic CV and publication-oriented template</span>
					</a>
				</div>
			</div>

			<div class="profile-grid">
				<div class="profile-column">
					<section class="profile-card">
						<h2>Selected Publications</h2>
						<ol>
							<li>Author, Author, Your Name. Title. Journal. Year.</li>
							<li>Author, Your Name. Title. Journal. Year.</li>
							<li>Author, Author, Your Name. Title. Journal. Year.</li>
						</ol>
					</section>

					<section class="profile-card">
						<h2>Research Summary</h2>
						<p>Write a short academic summary here. Focus on the biological questions you study, the data types you use, and the computational strengths that define your work.</p>
					</section>

					<section class="profile-card">
						<h2>Current Academic Focus</h2>
						<p>Write a short paragraph here describing your current role, what questions you are working on, and what kinds of data or methods you use most often.</p>
						<h3>Ongoing and Recent Projects</h3>
						<ul>
							<li>Project title: one-line summary with biological question and dataset</li>
							<li>Project title: one-line summary with methods and main contribution</li>
							<li>Project title: one-line summary with result or expected outcome</li>
						</ul>
					</section>

					<section class="profile-card">
						<h2>Academic Appointments and Experience</h2>
						<div class="profile-divider">
							<h3>Position / Role</h3>
							<ul>
								<li>Institution: Add institution name</li>
								<li>Period: YYYY.MM - Present</li>
								<li>Focus: Add 1-2 lines on the core work</li>
								<li>Key skills: sequencing analysis, workflow development, statistics, visualization</li>
							</ul>
						</div>
						<div>
							<h3>Previous Position / Role</h3>
							<ul>
								<li>Institution: Add institution name</li>
								<li>Period: YYYY.MM - YYYY.MM</li>
								<li>Focus: Add 1-2 lines on the main projects or responsibilities</li>
								<li>Key skills: add methods, tools, or domains</li>
							</ul>
						</div>
					</section>
				</div>

				<div class="profile-column">
					<section class="profile-card compact">
						<h2>Research Interests</h2>
						<ul>
							<li>Cancer genomics</li>
							<li>Epigenomics and methylation analysis</li>
							<li>Long-read sequencing and genome assembly</li>
							<li>Bioinformatics pipeline development</li>
						</ul>
					</section>

					<section class="profile-card compact">
						<h2>Education</h2>
						<ul>
							<li>Degree, Department, University, Year</li>
							<li>Degree, Department, University, Year</li>
						</ul>
					</section>

					<section class="profile-card compact">
						<h2>Presentations and Visibility</h2>
						<ul>
							<li>Invited talk or seminar, host institution, year</li>
							<li>Conference presentation, meeting name, year</li>
							<li>Poster presentation, meeting name, year</li>
						</ul>
					</section>

					<section class="profile-card compact">
						<h2>Links</h2>
						<ul>
							<li>Email: your-email@example.com</li>
							<li>GitHub: https://github.com/your-id</li>
							<li>Google Scholar: add-your-link</li>
							<li>ORCID: add-your-link</li>
						</ul>
					</section>
				</div>
			</div>
		</div>
	</div>

	<script src="{{ '/script.js' | relative_url }}"></script>
	margin-bottom: 6px;
}

.cta-card span {
	font-size: 13px;
	line-height: 1.5;
	color: var(--subtext);
}

.about-grid {
	grid-template-columns: minmax(0, 1.6fr) minmax(280px, 0.9fr);
	align-items: start;
}

.about-column {
	display: grid;
	gap: 20px;
}

.about-card {
	border-radius: 22px;
	padding: 28px 28px 24px;
}

.about-card.compact {
	padding: 24px;
}

.about-card h2,
.about-card h3 {
	color: var(--text);
}

.about-card h2 {
	margin: 0 0 14px;
	font-size: 24px;
}

.about-card.compact h2 {
	font-size: 22px;
	margin-bottom: 12px;
}

.about-card h3 {
	margin: 0 0 10px;
	font-size: 18px;
}

.about-list,
.about-card p,
.about-card ol {
	margin: 0;
	line-height: 1.8;
}

.about-list,
.about-card ol {
	padding-left: 20px;
}

.about-card ol {
	padding-left: 22px;
}

.split-block {
	padding-bottom: 14px;
	margin-bottom: 14px;
	border-bottom: 1px solid var(--border);
}

@media (max-width: 900px) {
	.about-grid {
		grid-template-columns: 1fr;
	}

	.about-page {
		padding: 0 18px 42px;
	}

	.hero-card,
	.about-card,
	.about-card.compact {
		padding: 22px;
	}

	.hero-title {
		font-size: 34px;
	}
}
</style>

<div class="about-page">
	<div class="about-topbar">
		<button class="theme-toggle" type="button" onclick="document.body.classList.toggle('dark')">🌓</button>
	</div>

	<div class="hero-card">
		<div class="eyebrow">Academic Profile</div>
		<h1 class="hero-title">About Me</h1>
		<p class="hero-copy">Research profile, selected publications, and academic background. This page is structured like a short academic profile, with publications and research direction placed first.</p>

		<div class="cta-grid">
			<a href="{{ '/' | relative_url }}" class="cta-card">
				<strong>Home</strong>
				<span>Back to the main page with recent posts and notes</span>
			</a>
			<a href="{{ '/about/cv-template/' | relative_url }}" class="cta-card">
				<strong>CV</strong>
				<span>Open the full academic CV and publication-oriented template</span>
			</a>
		</div>
	</div>

	<div class="about-grid">
		<div class="about-column">
			<section class="about-card">
				<h2>Selected Publications</h2>
				<ol class="body-copy">
					<li>Author, Author, Your Name. Title. Journal. Year.</li>
					<li>Author, Your Name. Title. Journal. Year.</li>
					<li>Author, Author, Your Name. Title. Journal. Year.</li>
				</ol>
			</section>

			<section class="about-card">
				<h2>Research Summary</h2>
				<p class="body-copy">Write a short academic summary here. Focus on the biological questions you study, the data types you use, and the computational strengths that define your work.</p>
			</section>

			<section class="about-card">
				<h2>Current Academic Focus</h2>
				<p class="body-copy" style="margin:0 0 18px;">Write a short paragraph here describing your current role, what questions you are working on, and what kinds of data or methods you use most often.</p>
				<h3>Ongoing and Recent Projects</h3>
				<ul class="about-list">
					<li>Project title: one-line summary with biological question and dataset</li>
					<li>Project title: one-line summary with methods and main contribution</li>
					<li>Project title: one-line summary with result or expected outcome</li>
				</ul>
			</section>

			<section class="about-card">
				<h2>Academic Appointments and Experience</h2>
				<div class="split-block">
					<h3>Position / Role</h3>
					<ul class="about-list">
						<li>Institution: Add institution name</li>
						<li>Period: YYYY.MM - Present</li>
						<li>Focus: Add 1-2 lines on the core work</li>
						<li>Key skills: sequencing analysis, workflow development, statistics, visualization</li>
					</ul>
				</div>
				<div>
					<h3>Previous Position / Role</h3>
					<ul class="about-list">
						<li>Institution: Add institution name</li>
						<li>Period: YYYY.MM - YYYY.MM</li>
						<li>Focus: Add 1-2 lines on the main projects or responsibilities</li>
						<li>Key skills: add methods, tools, or domains</li>
					</ul>
				</div>
			</section>
		</div>

		<div class="about-column">
			<section class="about-card compact">
				<h2>Research Interests</h2>
				<ul class="about-list">
					<li>Cancer genomics</li>
					<li>Epigenomics and methylation analysis</li>
					<li>Long-read sequencing and genome assembly</li>
					<li>Bioinformatics pipeline development</li>
				</ul>
			</section>

			<section class="about-card compact">
				<h2>Education</h2>
				<ul class="about-list">
					<li>Degree, Department, University, Year</li>
					<li>Degree, Department, University, Year</li>
				</ul>
			</section>

			<section class="about-card compact">
				<h2>Presentations and Visibility</h2>
				<ul class="about-list">
					<li>Invited talk or seminar, host institution, year</li>
					<li>Conference presentation, meeting name, year</li>
					<li>Poster presentation, meeting name, year</li>
				</ul>
			</section>

			<section class="about-card compact">
				<h2>Links</h2>
				<ul class="about-list">
					<li>Email: your-email@example.com</li>
					<li>GitHub: https://github.com/your-id</li>
					<li>Google Scholar: add-your-link</li>
					<li>ORCID: add-your-link</li>
				</ul>
			</section>
		</div>
	</div>
</div>