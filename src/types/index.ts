export interface User {
  _id: string;
  name: string;
  contact: string;
  email?: string;
  role?: string;
  age?: number;
  address?: string;
}
export interface Consultation {
  name: string;
  contact: string;
  consultationType:
  | "General Consultation"
  | "Follow-up"
  | "Specific Treatment"
  | "Emergency";
  doctor: {
    doctorId: string;
    doctorName: string;
  };
  previousConsultationId?: string;
  date: Date;
  timeSlot: string;
  mode: "online" | "offline";
  symptoms?: string;
}

export interface ConsultationResponse extends Consultation {
  _id: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  amount: number;
  notes: string;
  pescription: {
    instructions: string;
    file: [string];
  };
  paymentStatus: "pending" | "completed" | "refunded";
  additionalInfo: {
    img: [String];
    file: [String];
  };
  createdAt: string;
  updatedAt: string;
}

export interface Prescription {
  medicines: Array<{
    name: string;
    dosage: string;
    duration: string;
  }>;
  instructions: string;
}

export interface Slot {
  startTime: string;
  endTime: string;
  isBooked?: boolean;
}

export interface Availability {
  days: string[];
  slots: Slot[][];
  _id?: string;
}

export interface Doctor {
  _id: string;
  name: string;
  email: string;
  phone: string;
  specialization: string[];
  department: string[];
  experience: number;
  profileImage: string;
  qualification: string;
  registrationNumber: string;
  status: "active" | "inactive";
  availability: Availability;
}

export interface ApiDoctorSchema {
  _id: string;
  name: string;
  email: string;
  phone: string;
  experience: number;
  profileImage: string;
  qualification: string;
  department: string[];
  registrationNumber: string;
  specialization: string[];
  status: "active" | "inactive";
  availability: Availability;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  category: {
    _id: string;
    name: string;
  };
  author: {
    _id: string;
    name: string;
  };
  tags: string[];
  status: 'published' | 'draft';
  views: number;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  createdAt: string;
  updatedAt: string;
}

export interface BlogListResponse {
  success: boolean;
  message?: string;
  count: number;
  currentPage: number;
  totalPages: number;
  data: BlogPost[];
}