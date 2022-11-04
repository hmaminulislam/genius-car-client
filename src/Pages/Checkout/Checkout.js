import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const {title, price, _id} = useLoaderData()
    const {user} = useContext(AuthContext)

    const submitHandle = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.fristName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = form.email.value;
        const order = {
          productId: _id,
          productName: title,
          customer: name,
          price,
          phone,
          email,
        };

        fetch("http://localhost:5000/orders", {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
          if(data.acknowledged) {
            form.reset()
          }
        })
        .catch(err => console.log(err))
    }
    return (
      <div className="px-5 sm:px-10 md:px-20 my-20">
        <h2 className="text-4xl font-semibold">
          You are about order: <span className="text-orange-500">{title}</span>
        </h2>
        <h2 className="text-xl text-orange-500 font-semibold mb-5 mt-3">
          Price: ${price}
        </h2>
        <form onSubmit={submitHandle}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Frist Name"
              name="fristName"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              className="input input-bordered w-full"
              required
            />
            <input
              type="tel"
              placeholder="Your Number"
              name="phone"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="input input-bordered w-full"
              required
              defaultValue={user ? user.email : ""}
            />
          </div>
          <div className="my-5">
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Message..."
              name="message"
            ></textarea>
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary md:w-1/6 w-full mt-5"
            />
          </div>
        </form>
      </div>
    );
};

export default Checkout;