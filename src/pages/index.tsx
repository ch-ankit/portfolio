import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Inter, Instrument_Serif } from 'next/font/google';
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
} from 'lucide-react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif',
  adjustFontFallback: false,
});

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'background', label: 'Background' },
  { id: 'contact', label: 'Contact' },
];

const experiences = [
  {
    title: 'Tutor — Matlab and Data Analysis',
    company: 'Saarland University',
    period: 'Sep 2026 — Oct 2026',
    location: 'Saarbrücken, Germany',
    description:
      'Tutored the interactive Global Classroom course led by Prof. Dr. Marcel Lauterbach, supporting students with in-class MATLAB assignments and handling organizational matters throughout the course.',
    technologies: ['MATLAB', 'Data Analysis', 'Teaching'],
  },
  {
    title: 'AI Engineer (NLP and Large Language Models)',
    company: 'Ycotek',
    period: 'Jul 2025 — Jan 2026',
    location: 'Kathmandu, Nepal',
    description:
      'Developed NLP components and LLM-powered application pipelines across prompt engineering, retrieval, and evaluation. Built Python data-processing pipelines to curate datasets for downstream model use.',
    technologies: ['LLMs', 'NLP', 'Prompt Engineering', 'Python', 'Retrieval', 'Evaluation'],
  },
  {
    title: 'Software Engineer (LLM-Powered Products)',
    company: 'LIS Nepal Pvt. Ltd.',
    period: 'Jan 2024 — Jul 2025',
    location: 'Kathmandu, Nepal',
    description:
      'Integrated language-model APIs into production systems, performed data validation and quality checks on a data warehouse, and built interactive visualisation tools with D3.js and Vega.',
    technologies: ['LLM Integration', 'D3.js', 'Vega', 'SQL', 'Data Validation'],
  },
  {
    title: 'Intern and Associate Data Engineer',
    company: 'Cedar Gate Technologies',
    period: 'Apr 2023 — Sep 2023',
    location: 'Lalitpur, Nepal',
    description:
      'Automated data cleaning and transformation with Python and SQL, reducing manual effort by 20–50%, and improved ETL pipeline performance by 10–30% through query optimisation and modular design.',
    technologies: ['Python', 'SQL', 'ETL', 'Query Optimisation'],
  },
];

const projects = [
  {
    title: 'Data Mining and Classification Visualiser',
    description:
      'An interactive tool that trains classification models and visualises their behaviour — decision boundaries and confusion matrices — making model diagnostics interpretable.',
    technologies: ['Python', 'Machine Learning', 'Data Visualisation'],
    link: 'https://github.com/ch-ankit/data-mining-classification',
  },
  {
    title: 'Personal Medical Report Management System',
    description:
      'A system for structuring and managing personal medical records, applying text-processing techniques to extract and organise information from unstructured reports.',
    technologies: ['Python', 'NLP', 'SQL'],
    link: 'https://github.com/ch-ankit/Manage-Personal-Health-Data',
  },
  {
    title: 'Saman Pathao: Logistics Mobile Application',
    description:
      'A cross-platform goods-delivery app with separate driver and customer interfaces, covering registration, order placement, delivery scheduling, and order history.',
    technologies: ['Flutter', 'Node.js', 'MongoDB', 'Mapbox API'],
    link: 'https://github.com/ch-ankit/saman-pathao',
  },
];

const skills = [
  {
    label: 'Machine Learning / Deep Learning',
    items: ['PyTorch', 'scikit-learn', 'NumPy', 'pandas'],
  },
  {
    label: 'NLP / LLMs',
    items: ['Language-model APIs', 'Prompt Engineering', 'Output Evaluation'],
  },
  {
    label: 'Computer Vision',
    items: ['High-Level Computer Vision', 'Image Classification', 'Vision-Language Concepts'],
  },
  {
    label: 'Programming',
    items: ['Python', 'Go', 'SQL', 'TypeScript', 'MATLAB', 'R'],
  },
  {
    label: 'Data & Tooling',
    items: ['ETL Pipelines', 'dbt', 'D3.js', 'Vega', 'Git', 'GitHub'],
  },
  {
    label: 'Database & Storage',
    items: ['MongoDB', 'PostgreSQL', 'Redis', 'AWS S3'],
  },
];

const education = [
  {
    degree: 'M.Sc. in Computer Science',
    school: 'Saarland Informatics Campus, Saarland University',
    period: 'Apr 2026 — Present',
    location: 'Saarbrücken, Germany',
    detail: 'Grade: 1.7 · High-Level Computer Vision, Machine Learning, Neural Networks',
  },
  {
    degree: 'B.Eng. in Computer Engineering',
    school: 'Kathmandu University',
    period: 'Aug 2018 — May 2023',
    location: 'Dhulikhel, Nepal',
    detail: 'CGPA: 3.90 / 4.0 · German Grade: 1.2',
  },
];

const SectionHeading = ({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) => (
  <div className="mb-14 flex items-end justify-between border-b border-line pb-5">
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
        {index} / {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-4xl leading-none tracking-tight md:text-5xl">
        {title}
      </h2>
    </div>
  </div>
);

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className={`${inter.variable} ${instrument.variable} min-h-screen bg-paper font-sans text-ink`}>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-line bg-paper/90 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex h-16 items-center justify-between">
            <button
              onClick={() => scrollToSection('about')}
              className="font-serif text-xl tracking-tight"
            >
              Ankit Khatiwada<span className="text-accent">.</span>
            </button>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <a
              href="/Resume-2.pdf"
              download
              className="hidden items-center gap-2 rounded-full border border-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors hover:bg-ink hover:text-paper md:inline-flex"
            >
              CV
              <Download size={13} />
            </a>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-line bg-paper md:hidden">
            <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="border-b border-line py-3 text-left font-mono text-xs uppercase tracking-[0.18em] text-muted last:border-0 hover:text-accent"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/Resume-2.pdf"
                download
                className="mt-4 inline-flex items-center gap-2 self-start rounded-full border border-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em]"
              >
                Download CV
                <Download size={13} />
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="about" className="scroll-mt-20 pb-24 pt-36 md:pb-32 md:pt-44">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="animate-rise">
                <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                  <span className="h-px w-10 bg-accent" />
                  AI Engineer · Computer Vision Researcher
                </p>

                <h1 className="mt-7 font-serif text-6xl leading-[0.92] tracking-tight sm:text-7xl lg:text-[6.5rem]">
                  Ankit
                  <br />
                  <span className="italic text-accent">Khatiwada</span>
                </h1>

                <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
                  M.Sc. Computer Science student at Saarland University with industry
                  experience building NLP and LLM-powered systems. Interested in computer
                  vision, vision-language models, and applied machine learning for sports
                  analytics.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
                  >
                    View selected work
                    <ArrowUpRight size={16} />
                  </button>
                  <a
                    href="/Resume-2.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
                  >
                    Download CV
                    <Download size={16} />
                  </a>
                </div>

                <div className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-line pt-6">
                  <a
                    href="mailto:ankit.khatiwada2025@gmail.com"
                    className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                  >
                    <Mail size={16} />
                    Email
                  </a>
                  <a
                    href="https://github.com/ch-ankit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/ankit-khatiwada-ak/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                  <span className="inline-flex items-center gap-2 text-sm text-muted">
                    <MapPin size={16} />
                    Saarbrücken, Germany
                  </span>
                </div>
              </div>

              <div className="animate-rise [animation-delay:120ms] lg:mt-10">
                <div className="relative mx-auto w-full max-w-sm">
                  <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full border border-line bg-cream">
                    <Image
                      src="/portfolio_image.jpg"
                      alt="Portrait of Ankit Khatiwada"
                      fill
                      priority
                      sizes="(min-width: 1024px) 384px, 80vw"
                      className="object-cover object-bottom"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-4 border border-line bg-paper px-5 py-4 shadow-sm sm:-left-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                      Currently
                    </p>
                    <p className="mt-1 text-sm text-ink">M.Sc. CS · Saarland University</p>
                    <p className="mt-1 inline-flex items-center gap-2 text-xs text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Open to research collaborations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-20 border-t border-line py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading index="01" eyebrow="Experience" title="Where I have worked" />

            <div>
              {experiences.map((exp) => (
                <article
                  key={`${exp.company}-${exp.period}`}
                  className="grid gap-4 border-b border-line py-8 md:grid-cols-[190px_1fr] md:gap-12"
                >
                  <div className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-muted">
                    <p>{exp.period}</p>
                    <p className="mt-1 text-muted/70">{exp.location}</p>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-xl font-medium tracking-tight">{exp.title}</h3>
                      <span className="font-mono text-xs text-accent">{exp.company}</span>
                    </div>
                    <p className="mt-3 max-w-3xl leading-relaxed text-muted">
                      {exp.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-20 border-t border-line py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading index="02" eyebrow="Selected Work" title="Things I have built" />

            <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
              {projects.map((project, index) => (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col bg-paper p-8 transition-colors hover:bg-cream md:p-10 ${
                    index === projects.length - 1 && projects.length % 2 === 1
                      ? 'md:col-span-2'
                      : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs text-accent">
                      0{index + 1}
                    </span>
                    <ArrowUpRight
                      size={20}
                      className="text-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                    />
                  </div>

                  <h3 className="mt-14 font-serif text-3xl leading-tight tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-4 flex-1 leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          id="background"
          className="scroll-mt-20 border-t border-line py-24 md:py-32"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading index="03" eyebrow="Background" title="Education and toolkit" />

            <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  Education
                </h3>
                <div className="mt-6 space-y-8">
                  {education.map((item) => (
                    <div key={item.degree} className="border-l border-line pl-6">
                      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                        {item.period}
                      </p>
                      <h4 className="mt-2 text-lg font-medium tracking-tight">
                        {item.degree}
                      </h4>
                      <p className="mt-1 text-sm text-muted">{item.school}</p>
                      <p className="mt-1 text-sm text-muted/70">{item.location}</p>
                      <p className="mt-2 text-sm text-muted">{item.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 border-t border-line pt-8">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    Certifications
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    AI Fundamentals (DataCamp) · Intermediate R (DataCamp) · Data Cleaning in R (DataCamp)
                  </p>
                </div>

                <div className="mt-8 border-t border-line pt-8">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    Languages
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    English (C1) · German (A2) · Nepali (native)
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  Technical Skills
                </h3>
                <div className="mt-6">
                  {skills.map((group) => (
                    <div key={group.label} className="border-b border-line py-5 first:pt-0">
                      <p className="text-sm font-medium">{group.label}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {group.items.join(' · ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-ink py-24 text-paper md:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              04 / Contact
            </p>
            <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-[0.98] tracking-tight md:text-7xl">
              Let&apos;s build something thoughtful.
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-paper/60">
              I&apos;m always interested in research collaborations, applied machine learning
              problems, and roles where models meet real-world constraints.
            </p>

            <a
              href="mailto:ankit.khatiwada2025@gmail.com"
              className="group mt-12 inline-flex items-center gap-3 border-b border-paper/30 pb-2 font-serif text-2xl tracking-tight transition-colors hover:border-accent hover:text-accent md:text-4xl"
            >
              ankit.khatiwada2025@gmail.com
              <ArrowUpRight
                size={28}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <div className="mt-16 grid gap-8 border-t border-paper/15 pt-8 sm:grid-cols-3">
              <a
                href="https://github.com/ch-ankit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-paper/60 transition-colors hover:text-paper"
              >
                <Github size={17} />
                github.com/ch-ankit
              </a>
              <a
                href="https://linkedin.com/in/ankit-khatiwada-ak/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-paper/60 transition-colors hover:text-paper"
              >
                <Linkedin size={17} />
                linkedin.com/in/ankit-khatiwada-ak
              </a>
              <a
                href="https://ankitkhatiwada.com.np"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-paper/60 transition-colors hover:text-paper"
              >
                <ArrowUpRight size={17} />
                ankitkhatiwada.com.np
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-paper/10 bg-ink py-8 text-paper/50">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em]">
            © 2026 Ankit Khatiwada
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em]">
            Saarbrücken, Germany
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
