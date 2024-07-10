"use client";
import LoadingPage from "@/app/loading";
import Show from "@/components/Show";
import TrainSwiper from "@/components/TrainSwiper";
import { PerformanceType } from "@/types/performance";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const MainPage = () => {
  const {
    data: performances,
    isPending,
    isError
  } = useQuery<PerformanceType[]>({
    queryKey: ["performance", { list: true }],
    queryFn: () => axios.get("/api/performance").then((res) => res.data)
  });

  if (isPending) return <LoadingPage />;
  if (isError) throw new Error();

  return (
    <>
      <section>
        <TrainSwiper />
      </section>
      <section className="mt-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {performances.map((performance) => (
          <Show key={performance.id} performance={performance} />
        ))}
      </section>
    </>
  );
};

export default MainPage;
