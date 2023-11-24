import {NextResponse} from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");
    return NextResponse.json({
        message: 'API works well',
        q:query,
        allQ: searchParams.toString(),
    })
}
