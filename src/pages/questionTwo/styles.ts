const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
    },
    error: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        maxWidth: 600,
        minHeight: 500,
        margin: 48,
        display: 'flex',
        flexDirection: 'column' as const,
    },
    media: {
        height: 240,
        flexShrink: 0,
    },
    content: {
        height: '100%',
        overflow: 'auto',
    },
    body: {
        overflow: 'auto',
        textAlign: 'left' as const,
    },
    spinner: {
        justifyContent: 'center',
        display: 'flex',
        height: '100%',
        alignItems: 'center',
    },
};

export default styles;
