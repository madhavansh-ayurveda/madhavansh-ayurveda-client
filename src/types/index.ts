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
  consultationType: 'General Consultation' | 'Follow-up' | 'Specific Treatment' | 'Emergency';
  doctor: {
    doctorId: string;
    doctorName: string;
  };
  previousConsultationId?: string;
  date: Date;
  timeSlot: string;
  symptoms?: string;
}

export interface ConsultationResponse extends Consultation {
  _id: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  amount: number;
  notes: string;
  pescription: {
    instructions: string;
    file: [string];
  }
  paymentStatus: 'pending' | 'completed' | 'refunded';
  additionalInfo: {
    img: [String],
    file: [String],
  }
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


export interface Doctor {
  _id: string;
  name: string;
  email: string;
  phone: string;
  specialization: string;
  experience: number;
  profileImage: string;
  qualification: string;
  registrationNumber: string;
  status: 'active' | 'inactive';
  availability: Array<{}>;
}

export interface ApiDoctorSchema {
  _id: string;
  name: string;
  email: string;
  phone: string;
  experience: number;
  profileImage: string;
  qualification: string;
  registrationNumber: string;
  specialization: string;
  status: 'active' | 'inactive';
  availability: Array<{}>;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
