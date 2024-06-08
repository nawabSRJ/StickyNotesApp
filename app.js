const addBtn = document.getElementById('plusBtn')
const main = document.querySelector('.main')
addBtn.addEventListener('click', () => {
    addNote();
})

const saveNotes = () => {
    const notes = document.querySelectorAll('.note textarea');
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)   // content in textarea
        }
    )
    console.log(data)

    // todo - save in local storage
    localStorage.setItem("notes", JSON.stringify(data))

}


// * default args. help to pass data from local storage to the note without writing extra function
// * default is kept empty for user to write in an empty note
// * otherwise if note is coming from local storage then it will carry its own content

const addNote = (text = "") => {
    const note = document.createElement('div');
    note.classList.add('note')
    // ! remember - don't copy paste the entire 'note' div , only copy what's inside of it ~ from 'tool' class div as done here : 

    note.innerHTML = `
            <div class="tool">
                <img src="./assets/trash_png.png" alt="" width="25" height="35" style="cursor: pointer; margin-right: 15px;" class="trash">
                <img src="./assets/save2.png" alt="" width="25" height="35" style="cursor: pointer;margin-right: 5px;" class="save">
            </div>
            <textarea>${text}</textarea>
    `;
    note.querySelector(".trash").addEventListener('click', () => {
        note.remove();
        saveNotes();    // ? helps to eliminate deleted Notes immediately
    })

    note.querySelector(".save").addEventListener('click', () => {
        saveNotes();
    })
    main.appendChild(note);

}
// * this function will run onload ~ self calling function
(
    function () {
        addNote("Write Here , you can add more notes!!\nDon't forget to save😂\n\nmade with❤️by Srajan")
        const lsNotes = JSON.parse(localStorage.getItem("notes"));

        lsNotes.forEach(
            (lsNote) => {
                addNote(lsNote);
            }
        )

    }
)()

