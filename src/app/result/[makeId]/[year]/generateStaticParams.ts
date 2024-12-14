export const generateStaticParams = (makeId: string, year: string): string => {
    const baseUrl = process.env.API_URL_WITH_PARAMS;

    if (makeId && year) {
        return `${baseUrl}/makeId/${makeId}/modelyear/${year}?format=json`;
    }
    return "error was occurred";
};
