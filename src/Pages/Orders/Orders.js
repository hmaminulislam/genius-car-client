import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import OrderTblRow from "./OrderTblRow";

const Orders = () => {
  const { user, logOut } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(
      `https://genius-car-server-one-beta.vercel.app/orders?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("genius-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => setOrders(data));
  }, [user?.email, logOut]);

  const deleteHandle = (id) => {
    const procced = window.confirm("Are you sure cencel the product");
    if (procced) {
      fetch(`https://genius-car-server-one-beta.vercel.app/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            const remaing = orders.filter((or) => or._id !== id);
            setOrders(remaing);
          }
          console.log(data);
        });
    }
  };

  const updataStatusHandle = (id) => {
    fetch(`https://genius-car-server-one-beta.vercel.app/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          const remaining = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          approving.status = "Approved";
          const updataOrders = [approving, ...remaining];
          setOrders(updataOrders);
        }
        console.log(data);
      });
  };

  return (
    <div>
      <h2 className="text-4xl font-semibold">
        You have {orders.length} orders
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full my-10">
          <thead>
            <tr>
              <th>
                <label>
                  <button className="btn btn-ghost">X</button>
                </label>
              </th>
              <th>Name</th>
              <th>Product</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderTblRow
                key={order._id}
                order={order}
                deleteHandle={deleteHandle}
                updataStatusHandle={updataStatusHandle}
              ></OrderTblRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
