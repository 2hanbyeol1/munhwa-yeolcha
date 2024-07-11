import { createClient } from "@/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const email = data.email as string;
  const password = data.password as string;

  const supabase = createClient();

  try {
    const {
      data: { user },
      error
    } = await supabase.auth.signUp({ email, password });

    if (error) {
      throw new Error(error.message);
    }
    console.log(user);
    return NextResponse.json(user);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
