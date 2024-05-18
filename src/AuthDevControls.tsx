import { useState } from 'react'
import { Auth } from './auth'

export const AuthDevControls = ({ auth }: { auth: Auth }) => {
  const [user, setUser] = useState(auth.get())

  const toggleAuthState = () => {
    if (user) {
      setUser(auth.mockValidate(null))
    } else {
      setUser(auth.mockValidate({ username: 'Bob Smith' }))
    }
  }

  return (
    // <div className="absolute bottom-0 right-0 p-4">
    <div className="relative w-fit p-4">
      <div className="p-2 border rounded">
        <h3 className="font-bold">Auth Dev Controls</h3>
        <div className="text-sm font-bold grid gap-2">
          <div className="p-2 border">
            {user ? (
              <>
                <div>Logged In As:</div>
                <div>{JSON.stringify(user)}</div>
              </>
            ) : (
              <div>Not Logged In</div>
            )}
          </div>
          <button className="bg-blue-600 text-blue-100 p-1 rounded " onClick={toggleAuthState}>
            Toggle Auth State
          </button>
          <div className="w-[200px] text-sm font-medium">
            NOTE: simulates changing auth state by external sources. Auth state can be changed when
            OTHER tabs log in/out detected by localstorge OR cookie changes
          </div>
        </div>
      </div>
    </div>
  )
}
