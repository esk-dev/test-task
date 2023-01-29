import React from 'react'

type SidebarProps = {
  children: React.ReactNode;
};

function Sidebar(props: SidebarProps) {
  return (
    <>
      { props.children }
    </>
  )
}

export default Sidebar
