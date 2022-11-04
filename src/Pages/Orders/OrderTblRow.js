import React, { useEffect, useState } from 'react';

const OrderTblRow = ({ order, deleteHandle, updataStatusHandle }) => {
  const [orderPodcut, setOrderProduct] = useState({});
  const { productId, productName, customer, price, status, email, _id } = order;

  useEffect(() => {
    fetch(`http://localhost:5000/service/${productId}`)
      .then((res) => res.json())
      .then((data) => setOrderProduct(data));
  }, [productId]);

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => deleteHandle(_id)} className="btn btn-ghost">
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {orderPodcut.img && (
                <img
                  src={orderPodcut.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
          </div>
        </div>
      </td>
      <td>
        {productName}
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <td>{email}</td>
      <td>
        <button
          onClick={() => updataStatusHandle(_id)}
          className="btn btn-secondary btn-sm"
        >
          {status ? status : "Pending"}
        </button>
      </td>
    </tr>
  );
};

export default OrderTblRow;