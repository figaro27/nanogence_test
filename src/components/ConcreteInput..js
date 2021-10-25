import React, { useState } from 'react';
import Output from './Output';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ConcreteInput = (props) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false)
  const onSubmit = () => {
    // setIsSubmitted(true)
  }
  return (
    <div className="my-2 px-2">

      <Link to="/">
        <div className="flex h-16 items-center cursor-pointer">
          <img src="images/concrete_logo.jpg" className="h-full w-auto" alt="cement" />
          <span className="mx-4 text-2xl font-bold">Concrete</span>
        </div>
      </Link>

      <form onSubmit={handleSubmit(onSubmit)}>

      <div className="flex justify-between items-center my-2">
        <label className="text-base md:text-lg">Please fill in the information</label>
        <input type="submit" className="cement_input_submit" value="Submit" />
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          1. Current cement kg/m<sup>3</sup> of concrete:
        </label>
        <input type="number" className="cement_input_value" {...register("b_5_current_cement", { required: true })} />
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          2. Expected cement kg/m<sup>3</sup> of concrete:
        </label>
        <input type="number" className="cement_input_value" {...register("b_20_expected_cement", { required: true })} />
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          3. Admixture in litre per m<sup>3</sup> of concrete:
        </label>
        <input type="number" className="cement_input_value" {...register("b_12_admixture_liter", { required: true })} />
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          4. Current cement cost per ton (USD):
        </label>
        <input type="number" className="cement_input_value" {...register("c_6_cement_cost", { required: true })} />
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          5. Current Admixture cost per ton (USD):
        </label>
        <input type="number" className="cement_input_value" {...register("c_13_admixture_costs", { required: true })}/>
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          6. Current Aggregates cost per m<sup>3</sup> (USD):
        </label>
        <input type="number" className="cement_input_value" {...register("c_9_aggregate_costs", { required: true })}/>
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          7. Total concrete production m<sup>3</sup> per year:
        </label>
        <input type="number" className="cement_input_value" {...register("c_46_production", { required: true })}/>
      </div>

      </form>

      { isSubmitted &&
        <Output /> 
      }

    </div>
  )
}

export default ConcreteInput