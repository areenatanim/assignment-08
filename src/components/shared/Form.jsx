"use client";

import { toast } from "react-toastify";

const Form = ({ animals }) => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        console.log(userData);

        if (userData) {
            toast.success(`${animals.name} successfully Booked`)
        }
        else {
            toast.error("some information not added")
        }

    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset">
                    <label className="label"> Your Name</label>
                    <input
                        required
                        name="name"
                        type="text" className="input" placeholder="Your name" />
                    <label className="label">Your Email</label>
                    <input
                        required
                        name="email"
                        type="email" className="input" placeholder="Email" />
                    <label className="label">Phon Number</label>
                    <input
                        required
                        name="phon"
                        type="text" className="input" placeholder="Your Number" />
                    <label className="label">Your Address</label>
                    <input
                        required
                        name="address"
                        type="text" className="input" placeholder="Your Address" />

                    <input type="submit" value="Booking"
                        className={`btn rounded-2xl hover:bg-green-800 hover:text-white`} />
                </fieldset>
            </form>
        </div>
    );
};

export default Form;