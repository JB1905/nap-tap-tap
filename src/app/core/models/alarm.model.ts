export interface Alarm {
  label: string;
  repeat: number[];
  time: string;
  sound: string;
  snooze: boolean;
  active: boolean;
  id: string;
}
