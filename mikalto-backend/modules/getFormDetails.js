import { parse } from "querystring";
import fs from 'fs';

export const getFormDetails = (request) => {
    try {
        let chunks = "";
        request.on('data', (chuck) => {
            chunks = chuck.toString();
        });

        request.on('end', () => {
            const parseData = parse(chunks);
            if (Object.keys(parseData).length !== 0) {
                modifyFile(parseData, "./dataBase/getFormData.json");
            }
        });
    } catch (error) {
        console.log(error);
    }
    async function modifyFile(totalFormData, fileName) {
        let readFileData = await fs.readFileSync(fileName, "utf-8");
        readFileData = JSON.parse(readFileData);
        readFileData.push(totalFormData);
        fs.writeFileSync(fileName, JSON.stringify(readFileData));
    }
}
