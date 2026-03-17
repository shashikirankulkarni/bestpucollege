type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
}: SectionHeadingProps) {
  const titleColor = tone === "dark" ? "text-white" : "text-brand-ink";
  const descriptionColor = tone === "dark" ? "text-blue-100" : "text-brand-slate";

  return (
    <div className="max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold sm:text-sm sm:tracking-[0.28em]">
        {eyebrow}
      </p>
      <h2 className={`mt-3 font-display text-2xl font-bold sm:text-4xl ${titleColor}`}>
        {title}
      </h2>
      <p className={`mt-4 text-sm leading-7 sm:text-lg ${descriptionColor}`}>{description}</p>
    </div>
  );
}
