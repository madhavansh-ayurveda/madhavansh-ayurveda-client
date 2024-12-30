import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Clock,
  Calendar,
  User,
  FileText,
  CheckCircle,
  WifiOff,
  Wifi,
} from "lucide-react";
import { api } from "../api/axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-hot-toast";

import { ConsultationResponse } from "../types/index";

export default function ConsultationTracker() {
  const [consultationId, setConsultationId] = useState("");
  const [fetchComplete, setFetchComplete] = useState(false);
  const [consultation, setConsultation] = useState<ConsultationResponse | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    console.log(id);
    if (id) {
      setConsultationId(id);
      handleFetchConsultation();
    }
  }, [consultationId]);

  const handleFetchConsultation = async () => {
    if (!consultationId.trim()) {
      toast.error("Please enter a consultation ID");
      return;
    }

    setLoading(true);
    try {
      const response = await api(`/consultations/${consultationId.trim()}`);
      console.log(response);
      setConsultation(response.data.data);
    } catch (error) {
      console.error("Error fetching consultation:", error);
      toast.error(
        "Failed to fetch consultation. Please check the ID and try again."
      );
    } finally {
      setLoading(false);
    }
    setFetchComplete(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!consultation && consultationId && fetchComplete) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Consultation not found
          </h2>
          <p className="mt-2 text-gray-600">
            The consultation you're looking for doesn't exist or has been
            removed.
          </p>
        </div>
      </div>
    );
  }

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    confirmed: "bg-blue-100 text-blue-800",
    completed: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Track Your Consultation
        </h1>
        <div className="mb-6">
          <Input
            type="text"
            placeholder="Enter Consultation ID"
            value={consultationId}
            onChange={(e) => setConsultationId(e.target.value)}
            className="mb-4"
          />
          <Button
            onClick={() => {
              handleFetchConsultation();
            }}
            className="w-full"
          >
            Fetch Consultation
          </Button>
        </div>

        {consultation && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Header */}
            <div className="bg-primary-50 p-6 border-b">
              <h1 className="text-2xl font-semibold text-gray-900">
                Consultation Details
              </h1>
              <div className="flex gap-20">
                <div className="">
                  <p className="mt-2 text-sm text-gray-600">
                    ID: {consultation._id}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Name: {consultation.name}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Payment Status:
                    <span className="text-green-900 mx-2">
                      {consultation.paymentStatus}
                    </span>
                  </p>
                </div>
                <div className="mode flex gap-3">
                  {consultation.mode === "online" ? (
                    <Wifi className="h-5 w-5 text-gray-400 mt-1" />
                  ) : (
                    <WifiOff className="h-5 w-5 text-gray-400 mt-1" />
                  )}
                  <p className="mt-2 text-sm text-gray-600">
                    Mode: <span>{consultation.mode}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Status Banner */}
            <div className={`px-6 py-3 ${statusColors[consultation.status]}`}>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">
                  Status:{" "}
                  {consultation.status.charAt(0).toUpperCase() +
                    consultation.status.slice(1)}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Appointment Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Date</p>
                      <p className="text-gray-900">
                        {new Date(consultation.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Time</p>
                      <p className="text-gray-900">{consultation.timeSlot}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        Doctor
                      </p>
                      <p className="text-gray-900">
                        {consultation.doctor.doctorName}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        Consultation Type
                      </p>
                      <p className="text-gray-900">
                        {consultation.consultationType}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Symptoms */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Reported Symptoms
                </h3>
                <p className="text-gray-700">{consultation.symptoms}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
