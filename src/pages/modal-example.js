import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-3'

const ModalExamplePage = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div className="w-20">
        {modal ? (
          <Link to={closeTo}>
            X
          </Link>
        ) : (
          <header>
            <h1>
              Website Title
              loooool
            </h1>
          </header>
        )}
    there should be stuff here
        <h2>Modal Page</h2>
       
      </div>
    )}
  </ModalRoutingContext.Consumer>
)

export default ModalExamplePage