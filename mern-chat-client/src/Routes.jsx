import { useContext } from "react";
import { UserContext } from "./ContextAPI/UserContex";
import RegisterAndLoginForm from "./Components/RegisterAndLoginForm";
import Chat from "./Components/Chat";

export default function Routes(){
    
  const {username} = useContext(UserContext);
  if(username){
    return <Chat></Chat>;
  }else{
    console.log("hi");
  }
    return(
        <RegisterAndLoginForm></RegisterAndLoginForm>
    )
}