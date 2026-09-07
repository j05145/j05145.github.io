import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Keeps the auto-generated *.vercel.app URL from being a second public
// entry point: anyone hitting it (or a branch preview URL) gets bounced to
// the real domain instead of seeing the same content served from Vercel's
// own hostname — one canonical URL, no accidental duplicate-content SEO
// surface either.
const CANONICAL_HOST = "www.iamjfabian.com";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  if (host.endsWith(".vercel.app")) {
    const url = new URL(request.url);
    url.protocol = "https:";
    url.host = CANONICAL_HOST;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
