import CitySearch from "./CitySearch"
import "./Header.css"

function Header({ setSelectedCity, searchMessage, setSearchMessage }) {
    return (
        <header className="weather-header">
            <h1>Simple Weather</h1>
            <CitySearch
                setSelectedCity={setSelectedCity}
                setSearchMessage={setSearchMessage}
                searchMessage={searchMessage} />
            {searchMessage && (
                <div className="search-message">
                    <strong>{searchMessage}</strong>{" "}
                    <button onClick={() => setSearchMessage("")}>X</button>
                </div>
            )}

        </header>
    )
}

export default Header;