from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

client = OpenAI()

UNIVERSAL_SYSTEM_PROMPT = (
    "You are a knowledgeable, thoughtful human conversational partner. "
    "Respond naturally and helpfully to whatever the user asks."
)

@app.route("/api/chat", methods=["POST"])
def chat():
    try:
        data = request.get_json()

        user_message = data.get("message", "").strip()
        history = data.get("history", [])

        if not user_message:
            return jsonify({"error": "Empty message"}), 400

        messages = [{"role": "system", "content": UNIVERSAL_SYSTEM_PROMPT}]

        # Add conversation history
        for h in history:
            messages.append({
                "role": h["role"],
                "content": h["content"]
            })

        # Add current user message
        messages.append({"role": "user", "content": user_message})

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages,
            temperature=0.9,          # human variability
            presence_penalty=0.6,
            frequency_penalty=0.4,
            max_tokens=2000
        )

        return jsonify({
            "success": True,
            "response": response.choices[0].message.content.strip()
        })

    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "healthy"})


if __name__ == "__main__":
    app.run(debug=True, port=5000)
