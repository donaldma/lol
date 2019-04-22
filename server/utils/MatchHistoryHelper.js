const { getTs, kayn } = require('../utils/Helpers')
const Constants = require('../config/Constants')

const getSummoner = async (req) => {
  const summoner = await kayn.SummonerV4.by.name(req.params.name).regionNoThrow(req.params.region)
  return {
    accountId: summoner.accountId,
    name: summoner.name,
    level: summoner.summonerLevel,
    icon: summoner.profileIconId,
    region: req.params.region
  }
}

const createQuery = async (req, startIndex, endIndex) => {
  let query = {}
  if (startIndex !== null) {
    query = { ...query, startIndex }
  }
  if (endIndex !== null) {
    query = { ...query, endIndex }
  }
  if (req.query.queue) {
    const queue = Constants.queues.find((x) => x.key === req.query.queue)
    if (queue) {
      query = { ...query, queue: queue.riot }
    }
  }
  if (req.query.champion) {
    const champion = await kayn.DDragon.Champion.getDataById(req.query.champion)
    if (champion) {
      query = { ...query, champion: champion.data[req.query.champion].id }
    }
  }
  return query
}

const massageMatchData = async (match) => {
  const champId = match.champion
  const matchData = await kayn.MatchV4.get(match.gameId)
  const champGameData = matchData.participants.find((x) => x.championId === champId)
  const stats = champGameData.stats
  const cs = stats.totalMinionsKilled + stats.neutralMinionsKilled
  const gameDurationMin = matchData.gameDuration / 60

  return {
    champion: {
      id: champId,
      level: stats.champLevel
    },
    gameCreation: matchData.gameCreation,
    creepScore: stats.totalMinionsKilled,
    creepScorePm: (cs / gameDurationMin).toFixed(1),
    gameDuration: matchData.gameDuration,
    items: [
      stats.item0,
      stats.item1,
      stats.item2,
      stats.item3,
      stats.item4,
      stats.item5,
      stats.item6
    ],
    kda: {
      kills: stats.kills,
      deaths: stats.deaths,
      assists: stats.assists,
      ratio: ((stats.kills + stats.assists) / stats.deaths).toFixed(2)
    },
    matchId: match.gameId,
    perks: {
      perkPrimaryStyle: stats.perkPrimaryStyle,
      perkSubStyle: stats.perkSubStyle
    },
    queueType: matchData.queueId,
    spells: [champGameData.spell1Id, champGameData.spell2Id],
    win: stats.win
  }
}

const getMatches = async (req, startIndex, endIndex) => {
  // get accountId
  const summoner = await getSummoner(req)
  // get matchList
  const query = await createQuery(req, startIndex, endIndex)
  const matchList = await kayn.MatchlistV4.by
    .accountID(summoner.accountId)
    .regionNoThrow(req.params.region)
    .query(query)
  const matchesPromises = matchList.matches.map((x) => massageMatchData(x))
  return {
    summoner,
    matches: await Promise.all(matchesPromises),
    created: getTs()
  }
}

module.exports = {
  getMatches
}
