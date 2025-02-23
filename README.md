# 🎭 YouTube Sentiment Analyzer 🎥🔍

## 🌟 Overview
The **YouTube Sentiment Analyzer** is a powerful browser extension that fetches comments from YouTube videos and analyzes their sentiment using **TensorFlow.js** and the **toxicity model**. It helps users quickly gauge the overall sentiment of comments on any video! 🚀

## ✨ Features
- 🔍 Fetches comments from the currently open YouTube video.
- 🤖 Uses **machine learning (TensorFlow.js)** for sentiment analysis.
- 📊 Displays the percentage of **toxic** and **non-toxic** comments.
- 🎨 Simple and user-friendly interface.

## 🛠 Installation
### 🖥️ Manual Installation (Developer Mode)
1. 📥 **Download or clone** this repository.
2. 🌍 Open **Google Chrome** (or any Chromium-based browser).
3. ⚙️ Go to `chrome://extensions/`.
4. 🔧 Enable **Developer mode** (top right corner).
5. 📂 Click **Load unpacked** and select the extension folder.
6. ✅ The extension is now installed and ready to use!

## 🚀 Usage
1. 🎥 Open any **YouTube video**.
2. 📌 Click on the **YouTube Sentiment Analyzer** extension icon.
3. 🏆 Click the **"Analyze Comments"** button.
4. 📊 Instantly view the **sentiment analysis results**.

## 📂 File Structure
```
📂 youtube-sentiment-analyzer
├── 📄 manifest.json        # Extension configuration
├── 🏠 popup.html           # Popup UI
├── ⚙️ popup.js             # Handles UI interactions
├── 🏗 content.js           # Injected script to fetch YouTube comments
├── 🎨 styles.css           # Popup styling
├── 🖼 icon.png             # Extension icon
└── 📖 README.md            # Project documentation
```

## 💻 Technologies Used
- ⚡ **JavaScript (ES6+)**
- 🧠 **TensorFlow.js** (for AI-powered sentiment analysis)
- 🎨 **HTML & CSS** (for UI styling)
- 🌐 **Chrome Extensions API**

## 🔒 Permissions
The `manifest.json` requests the following permissions:
```json
{
  "permissions": [
    "activeTab",
    "https://www.youtube.com/*"
  ]
}
```
These are required to fetch YouTube comments and analyze them in real time. 🔎

## 🛠 Troubleshooting
- ❌ **Button not working?** Open **Developer Console (F12 > Console)** and check for errors.
- 🔄 **Extension not loading?** Ensure it is enabled in **chrome://extensions/**.
- 📌 **Comments not fetching?** Make sure you are on a YouTube video page before clicking analyze.

## 🌱 Future Improvements
- 🚀 Improve **sentiment analysis accuracy** with advanced NLP models.
- 🌍 **Multi-language support** for a broader reach.
- 📜 **Store past sentiment analysis results** for comparison.

## 📜 License
This project is licensed under the **MIT License**. 🔓



