import { useState, useRef, useEffect } from "react";
import cities from "../data/cities.json";
import "./CitySearch.css";

export default function CitySearch({ setSelectedCity, setSearchMessage, searchMessage }) {
    const [query, setQuery] = useState("");
    const [showInput, setShowInput] = useState(false);
    const containerRef = useRef(null);

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
        function handleClickOutside(event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setShowInput(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [searchMessage]);

    return (
        <div className="search-bar" ref={containerRef}>
            {!searchMessage && (
                <button
                    className="search-btn"
                    aria-label="Search"
                    onClick={() => {
                        if (showInput && query.trim()) {
                            handleSearch();
                        } else {
                            setShowInput(true);
                        }
                    }}
                >
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            )}

            {showInput && (
                <input
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
