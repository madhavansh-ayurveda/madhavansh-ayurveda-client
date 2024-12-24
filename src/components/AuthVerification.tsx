import { useEffect, useRef, useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { toast } from 'react-hot-toast';
import { getErrorMessage } from '../utils/apiErrorHandler';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/store/hooks';
import { storeTempUser } from '../store/features/authSlice';
import { authApi } from '@/api/authApi';
import Cookies from 'js-cookie';

const AuthVerification = () => {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const [otpResendDisabled, setOtpResendDisabled] = useState(false);
    const [countdown, setCountdown] = useState(60);
    const dispatch = useDispatch();
    const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const { user } = useAppSelector(state => state.auth);

    useEffect(() => {
        if (user) {
            setName(user.name ?? "");
            setContact(user.contact ?? "");
        }
    }, [user]);

    const handleSendOTP = async (e: React.MouseEvent) => {
        e.preventDefault();
        try {
            const response = await authApi.sendOtp(name, contact);
            const data = response.data.tempUser;

            if (response.success) {
                toast.success("OTP sent successfully!", {
                    duration: 4000,
                    style: {
                        background: "#4caf50",
                        color: "#fff",
                    },
                });
                setIsOtpSent(true);
                setOtpResendDisabled(true);
                setCountdown(60);
                setOtpValues(["", "", "", "", "", ""]);
                setTimeout(() => {
                    inputRefs.current[0]?.focus();
                }, 100);
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
            } else {
                const details = {
                    name: data.name,
                    contact: data.contact,
                    consultation: data.consultation
                };
                dispatch(storeTempUser(details));
                setIsOtpVerified(true);
                localStorage.setItem('authToken', response.data.token);
                Cookies.set('authToken', response.data.token, { expires: 7 });
                toast.success("Already Registered. Please Continue", {
                    duration: 4000,
                    style: {
                        background: "#4caf50",
                        color: "#fff",
                    },
                });
            }
        } catch (error) {
            toast.error(getErrorMessage(error));
            console.error("error in handle otp:", error);
        }
    };

    const handleOtpSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await authApi.verifyOtp(name, contact, otp);
            const data = response.data.tempUser;
            const details = {
                name: data.name,
                contact: data.contact,
                consultation: data.consultation
            };
            if (response.data) {
                localStorage.setItem('authToken', response.data.token);
                Cookies.set('authToken', response.data.token, { expires: 7 });

                toast.success("Phone number verified successfully!");
                setIsOtpVerified(true);
                dispatch(storeTempUser(details));
            } else {
                toast.error("Invalid OTP. Please try again.");
            }
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
                    disabled={isOtpVerified || !!user}
                    onChange={(e) => setName(e.target.value)}
                    className="md:w-[60%] focus:ring-1 focus:border-gray-100 focus:outline-none"
                />
            </div>
            <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact No.
                </label>
                <div className="contact flex gap-2">
                    <Input value={"+91"} className="w-[60px]" disabled />
                    <Input
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        type="tel"
                        pattern="[0-9]{10}"
                        required
                        disabled={isOtpSent || isOtpVerified || !!user}
                        className="flex-1 max-w-[200px] tracking-wider focus:ring-1 focus:ring-primary-500 focus:border-primary-500 focus:outline-none"
                    />
                    {!isOtpVerified && !user ? (
                        !isOtpSent ? (
                            <Button
                                className="py-3 text-sm w-[100px] bg-gray-700"
                                onClick={handleSendOTP}
                                disabled={contact.length !== 10}
                            >
                                Send OTP
                            </Button>
                        ) : (
                            <div className="flex gap-5 justify-bottom">
                                <Button
                                    className="py-3 text-sm w-[150px] bg-gray-700"
                                    onClick={handleSendOTP}
                                    disabled={contact.length !== 10 || otpResendDisabled}
                                >
                                    {otpResendDisabled
                                        ? `Resend OTP (${countdown}s)`
                                        : "Resend OTP"}
                                </Button>
                                <p
                                    className="underline cursor-pointer"
                                    onClick={() => {
                                        setIsOtpSent(!isOtpSent);
                                    }}
                                >
                                    Change Phone No.
                                </p>
                            </div>
                        )
                    ) : (
                        <p className="text-primary-900 flex justify-center items-center">
                            ✔ Verified
                        </p>
                    )}
                </div>
                {isOtpSent && !isOtpVerified && (
                    <form className="flex gap-2 mt-6">
                        <div className="flex gap-2">
                            {otpValues.map((value, index) => (
                                <input
                                    key={index}
                                    ref={(ref) => (inputRefs.current[index] = ref)}
                                    type="text"
                                    maxLength={1}
                                    value={value}
                                    onChange={(e) => {
                                        const newValue = e.target.value;
                                        if (newValue.match(/^[0-9]*$/)) {
                                            const newOtpValues = [...otpValues];
                                            newOtpValues[index] = newValue;
                                            setOtpValues(newOtpValues);
                                            setOtp(newOtpValues.join(""));

                                            // Auto-focus next input
                                            if (newValue && index < 5) {
                                                inputRefs.current[index + 1]?.focus();
                                            }
                                        }
                                    }}
                                    onKeyDown={(e) => {
                                        // Handle backspace
                                        if (
                                            e.key === "Backspace" &&
                                            !value &&
                                            index > 0
                                        ) {
                                            inputRefs.current[index - 1]?.focus();
                                        }
                                    }}
                                    className="w-10 h-10 text-center border rounded-lg text-md font-semibold 
                                focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none"
                                />
                            ))}
                        </div>
                        <Button
                            className="py-3 text-sm tracking-wider bg-gray-700 w-[100px]"
                            disabled={otpValues.some((val) => !val)}
                            onClick={handleOtpSubmit}
                        >
                            Submit
                        </Button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default AuthVerification; 