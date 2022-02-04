import { setMenu } from '../../redux/menuSlice'
import { useDispatch } from 'react-redux'



function EmptyCard() {

    const dispatch = useDispatch()

    return ( 
        <div className="col-12 text-break">
            <div className="card bg-card-theme py-2">
                <div className="card-body pt-5 pb-5">
                    <div className="row">
                        <div className="col text-center">

                            <div className=" font-weight-bold  mb-1 h3 text-muted-native"><span>No tasks yet</span></div>
                            
                            <div className="row justify-content-center mt-4">
                                <div className="col-6">
                                    <button onClick={() => dispatch(setMenu(3))} className="btn btn-custom pt-3 pb-3 font-weight-bold">Add</button>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default EmptyCard;