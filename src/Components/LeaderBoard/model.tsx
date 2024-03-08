export interface Data {
    branch: "CSE" | "ECE-META" |"CIVIL"| "EE" | "MECH" | "MSC-ITEP" | "MTECH" | "PHD";
    score: string;
  }
  
  export interface TableProps {
    data: Data[];
    showTopThree: boolean;
  }