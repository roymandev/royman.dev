export interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const BaseSection = ({ title, children, className }: ResumeSectionProps) => (
  <section className={className}>
    <h2 className="mb-3 text-xl font-bold uppercase tracking-[.25rem] print:text-lg">
      {title}
    </h2>
    {children}
  </section>
);

export default BaseSection;
