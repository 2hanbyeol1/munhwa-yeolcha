import { createClient } from "@/supabase/server";
import { NextResponse } from "next/server";

export async function DELETE() {
  const supabase = createClient();

  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }
    return NextResponse.json({ message: "접속해제 성공" });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      {
        message: "접속해제 실패",
        error: error.message
      },
      { status: 500 }
    );
  }
}
