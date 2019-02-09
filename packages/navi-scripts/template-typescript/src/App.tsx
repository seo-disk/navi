import React from 'react';
import { NavLink, NavView, NavNotFoundBoundary, useLoadingRoute } from 'react-navi';
import { MDXProvider } from '@mdx-js/tag';
import './App.css';

function App() {
  let loadingRoute = useLoadingRoute()
  
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <NavLink href='/' activeClassName='active' exact>
            Home
          </NavLink>
          <NavLink href='/getting-started/' activeClassName='active'>
            Getting Started
          </NavLink>
        </nav>
      </header>

      <main>
        <NavNotFoundBoundary render={renderNotFound}>
          <div
            // Only add the `active` class to this element while the
            // next page is loading, triggering a CSS animation to
            // show or hide the loading bar.
            className={`
              App-loading-indicator
              ${loadingRoute ? 'active' : ''}
            `}
          />
          <MDXProvider components={{
            // Use Navi's <NavLink> component to render links in
            // Markdown files, ensuring navigation is handled by Navi.
            a: NavLink,
          }}>
            <NavView />
          </MDXProvider>
        </NavNotFoundBoundary>
      </main>
    </div>
  )
}

// Note that create-react-navi-app will always show an error screen when this
// is called. This is because the underlying react-scripts package show
// the error screen when a NotFoundError is thrown, even though it's caught
// by <NavNotFoundBoundary>. To see the error rendered by this function,
// you'll just need to close the error overlay with the "x" at the top right.
function renderNotFound() {
  return (
    <div className='App-error'>
      <h1>404 - Not Found</h1>
    </div>
  )
} 

export default App;
