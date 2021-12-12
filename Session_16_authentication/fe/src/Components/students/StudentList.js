import { useEffect } from 'react'
import Cart from '../Shared/Card'
import './StudentList.css'
import axios, { addJwt } from '../../Util/http'
export default function StudentList() {
    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get('/students')
        addJwt(token)
    }, [])
    return (
        <div className="student-list-container">
            <Cart className="student-list-body">
                <div>
                    Students
                </div>
            </Cart>
        </div>
    )
}
