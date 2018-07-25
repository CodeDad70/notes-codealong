class Notes {
  constructor() {
    this.notes= []
    this.adapter = new NotesAdapter()
    // this.bindEventListeners()
    this.fetchAndLoadNotes()
  }

  fetchAndLoadNotes(){
   this.adapter.getNotes()
    .then(notes=>{
     notes.forEach(note=>this.notes.push(new Note(note)))
   })
   .then(()=> {
     this.render()
   })
  }
  
  render() {
    console.log(this.notes)
    const notesContainer = document.getElementById('notes-container')
    notesContainer.innerHTML = this.notes.map(note=> `${note.title} - ${note.body} `)
  }
}