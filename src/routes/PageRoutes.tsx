import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CustomerReviewPage from "../pages/CustomerReviewPage";
import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";
import PaymentPage from "../pages/PaymentPage";
import ProfilePage from "../pages/ProfilePage";
import RestaurantPage from "../pages/RestaurantPage";
import RestaurantReviewPage from "../pages/RestaurantReviewPage";

export default function PageRoute()
{
    return (
        <Routes>
            <Route path="secure-eats">
                <Route path="" element={<HomePage/>}/>
                <Route path="customer-review" element={<CustomerReviewPage/>}/>
                <Route path="cart" element={<CartPage/>}/>
                <Route path="order" element={<OrderPage/>}/>
                <Route path="payment" element={<PaymentPage/>}/>
                <Route path="profile" element={<ProfilePage/>}/>
                <Route path="restaurant" element={<RestaurantPage/>}/>
                <Route path="restaurant-review" element={<RestaurantReviewPage/>}/>
            </Route>
            <Route path="*" element={<div>No Link to This Page</div>}/>
        </Routes>
    )
}