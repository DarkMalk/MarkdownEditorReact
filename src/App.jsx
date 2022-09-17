import React from 'react'
import Split from 'react-split'
import WindowEditor from './components/WindowEditor'
import WindowPreview from './components/WindowPreview'
import SideBar from './components/SideBar'


const App = () => {

  // const windowWidth = document.documentElement.scrollWidth
  
  // if (windowWidth <= 1280) {
  //   return (
  //     <div className='container-application'>
  //       <SideBar />
  //       <div className='container-windows'>
  //         <div className='button-window-mobile'>
  //           <button>editor</button>
  //           <button>preview</button>
  //         </div>
  //         <div>

  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className='container-application'>
      <SideBar />
      <div className='container-windows'>
        <Split className='split' gutterAlign='center'>
          <WindowEditor />
          <WindowPreview />
        </Split>
      </div>
    </div>
  )
}

export default App
