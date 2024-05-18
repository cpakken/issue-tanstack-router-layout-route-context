import { createLazyFileRoute } from '@tanstack/react-router'
import { memo } from 'react'

export const Route = createLazyFileRoute('/_not_authed/login')({
  component: memo(Login),
})

function Login() {
  console.log('Login')
  return (
    <div>
      <h3>Login</h3>
    </div>
  )
}
