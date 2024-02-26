
import papers from "../data/papers.json";
import { useState } from 'react';

export default function SearchPapers() {

    // const journals = [...new Set(papers.map(papers => papers.journal))]

    const [filteredPapers, setfilteredPapers] = useState(papers);

    const handleSearch = (event: React.SyntheticEvent): void => {
        const target = event.target as typeof event.target & {
            value: string
        }

        if (target.value.length < 0) {
            setfilteredPapers(papers);
            return;
        }

        const regExp = new RegExp(target.value + "+", "i");
        setfilteredPapers(papers.filter(paper => regExp.test(paper.title + " " + paper.authors.join(" "))))
    }

    return (
        <div className='w-full p-5'>
            <div className='w-full'>
                <label htmlFor="search-box">Search</label>
                <input placeholder='Type to Search...' type="text" name="search-box" id="search-box" className='block w-full p-3 border border-cyan-900 focus:border-cyan-600 focus:border-2 outline-none rounded drop-shadow-md' onChange={handleSearch} />
            </div>

            <table className="table-auto mt-5 ">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-3">Titulo</th>
                        <th className="p-3">Autores</th>
                        <th className="p-3">Año</th>
                    </tr>
                </thead>

                <tbody >
                    {filteredPapers.map(entry =>
                        <tr className="border-t-2 border-b-2 border-slate-300">
                            <td> {entry.title} </td>
                            <td> {entry.authors} </td>
                            <td> {entry.year} </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
