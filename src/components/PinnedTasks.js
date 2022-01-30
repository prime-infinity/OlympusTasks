import { Swiper } from 'swiper/react/swiper';
import { SwiperSlide } from 'swiper/react/swiper-slide';
import { Pagination} from 'swiper';
import { EffectCards } from 'swiper';

import '../views/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/effect-cards/effect-cards.min.css';

import { useSelector } from 'react-redux'

const PinnedTasks = () => {

    const tasks = useSelector((state) => state.task.tasks)
    const pinnedTasks = tasks.filter((task) => task.pined)

    const returnCard = (task = {name:"No Pinned tasks"}) => {
        return (
            <div className="col-12 text-break">
                <div className="card bg-card-theme py-2">
                    <div className="card-body pt-5 pb-5">
                        <div className="row text-center">
                            <div className="col mr-2">
                                <div className=" font-weight-bold  mb-1 h3 text-muted-native"><span>{task.name}</span></div>
                                {task.date && <div className="text-theme"><span>{task.date}</span></div>}
                                {task.note && <p className="text-muted-native">{task.note}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }

    return (

        <div className="row">

            
            <div className="col-12 mt-4 mb-4 text-theme">
                <span className="font-weight-bold h3">
                    Pinned Tasks
                </span>
                
            </div> 
            
            
            {pinnedTasks.length === 0 ? returnCard() : <Swiper
                modules={[Pagination,EffectCards]}
                spaceBetween={1}
                slidesPerView={1}
                pagination={{ clickable: true }}
                effect="cards"
                grabCursor={true}
            >
                {pinnedTasks.map((task, el) => {
                    return (
                        <SwiperSlide key={el}>
                            
                            {returnCard(task)}

                        </SwiperSlide>
                    )
                    
                })}
                
            </Swiper>}

        </div>
    )
}
export default PinnedTasks