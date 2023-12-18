import '../sass/Button.scss'



export const Button = ({icon, handelClick}) => {
    return( 
        <div className='btn-box'>
            <button 
                className="btn"
                onClick={handelClick}
            >{icon}
            </button>
            <div className='btn-shadow'></div>
        </div>
    )
};