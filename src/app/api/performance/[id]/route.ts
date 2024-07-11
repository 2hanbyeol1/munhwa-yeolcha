import axios from "axios";
import xml2js from "xml2js";

export const GET = async (request: Request, { params }: { params: { id: number } }) => {
  const { id } = params;
  const key = process.env.NEXT_PUBLIC_ARTS_KEY;

  const response = await axios.get(`http://www.kopis.or.kr/openApi/restful/pblprfr/${id}?service=${key}&newsql=Y`);
  const xmlData = response.data;

  return new Promise((resolve, reject) => {
    xml2js.parseString(xmlData, (err, result) => {
      if (err) {
        throw new Error("Error parsing XML");
      } else {
        resolve(
          new Response(JSON.stringify(result), {
            status: 200,
            headers: { "Content-Type": "application/json" }
          })
        );
      }
    });
  });
};
