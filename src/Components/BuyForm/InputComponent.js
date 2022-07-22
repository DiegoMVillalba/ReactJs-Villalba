import React from 'react'
import { GroupInput, IconValidation, LegendError, Label, Input } from '../BuyForm/Elements/StyledForm'
import {faCheckCircle,faTimesCircle,} from "@fortawesome/free-solid-svg-icons";


const InputComponent = ({state, changeState, type, label, placeholder, name, legndError, regularExpression,  required }) => {
    const onChange = (e) =>{
        changeState({...state, field:e.target.value});
    };


    const validation = () => {
		if (regularExpression) {
			if (regularExpression.test(state.field)) {
				changeState({ ...state, valid: "true" });
			} else {
				changeState({ ...state, valid: "false" });
			}
		}
		
	};

    
  return (
    <div>
    <Label htmlFor={name} valido={state.valid}>{label}</Label>
    <GroupInput>
        <Input 
            type={type}
            placeholder={placeholder} 
            id={name}
            value={state.field}
            onChange={onChange}
            onKeyUp={validation}
            onBlur={validation}
            valid={state.valid}
            required ={required}
        />
        <IconValidation
            icon={state.valido === 'true' ? faCheckCircle : faTimesCircle}
            valid={state.valid}
        />
    </GroupInput>
    <LegendError validd={state.valid}>{legndError}</LegendError>
</div>
  )
}

export default InputComponent

