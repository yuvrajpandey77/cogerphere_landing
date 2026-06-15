import { NextResponse } from "next/server";
import { resolveOpenbenttUrl } from "@/lib/openbentt-url";

export async function GET() {
  return NextResponse.redirect(await resolveOpenbenttUrl(), 302);
}
