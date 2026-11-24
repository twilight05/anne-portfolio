import { useCallback, useMemo, useState } from 'react';
import { HiArrowTopRightOnSquare, HiArrowRight, HiOutlineLockClosed } from 'react-icons/hi2';
import { SiGithub } from 'react-icons/si';
import { profile, projects } from '../data/content';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import ProjectModal from './ProjectModal';
import ProjectCover from './ProjectCover';

function ProjectLinks({ project }) {
  const base =
    'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition hover:-translate-y-0.5';
  return (
    <div className="flex flex-wrap gap-2">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className={`${base} bg-pink-600 text-white hover:bg-pink-700`}
        >
          Live <HiArrowTopRightOnSquare className="h-3.5 w-3.5" />
        </a>
      )}
      {project.codeUrl && (
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noreferrer"
          className={`${base} bg-neutral-900 text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200`}
        >
          <SiGithub className="h-3.5 w-3.5" /> Code
        </a>
      )}
      {project.privateCode && (
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-neutral-500 ring-1 ring-neutral-200 dark:text-neutral-400 dark:ring-neutral-700"
          title="Source code is in a private repository"
        >
          <HiOutlineLockClosed className="h-3.5 w-3.5" /> Private code
        </span>
      )}
    </div>
  );
}

export default function Projects() {
  const categories = useMemo(() => ['All', ...new Set(projects.map((p) => p.type))], []);
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const close = useCallback(() => setSelected(null), []);

  const visible = filter === 'All' ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="bg-neutral-50 py-20 lg:py-28 dark:bg-neutral-900/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="My projects"
          title="Completed work"
          subtitle="Production-ready apps I've designed, built and shipped. Click a project for the full breakdown."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects">
          {categories.map((c) => {
            const count = c === 'All' ? projects.length : projects.filter((p) => p.type === c).length;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  filter === c
                    ? 'bg-pink-600 text-white shadow-md shadow-pink-600/25'
                    : 'bg-white text-neutral-600 ring-1 ring-neutral-200 hover:text-pink-600 hover:ring-pink-300 dark:bg-neutral-900 dark:text-neutral-300 dark:ring-neutral-800 dark:hover:text-pink-400'
                }`}
              >
                {c}
                <span
                  className={`rounded-full px-1.5 text-xs ${
                    filter === c ? 'bg-white/20' : 'bg-neutral-100 dark:bg-neutral-800'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {visible.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i % 2) * 100}
              className={filter === 'All' && i === 0 ? 'md:col-span-2' : ''}
            >
              <article
                className={`card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                  filter === 'All' && i === 0 ? 'lg:flex-row' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className={`relative block aspect-[16/9] shrink-0 overflow-hidden text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-pink-500 ${
                    filter === 'All' && i === 0 ? 'lg:aspect-auto lg:min-h-[360px] lg:w-3/5' : ''
                  }`}
                  aria-label={`View details for ${project.title}`}
                >
                  <ProjectCover
                    project={project}
                    imgClassName="transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-800 shadow backdrop-blur dark:bg-neutral-900/90 dark:text-neutral-100">
                    {project.type}
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center bg-neutral-950/0 opacity-0 transition-all duration-300 group-hover:bg-neutral-950/50 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow-lg">
                      View details <HiArrowRight className="h-4 w-4" />
                    </span>
                  </span>
                </button>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-widest text-pink-600 dark:text-pink-400">
                    {project.label}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-neutral-900 sm:text-2xl dark:text-white">{project.title}</h3>
                  {project.role && (
                    <p className="mt-1 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                      My role: <span className="text-neutral-800 dark:text-neutral-200">{project.role}</span>
                    </p>
                  )}
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400">{project.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
                    <ProjectLinks project={project} />
                    <button
                      type="button"
                      onClick={() => setSelected(project)}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-pink-600 hover:gap-2 dark:text-pink-400"
                      style={{ transition: 'gap 0.2s' }}
                    >
                      Details <HiArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost">
            <SiGithub className="h-4 w-4" /> More on GitHub
          </a>
        </Reveal>
      </div>

      {selected && <ProjectModal project={selected} onClose={close} />}
    </section>
  );
}
