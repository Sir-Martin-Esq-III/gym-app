import './style.css';
import Sidebar from './common/sidebar'
import ContentDisplay from './common/contentDisplay'
function App() {
  return (
    <div className="allPageContent">
    <Sidebar pfp="https://homepages.cae.wisc.edu/~ece533/images/baboon.png" name="John doe"/>
    <ContentDisplay testContent="This is some test content "/>
    </div>
    )
}

export default App;
