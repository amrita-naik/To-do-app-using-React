import Button from './Button'

const Header = ({title, onAdd, showAdd, onAdd2, showAdd2}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color = { showAdd ? 'firebrick' : 'dodgerblue' } text = {showAdd ? 'Close' : 'Task +'} onClick={onAdd}/>
            <Button color = { showAdd2 ? 'firebrick' : 'dodgerblue'} text = {showAdd2 ? 'Close' : 'Notes +'} onClick={onAdd2} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Manager',
}

// Header.propTypes = {
//     title: PropTypes.string.isRequired,
// }

export default Header
