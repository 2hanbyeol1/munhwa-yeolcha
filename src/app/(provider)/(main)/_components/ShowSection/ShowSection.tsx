import Show from "@/app/(provider)/(main)/_components/ShowSection/Show";
import { PerformanceType } from "@/types/performance";

interface ShowSectionType {
  performances: PerformanceType[];
}
const ShowSection = ({ performances }: ShowSectionType) => {
  return (
    <section className="mt-10 mb-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {performances.map((performance: PerformanceType) => (
        <Show key={performance.id} performance={performance} />
      ))}
    </section>
  );
};

export default ShowSection;
