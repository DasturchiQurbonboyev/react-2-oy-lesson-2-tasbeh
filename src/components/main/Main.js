import React, { useState } from 'react';
import { increment, dec } from '../../context/counter';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../navbar/Navbar';
import { GoChevronDown, GoChevronUp } from "react-icons/go";



function Main() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
    const [incNum, setIncNum] = useState(0)
    const [decNum, setDecNum] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault();
        var incrementNum = e.target.elements.increment.value;
        setIncNum((+incrementNum >= 0 ? +incrementNum : 0) ? +incrementNum : 0)
        setDecNum((+incrementNum > count ? +incrementNum : 0) + 1 ? +incrementNum : 0)
    };



    return (
        <div className='mx-auto max-w-[800px] w-full ' >
            <form className="form-horizontal flex gap-[10px] flex-col items-center" onSubmit={onSubmit}>
                <div className='mt-20 flex justify-center items-center gap-8'>
                    <input className='border-none bg-[#222222] py-3 rounded-[50px] text-white outline-none px-8 w-[200px] form-control' placeholder="Enter number" type="number" name="increment" />
                    <button className='border-none rounded-[50px]  bg-[#222222] px-8 py-3 text-white p-2' type="submit">Save</button>
                    <a className='text-white bg-[#222222] rounded-[50px] py-3 px-8    ' href="">reset</a>
                </div>
                <Navbar />
                <div className='flex flex-col justify-center items-center'>
                    <button type='button' className='border-[10px] border-[#000] active:border-[#00EA86] active:bg-[#007543]   rounded-[50%] bg-[#01301C] text-[#00EA86] p-2' onClick={() => dispatch(increment(incNum ? incNum : 1))}><GoChevronUp className='size-[200px]' /></button>
                    <button disabled={(count - decNum <= 0)} type='button' className='-mt-[60px] border-[#000] active:bg-[#007543] active:border-[#00EA86] border-[10px] rounded-[50%] bg-[#01301C] text-[#00EA86] p-2' onClick={() => dispatch(dec(decNum ? decNum : 1))}><GoChevronDown className='size-[70px]' /></button>
                </div>
            </form>
        </div>
    );
}

export default Main;
