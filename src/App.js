import React from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

function App() {
    const [dark, setDark] = React.useState(() => {
        // Get the initial value from local storage or default to false
        const savedDarkMode = localStorage.getItem('darkMode');
        return savedDarkMode === 'true';
    });

    React.useEffect(() => {
        // Apply dark mode class based on the state
        if (dark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
        // Save dark mode preference in local storage
        localStorage.setItem('darkMode', dark);
    }, [dark]);

    const darkModeHandler = () => {
        setDark(prevDark => !prevDark);
    };

    return (
        <div className="bg-yellow-100 dark:bg-blue-900 min-h-screen">
            <button onClick={darkModeHandler} className="fixed top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-md">
                {dark ? <IoSunny /> : <IoMoon />}
            </button>
            {/* Include the rest of your app here */}
        </div>
    );
}

export default App;
