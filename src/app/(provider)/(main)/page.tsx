"use client";
import { getTest } from "@/axios/axios.test";
import useCountStore from "@/zustand/count.store";
import { useQuery } from "@tanstack/react-query";

type DataType = {
  title: string;
};

const MainPage = () => {
  const { data, isPending, isError } = useQuery<DataType>({
    queryKey: ["test"],
    queryFn: () => getTest()
  });

  const { count, increment, decrement } = useCountStore();

  if (isPending) return <>pending</>;
  if (isError) return <>error</>;
  console.log(data);

  return (
    <main>
      {data.title}
      <hr />
      <div>{count}</div>
      <button onClick={increment}>[ + ]</button>
      <button onClick={decrement}>[ - ]</button>
    </main>
  );
};

export default MainPage;
