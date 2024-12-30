import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { toast } from "react-hot-toast";
import { api } from "@/api/axios";

interface PaymentDetails {
  amount: number;
  consultationId: string;
  doctorName: string;
  date: string;
  timeSlot: string;
}

export const PaymentGateway = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [qrCode, setQrCode] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [paymentVerified, setPaymentVerified] = useState(false);

  const paymentDetails: PaymentDetails = location.state?.paymentDetails;

  useEffect(() => {
    if (!paymentDetails) {
      toast.error("Payment verification failed!", {
        duration: 4000,
        style: {
          background: "#4caf50",
          color: "#fff",
        },
      });
      navigate("/book-consultation");
      return;
    }
    generateQRCode();
  }, [paymentDetails]);

  const generateQRCode = async () => {
    try {
      const response = await api("/generate-qr");
      // const data = await response.json();
      console.log(response);
      setQrCode(response.data.qrCodeData);
    } catch (error) {
      console.error("Error generating QR code:", error);
      toast.error("Failed to generate payment QR code", {
        duration: 4000,
        style: {
          background: "#4caf50",
          color: "#fff",
        },
      });
    }
  };

  const handlePaymentVerification = async () => {
    setLoading(true);
    try {
      // Here you would typically verify the payment with your backend
      // For now, we'll just simulate a successful payment
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setPaymentVerified(true);
      toast.success("Payment verified successfully!", {
        duration: 4000,
        style: {
          background: "#4caf50",
          color: "#fff",
        },
      });

      // Navigate to success page or consultation details
      navigate(`/consultation/${paymentDetails.consultationId}`);
    } catch (error) {
      toast.error("Payment verification failed!", {
        duration: 4000,
        style: {
          background: "#4caf50",
          color: "#fff",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  if (!paymentDetails) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Complete Payment</h2>
          <p className="mt-2 text-gray-600">Scan the QR code to pay via UPI</p>
        </div>

        <div className="space-y-6">
          {/* Payment Details */}
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-gray-500">Amount:</div>
              <div className="text-gray-900 font-medium">
                ₹{paymentDetails.amount}
              </div>

              <div className="text-gray-500">Doctor:</div>
              <div className="text-gray-900">{paymentDetails.doctorName}</div>

              <div className="text-gray-500">Date:</div>
              <div className="text-gray-900">
                {new Date(paymentDetails.date).toLocaleDateString()}
              </div>

              <div className="text-gray-500">Time:</div>
              <div className="text-gray-900">{paymentDetails.timeSlot}</div>
            </div>
          </div>

          {/* QR Code */}
          {qrCode && (
            <div className="flex justify-center p-4 bg-white rounded-lg border">
              <img
                src={qrCode}
                alt="Payment QR Code"
                className="max-w-[200px]"
              />
            </div>
          )}

          {/* Instructions */}
          <div className="text-sm text-gray-600 space-y-2">
            <p>1. Open your UPI app (Google Pay, PhonePe, Paytm, etc.)</p>
            <p>2. Scan the QR code above</p>
            <p>3. Complete the payment</p>
            <p>4. Click on "I have made the payment" button below</p>
          </div>

          {/* Verification Button */}
          <Button
            onClick={handlePaymentVerification}
            disabled={loading || paymentVerified}
            className="w-full"
          >
            {loading ? "Verifying..." : "I have made the payment"}
          </Button>

          {/* Cancel Button */}
          <Button
            variant="outline"
            onClick={() => navigate("/book-consultation")}
            className="w-full"
          >
            Cancel Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;
