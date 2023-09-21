document.addEventListener("DOMContentLoaded", function () {
    const notesList = document.getElementById("notes-list");
    const noteEditor = document.getElementById("note-editor");
    const saveButton = document.getElementById("save-button");
    const deleteButton = document.getElementById("delete-button");

    // Load saved notes from local storage
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    // Render saved notes
    function renderNotes() {
        notesList.innerHTML = "";
        savedNotes.forEach((note, index) => {
            const noteItem = document.createElement("div");
            noteItem.classList.add("note-item");
            noteItem.textContent = note;
            noteItem.addEventListener("click", () => selectNote(index));
            notesList.appendChild(noteItem);
        });
    }

    // Select a note for editing
    function selectNote(index) {
        noteEditor.value = savedNotes[index];
    }

    // Save a note
    saveButton.addEventListener("click", () => {
        const noteText = noteEditor.value.trim();
        if (noteText !== "") {
            savedNotes.push(noteText);
            localStorage.setItem("notes", JSON.stringify(savedNotes));
            renderNotes();
            noteEditor.value = "";
        }
    });

    // Delete a note
    deleteButton.addEventListener("click", () => {
        const selectedNoteIndex = savedNotes.indexOf(noteEditor.value);
        if (selectedNoteIndex !== -1) {
            savedNotes.splice(selectedNoteIndex, 1);
            localStorage.setItem("notes", JSON.stringify(savedNotes));
            renderNotes();
            noteEditor.value = "";
        }
    });

    // Initial rendering
    renderNotes();
});
