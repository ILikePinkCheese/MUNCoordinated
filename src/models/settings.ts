export interface SettingsData {
  moveQueueUp: boolean;
  timersInSeparateColumns: boolean;
  autoNextSpeaker: boolean;
  autoCaucusTimer: boolean;
  motionVotes?: boolean;

  motionsArePublic?: boolean;
}

export const DEFAULT_SETTINGS: Required<SettingsData> = {
  moveQueueUp: false,
  timersInSeparateColumns: false,
  autoNextSpeaker: false,
  autoCaucusTimer: true,

  motionVotes: false,
  motionsArePublic: false,
};