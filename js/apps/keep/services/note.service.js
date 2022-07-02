// The noteService manages the notes
// Here is an array of some notes:

// TODO: There are several types of notes, start with implementing:
import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/async-storage-service.js'

export const noteService = {
    query,
    addNewNote,
    removeNoteById,
    copyNote,
    togglepin,
    get,
    updateNote,
}
const NOTES_KEY = 'NOTES_DB'

const gNotes = [
    {
        id: "m101",
        type: "note-img",
        isPinned: false,
        info: {
            url: "https://media.giphy.com/media/D12CsrRNv7gL6/giphy.gif",
            title: "me After"
        },
        
    },
    {
        id: "m102",
        type: "note-img",
        isPinned: true,
        info: {
            url: "https://media.giphy.com/media/7eAvzJ0SBBzHy/giphy.gif",
            title: "Me before Sprint 3"
        },
        style: {backgroundColor: "#fccfe8"}
    },
    {
        id: "m103",
        type: "note-todos",
        info: {
            title: "Coding Academy Sprint 3",
            todos: [
                { txt: "sleep", doneAt: null },
                { txt: "eat", doneAt: null },
                { txt: "workout", doneAt: null },
                { txt: "support video notes", doneAt: 1656784270853 },
                { txt: "support todo notes", doneAt: 1656784270853 }
            ]
        }
    },
    {
        id: "m104",
        type: "note-video",
        info: {
            url: "https://www.youtube.com/watch?v=6hzrDeceEKc&ab_channel=Oasis",
            title: "Wonderwall"
        },
        style: {backgroundColor: "#cbf2fa"}
    },
     {
        id: "m105",
        type: "note-txt",
        isPinned: true,
        info: {
            txt: ['Two things are infinite:','The universe and...','Coding Academy projects']
        }
    },
    {
        id: "m106",
        type: "note-img",
        isPinned: false,
        info: {
            url: "https://media.giphy.com/media/rxnhSy4J3KyXe/giphy.gif",
            title: "Peantus"
        },
    },
    {
        id: "m107",
        type: "note-todos",
        info: {
            title: "Don't Forget",
            todos: [
                { txt: "eggs", doneAt: null },
                { txt: "milk", doneAt: null },
                { txt: "protein powder", doneAt: null },
                { txt: "apples", doneAt: null },
                { txt: "coke zero", doneAt: null },
                { txt: "wine", doneAt: null },
                { txt: "cheese", doneAt: 1656784270853 },
                { txt: "tooth paste", doneAt: 1656784270853 }
            ]
        },
        style: {backgroundColor: "#fff476"}
    },
]


_createNotes()
function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY)
    if (!notes || !notes.length || notes === 'undifined') {
        utilService.saveToStorage(NOTES_KEY, gNotes)
    }
    return notes
}

function get(noteId) {
    return storageService.get(NOTES_KEY, noteId)
}


function query() {
    return storageService.query(NOTES_KEY)
}

function removeNoteById(noteId) {
    return storageService.remove(NOTES_KEY, noteId)
}

function addNewNote(note) {
    const newNote = { type: note.type, info: _prepareNoteInfo(note) }
    return storageService.post(NOTES_KEY, newNote)
}

function copyNote(note) {
    const { type, info } = note
    return storageService.post(NOTES_KEY, { type, info })
}

function updateNote(updatedNote) {
    return storageService.put(NOTES_KEY, updatedNote)
}

function togglepin(note) {

    if (note.isPinned === undefined) {
        note.isPinned = true
    } else {
        note.isPinned = !note.isPinned
    }
    return storageService.put(NOTES_KEY, note)

}

function _prepareNoteInfo(note) {
    const { type, data } = note
    switch (type) {
        case 'note-txt':
            return { txt: data.split('\n') }
        case 'note-img':
            return { url: data, title: '' }
            case 'note-video':
                return { url: data, title: '' }
        case 'note-todos':
            let todos = []
            data.split(',').map(txt => {
                let todo = { txt, doneAt: null }
                todos.push(todo)
            })
            return { title: "Get my stuff together", todos }
    }
}
