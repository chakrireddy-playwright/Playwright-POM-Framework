import dotenv from 'dotenv';

dotenv.config();

export const ENV = {

    BASE_URL: process.env.BASE_URL || '',

    HRM_USERNAME: process.env.HRM_USERNAME || '',

    HRM_PASSWORD: process.env.HRM_PASSWORD || '',

    JIRA_URL: process.env.JIRA_URL || '',

    JIRA_EMAIL: process.env.JIRA_EMAIL || '',

    JIRA_API_TOKEN: process.env.JIRA_API_TOKEN || '',

    JIRA_PROJECT: process.env.JIRA_PROJECT || ''

};