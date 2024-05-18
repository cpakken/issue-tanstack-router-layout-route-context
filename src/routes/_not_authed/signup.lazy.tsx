import { createLazyFileRoute } from '@tanstack/react-router'
import { memo } from 'react'

export const Route = createLazyFileRoute('/_not_authed/signup')({
  component: memo(Signup),
})

function Signup() {
  return (
    <div>
      <h3>Sign Up</h3>
    </div>
  )
}
