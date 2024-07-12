"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { PerformanceDetail } from "@/app/types/performance";
import { IoCalendarClearOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { IoMapOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { GoHash } from "react-icons/go";
import { createClient } from "../../../../supabase/client";
import CountdownTimer from "@/components/CountdownTimer";

const DetailPage = ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const [datas, setDatas] = useState<PerformanceDetail>();
  const router = useRouter();
  const supabase = createClient();

  const handleReserve = () => {
    alert("예약되었습니다");

    const createPost = async () => {
      const { data: session, error: sessionError } = await supabase.auth.getSession();
      if (sessionError) {
        console.log(sessionError);
      }
      const userId = session.session?.user.id;
      if (datas && userId) {
        const { data: post, error } = await supabase
          .from("reservation")
          .insert({
            title: datas.prfnm[0],
            post_id: datas.mt20id[0],
            date: datas.prfpdfrom[0],
            image_url: datas.poster[0],
            user_id: userId
          })
          .select("*");
        if (error) {
          console.log("error", error);
        }
      }
    };
    createPost();
  };
  const handleGoBack = () => {
    router.push("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/performance/${id}`);
      if (res) {
        setDatas(res.data.dbs.db[0]);
      }
    };
    fetchData();
  }, []);

  console.log(datas);
  return (
    <>
      <div className="flex py-20">
        {datas?.poster && (
          <div>
            <Image src={datas?.poster[0]} alt="" width={480} height={300} />
          </div>
        )}
        <div className="flex flex-col justify-between ml-8">
          <div className="w-[490px] h-full p-8 py-11 border-4 border-solid border-coral rounded-2xl shadow-detail">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className="text-4xl font-bold">{datas?.prfnm}</h2>
                <ul className="mt-7 text-lg">
                  <li className="flex alin mt-5">
                    <IoCalendarClearOutline size={30} />
                    <span className="ml-3">
                      {datas?.prfpdfrom} - {datas?.prfpdto}
                    </span>
                  </li>
                  <li className="flex items-center mt-5">
                    <IoMapOutline size={30} />
                    <span className="ml-3">{datas?.fcltynm}</span>
                  </li>
                  <li className="flex items-center mt-5">
                    <IoNotificationsOutline size={30} />
                    <span className="ml-3">{datas?.prfage}</span>
                  </li>
                  {/* <li className="flex items-center mt-5">
                    <IoIosTimer size={30} />
                    <span className="ml-3">{datas?.prfruntime}</span>
                  </li> */}
                  <li className="flex items-center mt-5">
                    <IoPersonOutline size={30} />
                    <span className="ml-3">{datas?.prfcast}</span>
                  </li>
                  <li className="flex items-center mt-5">
                    <GoHash size={30} />
                    <span className="ml-3">{datas?.genrenm}</span>
                  </li>
                </ul>
              </div>
              <div>
                <CountdownTimer endDate={String(datas?.prfpdto[0])} />
              </div>
            </div>
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
