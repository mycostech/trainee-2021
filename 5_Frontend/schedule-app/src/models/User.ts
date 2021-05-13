import Schedule from "./Schedule";

interface User {
    userId: number
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string
    dob?: Date
    schedule?: Schedule
}

export default User