import TicketList from "@/components/TicketList";
import Image from "next/image";
import React from "react";

const MyTicketingListPage = () => {
  return (
    <>
      {/* 여기 위에는 버튼 밑에는 전체 예약 내역*/}
      <span>
        <div className="flex justify-between gap-5 pt-[10px] pb-[10px]">
          <span className="flex justify-center items-center w-[200px] h-[50px] rounded-lg font-bold text-green text-[30px]">
            전체 예약 내역
          </span>
          <select className="border rounded-md">
            <option>예약일 순</option>
            <option>공연 날짜 순</option>
          </select>
        </div>
      </span>
      <div className="border-t border-b border-l-0 border-r-0 border-gray-300">
        <div className="flex flex-col">
          {/* 여기부터 예매내역칸 */}
          <div className="flex items-center p-[20px] border-t border-gray-300">
            <div>
              <div>
                <div>2024.07.01(월)</div>
                <div className="text-[10px] text-[gray]">예약번호:D813VC4</div>
              </div>
              <div className="border w-[100px]">
                <Image src={""} alt="웃는 남자" width={100} height={100} />
              </div>
            </div>
            <div className="flex flex-col ml-4">
              <div className="font-bold pb-[10px]">웃는 남자</div>
              <div className="text-[10px] text-[gray]">2024.07.10 18:00</div>
              <div>예약되었습니다람쥐</div>
            </div>
          </div>

          {/* 여기부터 예매내역칸 */}
          <div className="flex items-center p-[20px] border-t border-gray-300">
            <div>
              <div>
                <div>2024.07.01(월)</div>
                <div className="text-[10px] text-[gray]">예약번호:D813VC4</div>
              </div>
              <div className="border w-[100px]">
                <Image src={""} alt="웃는 남자" width={100} height={100} />
              </div>
            </div>
            <div className="flex flex-col ml-4">
              <div className="font-bold pb-[10px]">웃는 남자</div>
              <div className="text-[10px] text-[gray]">2024.07.10 18:00</div>
              <div>예약되었습니다람쥐</div>
            </div>
          </div>
          <div className="flex items-center p-[20px] border-t border-gray-300">
            <div>
              <div>
                <div>2024.07.01(월)</div>
                <div className="text-[10px] text-[gray]">예약번호:D813VC4</div>
              </div>
              <div className="border w-[100px]">
                <Image src={""} alt="웃는 남자" width={100} height={100} />
              </div>
            </div>
            <div className="flex flex-col ml-4">
              <div className="font-bold pb-[10px]">웃는 남자</div>
              <div className="text-[10px] text-[gray]">2024.07.10 18:00</div>
              <div>예약되었습니다람쥐</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTicketingListPage;
