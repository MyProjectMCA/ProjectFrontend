import React from 'react'

function Alert(props) {
  
  const capitalize = (word) => {
    if(word === "red"){
      word = "Error"
    }else{
      word = "success"
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  
  const alertClasses = () => {
    return `p-4 m-2 w-96 flex justify-center items-center rounded absolute top-0 right-0
  ${props.alert.type === 'green' ? 'bg-green-100' : 'bg-red-100'}`;
  }

  return (
    <div className="relative">
      {props.alert &&
        <div className={alertClasses()}>
          <div>
          <strong>{capitalize(props.alert.type)}</strong> : {props.alert.message}
          </div>
        </div>
      }
    </div>
  );
}

export default Alert