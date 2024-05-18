import { createFileRoute, Link, Outlet, redirect, useRouteContext } from '@tanstack/react-router'
import { memo } from 'react'

export const Route = createFileRoute('/_authed')({
  beforeLoad: ({ context: { auth } }) => {
    //If the user is not authenticated, redirect them to the login page
    if (!auth.get()) {
      console.log('redirecting to /login')
      throw redirect({ to: '/login' })
    }
  },
  component: memo(Component),
})

function Component() {
  const context = Route.useRouteContext() //this returns undefined on non-initial redirect
  const rootContext = useRouteContext({ from: '__root__' }) //this seems to resolve
  console.log('_authed/context:', context, rootContext)

  return (
    <div>
      <div className="flex gap-4 p-4">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/user-settings" className="[&.active]:font-bold">
          User Settings
        </Link>
        {/* BUG: Rouete.useRouteContext() returns undefined on non-initial loads */}
        <div className="font-mono border-2 border-[red]">
          _authed/CONTEXT: <span className="font-bold">{String(JSON.stringify(context))}</span>
        </div>
      </div>
      <hr />
      <div className="p-4">
        {/* route context works in <Outlet /> thought */}
        <Outlet />
      </div>
    </div>
  )
}
