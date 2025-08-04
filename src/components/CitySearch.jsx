import { useState, useRef, useEffect } from "react";
import cities from "../data/cities.json";
import "./CitySearch.css";

export default function CitySearch({ setSelectedCity, setSearchMessage, searchMessage }) {
    const [query, setQuery] = useState("");
    const [showInput, setShowInput] = useState(false);
    const inputRef = useRef();

    const handleSearch = () => {
        const normalizedQuery = query
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        const city = cities.find((c) => {
            const normalizedCityName = c.city_name
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");
            return normalizedCityName === normalizedQuery;
        });

        if (city) {
            setSelectedCity(city.city_name);
            setSearchMessage(`Climate for ${city.city_name}`);
            setQuery("");
            setShowInput(false);
        } else {
            alert("City not found.");
        }
    };

    useEffect(() => {
        if (searchMessage) {
            setShowInput(false);
        }
    }, [searchMessage]);

    return (
        <div className="search-bar">
            {!searchMessage && (
                <button
                    className="search-btn"
                    onClick={() => {
                        if (showInput && query.trim()) {
                            handleSearch();
                        } else {
                            setShowInput(true);
                            setTimeout(() => inputRef.current?.focus(), 0);
                        }
                    }}
                >
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            )}

            {showInput && (
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search city..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                    className="search-input"
                />
            )}
        </div>
    );
}
