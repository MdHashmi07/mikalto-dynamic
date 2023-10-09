import fs from 'fs';
import { getFormDetails } from '../modules/getFormDetails.js';
import { response } from './responseHandling.js';

const data = JSON.parse(fs.readFileSync("./dataBase/apiData.json"));

export const handleRoutes = (request) => {
    try {
        if (request.url === '/') {
            return JSON.stringify({
                text: "Sucessfull"
            });
        } else if (request.url === '/pageBanner') {
            return response(data.heroSection, "Hero section data", true);
        } else if (request.url === '/welcome') {
            return response(data.welcomeSection, "Welcome Section Data", true);
        } else if (request.url === '/showRooms') {
            return response(data.roomSection, "Showrooms Section Data", true);
        } else if (request.url === '/activities') {
            return response(data.activiteSection, "Activities Section Data", true);
        } else if (request.url === "/experience") {
            return response(data.experienceSection, "Experience Section Data", true);
        } else if (request.url === "/hello") {
            return response(data.helloSection, "Hello Section Data", true);
        } else if (request.url === "/review") {
            return response(data.reviewSection, "Review Section Data", true);
        } else if (request.url === "/wellness") {
            return response(data.wellnessSection, "Wellness Section Data", true);
        } else if (request.url === "/formData") {
            getFormDetails(request);
        } else {
            return response(null, "Page not found!", false);
        }
    } catch (error) {
        console.log(error);
    }
}