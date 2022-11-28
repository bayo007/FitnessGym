import React from 'react'
import {plansData} from '../../data/plansData' 
import './Plan.css'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className='plans-container' id="plans">
    <div className='blur plans-blur-1'></div>
    <div className='blur plans-blur-2'></div>
        <div className='programs-header' style={{gap:'2rem'}}>
            <span className='stoke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stoke-text'>NOW WITHUS</span>
        </div>

        {/* plans card */}
        <div className='plans'>
            {plansData.map((plan,i)=>(
                <div className='plan' key={i}>
                {plan.icon}
                <span>{plan.name}</span>
                <span>${plan.price}</span>

                <div className='features'>
                    {plan.features.map((feature,i)=>(
                        <div className='feature'>
                            <img src={whiteTick} alt="" />
                            <span key={i}>{feature}</span>
                        </div>
                    ))}
                </div>

                <div><span>See Moe Benefits</span></div>
                <button className='btn'>Join Now</button>
                </div>
            ))}
        </div>
    </div>
  )
}
export default Plans