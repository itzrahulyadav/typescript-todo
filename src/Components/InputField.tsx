import React, { useRef,useState } from 'react';

type Props = {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className="input" onSubmit = {(e) =>{handleAdd(e);inputRef.current?.blur()}}>
            <input type="text"
                placeholder="enter a task"
                className="input_box"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                ref = {inputRef}
            />
            <button type="submit" className="input_submit">
                Go
            </button>
        </form>
    )
}

export default InputField;