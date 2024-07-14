import { createClient } from "@/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const supabase = createClient(process.env.SUPABSE_ADMIN_KEY);

  try {
    const {
      data: { session },
      error: sessionError
    } = await supabase.auth.getSession();

    if (sessionError || !session) {
      return NextResponse.json({ message: "사용자 인증 실패" }, { status: 401 });
    }

    const { data, error } = await supabase.auth.admin.deleteUser(session.user.id);
    if (error) {
      console.error(error);
      return NextResponse.json({ message: "회원탈퇴 실패: " + error.message }, { status: 500 });
    }
    console.log("계적삭제됨", data);

    const { error: signOutError } = await supabase.auth.signOut();
    if (signOutError) {
      console.error("Sign out error:", signOutError);
    }

    return NextResponse.json({ message: "성공적으로 회원탈퇴 되었습니다." });
  } catch (error: unknown) {
    console.error("Unexpected error:", error);
    return NextResponse.json({ message: "예기치 못한 오류가 발생했습니다." }, { status: 500 });
  }
}
