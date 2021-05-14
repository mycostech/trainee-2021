import UserAddress from "./UserAddress";
import UserCompany from "./UserCompany";

interface User {
    id?: number
    name: string
    email: string
    phone?: string
    website?: string
    address?: UserAddress
    company?: UserCompany

}

export default User