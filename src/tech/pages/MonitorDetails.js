import Button from '@restart/ui/esm/Button'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import { getMonitor } from '../../services/api'

const MonitorDetails = () => {
    const { monitorId } = useParams()
    console.log('useParams', monitorId);
    const monitor = getMonitor(monitorId)
    console.log('found monitor', monitor.id);

    const { img, title, text } = monitor
    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    return (
        <div>
            <Button variant="primary" onClick={back}> <BsArrowLeft/> </Button>
        <div>{img}</div>
        <div>{title}</div>
        <div>{text}</div>
        </div>
    )
}

export default MonitorDetails
