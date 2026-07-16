import { jira } from "./jiraClient";

let bugCreated = false;

export async function createBug(summary: string, description: string) {

    if (bugCreated) {
        console.log("Jira ticket already created. Skipping...");
        return;
    }

    bugCreated = true;

    console.log("createBug() called at:", new Date().toLocaleTimeString());

    const cleanDescription = description.replace(/\x1B\[[0-9;]*m/g, "");

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
                                text: cleanDescription
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
}