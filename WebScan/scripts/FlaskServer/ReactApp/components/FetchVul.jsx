import { OpenRouter } from "@openrouter/sdk";



const ReturnExpl = async (log,key) => {
    const openrouter = new OpenRouter({
        apiKey: key
    });
    const content = `
You are a cybersecurity assistant that explains Nikto web vulnerability scan logs to non-technical users.

Analyze the following Nikto log and explain it using simple, everyday language that anyone can understand.

**Instructions:**
- Explain the main finding in plain English without technical jargon.
- State what it means and whether it indicates a potential security risk.
- Briefly explain what could happen if the issue is exploited, if applicable.
- Suggest a simple, practical way to fix or address the issue.
- Do not assume a vulnerability exists unless the log provides sufficient evidence.
- If the log shows an informational finding, explain it without falsely presenting it as a vulnerability.
- If the log shows a connection error or failed scan, explain that the scan could not verify the target rather than inventing a vulnerability.
- Keep the entire response under 60 words.
- Do not repeat the raw log or include unnecessary technical details.

**Use this exact JSON output format:**

{
"meaning": [What the finding means in simple words.]",
"risk": "[Low, Medium, High, or Unknown — with a brief explanation.]",
"fix": "[One simple, practical recommendation.]"
}

**Nikto Log:**
${log}

`
    try {
        const response = await openrouter.chat.send({
            chatRequest: {
                model: "openrouter/free",
                messages: [
                    {
                        role: "user",
                        content: content
                    }
                ],
                stream: false
            }
        });

        const text = JSON.parse(response.choices[0]?.message?.content)
        return text;
    } catch (error) {
        return ({
            "meaning":"Server error! Re-Scan or try another",
            "risk":"Server error! Re-Scan or try another",
            "fix":"Server error! Re-Scan or try another"
        })
    }
}

export default ReturnExpl;