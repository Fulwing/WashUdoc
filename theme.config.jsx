export default {
    logo: <span>WashU Helper Documentation</span>,
    project: {
        link: 'https://github.com/Fulwing/washudoc'
    },
    feedback: {
        content: '有问题？那就提出来吧',
        useLink: () =>
            `https://github.com/Fulwing/cse330doc/issues/new?title=Feedback%20for%20&labels=question`,
    },
    editLink: {
        component: null,
    },
    useNextSeoProps() {
        return {
            titleTemplate: '%s - WashU Helper'
        }
    },
    logo: (
        <>
            <img src="/icon/doc-.png" alt="WashU Helper Guide" width="24" height="24" />
            <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
                WashU Helper Guide
            </span>
        </>
    ),
    head: (
        <>
            <link rel="icon" href="/icon/favicon.ico" />
        </>
    ),
    footer: {
        text: (
            <span>
                MIT {new Date().getFullYear()} ©{' '}
                <a href="https://github.com/Fulwing" target="_blank">
                    Fulwin
                </a>
                .
            </span>
        )
    },
    banner: {
        key: 'release',
        dismissible: true,
        text: (
            <p>🎉 从330转为WashU帮助手册啦! </p>
        ),
    }
};
