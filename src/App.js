import './style.css';
import Sidebar from './common/sidebar'
import ContentDisplay from './common/contentDisplay'
import { useState } from 'react';



function App() {
  
  const[currentTab,setCurrentTab]=useState("")

  function Tabcallback(cTAB){
    setCurrentTab(cTAB)
  
  }

  return (
    <div className="allPageContent">
    <Sidebar Tabcallback={Tabcallback} pfp="https://d3n8a8pro7vhmx.cloudfront.net/imaginebetter/pages/313/meta_images/original/blank-profile-picture-973460_1280.png?1614051091" name="Tom Martin"/>
    <ContentDisplay tab={currentTab} testContent="This is some test content "/>
    </div>
    )
}

export default App;
