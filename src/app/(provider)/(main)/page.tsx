"use client";
import LoadingPage from "@/app/loading";
import FilmSwiper from "@/components/FilmSwiper";
import Show from "@/components/Show";
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
        <FilmSwiper />
      </section>
      <section className="mt-10 w-full grid grid-cols-4 gap-5">
        {performances.map((performance) => (
          <Show key={performance.id} performance={performance} />
        ))}
      </section>
    </>
  );
};

export default MainPage;
