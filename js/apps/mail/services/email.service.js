// Model - start with a basic model of emails
import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/async-storage-service.js'
export const mailService = {
    getAllMails,
    query,
    removeMailById,
    addNewMail,
    setFilter,
    getEmptyMail,
    get,
    save,



}
const MAILS_KEY = 'mailsDB'


const email = {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com'
}

// Also, in your email service have a basic user:
const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

// const loggedinUser = { email: 'user@appsus.com', fullname: 'Mahatma Appsus' }
const criteria = {
    status: 'inbox/sent/trash/draft',
    txt: 'puki', // no need to support complex text search
    isRead: true, // (optional property, if missing: show all)
    isStared: true, // (optional property, if missing: show all)
    lables: ['important', 'romantic'] // has any of the labels
}


function save(mail) {
    if (mail.id) return storageService.put(MAILS_KEY, mail)
    else return storageService.post(MAILS_KEY, mail)
}




function setFilter() {
    return ({
        txt: null,
        inbox: null,
        unread: null,
        sent: null,
        type: null,
    })
}

_createNotes()
function _createNotes() {
    const gMails = getAllMails()
    let mails = utilService.loadFromStorage(MAILS_KEY)
    if (!mails || !mails.length || mails === 'undifined') {
        utilService.saveToStorage(MAILS_KEY, gMails)
    }
    return mails
}

function query() {
    return storageService.query(MAILS_KEY)
}

function removeMailById(mailId) {
    return storageService.remove(MAILS_KEY, mailId)
}

function getEmptyMail() {
    const newMail = {
        to: '',
        subject: '',
        body: '',
    }
    return newMail
}

function get(mailId) {
    return storageService.get(MAILS_KEY, mailId)
}
function addNewMail(mail) {
    const newMail = {
        to: mail.recipients,
        subject: mail.subject,
        body: mail.body,
        isRead: true,
        sentAt: Date.now(),
        email: 'user@appsus.com',
        fullname: 'Mahatma Appsus',
        lables: []

    }
    return storageService.post(MAILS_KEY, newMail)
}



function getAllMails() {
    const mails = [
        {
            "id": 8751,
            "fullname": "Veda Aguirre",
            "subject": "quis",
            "body": "felis. Donec",
            "isRead": true,
            "sentAt": 1632798783000,
            "to": "user@appsus.com",
            "email": "odio@yahoo.couk",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 8630,
            "fullname": "Ian West",
            "subject": "magna, malesuada vel,",
            "body": "magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae",
            "isRead": true,
            "sentAt": 1646917941000,
            "to": "user@appsus.com",
            "email": "a.magna@aol.couk",
            "categories": "social",
            "lables": []
        },
        {
            "id": 7581,
            "fullname": "Drake Whitaker",
            "subject": "sapien molestie orci",
            "body": "amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas",
            "isRead": true,
            "sentAt": 1637466556000,
            "to": "user@appsus.com",
            "email": "sagittis.augue.eu@icloud.ca",
            "categories": "social",
            "lables": []
        },
        {
            "id": 7173,
            "fullname": "Ruth Jensen",
            "subject": "id,",
            "body": "enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas",
            "isRead": true,
            "sentAt": 1637840282000,
            "to": "user@appsus.com",
            "email": "magnis.dis@google.couk",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 6438,
            "fullname": "Wilma Holmes",
            "subject": "netus et",
            "body": "arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
            "isRead": true,
            "sentAt": 1644905851000,
            "to": "user@appsus.com",
            "email": "magna.ut.tincidunt@outlook.ca",
            "categories": "social",
            "lables": []
        },
        {
            "id": 6184,
            "fullname": "Noel Meadows",
            "subject": "dictum ultricies ligula.",
            "body": "orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
            "isRead": true,
            "sentAt": 1643566700000,
            "to": "user@appsus.com",
            "email": "dictum.eu@google.edu",
            "categories": "social",
            "lables": []
        },
        {
            "id": 3592,
            "fullname": "Amena Leonard",
            "subject": "euismod ac,",
            "body": "aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus",
            "isRead": true,
            "sentAt": 1646045029000,
            "to": "user@appsus.com",
            "email": "purus@yahoo.net",
            "categories": "social",
            "lables": []
        },
        {
            "id": 530,
            "fullname": "Ivan Talley",
            "subject": "ipsum. Phasellus vitae mauris",
            "body": "sed libero. Proin sed turpis nec mauris blandit",
            "isRead": true,
            "sentAt": 1645853729000,
            "to": "user@appsus.com",
            "email": "velit.justo@aol.org",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 5938,
            "fullname": "Roanna Owens",
            "subject": "sodales at,",
            "body": "nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac",
            "isRead": true,
            "sentAt": 1635354566000,
            "to": "user@appsus.com",
            "email": "nunc.sed@yahoo.com",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 5979,
            "fullname": "Colt Barrera",
            "subject": "eu elit.",
            "body": "erat",
            "isRead": true,
            "sentAt": 1638569669000,
            "to": "user@appsus.com",
            "email": "ante.blandit.viverra@outlook.couk",
            "categories": "social",
            "lables": []
        },
        {
            "id": 9903,
            "fullname": "Rhea Perry",
            "subject": "mauris erat",
            "body": "amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis",
            "isRead": true,
            "sentAt": 1631657006000,
            "to": "user@appsus.com",
            "email": "et@outlook.edu",
            "categories": "social",
            "lables": []
        },
        {
            "id": 2568,
            "fullname": "Tatyana Booth",
            "subject": "vitae risus. Duis a",
            "body": "mattis velit justo nec",
            "isRead": true,
            "sentAt": 1653305270000,
            "to": "user@appsus.com",
            "email": "ac@google.edu",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 5592,
            "fullname": "Beau Arnold",
            "subject": "tincidunt vehicula",
            "body": "justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel,",
            "isRead": true,
            "sentAt": 1651799847000,
            "to": "user@appsus.com",
            "email": "nec.urna@icloud.net",
            "categories": "social",
            "lables": []
        },
        {
            "id": 9974,
            "fullname": "Rebecca Tran",
            "subject": "mauris ut",
            "body": "magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus.",
            "isRead": true,
            "sentAt": 1629245208000,
            "to": "user@appsus.com",
            "email": "amet@protonmail.com",
            "categories": "social",
            "lables": []
        },
        {
            "id": 5821,
            "fullname": "Madeson Maxwell",
            "subject": "consequat dolor vitae",
            "body": "nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet.",
            "isRead": true,
            "sentAt": 1640194013000,
            "to": "user@appsus.com",
            "email": "nec.ligula@aol.edu",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 8579,
            "fullname": "Jolie Brady",
            "subject": "Cras dictum ultricies",
            "body": "dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere",
            "isRead": true,
            "sentAt": 1653696189000,
            "to": "user@appsus.com",
            "email": "egestas@hotmail.ca",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 4846,
            "fullname": "Bethany Mack",
            "subject": "felis eget varius",
            "body": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu",
            "isRead": true,
            "sentAt": 1652319563000,
            "to": "user@appsus.com",
            "email": "condimentum@outlook.net",
            "categories": "social",
            "lables": []
        },
        {
            "id": 854,
            "fullname": "Joy Hyde",
            "subject": "metus facilisis",
            "body": "euismod enim. Etiam",
            "isRead": true,
            "sentAt": 1645833323000,
            "to": "user@appsus.com",
            "email": "et.rutrum@yahoo.com",
            "categories": "social",
            "lables": []
        },
        {
            "id": 2652,
            "fullname": "Kibo Berger",
            "subject": "at, libero. Morbi",
            "body": "dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam",
            "isRead": true,
            "sentAt": 1653184503000,
            "to": "user@appsus.com",
            "email": "sapien.cras@protonmail.couk",
            "categories": "social",
            "lables": []
        },
        {
            "id": 434,
            "fullname": "Scott Gross",
            "subject": "Fusce mi lorem,",
            "body": "eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper",
            "isRead": true,
            "sentAt": 1630899279000,
            "to": "user@appsus.com",
            "email": "nulla.in@protonmail.edu",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 4953,
            "fullname": "Len Haney",
            "subject": "lobortis",
            "body": "interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt",
            "isRead": true,
            "sentAt": 1649538928000,
            "to": "user@appsus.com",
            "email": "enim@google.couk",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 7813,
            "fullname": "Wanda Coleman",
            "subject": "Nulla dignissim. Maecenas",
            "body": "mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu.",
            "isRead": true,
            "sentAt": 1631453492000,
            "to": "user@appsus.com",
            "email": "fringilla.mi.lacinia@google.couk",
            "categories": "social",
            "lables": []
        },
        {
            "id": 9749,
            "fullname": "Gretchen Roman",
            "subject": "euismod ac,",
            "body": "scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a",
            "isRead": true,
            "sentAt": 1631456258000,
            "to": "user@appsus.com",
            "email": "elit.pretium@google.org",
            "categories": "social",
            "lables": []
        },
        {
            "id": 6742,
            "fullname": "Sybil Mullen",
            "subject": "scelerisque neque sed sem",
            "body": "facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget,",
            "isRead": true,
            "sentAt": 1642387038000,
            "to": "user@appsus.com",
            "email": "at.auctor@aol.couk",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 6095,
            "fullname": "Bernard Madden",
            "subject": "Vivamus euismod",
            "body": "est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis",
            "isRead": true,
            "sentAt": 1631178556000,
            "to": "user@appsus.com",
            "email": "elit.aliquam.auctor@icloud.ca",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 1457,
            "fullname": "Noel Vega",
            "subject": "nec, euismod in,",
            "body": "non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate",
            "isRead": true,
            "sentAt": 1625581795000,
            "to": "user@appsus.com",
            "email": "id@google.couk",
            "categories": "social",
            "lables": []
        },
        {
            "id": 7566,
            "fullname": "Amethyst Mcguire",
            "subject": "tristique",
            "body": "nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo",
            "isRead": true,
            "sentAt": 1648661675000,
            "to": "user@appsus.com",
            "email": "amet.consectetuer.adipiscing@icloud.net",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 3731,
            "fullname": "Tallulah Dotson",
            "subject": "convallis est, vitae sodales",
            "body": "lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
            "isRead": true,
            "sentAt": 1625751798000,
            "to": "user@appsus.com",
            "email": "ipsum.leo@icloud.com",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 6743,
            "fullname": "Paul Paul",
            "subject": "auctor",
            "body": "adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat,",
            "isRead": true,
            "sentAt": 1636367919000,
            "to": "user@appsus.com",
            "email": "nisl.sem@hotmail.edu",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 8777,
            "fullname": "Kerry Wright",
            "subject": "egestas hendrerit",
            "body": "et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem",
            "isRead": true,
            "sentAt": 1625491618000,
            "to": "user@appsus.com",
            "email": "lorem.donec.elementum@aol.edu",
            "categories": "social",
            "lables": []
        },
        {
            "id": 1330,
            "fullname": "Ralph Kramer",
            "subject": "vulputate velit eu",
            "body": "pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et",
            "isRead": true,
            "sentAt": 1644754600000,
            "to": "user@appsus.com",
            "email": "porttitor.eros@google.edu",
            "categories": "social",
            "lables": []
        },
        {
            "id": 3472,
            "fullname": "Levi Emerson",
            "subject": "mi, ac",
            "body": "ac nulla. In tincidunt congue turpis. In condimentum.",
            "isRead": true,
            "sentAt": 1645726916000,
            "to": "user@appsus.com",
            "email": "convallis.ante@yahoo.edu",
            "categories": "social",
            "lables": []
        },
        {
            "id": 7015,
            "fullname": "Chanda Bonner",
            "subject": "id sapien. Cras",
            "body": "purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin",
            "isRead": true,
            "sentAt": 1641972909000,
            "to": "user@appsus.com",
            "email": "luctus@yahoo.couk",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 808,
            "fullname": "Bell Stuart",
            "subject": "orci, adipiscing non,",
            "body": "Ut semper pretium neque. Morbi quis urna. Nunc quis",
            "isRead": true,
            "sentAt": 1641748346000,
            "to": "user@appsus.com",
            "email": "fermentum.fermentum.arcu@protonmail.ca",
            "categories": "social",
            "lables": []
        },
        {
            "id": 7348,
            "fullname": "Tasha Molina",
            "subject": "egestas, urna",
            "body": "vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed,",
            "isRead": true,
            "sentAt": 1647703486000,
            "to": "user@appsus.com",
            "email": "ac.sem.ut@yahoo.com",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 6811,
            "fullname": "Oprah Mccall",
            "subject": "aliquet. Proin velit. Sed",
            "body": "ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum",
            "isRead": true,
            "sentAt": 1647734733000,
            "to": "user@appsus.com",
            "email": "scelerisque@protonmail.couk",
            "categories": "social",
            "lables": []
        },
        {
            "id": 7228,
            "fullname": "Alexis York",
            "subject": "nisi.",
            "body": "non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida",
            "isRead": true,
            "sentAt": 1653944199000,
            "to": "user@appsus.com",
            "email": "feugiat.sed@aol.couk",
            "categories": "social",
            "lables": []
        },
        {
            "id": 9730,
            "fullname": "Driscoll Finley",
            "subject": "est. Mauris eu turpis.",
            "body": "suscipit nonummy. Fusce fermentum fermentum",
            "isRead": true,
            "sentAt": 1647347094000,
            "to": "user@appsus.com",
            "email": "non.lobortis@google.ca",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 5044,
            "fullname": "Ray Vega",
            "subject": "senectus et netus",
            "body": "Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a",
            "isRead": true,
            "sentAt": 1647597427000,
            "to": "user@appsus.com",
            "email": "congue.in.scelerisque@yahoo.edu",
            "categories": "social",
            "lables": []
        },
        {
            "id": 4484,
            "fullname": "Melodie Case",
            "subject": "malesuada",
            "body": "tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit",
            "isRead": true,
            "sentAt": 1653618284000,
            "to": "user@appsus.com",
            "email": "metus@protonmail.org",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 7980,
            "fullname": "Bruce Dodson",
            "subject": "elementum",
            "body": "dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam",
            "isRead": true,
            "sentAt": 1632869279000,
            "to": "user@appsus.com",
            "email": "lacus.aliquam@protonmail.net",
            "categories": "social",
            "lables": []
        },
        {
            "id": 2717,
            "fullname": "Simone Wade",
            "subject": "ullamcorper, velit",
            "body": "vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida.",
            "isRead": true,
            "sentAt": 1630937766000,
            "to": "user@appsus.com",
            "email": "vivamus@aol.com",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 1770,
            "fullname": "Elmo Bryant",
            "subject": "purus mauris",
            "body": "ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede,",
            "isRead": true,
            "sentAt": 1649026388000,
            "to": "user@appsus.com",
            "email": "curabitur.ut.odio@icloud.net",
            "categories": "social",
            "lables": []
        },
        {
            "id": 3133,
            "fullname": "Maia Manning",
            "subject": "varius et,",
            "body": "sed",
            "isRead": true,
            "sentAt": 1642735892000,
            "to": "user@appsus.com",
            "email": "elementum.sem.vitae@aol.com",
            "categories": "social",
            "lables": []
        },
        {
            "id": 337,
            "fullname": "Cleo Hartman",
            "subject": "sagittis.",
            "body": "vehicula. Pellentesque tincidunt tempus risus. Donec",
            "isRead": true,
            "sentAt": 1647932034000,
            "to": "user@appsus.com",
            "email": "tristique@google.org",
            "categories": "social",
            "lables": []
        },
        {
            "id": 9336,
            "fullname": "Hedwig Farmer",
            "subject": "eget",
            "body": "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat.",
            "isRead": true,
            "sentAt": 1629097935000,
            "to": "user@appsus.com",
            "email": "quisque.porttitor@outlook.couk",
            "categories": "social",
            "lables": []
        },
        {
            "id": 6486,
            "fullname": "Janna Diaz",
            "subject": "pellentesque eget,",
            "body": "neque. Morbi quis",
            "isRead": true,
            "sentAt": 1628491771000,
            "to": "user@appsus.com",
            "email": "eget.varius@aol.ca",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 8971,
            "fullname": "Jason Morgan",
            "subject": "massa. Mauris vestibulum,",
            "body": "lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius",
            "isRead": true,
            "sentAt": 1651405789000,
            "to": "user@appsus.com",
            "email": "arcu.vivamus@hotmail.edu",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 7524,
            "fullname": "Isabelle Casey",
            "subject": "nec metus facilisis",
            "body": "aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris",
            "isRead": true,
            "sentAt": 1648753904000,
            "to": "user@appsus.com",
            "email": "augue.malesuada@protonmail.ca",
            "categories": "social",
            "lables": []
        },
        {
            "id": 6380,
            "fullname": "Kylan Sheppard",
            "subject": "Quisque",
            "body": "ullamcorper, velit in aliquet",
            "isRead": true,
            "sentAt": 1628209200000,
            "to": "user@appsus.com",
            "email": "cursus@yahoo.net",
            "categories": "social",
            "lables": []
        },
        {
            "id": 2237,
            "fullname": "Luke Castillo",
            "subject": "arcu vel quam dignissim",
            "body": "fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus.",
            "isRead": true,
            "sentAt": 1648072970000,
            "to": "user@appsus.com",
            "email": "eu@aol.com",
            "categories": "social",
            "lables": []
        },
        {
            "id": 3123,
            "fullname": "Colorado Gillespie",
            "subject": "auctor odio a",
            "body": "dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non,",
            "isRead": true,
            "sentAt": 1638562989000,
            "to": "user@appsus.com",
            "email": "risus.odio.auctor@yahoo.ca",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 4994,
            "fullname": "Ima Cline",
            "subject": "pede. Nunc sed",
            "body": "Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus",
            "isRead": true,
            "sentAt": 1627115708000,
            "to": "user@appsus.com",
            "email": "ante.iaculis@hotmail.org",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 9093,
            "fullname": "Yetta Horn",
            "subject": "congue a, aliquet vel,",
            "body": "fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
            "isRead": true,
            "sentAt": 1631774277000,
            "to": "user@appsus.com",
            "email": "a.odio@aol.com",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 8006,
            "fullname": "Lesley Ball",
            "subject": "Nullam lobortis quam",
            "body": "egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit",
            "isRead": true,
            "sentAt": 1629889983000,
            "to": "user@appsus.com",
            "email": "est.tempor.bibendum@icloud.net",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 2876,
            "fullname": "Chadwick Frederick",
            "subject": "eu, odio.",
            "body": "at, velit.",
            "isRead": true,
            "sentAt": 1641283149000,
            "to": "user@appsus.com",
            "email": "porttitor.interdum@aol.couk",
            "categories": "social",
            "lables": []
        },
        {
            "id": 9619,
            "fullname": "Jeanette Griffin",
            "subject": "Duis mi enim,",
            "body": "ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
            "isRead": true,
            "sentAt": 1640957265000,
            "to": "user@appsus.com",
            "email": "sem.elit.pharetra@google.com",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 4862,
            "fullname": "Daphne Cole",
            "subject": "cursus luctus,",
            "body": "varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis.",
            "isRead": true,
            "sentAt": 1639833733000,
            "to": "user@appsus.com",
            "email": "dui.cum.sociis@outlook.edu",
            "categories": "social",
            "lables": []
        },
        {
            "id": 5113,
            "fullname": "Orlando Lindsey",
            "subject": "odio. Aliquam",
            "body": "in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy.",
            "isRead": false,
            "sentAt": 1654503955000,
            "to": "user@appsus.com",
            "email": "varius.ultrices.mauris@protonmail.couk",
            "categories": "social",
            "lables": []
        },
        {
            "id": 9550,
            "fullname": "Maryam Kramer",
            "subject": "luctus. Curabitur",
            "body": "tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Phasellus",
            "isRead": true,
            "sentAt": 1644905849000,
            "to": "user@appsus.com",
            "email": "sed.auctor.odio@google.edu",
            "categories": "social",
            "lables": []
        },
        {
            "id": 6489,
            "fullname": "Kaitlin England",
            "subject": "dui lectus rutrum urna,",
            "body": "arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien.",
            "isRead": true,
            "sentAt": 1636588855000,
            "to": "user@appsus.com",
            "email": "nec.diam@google.org",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 5515,
            "fullname": "Basia Roman",
            "subject": "fringilla",
            "body": "vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi.",
            "isRead": true,
            "sentAt": 1633909375000,
            "to": "user@appsus.com",
            "email": "lobortis@outlook.ca",
            "categories": "social",
            "lables": []
        },
        {
            "id": 2720,
            "fullname": "Georgia Molina",
            "subject": "gravida non,",
            "body": "lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi",
            "isRead": true,
            "sentAt": 1642845464000,
            "to": "user@appsus.com",
            "email": "scelerisque.dui@yahoo.edu",
            "categories": "social",
            "lables": []
        },
        {
            "id": 2338,
            "fullname": "Holly Joyner",
            "subject": "Donec est",
            "body": "Sed auctor odio a",
            "isRead": true,
            "sentAt": 1644917624000,
            "to": "user@appsus.com",
            "email": "ornare.sagittis@outlook.org",
            "categories": "social",
            "lables": []
        },
        {
            "id": 6581,
            "fullname": "Emerson Hicks",
            "subject": "mauris, rhoncus",
            "body": "et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed",
            "isRead": true,
            "sentAt": 1643118844000,
            "to": "user@appsus.com",
            "email": "magna.cras.convallis@protonmail.ca",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 9896,
            "fullname": "Jermaine Porter",
            "subject": "semper, dui lectus rutrum",
            "body": "mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros",
            "isRead": true,
            "sentAt": 1644289636000,
            "to": "user@appsus.com",
            "email": "vulputate@protonmail.couk",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 7328,
            "fullname": "Ria Holcomb",
            "subject": "turpis.",
            "body": "ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra",
            "isRead": true,
            "sentAt": 1628152372000,
            "to": "user@appsus.com",
            "email": "et@yahoo.com",
            "categories": "social",
            "lables": []
        },
        {
            "id": 1917,
            "fullname": "Ethan Diaz",
            "subject": "vitae aliquam",
            "body": "vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
            "isRead": true,
            "sentAt": 1640671748000,
            "to": "user@appsus.com",
            "email": "donec.dignissim@yahoo.couk",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 8150,
            "fullname": "Malachi Hahn",
            "subject": "Proin sed turpis nec",
            "body": "mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
            "isRead": true,
            "sentAt": 1627015102000,
            "to": "user@appsus.com",
            "email": "sed.et@outlook.net",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 1192,
            "fullname": "Kylee David",
            "subject": "sed sem egestas",
            "body": "consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac",
            "isRead": false,
            "sentAt": 1655962577000,
            "to": "user@appsus.com",
            "email": "sed.nulla@icloud.net",
            "categories": "social",
            "lables": ['starred']
        },
        {
            "id": 9244,
            "fullname": "Kathleen Gilliam",
            "subject": "purus gravida",
            "body": "egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada",
            "isRead": true,
            "sentAt": 1632077187000,
            "to": "user@appsus.com",
            "email": "sit.amet.risus@outlook.ca",
            "categories": "social",
            "lables": []
        },
        {
            "id": 7976,
            "fullname": "Tana Mcgowan",
            "subject": "cursus purus. Nullam scelerisque",
            "body": "arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat.",
            "isRead": true,
            "sentAt": 1648051212000,
            "to": "user@appsus.com",
            "email": "sit.amet.metus@yahoo.org",
            "categories": "social",
            "lables": []
        },
        {
            "id": 3009,
            "fullname": "Ingrid Pierce",
            "subject": "tempor augue ac",
            "body": "varius ultrices, mauris ipsum porta",
            "isRead": true,
            "sentAt": 1625253556000,
            "to": "user@appsus.com",
            "email": "rhoncus.proin.nisl@yahoo.org",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 6868,
            "fullname": "Ahmed Burt",
            "subject": "odio. Phasellus",
            "body": "dolor quam, elementum at,",
            "isRead": true,
            "sentAt": 1642725550000,
            "to": "user@appsus.com",
            "email": "nulla.eu@google.ca",
            "categories": "social",
            "lables": []
        },
        {
            "id": 1956,
            "fullname": "Rudyard Moore",
            "subject": "vehicula risus. Nulla",
            "body": "tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus.",
            "isRead": true,
            "sentAt": 1645156182000,
            "to": "user@appsus.com",
            "email": "mus.aenean@protonmail.org",
            "categories": "social",
            "lables": []
        },
        {
            "id": 2697,
            "fullname": "Farrah Berger",
            "subject": "malesuada fames",
            "body": "Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at",
            "isRead": true,
            "sentAt": 1640911722000,
            "to": "user@appsus.com",
            "email": "dolor.dolor@yahoo.ca",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 7787,
            "fullname": "Patience Myers",
            "subject": "nibh. Phasellus",
            "body": "urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam.",
            "isRead": true,
            "sentAt": 1626613470000,
            "to": "user@appsus.com",
            "email": "mus@yahoo.edu",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 798,
            "fullname": "Orli Justice",
            "subject": "eu lacus. Quisque imperdiet,",
            "body": "laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at",
            "isRead": true,
            "sentAt": 1642920495000,
            "to": "user@appsus.com",
            "email": "egestas.aliquam@protonmail.edu",
            "categories": "social",
            "lables": []
        },
        {
            "id": 1061,
            "fullname": "Sawyer Moss",
            "subject": "diam. Sed diam",
            "body": "Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in",
            "isRead": true,
            "sentAt": 1650133737000,
            "to": "user@appsus.com",
            "email": "donec.dignissim@icloud.edu",
            "categories": "social",
            "lables": []
        },
        {
            "id": 7565,
            "fullname": "Zane Ellison",
            "subject": "eu augue",
            "body": "id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum.",
            "isRead": true,
            "sentAt": 1629055304000,
            "to": "user@appsus.com",
            "email": "pellentesque.a.facilisis@protonmail.ca",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 8014,
            "fullname": "Sylvia Sanchez",
            "subject": "in",
            "body": "Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum",
            "isRead": true,
            "sentAt": 1651784599000,
            "to": "user@appsus.com",
            "email": "mauris@outlook.couk",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 50,
            "fullname": "Knox Matthews",
            "subject": "nec",
            "body": "sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque",
            "isRead": true,
            "sentAt": 1642020667000,
            "to": "user@appsus.com",
            "email": "adipiscing@outlook.com",
            "categories": "social",
            "lables": []
        },
        {
            "id": 7089,
            "fullname": "Timothy Butler",
            "subject": "tempor",
            "body": "iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet",
            "isRead": true,
            "sentAt": 1638672452000,
            "to": "user@appsus.com",
            "email": "sit.amet@outlook.net",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 788,
            "fullname": "Scarlett Howard",
            "subject": "diam vel arcu.",
            "body": "Nunc ullamcorper, velit in aliquet lobortis,",
            "isRead": true,
            "sentAt": 1627237554000,
            "to": "user@appsus.com",
            "email": "luctus.lobortis@outlook.net",
            "categories": "social",
            "lables": []
        },
        {
            "id": 6750,
            "fullname": "Aaron Bass",
            "subject": "primis in faucibus orci",
            "body": "varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam",
            "isRead": false,
            "sentAt": 1654940268000,
            "to": "user@appsus.com",
            "email": "lorem@yahoo.ca",
            "categories": "social",
            "lables": []
        },
        {
            "id": 7094,
            "fullname": "Steven Clay",
            "subject": "magna. Cras convallis convallis",
            "body": "est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis,",
            "isRead": true,
            "sentAt": 1640187351000,
            "to": "user@appsus.com",
            "email": "praesent@google.edu",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 3112,
            "fullname": "Rogan Strickland",
            "subject": "Curabitur ut odio",
            "body": "odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed",
            "isRead": true,
            "sentAt": 1637872177000,
            "to": "user@appsus.com",
            "email": "auctor.velit@outlook.net",
            "categories": "social",
            "lables": []
        },
        {
            "id": 233,
            "fullname": "Colorado Brewer",
            "subject": "sem.",
            "body": "porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo",
            "isRead": true,
            "sentAt": 1648374282000,
            "to": "user@appsus.com",
            "email": "a.arcu@outlook.com",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 4012,
            "fullname": "Rajah Massey",
            "subject": "massa lobortis ultrices.",
            "body": "Donec est mauris, rhoncus",
            "isRead": true,
            "sentAt": 1631815193000,
            "to": "user@appsus.com",
            "email": "vitae@yahoo.org",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 596,
            "fullname": "Joy Vasquez",
            "subject": "Pellentesque ut ipsum",
            "body": "Fusce diam nunc, ullamcorper eu, euismod ac, fermentum",
            "isRead": true,
            "sentAt": 1648516878000,
            "to": "user@appsus.com",
            "email": "nec.tempus@hotmail.org",
            "categories": "social",
            "lables": []
        },
        {
            "id": 1000,
            "fullname": "Blake Glass",
            "subject": "dolor",
            "body": "lectus ante dictum mi, ac mattis velit justo nec ante.",
            "isRead": true,
            "sentAt": 1642061120000,
            "to": "user@appsus.com",
            "email": "felis.adipiscing@google.org",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 6334,
            "fullname": "Daryl Hickman",
            "subject": "turpis egestas. Aliquam",
            "body": "dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu",
            "isRead": true,
            "sentAt": 1653533025000,
            "to": "user@appsus.com",
            "email": "luctus.lobortis@google.edu",
            "categories": "social",
            "lables": []
        },
        {
            "id": 9904,
            "fullname": "Emery Solis",
            "subject": "dolor",
            "body": "erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem",
            "isRead": true,
            "sentAt": 1650808919000,
            "to": "user@appsus.com",
            "email": "sit.amet@aol.net",
            "categories": "social",
            "lables": []
        },
        {
            "id": 8950,
            "fullname": "Deborah Summers",
            "subject": "rutrum",
            "body": "feugiat. Lorem ipsum dolor sit amet, consectetuer",
            "isRead": true,
            "sentAt": 1625826589000,
            "to": "user@appsus.com",
            "email": "duis.risus@outlook.edu",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 6711,
            "fullname": "Honorato Hutchinson",
            "subject": "sociis natoque penatibus",
            "body": "lorem vitae odio sagittis semper. Nam tempor",
            "isRead": true,
            "sentAt": 1633812323000,
            "to": "user@appsus.com",
            "email": "nec.tempus@yahoo.couk",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 2050,
            "fullname": "Ishmael Alvarez",
            "subject": "id sapien. Cras",
            "body": "nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce",
            "isRead": true,
            "sentAt": 1650029416000,
            "to": "user@appsus.com",
            "email": "semper.cursus@yahoo.com",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 4332,
            "fullname": "Althea Rosa",
            "subject": "enim diam",
            "body": "nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis,",
            "isRead": true,
            "sentAt": 1644203973000,
            "to": "user@appsus.com",
            "email": "enim@yahoo.ca",
            "categories": "social",
            "lables": []
        },
        {
            "id": 2092,
            "fullname": "Axel Camacho",
            "subject": "hymenaeos.",
            "body": "quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat",
            "isRead": true,
            "sentAt": 1626035494000,
            "to": "user@appsus.com",
            "email": "sed.libero@yahoo.ca",
            "categories": "promotions",
            "lables": []
        },
        {
            "id": 8330,
            "fullname": "Dexter Beard",
            "subject": "netus et",
            "body": "magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum",
            "isRead": true,
            "sentAt": 1628546349000,
            "to": "user@appsus.com",
            "email": "ipsum.suspendisse@protonmail.com",
            "categories": "social",
            "lables": []
        },
        {
            "id": 9259,
            "fullname": "Akeem Wilson",
            "subject": "at pede. Cras vulputate",
            "body": "ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede,",
            "isRead": true,
            "sentAt": 1632378984000,
            "to": "user@appsus.com",
            "email": "sed.pede@protonmail.net",
            "categories": "social",
            "lables": []
        }
    ]
    const JsonObject = JSON.parse(JSON.stringify(mails))
    const sortMailAsc = JsonObject.sort((a, b) => b.sentAt - a.sentAt)
    sortMailAsc.forEach(mail => {
        mail.id = mail.id.toString()
    })

    return sortMailAsc
}