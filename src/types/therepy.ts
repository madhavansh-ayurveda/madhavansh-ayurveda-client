// types.ts
export interface TherapyCategory {
    name: string;
    icon?: string;
    subcategories?: TherapyCategory[];
    therapies?: string[];
  }
  
  export interface TherapySubcategory {
    name: string;
    therapies: string[];
  }