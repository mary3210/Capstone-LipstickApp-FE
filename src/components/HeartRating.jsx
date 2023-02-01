import React from "react"
import { useState } from "react"
import { FaHeart } from "react-icons/fa"
import "./HeartRating.css"

const HeartRating = (props) => {
    const [values, setValues] = useState(null)
    const [hover, setHover] = useState(null)
    const setRating = props.setRating

    return (
        <div className="hearts">
        {[...Array(5)].map((heart, index) => {
                const heartValue = index + 1
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={heartValue}
                            onClick={() => {
                                setValues(heartValue)
                                setRating(heartValue)
                            }}
                        />
                        <FaHeart className="heart" color={heartValue <= (hover || values) ? "#FF61CA" : "#DFDFD5"}
                            onMouseEnter={() => setHover(heartValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                )
            })}
        </div>
    )
}

export default HeartRating