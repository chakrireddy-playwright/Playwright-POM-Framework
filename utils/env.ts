import dotenv from 'dotenv';

dotenv.config();

export const ENV = {

    BASE_URL: process.env.BASE_URL || '',

    HRM_USERNAME: process.env.HRM_USERNAME || '',

    HRM_PASSWORD: process.env.HRM_PASSWORD || ''
};