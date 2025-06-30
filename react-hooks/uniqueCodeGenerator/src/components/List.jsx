import React from 'react'

const List = () => {

    const company = ["TCS", "Wipro", "Cisco"];
    const handleClick = () => {
        console.log(company[1])
        alert(`you clicked ${company[1]}`);
    };

    return (
        <div>
            <ul>
                {company.map((company) => (
                    <button
                        id ={1}
                        onClick={()=>{handleClick(company)}}>
                        {company}
                    </button>
                ))}
            </ul>
        </div>
    )
}

export default List