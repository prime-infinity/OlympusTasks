import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import EmptyCard from './innerComponents/EmptyCard'
import Task from './Task'


const TaskStast = () => {
    const tasks = useSelector((state) => state.task.tasks)
    const pendingTasks = tasks.filter((task) => task.cat === 0)
    const onGoingTasks = tasks.filter((task) => task.cat === 1)
    const inReviewTasks = tasks.filter((task) => task.cat === 2)
    const doneTasks = tasks.filter((task) => task.cat === 3)


    const [cardStateChange, setCardState] = useState(-1)
    const [fT,setFT] = useState([])

    
    const closeCard = ()=> {
        setCardState(-1)
    }

    useEffect(()=> {
        setFT(cardStateChange === -1 ? []:
        cardStateChange === 0 ? tasks.filter((task) => task.cat === 0):
        cardStateChange === 1 ? tasks.filter((task) => task.cat === 1):
        cardStateChange === 2?tasks.filter((task) => task.cat === 2):
        cardStateChange===3?tasks.filter((task) => task.cat === 3):
        [])
    },[cardStateChange,tasks])

    const divWithFiltered = (
        tasks.length === 0 ? <EmptyCard /> : fT.map((task,i) => (
            <Task task={task} index={i}  key={i}/>
        ))
    )

    const closeCardDiv = (
    <div onClick={closeCard} className="close-card col-2 col-md-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-theme" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
    </div>
    )

    return(
        <div className="row justify-content-between">

            <div className="col-12 mb-4 mt-4 mb-4 text-theme">
                <span className="h3 font-weight-bold">Overview</span>
            </div>

            <div className={`col-6 col-md-6 col-lg-3 mb-4 ${cardStateChange === -1 ? "cursor-pointer" : ""} `}>
                <div onClick={()=>setCardState(0)} className={`card py-2 text-muted ${cardStateChange === 0 ? "cardFixed bg-card-untheme" : "bg-card-theme"}`}>
                    <div className="card-body pt-5 pb-5">
                        <div className="row justify-content-center text-center pt-md-4 pb-md-4">
                            {cardStateChange === -1 ?
                            <div className="col-6">
                                
                                <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon-selected" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>

                            </div>:divWithFiltered}


                        </div>
                    </div>
                    <div className="card-footer text-muted">
                        <div className="row">
                            <div className="col-12">
                                Pending
                            </div>
                                
                            <div className="col-6 text-right text-theme abs-right">
                                {pendingTasks.length}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`col-6 col-md-6 col-lg-3 mb-4 ${cardStateChange === -1 ? "cursor-pointer" : ""} `}>
                <div onClick={()=>setCardState(1)} className={` card py-2 text-muted ${cardStateChange === 1 ? "cardFixed bg-card-untheme" : "bg-card-theme"}`}>
                    <div className="card-body pt-5 pb-5">
                        <div className="row justify-content-center text-center pt-md-4 pb-md-4">
                            {cardStateChange === -1 ?
                            <div className="col-6 ">

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 footer-icon-selected" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                                </svg>

                            </div>:divWithFiltered}
                        </div>
                    </div>
                    <div className="card-footer text-muted">
                        <div className="row">
                            <div className="col-12">
                                Ongoing
                            </div>
                            
                            <div className="col-6 text-right text-theme abs-right">
                                {onGoingTasks.length}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`col-6 col-md-6 col-lg-3 mb-4 ${cardStateChange === -1 ? "cursor-pointer" : ""} `}>
                <div onClick={()=>setCardState(2)} className={` card py-2 text-muted ${cardStateChange === 2 ? "cardFixed bg-card-untheme" : "bg-card-theme"}`}>
                    <div className="card-body pt-5 pb-5">
                        <div className="row justify-content-center text-center pt-md-4 pb-md-4">
                            {cardStateChange === -1 ?
                            <div className="col-6 ">

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 footer-icon-selected" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>

                            </div>:divWithFiltered}

                        </div>
                    </div>
                    <div className="card-footer ">
                        <div className="row">
                            <div className="col-12">
                                In Review
                            </div>
                            
                            <div className="col-6 text-right text-theme abs-right">
                                {inReviewTasks.length}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={`col-6 col-md-6 col-lg-3 mb-4 ${cardStateChange === -1 ? "cursor-pointer" : ""} `}>
                <div onClick={()=>setCardState(3)} className={` card py-2 text-muted ${cardStateChange === 3 ? "cardFixed bg-card-untheme" : "bg-card-theme"}`}>
                    <div className="card-body pt-5 pb-5">
                        <div className="row justify-content-center text-center pt-md-4 pb-md-4">
                            {cardStateChange === -1 ?
                            <div className="col-6">

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 footer-icon-selected" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>

                            </div>:divWithFiltered}
                        </div>
                    </div>
                    <div className="card-footer text-muted">
                        <div className="row">
                            <div className="col-12">
                                Done
                            </div>
                            
                            <div className="col-6 text-right text-theme abs-right">
                                {doneTasks.length}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {cardStateChange !== -1 ? closeCardDiv:null}
            
        </div>
        
    )
}
export default TaskStast