export type PerformanceApiDataType = {
  mt20id: [string]; // 공연 ID
  prfnm: [string]; // 공연명
  genrenm: [string]; // 공연 장르명
  prfstate: [string]; // 공연상태
  prfpdfrom: [string]; // 공연시작일
  prfpdto: [string]; // 공연종료일
  poster: [string]; // 공연포스터경로
  fcltynm: [string]; // 공연시설명(공연장명)
  openrun: [string]; // 오픈런
};

export type PerformanceType = {
  id: string;
  name: string;
  genre: string;
  state: string;
  duration: [string, string];
  poster: string;
  place: string;
  openrun: string;
};
