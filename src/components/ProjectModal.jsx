import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { HiXMark, HiArrowTopRightOnSquare, HiOutlineCheckCircle, HiOutlineLockClosed } from 'react-icons/hi2';
import { SiGithub } from 'react-icons/si';
import ProjectCover from './ProjectCover';

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    const prevFocus = document.activeElement;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
      prevFocus?.focus?.();
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="absolute inset-0 animate-fade-in bg-neutral-950/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative flex max-h-full w-full max-w-3xl animate-scale-in flex-col overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-neutral-900">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-neutral-700 shadow transition hover:bg-pink-600 hover:text-white dark:bg-neutral-800/90 dark:text-neutral-200"
        >
          <HiXMark className="h-5 w-5" />
        </button>

        <div className="overflow-y-auto">
          <div className="aspect-[16/8] w-full bg-neutral-100 dark:bg-neutral-950">
            <ProjectCover project={project} />
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-pink-600 dark:text-pink-400">
              {project.type} · {project.label}
            </p>
            <h3 id="project-modal-title" className="mt-1 text-2xl font-bold text-neutral-900 sm:text-3xl dark:text-white">
              {project.title}
            </h3>
            {project.role && (
              <p className="mt-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                My role: <span className="text-neutral-800 dark:text-neutral-200">{project.role}</span>
              </p>
            )}
            <p className="mt-3 text-neutral-600 dark:text-neutral-400">{project.description}</p>

            {project.highlights?.length > 0 && (
              <>
                <h4 className="mt-6 text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                  {project.type === 'Backend' ? 'What I built' : 'Key features'}
                </h4>
                <ul className="mt-3 space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-neutral-700 dark:text-neutral-300">
                      <HiOutlineCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-pink-600 dark:text-pink-400" />
                      {h}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h4 className="mt-6 text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white">Tech stack</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-700 dark:bg-pink-500/10 dark:text-pink-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.privateCode && (
              <p className="mt-6 inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                <HiOutlineLockClosed className="h-4 w-4" /> Source code is in a private repository, available on request.
              </p>
            )}

            {(project.liveUrl || project.codeUrl) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">
                    Live demo <HiArrowTopRightOnSquare className="h-4 w-4" />
                  </a>
                )}
                {project.codeUrl && (
                  <a href={project.codeUrl} target="_blank" rel="noreferrer" className="btn-ghost">
                    <SiGithub className="h-4 w-4" /> Source code
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
