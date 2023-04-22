import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export const config = {
  matcher: [
    '/:path((?!api|_next/static|_next/data|_next/image|static|sites|favicon|favicon.ico).*)',
    '/',
  ],
};
export function middleware(req: NextRequest) {

}
