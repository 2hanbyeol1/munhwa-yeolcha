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
import LoadingPage from "@/app/loading";
import useAuthStore from "@/zustand/authStore";
import CountdownTimer from "@/components/CountdownTimer";

const DetailPage = ({ params }: { params: { id: number } }) => {
  const { userInfo } = useAuthStore();
  const { id } = params;
  const [datas, setDatas] = useState<PerformanceDetail>();
  const [loading, setLoading] = useState(true);
  const [reserved, setReserved] = useState(false);
  const [buttonText, setButtonText] = useState("예약하기");
  const router = useRouter();
  const supabase = createClient();
  const [showButton, setShowButton] = useState(true);

  const handleReserve = () => {
    const createPost = async () => {
      const { data: confirm, error: checkError } = await supabase
        .from("reservation")
        .select()
        .eq("user_id", userInfo?.id as string)
        .eq("post_id", datas?.mt20id[0] as string)
        .eq("reserved", true)
        .single();

      if (confirm) {
        alert("이미 예약 완료된 공연이걸랑요");
        if (confirm.reserved) {
          setButtonText("예약 완료");
        }
      } else {
        if (datas && userInfo?.id) {
          const { data: post, error: insertError } = await supabase
            .from("reservation")
            .insert({
              title: datas.prfnm[0] as string,
              post_id: datas.mt20id[0] as string,
              date: datas.prfpdfrom[0] as string,
              image_url: datas.poster[0] as string,
              user_id: userInfo.id
            })
            .select("*");
          if (insertError) {
            console.log("insertError", insertError);
          } else {
            alert("예약 완료되었걸랑요");
            setReserved(true);
          }
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
        if (userInfo) {
          getReserved(res.data.dbs.db[0]);
        }
      }
      setLoading(false);
    };

    const getReserved = async (datas: PerformanceDetail) => {
      const { data: reserved } = await supabase
        .from("reservation")
        .select()
        .eq("user_id", userInfo?.id as string)
        .eq("post_id", datas?.mt20id[0] as string)
        .eq("reserved", true)
        .single();

      if (reserved) {
        setReserved(true);
      } else {
        setReserved(false);
      }

      if (datas?.prfpdto) {
        const today = new Date();
        const performanceDate = new Date(datas.prfpdto[0]);

        if (performanceDate < today) {
          setShowButton(false);
        } else {
          setShowButton(true);
        }
      }
    };
    fetchData();
  }, [userInfo]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div className="flex py-20">
        {datas?.poster && <Image src={datas?.poster[0]} alt="" width={480} height={300} />}
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
                  {datas?.prfruntime && datas.prfruntime.filter((item) => item.trim() !== "").length > 0 && (
                    <li className="flex items-center mt-5">
                      <IoIosTimer size={30} />
                      <span className="ml-3">{datas.prfruntime.join(", ")}</span>
                    </li>
                  )}

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
            />
            {showButton ? (
              <Button
                buttonName={reserved ? "예약 완료" : "예약하기"}
                buttonWidth={"w-2/4"}
                bgColor={reserved ? "bg-[#BBBBBB]" : "bg-[#1A764F]"}
                paddingY={"py-3"}
                marginY={"my-0"}
                onClick={handleReserve}
                opacity={reserved ? "opacity-70" : "opacity-100"}
                hover={reserved ? false : true}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
