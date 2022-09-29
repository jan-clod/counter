import { ChangeEvent, useEffect, useState } from 'react';
import * as React from 'react';
import s from './../App.module.css';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

type propsType = {
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    error: boolean
    setError: (value: boolean) => void
}

export function Setting(props: propsType) {
    const [max, setMax] = useState(+'')
    const [start, setStart] = useState(0)

    useEffect(() => {
        let localStoragwValueMax = localStorage.getItem('max')
        let localStoragwValueStart = localStorage.getItem('start')
    })

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setError(false)
        if (+e.currentTarget.value === +NaN) {
            setMax(0)
        }
        setMax(+e.currentTarget.value)
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setError(false)
        setStart(+e.currentTarget.value)
    }
    const clickHandler = () => {
        if (start < max) {
            props.setMaxValue(max)
            props.setStartValue(start)
            localStorage.setItem('max', String(max))
            localStorage.setItem('start', String(start))
        } else {
            props.setError(true)
        }
    }

    return (
        <div className={s.Setting}>
            <div className={s.firstSetting}>
                <div className={s.firstSettingMaxValue}>
                    <TextField value={max} onChange={onChangeMaxValue} id="filled-basic" label="Max value:" variant="filled" />
                </div>
                <div className={s.firstSettingStartValue}>
                    <TextField value={start} onChange={onChangeStartValue} id="filled-basic" label="Start value:" variant="filled" />
                </div>
            </div>
            <div className={s.secondSetting}>
                <Button onClick={clickHandler} disabled={props.error} variant="text">set</Button>
            </div>
        </div>
    );
}