// Load TensorFlow.js and the toxicity model for sentiment analysis
async function loadModel() {
    const threshold = 0.9; // Confidence threshold
    return await toxicity.load(threshold);
}

async function analyzeSentimentWithTensorFlow(comments) {
    const model = await loadModel();
    const pros = [];
    const cons = [];

    for (const comment of comments) {
        const predictions = await model.classify([comment]);
        const isToxic = predictions.some(pred => pred.results[0].match);

        if (isToxic) {
            cons.push(comment); // Classify as negative if toxic
        } else {
            pros.push(comment); // Classify as positive otherwise
        }
    }

    return {
        pros: pros.slice(0, 3), // Top 3 positive comments
        cons: cons.slice(0, 3), // Top 3 negative comments
        positive: pros.length,
        negative: cons.length,
        neutral: comments.length - pros.length - cons.length
    };
}

// Listen for the "FETCH_COMMENTS" action and analyze comments
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "FETCH_COMMENTS") {
        const commentSection = document.querySelector("#comments");
        if (!commentSection) {
            sendResponse({ error: "Comment section not found." });
            return;
        }

        const comments = Array.from(
            commentSection.querySelectorAll("ytd-comment-thread-renderer #content-text")
        ).map(comment => comment.innerText);

        if (comments.length === 0) {
            sendResponse({ error: "No comments found." });
            return;
        }

        analyzeSentimentWithTensorFlow(comments).then(analysis => {
            sendResponse({ analysis });
        });

        return true; // Indicate that the response is asynchronous
    }
});
