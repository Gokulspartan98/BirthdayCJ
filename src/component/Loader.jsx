import React from 'react'

const Loader = () => {
    return (
        <>
            <div id="wrapper">
                <div id="corpus"></div>
                <div id="spinner"></div>
            </div>
            <div id="text">&nbsp;Loading ...</div>
        </>
    )
}

export default React.memo(Loader)