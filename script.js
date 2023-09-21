document.addEventListener('DOMContentLoaded', function () {
    const notesList = document.getElementById('notes-list');
    const noteText = document.getElementById('note-text');
    const addNoteButton = document.getElementById('add-note');
    const clearNotesButton = document.getElementById('clear-notes');

    addNoteButton.addEventListener('click', function () {
        const noteContent = noteText.value.trim();
        if (noteContent !== '') {
            const li = document.createElement('li');
            li.textContent = noteContent;
            notesList.appendChild(li);
            noteText.value = '';
        }
    });

    clearNotesButton.addEventListener('click', function () {
        notesList.innerHTML = '';
    });
});
