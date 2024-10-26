export interface DashboardProps {
  user: string;
  date: string;
  status: "Pending" | "Scheduled" | "Done";
  freight: number;
  address: string;
  date_schedule?: string;
}
