class Note {
  constructor(noteJSON) {
    this.id = noteJSON.id
    this.title = noteJSON.title
    this.body = noteJSON.body
  }
}