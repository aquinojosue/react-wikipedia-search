import React, {useState, useEffect} from 'react';
import List from './List';
import axios from 'axios';

const Search = () => {
    const [value,setValue] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        let timerId = null;
        if(value){
            timerId = setTimeout(async () => {
                const {data} = await axios.get("https://es.wikipedia.org/w/api.php", {
                    params: {
                        action: "query",
                        list: "search",
                        origin: "*",
                        format: "json",
                        srsearch: value
                    }
                });

                setResults(data.query.search);
            }, 500);
        } else{
            setResults([])
        }

        return() => {
            clearTimeout(timerId);
        }
    }, [value]);
    
  

    return(
        <>
            <form className="ui form">
                <div className="ui icon input">
                    <input 
                    type="text"
                    placeholder="Buscar en la wikipedia"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    />
                    <i class="circular redo link icon" 
                    onClick={() => setValue('')}></i>
                </div>
            </form>
            <List results={results}/>
        </>
    );
}

export default Search;