export function suggestGroupsCount(totalPlayers, capPerGroup = 8){
    if (totalPlayers <= 0) return 4
    // find smallest g in {4,8,12,...} so that ceil(N/g) <= cap
    for (let g = 4; g <= 2000; g += 4){
        const per = Math.ceil(totalPlayers / g)
        if (per <= capPerGroup) return g
    }
    return 4
}


export function isMultipleOf4(n){
    return n > 0 && n % 4 === 0
}


export function distributePlayers(players, groupsCount){
    const groups = Array.from({ length: groupsCount }, () => [])
    players.forEach((p, i) => {
        groups[i % groupsCount].push(p)
    })
    return groups
}


export function shuffleArray(arr){
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
}