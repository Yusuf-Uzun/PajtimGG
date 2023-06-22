import { FRONTEND_PORT, LOCALHOST_URL } from "../Constants";
function Logo(){
    return (
        <>
            <div className='img'>
                <a href={`${LOCALHOST_URL}${FRONTEND_PORT}`}>
                <img src="PajtimGG2.png" height={"20px"} width={"80px"}></img>
                </a>
            </div>
        </>
    )
}

export default Logo;