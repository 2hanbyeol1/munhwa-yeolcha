"use client";

import LoadingPage from "@/app/loading";
import { PerformanceDetail } from "@/app/types/performance";
import Button from "@/components/Button";
import CountdownTimer from "@/components/CountdownTimer";
import useAuthStore from "@/zustand/authStore";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GoHash } from "react-icons/go";
import { IoIosTimer } from "react-icons/io";
import { IoCalendarClearOutline, IoMapOutline, IoNotificationsOutline, IoPersonOutline } from "react-icons/io5";
import { createClient } from "../../../../supabase/client";

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
        console.log(res.data.dbs.db[0]);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div className="flex flex-col items-center gap-3 mb-10 md:flex-row">
        {datas?.poster && (
          <Image
            className="max-h-[calc(100vh-12.5rem)] object-contain"
            src={datas?.poster[0]}
            alt={datas?.prfnm[0]}
            width={480}
            height={300}
          />
        )}
        <div className="flex flex-col justify-between">
          <div className="h-full p-8 py-11 border-4 border-solid border-coral rounded-2xl shadow-detail max-w-[480px]">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className="text-3xl font-bold truncate-2">{datas?.prfnm[0]}</h2>
                <ul className="flex flex-col gap-3 mt-7 text-lg">
                  <li className="flex items-center">
                    <IoCalendarClearOutline size={25} />
                    <span className="ml-3">
                      {datas?.prfpdfrom[0]} - {datas?.prfpdto[0]}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <IoMapOutline size={25} />
                    <span className="ml-3">{datas?.fcltynm[0]}</span>
                  </li>
                  <li className="flex items-center">
                    <IoNotificationsOutline size={25} />
                    <span className="ml-3">{datas?.prfage[0]}</span>
                  </li>
                  <li className="flex items-center">
                    <IoIosTimer size={25} />
                    <span className="ml-3">{datas?.prfruntime[0] === " " ? "-" : datas?.prfruntime[0]}</span>
                  </li>
                  <li className="flex items-center overflow-auto">
                    <IoPersonOutline size={25} />
                    <span className="ml-3">{datas?.prfcast[0] === " " ? "-" : datas?.prfcast[0]}</span>
                  </li>
                  <li className="flex items-center">
                    <GoHash size={25} />
                    <span className="ml-3">{datas?.genrenm[0]}</span>
                  </li>
                </ul>
              </div>
              <div className="mt-7">
                <CountdownTimer endDate={String(datas?.prfpdto[0])} />
              </div>
            </div>
          </div>
          <div className="mt-7 flex">
            <Button
              buttonName={"뒤로가기"}
              buttonWidth={"w-1/2"}
              bgColor={"bg-[#FFFFFF]"}
              textColor={"text-[#1A764F]"}
              paddingY={"py-3"}
              marginY={"my-0"}
              onClick={handleGoBack}
            />
            {showButton ? (
              <Button
                buttonName={reserved ? "예약 완료" : "예약하기"}
                buttonWidth={"w-1/2"}
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
