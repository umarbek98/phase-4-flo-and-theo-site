import { useContext, useEffect } from "react";
import { CustomerContext } from "../contexts/CustomerContext";
import OrderCard from "./OrderCard";

const OrderList = () => {

    const { customer, orders } = useContext(CustomerContext)
    return (
        <div>
            { orders && orders.length > 0 ? orders.map(order => 
            <OrderCard 
            key={order.order_id} 
            order={order}/>) : null}
        </div>
    )
}

export default OrderList;