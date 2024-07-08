"use client";
import { getTest } from "@/axios/axios.test";
import { useQuery } from "@tanstack/react-query";

type DataType = {
  title: string;
};

const MainPage = () => {
  const { data, isPending, isError } = useQuery<DataType>({
    queryKey: ["test"],
    queryFn: () => getTest()
  });

  if (isPending) return <>pending</>;
  if (isError) return <>error</>;
  console.log(data);

  return <main>{data.title}</main>;
};

export default MainPage;
