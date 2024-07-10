import { PerformanceApiDataType } from "@/types/performance";
import axios from "axios";
import { NextResponse } from "next/server";
import { parseString } from "xml2js";

export const GET = async (request: Request) => {
  try {
    const response = await axios.get(
      `http://www.kopis.or.kr/openApi/restful/pblprfr?service=${process.env.NEXT_PUBLIC_ARTS_KEY}&stdate=20240610&eddate=20240710&cpage=1&rows=5&newsql=Y`
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
    return NextResponse.json(jsonData);
  } catch (error) {
    return NextResponse.json({
      error: "공연 정보를 불러오는데 실패했단다!"
    });
  }
};
