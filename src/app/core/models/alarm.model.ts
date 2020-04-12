export interface Alarm {
  label: string;
  message: string;
  repeat: number[];
  time: string;
  sound: string;
  snooze: boolean;
  active: boolean;
  id: string;
}
