import { redirect } from "react-router-dom";

export const newEvent = async({params, request}) => {
    const formData = await request. formData()
    const event = {
        eventName: formData.get('eventTitle'),
        calendarDuration: formData.get('calendarDuration')
    }

    await fetch('http://localhost:4000/event/new', {
        method:'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(event)
    })
    return redirect('/home')
}