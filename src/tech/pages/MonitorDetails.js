import Button from '@mui/material/Button'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import { getMonitor } from '../../services/api'
import Container from '@mui/material/Container'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import Typography from '@mui/material/Typography';

const MonitorDetails = () => {
    const { monitorId } = useParams()
    console.log('useParams', monitorId);
    const monitor = getMonitor(monitorId)
    console.log('found monitor', monitor.id);

    const { image, title, text } = monitor
    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    return (
        <div>
            {/* <Container maxWidth="sm"> */}
            <Button variant="contained" color="secondary" onClick={back}> <BsArrowLeft/> Back </Button>
            <p/>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore/>}
                    aria-controls="panelia-content"
                    id="panelia-header"
                >
                    <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {text}
                    <p/>
                </AccordionDetails>
                </Accordion>
            {/* </Container> */}
        </div>
    )
}

export default MonitorDetails
