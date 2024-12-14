import { IModelYearPageProps } from "@/types/propTypes";
import { generateStaticParams } from "./generateStaticParams";

interface IItem {
    Make_ID: number;
    Make_Name: string;
    Model_ID: number;
    Model_Name: string;
}

export default async function ModelYearPage({ params }: IModelYearPageProps) {
    const { makeId, year } = await params;

    const fetchUrl = generateStaticParams(makeId, year);

    const res = await fetch(fetchUrl);

    const data = await res.json();

    if (!res.ok) {
        throw new Error(`Failed to fetch data from ${fetchUrl}`);
    }

    if (data.Results.length === 0) {
        return <div>Nothing Found</div>;
    }

    return (
        <ul>
            {data.Results.map((item: IItem) => (
                <li key={item.Make_ID + item.Model_Name}>
                    <p>name: {item.Make_Name}</p>
                    <p>model: {item.Model_Name}</p>
                </li>
            ))}
        </ul>
    );
}
