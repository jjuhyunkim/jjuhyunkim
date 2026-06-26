---
title: CV Template
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
	--accent-panel: #f8faff;
	--accent-line: #c7d2fe;
}

body.dark {
	--bg: #0f1117;
	--card: #161922;
	--text: #e6e6e6;
	--subtext: #a4acb9;
	--muted: #b6bfcb;
	--border: rgba(255,255,255,0.08);
	--shadow: 0 10px 24px rgba(0,0,0,0.28);
	--hero-shadow: 0 16px 36px rgba(0,0,0,0.34);
	--accent-soft: #1a2030;
	--accent-panel: #171d2a;
	layout: cv_page
	description: Use this page as a polished template for an academic or research CV.
	--accent-line: #5b6bdc;

	<div class="cv-grid">
		<div class="cv-column side">
			<section class="cv-card">
				<h2>Basic Information</h2>
				<div><strong>Name</strong><br>Your name</div>
				<div><strong>Current position</strong><br>Your current title</div>
				<div><strong>Affiliation</strong><br>Institution / lab / department</div>
				<div><strong>Email</strong><br>your-email@example.com</div>
				<div><strong>Website</strong><br>your-website</div>
				<div><strong>GitHub</strong><br>github.com/your-id</div>
				<div><strong>Google Scholar</strong><br>scholar profile link</div>
				<div><strong>ORCID</strong><br>ORCID link</div>
				<div><strong>Location</strong><br>City, Country</div>
			</section>

			<section class="cv-card">
				<h2>Technical Skills</h2>
				<strong>Programming</strong>
				<ul>
					<li>Python</li>
					<li>R</li>
					<li>Bash</li>
					<li>SQL</li>
				</ul>
				<strong>Bioinformatics / Data Analysis</strong>
				<ul>
					<li>Genome assembly</li>
					<li>Variant analysis</li>
					<li>Methylation analysis</li>
					<li>RNA-seq / single-cell analysis</li>
					<li>Workflow management</li>
				</ul>
				<strong>Tools and Platforms</strong>
				<ul>
					<li>Git / GitHub</li>
					<li>Linux / HPC</li>
					<li>Docker / Singularity</li>
					<li>Nextflow / Snakemake</li>
					<li>Cloud or cluster environment</li>
				</ul>
			</section>
		</div>

		<div class="cv-column">
			<section class="cv-card">
				<h2>Research Summary</h2>
				<p>Write a 3-5 sentence overview of your research background, main interests, and technical strengths.</p>
				<div class="cv-quote">Example: I am a bioinformatics researcher working on cancer genomics, epigenomics, and long-read sequencing analysis. My work focuses on extracting biological insight from large-scale sequencing data and building reproducible computational workflows. I am especially interested in structural variation, methylation profiling, and assembly-based genome analysis.</div>
			</section>

			<section class="cv-card">
				<h2>Selected Publications</h2>
				<p>Put your strongest or most representative papers first. For an academic CV, this section usually carries more weight than a general skills summary.</p>
				<h3>First-author or co-first-author publications</h3>
				<ol>
					<li>Your Name, Author, Author. Title. Journal. Year.</li>
					<li>Your Name, Author, Author. Title. Journal. Year.</li>
				</ol>
				<h3>Co-author publications</h3>
				<ol>
					<li>Author, Your Name, Author. Title. Journal. Year.</li>
					<li>Author, Your Name, Author. Title. Journal. Year.</li>
				</ol>
				<h3>Preprints and manuscripts in preparation</h3>
				<ol>
					<li>Authors. Title. bioRxiv / submitted / in preparation. Year.</li>
				</ol>
			</section>

			<section class="cv-card">
				<h2>Education</h2>
				<div class="cv-divider">
					<strong>Degree / Program</strong><br>
					Institution: University name<br>
					Department / Program: Department or graduate program<br>
					Period: YYYY.MM - YYYY.MM<br>
					Advisor: Advisor name<br>
					Thesis / Dissertation: Thesis or dissertation title
				</div>
				<div>
					<strong>Degree / Program</strong><br>
					Institution: University name<br>
					Department / Program: Department or graduate program<br>
					Period: YYYY.MM - YYYY.MM<br>
					Advisor: Advisor name<br>
					Thesis / Dissertation: Thesis or dissertation title
				</div>
			</section>

			<section class="cv-card">
				<h2>Academic and Professional Appointments</h2>
				<div class="cv-divider">
					<strong>Job title</strong><br>
					Institution or company: Name of institution or company<br>
					Period: YYYY.MM - YYYY.MM<br>
					Team / Lab: Team or lab name
					<ul>
						<li>Responsibility or scope of work</li>
						<li>Outcome, contribution, or deliverable</li>
					</ul>
				</div>
				<div>
					<strong>Job title</strong><br>
					Institution or company: Name of institution or company<br>
					Period: YYYY.MM - YYYY.MM<br>
					Team / Lab: Team or lab name
					<ul>
						<li>Responsibility or scope of work</li>
						<li>Outcome, contribution, or deliverable</li>
					</ul>
				</div>
			</section>

			<section class="cv-card">
				<h2>Research Experience</h2>
				<div>
					<strong>Project or topic</strong><br>
					Period: YYYY.MM - YYYY.MM<br>
					Biological question: What problem did this project address?<br>
					Data types: WGS, RNA-seq, methylation, Hi-C, long-read, etc.<br>
					Methods: Assembly, alignment, statistical modeling, workflow development<br>
					Main outcome: One or two lines describing the result
				</div>
				<div>
					<strong>Project or topic</strong><br>
					Period: YYYY.MM - YYYY.MM<br>
					Biological question: What problem did this project address?<br>
					Data types: WGS, RNA-seq, methylation, Hi-C, long-read, etc.<br>
					Methods: Assembly, alignment, statistical modeling, workflow development<br>
					Main outcome: One or two lines describing the result
				</div>
			</section>

			<section class="cv-card">
				<h2>Presentations, Awards, Grants, and Service</h2>
				<div class="cv-divider">
					<strong>Presentations</strong>
					<ul>
						<li>Invited talk, host institution or seminar series, location, year</li>
						<li>Conference talk, meeting name, location, year</li>
						<li>Poster, meeting name, location, year</li>
					</ul>
				</div>
				<div class="cv-divider">
					<strong>Awards and Honors</strong>
					<ul>
						<li>Award name, organization, year</li>
						<li>Fellowship name, organization, year</li>
					</ul>
				</div>
				<div class="cv-divider">
					<strong>Grants or Funded Projects</strong>
					<ul>
						<li>Project title, role, funder, amount if relevant, year</li>
						<li>Project title, role, funder, year</li>
					</ul>
				</div>
				<div>
					<strong>Teaching, Mentoring, and Service</strong>
					<ul>
						<li>Course or workshop, role, year</li>
						<li>Student mentoring, role, year</li>
						<li>Reviewer or committee role, organization, year</li>
						<li>Community contribution, year</li>
					</ul>
				</div>
			</section>

			<section class="cv-card">
				<h2>References</h2>
				<div class="cv-divider">
					<strong>Reference name</strong><br>
					Position: Professor / PI / Senior Scientist<br>
					Institution: Institution name<br>
					Email: contact email<br>
					Relationship: Advisor / collaborator / supervisor
				</div>
				<div>
					<strong>Reference name</strong><br>
					Position: Professor / PI / Senior Scientist<br>
					Institution: Institution name<br>
					Email: contact email<br>
					Relationship: Advisor / collaborator / supervisor
				</div>
			</section>
		</div>
	</div>
	.cv-page,
	.cv-page * {
		box-sizing: border-box;
	}

	.cv-page a {
		color: inherit;
	}

	.cv-shell {
		background: var(--bg);
		border-radius: 28px;
		padding: 8px;
	}

	.cv-hero,
	.cv-card,
	.cv-reference-card {
		background: var(--card);
		border: 1px solid var(--border);
		box-shadow: var(--shadow-soft);
	}

	.cv-hero {
		background: var(--card-soft);
		border-radius: 26px;
		padding: 30px 32px;
		margin-bottom: 22px;
		box-shadow: var(--shadow);
	}

	.cv-topbar {
		display: flex;
		justify-content: space-between;
		gap: 16px;
		align-items: flex-start;
		flex-wrap: wrap;
	}

	.cv-kicker {
		font-size: 12px;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--subtext);
		margin-bottom: 10px;
	}

	.cv-title {
		margin: 0 0 10px;
		font-size: 42px;
		line-height: 1.08;
		color: var(--text);
	}

	.cv-lead {
		margin: 0;
		max-width: 720px;
		font-size: 16px;
		line-height: 1.7;
		color: var(--muted);
	}

	.cv-dark-toggle,
	.cv-back-link {
		display: inline-block;
		padding: 14px 18px;
		border-radius: 16px;
		background: var(--card);
		color: var(--text);
		text-decoration: none;
		border: 1px solid var(--border);
		box-shadow: var(--shadow-soft);
		font: inherit;
		font-weight: 600;
	}

	.cv-dark-toggle {
		cursor: pointer;
	}

	.cv-actions {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
	}

	.cv-grid {
		display: grid;
		grid-template-columns: minmax(280px, 0.9fr) minmax(0, 1.7fr);
		gap: 20px;
		align-items: start;
	}

	.cv-side,
	.cv-main {
		display: grid;
		gap: 20px;
	}

	.cv-side {
		position: sticky;
		top: 24px;
	}

	.cv-card {
		border-radius: 22px;
		padding: 28px 28px 24px;
	}

	.cv-card.compact {
		padding: 24px;
	}

	.cv-card h2 {
		margin: 0 0 14px;
		font-size: 24px;
		color: var(--text);
	}

	.cv-card h3 {
		margin: 0 0 10px;
		font-size: 18px;
		color: var(--text);
	}

	.cv-card p,
	.cv-card li,
	.cv-card ul,
	.cv-card ol,
	.cv-card div {
		color: var(--muted);
	}

	.cv-card p,
	.cv-card ul,
	.cv-card ol,
	.cv-card div {
		line-height: 1.8;
	}

	.cv-card ul,
	.cv-card ol {
		margin: 8px 0 0;
		padding-left: 20px;
	}

	.cv-quote {
		padding: 16px 18px;
		border-left: 4px solid var(--accent-line);
		background: var(--accent-soft);
		border-radius: 0 14px 14px 0;
	}

	.cv-divider {
		padding-bottom: 14px;
		margin-bottom: 14px;
		border-bottom: 1px solid var(--border);
	}

	.cv-reference-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 18px;
	}

	.cv-reference-card {
		padding: 16px 18px;
		border-radius: 16px;
		background: var(--accent-soft);
	}

	@media (max-width: 920px) {
		.cv-page {
			padding: 0 16px 40px;
		}

		.cv-grid {
			grid-template-columns: 1fr;
		}

		.cv-side {
			position: static;
		}

		.cv-title {
			font-size: 34px;
		}
	}
	</style>

	<div class="cv-page" id="cv-page">
		<div class="cv-shell">
			<div class="cv-hero">
				<div class="cv-topbar">
					<div>
						<div class="cv-kicker">Curriculum Vitae</div>
						<h1 class="cv-title">CV Template</h1>
						<p class="cv-lead">Use this page as a polished template for an academic or research CV. Replace the placeholders with your own information and duplicate sections when needed.</p>
					</div>
					<div class="cv-actions">
						<a href="{{ '/about/' | relative_url }}" class="cv-back-link">Back to About</a>
						  <button class="cv-dark-toggle theme-toggle" type="button" data-theme-toggle>🌓</button>
					</div>
				</div>
			</div>

			<div class="cv-grid">
				<div class="cv-side">
					<section class="cv-card compact">
						<h2>Basic Information</h2>
						<div><strong>Name</strong><br>Your name</div>
						<div><strong>Current position</strong><br>Your current title</div>
						<div><strong>Affiliation</strong><br>Institution / lab / department</div>
						<div><strong>Email</strong><br>your-email@example.com</div>
						<div><strong>Website</strong><br>your-website</div>
						<div><strong>GitHub</strong><br>github.com/your-id</div>
						<div><strong>Google Scholar</strong><br>scholar profile link</div>
						<div><strong>ORCID</strong><br>ORCID link</div>
						<div><strong>Location</strong><br>City, Country</div>
					</section>

					<section class="cv-card compact">
						<h2>Technical Skills</h2>
						<strong>Programming</strong>
						<ul>
							<li>Python</li>
							<li>R</li>
							<li>Bash</li>
							<li>SQL</li>
						</ul>
						<strong>Bioinformatics / Data Analysis</strong>
						<ul>
							<li>Genome assembly</li>
							<li>Variant analysis</li>
							<li>Methylation analysis</li>
							<li>RNA-seq / single-cell analysis</li>
							<li>Workflow management</li>
						</ul>
						<strong>Tools and Platforms</strong>
						<ul>
							<li>Git / GitHub</li>
							<li>Linux / HPC</li>
							<li>Docker / Singularity</li>
							<li>Nextflow / Snakemake</li>
							<li>Cloud or cluster environment</li>
						</ul>
					</section>
				</div>

				<div class="cv-main">
					<section class="cv-card">
						<h2>Research Summary</h2>
						<p>Write a 3-5 sentence overview of your research background, main interests, and technical strengths.</p>
						<div class="cv-quote">Example: I am a bioinformatics researcher working on cancer genomics, epigenomics, and long-read sequencing analysis. My work focuses on extracting biological insight from large-scale sequencing data and building reproducible computational workflows. I am especially interested in structural variation, methylation profiling, and assembly-based genome analysis.</div>
					</section>

					<section class="cv-card">
						<h2>Selected Publications</h2>
						<p>Put your strongest or most representative papers first. For an academic CV, this section usually carries more weight than a general skills summary.</p>
						<h3>First-author or co-first-author publications</h3>
						<ol>
							<li>Your Name, Author, Author. Title. Journal. Year.</li>
							<li>Your Name, Author, Author. Title. Journal. Year.</li>
						</ol>
						<h3>Co-author publications</h3>
						<ol>
							<li>Author, Your Name, Author. Title. Journal. Year.</li>
							<li>Author, Your Name, Author. Title. Journal. Year.</li>
						</ol>
						<h3>Preprints and manuscripts in preparation</h3>
						<ol>
							<li>Authors. Title. bioRxiv / submitted / in preparation. Year.</li>
						</ol>
					</section>

					<section class="cv-card">
						<h2>Education</h2>
						<div class="cv-divider">
							<strong>Degree / Program</strong><br>
							Institution: University name<br>
							Department / Program: Department or graduate program<br>
							Period: YYYY.MM - YYYY.MM<br>
							Advisor: Advisor name<br>
							Thesis / Dissertation: Thesis or dissertation title
						</div>
						<div>
							<strong>Degree / Program</strong><br>
							Institution: University name<br>
							Department / Program: Department or graduate program<br>
							Period: YYYY.MM - YYYY.MM<br>
							Advisor: Advisor name<br>
							Thesis / Dissertation: Thesis or dissertation title
						</div>
					</section>

					<section class="cv-card">
						<h2>Academic and Professional Appointments</h2>
						<div class="cv-divider">
							<strong>Job title</strong><br>
							Institution or company: Name of institution or company<br>
							Period: YYYY.MM - YYYY.MM<br>
							Team / Lab: Team or lab name
							<ul>
								<li>Responsibility or scope of work</li>
								<li>Outcome, contribution, or deliverable</li>
							</ul>
						</div>
						<div>
							<strong>Job title</strong><br>
							Institution or company: Name of institution or company<br>
							Period: YYYY.MM - YYYY.MM<br>
							Team / Lab: Team or lab name
							<ul>
								<li>Responsibility or scope of work</li>
								<li>Outcome, contribution, or deliverable</li>
							</ul>
						</div>
					</section>

					<section class="cv-card">
						<h2>Research Experience</h2>
						<div>
							<strong>Project or topic</strong><br>
							Period: YYYY.MM - YYYY.MM<br>
							Biological question: What problem did this project address?<br>
							Data types: WGS, RNA-seq, methylation, Hi-C, long-read, etc.<br>
							Methods: Assembly, alignment, statistical modeling, workflow development<br>
							Main outcome: One or two lines describing the result
						</div>
						<div>
							<strong>Project or topic</strong><br>
							Period: YYYY.MM - YYYY.MM<br>
							Biological question: What problem did this project address?<br>
							Data types: WGS, RNA-seq, methylation, Hi-C, long-read, etc.<br>
							Methods: Assembly, alignment, statistical modeling, workflow development<br>
							Main outcome: One or two lines describing the result
						</div>
					</section>

					<section class="cv-card">
						<h2>Presentations, Awards, Grants, and Service</h2>
						<div class="cv-reference-grid">
							<div>
								<strong>Presentations</strong>
								<ul>
									<li>Invited talk, host institution or seminar series, location, year</li>
									<li>Conference talk, meeting name, location, year</li>
									<li>Poster, meeting name, location, year</li>
								</ul>
							</div>
							<div>
								<strong>Awards and Honors</strong>
								<ul>
									<li>Award name, organization, year</li>
									<li>Fellowship name, organization, year</li>
								</ul>
							</div>
							<div>
								<strong>Grants or Funded Projects</strong>
								<ul>
									<li>Project title, role, funder, amount if relevant, year</li>
									<li>Project title, role, funder, year</li>
								</ul>
							</div>
							<div>
								<strong>Teaching, Mentoring, and Service</strong>
								<ul>
									<li>Course or workshop, role, year</li>
									<li>Student mentoring, role, year</li>
									<li>Reviewer or committee role, organization, year</li>
									<li>Community contribution, year</li>
								</ul>
							</div>
						</div>
					</section>

					<section class="cv-card">
						<h2>References</h2>
						<div class="cv-reference-grid">
							<div class="cv-reference-card">
								<strong>Reference name</strong><br>
								Position: Professor / PI / Senior Scientist<br>
								Institution: Institution name<br>
								Email: contact email<br>
								Relationship: Advisor / collaborator / supervisor
							</div>
							<div class="cv-reference-card">
								<strong>Reference name</strong><br>
								Position: Professor / PI / Senior Scientist<br>
								Institution: Institution name<br>
								Email: contact email<br>
								Relationship: Advisor / collaborator / supervisor
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	</div>

	<script src="{{ '/script.js' | relative_url }}"></script>

		<div class="cv-main">
			<section class="cv-card">
				<h2>Research Summary</h2>
				<p class="cv-copy" style="margin-bottom:12px;">Write a 3-5 sentence overview of your research background, main interests, and technical strengths.</p>
				<div class="callout">Example: I am a bioinformatics researcher working on cancer genomics, epigenomics, and long-read sequencing analysis. My work focuses on extracting biological insight from large-scale sequencing data and building reproducible computational workflows. I am especially interested in structural variation, methylation profiling, and assembly-based genome analysis.</div>
			</section>

			<section class="cv-card">
				<h2>Selected Publications</h2>
				<p class="cv-copy" style="margin-bottom:14px;">Put your strongest or most representative papers first. For an academic CV, this section usually carries more weight than a general skills summary.</p>
				<h3>First-author or co-first-author publications</h3>
				<ol class="cv-ol">
					<li>Your Name, Author, Author. Title. Journal. Year.</li>
					<li>Your Name, Author, Author. Title. Journal. Year.</li>
				</ol>
				<h3 style="margin-top:16px;">Co-author publications</h3>
				<ol class="cv-ol">
					<li>Author, Your Name, Author. Title. Journal. Year.</li>
					<li>Author, Your Name, Author. Title. Journal. Year.</li>
				</ol>
				<h3 style="margin-top:16px;">Preprints and manuscripts in preparation</h3>
				<ol class="cv-ol">
					<li>Authors. Title. bioRxiv / submitted / in preparation. Year.</li>
				</ol>
			</section>

			<section class="cv-card">
				<h2>Education</h2>
				<div class="split-block cv-copy">
					<strong style="display:block;font-size:17px;margin-bottom:4px;">Degree / Program</strong>
					Institution: University name<br>
					Department / Program: Department or graduate program<br>
					Period: YYYY.MM - YYYY.MM<br>
					Advisor: Advisor name<br>
					Thesis / Dissertation: Thesis or dissertation title
				</div>
				<div class="cv-copy">
					<strong style="display:block;font-size:17px;margin-bottom:4px;">Degree / Program</strong>
					Institution: University name<br>
					Department / Program: Department or graduate program<br>
					Period: YYYY.MM - YYYY.MM<br>
					Advisor: Advisor name<br>
					Thesis / Dissertation: Thesis or dissertation title
				</div>
			</section>

			<section class="cv-card">
				<h2>Academic and Professional Appointments</h2>
				<div class="split-block cv-copy">
					<strong style="display:block;font-size:17px;margin-bottom:4px;">Job title</strong>
					Institution or company: Name of institution or company<br>
					Period: YYYY.MM - YYYY.MM<br>
					Team / Lab: Team or lab name
					<ul class="cv-list">
						<li>Responsibility or scope of work</li>
						<li>Outcome, contribution, or deliverable</li>
					</ul>
				</div>
				<div class="cv-copy">
					<strong style="display:block;font-size:17px;margin-bottom:4px;">Job title</strong>
					Institution or company: Name of institution or company<br>
					Period: YYYY.MM - YYYY.MM<br>
					Team / Lab: Team or lab name
					<ul class="cv-list">
						<li>Responsibility or scope of work</li>
						<li>Outcome, contribution, or deliverable</li>
					</ul>
				</div>
			</section>

			<section class="cv-card">
				<h2>Research Experience</h2>
				<div class="cv-copy" style="display:grid;gap:14px;">
					<div>
						<strong style="display:block;font-size:17px;margin-bottom:4px;">Project or topic</strong>
						Period: YYYY.MM - YYYY.MM<br>
						Biological question: What problem did this project address?<br>
						Data types: WGS, RNA-seq, methylation, Hi-C, long-read, etc.<br>
						Methods: Assembly, alignment, statistical modeling, workflow development<br>
						Main outcome: One or two lines describing the result
					</div>
					<div>
						<strong style="display:block;font-size:17px;margin-bottom:4px;">Project or topic</strong>
						Period: YYYY.MM - YYYY.MM<br>
						Biological question: What problem did this project address?<br>
						Data types: WGS, RNA-seq, methylation, Hi-C, long-read, etc.<br>
						Methods: Assembly, alignment, statistical modeling, workflow development<br>
						Main outcome: One or two lines describing the result
					</div>
				</div>
			</section>

			<section class="cv-card">
				<h2>Presentations, Awards, Grants, and Service</h2>
				<div class="tiles cv-copy">
					<div>
						<strong style="display:block;margin-bottom:6px;">Presentations</strong>
						<ul class="cv-list" style="margin-top:0;">
							<li>Invited talk, host institution or seminar series, location, year</li>
							<li>Conference talk, meeting name, location, year</li>
							<li>Poster, meeting name, location, year</li>
						</ul>
					</div>
					<div>
						<strong style="display:block;margin-bottom:6px;">Awards and Honors</strong>
						<ul class="cv-list" style="margin-top:0;">
							<li>Award name, organization, year</li>
							<li>Fellowship name, organization, year</li>
						</ul>
					</div>
					<div>
						<strong style="display:block;margin-bottom:6px;">Grants or Funded Projects</strong>
						<ul class="cv-list" style="margin-top:0;">
							<li>Project title, role, funder, amount if relevant, year</li>
							<li>Project title, role, funder, year</li>
						</ul>
					</div>
					<div>
						<strong style="display:block;margin-bottom:6px;">Teaching, Mentoring, and Service</strong>
						<ul class="cv-list" style="margin-top:0;">
							<li>Course or workshop, role, year</li>
							<li>Student mentoring, role, year</li>
							<li>Reviewer or committee role, organization, year</li>
							<li>Community contribution, year</li>
						</ul>
					</div>
				</div>
			</section>

			<section class="cv-card">
				<h2>References</h2>
				<div class="reference-grid">
					<div class="reference-card">
						<strong style="display:block;font-size:17px;margin-bottom:6px;">Reference name</strong>
						Position: Professor / PI / Senior Scientist<br>
						Institution: Institution name<br>
						Email: contact email<br>
						Relationship: Advisor / collaborator / supervisor
					</div>
					<div class="reference-card">
						<strong style="display:block;font-size:17px;margin-bottom:6px;">Reference name</strong>
						Position: Professor / PI / Senior Scientist<br>
						Institution: Institution name<br>
						Email: contact email<br>
						Relationship: Advisor / collaborator / supervisor
					</div>
				</div>
			</section>
		</div>
	</div>
</div>