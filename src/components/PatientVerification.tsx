import { useState } from 'react';
import { Button } from '../components/ui/button'; // Adjust the import based on your UI library
import { Input } from '../components/ui/input'; // Adjust the import based on your UI library
import { toast } from 'react-hot-toast';
import { getErrorMessage } from '../utils/apiErrorHandler';

const PatientVerification = () => {
    const [name, setName] = useState("");
    const [phno, setPhno] = useState("");
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [otpResendDisabled, setOtpResendDisabled] = useState(false);
    const [countdown, setCountdown] = useState(60);

    const handleVerify = async () => {
        try {
            // await consultationService.sendOtp(phno);
            toast.success("OTP sent successfully!", {
                duration: 4000,
                style: {
                    background: '#4caf50',
                    color: '#fff',
                },
            });
            setIsOtpSent(!isOtpSent);
            setOtpResendDisabled(true);

            const timer = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        setOtpResendDisabled(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

        } catch (error) {
            toast.error(getErrorMessage(error));
            console.error("OTP sending error:", error);
        }
    };

    const handleOtpSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // const isValid = await consultationService.verifyOtp(phno, otp);
            // if (isValid) {
            //   toast.success("Phone number verified successfully!");
            // } else {
            //   toast.error("Invalid OTP. Please try again.");
            // }
        } catch (error) {
            toast.error(getErrorMessage(error));
            console.error("OTP verification error:", error);
        }
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                </label>
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="md:w-[60%]"
                />
            </div>
            <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact No.
                </label>
                <div className="contact flex gap-2">
                    <Input
                        value={"+91"}
                        className="w-[60px]"
                        disabled
                    />
                    <Input
                        value={phno}
                        onChange={(e) => setPhno(e.target.value)}
                        type="tel"
                        pattern="[0-9]{10}"
                        required
                        disabled={isOtpSent}
                        className="flex-1 max-w-[200px] tracking-wider"
                    />
                    {!isOtpSent ?
                        (
                            <Button
                                className="py-3 text-sm w-[100px] bg-gray-700"
                                onClick={handleVerify}
                                disabled={name.length === 0 || phno.length !== 10}
                            >
                                Send OTP
                            </Button>

                        )
                        :
                        (<div className="flex gap-5 justify-bottom">
                            <Button
                                className="py-3 text-sm w-[150px] bg-gray-700"
                                onClick={handleVerify}
                                disabled={phno.length !== 10 || otpResendDisabled}
                            >
                                {otpResendDisabled ? `Resend OTP (${countdown}s)` : "Resend OTP"}
                            </Button>
                            <p className="underline cursor-pointer" onClick={() => { setIsOtpSent(!isOtpSent) }}>Change Phone No.</p>
                        </div>)
                    }

                </div>
                {isOtpSent && (
                    <form className="flex gap-2 mt-2">
                        <div className="spacing w-[60px]"></div>
                        {[...Array(6)].map((_, index) => (
                            <Input
                                key={index}
                                value={otp[index] || ''}
                                onChange={(e) => {
                                    const newOtp = otp.split('');
                                    newOtp[index] = e.target.value;
                                    setOtp(newOtp.join(''));
                                    if (e.target.value && index < 5) {
                                        document.getElementById(`otp-input-${index + 1}`)?.focus();
                                    }
                                }}
                                id={`otp-input-${index}`}
                                placeholder="0"
                                className="flex-1 max-w-[50px] text-center border rounded-md"
                                maxLength={1}
                                required
                            />
                        ))}
                        <Button className="py-3 text-sm tracking-wider bg-gray-700 w-[100px]"
                            disabled={otp.length !== 6}
                            onClick={handleOtpSubmit}>
                            Submit
                        </Button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default PatientVerification; 