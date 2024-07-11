import { createClient } from "@/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const email = data.email as string;
    const password = data.password as string;

    const supabase = createClient();

    const {
      data: { user },
      error
    } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "An unexpected error occurred. Please try again later." }, { status: 500 });
  }
}
