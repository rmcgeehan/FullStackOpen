import React from "react"



const Part = ({parts}) => {
    let exerciseCount = 0
    
    parts.map(part => exerciseCount+=part.exercises)

    return (
        <div>
            {parts.map(part =>
            <p key={part.id}>
                {part.name} {part.exercises}
            </p>
            )
            }
        <b>Total exercises in course {exerciseCount}</b>
        </div>
    )
}

export default Part