import React from "react";

// PROPS

// id={""} labelName={""} required={true/false} type={""} placeholder={""} onChange={} value={}
var InputLine = props => {
  return (
    <div className="form-group row">
      <label htmlFor={props.id} className="col-sm-2 col-form-label">
        {props.labelName}
      </label>
      <div className="col-sm-10">
        <input
          autoComplete="on"
          required={props.required ? true : false}
          type={props.type}
          className="form-control"
          id={props.id}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
          pattern={
            props.type === "password"
              ? "[A-Za-z0-9]{8,20}"
              : "[a-zA-Z0-9]{1,20}"
          }
        />
      </div>
    </div>
  );
};

export default InputLine;