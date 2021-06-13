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
    <Sidebar Tabcallback={Tabcallback} pfp="https://homepages.cae.wisc.edu/~ece533/images/baboon.png" name="John doe"/>
    <ContentDisplay tab={currentTab} testContent="This is some test content "/>
    </div>
    )
}

export default App;
