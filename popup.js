document.getElementById("analyze-comments").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "FETCH_COMMENTS" }, (response) => {
            if (response && response.analysis) {
                const { pros, cons, positive, negative, neutral } = response.analysis;

                document.getElementById("results").innerHTML = `
                    <div class="result-summary">
                        <h3>Analysis Summary</h3>
                        <p><strong>Positive Comments:</strong> ${positive}</p>
                        <p><strong>Negative Comments:</strong> ${negative}</p>
                        <p><strong>Neutral Comments:</strong> ${neutral}</p>
                    </div>
                    <div class="result-summary">
                        <h4>Top Pros:</h4>
                        <ul>${pros.map(pro => `<li>${pro}</li>`).join("")}</ul>
                    </div>
                    <div class="result-summary">
                        <h4>Top Cons:</h4>
                        <ul>${cons.map(con => `<li>${con}</li>`).join("")}</ul>
                    </div>
                `;
            } else {
                document.getElementById("results").innerHTML = `
                    <div class="result-summary">
                        <p style="color: red;">Error: Unable to fetch comments or comments not found.</p>
                    </div>
                `;
            }
        });
    });
});
