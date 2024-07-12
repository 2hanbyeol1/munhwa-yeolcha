"use client";
import LoadingPage from "@/app/loading";
import { PerformanceType } from "@/types/performance";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ShowSection from "./_component/ShowSection/ShowSection";
import TrainSection from "./_component/TrainSection";

const MainPage = () => {
  const {
    data: performances,
    isPending,
    isError
  } = useQuery<PerformanceType[]>({
    queryKey: ["performance", { list: true }],
    queryFn: () => axios.get(`/api/performance?page=${1}`).then((res) => res.data)
  });

  // const {
  //   data: performances,
  //   fetchNextPage,
  //   hasNextPage,
  //   isError,
  //   isPending
  // } = useInfiniteQuery({
  //   queryKey: ["performance", { list: true }],
  //   queryFn: ({ pageParam }) => axios.get(`/api/performance?page=${pageParam}`).then((res) => res.data),
  //   getNextPageParam: (lastPage) => (lastPage.nextCursor === -1 ? undefined : lastPage.nextCursor),
  //   initialPageParam: 1,
  //   select: (data) => data.pages.reduce((acc, { results }) => [...acc, ...results], [] as PerformanceType[])
  // });

  if (isPending) return <LoadingPage />;
  if (isError) throw new Error();

  return (
    <>
      <TrainSection />
      <ShowSection performances={performances} />
    </>
  );
};

export default MainPage;
