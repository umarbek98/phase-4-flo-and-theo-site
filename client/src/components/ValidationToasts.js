import { Alert } from "react-bootstrap"

export const LoginEmpty = () => {
    return(
        <Alert variant="danger">
            Ensure that all fields are filled
        </Alert>
    )
}

export const InvalidEmailOrPassword = () => {
    return(
        <Alert variant="danger">
            Invalid Email/Password
        </Alert>
    )
}

export const PasswordsDontMatch = () => {
    return(
        <Alert variant="danger">
            Passwords do not match
        </Alert>
    )
}

export const FieldEmpty = () => {
    return(
        <Alert variant="danger">
            Ensure all fields are filled
        </Alert>
    )
}