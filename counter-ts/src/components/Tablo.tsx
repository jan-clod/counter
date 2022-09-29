import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import s from './../App.module.css';

type propsType = {
    maxValue: number
    startValue: number
    error: boolean
    setError: (value: boolean) => void
}

export function Tablo(props: propsType) {
    const [valueTablo, SetValueTablo] = useState(props.startValue)
    const [errorInc, setErrorInc] = useState(false)
    const increment = () => {
        valueTablo === props.maxValue ? setErrorInc(true) : SetValueTablo(valueTablo + 1)
    }
    const reset = () => {
        SetValueTablo(props.startValue)
        setErrorInc(false)
    }
    return (
        <div className={s.Tablo}>
            <div className={s.firstTablo}>
                {props.error ? <p className={s.error}>404</p> : <p>'enter values:' {valueTablo}</p>}
            </div>
            <div className={s.secondTablo}>
                <Button onClick={increment} disabled={errorInc} variant="text">inc</Button>
                <Button onClick={reset} variant="text">reset</Button>
            </div>
        </div>
    );
}