class Notes {
  constructor() {
    this.notes= []
    this.adapter = new NotesAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadNotes()
  }

  initBindingsAndEventListeners() {
    this.notesContainer = document.getElementById('notes-container')
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
    this.notesContainer.innerHTML = this.notes.map(note=> `<li> ${note.title}-${note.body}</li>`).join()
  }
}