import React from "react";
import Button from '@mui/material/Button'
import './tags.css'

const list = ['test1', 'test2', 'test3', 'test4', 'test5']

export const Tags = () => {
    return (
        <div>
            {
                list.map((item) => (
                    <Button class="button button-round" variant="outlined" size="small">
                        {item}
                    </Button>
                ))
            }
        </div>
    )
}