import React, { useState } from 'react';


const Display = () => {

    const [name1, setName1] = useState("")
    const [name2, setName2] = useState("")
    const [result, setResult] = useState("")

    const submitHandler = ((e) => {
        e.preventDefault();
        let name_1 = name1
        let name_2 = name2
        let finalResult = ""
        name_1 = name_1.toLowerCase()
        name_2 = name_2.toLowerCase()
        name_1 = name_1.replace(" ","")
        name_2 = name_2.replace(" ","")
        
        let i = 0;
        while (i < name_1.length) {
            for (let j = 0; j < name_2.length; j++) {
                if (name_1[i] === name2[j]) {
                    name_1 = name_1.slice(0, i) + name_1.slice(i + 1); 
                    name_2 = name_2.slice(0, j) + name_2.slice(j + 1); 
                    i--;  
                    break;
                }
            }
            i++;
        }

        let count = name_1.length + name_2.length

        let flames = ["You are FRIENDS","You guys are in LOVE","You have AFFECTION for each other","You will end up in MARRIAGE","Oops you are ENEMIES","You are SOULMATES"]
        if (count > 0) {
            while (flames.length > 1) {
                let index = (count % flames.length) - 1;
                if (index >= 0) {
                    let left = flames.slice(0, index);
                    let right = flames.slice(index + 1);
                    flames = right.concat(left);  // Join right and left parts
                } else {
                    flames.pop();  // Remove the last element when index is -1
                }
            }
            setResult(flames[0])
        } else {
            setResult("Oops! You don't seem to be compatible with each other.")
        }
    });


  return (
    <>
      <div className='container'>
        <div className="headings">
            <h1>Flame Calculator</h1>
            <p>Enter two names to find out your relationship!</p>
        </div>
        <form onSubmit={submitHandler}>
            <h3>Your Name :</h3>
            <input type="text" value={name1} onChange={(e) => setName1(e.target.value)}/>
            <h3>Your Partner's Name : </h3>
            <input type="text" value={name2} onChange={(e) => setName2(e.target.value)}/>
            <button type="submit">Calculate Flames</button>
            <div className="result">
                <h5>{result}</h5>
            </div>
        </form>
      </div>
    </>
  )
}

export default Display
