"use client";
import { getTest } from "@/axios/axios.test";
import Input from "@/components/Input";
import useCountStore from "@/zustand/count.store";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

type DataType = {
  title: string;
};

const MainPage = () => {
  const { data, isPending, isError } = useQuery<DataType>({
    queryKey: ["test"],
    queryFn: () => getTest()
  });

  const { count, increment, decrement } = useCountStore();
  const [title, setTitle] = useState<string | number>("");

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
      <br />
      <form>
        <Input type={"e-mail"} inputValue={title} setInputValue={setTitle} placeholder={"ID"} />
      </form>
    </main>
  );
};

export default MainPage;
