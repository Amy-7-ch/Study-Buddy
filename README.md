# 🤖 StudyBot - AI Study Assistant

A modern, beautiful chat interface for an AI-powered study assistant built with HTML, CSS, JavaScript, and Flask.

## 📁 Project Structure

```
studybot/
│
├── frontend/
│   ├── index.html          # Main HTML file
│   ├── style.css           # Styling
│   └── script.js           # JavaScript functionality
│
├── backend/
│   ├── app.py              # Flask API server
│   ├── requirements.txt    # Python dependencies
│   └── .env                # Environment variables (create this)
│
└── README.md               # This file
```

## 🚀 Setup Instructions

### Step 1: Create Project Structure

Create the following folder structure:

```bash
mkdir studybot
cd studybot
mkdir frontend backend
```

### Step 2: Frontend Setup

1. **Create `frontend/index.html`** - Copy the HTML code
2. **Create `frontend/style.css`** - Copy the CSS code
3. **Create `frontend/script.js`** - Copy the JavaScript code

### Step 3: Backend Setup

1. **Navigate to backend folder:**
```bash
cd backend
```

2. **Create `app.py`** - Copy the Flask API code

3. **Create `requirements.txt`** - Copy the dependencies

4. **Create `.env` file:**
```bash
OPENAI_API_KEY=your_actual_openai_api_key_here
```

5. **Install Python dependencies:**
```bash
pip install -r requirements.txt
```

### Step 4: Get OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new API key
5. Copy and paste it into your `.env` file

### Step 5: Run the Application

#### Start Backend Server:
```bash
cd backend
python app.py
```

The API will run on `http://localhost:5000`

#### Open Frontend:
1. Open `frontend/index.html` in your web browser
2. Or use a local server:

**Using Python:**
```bash
cd frontend
python -m http.server 8000
```
Then visit `http://localhost:8000`

**Using Node.js (if you have it):**
```bash
cd frontend
npx serve
```

**Using VS Code:**
- Install "Live Server" extension
- Right-click on `index.html`
- Select "Open with Live Server"

## 🎯 Features

### Study Modes:
- **Explain** - Get simple explanations with real-life examples
- **Summarize** - Get concise summaries with key points
- **Quiz** - Generate multiple-choice questions with answers
- **Flashcards** - Create Q&A flashcards for studying
- **Custom** - Ask anything and get helpful responses

### UI Features:
- Modern gradient design
- Smooth animations
- Responsive layout
- Typing indicators
- Quick reply buttons
- Beautiful message bubbles
- Auto-scroll functionality

## 🛠️ Customization

### Change Colors:
Edit the gradient colors in `style.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Change AI Model:
Edit the model in `backend/app.py`:
```python
model="gpt-4o-mini"  # Change to "gpt-4" or other models
```

### Adjust Response Length:
Edit `max_tokens` in `backend/app.py`:
```python
max_tokens=1500  # Increase or decrease
```

## 🔧 Troubleshooting

### CORS Issues:
If you get CORS errors, make sure:
1. Flask-CORS is installed
2. The API URL in `script.js` matches your backend URL

### API Key Issues:
- Make sure `.env` file is in the `backend` folder
- No spaces around the `=` sign
- API key is valid and has credits

### Port Already in Use:
Change the port in `backend/app.py`:
```python
app.run(debug=True, host='0.0.0.0', port=5001)  # Use different port
```

And update the API URL in `frontend/script.js`:
```javascript
const API_URL = 'http://localhost:5001/api/chat';
```

## 📝 Testing Without Backend

The frontend includes a demo mode that works without the backend. It will generate sample responses for testing the UI.

To enable real API responses:
1. Start the backend server
2. In `script.js`, uncomment the actual API call code
3. Comment out the demo response code

## 🌟 Production Deployment

### Frontend:
Deploy to:
- Netlify
- Vercel
- GitHub Pages

### Backend:
Deploy to:
- Heroku
- Railway
- Render
- PythonAnywhere

Don't forget to:
1. Update the `API_URL` in `script.js` to your production API URL
2. Set environment variables in your hosting platform
3. Use proper security measures (rate limiting, authentication, etc.)

## 📄 License

This project is open source and available under the MIT License.

## 💡 Support

For issues or questions:
- Check the troubleshooting section
- Review the OpenAI API documentation
- Check Flask documentation

## 🎨 Credits

Inspired by modern chat interfaces like LeadBot and designed for an optimal study experience.

---

**Happy Studying! 🎓**