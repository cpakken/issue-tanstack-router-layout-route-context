import { createLazyFileRoute } from '@tanstack/react-router'
import { memo } from 'react'

export const Route = createLazyFileRoute('/_authed/')({
  component: memo(MainAuthed),
})

function MainAuthed() {
  const { auth } = Route.useRouteContext()

  return (
    <div>
      <h3>Main Authed Dashboard</h3>
      <div>Welcome, {auth.get()!.username}</div>
    </div>
  )
}
