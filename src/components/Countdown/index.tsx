import React from 'react'

export interface CountdownProps {
    deadline: Date
}

export interface ReadableTimeDelta {
    day: number,
    hour: number,
    minute: number,
    second: number,
}

export const useCountdown: (deadline: Date) => ReadableTimeDelta = (deadline) => {
    const [time, setTime] = React.useState({
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
    })

    React.useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now()
            const timeToDeadline = deadline.getTime()

            if (timeToDeadline < now) {
                return setTime({
                    day: 0,
                    hour: 0,
                    minute: 0,
                    second: 0,
                })
            }

            let delta = (timeToDeadline - now) / 1000
            let day = Math.floor(delta / (3600 * 24))
            delta = delta % (3600 * 24)
            let hour = Math.floor(delta / 3600)
            delta = delta % 3600
            let minute = Math.floor(delta / 60)
            delta = delta % 60
            let second = Math.floor(delta)

            setTime({
                day,
                hour,
                minute,
                second
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return time
}

const Countdown: React.FC<CountdownProps> = ({ deadline }) => {
    const time: ReadableTimeDelta = useCountdown(deadline)

    return (
        <p>
            {deadline.toLocaleString("id-ID", {
                dateStyle: "long",
                timeStyle: "long"
            })}
            <span>
                &nbsp;({time.day} days {time.hour} hours {time.minute} minutes {time.second} seconds left)
            </span>
        </p >
    )
}

export default Countdown
