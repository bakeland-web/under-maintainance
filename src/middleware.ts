import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only protect admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // In a production app, you might want to check for authentication tokens here
    // For now, we'll let the client-side authentication handle it
    // This middleware can be extended to check for JWT tokens or session cookies
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*']
};
