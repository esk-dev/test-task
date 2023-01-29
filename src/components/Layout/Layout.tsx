import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import TreeBrowser from '../TreeBrowser/TreeBrowser'
import View from '../View/View'
import './Layout.css';
function Layout() {
  return (
    <main className='main'>
      <Sidebar>
        <TreeBrowser />
      </Sidebar>
      <View />
    </main>
  )
}

export default Layout
