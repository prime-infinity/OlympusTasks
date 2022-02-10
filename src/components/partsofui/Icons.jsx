export const UserPlaceholder = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon-selected" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
    )
}

const setWidth = w =>  w === 0 ? "have" : "1em" 

const setHeight = h =>  h === 0 ? "have" : "1em"


export const PendingIcon = ({w,h,s}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={setWidth(w)} height={setHeight(h)} style={{fontSize: '25px'}} className={`${s === 0 ? 'cursor-pointer':'footer-icon-selected' }`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
    )
}

export const OngoingIcon = ({w,h,s}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={setWidth(w)} height={setHeight(h)} style={{fontSize: '25px'}} className={`${s === 0 ? 'cursor-pointer':'footer-icon-selected' }`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
    )
}

export const InReviewIcon = ({w,h,s}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={setWidth(w)} height={setHeight(h)} style={{fontSize: '25px'}} className={`${s === 0 ? 'cursor-pointer':'footer-icon-selected' }`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
    )
}

export const DoneIcon = ({w,h,s}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={setWidth(w)} height={setHeight(h)} style={{fontSize: '25px'}} className={`${s === 0 ? 'cursor-pointer':'footer-icon-selected' }`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
    )
}
