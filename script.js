const postForm = document.getElementById("postForm");
const postContent = document.getElementById("postContent");
const posts = document.getElementById("posts");

postForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const content = postContent.value.trim();

    if (content === "") {
        return;
    }

    const post = document.createElement("div");
    post.className = "post";

    post.innerHTML = `
        <h3>Deepti</h3>
        <p>${content}</p>
        <button onclick="likePost(this)">❤️ Like</button>
        <button onclick="deletePost(this)">🗑️ Delete</button>
    `;

    posts.prepend(post);

    postContent.value = "";
});

function likePost(button) {
    button.textContent =
        button.textContent === "❤️ Like"
            ? "❤️ Liked"
            : "❤️ Like";
}

function deletePost(button) {
    button.parentElement.remove();
}
