import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className="mt-5  shipping-form ">
            <div className="container shadow p-3">
                <h2 className="text-dark">Shipping Process</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                   <input className="border border-dark rounded m-2" defaultValue={user.displayName} {...register("name")} />
                   <br/>
                   <input className="border border-dark rounded m-2" defaultValue={user.email} {...register("email", { required: true })} />
                   <br/>
                   {errors.email && <span className="error">This field is required</span>}
                   <input className="border border-dark rounded m-2" placeholder="Address" defaultValue="" {...register("address")} />
                   <br/>
                   <input className="border border-dark rounded m-2" placeholder="City" defaultValue="" {...register("city")} />
                   <br/>
                   <input className="border border-dark rounded m-2" placeholder="phone number" defaultValue="" {...register("phone")} />
                   <br/>
                   <input type="submit" className="btn btn-warning text-dark"/>
                </form>
            </div>
        </div>
    );
}

export default Shipping;