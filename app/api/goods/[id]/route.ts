import {NextResponse} from 'next/server';
import { headers, cookies } from "next/headers";
import {redirect} from 'next/navigation';

interface ParametersI {
    params: {
        id: string;
    }
}

// read parameters from path [id] /    headers   /    cookies
export async function GET(req: Request, { params }: ParametersI) {
    const id = params?.id;
    const headersList = headers();
    const cookiesList = cookies();

    const contentType = headersList.get("Content-Type");
    const cookie = cookiesList.get("Cookie_name")?.value;

    const API_KEY = process.env.API_SECRET_KEY

    if (id === 'redirect') {
        redirect('https://nextjs.org/');
    } else {
        return NextResponse.json({ id, cookie, contentType, API_KEY });
    }
}
