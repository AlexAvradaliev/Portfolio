import { createContext, useContext, useState } from 'react';

import {inputEmail, inputText} from '../../../utils/validation';

export const FormContext = createContext();

const removeErrorProperties = (oldState, name) => {
    const state = { ...oldState };
    delete state[name];
    return state;
};

const addErrorProperties = (oldState, name, result) => {
    const state = ({ ...oldState, [name]: result[name] });
    return state;
};

export const FormProvider = ({ children }) => {

    const [value, setValue] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});


    const changeValue = (name, value) => {

        setValue(state => ({
            ...state,
            [name]: value
        }));
    };

    const checkData = (name, value) => {
        if (name === 'email') {

            const result = inputEmail(name, value);

            result
                ? setErrors(state => addErrorProperties(state, name, result))
                : setErrors(state => removeErrorProperties(state, name))
            return result;

        } else if (name === "name") {

            const result = inputText(name, value);

            result
                ? setErrors(state => addErrorProperties(state, name, result))
                : setErrors(state => removeErrorProperties(state, name))
            return result;
        }else if (name === "message") {

            const result = inputText(name, value);

            result
                ? setErrors(state => addErrorProperties(state, name, result))
                : setErrors(state => removeErrorProperties(state, name))
            return result;
        };
    };

    const initialState = () => {
        setValue({
            name: '',
            email: '',
            message: ''
        });
    };

    const isFormValid = () => {
        let isValid = false;

        Object.entries(value).map(x => {
            const name = x[0];
            const value = x[1];

            const result = checkData(name, value);
            if (result) {
                isValid = true;
            };
            return null;
        });

        if (isValid) {
            return false;
        } else {
            return true;
        };
    };


    return (
        <FormContext.Provider value={{value, changeValue, errors, checkData, isFormValid, initialState}}>
            {children}
        </FormContext.Provider>
    );
};

export const useFormContext = () => {
    const formState = useContext(FormContext);

    return formState;
};