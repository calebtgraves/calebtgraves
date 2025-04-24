<script>
  import Container from "./components/Container.svelte";
  import EducationSection from "./components/EducationSection.svelte";
  import LanguagesSection from "./components/LanguagesSection.svelte";
  import ProfessionalExperienceSection from "./components/ProfessionalExperienceSection.svelte";
  import ProjectsSection from "./components/ProjectsSection.svelte";
  import Separator from "./components/Separator.svelte";
  import SkillsSection from "./components/SkillsSection.svelte";
  import ThemeStyles from "./components/ThemeStyles.svelte";
  import ThemeToggleButton from "./components/ThemeToggleButton.svelte";
  import resumeInfo from "./resumeInfo.json";
  import { theme } from "./stores";

  const { education, skills, professionalExperience, languages, projects } =
    resumeInfo;
</script>

<main>
  <header>
    <Container direction="column" size="xl">
      <Container size="full" justify="space-between">
        <div>
          <Container align="end">
            <h1 class="name">Caleb Graves</h1>
            <Separator />
            <h2 class="title">Software Developer</h2>
          </Container>
          <Container justify="start">
            <h3 class="email">calebtgraves@gmail.com</h3>
          </Container>
        </div>
        <div>
          <a href="https://www.github.com/calebtgraves" target="_blank">
            <img
              class="contact-image"
              src={$theme === "light"
                ? "images/github.svg"
                : "images/github_white.png"}
              alt="GitHub"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/caleb-graves-02b2011a6/"
            target="_blank"
          >
            <img
              class="contact-image"
              src="images/linkedin.png"
              alt="LinkedIn"
            />
          </a>
        </div>
      </Container>
    </Container>
    <ThemeToggleButton />
  </header>
  <div id="main-content">
    <Container direction="column">
      <SkillsSection {skills} />
      <ProfessionalExperienceSection {professionalExperience} />
      <EducationSection {education} />
      <LanguagesSection {languages} />
      <ProjectsSection {projects} />
    </Container>
  </div>
</main>

<ThemeStyles />

<style>
  header {
    padding: 20px 10px;
    width: 100%;
  }

  h1.name {
    font-size: 3rem;
  }

  h2.title {
    font-size: 1.8rem;
    line-height: 2.8rem;
    font-style: italic;
    font-weight: 500;
  }

  h3.email {
    font-size: 1.2rem;
    font-weight: 400;
  }

  .contact-image {
    height: 2rem;
    margin-left: 1rem;
  }

  .contact-image:hover {
    opacity: 0.8;
  }

  #main-content {
    padding: 10px 20px;
  }
</style>
