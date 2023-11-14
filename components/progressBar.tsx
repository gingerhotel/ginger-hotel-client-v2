import React from 'react'
import * as Progress from 'react-native-progress'
import { Bar } from '../style/progressBarStyled'

function ProgressBar() {
    return (
        <Bar>
            <Progress.Bar
                progress={2 / 5}
                width={null}
                height={20}
                color={"#FFB199"}
                borderRadius={17}
            />
        </Bar>
    )
}

export default ProgressBar