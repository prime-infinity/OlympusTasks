import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import EmptyCard from './innerComponents/EmptyCard'
import Task from './Task'

import { PendingIcon,OngoingIcon,InReviewIcon,DoneIcon } from './partsofui/Icons'


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
            {/**this is the icon to close card when it has been cliked */}
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
                                
                                <PendingIcon w={0} h={0} />

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

                                <OngoingIcon w={0} h={0} />

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

                              <InReviewIcon w={0} h={0} />  

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

                                <DoneIcon w={0} h={0} />

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