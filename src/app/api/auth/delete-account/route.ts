import { createClient } from "@/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const supabase = createClient(process.env.SUPABSE_ADMIN_KEY);

  try {
    const {
      data: { session }
    } = await supabase.auth.getSession();
    console.log(session);
    if (!session) {
      return NextResponse.json({ message: "사용자 인가 안됨" }, { status: 401 });
    }

    const { data, error } = await supabase.auth.admin.deleteUser(session.user.id);
    if (error) {
      console.log(error);
    }
    console.log("계적삭제됨", data);
    return NextResponse.json({ message: "성공적으로 회원탈퇴 되었습니다." });
  } catch (error: unknown) {
    let errorMessage = "회원탈퇴 실패";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
