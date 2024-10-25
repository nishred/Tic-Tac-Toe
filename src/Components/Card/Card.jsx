import Icon from "../Icon/Icon"
import "./Card.css"

const Card = ({onPlay,player,index}) => {


   let icon = <Icon />
   
   if(player === "O")
   {

     icon = <Icon name={"circle"} />

   }
   else if(player === "X")
   {
      icon = <Icon name = {"cross"} />

   }


   return (
 
    <div className="card" onClick={() => {

       onPlay(index)

    }}>
    
     {icon}

    </div>
 
   )


}

export default Card