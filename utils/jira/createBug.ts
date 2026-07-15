import { jira } from "./jiraClient";

export async function createBug(summary: string, description: string) {

    try {

        const response = await jira.post("/rest/api/3/issue", {

            fields: {

                project: {
                    key: process.env.JIRA_PROJECT
                },

                summary: summary,

                description: {
                    type: "doc",
                    version: 1,
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: description
                                }
                            ]
                        }
                    ]
                },

                issuetype: {
                    name: "Task"
                }

            }

        });

        console.log("Bug Created Successfully");
        console.log(response.data);

    } catch (error: any) {

        console.log("========== JIRA ERROR ==========");
        console.log(error.response?.data);
        console.log("===============================");

        throw error;

    }

}