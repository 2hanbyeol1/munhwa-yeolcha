import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="py-20">
      <h2 className="text-2xl font-bold">인어공주</h2>
      <div className="flex mt-5">
        <Image src="/princess.webp" alt="" width={300} height={300} />
        <ul className="ml-16">
          <li className="flex mt-5">
            <Image src="/icons/calendar.svg" alt="" width={20} height={20} />
            <span className="ml-2">2024. 6. 22 - 8. 25</span>
          </li>
          <li className="flex mt-5">
            <Image src="/icons/icon_map.svg" alt="" width={20} height={20} />
            <span className="ml-2">롯데마트 행복을 주는 가족극장</span>
          </li>
          <li className="flex mt-5">
            <Image src="/icons/icon_phone.svg" alt="" width={20} height={20} />
            <span className="ml-2">031-245-1234</span>
          </li>
          <li className="flex mt-5">
            <Image src="/icons/icon_volume.svg" alt="" width={20} height={20} />
            <span className="ml-2">전체 관람가</span>
          </li>
          <li className="flex mt-5">
            <Image src="/icons/icon_hashtag.svg" alt="" width={20} height={20} />
            <span className="ml-2">사랑</span>
          </li>
        </ul>
      </div>

      <div className="mt-10">
        <strong className="text-xl">공연줄거리</strong>
        <p className="mt-2">
          세계적인 명작을 재연한 고전 뮤지컬 인어공주~!!! 인간을 사랑한 인어 공주의 아름답고 애절한 사랑 이야기~!!!
          탐욕과 질투로 가득한 바다 마녀의 최후~!!!
        </p>
      </div>

      <div className="text-right mt-10">
        <button className="p-2 rounded-lg bg-coral text-white">예약하기</button>
        <button className="p-2 rounded-lg bg-white text-coral ml-2">
          <Link href="/">뒤로가기</Link>
        </button>
      </div>
    </div>
  );
};

export default page;
