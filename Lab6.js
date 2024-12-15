// Initialize counters and comments array
let likeCount = 100;
let dislikeCount = 20;
let comments = [];

// Elements
const likeBtn = document.getElementById("like-btn");
const dislikeBtn = document.getElementById("dislike-btn");
const likeCountSpan = document.getElementById("like-count");
const dislikeCountSpan = document.getElementById("dislike-count");
const commentInput = document.getElementById("comment-input");
const submitBtn = document.getElementById("submit-btn");
const clearBtn = document.getElementById("clear-btn");
const commentsSection = document.getElementById("comments-section");

// Like button functionality
likeBtn.addEventListener("click", () => {
    likeCount++;
    likeCountSpan.textContent = likeCount;
});

// Dislike button functionality
dislikeBtn.addEventListener("click", () => {
    dislikeCount++;
    dislikeCountSpan.textContent = dislikeCount;
});

// Submit comment functionality
submitBtn.addEventListener("click", () => {
    const commentText = commentInput.value.trim();
    if (commentText) {
        comments.push(commentText);
        displayComments();
        commentInput.value = "";
    }
});

// Clear comments functionality
clearBtn.addEventListener("click", () => {
    comments = [];
    displayComments();
});

// Display comments
function displayComments() {
    commentsSection.innerHTML = comments
        .map(comment => `<div class="comment">${comment}</div>`)
        .join("");
}

// Initial load
displayComments();
