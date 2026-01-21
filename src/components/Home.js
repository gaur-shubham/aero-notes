import UserNotes from './UserNotes';

export const Home = ({ showAlert }) => {
    return (
        <div>
            <UserNotes showAlert={showAlert} />
        </div>
    )
}

export default Home