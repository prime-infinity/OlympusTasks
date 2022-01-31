import { useState } from "react";
import { useDispatch } from 'react-redux'
import { deleteTask } from '../redux/taskSlice'
import { unPinTask } from '../redux/taskSlice'

function Task({task,index}) {
    
    const dispatch = useDispatch()
    const [optSelec, setOptSel] = useState(-1)
    const [noteSelec, setNoteSel] = useState(-1)

    return ( 
        <div className="col-12 col-md-6 mb-5 p-0 pl-md-1 pr-md-1">

            <div className="card bg-card-theme py-2 text-muted">

                <div className={`card-header ${task.pined ? 'pb-0 pt-0':''}`}>
                    
                {task.pined &&<div className="row">
                        <div className="col-1">
                        
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={()=> dispatch(unPinTask(task.name)) } width="1em" height="1em" style={{fontSize: '25px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg> 
                        </div>
                        <div className="col-4 text-left">
                            Unpin
                        </div>
                    </div>
                }
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

                        <div className="col-2 text-theme">
                            
                            {
                                task.cat === 3 ? <svg xmlns="http://www.w3.org/2000/svg"  width="1em" height="1em" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{fontSize: '25px'}}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg> :
                                task.cat === 0 ? <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{fontSize: '25px'}}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg> :
                                task.cat === 1 ? <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{fontSize: '25px'}}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg> :
                                task.cat === 2 ? <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{fontSize: '25px'}}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg> :
                                null
                                
                            }
                            
                        </div>

                        <div className="col-8">
                            <div className={`row justify-content-end ${optSelec === index ? 'd-flex':'d-none'}`} id={`${index}`}>

                                {/*<div className="col-3">
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" style={{fontSize: '25px'}}>
                                        <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                                    </svg>
                                </div>

                                <div className="col-3">
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" style={{fontSize: '25px'}}>
                                        <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                                    </svg>
                                </div>*/}

                                <div className="col-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" onClick={()=> dispatch(deleteTask(task.name)) } width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" style={{fontSize: '25px'}}>
                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </div>

                                {task.note.length > 0 && <div className="col-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" onClick={noteSelec === index ? ()=>setNoteSel(-1) :()=>setNoteSel(index)}  width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" style={{fontSize: '25px'}}>
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