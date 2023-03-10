import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main>
      <div className="introDiv">
        <div />
        <div>
          <h1>Page not found</h1>
          <p>
            We couldn't find that page.
          </p>
          <p>
            <Link to="/">Home</Link>
          </p>
        </div>
        <div />
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
