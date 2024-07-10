"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Performance } from "@/app/types/performance";

const DetailPage = ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const [datas, setDatas] = useState<Performance>();
  const router = useRouter();

  const handleReserve = () => {
    alert("예약되었습니다");
  };
  const handleGoBack = () => {
    router.push("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/${id}`);
      setDatas(res.data.dbs.db[0]);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <div className="flex py-20">
        <Image src="/princess.webp" alt="" width={480} height={300} />
        <div className="flex flex-col justify-between ml-8">
          <div className="w-[490px] h-full p-8 py-11 border-4 border-solid border-coral rounded-2xl shadow-detail">
            <h2 className="text-4xl font-bold">인어공주</h2>
            <ul className="mt-7 text-lg">
              <li className="flex mt-5">
                <Image src="/icons/calendar.svg" alt="" width={30} height={30} />
                <span className="ml-2">2024. 6. 22 - 8. 25</span>
              </li>
              <li className="flex mt-5">
                <Image src="/icons/icon_map.svg" alt="" width={30} height={30} />
                <span className="ml-2">롯데마트 행복을 주는 가족극장</span>
              </li>
              <li className="flex mt-5">
                <Image src="/icons/icon_phone.svg" alt="" width={30} height={30} />
                <span className="ml-2">031-245-1234</span>
              </li>
              <li className="flex mt-5">
                <Image src="/icons/icon_volume.svg" alt="" width={30} height={30} />
                <span className="ml-2">전체 관람가</span>
              </li>
              <li className="flex mt-5">
                <Image src="/icons/icon_hashtag.svg" alt="" width={30} height={30} />
                <span className="ml-2">사랑</span>
              </li>
              <li className="mt-5">
                <p>
                  세계적인 명작을 재연한 고전 뮤지컬 인어공주~!!! 인간을 사랑한 인어 공주의 아름답고 애절한 사랑
                  이야기~!!! 탐욕과 질투로 가득한 바다 마녀의 최후~!!!
                </p>
              </li>
            </ul>
          </div>
          <div className="mt-7 text-center">
            <Button
              buttonName={"뒤로가기"}
              buttonWidth={"w-2/5"}
              bgColor={"bg-[#FFFFFF]"}
              textColor={"text-[#1A764F]"}
              paddingY={"py-3"}
              marginY={"my-0"}
              onClick={handleGoBack}
            ></Button>
            <Button
              buttonName={"예약하기"}
              buttonWidth={"w-2/4"}
              paddingY={"py-3"}
              marginY={"my-0"}
              onClick={handleReserve}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
