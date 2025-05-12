import { useState } from 'react'
import { jsPDF } from 'jspdf';
import './App.css'

function App() {
  const[ name, setName ] = useState('')
  const[ pass, setPass ] = useState('')
  return (
    <>
      <main className="file-main">
        <div className="name-div">
          <span>Name :</span>
          <input 
          type="text" 
          className="name"
          value={name}
          onChange={ (e) => setName( e.target.value ) } 
          />
        </div>
        <div className="pass-div">
          <span>Password : </span>
          <input 
          type="text" 
          className="pass" 
          value={pass}
          onChange={ (e) => setPass( e.target.value ) }/>
        </div>
        <div className="download-file">
          <button className="download" onClick={ () => {

            // pdf file download
            const doc = new jsPDF()
            doc.text("user info", 10, 10);
            doc.text(`Name : ${name}`, 10, 20);
            doc.text(`Pass : ${pass}`, 10, 30);
            doc.save("user-info.pdf")



            // txt file download
            // const content = `Name : ${name} \nPass : ${pass}`
            // const blob = new Blob([content], { type: "text/plain" });
            // const link = document.createElement("a")
            // link.href = URL.createObjectURL(blob)
            // link.download = "form.txt"
            // link.click()
          } }>Download</button>
        </div>
      </main>
    </>
  )
}

export default App
