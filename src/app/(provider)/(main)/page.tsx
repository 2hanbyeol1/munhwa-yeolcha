"use client";
import LoadingPage from "@/app/loading";
import { PerformanceType } from "@/types/performance";
import useAuthStore from "@/zustand/authStore";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ShowSection from "./_component/ShowSection/ShowSection";
import TrainSection from "./_component/TrainSection";

const MainPage = () => {
  const { setIsAuthenticated, isAuthenticated } = useAuthStore();
  const {
    data: performances,
    fetchNextPage,
    isFetching,
    isError,
    error,
    isPending
  } = useInfiniteQuery({
    queryKey: ["performance", { list: true }],
    queryFn: ({ pageParam }) => axios.get(`/api/performance?page=${pageParam}`).then((res) => res.data),
    getNextPageParam: (lastPage) => (lastPage.nextCursor === -1 ? undefined : lastPage.nextCursor),
    initialPageParam: 1,
    select: (response) => response.pages.reduce((acc, { data }) => [...acc, ...data], [] as PerformanceType[])
  });

  const { ref, inView } = useInView({
    threshold: 0
  });

  useEffect(() => {
    if (inView) fetchNextPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    const checkAuthToken = () => {
      const cookies = document.cookie.split("; ");
      const authToken = cookies.find((cookie) => cookie.startsWith("sb-awglleigixtjjdlmbhrh-auth-token"));

      setIsAuthenticated(!!authToken);
    };

    checkAuthToken();
  }, [isAuthenticated]);

  if (isPending) return <LoadingPage />;
  if (isError) throw new Error(error.message);

  return (
    <>
      <TrainSection />
      <ShowSection performances={performances} />
      {isFetching ? (
        <Image className="mx-auto my-3" src="/loading.gif" width={30} height={30} alt="로딩이미지" />
      ) : (
        <div ref={ref}></div>
      )}
    </>
  );
};

export default MainPage;
