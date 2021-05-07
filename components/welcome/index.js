const Welcome = ({ actionFunction }) => {
    return (
        <>
            <h1>Wanna learn some react today?</h1>
            <button onClick={actionFunction}>Let's Get Started</button>
        </>
    )
}

export default Welcome;