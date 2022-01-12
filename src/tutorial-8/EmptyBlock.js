import React from 'react'
import Loading from './Loading'

const EmptyBlock = ({load}) => {
    return (
        <div>
           {
             load  ? <Loading />  : 'нет данных...'
           }
        </div>
    )
}

export default EmptyBlock
