import { AnyRouter } from '@tanstack/react-router'

export type UserDetails = {
  username: string
}

export class Auth {
  private user: UserDetails | null = null

  constructor(private router: AnyRouter) {}

  get() {
    return this.user
  }

  set(user: UserDetails) {
    return (this.user = user)
  }

  clear() {
    return (this.user = null)
  }

  /**
   * simulates changing auth state (can be changed when other tabs log in/out
   * detected by localstorge OR cookie changes)
   */
  mockValidate(userDetails: UserDetails | null) {
    const ret = userDetails ? this.set(userDetails) : this.clear()

    //Bug still exists without invalidating router, although user needs to click on a link to trigger beforeLoad redirect
    this.router.invalidate()

    return ret
  }

  logout() {
    this.clear()
  }

  toJSON() {
    return { user: this.user }
  }
}
