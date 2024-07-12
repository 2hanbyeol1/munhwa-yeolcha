"use client";
import LoadingPage from "@/app/loading";
import { PerformanceType } from "@/types/performance";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import ShowSection from "./_component/ShowSection/ShowSection";
import TrainSection from "./_component/TrainSection";

const MainPage = () => {
  const {
    data: performances,
    fetchNextPage,
    hasNextPage,
    isError,
    error,
    isPending,
    isFetching
  } = useInfiniteQuery({
    queryKey: ["performance", { list: true }],
    queryFn: ({ pageParam }) => axios.get(`/api/performance?page=${pageParam}`).then((res) => res.data),
    getNextPageParam: (lastPage) => (lastPage.nextCursor === -1 ? undefined : lastPage.nextCursor),
    initialPageParam: 1,
    select: (response) => response.pages.reduce((acc, { data }) => [...acc, ...data], [] as PerformanceType[])
  });

  if (isPending) return <LoadingPage />;
  if (isError) throw new Error(error.message);

  const handleButtonClick = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <>
      <TrainSection />
      <ShowSection performances={performances} />
      <button onClick={handleButtonClick}>zz</button>
      {isFetching && <Image src="/loading.gif" width={50} height={50} alt="로딩이미지" className="mx-auto" />}
    </>
  );
};

export default MainPage;
