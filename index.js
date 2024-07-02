document.addEventListener("DOMContentLoaded", function() {
    const backgroundMusic = document.getElementById('background-music');
    const musicButton = document.getElementById('music-button');
    
    musicButton.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicButton.classList.remove('play');
            musicButton.classList.add('pause');
        } else {
            backgroundMusic.pause();
            musicButton.classList.remove('pause');
            musicButton.classList.add('play');
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const quoteText = document.getElementById('quote');
    const quoteAuthor = document.getElementById('author');
    const newQuoteButton = document.getElementById('new-quote');

    async function fetchQuote() {
        try {
            const response = await fetch('https://api.quotable.io/random');
            if (!response.ok) {
                throw new Error('Failed to fetch quote');
            }
            const data = await response.json();
            quoteText.textContent = `"${data.content}"`;
            quoteAuthor.textContent = `- ${data.author}`;
        } catch (error) {
            quoteText.textContent = "An error occurred while fetching the quote.";
            quoteAuthor.textContent = "";
            console.error("Error fetching the quote: ", error);
        }
    }

    newQuoteButton.addEventListener('click', fetchQuote);

    // Fetch the first quote when the page loads
    fetchQuote();
});


