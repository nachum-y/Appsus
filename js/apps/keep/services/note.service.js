// The noteService manages the notes
// Here is an array of some notes:

// TODO: There are several types of notes, start with implementing:
import { utilService } from '../../../services/util-service.js'
import {storageService} from '../../../services/async-storage-service.js'

export const noteService = {
    query,
    addNewNote,
    removeNoteById,
    copyNote,
    togglepin,
    get
}
const NOTES_KEY = 'NOTES_DB'

const gNotes = [ 
{   id: "n101", 
    type: "note-txt", 
    isPinned: true, 
    info: { 
        txt: ["Fullstack Me Baby!"] 
    } 
},
{   id: "n102", 
    type: "note-img",
    info: { 
        url: "https://media.giphy.com/media/jUwpNzg9IcyrK/giphy.gif", 
        title: "homer simpson" }, 
    style: { 
        backgroundColor: "#00d" 
    } 
},
{   id: "n103", 
    type: "note-todos", 
    info: { 
        label: "Get my stuff together", 
        todos: [ 
            { txt: "Driving liscence", doneAt: null }, 
            { txt: "Coding power", doneAt: 187111111 } 
        ] 
    }
},
{   id: "n104", 
    type: "note-img",
    info: { 
        url: "https://media.giphy.com/media/egHTZeNZpuP1ep4C5f/giphy.gif", 
        title: "Bye Kanye" }, 
},
{   id: "n105", 
    type: "note-txt", 
    isPinned: true, 
    info: { 
        txt: ["Hell On keys"] 
    } 
},
{   id: "n106", 
    type: "note-img",
    info: { 
        url: "https://media.giphy.com/media/zMCfqXkwjmTO8/giphy.gif", 
        title: "What is Happiness" }, 
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
    return storageService.remove(NOTES_KEY,noteId)
}

function addNewNote(note){
    const newNote = {type: note.type, info: _prepareNoteInfo(note)}
    return storageService.post(NOTES_KEY, newNote)
}

function copyNote(note) {
    const {type, info} = note 
    return storageService.post(NOTES_KEY, {type, info})
}

function togglepin(note){
    
    if (note.isPinned === undefined){
        note.isPinned = true
    } else {
        note.isPinned = !note.isPinned
    }
    return storageService.put(NOTES_KEY, note)

}

function _prepareNoteInfo(note) {
    const {type, data} = note
    switch (type) {
        case 'note-txt':
        return {txt: data.split('\n')}
        case 'note-img':
            return  {url: data, title: "My Special Image"}
        case 'note-todos':
            let todos = []
            data.split(',').map(txt => {
                let todo = {txt, doneAt: null}
                todos.push(todo)
            })
            return {label: "Get my stuff together", todos}
    }
}
