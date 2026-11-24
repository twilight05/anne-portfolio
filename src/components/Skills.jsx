import { HiArrowRight } from 'react-icons/hi2';
import { skillGroups } from '../data/content';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function SkillChip({ name, icon: Icon, color }) {
  return (
    <li
      className="group/chip inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-pink-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 dark:hover:border-pink-500/40"
    >
      <Icon
        aria-hidden="true"
        className="h-4 w-4 shrink-0 text-neutral-900 transition-transform duration-200 group-hover/chip:scale-125 dark:text-white"
        style={color ? { color } : undefined}
      />
      {name}
    </li>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="My skills"
          title="A full-stack toolkit"
          subtitle="The languages, frameworks and tools I use to take products from database schema to polished UI."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map(({ title, icon: GroupIcon, items }, i) => (
            <Reveal
              key={title}
              delay={(i % 3) * 80}
              className={i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}
            >
              <div className="card h-full p-6 transition-shadow duration-300 hover:shadow-xl sm:p-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-pink-100 text-pink-600 dark:bg-pink-500/10 dark:text-pink-400">
                    <GroupIcon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{title}</h3>
                  <span className="ml-auto rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-semibold text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                    {items.length}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <SkillChip key={item.name} {...item} />
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-pink-600 to-fuchsia-600 p-8 text-center shadow-xl shadow-pink-600/20 sm:p-10 md:flex-row md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">Have a product in mind?</h3>
            <p className="mt-2 text-pink-100">From idea to deployed app — frontend, backend and database.</p>
          </div>
          <a
            href="#contact"
            className="btn group shrink-0 bg-white text-pink-700 shadow-lg hover:-translate-y-0.5 hover:bg-pink-50"
          >
            Let&apos;s build it
            <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
