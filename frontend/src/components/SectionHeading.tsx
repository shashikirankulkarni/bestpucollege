type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  tone?: "light" | "dark";
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  centered = false,
}: SectionHeadingProps) {
  const titleColor = tone === "dark" ? "text-white" : "text-brand-ink";
  const descriptionColor = tone === "dark" ? "text-slate-300" : "text-brand-slate";
  const eyebrowColor = tone === "dark" ? "text-brand-gold" : "text-brand-blue";
  const alignment = centered ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className={`text-xs font-bold uppercase tracking-[0.2em] sm:text-sm ${eyebrowColor}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 font-display text-2xl font-bold leading-tight sm:text-4xl ${titleColor}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 sm:text-lg sm:leading-8 ${descriptionColor}`}>
        {description}
      </p>
    </div>
  );
}
