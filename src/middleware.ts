import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const hostname = request.headers.get('host') || ''
    const url = request.nextUrl

    // Check if we are on the 'masterclass' subdomain
    if (hostname.includes('masterclass.')) {
        // Rewrite to the masterclass page
        url.pathname = '/masterclass'
        return NextResponse.rewrite(url)
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
