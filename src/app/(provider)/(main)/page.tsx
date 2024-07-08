"use client";
import { useQuery } from "@tanstack/react-query";

const MainPage = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["test"],
    queryFn: () => fetch("https://koreanjson.com/posts/1").then((response) => response.json())
  });

  if (isPending) return <>pending</>;
  if (isError) return <>error</>;
  console.log(data);

  return <main>{data.title}</main>;
};

export default MainPage;
