import { create } from 'zustand'


const useTournamentStore = create((set, get) => ({
    players: [], // [{id, name}]
    groupsCount: 4, // multiple of 4
    groupCap: 8, // recommended max players per group
    groups: [],


    setPlayers: (list) => set({ players: list }),
    setGroupsCount: (n) => set({ groupsCount: n }),
    setGroupCap: (n) => set({ groupCap: n }),
    setGroups: (g) => set({ groups: g }),
}))

export default useTournamentStore