import React from 'react'
import {
  Form,
  FormControl,
} from 'react-bootstrap'

interface TextInputProps {
  name: string;
  type: string;
  id?: string;
  onChange: (args: any) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  value?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  placeholder?: string;
  inputRef?: any;
  onPaste?: () => void;
  error?: any;
  icon?: string | React.ReactNode;
  inputClass?: string;
}

function TextInput({
  name,
  type,
  id,
  onChange,
  onBlur,
  onFocus,
  value,
  maxLength,
  minLength,
  pattern,
  placeholder,
  inputRef,
  onPaste,
  error,
  icon,
  inputClass,
}: TextInputProps) {
  return (
    <React.Fragment>
      <div className="input-container">
        <FormControl
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={(evt) => onChange && onChange(evt.target.value)}
          onBlur={onBlur}
          onFocus={onFocus}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          placeholder={placeholder}
          ref={inputRef}
          autoComplete={"no-auto-complete"}
          onPaste={onPaste}
          className={inputClass}
        />
        {
          icon && <span className="input-icon">{icon}</span>
        }
        {
          error && error.message ? <>
            <Form.Control.Feedback type="invalid" >
              {error.message}
            </Form.Control.Feedback>
          </> : null
        }
      </div>
    </React.Fragment>
  )
}

export default TextInput
