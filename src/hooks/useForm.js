import {useState} from "react";

export const useForm = (initialState = {}) => {

    const [formState, setFormState] = useState(initialState);

    const onFormChange = ({target}) => {
        const { name, value } = target;

        setFormState( dt => {
            return {
                ...dt,
                [name]: value
            }
        })
    }

    const onReset = () => {
        setFormState(initialState);
    }

    return {
        ...formState,
        formState,
        onFormChange,
        onReset
    }

}