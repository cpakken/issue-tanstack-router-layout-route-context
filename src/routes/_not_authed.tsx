import { createFileRoute, Link, Outlet, redirect, useRouteContext } from '@tanstack/react-router'
import { memo } from 'react'

export const Route = createFileRoute('/_not_authed')({
  beforeLoad: ({ context: { auth } }) => {
    //If the user is already authenticated, redirect them to the main dashboard
    if (auth.get()) {
      console.log('redirecting to /')
      throw redirect({ to: '/' })
    }
  },
  component: memo(Component),
})

function Component() {
  const context = Route.useRouteContext() //this returns undefined on non-initial redirect
  const rootContext = useRouteContext({ from: '__root__' }) //this seems to resolve
  console.log('_not_authed/context:', context, rootContext)

  return (
    <div className="bg-gray-300">
      <div className="flex gap-4 p-4">
        <Link to="/login" className="[&.active]:font-bold">
          Log in
        </Link>
        <Link to="/signup" className="[&.active]:font-bold">
          Sign Up
        </Link>
        {/* BUG: Rouete.useRouteContext() returns undefined on non-initial loads */}
        <div className="font-mono border-2 border-[red]">
          _not_authed/CONTEXT: <span className="font-bold">{String(JSON.stringify(context))}</span>
        </div>
      </div>
      <hr />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  )
}
