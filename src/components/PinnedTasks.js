import { Swiper } from 'swiper/react/swiper';
import { SwiperSlide } from 'swiper/react/swiper-slide';
import { Pagination} from 'swiper';
import { EffectCards } from 'swiper';

import '../views/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/effect-cards/effect-cards.min.css';

const PinnedTasks = () => {
    return (

        <div className="row">

            
            <div className="col-12 mt-4 mb-4 text-theme">
                <span className="font-weight-bold h3">
                    Pinned Tasks
                </span>
                
            </div> 
            
            <Swiper
                modules={[Pagination,EffectCards]}
                spaceBetween={1}
                slidesPerView={1}
                pagination={{ clickable: true }}
                effect="cards"
                grabCursor={true}
            >
                {[1, 2, 3, 4].map((i, el) => {
                    return (
                        <SwiperSlide key={el}>
                            
                            <div className="col-12 text-break">
                                <div className="card bg-card-theme py-2">
                                    <div className="card-body pt-5 pb-3">
                                        <div className="row text-center">
                                            <div className="col mr-2">
                                                <div className=" font-weight-bold  mb-1 h3 text-muted-native"><span>Do Something else</span></div>
                                                <div className="text-theme"><span>11-21-20 {el}</span></div>
                                                <p className="text-muted-native">this is a small note attaced</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 

                        </SwiperSlide>
                    )
                    
                })}
                
            </Swiper>

        </div>
    )
}
export default PinnedTasks