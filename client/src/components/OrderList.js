import { useContext, useEffect } from "react";
import { CustomerContext } from "../contexts/CustomerContext";
import OrderCard from "./OrderCard";

const OrderList = () => {

    const { customer } = useContext(CustomerContext)
    return (
        <div>
            { customer.orders ? customer.orders.map(order => 
            <OrderCard 
            key={order.order_id} 
            order={order}/>) : null}
        </div>
    )
}

export default OrderList;