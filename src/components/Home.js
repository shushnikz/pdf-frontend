import React from 'react'
import DefaultLayout from './DefaultLayout'

function Home() {
    return (
        <div>
            <DefaultLayout>
                <h1 className='text-center'>PDF Editor</h1>
                <div className='home'>
                    <img src='https://i.pcmag.com/imagery/articles/04EGLMsMLEcuZQytQ6d8YUP-14.fit_lim.v1644523968.jpg' alt='' />
                </div>
            </DefaultLayout>
        </div>
    )
}

export default Home
