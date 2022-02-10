import { useCallback,useState } from "react";
import { useDispatch } from 'react-redux'
import { deleteTask } from '../redux/taskSlice'

//task operations
import { unPinTask } from '../redux/taskSlice'
import { pinTask } from '../redux/taskSlice'

//task operations 2
import { markOngoing } from '../redux/taskSlice'
import { markInreview } from '../redux/taskSlice'
import { markDone } from '../redux/taskSlice'

import { saveTaskToAny } from "../redux/taskSlice"
import { debounce } from "lodash";

import { PendingIcon,OngoingIcon,InReviewIcon,DoneIcon } from './partsofui/Icons'

function Task({task,index}) {
    
    const dispatch = useDispatch()
    const [optSelec, setOptSel] = useState(-1)
    const [noteSelec, setNoteSel] = useState(-1)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedSubmit = useCallback(debounce(() => dispatch(saveTaskToAny()), 3000), []);

    return ( 
        <div className="col-12 col-md-6 mb-5 p-0 pl-md-1 pr-md-1">

            <div className="card bg-card-theme py-2 text-muted">

                <div className={`card-header pb-0 pt-0`}>
                    
                <div className="row">
                        <div className="col-1">
                        
                        {task.pined ?
                            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={()=> { dispatch(unPinTask(task.id)); debouncedSubmit() }} width="1em" height="1em" style={{fontSize: '25px'}} viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                            </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={()=> { dispatch(pinTask(task.id)); debouncedSubmit() }} width="1em" height="1em" style={{fontSize: '25px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg> 
                        }
                        </div>
                        <div className="col-4 text-left">
                        {task.pined ? "Unpin":"Pin"}
                        </div>
                    </div>
                    
                </div>

                <div className="card-body">

                    <div className="row">

                        <div className="col-12 text-break text-center">
                            <span className="h3 font-weight-bold text-theme">{task.name}</span> <br />
                            <span className="font-weight-bold">{task.date}</span> <br />
                        </div>

                        <div className={`col-12 text-break text-center ${noteSelec === index ? 'd-flex':'d-none'}`}>
                            {task.note}
                        </div>

                    </div>

                </div>

                <div className="card-footer pb-0 pt-0 text-muted">
                    <div className="row">

                        <div className="col-2 text-theme text-left">
                            
                            {
                                task.cat === 3 ?
                                        <DoneIcon w={1} h={1} /> :
                                task.cat === 0 ?
                                        <PendingIcon w={1} h={1} />:
                                task.cat === 1 ? 
                                        <OngoingIcon w={1} h={1} />:
                                task.cat === 2 ? 
                                        <InReviewIcon w={1} h={1} />:
                                null
                                
                            }
                            
                        </div>

                        <div className="col-8">
                            <div className={`row justify-content-end ${optSelec === index ? 'd-flex':'d-none'}`} id={`${index}`}>
                                 
                                <div className="col-3">
                                    {
                                        task.cat === 0 ? 
                                            <div onClick={()=> {  dispatch(markOngoing(task.id)); debouncedSubmit() }}>
                                                <OngoingIcon  w={1} h={1} s={0} />
                                            </div>:
                                        task.cat === 1 ?   
                                            <div onClick={()=> {  dispatch(markInreview(task.id)); debouncedSubmit() }}>
                                                <InReviewIcon  w={1} h={1} s={0} />
                                            </div>:
                                        task.cat === 2 ?
                                            <div onClick={()=> { dispatch(markDone(task.id)); debouncedSubmit() }}>
                                                <DoneIcon  w={1} h={1} s={0} />
                                            </div>:
                                        null
                                    }
                                </div>
                        
                                {!task.pined && <div className="col-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={()=> { dispatch(deleteTask(task.id)); debouncedSubmit() }} width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" style={{fontSize: '25px'}}>
                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </div>}

                                {task.note.length > 0 && <div className="col-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={noteSelec === index ? ()=>setNoteSel(-1) :()=>setNoteSel(index)}  width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" style={{fontSize: '25px'}}>
                                        <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                                    </svg>
                                </div>}

                            </div>
                        </div>
                        
                        <div className="col-2 text-right cursor-pointer" onClick={optSelec === index ? ()=>setOptSel(-1) :()=>setOptSel(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" style={{fontSize: '25px'}}>
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default Task;