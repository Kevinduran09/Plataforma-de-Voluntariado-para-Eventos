import React from 'react'
import { Outlet } from 'react-router'
import Header from '~/components/header'
import Toast from '~/components/Toast'

export default function layout() {
    return (
        <>
            <Header />
            <div>
                <Toast />
                <Outlet />
            </div>
            
        </>
    )
}
