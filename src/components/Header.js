
// import "../App.css"
const Header = ({ toggleAddTask, btnText, color }) => {
    const title = "Task Tracker"
    return (
        <header>
            <h1 >{title}</h1>
            <button onClick={toggleAddTask} className={`btn ${color}`} >{btnText}</button>
        </header>
    )
}

export default Header