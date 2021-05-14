import UserAddress from "../models/UserAddress";

interface ShowUserAddressProps {
    address: UserAddress
}

function ShowUserAddress({address}: ShowUserAddressProps) {

    return (
        <div style={{
            margin: 50
        }}>
            Address: {address.suite}, {address.street} {address.city}, {address.zipcode}
        </div>
    )
}

export default ShowUserAddress