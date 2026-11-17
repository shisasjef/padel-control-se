export type TeamIndex = 0 | 1;
export type PlayerIndex = 0 | 1;
export type DeuceRule = 'golden' | 'adv' | 'star';
export type FinalSetRule = 'normal' | 'supertb';
export type ChangeoverRule = 'odd' | 'set' | 'none';
export type MatchContextKind = 'daily' | 'league' | 'tournament';
export type MatchStatus = 'playing' | 'paused' | 'finished' | 'abandoned';
export type ShotType = 'pt' | 'winner' | 'ue' | 'fe' | 'df';
export type SubShotType =
  | 'winner'
  | 'smash'
  | 'volea'
  | 'bandeja'
  | 'bajada'
  | 'dejada'
  | 'passing'
  | 'globo';

export interface MatchTeam {
  players: string[];
  color: string;
}

export interface MatchRules {
  totalSets: number;
  setsToWin: number;
  gamesPerSet: number;
  deuceRule: DeuceRule | string;
  tiebreakAt: number;
  tiebreakPoints: number;
  finalSet: FinalSetRule | string;
  changeoverRule: ChangeoverRule | string;
}

export interface MatchEvent {
  w: number;
  type?: ShotType | string;
  by?: number[] | null;
  fs?: boolean;
  sub?: string | null;
}

export interface MatchCompetitionMeta {
  kind: MatchContextKind | string;
  compId?: string | null;
  compName?: string;
  fixtureId?: string | null;
  stageLabel?: string;
}

export type ManualSetEntry = [
  number,
  number,
  number | 'draw' | null,
  [number, number] | number[] | null,
  number?
];

export interface ManualPlayerStatEntry {
  w?: number;
  u?: number;
  f?: number;
  st?: number;
  sw?: number;
  fs?: number;
  df?: number;
  sh?: Record<string, number>;
}

export interface Match {
  id: string;
  createdAt: number;
  durationMs: number;
  status: MatchStatus | string;
  mode: string;
  competition?: MatchCompetitionMeta | null;
  teams: MatchTeam[];
  rules: MatchRules;
  firstServer: number[];
  secondServerIdx: number | null;
  shotPrompt?: boolean;
  flipped?: boolean;
  pendingFault?: boolean;
  events: MatchEvent[];
  redoStack?: MatchEvent[];
  manualSets?: ManualSetEntry[] | null;
  manualWinner?: number | 'draw' | null;
  isDraw?: boolean;
  isWalkover?: boolean;
  manualPlayerStats?: Record<string, ManualPlayerStatEntry> | null;
  _ts?: number;
  _syncTs?: number;
}

export interface PointRecord {
  idx: number;
  setIdx: number;
  gameIdx: number;
  w: number;
  srvTeam: number;
  srvPlayer: number;
  firstServeIn: boolean;
  doubleFault: boolean;
  shotType: string;
  subType: string | null;
  byPlayer: number[] | null;
  scoreBefore: string;
  scoreAfter: string;
  pBefore: number[];
  isTB: boolean;
  isSuperTB: boolean;
  isGP: boolean;
  isStar: boolean;
  isBP: boolean;
  isKey: boolean;
}

export interface GameRecord {
  setIdx: number;
  gameIdx: number;
  srvTeam: number;
  srvPlayer: number;
  winner: number;
  isBreak: boolean;
  isTB: boolean;
  isSuperTB: boolean;
  tbScore: number[] | null;
  gamesAfter: number[];
  points: PointRecord[];
}

export interface SetRecord {
  games: number[];
  history: GameRecord[];
  winner: number | null;
  tbScore: number[] | null;
  isSuperTB: boolean;
}

export interface MatchTransition {
  type: 'match' | 'set' | 'game' | 'tb_changeover';
  winner?: number;
  setIdx?: number;
  changeover?: boolean;
  wasBreak?: boolean;
  needSecondServerPrompt?: boolean;
  tbScore?: number[];
}

export interface ComputedMatchState {
  sets: SetRecord[];
  curSetIdx: number;
  curSet: SetRecord;
  setsWon: number[];
  matchWinner: number | null;
  isDraw: boolean;
  p: number[];
  pointDisplay: string[];
  srvTeam: number;
  srvPlayer: number;
  srvSide: 'D' | 'R' | null;
  srvSideLabel: string;
  isTB: boolean;
  isSuperTB: boolean;
  isGP: boolean;
  isStar: boolean;
  curDeuceCount: number;
  curAdvNumber: number;
  isBP: boolean;
  sp: [boolean, boolean];
  mp: [boolean, boolean];
  curGamePoints: PointRecord[];
  allPoints: PointRecord[];
  totalGamesPlayed: number;
  lastTransition: MatchTransition | null;
}

export interface Participant {
  id: string;
  type: 'pair' | 'player' | string;
  name?: string;
  players?: string[];
  color?: string;
  group?: string | null;
  groupManual?: boolean;
  paused?: boolean;
}

export interface BracketTeamObj {
  players: string[];
  color: string;
  label?: string;
  participantId?: string;
  teamNum?: number | null;
}

export interface FixtureSource {
  fixtureId: string;
  pick: 'winner' | string;
}

export interface Fixture {
  id: string;
  phase: string;
  roundIdx: number;
  roundLabel: string;
  slotIdx: number;
  group: string | null;
  court?: number | null;
  resting?: string[];
  team0: BracketTeamObj | null;
  team1: BracketTeamObj | null;
  source0: FixtureSource | null;
  source1: FixtureSource | null;
  matchId: string | null;
  winnerSide: number | 'draw' | null;
  isBye: boolean;
}

export interface Competition {
  id: string;
  kind: 'league' | 'tournament' | string;
  name: string;
  format: string;
  rankingMode: 'pairs' | 'individual' | 'both' | string;
  winPts: number;
  drawPts?: number;
  lossPts: number;
  setBonusPts?: number;
  gameBonusPts?: number;
  numGroups?: number;
  advancePerGroup?: number;
  courtsCount?: number;
  status?: 'active' | 'finished' | string;
  finishedAt?: number | null;
  defaultRules?: Partial<MatchRules>;
  participants: Participant[];
  fixtures: Fixture[];
  createdAt?: number;
  syncCode?: string;
  syncUpdatedAt?: number;
}

export interface CompetitionScoringConfig {
  winPts: number;
  lossPts: number;
  drawPts: number;
  setBonusPts: number;
  gameBonusPts: number;
}

export interface EloLevelInfo {
  level: string;
  levelNum: number;
  tier: string;
  color: string;
  icon: string;
  elo: number;
}

export interface EloPlayerStepResult {
  name: string;
  key: string;
  eloBefore: number;
  delta: number;
  eloAfter: number;
  k: number;
}

export interface MatchEloStep {
  matchId: string;
  winner: number | null;
  isDraw: boolean;
  diffGames: number;
  isBlowout: boolean;
  multiplier: number;
  pair0: { avgBefore: number; expPct: number; players: EloPlayerStepResult[] };
  pair1: { avgBefore: number; expPct: number; players: EloPlayerStepResult[] };
}

export interface EloHistoryItem {
  matchId: string;
  delta: number;
  newElo: number;
  date: number;
}

export interface EloRatingsResult {
  playerRatings: Record<string, number>;
  playerMatchCount: Record<string, number>;
  playerLastDelta: Record<string, number>;
  playerHistory: Record<string, EloHistoryItem[]>;
  matchEloMap: Record<string, MatchEloStep>;
}

export interface StandingRow {
  rank?: number;
  name: string;
  key: string;
  color: string;
  elo: number;
  lastDelta: number;
  finishedMatches: number;
  pts: number;
  matches: number;
  wins: number;
  draws: number;
  losses: number;
  setsWon: number;
  setsLost: number;
  setsDiff: number;
  gamesWon: number;
  gamesLost: number;
  gamesDiff: number;
  winners: number;
  ue: number;
  fe: number;
  shots: Record<string, number>;
  srvPtsWon: number;
  srvPtsTotal: number;
  firstServeIn: number;
  doubleFaults: number;
}

export interface TeamStatsAggregate {
  ptsWon: number;
  winners: number;
  ue: number;
  fe: number;
  shots: Record<string, number>;
  srvPtsWon: number;
  srvPtsTotal: number;
  retPtsWon: number;
  retPtsTotal: number;
  firstServeIn: number;
  doubleFaults: number;
  bpWon: number;
  bpTotal: number;
  bpSaved: number;
  bpFaced: number;
  gpWon: number;
  gpTotal: number;
  gpSrvWon: number;
  gpSrvTotal: number;
  gpRetWon: number;
  gpRetTotal: number;
  keyWon: number;
  keyTotal: number;
  maxPtStreak: number;
  gamesWon: number;
  srvGamesWon: number;
  srvGamesTotal: number;
  maxGameStreak: number;
}

export interface PlayerStatsAggregate {
  team: number;
  playerIdx: number;
  name: string;
  color: string;
  winners: number;
  ue: number;
  fe: number;
  shots: Record<string, number>;
  srvPtsTotal: number;
  srvPtsWon: number;
  firstServeIn: number;
  doubleFaults: number;
  srvGamesWon: number;
  srvGamesTotal: number;
}

export interface MatchAnalyticsResult {
  st: ComputedMatchState;
  T: TeamStatsAggregate[];
  P: PlayerStatsAggregate[];
  pts: PointRecord[];
  games: GameRecord[];
  momentum: number[];
  setBoundaries: number[];
  insights: string[];
  totalPts: number;
}

export interface RankingContext {
  scope: string;
  id: string;
  title: string;
  subtitle: string;
  entityMode: string;
  primaryMetric: string;
  comp: Competition | null;
  scoring: CompetitionScoringConfig | null;
  sortKey: string;
  players: StandingRow[];
}

export interface SharedRanking {
  version: number;
  id: string;
  name: string;
  subtitle: string;
  entityMode: string;
  primaryMetric: string;
  timestamp: number;
  players: StandingRow[];
}

export interface Prefs {
  theme: string;
  sound: boolean;
  voice: boolean;
  vibrate: boolean;
  shotPrompt: boolean;
  changeoverAlerts: boolean;
  changeoverTimer: number;
  wakeLock: boolean;
  rankingName: string;
  rankingId: string;
  dailyWinPts: number;
  dailyLossPts: number;
  syncServerUrl: string;
  backupIncludeCards: boolean;
  lastBackupAt: number;
  changesSinceBackup: number;
  backupPromptDismissedAt: number;
  [key: string]: unknown;
}

export interface Preset {
  mode: string;
  matchContext: string;
  compId: string;
  fixtureId: string;
  stageLabel: string;
  teams: MatchTeam[];
  totalSets: number;
  setsToWin: number;
  gamesPerSet: number;
  deuceRule: string;
  tiebreakAt: number;
  tiebreakPoints: number;
  finalSet: string;
  changeoverRule: string;
  firstServer: number[];
  secondServerIdx: number | null;
  shotPrompt: boolean;
  [key: string]: unknown;
}

export interface QuickScoreState {
  mode: string;
  compId: string | null;
  fixtureId: string | null;
  fixtureKey: string;
  stageLabel: string;
  teams: MatchTeam[];
  selPartIds: string[];
  useManualTeams: boolean;
  activeSlot: number;
  sets: Array<[number | null, number | null]>;
  wo: boolean;
  winner: string | number;
  hasSuperTbFinal: boolean;
}

export interface PlayerCardDraft {
  id: string;
  name: string;
  nickname: string;
  nameKey?: string;
  category: string;
  age: string;
  position: string;
  hand: string;
  bestShot: string;
  theme: string;
  metalFinish: string;
  metalCustom?: boolean;
  bgMode: string;
  showAppBrand: boolean;
  zoom: number;
  offsetX: number;
  offsetY: number;
  origPhoto: string | null;
  cutoutPhoto: string | null;
  origHasAlpha: boolean;
  updatedAt?: number;
}

export interface PlayerCardLogos {
  logo1: string | null;
  logo2: string | null;
  logo2Disabled: boolean;
  subTitle: string;
}

export interface CompFormState {
  id: string | null;
  kind: string;
  name: string;
  format: string;
  rankingMode: string;
  winPts: number;
  drawPts: number;
  lossPts: number;
  setBonusPts: number;
  gameBonusPts: number;
  numGroups: number;
  advancePerGroup: number;
  courtsCount: number;
  defaultRules: Partial<MatchRules>;
}

export interface UiState {
  route: string;
  qrModalOpen: boolean;
  obsModalOpen: boolean;
  supportModalOpen: boolean;
  obsSelectedPos: string;
  statsId: string | null;
  sharedMatch: Match | null;
  sharedRanking: SharedRanking | null;
  playerRankingView: string;
  playerScope: string;
  dailyTimeFilter: string;
  playerEntityMode: string;
  selectedLeagueId: string | null;
  selectedTournId: string | null;
  selectedGroupFilter: string;
  playerSort: string;
  playerSortScope: string | null;
  compFilter: string;
  compId: string | null;
  compTab: string;
  compModal: string | null;
  compFormState: CompFormState | null;
  quickScoreFixtureId: string | null;
  quickScoreState: QuickScoreState | null;
  compSyncConnected: Record<string, boolean>;
  compLastSyncAt: Record<string, number>;
  compSyncSilent?: boolean;
  liveId: string | null;
  liveMatch: Match | null;
  liveConnected: boolean;
  statsSetFilter: string;
  histQuery: string;
  histFilter: string;
  shotSheet: { team: number } | null;
  menuOpen: boolean;
  editNamesOpen: boolean;
  secondSrvPrompt: boolean;
  changeoverOverlay: { title: string; sub: string; secondsLeft: number; total?: number } | null;
  setSummaryOverlay: { setIdx: number } | null;
  matchEndDismissed: boolean;
  voiceListening: boolean;
  playerCardReturnRoute: string;
  playerCardDraft: PlayerCardDraft | null;
  playerCardDraftDirty: boolean;
  playerCardTouchDrag: boolean;
  playerCardAiBusy: boolean;
  playerCardAiStatus: string;
  playerCardAiText: string;
  isOnline: boolean;
  pwaInstallPrompt: BeforeInstallPromptEvent | null;
  pwaInstalled: boolean;
  swStatus: string;
  swUpdateReady: boolean;
  swRegistration: ServiceWorkerRegistration | null;
  storagePersisted: boolean | null;
  storageUsageBytes: number | null;
  storageQuotaBytes: number | null;
  lsQuotaWarned: boolean;
  _reloadingForSw?: boolean;
}

export interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export interface BackupPayloadV3 {
  version: 3;
  app: 'padel-control-se';
  exportedAt: number;
  matches: Match[];
  competitions: Competition[];
  prefs: Prefs;
  preset: Preset;
  activeMatch: Match | null;
  rankingVault: Record<string, SharedRanking>;
  playerCardLogos?: PlayerCardLogos;
  playerCards?: PlayerCardDraft[];
}
