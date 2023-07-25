import { useContext } from "react";
import { UserContext } from "./ContextAPI/UserContex";
import RegisterAndLoginForm from "./Components/RegisterAndLoginForm";

export default function Routes(){
    
  const {username,id} = useContext(UserContext);
  if(username){
    return 'Logged In!'+username;
  }else{
    console.log("hi");
  }
    return(
        <RegisterAndLoginForm></RegisterAndLoginForm>
    )
}