const router = require("express").Router();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/", async (req, res) => {
  try {
    const userMessage = req.body.message;

    if (!userMessage) {
      return res.status(400).json({
        error: "Missing message in request body.",
      });
    }
    console.log(userMessage);

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: userMessage,
        },
      ],
    });
    console.log("THE RESPONSE:", response);
    res.json({ reply: response.choices[0].message.content }); // לגרסה ישנה
  } catch (err) {
    if (err.status === 429) {
      return res.status(429).json({
        error:
          "Rate limit exceeded. Please try again later or upgrade your plan.",
      });
    }

    console.error("OpenAI Error:", err);
    res.status(500).json({ error: "Something went wrong with OpenAI" });
  }
});

router.get("/", (req, res) => {
  res.send("Get a Response.");
});

module.exports = router;
