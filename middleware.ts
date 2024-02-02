import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  // Redirect all traffic to "https://linktr.ee/austinai"
  return NextResponse.redirect("https://linktr.ee/austinai");
}
