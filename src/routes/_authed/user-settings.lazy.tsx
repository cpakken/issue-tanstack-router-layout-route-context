import { createLazyFileRoute } from '@tanstack/react-router'
import { memo } from 'react'

export const Route = createLazyFileRoute('/_authed/user-settings')({
  component: memo(UserSettings),
})

function UserSettings() {
  return <div>Hello /_authed/user-settings!</div>
}
