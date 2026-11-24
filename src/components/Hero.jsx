import { useEffect, useState } from 'react';
import { HiArrowRight, HiOutlineMapPin } from 'react-icons/hi2';
import { profile, projects, skillCount } from '../data/content';
import profileImg from '../assets/profile.jpg';

function RotatingRole() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = profile.roles[index];
    let delay = deleting ? 45 : 90;
    if (!deleting && text === word) delay = 1800;
    if (deleting && text === '') delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => (i + 1) % profile.roles.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index]);

  return (
    <span className="bg-gradient-to-r from-pink-600 to-fuchsia-600 bg-clip-text text-transparent dark:from-pink-400 dark:to-fuchsia-400">
      {text}
      <span className="ml-0.5 inline-block w-[3px] animate-pulse bg-pink-600 align-middle dark:bg-pink-400" style={{ height: '0.9em' }} />
    </span>
  );
}

export default function Hero() {
  const stats = [
    { value: `${projects.length}`, label: 'Completed projects' },
    { value: `${Math.floor(skillCount / 5) * 5}+`, label: 'Technologies' },
    { value: '2021', label: 'Coding since' },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-96 w-96 animate-blob rounded-full bg-pink-300/40 blur-3xl dark:bg-pink-600/20" />
        <div
          className="absolute top-40 -right-24 h-96 w-96 animate-blob rounded-full bg-fuchsia-300/40 blur-3xl dark:bg-fuchsia-600/15"
          style={{ animationDelay: '-5s' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0/0.06)_1px,transparent_0)] [background-size:28px_28px] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.06)_1px,transparent_0)]" />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        <div className="text-center lg:text-left">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-neutral-700 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-neutral-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
          </p>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-5xl xl:text-6xl dark:text-white">
            Hi, I&apos;m {profile.fullName}
          </h1>
          <p className="mt-4 h-8 whitespace-nowrap text-xl font-bold sm:h-10 sm:text-3xl xl:h-12 xl:text-4xl" aria-live="off">
            <RotatingRole />
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-600 lg:mx-0 dark:text-neutral-400">
            <strong className="font-semibold text-neutral-900 dark:text-white">{profile.tagline}</strong>{' '}
            {profile.intro}
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#projects" className="btn-primary group w-full sm:w-auto">
              Dive right in
              <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-ghost w-full sm:w-auto">
              Contact me
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-neutral-200 pt-8 dark:border-neutral-800">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-extrabold text-neutral-900 sm:text-3xl dark:text-white">{s.value}</dd>
                <dd className="mt-1 text-xs text-neutral-500 sm:text-sm dark:text-neutral-400">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute -inset-4 rotate-6 rounded-[2.5rem] bg-gradient-to-br from-pink-500 to-fuchsia-600 opacity-90 dark:opacity-70" />
          <img
            src={profileImg}
            alt={`Portrait of ${profile.fullName}`}
            width="1000"
            height="1400"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-top shadow-2xl"
            fetchPriority="high"
          />
          <div className="absolute -bottom-6 -left-4 animate-float rounded-2xl border border-neutral-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:-left-10 dark:border-neutral-800 dark:bg-neutral-900/90">
            <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white">
              <HiOutlineMapPin className="h-4 w-4 text-pink-600" /> {profile.location}
            </p>
          </div>
          <div
            className="absolute -top-5 -right-3 animate-float rounded-2xl border border-neutral-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:-right-8 dark:border-neutral-800 dark:bg-neutral-900/90"
            style={{ animationDelay: '-3s' }}
          >
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Full-stack</p>
            <p className="text-sm font-semibold text-neutral-900 dark:text-white">React · Node · SQL</p>
          </div>
        </div>
      </div>
    </section>
  );
}
