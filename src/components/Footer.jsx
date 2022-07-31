import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="page-footer">
      <div className="container"></div>
          <div className="footer-copyright">
            <div className="container">
              © {currentYear} Copyright Text
              <a className="grey-text text-lighten-4 right" href="#">
                More Links
              </a>
            </div>
          </div>
    </footer>
  )
}
export default Footer
