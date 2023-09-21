document.addEventListener('DOMContentLoaded', function () {
    const notesList = document.getElementById('notes-list');
    const noteInput = document.getElementById('note-input');
    const saveButton = document.getElementById('save-button');
    const updateMessage = document.getElementById('update-message');
    
    // Load saved notes from local storage
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];

    // Display saved notes
    function displayNotes() {
        notesList.innerHTML = '';
        savedNotes.forEach((note, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${note}</span>
                <button class="delete-button" data-index="${index}">Delete</button>
            `;
            notesList.appendChild(listItem);
        });
    }

    // Save a new note
    saveButton.addEventListener('click', function () {
        const noteText = noteInput.value.trim();
        if (noteText !== '') {
            savedNotes.push(noteText);
            localStorage.setItem('notes', JSON.stringify(savedNotes));
            noteInput.value = '';
            displayNotes();
        }
    });

    // Delete a note
    notesList.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-button')) {
            const index = event.target.getAttribute('data-index');
            savedNotes.splice(index, 1);
            localStorage.setItem('notes', JSON.stringify(savedNotes));
            displayNotes();
        }
    });

    // Display update message
    function displayUpdateMessage() {
        updateMessage.textContent = 'Site updated!';
        setTimeout(() => {
            updateMessage.textContent = 'No updates yet.';
        }, 5000);
    }

    // Initially display notes and set up update message
    displayNotes();
    displayUpdateMessage();
});
