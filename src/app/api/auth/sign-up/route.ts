import { createClient } from "@/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const email = data.email as string;
  const password = data.password as string;

  const supabase = createClient();

  const result = await supabase.auth.signUp({ email, password });

  console.log(result);
  return NextResponse.json("멤바등록이 되었습니다.");
}
