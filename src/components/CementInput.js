import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import Output from './Output';
import { Link } from "react-router-dom";
import firebase from '../utils/firebase';

const CementInput = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [parameters, setParameters] = useState({})
  const [calRes, setCalRes] = useState({})

  useEffect(() => {
    const cementRef = firebase.database().ref('cement');
    cementRef.on('value', (snapshot) => {
      setParameters(snapshot.val())
    });
  }, [])

  const onSubmit = (input) => {
    const d_37 = input.d_37_total_clinker_cost
          const c_19 = parameters.c_22_overall_co2_generation_original * parameters.c_7_co2_costs_market_policies / 1000
        const c_36 = (parameters.b_36_co2 * c_19)
            const c_13 = parameters.b_13_raw_materials * parameters.b_6_cogs_without_co2
          const c_30 = parameters.b_30_raw_materials * c_13
            const c_14 = parameters.b_14_energy * parameters.b_6_cogs_without_co2
          const c_31 = parameters.b_31_energy * c_14
            const c_15 = parameters.b_15_maintenance * parameters.b_6_cogs_without_co2
          const c_32 = parameters.b_32_maintenance * c_15
            const c_16 = parameters.b_16_depreciation * parameters.b_6_cogs_without_co2
          const c_33 = parameters.b_33_depreciation * c_16
            const c_17 = parameters.b_17_personnel * parameters.b_6_cogs_without_co2
          const c_34 = parameters.b_34_personnel * c_17
            const c_18 = parameters.b_18_others * parameters.b_6_cogs_without_co2
          const c_35 = parameters.b_35_others * c_18
        const c_37 = (c_30 + c_31 + c_32 + c_33 + c_34 + c_35 + c_36)
      const h_36 = (c_36 / c_37)
    const d_36 = h_36 * d_37
    const d_38 = d_37 - d_36

                const h_30 = c_30 / c_37
              const d_30 = h_30 * d_37
                const d_10 = parameters.b_10_production_clinker * (input.b_9_use_clinker / 100)
                    const d_43 = (input.b_9_use_clinker / 100) - (input.d_42_expected_clinker / 100) 
                  const d_44 = (input.b_9_use_clinker / 100) - d_43
                const d_45 = parameters.b_45_production_clinker_ngc * d_44
              const d_50 = d_45 / d_10 * d_30
            const d_59 = ((d_30 - d_50) * parameters.b_59_raw_materials)
                const h_31 = c_31 / c_37
              const d_31 = h_31 * d_37
              const d_51 = d_45 / d_10 * d_31
            const d_60 = ((d_31 - d_51) * parameters.b_60_energy)
                const h_32 = c_32 / c_37
              const d_32 = h_32 * d_37
              const d_52 = d_45 / d_10 * d_32
            const d_61 = (d_32 - d_52) * parameters.b_61_maintenance
                const h_33 = c_33 / c_37
              const d_33 = h_33 * d_37
              const d_53 = d_45 / d_10 * d_33
            const d_62 = (d_33 - d_53) * parameters.b_62_depreciation
                const h_34 = c_34 / c_37
              const d_34 = h_34 * d_37
              const d_54 = d_45 / d_10 * d_34
            const d_63 = (d_34 - d_54) * parameters.b_63_personnel
                const h_35 = c_35 / c_37
              const d_35 = h_35 * d_37
              const d_55 = d_45 / d_10 * d_35
            const d_64 = (d_35 - d_55) * parameters.b_64_others
              const d_56 = d_45 / d_10 * d_36
            const d_65 = (d_36 - d_56) * parameters.b_65_co2
          const d_66 = d_59 + d_60 + d_61 + d_62 + d_63 + d_64 + d_65 
            const d_68 = d_10 - d_45
          const d_70 = parameters.c_69_fly_ash * d_68 / 1000
          const d_82 = parameters.c_81_price_current_additives * parameters.c_80_volume_additives_take / 1000
                const b_75 = (1 - parameters.b_31_energy) * c_14
                const c_75 = (1 - parameters.b_32_maintenance) * c_15 + (1 - parameters.b_33_depreciation) * c_16
                const c_20 = c_13 + c_14 + c_15 + c_16 + c_17 + c_18 + c_19
              const c_76 = (b_75 + c_75) / (c_20 - c_37)
              const d_74 = input.d_72_grinding_aid_dosing * input.d_73_grinding_non_clinker / 1000
            const d_76 = c_76 * d_74
          const d_78 = parameters.d_77_grinding_reduction_grinding * d_76
        const d_84 = d_66 - d_70 + d_82 + d_78
            const d_89 = parameters.c_89_acceptable_cost_ngc * d_84
            const d_88 = parameters.d_87_dosage_ngc_additive * parameters.b_88_volume_ngc_additive
          const d_90 = d_89 / d_88 * 1000
        const d_91 = d_90 * d_88 / 1000
      const d_93 = d_84 - d_91
    const d_94 = d_37 - d_93 - d_56
    const c_56 = d_45 / d_10 * d_36
    const d_109 = d_38 + d_36
    const d_110 = d_94 + d_56
   
    const clinker_cost = d_38
    const clinker_cost_cat = d_94
    const co2_cost = d_36
    const co2_cost_cat = d_56
    const overall_cost = d_109
    const overall_cost_cat = d_110

    setCalRes([
      ['Clinker costs', clinker_cost, clinker_cost_cat],
      ['CO2 costs', co2_cost, co2_cost_cat],
      ['Total costs', overall_cost, overall_cost_cat]
    ])

    setIsSubmitted(true)
  }

  return (
    <div className="my-2 px-2">

      <Link to="/">
        <div className="flex h-16 items-center cursor-pointer">
          <img src="images/cement_logo.jpg" className="h-full w-auto" alt="cement" />
          <span className="mx-4 text-2xl font-bold">Cement</span>
        </div>
      </Link>

      <form onSubmit={handleSubmit(onSubmit)}>

      <div className="flex justify-between items-center my-2">
        <label className="text-base md:text-lg">Please fill in the information</label>
        <input type="submit" className="cement_input_submit" value="Submit" />
      </div>
      
      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          1. Current clinker :
        </label>
        <div className="cement_input">
          <input type="number" className="cement_input_value" min="1" max="100" {...register("b_9_use_clinker", { required: true })} />
          <label className="cement_input_label">%</label>
        </div>
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          2. Expected clinker :
        </label>
        <div className="cement_input">
          <input type="number" className="cement_input_value" min="1" max="100" {...register("d_42_expected_clinker", { required: true })} />
          <label className="cement_input_label">%</label>
        </div>
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          3. Grinding Aid dosing in Litre per tons :
        </label>
        <div className="cement_input">
          <input type="number" className="cement_input_value" {...register("d_72_grinding_aid_dosing", { required: true })} />
          <label className="cement_input_label">Liter</label>
        </div>
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          4. Current clinker cost per tons :
        </label>
        <div className="cement_input">
          <input type="number" className="cement_input_value"  {...register("d_37_total_clinker_cost", { required: true })} />
          <label className="cement_input_label">USD</label>
        </div>
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          5. Current Grinding Aid cost per ton :
        </label>
        <div className="cement_input">
          <input type="number" className="cement_input_value" {...register("d_73_grinding_non_clinker", { required: true })} />
          <label className="cement_input_label">USD</label>
        </div>
      </div>

      </form>

      { isSubmitted &&
        <Output data={calRes} /> 
      }

    </div>
  )
}

export default CementInput