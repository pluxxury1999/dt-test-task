import { NextResponse } from "next/server";

export async function GET() {
    const externalApiUrl = process.env.API_URL;

    try {
        const response = await fetch(externalApiUrl);

        if (!response.ok) {
            throw new Error(
                `Failed to fetch data: ${response.status} - ${response.statusText}`
            );
        }

        const data = await response.json();

        const makesId = data.Results.map((item) => {
            return {
                MakeId: item.MakeId,
                MakeName: item.MakeName,
            };
        });

        return NextResponse.json(makesId, { status: 200 });
    } catch (error: unknown) {
        let errorMessage = "An unknown error occurred";

        if (error instanceof Error) {
            errorMessage = error.message;
        }

        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
