import { NextResponse } from "next/server";
import { IVehicleMake } from "@/types/propTypes";

export async function GET() {
    const externalApiUrl = process.env.API_URL_GET_MAKES;

    if (!externalApiUrl) {
        throw new Error("Environment variable is not defined");
    }

    try {
        const response = await fetch(externalApiUrl);

        if (!response.ok) {
            throw new Error(
                `Failed to fetch data: ${response.status} - ${response.statusText}`
            );
        }

        const data = await response.json();

        const makesId: IVehicleMake[] = data.Results.map(
            (item: IVehicleMake) => {
                return {
                    MakeId: item.MakeId,
                    MakeName: item.MakeName,
                };
            }
        );

        return NextResponse.json(makesId, { status: 200 });
    } catch (error: unknown) {
        let errorMessage = "An unknown error occurred";

        if (error instanceof Error) {
            errorMessage = error.message;
        }

        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
