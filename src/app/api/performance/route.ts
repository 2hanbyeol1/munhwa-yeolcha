import { PerformanceApiDataType } from "@/types/performance";
import { getOneMonthAgoDate } from "@/utils/date";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { parseString } from "xml2js";

export const maxDuration = 25;

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get("page") as string;
  const row = 12; // 한 페이지 당 데이터 개수

  const stdate = getOneMonthAgoDate();

  try {
    const response = await axios.get(
      `http://www.kopis.or.kr/openApi/restful/pblprfr?service=${process.env.NEXT_PUBLIC_ARTS_KEY}&stdate=${stdate}&eddate=20991231&cpage=${page}&rows=${row}&newsql=Y`
    );
    const xmlData = await response.data;
    let jsonData = "";
    parseString(xmlData, (err, parseData) => {
      if (err) {
        console.error(err);
        throw new Error();
      }
      jsonData = parseData?.dbs?.db?.map((item: PerformanceApiDataType) => ({
        id: item.mt20id?.[0],
        name: item.prfnm?.[0],
        genre: item.genrenm?.[0],
        state: item.prfstate?.[0],
        duration: [item.prfpdfrom?.[0], item.prfpdto?.[0]],
        poster: item.poster?.[0],
        place: item.fcltynm?.[0],
        openrun: item.openrun?.[0]
      }));
    });
    return NextResponse.json({ data: jsonData, nextCursor: parseInt(page) + 1 });
  } catch (error) {
    return NextResponse.json({
      error: "공연 정보를 불러오는데 실패했단다!"
    });
  }
};
