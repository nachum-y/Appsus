// The noteService manages the notes
// Here is an array of some notes:

// TODO: There are several types of notes, start with implementing:
import { utilService } from '../../../services/util-service.js'
import {storageService} from '../../../services/async-storage-service.js'

export const noteService = {
    query
}
const NOTES_KEY = 'NOTES_DB'

const gNotes = [ 
    { id: "n101", 
    type: "note-txt", 
    isPinned: true, 
    info: { 
        txt: "Fullstack Me Baby!" 
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
}]


_createNotes()
function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY)
    if (!notes || !notes.length || notes === 'undifined') {
      utilService.saveToStorage(NOTES_KEY, gNotes)
    }
    return notes
  }

function query() {
    return storageService.query(NOTES_KEY)
  }


