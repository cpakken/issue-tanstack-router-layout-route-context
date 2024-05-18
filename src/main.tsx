import { RouterProvider, createRouter } from '@tanstack/react-router'
import ReactDOM from 'react-dom/client'
import { routeTree } from './routeTree.gen'
// import { Spinner } from './components/spinner'

import './index.css'
import { Auth } from './auth'

// Create a new router instance
const router = createRouter({
  routeTree,
  context: { auth: undefined! /* injectedLater */ },
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<RouterProvider router={router} context={{ auth: new Auth(router) }} />)
}
