const axios = require('axios');
import { getCodes } from "../services/codesService";

export async function getSeriesData(code: string) {
    let seriesData;
    if (isCodeValid(code)) {
        seriesData = await fetchQuandlData(code);
    }
    return seriesData;
}

function isCodeValid(code: string): boolean {
    const supportedCodes = getCodes();
    return !code || !supportedCodes.find(validCode => validCode.code === code) ? false : true;
}

async function fetchQuandlData(code: string) {
    axios.get(`${process.env.QUANDL_DATA_API_URI}\${code}`)
        .then((response: { data: any; }) => {
            return response.data;
        })
        .catch((error: any) => {
            console.log(error);
            throw new Error("Error fatching data");
        });
}