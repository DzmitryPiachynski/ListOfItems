import React, {useState} from "react";

export function CreateProduct() {

    const [value, setValue] = useState('')

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
    }



    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className="border py-2 px4 mb-2 w-full outline-0"
                placeholder="Enter product title..."
                value = { value }
                onChange={event =>  setValue(event.target.value) }
            />

            <button type="submit" className="py-2 px-4 border bg-yellow-400 text-black hover:text-yellow-800">
                Create
            </button>
        </form>
    )
}