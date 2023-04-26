const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const cors = require("cors");
require("dotenv").config();
const express = require("express");
const app = express();
const fetch = require("node-fetch");

express.urlencoded({ extended: false });
app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

//AI Chat

app.post("/aichat", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      }),
    })
      .then((res) => res.json())
      .then((data) =>
        res.json({
          role: data.choices[0].message.role,
          content: data.choices[0].message.content,
        })
      );
  } catch (err) {
    res.json({ err: err.message });
  }
});

//ask questions
app.post("/ask", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 3800,
        temperature: 0,
      }),
    })
      .then((res) => res.json())
      .then((data) => res.json(data.choices[0].text.trim()));
  } catch (err) {
    res.json({ err: err.message });
  }
});

//bug fixer
app.post("/bugfixer", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 3800,
        temperature: 0,
      }),
    })
      .then((res) => res.json())
      .then((data) => res.json(data.choices[0].text.trim()));
  } catch (err) {
    res.json({ err: err.message });
  }
});

//Time Complexity

app.post("/complexity", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 3800,
        temperature: 0,
      }),
    })
      .then((res) => res.json())
      .then((data) => res.json(data.choices[0].text.trim()));
  } catch (err) {
    res.json({ err: err.message });
  }
});

//AI Image generator
app.post("/img", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          prompt: prompt,
          n: 1,
          size: "1024x1024",
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => res.json(data.data[0].url));
  } catch (err) {
    res.json({ err: err.message });
  }
});

//js Bot
app.post("/bot", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 3800,
        temperature: 0,
      }),
    })
      .then((res) => res.json())
      .then((data) => res.json(data.choices[0].text.trim()));
  } catch (err) {
    res.json({ err: err.message });
  }
});

//answer the quiz questions
app.post("/quiz", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 3800,
        temperature: 0,
      }),
    })
      .then((res) => res.json())
      .then((data) => res.json(data.choices[0].text.trim()));
  } catch (err) {
    res.json({ err: err.message });
  }
});

//generate sql commands
app.post("/sql", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 3800,
        temperature: 0,
      }),
    })
      .then((res) => res.json())
      .then((data) => res.json(data.choices[0].text.trim()));
  } catch (err) {
    res.json({ err: err.message });
  }
});

app.listen(process.env.PORT, () => console.log(`Server Run Successfully`));
