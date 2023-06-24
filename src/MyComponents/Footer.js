import React from 'react'

const Footer = () => {

  let footerStyle =   {
    position : "absolute",
    width : "100%",
    top : "95vh"
  }
  return (
    <footer className='bg-dark text-light' style={footerStyle}>
      <p className='text-center'>
      Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}

export default Footer
