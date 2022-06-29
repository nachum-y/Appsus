// Model - start with a basic model of emails
export const emailService = {
    getAllMails,
}

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





function getAllMails() {
    const mails = [
        {
            id: 'e101',
            fullname: 'Leslie Alexander',
            subject: 'Hiya',
            body: 'Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            isRead: false,
            sentAt: 1656503851958,
            to: 'user@appsus.com',
            email: 'lesliea@mail.com',
        },
        {
            id: 'e102',
            fullname: 'Albert Flores',
            subject: 'Build prototypes without code',
            body: 'Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            isRead: false,
            sentAt: 1656501851958,
            to: 'user@appsus.com',
            email: 'albert@mail.com',
        },
        {
            id: 'e143',
            fullname: 'Theresa Webb',
            subject: 'Build prototypes without code',
            body: 'Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. ',
            isRead: false,
            sentAt: 1656503801958,
            to: 'user@appsus.com',
            email: 'theresa@mail.com',
        },
    ]
    return mails
}