import React, { useState } from "react";
import './taginput.css'

export const TagInput = () => {
    const [input, setInput] = useState('')
    const [tags, setTags] = useState([])
    const [isKeyReleased, setIsKeyReleased] = useState(false)

    const onChange = (e) => {
        const { value } = e.target
        setInput(value)
    }

    const onKeyDown = (e) => {
        const { key } = e
        const trimmedInput = input.trim()

        if (key === ',' && trimmedInput.length && !tags.includes(trimmedInput)) {
            e.preventDefault()
            setTags(prevState => [...prevState, trimmedInput])
            setInput('')
        }

        if (key === 'Backspace' && !input.length && tags.length && isKeyReleased) {
            e.preventDefault()
            const tagsCopy = [...tags]
            const poppedTag = tagsCopy.pop()

            setTags(tagsCopy)
            setInput(poppedTag)
        }

        setIsKeyReleased(false)
    }

    const onKeyUp = () => {
        setIsKeyReleased(true)
    }

    const deleteTag = (index) => {
        setTags(prevState => prevState.filter( (tag, i) => i !== index ))
    }

    return (
        <div className="container">
            {tags.map( (tag, index) => 
              <div className="tag">
                  {tag}
                  <button onClick={() => deleteTag(index)}>x</button>
              </div>
            )}
            <input
              value={input}
              placeholder="Enter a tag"
              onKeyDown={onKeyDown}
              onKeyUp={onKeyUp}
              onChange={onChange}
            />
        </div>
    )
}