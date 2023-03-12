# Respond AI 💪
<hr/>

Tired of complicated error messages?😵 Yes, me to.

So here is Response AI to turn them into simple, human-readable error codes using the famous ChatGPT🤖

## Installation

```bash
npm install respondai
```

## Setup

**Step 1 :**

Create an account with OpenAI here 👉: [OpenAI](https://openai.com)

**Step 2 :**
Create your first API key for this app : [API Key](https://platform.openai.com/account/api-keys)

> 🚨Note : Be sure to copy this API key somewhere as you will not be able to view it again

**Step 3 :**
Use our ```getAIMsg``` function to generate a human readable error message.

```javascript
import getResponse from "respondai"

const getData = () => {

    try{
        // some code that could generate error
    }
    catch(error){
        const errorResponse = getAIMsg(error.message, API_KEY);
        console.error(errorResponse); // simpler, human understandable error message
    }

    
}

```

To contribute : 
Follow me on Github : [thevinitgupta ✅](https://github.com/thevinitgupta)
