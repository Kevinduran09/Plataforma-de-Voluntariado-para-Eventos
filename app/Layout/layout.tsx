import React from 'react'
import { Outlet } from 'react-router'
import Header from '~/components/header'
import NetworkStatus from '~/components/NetworkStatus'
import Toast from '~/components/Toast'

export default function layout() {
    return (
        <>
            <Header />
            <div>
                <NetworkStatus />
                <Toast />
                <Outlet />
            </div>
            
        </>
    )
}
