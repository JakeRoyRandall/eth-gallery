import { useMoralis } from "react-moralis"

export const AuthBtn = ( ) => {
	const { authenticate, isAuthenticated, isAuthenticating, user } = useMoralis()

	return (
		<div>
			{  isAuthenticated && <h1>Welcome {user.get("username")}</h1> }
			{ !isAuthenticated && 
			<button 
				onClick = { () => authenticate() }
				disabled = { isAuthenticating }
			>
				Login
			</button> }
		</div>
	)
}