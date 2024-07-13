export const formatDate = (date) => {
    // Get the month, day, and year
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();
  
    const formattedDate = `${day}-${month}-${year}`;
  
    return formattedDate;
  };
  
  export function dateFormatter(dateString) {
    const inputDate = new Date(dateString);
  
    if (isNaN(inputDate)) {
      return "Invalid Date";
    }
  
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, "0");
    const day = String(inputDate.getDate()).padStart(2, "0");
  
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  
  export function getInitials(fullName) {
    // Check if fullName is a string and not empty
    if (typeof fullName !== 'string' || fullName.trim() === '') {
      return ""; // Return empty string if fullName is not valid
    }
  
    // Split the full name by spaces
    const names = fullName.trim().split(" ");
  
    // Initialize an array to hold initials
    const initials = [];
  
    // Iterate over the split names and extract the first character of each
    for (let i = 0; i < Math.min(names.length, 2); i++) {
      const name = names[i];
      if (name.length > 0) {
        initials.push(name[0].toUpperCase());
      }
    }
  
    // Check if initials array is empty
    if (initials.length === 0) {
      return ""; // Return empty string if no valid initials were found
    }
  
    // Join the initials array into a string
    const initialsStr = initials.join("");
  
    return initialsStr;
  }
  
  
  export const PRIOTITYSTYELS = {
    high: "text-red-600",
    medium: "text-yellow-600",
    low: "text-blue-600",
  };
  
  export const TASK_TYPE = {
    todo: "bg-blue-600",
    "in progress": "bg-yellow-600",
    completed: "bg-green-600",
  };
  
  export const BGS = [
    "bg-blue-600",
    "bg-yellow-600",
    "bg-red-600",
    "bg-green-600",
  ];

  // export function getInitials(fullName) {
  //   const names = fullName.split(" ");
  
  //   const initials = names.slice(0, 2).map((name) => name[0].toUpperCase());
  
  //   const initialsStr = initials.join("");
  
  //   return initialsStr;
  // }