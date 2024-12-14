interface IProps {
    params: {
        makeId: string;
        year: string;
    };
}

export default async function ModelYearPage({ params }: IProps) {
    const { makeId, year } = params;

    return (
        <div>
            <h1>Make: {makeId}</h1>
            <h2>Year: {year}</h2>
        </div>
    );
}
