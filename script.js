const noteContent = document.getElementById("note-content");

// Load saved note from local storage on page load
window.addEventListener("load", () => {
    const savedNote = localStorage.getItem("savedNote");
    if (savedNote) {
        noteContent.value = savedNote;
    }
});

// Save note to local storage when content changes
noteContent.addEventListener("input", () => {
    const content = noteContent.value;
    localStorage.setItem("savedNote", content);
});

// Save note to local storage when the tab is closed or refreshed
window.addEventListener("beforeunload", () => {
    const content = noteContent.value;
    localStorage.setItem("savedNote", content);
});
