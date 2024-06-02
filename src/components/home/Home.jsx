import LoginComponent from "../../customized-components/login/LoginComponent"
const Home = () =>
{
    return(
        <div className="container-fluid">
            <h2>Shopper - Home</h2>
            <LoginComponent theme="bg-warning" title="Admin Login" login_id="Your Email" login_type="email" button_text="Login" />
            <h2 className="mt-5">Customer Portel</h2>
            <LoginComponent title="Customer Login" login_id="Your Mobile" login_type="text" button_text="Signin" />
        </div>
    )
}
export default Home