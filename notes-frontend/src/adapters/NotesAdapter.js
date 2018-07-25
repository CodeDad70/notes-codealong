class NotesAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/notes'
  }
  
  getNotes() {
    return fetch(this.baseUrl)
      .then(res=>res.json()
    )
  }

  createNote(value) {
    const note = {
      body: value
    }
    return fetch(this.baseUrl, {
      method: 'POST',
      body: JSON.stringify({note})
    })
  }
}