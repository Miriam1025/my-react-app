/* eslint-env node */
// Load .env variables when testing locally
require('dotenv').config();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: body.message }
      ],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        reply: response.data.choices[0].message.content,
      }),
    };
  } catch (error) {
    console.error("OpenAI API error:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Something went wrong: " + error.message,
      }),
    };
  }
};
