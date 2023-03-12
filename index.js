import fetch from "node-fetch";

const generateMessage = (message) =>{
    return {role : "user", content : String.raw`Simple response in 150 characters for the message for frontend : : ${message}`}
}
export default async function getAIMsg(message,apiKey){
    const messageObj = generateMessage(message);
    const apiRequestBody = {
        "model" : "gpt-3.5-turbo",
        "messages" : [messageObj],
    }

    try{
        const gptResponse = await fetch("https://api.openai.com/v1/chat/completions",{
            method : "POST",
            headers : {
                "Authorization" : `Bearer ${apiKey}`,
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(apiRequestBody)
        });
        const data = await gptResponse.json();
        return data.choices[0].message.content;
    }
    catch(error){
        return "Error fetching message "+error.message;
    }
}
