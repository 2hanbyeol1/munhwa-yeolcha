import axios from "axios";
import { NextResponse } from "next/server";
import { parseString } from "xml2js";

export const GET = async (request: Request, { params }: { params: { id: number } }) => {
  const { id } = params;
  const key = process.env.NEXT_PUBLIC_ARTS_KEY;
  let jsonData = "";

  try {
    const response = await axios.get(`http://www.kopis.or.kr/openApi/restful/pblprfr/${id}?service=${key}&newsql=Y`);
    const xmlData = response.data;

    parseString(xmlData, (err, parseData) => {
      if (err) {
        console.error(err);
        throw new Error();
      }
      jsonData = parseData;
    });
    return NextResponse.json(jsonData);
  } catch (error) {
    return NextResponse.json({
      error: "공연 상세 정보를 불러오는데 실패했단다!"
    });
  }
};
