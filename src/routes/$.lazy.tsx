import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/$')({
  component: () => <div>404</div>,
})
