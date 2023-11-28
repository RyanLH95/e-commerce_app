import Container from '@/components/Container'
import { sources } from 'next/dist/compiled/webpack/webpack'
import React from 'react'

const page = () => {
    async function getData() {
        try {
            const response = await import('@/helpers/trainers.json')
            return response
        } catch (err) {
            return
        }
    }
    return (
        <div>Page</div>
    )
}

export default page