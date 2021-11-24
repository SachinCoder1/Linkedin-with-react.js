import React from 'react'
import styled from 'styled-components'

function Loader() {
    return (
        <LoadingCont>
            <img src="/images/loading.gif" alt="" />
        </LoadingCont>
    )
}

export default Loader

const LoadingCont = styled.div`
text-align:center;
margin: 7px;

`

