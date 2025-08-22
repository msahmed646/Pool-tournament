import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useTournamentStore from '../store/useTournamentStore'
import Shuffle from '../components/Shuffle'
import { suggestGroupsCount, isMultipleOf4 } from '../utils/grouping'


export default function Registration(){
    const nav = useNavigate()
    const { setPlayers, groupsCount, setGroupsCount, groupCap } = useTournamentStore()


    const [rawNames, setRawNames] = useState('')
    const [num, setNum] = useState(0)
    const [shuffling, setShuffling] = useState(false)


    const namesFromText = () => rawNames
        .split('\n')
        .map(s => s.trim())
        .filter(Boolean)
        .map((name, idx) => ({ id: idx+1, name }))


    const genPlaceholders = (n) => Array.from({ length: n }, (_, i) => ({ id: i+1, name: `Player ${i+1}` }))


    const total = () => {
    const t1 = namesFromText().length
    const t2 = Number(num) || 0
    return t1 || t2
    }


    const handleSuggest = () => {
    const t = total()
    const g = suggestGroupsCount(t, groupCap)
    setGroupsCount(g)
    }


    const handleContinue = async () => {
        const t = total()
        if (!t){ alert('Please enter player names or a number.'); return }
        if (!isMultipleOf4(groupsCount)){
        alert('Groups count must be a multiple of 4.');
        return
        }
        const list = namesFromText().length ? namesFromText() : genPlaceholders(Number(num))
        setPlayers(list)
        setShuffling(true)
        setTimeout(() => nav('/groups'), 1200)
    }


    return (
        <div className="page container">
            <h3 className="mb-3">Registration</h3>


            <div className="row g-3">
                <div className="col-md-6">
                    <label className="form-label">Paste player names (one per line)</label>
                    <textarea className="form-control" rows={10} value={rawNames} onChange={e=>setRawNames(e.target.value)} placeholder={`Alice\nBob\nCharlie`} />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Or enter number of players</label>
                    <input type="number" className="form-control" min={0} value={num} onChange={e=>setNum(e.target.value)} placeholder="e.g., 24" />


                    <div className="mt-3">
                        <label className="form-label">Groups (must be multiple of 4)</label>
                        <div className="input-group">
                            <input type="number" className="form-control" value={groupsCount} onChange={e=>setGroupsCount(Number(e.target.value)||0)} />
                            <button className="btn btn-outline-secondary" onClick={handleSuggest}>Suggest</button>
                        </div>
                        <div className="form-text">We recommend keeping ≤ {groupCap} players per group.</div>
                    </div>


                    <div className="mt-3">
                    <button className="btn btn-table" onClick={handleContinue}>Generate Groups</button>
                    </div>
                </div>
            </div>


            <div className="mt-4">
                <Shuffle run={shuffling} />
            </div>
        </div>
    )
}