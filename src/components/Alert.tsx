import React,{ useState} from "react";
import SweetAlert from "react-bootstrap-sweetalert";
const Alert = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <div>
      <SweetAlert
        title={"Uses render props"}
        onConfirm={()=>{setToggle(false)}}
        onCancel={()=>{setToggle(false)}}
      >
        "Mian Zubair"
      </SweetAlert>
    </div>
  );
};

export default Alert;
