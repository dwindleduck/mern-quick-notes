import {checkToken} from "../../utilities/users-service"

export default function OrderHistoryPage() {

    function handleCheckToken() {
        checkToken()
        .then(console.log)
    }

    return (
    <>
        <h2>Order History Page</h2>
        <button onClick={handleCheckToken}>Check When My Login Expires</button>
        
    </>
    )
}