import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const jira = axios.create({
  baseURL: process.env.JIRA_URL,

  auth: {
    username: process.env.JIRA_EMAIL!,
    password: process.env.JIRA_API_TOKEN!,
  },

  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});