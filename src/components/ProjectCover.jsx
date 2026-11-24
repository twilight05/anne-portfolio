import { HiOutlineCalendarDays, HiOutlineWallet, HiOutlineShoppingBag, HiOutlineCodeBracket } from 'react-icons/hi2';

const icons = {
  calendar: HiOutlineCalendarDays,
  wallet: HiOutlineWallet,
  bag: HiOutlineShoppingBag,
};

/** Shows the project screenshot, or a designed gradient cover when there is none. */
export default function ProjectCover({ project, className = '', imgClassName = '' }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        loading="lazy"
        className={`h-full w-full object-cover object-top ${imgClassName}`}
      />
    );
  }

  const { from = '#db2777', to = '#7c3aed', icon } = project.cover ?? {};
  const Icon = icons[icon] ?? HiOutlineCodeBracket;

  return (
    <div
      role="img"
      aria-label={`${project.title} cover`}
      className={`relative flex h-full w-full items-center justify-center overflow-hidden ${className}`}
      style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgb(255_255_255/0.5)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.5)_1px,transparent_1px)] [background-size:32px_32px]"
      />
      <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-2xl" />
      <div aria-hidden="true" className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-black/15 blur-2xl" />
      <div className={`relative flex flex-col items-center gap-3 text-white ${imgClassName}`}>
        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/20 shadow-lg ring-1 ring-white/30 backdrop-blur">
          <Icon className="h-8 w-8" />
        </span>
        <span className="text-2xl font-extrabold tracking-tight drop-shadow sm:text-3xl">{project.title}</span>
        <span className="rounded-full bg-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
          {project.label}
        </span>
      </div>
    </div>
  );
}
