export interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
}

const BaseSection = ({ title, children }: ResumeSectionProps) => (
  <section>
    <h2 className="mb-4 text-xl font-bold uppercase tracking-[.25rem] print:text-lg">
      {title}
    </h2>
    {children}
  </section>
);

export default BaseSection;
