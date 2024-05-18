import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Auth } from '../auth'
import { AuthDevControls } from '../AuthDevControls'

export const Route = createRootRouteWithContext<{ auth: Auth }>()({
  component: () => {
    const { auth } = Route.useRouteContext()

    return (
      <>
        <Outlet />
        <AuthDevControls auth={auth} />
        <TanStackRouterDevtools />
      </>
    )
  },
})
