import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Icon =(props)=>{

   let isWinning = props.iconList.filter(x=> x== props.icon).length > 1 ? "bounce winning" : "";

    return (
        <div className="col col-xs-4">
            <FontAwesomeIcon className={`icons fadeIn ${isWinning}`} icon={props.icon}/>
        </div>      
    )
}
export default Icon