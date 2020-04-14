import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Summary() {
    useEffect(() => {
        axios.get('https://api.covid19api.com/summary')
        .then(response => console.log(response))
    })

    return (
        <div></div>
    )
}


export default Summary