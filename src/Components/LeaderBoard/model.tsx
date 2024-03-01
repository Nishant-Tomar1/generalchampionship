export interface Data {
    branch: "CSE" | "ECE-META" |"CIVIL"| "EE" | "MECH" | "MSC" | "MTECH" | "PHD";
    score: string;
  }
  
  export interface TableProps {
    data: Data[];
    showTopThree: boolean;
  }